Ext.define('App.store.Applications', {
    extend: 'Ext.data.Store',
   // requires: ['App.model.Application'],

    config: {
        model: 'App.model.Application',
		proxy: {
			type: "ajax",
			reader: {
				type: "json",
				rootProperty: "app"
			}
		}
    }
});