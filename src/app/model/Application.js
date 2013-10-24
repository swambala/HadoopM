Ext.define("App.model.Application", {
    extend: "Ext.data.Model",
    config: {
		fields:[
			{ name:'finishedTime', type:'string'},
			{ name:'amContainerLogs', type:'string'},
			{ name:'trackingUI', type:'string'},
			{ name:'state', type:'string'},
			{ name:'user', type:'string'},
			{ name:'id', type:'string'},
			{ name:'clusterId', type:'string'},
			{ name:'finalStatus', type:'string'},
			{ name:'amHostHttpAddress', type:'string'},
			{ name:'progress', type:'string'},
			{ name:'name', type:'string'},
			{ name:'startedTime', type:'string'},
			{ name:'elapsedTime', type:'string'},
			{ name:'diagnostics', type:'string'},
			{ name:'trackingUrl', type:'string'},
			{ name:'queue', type:'string'}
		]
	}
});
		
