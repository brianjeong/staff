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
		
		$('#test_module').click(
			function(){
				$.ajax ({
					beforeSend: function() {
						$('#content_pane').html(spinner);
					},
					url: "qry.php",
					type:"POST",
					data: {"qry":"select id,first_name,last_name,school_email from staff"},
					success: function (rslt){
						$('#content_pane').html(rslt);
						$('#content_pane tr:even').css("background","#dddddd");
					}
				});
			}
		);
		
	}
);