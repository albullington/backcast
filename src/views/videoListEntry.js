var VideoListEntryView = Backbone.View.extend({
  
  // el: '.video-list',
  // model: video
  
  initialize: function() {
    console.log(this.el);
    // exampleVideoData.render();
  },

  render: function() {
    this.$el.html(this.template(this.model.attributes));
    return this;
  },

  template: templateURL('src/templates/videoListEntry.html')

});
