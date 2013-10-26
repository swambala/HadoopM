Ext.define('App.controller.MetricsApps', {
    extend: 'Ext.app.Controller',
    config: {
        refs: {
            viewManager: 'viewmanager',
            back: 'metricsapps button[action=back]',
            moreinfo: 'metricsapps button[action=moreinfo]'
        },

        control: {
            back: {
                tap: 'onBack'
            },
			moreinfo: {
                tap: 'onMoreInfo'
            }
        }
    },
    onBack: function () {
		var views = this.getViewManager();
        views.back();
    },
	onMoreInfo: function () {
		var views = this.getViewManager();
		Ext.Ajax.request({
			//url: base_path+'proxy/'+App.app.setHadoopParams.appId+'/ws/v1/mapreduce/jobs/'+App.app.setHadoopParams.jobId+'/tasks',
			url: base_path+'json/applications.json',
			success: function(response, opts) {
				var record = Ext.decode(response.responseText);
				if(record.length != 0 && record.apps !== undefined ) {
					var appsarray = record.apps.app;
					var applicationsStore = Ext.getStore("Applications");
					applicationsStore.add(appsarray);
					views.switchTo("applications");	
				}		
				else {
					Ext.Msg.alert('Error', 'There is some error in collecting data', Ext.emptyFn);
				}
			},
			failure: function(response, opts) {
				console.log('server-side failure with status code ' + response.status);
			}
		});
    }
});