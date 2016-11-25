var name;
var age;
var gender;
var is_member;
var thirsty;
var drink_of_choice;

//웹사이트 멤버 아니거나 21살 이하 만약(if)

//만약(if) 웹사이트 멤버고 21살 이상
//목이 마르다 어떤 음료 원하는지

//우유 좋아하면 주고
//아니면 강퇴

is_member = prompt('웹사이트 멤버입니까? (네/아니오)');
age = Number(prompt('몇 살입니까?'));
gender = prompt('성별을 알려주세요 (남/여)');

if (is_member === '아니오' || age <= 21) {
  if (gender === '남') {
    alert('사장님 클럽에 가입할 수 없습니다.');
  } else {
    alert('사모님 클럽에 가입할 수 없습니다.');
  }
} else {
  if (gender === '남') {
    alert('환영합니다. 미스터');
  } else {
    alert('환영합니다. 미스');
  }

  thirsty = prompt('목이 마릅니까? (네/아니오)');
  if (thirsty === '네') {
    drink_of_choice = prompt('가장 좋아하는 음료는 무엇입니까?');
    if (drink_of_choice === '우유'){
      window.location = 'http://www.google.com';
    } else {
      name = prompt('이름을 알려주세요');
      alert ('네,' +name+ '님 지금 즉시' +drink_of_choice+ '드리겠습니다.');
    }
  }
}
