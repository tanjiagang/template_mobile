$(window).ready(function () {
	 new WOW().init();
	 FastClick.attach( document.body );
	 
	// ************
	// *** 首页 ***
	// ************
	
	// 回到顶部
	$('.back-top').on('click', function(){
		$('html,body').animate({scrollTop: 0}, 200)
	})
	
	// 关闭显示规格弹窗
	$('.guige-show, .select-content .close-btn').on('click', function(){
		$('.select-popup').toggle();
	})
	
	// 关闭显示推广弹窗
	$('.share-btn, .extension .close-btn').on('click', function(){
		$('.extension').toggle();
	})
	
	// 详情页顶部栏显示
	$(window).scroll(function(){
		console.log($(this).innerHeight());
		if($(this).scrollTop() > 100){
			$('.fixed-nav').show()
		} else {
			$('.fixed-nav').hide()
		}
	})
	
	
	$('.search-form input').on('blur', function(){
		$(this).parent().find('.iconfont').show()
	})
	$('.search-form input').on('focus', function(){
		
		$(this).parent().find('.iconfont').hide()
		$(this).val("")
		console.log($(this).val());
	})
	

	
	
})
