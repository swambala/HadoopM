Ext.define('App.controller.TaskAttemptDetail', {
    extend: 'Ext.app.Controller',
    config: {
        refs: {
            viewManager: 'viewmanager',
            back: 'taskattemptdetail button[action=back]',
			list: 'taskattemptdetail list'
        },

        control: {
            back: {
                tap: 'onBack'
            },
			list: {
                itemtap: 'onTaskAttemptCounterSelect'
            },
        }
    },
    onBack: function () {
		var views = this.getViewManager();
        views.back();
    },
	onTaskAttemptCounterSelect: function (list, index, target, record) {
		var me = this;
		//console.log(record.data.counter);
		
		var taskAttemptCountersStore = Ext.getStore("TaskAttemptCounters");
		taskAttemptCountersStore.add(record.data.counter);
		
		views = me.getViewManager();
		views.switchTo('taskattemptgroupdetail');	
	}
});