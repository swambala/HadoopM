Ext.define("App.model.TaskAttemptCounterGroup", {
    extend: "Ext.data.Model",
    config: {
        fields: [
			{ name: 'counterGroupName', type: 'string' },
			{ name: 'counter' }
		]
	}
});