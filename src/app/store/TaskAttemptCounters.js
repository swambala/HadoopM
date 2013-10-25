Ext.define('App.store.TaskAttemptCounters', {
    extend: 'Ext.data.Store',
    requires: ['App.model.TaskAttemptCounter'],

    config: {
        model: 'App.model.TaskAttemptCounter',
		proxy: {
			type: "ajax",
			//url: "",
			reader: {
				type: "json",
				rootProperty: "counter"
			}
		},		
		//autoLoad: true		
    }
});