var VideoListView = Backbone.View.extend({
  //el is equal to .list
  
  //collection is equal to exampleVideoData
  
  initialize: function() {
  },
  
  
    

  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());
    for (var i = 0; i < this.collection.length; i++) {
      this.renderVideoListEntry(this.collection.models[i]);  
    }
    // console.log(this.$el);
    // console.log(this.el);
    return this;
  },
  
  // render videolistentries
  renderVideoListEntry: function(video) {
    console.log(video);
    new VideoListEntryView({
      el: '.video-list',
      model: video
    }).render();
  },

  template: templateURL('src/templates/videoList.html')

});
