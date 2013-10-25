//<debug>
Ext.Loader.setPath({
   'App': 'src/app'
});
//</debug>

Ext.application({
    name: 'App',

    requires: [
        'Ext.Anim',
        'Ext.MessageBox',
		'Ext.data.reader.Array',
		'Ext.chart.Chart', 
		'Ext.chart.series.Series',
        'Ext.data.Connection'		
    ],
	
	models: [
		'Application',
		'Job',
		'Task',
		'TaskAttempt',
		'TaskAttemptCounter',
		'TaskAttemptCounterGroup'
	],
	
	views: [
        'ViewManager',
		'Welcome',
		'Metrics',
		'Scheduler',
		'Applications',
		'AppDetail',
		'JobDetail',
		'TaskDetail',
		'TaskAttemptDetail',
		'TaskAttemptGroupDetail'
    ],
	
	controllers: [
        'Welcome',
		'Metrics',
		'Scheduler',
		'Applications',
		'AppDetail',
		'JobDetail',
		'TaskDetail',
		'TaskAttemptDetail',
		'TaskAttemptGroupDetail'
    ],
	
	stores:[
		'Applications',
		'Jobs',
		'Tasks',
		'TaskAttempts',
		'TaskAttemptCounters',
		'TaskAttemptCounterGroups'
    ],
    

    icon: {
        '57': 'src/resources/icons/Icon.png',
        '72': 'src/resources/icons/Icon~ipad.png',
        '114': 'src/resources/icons/Icon@2x.png',
        '144': 'src/resources/icons/Icon~ipad@2x.png'
    },

    isIconPrecomposed: true,

    startupImage: {
        '320x460': 'src/resources/startup/320x460.jpg',
        '640x920': 'src/resources/startup/640x920.png',
        '768x1004': 'src/resources/startup/768x1004.png',
        '748x1024': 'src/resources/startup/748x1024.png',
        '1536x2008': 'src/resources/startup/1536x2008.png',
        '1496x2048': 'src/resources/startup/1496x2048.png'
    },
    
	setHadoopParams:{},
	
    launch: function() {
        // Destroy the #appLoadingIndicator element
        Ext.fly('appLoadingIndicator').destroy();
		
        if (!Ext.browser.is.WebKit) {
            alert("The current browser is unsupported.\n\nSupported browsers:\n" +
                "Google Chrome\n" +
                "Apple Safari\n" +
                "Mobile Safari (iOS)\n" +
                "Android Browser\n" +
                "BlackBerry Browser"
            );
        }
        // create the main view but ensure that none of the testing
        // functions above are called
        var mainview = Ext.create('App.view.ViewManager');
		//if the device is not a phone, we want to create a centered panel and put the list
        //into that
        mainview.fullscreen = true;
        Ext.Viewport.add(mainview);
		
    },
	onHideMask: function() {
		myMask.hide();
		clearTimeout(timeout);
        timeout = null;
	}

});
