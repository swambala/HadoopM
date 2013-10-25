Ext.define('App.controller.TaskAttemptGroupDetail', {
    extend: 'Ext.app.Controller',
    config: {
        refs: {
            viewManager: 'viewmanager',
            back: 'taskattemptgroupdetail button[action=back]',
			list: 'taskattemptgroupdetail list'
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