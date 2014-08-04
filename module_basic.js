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
		
	}
);