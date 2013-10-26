Ext.define('App.controller.MetricsContainers', {
    extend: 'Ext.app.Controller',
    config: {
        refs: {
            viewManager: 'viewmanager',
            back: 'metricscontainers button[action=back]'
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
    }
});