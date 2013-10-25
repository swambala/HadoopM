Ext.define('App.view.TaskAttemptDetail', {
	extend: 'Ext.Container',
	xtype:'taskattemptdetail',
	requires: [
        'Ext.chart.*'
    ],
	config: {
        layout: 'fit',
        items: [
			{
				xtype: "toolbar",
				docked: "top",
				title: "Attempt Detail",
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
						id: 'taskAttemptDetailContent',
						html:'There is no details available',
						scrollable: {
							direction: 'vertical'
						},
						flex: 1
					},
					{
						xtype: 'list',
						cls: 'boxlist',
						itemId: 'taskAttemptCounterGroupsList',
						flex: 2,
						store: "TaskAttemptCounterGroups",
						itemTpl: '<div class=\"list-item-line1\" >{counterGroupName}</div>',
						onItemDisclosure: true
					}
				]
			}
		]
    }
});
