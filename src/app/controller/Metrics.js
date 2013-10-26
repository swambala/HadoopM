Ext.define('App.controller.Metrics', {
    extend: 'Ext.app.Controller',
    config: {
        refs: {
            viewManager: 'viewmanager',
            back: 'metrics button[action=back]',
			list: 'metrics list'
        },

        control: {
            back: {
                tap: 'onBack'
            },
			list: {
				itemtap:'onMetricsInfoSelect'
			}
        }
    },
    onBack: function () {
		var views = this.getViewManager();
        views.back();
    },
	onMetricsInfoSelect:function (list, index, target, record) {
		var me = this;
		views = me.getViewManager();
		views.switchTo(record.data.type);
	}
});