var posts = [];

var post_factory = function(id) {
  var post = {
    url: 'http://jsonplaceholder.typicode.com/posts/',
    $el: $('<div class="post">').appendTo($('body')),

    initialize: function(id) {
      this.$el.attr('id',id);
      this.url += id;
      var thisPost = this;
      $.get(this.url, function(data) {
        console.log(this),
        thisPost.attributes = data,
        thisPost.render()
      });
      posts.push(this);
    },
    render: function() {
      this.$el.append([
        $('<div>').addClass('title').text(this.attributes.title),
        $('<div>').addClass('body').text(this.attributes.body),
        $('<br>')
      ]);
    },
    highlight: function() {
      this.active = true;
      this.$el.toggleClass('highlight');
    }
  };
  post.initialize(id);
  post.highlight();
};


for ( var i = 75; i < 91; i++) {
  post_factory(i);
}
