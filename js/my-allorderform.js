$(function(){$(".my-menu ul li").mousedown(function(){$(this).addClass("border-bottom").siblings().removeClass("border-bottom");var s=$(this).index();$(".my-nav dd").eq(s).css("display","block").siblings().css("display","none")})});