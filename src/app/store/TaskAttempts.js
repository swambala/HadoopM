Ext.define('App.store.TaskAttempts', {
    extend: 'Ext.data.Store',
    requires: ['App.model.TaskAttempt'],

    config: {
        model: 'App.model.TaskAttempt',
		proxy: {
			type: "ajax",
			//url: "",
			reader: {
				type: "json",
				rootProperty: "taskAttempt"
			}
		},		
		//autoLoad: true		
    }
});