Ext.define('App.view.Nodes', {
	extend: 'Ext.Container',
	xtype:'nodes',
	config: {
        layout: 'fit',
        items: [
			{
				xtype: "toolbar",
				docked: "top",
				title: "Nodes",
				items: [
					 {
                        xtype: "button",
                        ui: "back",
                        text: "Back",
                        action:'back',
                    },
					{ xtype: "spacer" }
				]
			},
			/* {
				xtype: 'toolbar',
				docked: 'top',

				items: [
					{ xtype: 'spacer' },
					{
						xtype: 'searchfield',
						placeHolder: 'application ID..',
						action:'search',
						
					},
					{ xtype: 'spacer' }
				]
			}, */
			{
				xtype:'list',
				store:'Nodes',
				//ui:'round',
				onItemDisclosure:true,
				itemTpl:'Node ID : {id} <br/>State : {state}'
			}
		]
    }
});
