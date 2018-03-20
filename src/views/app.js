var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos();
    this.render();
  },

  // render: function() {
  //   console.log('hello world');
  //   new VideoListView({
  //     el: this.$('#videos'),
  //     collection: this.collection
  //   }).render();
  // },
  render: function() {
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/app.html')

});
