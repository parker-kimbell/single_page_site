apos.define('multiimage-widgets', {
  extend: 'apostrophe-widgets',
  construct: function(self, options) {
    debugger;
    self.play = function($widget, data, options) {
      debugger;
      $widget.find('[data-drawer-title]').click(function() {
        debugger;
        $widget.find('[data-drawer]').toggle();
        // Stop bubbling and default behavior for jQuery event
        return false;
      });
    };
  }
});
