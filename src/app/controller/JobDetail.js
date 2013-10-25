Ext.define('App.controller.JobDetail', {
    extend: 'Ext.app.Controller',
    config: {
        refs: {
            viewManager: 'viewmanager',
            back: 'jobdetail button[action=back]',
			list: 'jobdetail list'
        },

        control: {
            back: {
                tap: 'onBack'
            },
			list: {
                itemtap: 'onTaskSelect'
            },
        }
    },
    onBack: function () {
		var views = this.getViewManager();
        views.back();
    },
	onTaskSelect:function (list, index, target, record) {
		var me = this;
		App.app.setHadoopParams.taskId = record.data.id
		
		if(App.app.setHadoopParams.taskId != ''){
			
			var	taskDetailPanel =   '<div ><div class="info-panel">State : '+record.data.state+'</div >'+
							'<div ><div class="info-panel">Id : '+App.app.setHadoopParams.taskId+'</div >';
			var taskDetailContent = Ext.getCmp("taskDetailContent");
			taskDetailContent.setHtml(taskDetailPanel);
			
			//Get Tasks of required Application
			Ext.Ajax.request({
				//url: base_path+'proxy/'+App.app.setHadoopParams.appId+'/ws/v1/mapreduce/jobs/'+App.app.setHadoopParams.jobId+'/tasks/'+App.app.setHadoopParams.taskId+'/attempts',
				url: base_path+'json/taskAttempts.json',
				success: function(response, opts) {
					var record = Ext.decode(response.responseText);
					var taskAttemptsarray = record.taskAttempts.taskAttempt;
					var taskAttemptsStore = Ext.getStore("TaskAttempts");
					taskAttemptsStore.add(taskAttemptsarray);
				},
				failure: function(response, opts) {
					console.log('server-side failure with status code ' + response.status);
				}
			});
			
			//Set value for Progress chart
			/* var ProgressStore = new Ext.data.JsonStore({
				fields: ['name', 'value'],
				data: [{name:0,value:record.data.progress}]
			});
			var appProgress = Ext.getCmp("appProgress");
			appProgress.setStore(ProgressStore);
			//Get Jobs of required Application
			Ext.Ajax.request({
				//url: base_path+'proxy/'+App.app.setHadoopParams.appId+'/ws/v1/mapreduce/jobs',
				url: base_path+'json/jobs.json',
				success: function(response, opts) {
					var record = Ext.decode(response.responseText);
					var jobsarray = record.jobs.job;
					var jobsStore = Ext.getStore("Jobs");
					jobsStore.add(jobsarray);
				},
				failure: function(response, opts) {
					console.log('server-side failure with status code ' + response.status);
				}
			});
			
			views = me.getViewManager();
			views.switchTo('appdetail'); */
			views = me.getViewManager();
			views.switchTo('taskdetail');
		}else{
			Ext.Msg.alert('TASKID Required', 'Please Enter Your Task ID', Ext.emptyFn);
		}
	}
	
});