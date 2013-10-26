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
				xtype:'list',
				itemTpl: '{title}',
				data: [
					{ title: 'Applications', type:'metricsapps'},
					{ title: 'Spaces', type:'metricsspaces' },
					{ title: 'Containers', type:'metricscontainers' },
					{ title: 'Nodes', type:'metricsnodes' }
				]
			}
			/* {
				xtype:'panel',
				layout: {
					type: 'vbox'
				},
				flex:1,
				items:[
					{
						xtype:'chart',
						flex:1,
						id:'metrics_apps_info',
						themeCls: 'column1',
						animate: {
							easing: 'bounceOut',
							duration: 750
						},
						shadow: false,
						gradients: [
							{
								'id': 'v-1',
								'angle': 0,
								stops: {
									0: {
										color: 'rgb(187, 45, 222)'
									},
									100: {
										color: 'rgb(85, 10, 103)'
									}
								}
							},
							{
								'id': 'v-2',
								'angle': 0,
								stops: {
									0: {
										color: 'rgb(180, 216, 42)'
									},
									100: {
										color: 'rgb(94, 114, 13)'
									}
								}
							},
							{
								'id': 'v-3',
								'angle': 0,
								stops: {
									0: {
										color: 'rgb(43, 221, 115)'
									},
									100: {
										color: 'rgb(14, 117, 56)'
									}
								}
							},
							{
								'id': 'v-4',
								'angle': 0,
								stops: {
									0: {
										color: 'rgb(45, 117, 226)'
									},
									100: {
										color: 'rgb(14, 56, 117)'
									}
								}
							},
							{
								'id': 'v-5',
								'angle': 0,
								stops: {
									0: {
										color: 'rgb(212, 40, 40)'
									},
									100: {
										color: 'rgb(117, 14, 14)'
									}
								}
							}
						],
						axes: [
							{
								type: 'Numeric',
								position: 'left',
								fields: ['yvalue'],
								minimum: 0,
								maximum: 100,
								label: {
									renderer: function (v) {
										return v.toFixed(0);
									}
								},
								title: 'Number of Apps'
							},
							{
								type: 'Category',
								position: 'bottom',
								fields: ['xfield'],
								title: 'Status of Apps'
							}
						],
						series: [
							{
								type: 'column',
								axis: 'left',
								highlight: true,
								renderer: function (sprite, storeItem, barAttr, i, store) {
									barAttr.fill = "url(#v-" + (i % colors.length + 1) + ")";
									return barAttr;
								},
								label: { 
									display: 'insideEnd', 
									'text-anchor': 'middle', 
									field: 'yvalue',  
									orientation: 'vertical', 
									color: '#333' 
								},
								xField: 'xfield',
								yField: 'yvalue'
							}
						]
					},
					{
						xtype:'chart',
						flex:1,
						id:'metrics_nodes_info',
						themeCls: 'column1',
						animate: {
							easing: 'bounceOut',
							duration: 750
						},
						shadow: false,
						gradients: [
							{
								'id': 'v-1',
								'angle': 0,
								stops: {
									0: {
										color: 'rgb(187, 45, 222)'
									},
									100: {
										color: 'rgb(85, 10, 103)'
									}
								}
							},
							{
								'id': 'v-2',
								'angle': 0,
								stops: {
									0: {
										color: 'rgb(180, 216, 42)'
									},
									100: {
										color: 'rgb(94, 114, 13)'
									}
								}
							},
							{
								'id': 'v-3',
								'angle': 0,
								stops: {
									0: {
										color: 'rgb(43, 221, 115)'
									},
									100: {
										color: 'rgb(14, 117, 56)'
									}
								}
							},
							{
								'id': 'v-4',
								'angle': 0,
								stops: {
									0: {
										color: 'rgb(45, 117, 226)'
									},
									100: {
										color: 'rgb(14, 56, 117)'
									}
								}
							},
							{
								'id': 'v-5',
								'angle': 0,
								stops: {
									0: {
										color: 'rgb(212, 40, 40)'
									},
									100: {
										color: 'rgb(117, 14, 14)'
									}
								}
							}
						],
						axes: [
							{
								type: 'Numeric',
								position: 'left',
								fields: ['yvalue'],
								minimum: 0,
								maximum: 100,
								label: {
									renderer: function (v) {
										return v.toFixed(0);
									}
								},
								title: 'Number of Nodes'
							},
							{
								type: 'Category',
								position: 'bottom',
								fields: ['xfield'],
								title: 'Status of Nodes'
							}
						],
						series: [
							{
								type: 'column',
								axis: 'left',
								highlight: true,
								renderer: function (sprite, storeItem, barAttr, i, store) {
									barAttr.fill = "url(#v-" + (i % colors.length + 1) + ")";
									return barAttr;
								},
								label: {
									field: 'yvalue'
								},
								xField: 'xfield',
								yField: 'yvalue'
							}
						]
					},
					{
						xtype:'chart',
						flex:1,
						id:'metrics_spaces_info',
						themeCls: 'column1',
						animate: {
							easing: 'bounceOut',
							duration: 750
						},
						shadow: false,
						gradients: [
							{
								'id': 'v-1',
								'angle': 0,
								stops: {
									0: {
										color: 'rgb(187, 45, 222)'
									},
									100: {
										color: 'rgb(85, 10, 103)'
									}
								}
							},
							{
								'id': 'v-2',
								'angle': 0,
								stops: {
									0: {
										color: 'rgb(180, 216, 42)'
									},
									100: {
										color: 'rgb(94, 114, 13)'
									}
								}
							},
							{
								'id': 'v-3',
								'angle': 0,
								stops: {
									0: {
										color: 'rgb(43, 221, 115)'
									},
									100: {
										color: 'rgb(14, 117, 56)'
									}
								}
							}
						],
						axes: [
							{
								type: 'Numeric',
								position: 'left',
								fields: ['yvalue'],
								minimum: 0,
								maximum: 100,
								label: {
									renderer: function (v) {
										return v.toFixed(0);
									}
								},
								title: 'Spaces in MB'
							},
							{
								type: 'Category',
								position: 'bottom',
								fields: ['xfield'],
								title: 'Status of Spaces'
							}
						],
						series: [
							{
								type: 'column',
								axis: 'left',
								highlight: true,
								renderer: function (sprite, storeItem, barAttr, i, store) {
									barAttr.fill = "url(#v-" + (i % colors.length + 1) + ")";
									return barAttr;
								},
								label: {
									field: 'yvalue'
								},
								xField: 'xfield',
								yField: 'yvalue'
							}
						]
					},
					{
						xtype:'chart',
						flex:1,
						id:'metrics_containers_info',
						themeCls: 'column1',
						animate: {
							easing: 'bounceOut',
							duration: 750
						},
						shadow: false,
						gradients: [
							{
								'id': 'v-1',
								'angle': 0,
								stops: {
									0: {
										color: 'rgb(187, 45, 222)'
									},
									100: {
										color: 'rgb(85, 10, 103)'
									}
								}
							},
							{
								'id': 'v-2',
								'angle': 0,
								stops: {
									0: {
										color: 'rgb(180, 216, 42)'
									},
									100: {
										color: 'rgb(94, 114, 13)'
									}
								}
							},
							{
								'id': 'v-3',
								'angle': 0,
								stops: {
									0: {
										color: 'rgb(43, 221, 115)'
									},
									100: {
										color: 'rgb(14, 117, 56)'
									}
								}
							}
						],
						axes: [
							{
								type: 'Numeric',
								position: 'left',
								fields: ['yvalue'],
								minimum: 0,
								maximum: 100,
								label: {
									renderer: function (v) {
										return v.toFixed(0);
									}
								},
								title: 'Number of Containers'
							},
							{
								type: 'Category',
								position: 'bottom',
								fields: ['xfield'],
								title: 'Status of Containers'
							}
						],
						series: [
							{
								type: 'column',
								axis: 'left',
								highlight: true,
								renderer: function (sprite, storeItem, barAttr, i, store) {
									barAttr.fill = "url(#v-" + (i % colors.length + 1) + ")";
									return barAttr;
								},
								label: {
									field: 'yvalue'
								},
								xField: 'xfield',
								yField: 'yvalue'
							}
						]
					}
				]
			} */
		]
    }
});
