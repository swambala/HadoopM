Ext.define('App.store.Nodes', {
    extend: 'Ext.data.Store',
    requires: ['App.model.Node'],

    config: {
        model: 'App.model.Node',
		proxy: {
			type: "ajax",
			//url: "",
			reader: {
				type: "json",
				rootProperty: "node"
			}
		},		
		//autoLoad: true		
    }
});