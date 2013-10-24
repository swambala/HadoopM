Ext.define('App.controller.Scheduler', {
    extend: 'Ext.app.Controller',
    config: {
        refs: {
            viewManager: 'viewmanager',
            back: 'scheduler button[action=back]'
        },

        control: {
            back: {
                tap: 'onBack'
            }
        }
    },
    onBack: function () {
		var views = this.getViewManager();
        views.back();
    },
	
});