Ext.define('App.controller.MetricsNodes', {
    extend: 'Ext.app.Controller',
    config: {
        refs: {
            viewManager: 'viewmanager',
            back: 'metricsnodes button[action=back]'
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