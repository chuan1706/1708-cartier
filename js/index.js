

$('.index_nav_list li').bind('mouseover', function () {
    let iIndex = $(this).index();
    console.log(iIndex);
    $('.index_nav_list li').removeClass('active').eq(iIndex).addClass('active');
    $('.index_nav_hover .index_nav_hover_ul').css('display', 'none').eq(iIndex).css({display: 'block'});
});
$('.index_nav_hover_ul').bind('mouseleave', function () {
	$('.index_nav_hover_ul').hide();
});

$('.shizhi').click(function(){
	$('.header_click').animate({'left':'0'}, 1000);
	$('.index_jiantou').animate({'right':'0'}, 1000);
	$('.header_click_box').css('display','block');
});
$('.index_jiantou').click(function(){
	$('.header_click').animate({left:'-80%'}, 1000);
	$('.index_jiantou').animate({right:'-20%'}, 1000);
});
$('.second_list').click(function(){
	$('.header_click').animate({left:'-80%'}, 1000);
	$('.header_second').animate({left:'0%'}, 1000);
	setTimeout(function(){
		$('.header_second').css('opacity','1')
	},500);
	$('.index_jiantou').css('display','none');
});

$('.back').click(function(){
	$('.header_click').animate({left:'0'}, 500);
	$('.header_second').animate({opacity:'0'},'fast');
	$('.index_jiantou').css('display','block');
});

$('.second_back').click(function(){
	setTimeout(function(){
		$('.header_third').css('display','block');
	},500);
});
$('.third_back').click(function(){
	$('.header_third').css('display','none');
	$('.header_second').animate({left:'0'});
});


$('.index_login').click(function(){
	location.href='login.html';
});



$('.active').click(function(){
	$('.span').css('display','block');
	$('.active').css('display','none');
	$('.active2').css('display','block');
});

$('.active2').click(function(){
	$('.span').css('display','none');
	$('.active').css('display','block');
	$('.active2').css('display','none');
});
$('.active1').click(function(){
	$('.span1').css('display','block');
	$('.active1').css('display','none');
	$('.active3').css('display','block');
});

$('.active3').click(function(){
	$('.span1').css('display','none');
	$('.active1').css('display','block');
	$('.active3').css('display','none');
});