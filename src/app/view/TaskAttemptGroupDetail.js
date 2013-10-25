Ext.define('App.view.TaskAttemptGroupDetail', {
	extend: 'Ext.Container',
	xtype:'taskattemptgroupdetail',
	requires: [
        'Ext.chart.*'
    ],
	config: {
        layout: 'fit',
        items: [
			{
				xtype: "toolbar",
				docked: "top",
				title: "Group Detail",
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
						xtype: 'list',
						cls: 'boxlist',
						itemId: 'taskAttemptCountersList',
						flex: 2,
						store: "TaskAttemptCounters",
						itemTpl: '<div class=\"list-item-line1\" >Name : {name},</div><div class=\"list-item-line1\" >Value : {value}</div>',
						onItemDisclosure: true
					}
				]
			}
		]
    }
});
