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
				$.post (
					"qry.php",
//					"testpost.php",
					{"qry":"select id,first_name,last_name,school_email from staff"},
					function (rslt){
						$('#content_pane').html(rslt);
					}
				);
				
			}
		);
		
	}
);