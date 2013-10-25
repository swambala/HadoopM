Ext.define("App.model.TaskAttemptCounter", {
    extend: "Ext.data.Model",
    config: {
        fields: [
			{ name: 'name', type: 'string' },
			{ name: 'value', type: 'string' }
		]
	}
});