Ext.define("App.model.Task", {
    extend: "Ext.data.Model",
    config: {
        idProperty: 'id',
		fields: [
			{ name: 'id', type: 'string' },
			{ name: 'progress', type: 'string' },
			{ name: 'elapsedTime', type: 'string' },
			{ name: 'state', type: 'string' },
			{ name: 'startTime', type: 'string' },
			{ name: 'type', type: 'string' },
			{ name: 'successfulAttempt', type: 'string' },
			{ name: 'finishTime', type: 'string' }
		]
	}
});