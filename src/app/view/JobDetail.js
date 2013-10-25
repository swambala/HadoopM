Ext.define('App.view.JobDetail', {
	extend: 'Ext.Container',
	xtype:'jobdetail',
	config: {
        layout: 'fit',
        items: [
			{
				xtype: "toolbar",
				docked: "top",
				title: "Job's Detail",
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
						xtype:'panel',
						layout: {
							type: 'vbox',
						},
						flex:1,
						items:[
							{
								flex: 1,
								xtype: 'label',
								style: 'position:absolute',
								id: 'jobReduceContent'
							},
							{
								xtype:'spacer'
							},
							{
								xtype: 'chart',
								id:'jobReduceProgress',
								flex: 2,
								animate: {
									easing: 'bounceOut',
									duration: 500
								},
								axes: [
									{
										type: 'gauge',
										position: 'gauge',
										minimum: 0,
										maximum: 100,
										steps: 10,
										margin: 7
									}
								],
								series: [
									{
										type: 'gauge',
										field: 'value',
										//value:45,
										donut: 80,
										colorSet: ['#F49D10', '#ddd']
									}
								]
							}
						]
					},
					{
						xtype:'panel',
						//width:'50%',
						layout: {
							type: 'vbox'
						},
						flex:2,
						items:[
							{
								flex: 1,
								xtype: 'label',
								style: 'position:absolute',
								id:'jobMapContent'
							},
							{
								xtype:'spacer'
							},
							{
								xtype: 'chart',
								id:'jobMapProgress',
								flex: 2,
								animate: {
									easing: 'bounceOut',
									duration: 500
								},
								axes: [
									{
										type: 'gauge',
										position: 'gauge',
										minimum: 0,
										maximum: 100,
										steps: 10,
										margin: 7
									}
								],
								series: [
									{
										type: 'gauge',
										field: 'value',
										donut: 80,
										colorSet: ['#F49D10', '#ddd']
									}
								]
							}
						]
					},
					{
						xtype: 'list',
						itemId: 'tasksList',
						flex: 2,
						store: "Tasks",
						itemTpl: '<div class=\"list-item-line1\" >{id}</div>',
						onItemDisclosure: true
					}
				]
			}
		]
    }
});
