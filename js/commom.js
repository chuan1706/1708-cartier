var oFixedTop = document.getElementById('index_nav');
	window.onscroll = function () {
		var iScrollT = document.body.scrollTop || document.documentElement.scrollTop;
		if(iScrollT > 200) {
			document.getElementById('index_nav').style.top=0;
			document.getElementById('index_nav').style.position='fixed';
			document.getElementById('index_nav_img').style.display='block';
		}else {
			document.getElementById('index_nav').style.top='130px';
			document.getElementById('index_nav').style.position='static';
			document.getElementById('index_nav_img').style.display='none';
		}
}