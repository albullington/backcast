var VideoListEntryView = Backbone.View.extend({
    
  initialize: function() {
  },
  
  events: {
    // this.el
    // "video-list-entry media"
    'click .video-list-entry-title': 'callModelSelect' 
  },
  
  callModelSelect: function() {
    this.model.select();
  },

  render: function() {
    this.$el.append(this.template(this.model.attributes));    
    return this;
  },

  template: templateURL('src/templates/videoListEntry.html')

});
