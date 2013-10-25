Ext.define('App.store.Tasks', {
    extend: 'Ext.data.Store',
    requires: ['App.model.Task'],

    config: {
        model: 'App.model.Task',
		proxy: {
			type: "ajax",
			//url: "",
			reader: {
				type: "json",
				rootProperty: "task"
			}
		},		
		//autoLoad: true		
    }
});