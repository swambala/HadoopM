Ext.define('App.controller.Metrics', {
    extend: 'Ext.app.Controller',
    config: {
        refs: {
            viewManager: 'viewmanager',
            back: 'metrics button[action=back]'
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