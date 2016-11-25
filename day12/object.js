var person = {
  name: 'Danbi',
  location: 'Seoul',
  hobbies: ['working', 'watching'],
  cat: {
    name: "Boo",
    hobbies: ["running", "sleeping"]
  },
  party: function(){
    console.log('Party party!!');
  }
};

person.work = function() {
  console.log("맥도날드에 오신 것을 환영합니다, 저는 " + this.name + ". 주문하시겠습니까?");
  console.log(this.location + "의 날씨는 참 좋지요?");
  console.log(this.cat.name + "의 일상과 " + this.cat.hobbies[1] + "에 관한 이야기를 들어 보시겠습니까?");
};
person.work();
