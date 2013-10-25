Ext.define('App.controller.AppDetail', {
    extend: 'Ext.app.Controller',
    config: {
        refs: {
            viewManager: 'viewmanager',
            back: 'appdetail button[action=back]',
			list: 'appdetail list'
        },

        control: {
            back: {
                tap: 'onBack'
            },
			list: {
                itemtap: 'onJobSelect'
            },
        }
    },
    onBack: function () {
		var views = this.getViewManager();
        views.back();
    },
	onJobSelect:function (list, index, target, record) {
		var me = this;
		App.app.setHadoopParams.jobId = record.data.id
		
		if(App.app.setHadoopParams.jobId != ''){
			
			//Set value for Reduce Progress chart
			var jobReduceProgressStore = new Ext.data.JsonStore({
				fields: ['name', 'value'],
				data: [{name:0,value:record.data.reduceProgress}]
			});
			var jobReduceProgress = Ext.getCmp("jobReduceProgress");
			jobReduceProgress.setStore(jobReduceProgressStore);
			var jobReduceContent = Ext.getCmp('jobReduceContent');
			jobReduceContent.setHtml("Reduce Progress : "+Math.round(record.data.reduceProgress)+"%");
			
			
			//Set value for Reduce Progress chart
			var jobMapProgressStore = new Ext.data.JsonStore({
				fields: ['name', 'value'],
				data: [{name:0,value:record.data.mapProgress}]
			});
			var jobMapProgress = Ext.getCmp("jobMapProgress");
			jobMapProgress.setStore(jobMapProgressStore);
			var jobMapContent = Ext.getCmp('jobMapContent');
			jobMapContent.setHtml("Map Progress : "+Math.round(record.data.mapProgress)+"%");
			
			
			//Get Tasks of required Job
			Ext.Ajax.request({
				//url: base_path+'proxy/'+App.app.setHadoopParams.appId+'/ws/v1/mapreduce/jobs',
				url: base_path+'json/tasks.json',
				success: function(response, opts) {
					var record = Ext.decode(response.responseText);
					var tasksarray = record.tasks.task;
					var tasksStore = Ext.getStore("Tasks");
					tasksStore.add(tasksarray);
				},
				failure: function(response, opts) {
					console.log('server-side failure with status code ' + response.status);
				}
			});
			
			views = me.getViewManager();
			views.switchTo('jobdetail');
		}else{
			Ext.Msg.alert('Task ID Required', 'Please Enter Your Task ID', Ext.emptyFn);
		}
	}
	
});