
var oE = document.getElementById('err1');
 document.getElementById('login_username').onblur=function(){
	var reg = /^\w+@\w+\.(com|net|cn|com.cn)$/;
	var olV = parseInt(document.getElementById('login_username').value);
	if(reg.test(olV) === false){
		oE.innerHTML = '请输入有效的地址';
	}else{
		oE.innerHTML ='';
	}
}


var oE1 = document.getElementById('err2');
 document.getElementById('enroll_xing').onblur=function(){
	var reg = /^\u4e00-\u9fa5$/;
	var olV = parseInt(document.getElementById('enroll_xing').value);
	if(reg.test(olV) === false){
		oE1.innerHTML = '请只输入汉字';
	}else{
		oE1.innerHTML ='';
	}
}

var oE2 = document.getElementById('err3');
 document.getElementById('enroll_ming').onblur=function(){
	var reg = /^[\u4e00-\u9fa5]+$/;
	var olV = parseInt(document.getElementById('enroll_ming').value);
	if(reg.test(olV) === false){
		oE2.innerHTML = '请只输入汉字';
	}else{
		oE2.innerHTML ='';
	}
}

var oE3 = document.getElementById('err4');
 document.getElementById('enroll_x').onblur=function(){
	var reg = /^[a-zA-Z]$/;
	var olV = parseInt(document.getElementById('enroll_x').value);
	if(reg.test(olV) === false){
		oE3.innerHTML = '此栏位仅可填入罗马及西里尔字符';
	}else{
		oE3.innerHTML ='';
	}
}

var oE4 = document.getElementById('err5');
 document.getElementById('enroll_m').onblur=function(){
	var reg = /^[a-zA-Z]$/;
	var olV = parseInt(document.getElementById('enroll_m').value);
	if(reg.test(olV) === false){
		oE4.innerHTML = '此栏位仅可填入罗马及西里尔字符';
	}else{
		oE4.innerHTML ='';
	}
}

var oE5 = document.getElementById('err6');
 document.getElementById('email').onblur=function(){
	var reg = /^\w+@\w+\.(com|net|cn|com.cn)$/;
	var olV = parseInt(document.getElementById('email').value);
	if(reg.test(olV) === false){
		oE5.innerHTML = '请输入有效的地址'
	}else{
		oE5.innerHTML ='';
	}
}
var oE6 = document.getElementById('err7');
 document.getElementById('m_code').onblur=function(){
	var reg = /^[0-9]{6}$/;
	var olV = parseInt(document.getElementById('m_code').value);
	if(reg.test(olV) === false){
		oE6.innerHTML = '至少8个字符;大写与小写字母，至少一个数字';
	}else{
		oE6.innerHTML ='';
	}
}



var oVerifyCode = document.getElementById('verify-code');

		oVerifyCode.innerHTML = createVerifyCode();

		oVerifyCode.onclick = function () {
			oVerifyCode.innerHTML = createVerifyCode();
		};


		// 生成随机字符串
		function createVerifyCode() {
			var sSeeds = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

			var sVerify = '';
			for(var i = 0; i < 4; i++) {
				var iIndex = Math.floor(Math.random() * sSeeds.length);
				sVerify += sSeeds[iIndex];
			}

			return sVerify;
		}