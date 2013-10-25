Ext.define('App.controller.TaskDetail', {
    extend: 'Ext.app.Controller',
    config: {
        refs: {
            viewManager: 'viewmanager',
            back: 'taskdetail button[action=back]',
			list: 'taskdetail list'
        },

        control: {
            back: {
                tap: 'onBack'
            },
			list: {
                itemtap: 'onTaskAttemptSelect'
            },
        }
    },
    onBack: function () {
		var views = this.getViewManager();
        views.back();
    },
	onTaskAttemptSelect:function (list, index, target, record) {
		var me = this;
		App.app.setHadoopParams.attemptId = record.data.id
		var	taskAttemptDetailPanel =   '<div ><div class="info-panel">State : '+record.data.state+'</div >'+
							'<div ><div class="info-panel">Id : '+App.app.setHadoopParams.attemptId+'</div >'+
							'<div ><div class="info-panel">Assigned Container Id : '+record.data.assignedContainerId+'</div >';
		var taskAttemptDetailContent = Ext.getCmp("taskAttemptDetailContent");
		taskAttemptDetailContent.setHtml(taskAttemptDetailPanel);
		
		Ext.Ajax.request({
			url: base_path+'json/taskAttemptCounters.json',
			success: function(response, opts) {
				var record = Ext.decode(response.responseText);
				var taskAttemptCounterGroupsarray = record.JobTaskAttemptCounters.taskAttemptCounterGroup;
				var TaskAttemptCounterGroupsStore = Ext.getStore("TaskAttemptCounterGroups");
				TaskAttemptCounterGroupsStore.add(taskAttemptCounterGroupsarray);
			},
			failure: function(response, opts) {
				console.log('server-side failure with status code ' + response.status);
			}
		});
		
		views = me.getViewManager();
		views.switchTo('taskattemptdetail');	
	}
	
});