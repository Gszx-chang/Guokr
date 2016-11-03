// JavaScript Document





    var validator1;
    $(document).ready(function () {
        validator1 = $("#demoForm").validate({
            debug: true,
		    rules: {
                phonenumber: {
                    required: true,
					rangelength: [11,11]
                },
                securitycode: {
                  
					required:{
						depends:function(element){
							return $('#phoneNumber').is(':filled');
							}
						},
                },
                phonecode: {
                    required:{
						depends:function(element){
							return $('#phoneNumber').is(':filled');
							}
						},
                }
            },
            messages: {
                phonenumber: {
                    required: "请输入手机号",
                    rangelength: "请填写正确手机号",
                    remote: "用户名不存在"
                },
                securitycode: {
                    required: "验证码不能为空",

                },
                phonecode: {
                    required: "请填写手机验证码",
                }
            },
			
			errorClass:"error",
	
			
			
			
			
			
			
		})
	})
	
	

	
	
	function code(){
		//alert(5)
		
	}
	
	
	
	
	
	