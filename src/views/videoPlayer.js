var VideoPlayerView = Backbone.View.extend({
  
  initialize: function() {
    this.listenTo(this.collection, 'select', this.render);
  },
  
  render: function() {
    //console.log(this.collection);
    // this.$el.append('<div class="loading">Please wait...</div>');
    // console.log(this.collection.models[0]);
    this.$el.html(this.template(this.collection.models[0].attributes));
    // replace [0] with the selected video from appView
    return this;
  },

  template: templateURL('src/templates/videoPlayer.html')

});
