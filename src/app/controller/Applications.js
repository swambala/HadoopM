Ext.define('App.controller.Applications', {
    extend: 'Ext.app.Controller',
    config: {
        refs: {
            viewManager: 'viewmanager',
            back: 'applications button[action=back]',
			search: 'applications searchfield',
			list: 'applications list'
        },

        control: {
            back: {
                tap: 'onBack'
            },
			search : {
				keyup:'onSearchKeyUp',
				clearicontap: 'onSearchClearIconTap'
			},
			list: {
                itemtap: 'onAppSelect'
            },
        }
    },
    onBack: function () {
		var views = this.getViewManager();
        views.back();
    },
	onSearchKeyUp:function(field) {
		//alert('hi '+field);
		//get the store and the value of the field
        var value = field.getValue(),
            store = Ext.getStore("Applications");

        //first clear any current filters on the store. If there is a new value, then suppress the refresh event
        store.clearFilter(!!value);

        //check if a value is set first, as if it isnt we dont have to do anything
        if (value) {
            //the user could have entered spaces, so we must split them so we can loop through them all
            var searches = value.split(','),
                regexps = [],
                i, regex;

            //loop them all
            for (i = 0; i < searches.length; i++) {
                //if it is nothing, continue
                if (!searches[i]) continue;

                regex = searches[i].trim();
                regex = regex.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");

                //if found, create a new regular expression which is case insenstive
                regexps.push(new RegExp(regex.trim(), 'i'));
            }

            //now filter the store by passing a method
            //the passed method will be called for each record in the store
            store.filter(function(record) {
                var matched = [];

                //loop through each of the regular expressions
                for (i = 0; i < regexps.length; i++) {
                    var search = regexps[i],
                        didMatch = search.test(record.get('id'));

                    //if it matched the application id, push it into the matches array
                    matched.push(didMatch);
                }

                return (regexps.length && matched.indexOf(true) !== -1);
            });
        }
	},
	/**
     * Called when the user taps on the clear icon in the search field.
     * It simply removes the filter form the store
     */
    onSearchClearIconTap: function() {
        //call the clearFilter method on the store instance
        //this.getStore().clearFilter();
		Ext.getStore("Applications").clearFilter();
		alert('clear');
    },
	onAppSelect:function (list, index, target, record) {
		//App.app.setHadoopParams.appId = Ext.getCmp('yarnSearchForm').getValue();
		var me = this;
		App.app.setHadoopParams.appId = record.data.id
		
		if(App.app.setHadoopParams.appId != ''){
			
			//Set value for Progress chart
			var ProgressStore = new Ext.data.JsonStore({
				fields: ['name', 'value'],
				data: [{name:'test',value:record.data.progress}]
			});
			var appProgress = Ext.getCmp("appProgress");
			appProgress.setStore(ProgressStore);
			var appDetailContent = Ext.getCmp('appDetailContent');
			appDetailContent.setHtml("Progress : "+record.data.progress+"%");
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