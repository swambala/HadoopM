Ext.define('App.view.Welcome', {
    extend: 'Ext.Container',
	xtype:'welcome',
	requires: ['App.controller.Welcome'],
    config: {
        layout: 'fit',
        items: [
			{
				xtype: "toolbar",
				docked: "top",
				title: "HadoopM",
				items: [
					{ xtype: "spacer" }
				]
			},
			{
				xtype: 'dataview',
				inline: true,
				cls: 'dataview-inline',				
				store: {
					fields: ['title','photo','type'],
					data: [
						{title:'Metrics', photo: 'src/images/clusters.png', type:'metrics'},
						{title:'Scheduler', photo: 'src/images/sheduler.png', type:'scheduler'},
						{title:'Applications', photo: 'src/images/applications.png', type:'applications'},
						{title:'Nodes', photo: 'src/images/nodes.png', type:'nodes'}
					]
				},
				//itemTpl: '<div class="img" style="background-image: url({photo});"></div><div style="text-align: left;padding-top: inherit;">{title}</div>',
				itemTpl: '<div align="center"><div class="img" style="background-image: url({photo});"></div><div>{title}</div></div>',
				action:'gatewayPage'
			}
		]
    }
});
