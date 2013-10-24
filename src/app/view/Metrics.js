Ext.define('App.view.Metrics', {
    extend: 'Ext.Container',
	xtype:'metrics',
	config: {
        layout: 'fit',
        items: [
			{
				xtype: "toolbar",
				docked: "top",
				title: "Metrics",
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
				xtype: 'dataview',
				inline: true,
				cls: 'dataview-inline-content',
				id:'metrics-info',
				/* store: {
					fields: ['title','content'],
					data: [
						{title:'Applications', content: 'Submitted : 0<br/>Completed : 0<br/>Pending : 0<br/>Running : 0<br/>Failed : 0<br/>Killed : 0'},
						{title:'Spaces', content: 'Available MB : 17408<br/>Reserved MB : 0 <br/>Allocated MB : 0 <br/>Total MB : 17408 <br/>'},
						{title:'Containers', content: 'Allocated : 0<br/>Reserved : 0<br/>Pending : 0'},
						{title:'Nodes', content: 'Lost : 0<br/>Unhealthy : 0<br/>Decommissioned : 0<br/>Rebooted : 0<br/>Active : 1<br/>Total :1'}
					]
				}, */
				itemTpl: '<div class="content"><div align="center">{title}</div><div>{content}</div></div>',
				// action:'gatewayPage'
			}
		]
    }
});
