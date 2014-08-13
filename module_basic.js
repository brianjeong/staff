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
				$('#content_pane').load('my_account.php');
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
		
		
	}
);