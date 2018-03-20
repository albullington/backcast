var VideoListEntryView = Backbone.View.extend({
  
  initialize: function() {
    exampleVideoData.render();
  },

  render: function() {
  //   new videoList({
  //     el: this.$('#videos'),
  //     collection: this.exampleVideoData
  //   }).render();
  // }
    this.$el.html(this.template(this.model.attributes));
    return this;
  },

  template: templateURL('src/templates/videoListEntry.html')

});
