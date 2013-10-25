Ext.define("App.model.TaskAttempt", {
    extend: "Ext.data.Model",
    config: {
        idProperty: 'id',
		fields: [
			{ name: 'id', type: 'string' },
			{ name: 'elapsedMergeTime', type: 'string' },
			{ name: 'shuffleFinishTime', type: 'string' },
			{ name: 'assignedContainerId', type: 'string' },
			{ name: 'progress', type: 'string' },
			{ name: 'elapsedTime', type: 'string' },
			{ name: 'state', type: 'string' },
			{ name: 'elapsedShuffleTime', type: 'string' },
			{ name: 'mergeFinishTime', type: 'string' },
			{ name: 'rack', type: 'string' },
			{ name: 'elapsedReduceTime', type: 'string' },
			{ name: 'nodeHttpAddress', type: 'string' },
			{ name: 'type', type: 'string' },
			{ name: 'startTime', type: 'string' },
			{ name: 'finishTime', type: 'string' }
		]
	}
});