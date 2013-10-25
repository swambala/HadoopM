Ext.define('App.view.TaskDetail', {
	extend: 'Ext.Container',
	xtype:'taskdetail',
	requires: [
        'Ext.chart.*'
    ],
	config: {
        layout: 'fit',
        items: [
			{
				xtype: "toolbar",
				docked: "top",
				title: "Task's Detail",
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
				layout: {
					type: 'vbox'
				},
				flex:1,
				items:[
					{
						id: 'taskDetailContent',
						html:'There is no details available',
						scrollable: {
							direction: 'vertical'
						},
						flex: 1
					},
					{
						xtype: 'list',
						itemId: 'taskAttemptsList',
						flex: 2,
						store: "TaskAttempts",
						itemTpl: '<div class=\"list-item-line1\" >{id}</div>',
						onItemDisclosure: true
					}
				]
			}
		]
    }
});
