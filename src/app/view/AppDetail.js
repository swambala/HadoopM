Ext.define('App.view.AppDetail', {
	extend: 'Ext.Container',
	xtype:'appdetail',
	requires: [
        'Ext.chart.*'
    ],
	config: {
        layout: 'fit',
        items: [
			{
				xtype: "toolbar",
				docked: "top",
				title: "App's Detail",
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
						flex: 1,
						xtype: 'label',
						style: 'position:absolute',
						id: 'appDetailContent',
						html:'Progress'
					},
					{
						xtype: 'chart',
						id:'appProgress',
						flex: 2,
						animate: {
							easing: 'bounceOut',
							duration: 500
						},
						//store: store1,
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
								colorSet: ['#F49D10', '#ddd'],
								showInLegend: true,
								label: {
									display: 'none',
									contrast: true,
									//field :'name'
								}
							}
						]
					},
					{
						xtype: 'list',
						itemId: 'jobsList',
						flex: 2,
						store: "Jobs",
						itemTpl: '<div class=\"list-item-line1\" >{id}</div>',
						onItemDisclosure: true
					}
				]
			}
		]
    }
});
