Ext.define('App.controller.Welcome', {
    extend: 'Ext.app.Controller',
    config: {
        refs: {
            viewManager: 'viewmanager',
			gatewayPage: 'welcome dataview[action=gatewayPage]'
        },

        control: {
            gatewayPage: {
        		itemtap: 'onGatewayPage'
        	}
        }
    },
	
	onGatewayPage:function(dataview, index, target, record){
		var me = this;
		Ext.Viewport.setMasked({xtype: 'loadmask', message: 'Loading...'});
		views = me.getViewManager();		
		switch(record.data.type){
			case 'metrics':
				Ext.Ajax.request({
					//url: 'http://<rm http address:port>/ws/v1/cluster/metrics',
					url: base_path+'server.php?serviceType=metrics',
					success: function(response, opts) {
						var record = Ext.decode(response.responseText);
						if(record.length != 0 && record.clusterMetrics !== undefined ) {
						//if(record.length != 0) {
							var metricsRecord = record.clusterMetrics;
							//Generate Metrics Store from response
							/* var MetricsStore = new Ext.data.JsonStore({
								fields: ['title','content'],
								data: [
									{title:'Applications', content: '<div style="margin:auto;width:60%;text-align: -webkit-center;font-size: 16px;" ><table><tr><td>Submitted </td><td> : </td><td>'+metricsRecord.appsSubmitted+'</td></tr><tr><td>Completed </td><td> : </td><td>'+metricsRecord.appsCompleted+'</td></tr><tr><td>Pending </td><td> : </td><td>'+metricsRecord.appsPending+'</td></tr><tr><td>Running </td><td> : </td><td>'+metricsRecord.appsRunning+'</td></tr><tr><td>Failed </td><td> : </td><td>'+metricsRecord.appsFailed+'</td></tr><tr><td>Killed </td><td> : </td><td>'+metricsRecord.appsKilled+'</td></tr></table></div>'},
									{title:'Spaces in MB', content: '<div style="margin:auto;width:60%;text-align: -webkit-center;font-size: 16px;" ><table><tr><td>Available </td><td> : </td><td>'+metricsRecord.availableMB+'</td></tr><tr><td>Total </td><td> : </td><td>'+metricsRecord.totalMB+'</td></tr><tr><td>Allocated </td><td> : </td><td>'+metricsRecord.allocatedMB+'</td></tr><tr><td>Reserved </td><td> : </td><td>'+metricsRecord.reservedMB+'</td></tr></table></div>'},
									{title:'Containers', content: '<div style="margin:auto;width:60%;text-align: -webkit-center;font-size: 16px;" ><table><tr><td>Allocated </td><td> : </td><td>'+metricsRecord.containersAllocated+'</td></tr><tr><td>Reserved </td><td> : </td><td>'+metricsRecord.containersReserved+'</td></tr><tr ><td >Pending </td><td> : </td><td>'+metricsRecord.containersPending+'</td></tr></table></div>'},
									{title:'Nodes', content: '<div style="margin:auto;width:60%;text-align: -webkit-center;font-size: 16px;" ><table><tr><td>Lost </td><td> : </td><td>'+metricsRecord.lostNodes+'</td></tr><tr><td>Unhealthy </td><td> : </td><td>'+metricsRecord.unhealthyNodes+'</td></tr><tr><td>Decommissioned </td><td> : </td><td>'+metricsRecord.decommissionedNodes+'</td></tr><tr ><td >Rebooted </td><td> : </td><td>'+metricsRecord.rebootedNodes+'</td></tr><tr><td>Active </td><td> : </td><td>'+metricsRecord.activeNodes+'</td></tr><tr><td>Total </td><td> :</td><td>'+metricsRecord.totalNodes+'</td></tr></table></div>'}
								]
							});
							var metricsinfo = Ext.getCmp("metrics-info");
							metricsinfo.setStore(MetricsStore); */
							
							//Start to set chart for applications
							var metricsappsinfo = Ext.getCmp("metrics_apps_info");
							var metricsappsAxes = metricsappsinfo.getAxes();
							metricsappsAxes.items[0].setMaximum(metricsRecord.appsSubmitted)
							var MetricsAppsStore = new Ext.data.JsonStore({
								fields: ['xfield','yvalue'],
								data: [
									//{xfield:'Submitted',yvalue:metricsRecord.appsSubmitted},
									{xfield:'Completed',yvalue:metricsRecord.appsCompleted},
									{xfield:'Running',yvalue:metricsRecord.appsRunning},
									{xfield:'Pending',yvalue:metricsRecord.appsPending},
									{xfield:'Failed',yvalue:metricsRecord.appsFailed},
									{xfield:'Killed',yvalue:metricsRecord.appsKilled}
								]
							});
							metricsappsinfo.setStore(MetricsAppsStore);
							//End to set chart for applications
							
						    //Start to set chart for nodes
							var metricsnodesinfo = Ext.getCmp("metrics_nodes_info");
							var metricsnodesAxes = metricsnodesinfo.getAxes();
							metricsnodesAxes.items[0].setMaximum(metricsRecord.totalNodes)
							var MetricsNodesStore = new Ext.data.JsonStore({
								fields: ['xfield','yvalue'],
								data: [
									{xfield:'Reboot',yvalue:metricsRecord.rebootedNodes},
									{xfield:'Decommission',yvalue:metricsRecord.decommissionedNodes},
									{xfield:'Active',yvalue:metricsRecord.activeNodes},
									{xfield:'Unhealthy',yvalue:metricsRecord.unhealthyNodes},
									{xfield:'Lost',yvalue:metricsRecord.lostNodes}
								]
							});
							metricsnodesinfo.setStore(MetricsNodesStore);
							//End to set chart for nodes
							
							//Start to set chart for spaces
							var metricsSpacesInfo = Ext.getCmp("metrics_spaces_info");
							var metricsSpacesAxes = metricsSpacesInfo.getAxes();
							metricsSpacesAxes.items[0].setMaximum(metricsRecord.totalMB)
							var MetricsSpacesStore = new Ext.data.JsonStore({
								fields: ['xfield','yvalue'],
								data: [
									{xfield:'Raserved',yvalue:metricsRecord.reservedMB},
									{xfield:'Allocated',yvalue:metricsRecord.allocatedMB},
									{xfield:'Available',yvalue:metricsRecord.availableMB}
								]
							});
							metricsSpacesInfo.setStore(MetricsSpacesStore);
							//End to set chart for spaces
							
							//Start to set chart for containers
							var metricsContainersInfo = Ext.getCmp("metrics_containers_info");
							var metricsContainersAxes = metricsContainersInfo.getAxes();
							metricsContainersAxes.items[0].setMaximum(metricsRecord.containersReserved+metricsRecord.containersAllocated+metricsRecord.containersPending)
							var MetricsContainersStore = new Ext.data.JsonStore({
								fields: ['xfield','yvalue'],
								data: [
									{xfield:'Raserved',yvalue:metricsRecord.containersReserved},
									{xfield:'Allocated',yvalue:metricsRecord.containersAllocated},
									{xfield:'Pending',yvalue:metricsRecord.containersPending}
								]
							});
							metricsContainersInfo.setStore(MetricsContainersStore);
							//End to set chart for containers
							
							views.switchTo("metrics");
						}
						else {
							Ext.Msg.alert('Error', 'There is some error in collecting data', Ext.emptyFn);
						}
					},
					failure: function(response, opts) {
						Ext.Msg.alert('Error', 'There is some error in connection', Ext.emptyFn);
						console.log('server-side failure with status code ' + response.status);
					}
				});			
				break;
			case "scheduler":
				Ext.Ajax.request({
					//url: 'http://<rm http address:port>/ws/v1/cluster/metrics',
					url: base_path+'json/scheduler.json',
					success: function(response, opts) {
						var record = Ext.decode(response.responseText);
						if(record.length != 0 && record.scheduler !== undefined ) {
							//console.log(record);
							var schedulerInfo = Ext.getCmp("schedulerDetailsPanel");
							schedulerInfo.setHtml("Capacity : "+record.scheduler.schedulerInfo.capacity+"<br/>Max Capacity : "+record.scheduler.schedulerInfo.maxCapacity);
							views.switchTo("scheduler");
						}
						else {
							Ext.Msg.alert('Error', 'There is some error in collecting data', Ext.emptyFn);
						}
					},
					failure: function(response, opts) {
						Ext.Msg.alert('Error', 'There is some error in connection', Ext.emptyFn);
						console.log('server-side failure with status code ' + response.status);
					}
				});			
				break;
			case "applications":
				Ext.Ajax.request({
					//url: base_path+'proxy/'+App.app.setHadoopParams.appId+'/ws/v1/mapreduce/jobs/'+App.app.setHadoopParams.jobId+'/tasks',
					url: base_path+'json/applications.json',
					success: function(response, opts) {
						var record = Ext.decode(response.responseText);
						if(record.length != 0 && record.apps !== undefined ) {
							var appsarray = record.apps.app;
							var applicationsStore = Ext.getStore("Applications");
							applicationsStore.add(appsarray);
							views.switchTo("applications");	
						}		
						else {
							Ext.Msg.alert('Error', 'There is some error in collecting data', Ext.emptyFn);
						}
					},
					failure: function(response, opts) {
						console.log('server-side failure with status code ' + response.status);
					}
				});
				break;
		}
		Ext.Viewport.setMasked(false);
		
	}
});