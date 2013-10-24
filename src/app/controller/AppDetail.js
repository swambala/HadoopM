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
			
			//Set value for Progress chart
			var ProgressStore = new Ext.data.JsonStore({
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
			views.switchTo('appdetail');
		}else{
			Ext.Msg.alert('APPID Required', 'Please Enter Your Application ID', Ext.emptyFn);
		}
	}
	
});