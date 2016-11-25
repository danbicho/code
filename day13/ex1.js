var posts = []; //배열 선언

var post = {
  url: 'http://jsonplaceholder.typicode.com/posts/',
  $el: $('<div class="post">').appendTo($('body')),
  //이름이  post인 div를 만들고 body 안에 넣는다.
  initialize: function(id) { //id를 argument로 받는 function 선언
    this.$el.attr('id',id); //post>$el에 id를 argument로 받는 id 선언
    this.url += id; //post>url에  id를 저장
    var thisPost = this; //post를 thisPost에 저장
    $.get(this.url, function(data) {
      console.log(this), //function 안에 function의 this는 window를 가리킨다
      thisPost.attributes = data,
      thisPost.render()
    });
    posts.push(this);
  },
  render: function() {
    this.$el.append([
      $('<div>').addClass('title').text(this.attributes.title), //div class=title과 같다.
      $('<div>').addClass('body').text(this.attributes.body)
    ]);
  }
};

post.initialize(1);
