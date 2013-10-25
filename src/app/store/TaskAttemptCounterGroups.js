Ext.define('App.store.TaskAttemptCounterGroups', {
    extend: 'Ext.data.Store',
    requires: ['App.model.TaskAttemptCounterGroup'],

    config: {
        model: 'App.model.TaskAttemptCounterGroup',
		proxy: {
			type: "ajax",
			//url: "",
			reader: {
				type: "json",
				rootProperty: "taskAttemptCounterGroup"
			}
		},		
		//autoLoad: true		
    }
});