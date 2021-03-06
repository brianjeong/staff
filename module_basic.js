var spinner = "<img src='imgs/spinner.gif' border='0'>";

$(
	function(){

		$('#welcome').click(		
			function(){
				window.location.href = "index.php";
			}
		);
	
		$('#my_account').click(
			function(){
				$.ajax ({
					url: "my_account.php",
					type:"POST",
					success: function (rslt){
						$('#content_pane').html(rslt);
						$('#content_pane #id_pic img').css("width","140px");
					}
				});
			}
		);
	
		$('#logout').click(
			function(){
				window.location.href = "logout.php";				
			}
		);
		
		$('#test_module1').click(
			function(){
				$.ajax ({
					beforeSend: function() {
						$('#content_pane').html(spinner);
					},
					url: "qry.php",
					type:"POST",
					data: {"qry":"show full columns from staff;"},
					success: function (rslt){
						$('#content_pane').html(rslt);
						$('#content_pane tr:even').css("background","#dddddd");
					}
				});
			}
		);
		
		$('#test_module2').click(
			function(){
				$.ajax ({
					beforeSend: function() {
						$('#content_pane').html(spinner);
					},
					url: "qry.php",
					type:"POST",
					data: {"qry":"select id,first_name,last_name,korean_name,ext,school_email,cell_phone from staff;"},
					success: function (rslt){
						$('#content_pane').html(rslt);
						$('#content_pane tr:even').css("background","#dddddd");
					}
				});
			}
		);
		
		$('#test_module3').click(
			function(){
				$.ajax ({
					beforeSend: function() {
						$('#content_pane').html(spinner);
					},
					url: "qry.php",
					type:"POST",
					data: {"qry":"select id as 'Staff ID',first_name as 'First Name',last_name as 'Last Name',korean_name as 'Korean Name',ext as 'Ext.',school_email as 'School e-mail',cell_phone as 'Cell Phone' from staff;"},
					success: function (rslt){
						$('#content_pane').html(rslt);
						$('#content_pane tr:even').css("background","#dddddd");
					}
				});
			}
		);
		
		$('#test_module4').click(
			function(){
				$.ajax ({
					beforeSend: function() {
						$('#content_pane').html(spinner);
					},
					url: "qry.php",
					type:"POST",
					data: {"qry":"select name,org_level1,org_level2,position_level,area,senior_supervisor from job;"},
					success: function (rslt){
						$('#content_pane').html(rslt);
						$('#content_pane tr:even').css("background","#dddddd");
					}
				});
			}
		);

		$('#test_module5').click(
			function(){
				$.ajax ({
					beforeSend: function() {
						$('#content_pane').html(spinner);
					},
					url: "qry.php",
					type:"POST",
					data: {"qry":"select id,name from `org_level1`;"},
					success: function (rslt){
						$('#content_pane').html(rslt);
						$('#content_pane tr:even').css("background","#dddddd");
					}
				});
			}
		);

		$('#test_module6').click(
			function(){
				$.ajax ({
					beforeSend: function() {
						$('#content_pane').html(spinner);
					},
					url: "qry.php",
					type:"POST",
					data: {"qry":"select id,name from `org_level2`;"},
					success: function (rslt){
						$('#content_pane').html(rslt);
						$('#content_pane tr:even').css("background","#dddddd");
					}
				});
			}
		);
		
		$('#test_module7').click(
			function(){
				$.ajax ({
					beforeSend: function() {
						$('#content_pane').html(spinner);
					},
					url: "qry.php",
					type:"POST",
					data: {"qry":"select name,org_level1,org_level2,position_level,area,senior_supervisor from jobs;"},
					success: function (rslt){
						$('#content_pane').html(rslt);
						$('#content_pane tr:even').css("background","#dddddd");
					}
				});
			}
		);

		
		$('#test_module8').click(
			function(){
				$.ajax ({
					beforeSend: function() {
						$('#content_pane').html(spinner);
					},
					url: "qry.php",
					type:"POST",
					data: {"qry":
						"select jobs.name,org_level1.name as 'office',org_level2,position_level,area,senior_supervisor from jobs,org_level1 where jobs.org_level1=org_level1.id;"
					},
					success: function (rslt){
						$('#content_pane').html(rslt);
						$('#content_pane tr:even').css("background","#dddddd");
					}
				});
			}
		);
		
		$('#test_module9').click(
			function(){
				$.ajax ({
					beforeSend: function() {
						$('#content_pane').html(spinner);
					},
					url: "qry.php",
					type:"POST",
					data: {"qry":"SELECT jobs.name,org_level1.name as 'office',org_level2.name as 'department',position_level,area,senior_supervisor FROM jobs INNER JOIN `org_level1` ON jobs.org_level1=org_level1.id INNER JOIN `org_level2` ON jobs.org_level2=org_level2.id;"
					},
					success: function (rslt){
						$('#content_pane').html(rslt);
						$('#content_pane tr:even').css("background","#dddddd");
					}
				});
			}
		);
		
		$('#test_module10').click(
			function(){
			
				$('#content_pane').html(
					"<div><form id='srch_usr_form' method='post'><input type='text' id='srch_usr' autofocus/><input type='submit' id='srch_btn' value='Search Staff'/></form></div><div id='tbl_container'></div>"
				);
				
				$('#srch_usr_form').submit(
					function (e) {
						e.preventDefault();
						var srch_str = $('#srch_usr').val();
						var english = /^[A-Za-z]*$/;
						var qry ="";
						
						// Change Code of this 'LIKE Search' to 'Match Against FULLTEXT Search' query when MySQL >= 5.6 InnoDB Engine
						if (english.test(srch_str)){
							qry = "select id,first_name,last_name,korean_name,ext,school_email,cell_phone from staff where first_name like '%"+srch_str+"%' or last_name like '%"+srch_str+"%';";
						}else{
							qry = "select id,first_name,last_name,korean_name,ext,school_email,cell_phone from staff where korean_name like '%"+srch_str+"%';";
						}
						
						$.ajax ({
							beforeSend: function() {
								$('#tbl_container').html(spinner);
							},
							url: "qry.php",
							type:"POST",
							data: {"qry":qry},
							success: function (rslt){
								$('#tbl_container').html(rslt);
								$('#tbl_container tr:even').css("background","#dddddd");
							}
						});
					}
				);
			}
		);
		
		
	}
);