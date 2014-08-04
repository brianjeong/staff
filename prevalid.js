$(
	function(){		
		$("#login_btn").click(
			function(){
				//Client-Side Validation				
				var usrID = $("#user_id").val();
				var usrPW = $("#user_pw").val();
				
				if (usrID == ""){
					$('#errmsg').html('Staff ID is required');
					$("#user_id").focus();
					return false;
				} else if (usrPW == "") {
					$('#errmsg').html('Password is required');
					$("#user_pw").focus();
					return false;
				}
			}
		);	
	}
);