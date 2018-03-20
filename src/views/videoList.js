var VideoListView = Backbone.View.extend({

// initialize and render / on when the collection changes re-render
  // initialize: function() {
  //   this.exampleVideoData.on('change', this.render, this);
  // },
  
  initialize: function() {
    exampleVideoData.render();
  },

  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/videoList.html')

});
