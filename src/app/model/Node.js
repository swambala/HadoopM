Ext.define("App.model.Node", {
    extend: "Ext.data.Model",
    config: {
        idProperty: 'id',
		fields: [
			{ name: 'id'},
			{ name: 'rack', type: 'string' },
			{ name: 'state', type: 'string' },
			{ name: 'nodeHostName', type: 'string' },
			{ name: 'nodeHTTPAddress'},
			{ name: 'healthStatus', type: 'string' },
			{ name: 'lastHealthUpdate', type: 'string' },
			{ name: 'healthReport', type: 'string' },
			{ name: 'numContainers', type: 'string' },
			{ name: 'usedMemoryMB', type: 'string' },
			{ name: 'availMemoryMB', type: 'string' }
		]
	}
});