<?php
	//require_once("database/dbconn.php");
	if(isset($_REQUEST["serviceType"])) {
		switch($_REQUEST["serviceType"]){
			case  'cluster':
				$result = array(
							"clusterInfo" => array(
							  	"id"=>"1324053971963",
								"startedOn"=>"1324053971963",
								"state"=>"STARTED",
								"resourceManagerVersion"=>"0.23.1-SNAPSHOT",
								"resourceManagerBuildVersion"=>"0.23.1-SNAPSHOT from 1214049 by user1 source checksum 050cd664439d931c8743a6428fd6a693",
								"resourceManagerVersionBuiltOn"=>"Tue Dec 13 22:12:48 CST 2011",
								"hadoopVersion"=>"0.23.1-SNAPSHOT",
								"hadoopBuildVersion"=>"0.23.1-SNAPSHOT from 1214049 by user1 source checksum 11458df3bb77342dca5f917198fad328",
								"hadoopVersionBuiltOn"=>"Tue Dec 13 22:12:26 CST 2011"
							)
						);
				break;
			case 'metrics':
				$result = array(
							"clusterMetrics" => array(
								"appsSubmitted"=>120,
								"appsCompleted"=>35,
								"appsPending"=>30,
								"appsRunning"=>25,
								"appsFailed"=>13,
								"appsKilled"=>17,
								"reservedMB"=>5000,
								"availableMB"=>7408,
								"allocatedMB"=>5000,
								"containersAllocated"=>20,
								"containersReserved"=>30,
								"containersPending"=>10,
								"totalMB"=>17408,
								"totalNodes"=>100,
								"lostNodes"=>20,
								"unhealthyNodes"=>10,
								"decommissionedNodes"=>15,
								"rebootedNodes"=>25,
								"activeNodes"=>30
							)
						);
				break;	
			case 'app':
				$result =array(
							"app" => array(
								"finishedTime" => "1326861991282",
								"amContainerLogs" => "http://host.domain.com:8042/node/containerlogs/container_1326821518301_0010_01_000001",
								"trackingUI" => "History",
								"state" => "FINISHED",
								"user" => "user123",
								"id" => "application_1326821518301_0010",
								"clusterId" => "1326821518301",
								"finalStatus" => "SUCCEEDED",
								"amHostHttpAddress" => "host.domain.com:8042",
								"progress" => "100",
								"name" => "Sleep job",
								"startedTime" => "1326860715335",
								"elapsedTime" => "1275947",
								"diagnostics" => "",
								"trackingUrl" => "http://host.domain.com:8088/proxy/application_1326821518301_0010/jobhistory/job/job_1326821518301_10_10",
								"queue" => "al",
							)
						);
				break;
			case 'jobs':
				$result =array(
						   "jobs" => array(
							  "job" => array(
									array(
										"runningReduceAttempts"=>"1",
										"reduceProgress"=>"72.104515",
										"failedReduceAttempts"=>"0",
										"newMapAttempts"=>"0",
										"mapsRunning"=>"0",
										"state"=>"RUNNING",
										"successfulReduceAttempts"=>"0",
										"reducesRunning"=>"1",
										"acls"=>array(array(
											  "value"=>" ",
											  "name"=>"mapreduce.job.acl-modify-job"
											),array(
											  "value"=>" ",
											  "name"=>"mapreduce.job.acl-view-job"
											)
										),
										"reducesPending"=>"0",
										"user"=>"user1",
										"reducesTotal"=>"1",
										"mapsCompleted"=>"1",
										"startTime"=>"1326860720902",
										"id"=>"job_1326821518301_10_10",
										"successfulMapAttempts"=>"1",
										"runningMapAttempts"=>"0",
										"newReduceAttempts"=>"0",
										"name"=>"Sleep job",
										"mapsPending"=>"0",
										"elapsedTime"=>"64432",
										"reducesCompleted"=>"0",
										"mapProgress"=>"100",
										"diagnostics"=>"",
										"failedMapAttempts"=>"0",
										"killedReduceAttempts"=>"0",
										"mapsTotal"=>"1",
										"uberized"=>"false",
										"killedMapAttempts"=>"0",
										"finishTime"=>"0"
									),
									array(
										"runningReduceAttempts"=>"1",
										"reduceProgress"=>"72.104515",
										"failedReduceAttempts"=>"0",
										"newMapAttempts"=>"0",
										"mapsRunning"=>"0",
										"state"=>"RUNNING",
										"successfulReduceAttempts"=>"0",
										"reducesRunning"=>"1",
										"acls"=>array(array(
											  "value"=>" ",
											  "name"=>"mapreduce.job.acl-modify-job"
											),array(
											  "value"=>" ",
											  "name"=>"mapreduce.job.acl-view-job"
											)
										),
										"reducesPending"=>"0",
										"user"=>"user1",
										"reducesTotal"=>"1",
										"mapsCompleted"=>"1",
										"startTime"=>"1326860720902",
										"id"=>"job_1326821518301_10_11",
										"successfulMapAttempts"=>"1",
										"runningMapAttempts"=>"0",
										"newReduceAttempts"=>"0",
										"name"=>"Sleep job",
										"mapsPending"=>"0",
										"elapsedTime"=>"64432",
										"reducesCompleted"=>"0",
										"mapProgress"=>"100",
										"diagnostics"=>"",
										"failedMapAttempts"=>"0",
										"killedReduceAttempts"=>"0",
										"mapsTotal"=>"1",
										"uberized"=>"false",
										"killedMapAttempts"=>"0",
										"finishTime"=>"0"
									)
								)
							)
						);
				break;	
			case 'tasks':
				$result =array(
						   "tasks" => array(
							  "task" => array(
									array(
										"progress"=>"100",
										"elapsedTime"=>"5059",
										"state"=>"SUCCEEDED",
										"startTime"=>"1326860725014",
										"id"=>"task_1326821518301_10_10_m_0",
										"type"=>"MAP",
										"successfulAttempt"=>"attempt_1326821518301_10_10_m_0_0",
										"finishTime"=>"1326860730073"
									),
									array(
										"progress"=>"72.104515",
										"elapsedTime"=>"0",
										"state"=>"RUNNING",
										"startTime"=>"1326860732984",
										"id"=>"task_1326821518301_10_10_r_0",
										"type"=>"REDUCE",
										"successfulAttempt"=>"",
										"finishTime"=>"0"
									)
								)
							)
						);
				break;
			case 'taskAttempts':
				$result = array(
						   "taskAttempts" => array(
							  "taskAttempt" => array(
									array(
										"elapsedMergeTime"=>"158",
										"shuffleFinishTime"=>"1326860735378",
										"assignedContainerId"=>"container_1326821518301_0010_01_000003",
										"progress"=>"72.104515",
										"elapsedTime"=>"0",
										"state"=>"RUNNING",
										"elapsedShuffleTime"=>"2394",
										"mergeFinishTime"=>"1326860735536",
										"rack"=>"/10.10.10.0",
										"elapsedReduceTime"=>"0",
										"nodeHttpAddress"=>"host.domain.com:8042",
										"type"=>"REDUCE",
										"startTime"=>"1326860732984",
										"id"=>"attempt_1326821518301_10_10_r_0_0",
										"finishTime"=>"0"
									)
								)
							)
						);
				break;
			case 'taskAttemptCounters':
				$result = array(
						   "JobTaskAttemptCounters" => array(
							  "taskAttemptCounterGroup" => array(
									array(
										"counterGroupName"=>"org.apache.hadoop.mapreduce.FileSystemCounter",
										"counter" => array(
											array(
												"value" => "4216",
												"name" => "FILE_BYTES_READ"
											),array(
												"value" => "77151",
												"name" => "FILE_BYTES_WRITTEN"
											),array(
												"value" => "0",
												"name" => "FILE_READ_OPS"
											),array(
												"value" => "0",
												"name" => "FILE_LARGE_READ_OPS"
											),array(
												"value" => "0",
												"name" => "FILE_WRITE_OPS"
											),array(
												"value" => "0",
												"name" => "HDFS_BYTES_READ"
											),array(
												"value" => "0",
												"name" => "HDFS_BYTES_WRITTEN"
											),array(
												"value" => "0",
												"name" => "HDFS_READ_OPS"
											),array(
												"value" => "0",
												"name" => "HDFS_LARGE_READ_OPS"
											),array(
												"value" => "0",
												"name" => "HDFS_WRITE_OPS"
											)
										)
									),
									array(
										"counterGroupName"=>"org.apache.hadoop.mapreduce.TaskCounter",
										"counter" => array(
											array(
												"value" => "0",
												"name" => "COMBINE_INPUT_RECORDS"
											),array(
												"value" => "0",
												"name" => "COMBINE_OUTPUT_RECORDS"
											),array(
												"value" => "1767",
												"name" => "REDUCE_INPUT_GROUPS"
											),array(
												"value" => "25104",
												"name" => "REDUCE_SHUFFLE_BYTES"
											),array(
												"value" => "1767",
												"name" => "REDUCE_INPUT_RECORDS"
											),array(
												"value" => "0",
												"name" => "REDUCE_OUTPUT_RECORDS"
											),array(
												"value" => "0",
												"name" => "SPILLED_RECORDS"
											),array(
												"value" => "1",
												"name" => "SHUFFLED_MAPS"
											),array(
												"value" => "0",
												"name" => "FAILED_SHUFFLE"
											),array(
												"value" => "1",
												"name" => "MERGED_MAP_OUTPUTS"
											),array(
												"value" => "50",
												"name" => "GC_TIME_MILLIS"
											),array(
												"value" => "1580",
												"name" => "CPU_MILLISECONDS"
											),array(
												"value" => "141320192",
												"name" => "PHYSICAL_MEMORY_BYTES"
											),array(
												"value" => "1118552064",
												"name" => "VIRTUAL_MEMORY_BYTES"
											),array(
												"value" => "73728000",
												"name" => "COMMITTED_HEAP_BYTES"
											)
										)
									),array(
										"counterGroupName"=>"Shuffle Errors",
										"counter" => array(
											array(
												"value" => "0",
												"name" => "BAD_ID"
											),array(
												"value" => "0",
												"name" => "CONNECTION"
											),array(
												"value" => "0",
												"name" => "IO_ERROR"
											),array(
												"value" => "0",
												"name" => "WRONG_LENGTH"
											),array(
												"value" => "0",
												"name" => "WRONG_MAP"
											),array(
												"value" => "0",
												"name" => "WRONG_REDUCE"
											)
										)
									),array(
										"counterGroupName"=>"org.apache.hadoop.mapreduce.lib.output.FileOutputFormatCounter",
										"counter" => array(
											array(
												"value" => "0",
												"name" => "BYTES_WRITTEN"
											)
										)
									)
								),
								"id"=>"attempt_1326821518301_10_10_r_0_0"
							)
						);
				break;
				default:
					$result = array();
				break;
		}
	}
	else {
		$result = array();
	}
	//header("Content-Type: application/x-json");
	echo json_encode($result);
?>