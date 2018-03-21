var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos(window.exampleVideoData);
    this.render();
    this.renderVideoList();
    this.renderVideoPlayer();
    this.renderSearchView();
    //keep track of the video that's selected
  },

  render: function() {
    this.$el.html(this.template());
    return this;
  },

  renderVideoList: function() {
    new VideoListView({
      el: this.$('.list'), 
      collection: this.videos
    }).render();
  },
  
  renderVideoPlayer: function() {
    new VideoPlayerView({
      el: this.$('.player'),
      collection: this.videos
    }).render();
  },
  
  renderSearchView: function() {
    new SearchView({
      el: this.$('.search'),
      // collection: this.videos
    }).render();
  },
  

  template: templateURL('src/templates/app.html')

});
