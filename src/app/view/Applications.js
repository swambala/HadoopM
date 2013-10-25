Ext.define('App.view.Applications', {
	extend: 'Ext.Container',
	xtype:'applications',
	config: {
        layout: 'fit',
        items: [
			{
				xtype: "toolbar",
				docked: "top",
				title: "Applications",
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
			{
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
			},
			{
				xtype:'list',
				store:'Applications',
				//ui:'round',
				onItemDisclosure:true,
				itemTpl:'App ID : {id} <br/>State : {state}'
			}
		]
    }
});
