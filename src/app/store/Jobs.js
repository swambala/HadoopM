Ext.define('App.store.Jobs', {
    extend: 'Ext.data.Store',
    requires: ['App.model.Job'],

    config: {
        model: 'App.model.Job',
		proxy: {
			type: "ajax",
			//url: "",
			reader: {
				type: "json",
				rootProperty: "job"
			}
		},		
		//autoLoad: true		
    }
});