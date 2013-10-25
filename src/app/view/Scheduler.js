Ext.define('App.view.Scheduler', {
    extend: 'Ext.Container',
	xtype:'scheduler',
	config: {
        layout: 'fit',
        items: [
			{
				xtype: "toolbar",
				docked: "top",
				title: "Scheduler-Info",
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
				xtype:'panel',
				id:"schedulerDetailsPanel"
			}
		]
    }
});
