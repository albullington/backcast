var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos(exampleVideoData);
    // console.log(this.videos);
    this.render();
    this.renderVideoList();
  },

  render: function() {
    this.$el.html(this.template());
    return this;
  },

  renderVideoList: function() {
    new VideoListView({
      el: '.list', 
      collection: this.videos
    }).render();
  },

  template: templateURL('src/templates/app.html')

});
