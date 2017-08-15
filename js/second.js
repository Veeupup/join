	// 小星球动效
	// id="manp"
	$('.dDabumen img').width(cwidth*0.5).height(cwidth*0.5);
    $('.dDabumen').height(cwidth*0.5);
                //$('.dDabumen').width(cwidth*0.5);
                //console.log($('.dDabumen').height()*0.5)
    $('.dDabumen').css({top: cheight*0.5 - $('.dDabumen').height()*0.5 + 'px'});
    $('.bigplanet1').width(cwidth*0.2).height(cwidth*0.2*146/118);
                //$('#marketp').width(cwidth*0.2);
                //$('#marketp').css({left: cwidth*0.5 - $('.bigplanet').width()*0.5 + 'px', top: cheight*0.5 - 160 - $('.bigplanet').height()*0.5 + 'px' })
                //$('#publicrelationp').css({left: cwidth*0.5 - $('.bigplanet').width()*0.5 + 'px', top: cheight*0.5 - 160 - $('.bigplanet').height()*0.5 + 'px' })
    var surroundman = Tweene.line();
    var surroundman1 = Tweene.line();
                //console.log($('#market').width())
    var xstd = cwidth*0.5 - $('.bigplanet1').width()*0.5,
    ystd = cheight*0.5 - $('.bigplanet1').height()*0.5,
    x = 0,
    y = -160,
    angle = 0,
    unit = Math.PI/180;
    x = 160*Math.sin(angle);
    y = -160*Math.cos(angle);
    Tweene.get($('#marketp')).set({left: xstd + x + 'px', top: ystd + y + 'px'})
                //console.log(xstd,ystd)
    while (angle < Math.PI*2){
        angle += unit;
        x = 160*Math.sin(angle);
        y = -160*Math.cos(angle);
        surroundman.add(Tweene.get($('#marketp')).to({left: xstd + x + 'px', top: ystd + y + 'px'}).duration(60).easing([0,0,1,1]));
    }
    angle = Math.PI;
    x = 160*Math.sin(angle);
    y = -160*Math.cos(angle);
    Tweene.get($('#publicrelationp')).set({left: xstd + x + 'px', top: ystd + y + 'px'})
    while (angle < Math.PI*3){
        angle += unit;
        x = 160*Math.sin(angle);
        y = -160*Math.cos(angle);
        surroundman1.add(Tweene.get($('#publicrelationp')).to({left: xstd + x + 'px', top: ystd + y + 'px'}).duration(60).easing([0,0,1,1]));
    }
    $('#man').on('click',function(){
        surroundman.restart();
        surroundman1.restart();
    })

    // id="infop"
    $('.dDabumen img').width(cwidth*0.5).height(cwidth*0.5);
    $('.dDabumen').height(cwidth*0.5);
            //$('.dDabumen').width(cwidth*0.5);
            //console.log($('.dDabumen').height()*0.5)
    $('.dDabumen').css({top: cheight*0.5 - $('.dDabumen').height()*0.5 + 'px'});
    $('.bigplanet1').width(cwidth*0.2).height(cwidth*0.2*146/118);
            //$('#marketp').width(cwidth*0.2);
            //$('#marketp').css({left: cwidth*0.5 - $('.bigplanet').width()*0.5 + 'px', top: cheight*0.5 - 160 - $('.bigplanet').height()*0.5 + 'px' })
            //$('#publicrelationp').css({left: cwidth*0.5 - $('.bigplanet').width()*0.5 + 'px', top: cheight*0.5 - 160 - $('.bigplanet').height()*0.5 + 'px' })
    var surroundinfo = Tweene.line();
    var surroundinfo1 = Tweene.line();
    var surroundinfo2 = Tweene.line();
            //console.log($('#market').width())
    var xstd = cwidth*0.5 - $('.bigplanet1').width()*0.5,
    ystd = cheight*0.5 - $('.bigplanet1').height()*0.5,
    x = 0,
    y = -160,
    angle = 0,
    unit = Math.PI/180;
    x = 160*Math.sin(angle);
    y = -160*Math.cos(angle);
    Tweene.get($('#newsp')).set({left: xstd + x + 'px', top: ystd + y + 'px'})
            //console.log(xstd,ystd)
            while (angle < Math.PI*2){
                angle += unit;
                x = 160*Math.sin(angle);
                y = -160*Math.cos(angle) + 160;
                surroundinfo.add(Tweene.get($('#newsp')).to({transform: "translate(" + x + 'px,' + y + 'px'}).duration(60).easing([0,0,1,1]));
            }
            angle = Math.PI/180*120;
            x = 160*Math.sin(angle);
            y = -160*Math.cos(angle);
            Tweene.get($('#moviep')).set({left: xstd + x + 'px', top: ystd + y + 'px'})
            while (angle < Math.PI/180*480){
                angle += unit;
                x = 160*Math.sin(angle) - 160*Math.sin(Math.PI/180*120);
                y = -160*Math.cos(angle) + 160*Math.cos(Math.PI/180*120);
                surroundinfo1.add(Tweene.get($('#moviep')).to({transform: "translate(" + x + 'px,' + y + 'px'}).duration(60).easing([0,0,1,1]));
            }
            angle = Math.PI/180*240;
            x = 160*Math.sin(angle);
            y = -160*Math.cos(angle);
            Tweene.get($('#newmediap')).set({left: xstd + x + 'px', top: ystd + y + 'px'})
            while (angle < Math.PI/180*600){
                angle += unit;
                x = 160*Math.sin(angle) - 160*Math.sin(Math.PI/180*240);
                y = -160*Math.cos(angle) + 160*Math.cos(Math.PI/180*240);
                surroundinfo2.add(Tweene.get($('#newmediap')).to({transform: "translate(" + x + 'px,' + y + 'px'}).duration(60).easing([0,0,1,1]));
            }
            $('#info').on('click',function(){
                surroundinfo.restart();
                surroundinfo1.restart();
                surroundinfo2.restart();
            })

    // id="techp"
    $('.dDabumen img').width(cwidth*0.5).height(cwidth*0.5);
            $('.dDabumen').height(cwidth*0.5);
            //$('.dDabumen').width(cwidth*0.5);
            //console.log($('.dDabumen').height()*0.5)
            $('.dDabumen').css({top: cheight*0.5 - $('.dDabumen').height()*0.5 + 'px'});
            $('.bigplanet1').width(cwidth*0.2).height(cwidth*0.2*146/118);
            //$('#marketp').width(cwidth*0.2);
            //$('#marketp').css({left: cwidth*0.5 - $('.bigplanet').width()*0.5 + 'px', top: cheight*0.5 - 160 - $('.bigplanet').height()*0.5 + 'px' })
            //$('#publicrelationp').css({left: cwidth*0.5 - $('.bigplanet').width()*0.5 + 'px', top: cheight*0.5 - 160 - $('.bigplanet').height()*0.5 + 'px' })
            var surroundtech = Tweene.line();
            var surroundtech1 = Tweene.line();
            var surroundtech2 = Tweene.line();
            var surroundtech3 = Tweene.line();
            //console.log($('#market').width())
            var xstd = cwidth*0.5 - $('.bigplanet1').width()*0.5,
                ystd = cheight*0.5 - $('.bigplanet1').height()*0.5,
                x = 0,
                y = -160,
                angle = 0,
                unit = Math.PI/180;
                x = 160*Math.sin(angle);
                y = -160*Math.cos(angle);
                Tweene.get($('#productp')).set({left: xstd + x + 'px', top: ystd + y + 'px'})
            //console.log(xstd,ystd)
            while (angle < Math.PI*2){
                angle += unit;
                x = 160*Math.sin(angle);
                y = -160*Math.cos(angle) + 160;
                surroundtech.add(Tweene.get($('#productp')).to({transform: "translate(" + x + 'px,' + y + 'px'}).duration(60).easing([0,0,1,1]));
            }
            angle = Math.PI/180*90;
            x = 160*Math.sin(angle);
            y = -160*Math.cos(angle);
            Tweene.get($('#frontend-and-artp')).set({left: xstd + x + 'px', top: ystd + y + 'px'})
            while (angle < Math.PI/180*450){
                angle += unit;
                x = 160*Math.sin(angle) - 160*Math.sin(Math.PI/180*90);
                y = -160*Math.cos(angle) + 160*Math.cos(Math.PI/180*90);
                surroundtech1.add(Tweene.get($('#frontend-and-artp')).to({transform: "translate(" + x + 'px,' + y + 'px'}).duration(60).easing([0,0,1,1]));
            }
            angle = Math.PI/180*180;
            x = 160*Math.sin(angle);
            y = -160*Math.cos(angle);
            Tweene.get($('#backappp')).set({left: xstd + x + 'px', top: ystd + y + 'px'})
            while (angle < Math.PI/180*540){
                angle += unit;
                x = 160*Math.sin(angle) - 160*Math.sin(Math.PI/180*180);
                y = -160*Math.cos(angle) + 160*Math.cos(Math.PI/180*180);
                surroundtech2.add(Tweene.get($('#backappp')).to({transform: "translate(" + x + 'px,' + y + 'px'}).duration(60).easing([0,0,1,1]));
            }
            angle = Math.PI/180*270;
            x = 160*Math.sin(angle);
            y = -160*Math.cos(angle);
            Tweene.get($('#backendp')).set({left: xstd + x + 'px', top: ystd + y + 'px'})
            while (angle < Math.PI/180*630){
                angle += unit;
                x = 160*Math.sin(angle) - 160*Math.sin(Math.PI/180*270);
                y = -160*Math.cos(angle) + 160*Math.cos(Math.PI/180*270);
                surroundtech3.add(Tweene.get($('#backendp')).to({transform: "translate(" + x + 'px,' + y + 'px'}).duration(60).easing([0,0,1,1]));
            }
            $('#tech').on('click',function(){
                surroundtech.restart();
                surroundtech1.restart();
                surroundtech2.restart();
                surroundtech3.restart();
            })

	// 简介页动效
	// 市场部
	$("#market-o>.content-J").css("background-image", "url('./images/ShiChang/bg@3x.jpg')");
	// 创建时间轴
	var market_o_t1 = Tweene.line(); 
    // 开头动效
	market_o_t1.add(Tweene.get($("#market-o .icon img")).set({display: 'none'}));
	market_o_t1.add(startJfuc('#market-o'));
	// 星系出现
	market_o_t1.add(fadeIn('#market-o .icon img:nth-child(1)', 800));
	// 星球出现并旋转
	var market_o_Turn = function(number, x0, y0, dx, dy, Xs, dxyS, speed){
		if(speed == undefined){ speed = 1000 }
		var TimeLine = Tweene.line();
		TimeLine.add(Tweene.get('#market-o .icon img:nth-child(' + number + ')').set({ left: x0 + 'rem', top: y0 + 'rem'}));
		TimeLine.add(fadeIn('#market-o .icon img:nth-child(' + number + ')', 1000));
		TimeLine.add(FangDaChuXianfuc('#market-o .icon img:nth-child(' + number + ')', 1000),'-=1000');
		TimeLine.add(Tweene.get('#market-o .icon img:nth-child(' + number + ')').to({translateX: dx*fontSize, translateY: dy*fontSize}).easing([0, 0, 1, 1]).duration(speed),'-=1000');
		TimeLine.add(ZiXuanfuc('#market-o .icon img:nth-child(' + number + ')', Xs, dxyS));
		return TimeLine;
	}
	market_o_t1.add(market_o_Turn(2, wwidth+10, wheight+12, -12, -8, 2000, '60% -86%'), '1200');
	market_o_t1.add(market_o_Turn(3, wwidth-14, wheight+5, 10.6, -9.5, 2000, '112% 185%'), '3600');
	market_o_t1.add(market_o_Turn(4, wwidth-14, wheight-20, 16, 16.5, 2000, '-62% 150%', 1200), '2800');
	market_o_t1.add(market_o_Turn(5, wwidth+14, wheight-8, -12, 10.6, 2000, '-66% -60%'), '2000');
	// 星系旋转变化
	var market_o_t2 = Tweene.line();
	market_o_t2.add(Tweene.get($('#market-o .icon img:nth-child(1)'))
		.from({opacity: 1})
		.to({opacity: 0.5})
		.easing([0, 0, 1, 1])
		.loops(-1)
		.yoyo(true)
		.duration(1000));
	market_o_t1.add(ZiXuanfuc('#market-o .icon img:nth-child(1)', 2000), '1000').add(market_o_t2, '1800');
	// 结束动效
	market_o_t1.add(endJfuc('#market-o'), '4800');        
	// 动画监听事件
	$('#market-o a').click(function(){ market_o_t1.pause(); });
	$("a[href='#market-o']").click(function(){ $('#market-o img[remark]').attr('src',function(){return $(this).attr('remark')}); market_o_t1.play(); });

	// 公关部
	$("#publicrelation-o>.content-J").css("background-image", "url('./images/GongGuan/bg@3x.jpg')");
	// 创建时间轴
	var publicrelation_o_t1 = Tweene.line();         
	// 开头动效
	publicrelation_o_t1.add(Tweene.get($("#publicrelation-o .icon img")).set({display: 'none'}));
	publicrelation_o_t1.add(startJfuc('#publicrelation-o'));
	// 宇航员出现
	publicrelation_o_t1.add(fadeIn($('#publicrelation-o .icon img:nth-child(1)'), 800));
	// 领结变色
	publicrelation_o_t1.add(Tweene.get($('#publicrelation-o .icon img:nth-child(2)')).set({display: 'inline'}));
	for(var j = 0; j < 2; j++){
		for(var i = 3; i < 7; i++){
		    publicrelation_o_t1.add(Tweene.get($('#publicrelation-o .icon img:nth-child('+i+')')).set({display: 'inline'}),'+=100');
		}
		for(var i = 6; i > 2; i--){
			publicrelation_o_t1.add(Tweene.get($('#publicrelation-o .icon img:nth-child('+i+')')).set({display: 'none'}),'+=100');
		}                
	}
	// 结束动效
	publicrelation_o_t1.add(endJfuc('#publicrelation-o'), '-=500');
	// 动画监听事件
	$('#publicrelation-o a').click(function(){ publicrelation_o_t1.pause(); });
	$("a[href='#publicrelation-o']").click(function(){ $('#publicrelation-o img[remark]').attr('src',function(){return $(this).attr('remark')}); publicrelation_o_t1.play(); });

	// 新闻部
	$("#news-o>.content-J").css("background-image", "url('./images/XinWen/bg@3x.jpg')");
	// 话筒
	$('#news-o .icon #voice').css({left: wwidth+1.5 + 'rem', top: 14.2+ 'rem'}).slip;
		var bg = $("#news-o .icon #bg");
		var bg_img = $("#news-o .icon #bg img")
		bg.css({left: wwidth+4 + 'rem', top: 14.2+ 'rem'});
		bg_img.css({left: -(wwidth+4) + 'rem', top: -14.2 + 'rem', width: wwidth * 2 + 'rem'});
	// 话筒遮挡设置
	$('#news-o .icon #news-o-voice').css({left: wwidth+0.9 + 'rem', top: 8.5+ 'rem'});
	var news_o_obg = $("#news-o .icon #news-o-bg");
	var news_o_obg_img = $("#news-o .icon #news-o-bg img")
	news_o_obg.css({left: wwidth+3.1 + 'rem', top: 8.5+ 'rem'});
	news_o_obg_img.css({left: -(wwidth+3.1) + 'rem', top: -8.5 + 'rem', width: wwidth * 2 + 'rem'});
	// 创建时间轴
	var news_o_t1 = Tweene.line();
	// 开头动效
	news_o_t1.add(Tweene.get($("#news-o .icon #news-o-sun")).set({display: 'none'}));
	news_o_t1.add(Tweene.get($("#news-o .icon #news-o-img img")).set({display: 'none'}));              
	news_o_t1.add(startJfuc('#news-o'));
	// 太阳出现
	var news_o_osun = $('#news-o .icon #news-o-img img:nth-child(1)');
	news_o_t1.add(fadeIn(news_o_osun, 800));
	news_o_t1.add(fadeIn($('#news-o .icon #news-o-sun'), 0.1));
	// 话筒出现
	news_o_t1.add(Tweene.get(news_o_obg)
		.to({height: 0 + 'rem', translateY: 28.2*fontSize})
		.easing([0, 0, 1, 1])
		.duration(1000));
	news_o_t1.add(Tweene.get(news_o_obg_img)
		.to({translateY: -28.2 *fontSize})
		.easing([0, 0, 1, 1])
		.duration(1000), '-=1000');
	news_o_t1.add(fadeOut(news_o_osun, 220), '-=100');
	// 嘴巴出现
	var news_o_omouse = $('#news-o .icon #news-o-img img:nth-child(2)');
	news_o_t1.add(fadeIn(news_o_omouse, 800));
	// 字出现
	news_o_t1.add(MaoChuXiaoShifuc($('#news-o .icon #news-o-img img:nth-child(3)'), -0.6, 3.6, -10, -4, 1800, false), '3500');  //A       
	news_o_t1.add(MaoChuXiaoShifuc($('#news-o .icon #news-o-img img:nth-child(17)'), -0.4, 3.8, -11, -1.5, 1800, false), '3800');  //o
	news_o_t1.add(MaoChuXiaoShifuc($('#news-o .icon #news-o-img img:nth-child(5)'), -0.6, 3.6, -9, -1, 1500, false), '4100');  //C
	news_o_t1.add(MaoChuXiaoShifuc($('#news-o .icon #news-o-img img:nth-child(14)'), -0.3, 3.6, -10, 1, 1500, false), '4400');  //L        
	news_o_t1.add(MaoChuXiaoShifuc($('#news-o .icon #news-o-img img:nth-child(4)'), -0.4, 3.6, -7, -2.5, 1500, false), '4600');  //B       
	news_o_t1.add(MaoChuXiaoShifuc($('#news-o .icon #news-o-img img:nth-child(6)'), -0.4, 3.8, -7, -0.2, 1200, false), '4800');  //d        
	news_o_t1.add(MaoChuXiaoShifuc($('#news-o .icon #news-o-img img:nth-child(8)'), -0.4, 3.6, -5.5, -0.4, 1000, false), '5000');  //F
	news_o_t1.add(MaoChuXiaoShifuc($('#news-o .icon #news-o-img img:nth-child(7)'), -0.4, 4, -7.8, 1.2, 1200, false), '5200');  //e
	news_o_t1.add(MaoChuXiaoShifuc($('#news-o .icon #news-o-img img:nth-child(10)'), -0.4, 3.6, -8.5, 2.5, 1200, false), '5400');  //h
	news_o_t1.add(MaoChuXiaoShifuc($('#news-o .icon #news-o-img img:nth-child(11)'), -0.2, 3.6, -6.5, 2.4, 1000, false), '5600');  //I
	news_o_t1.add(MaoChuXiaoShifuc($('#news-o .icon #news-o-img img:nth-child(9)'), -0.4, 4, -5, 2.1, 1000, false), '5700');  //g 
	news_o_t1.add(MaoChuXiaoShifuc($('#news-o .icon #news-o-img img:nth-child(16)'), -0.4, 3.6, -4, -1, 1000, false), '5800');  //N
	news_o_t1.add(MaoChuXiaoShifuc($('#news-o .icon #news-o-img img:nth-child(12)'), -0.4, 3.6, -4.2, 3, 800, false), '5900');  //J
	news_o_t1.add(MaoChuXiaoShifuc($('#news-o .icon #news-o-img img:nth-child(13)'), -0.4, 3.6, -3, 1, 800, false), '6000');  //K        
	news_o_t1.add(MaoChuXiaoShifuc($('#news-o .icon #news-o-img img:nth-child(15)'), -0.4, 3.8, -2.5, 3, 500, false), '6100');  //M
	// 嘴巴动
	var news_o_t2 = Tweene.line();
	var i = 0;
	while(i<3){
		news_o_t2.add(Tweene.get(news_o_omouse)
		    .to({scaleY: 0.5})
		    .duration(250));
		news_o_t2.add(Tweene.get(news_o_omouse)
		    .to({scaleX: 1.5})
		    .duration(250));
		news_o_t2.add(Tweene.get(news_o_omouse)
		    .to({scaleX: 1})
		    .duration(250));
		news_o_t2.add(Tweene.get(news_o_omouse)
		    .to({scaleY: 1})
		    .duration(250));
		i++;
	}
	news_o_t1.add(news_o_t2, '3600');
	// 结束动效
	news_o_t1.add(endJfuc('#news-o'), '6500');  
	// 动画事件监听
	$('#news-o a').click(function(){ news_o_t1.pause(); });
	$("a[href='#news-o']").click(function(){ $('#news-o img[remark]').attr('src',function(){return $(this).attr('remark')});news_o_t1.play(); });

	// 影视部
	$("#movie-o>.content-J").css("background-image", "url('./images/YinShi/bg@3x.jpg')");
	// 创建时间轴
	var movie_o_t1 = Tweene.line();         
	// 开头动效
	movie_o_t1.add(Tweene.get($("#movie-o .icon img")).set({display: 'none'}));
	movie_o_t1.add(startJfuc('#movie-o'));
	// 摄像机出现
    movie_o_t1.add(Tweene.get($("#movie-o .icon img:nth-child(1)"))
	    .from({translateX: -4.5*fontSize, translateY: -1*fontSize, opacity: 0, display: 'inline'})
	    .to({translateX: -4.5*fontSize, translateY: -1*fontSize, opacity: 1, display: 'inline'})
	    .duration(900));
    movie_o_t1.add(Tweene.get($("#movie-o .icon img:nth-child(2)"))
        .from({translateX: -5*fontSize, translateY: -7*fontSize, opacity: 0, display: 'inline'})
        .to({translateX: -5*fontSize, translateY: -7*fontSize, opacity: 1, display: 'inline'})
        .duration(900), '-=900');
	// 摄像机移动
    movie_o_t1.add(Tweene.get($("#movie-o .icon img:nth-child(1)"))
        .to({translateX: -13*fontSize, height: 0 + 'rem'})
        .duration(3400));
    movie_o_t1.add(Tweene.get($("#movie-o .icon img:nth-child(2)"))
        .to({translateX: -13.2*fontSize, height: 0 + 'rem', translateY: -1*fontSize})
        .duration(3400), '-=3400');
	// 摄像机镜头旋转
	movie_o_t1.add(Tweene.get($("#movie-o .icon img:nth-child(2)"))
        .to({rotation: -20, transformOrigin: '19% 50%'})
        .duration(500)
        , '1800');
    movie_o_t1.add(Tweene.get($("#movie-o .icon img:nth-child(2)"))
        .to({rotation: 20, transformOrigin: '19% 50%'})
        .duration(1000)
        , '2300');
    movie_o_t1.add(Tweene.get($("#movie-o .icon img:nth-child(2)"))
        .to({rotation: -20, transformOrigin: '19% 50%'})
        .duration(1000)
        , '3300');
	// 结束动效
	movie_o_t1.add(endJfuc('#movie-o'), '2800');
	// 动画事件监听
	$('#movie-o a').click(function(){
		movie_o_t1.pause();
	});
	$("a[href='#movie-o']").click(function(){ $('#movie-o img[remark]').attr('src',function(){return $(this).attr('remark')});movie_o_t1.play(); });

	// 新媒体部
	$("#newmedia-o>.content-J").css("background-image", "url('./images/XinMei/bg@3x.jpg')");
	// 创建时间轴
	var newmedia_o_t1 = Tweene.line();         
	// 开头动效
	newmedia_o_t1.add(Tweene.get($("#newmedia-o .icon img")).set({display: 'none'}));
	newmedia_o_t1.add(Tweene.get($("#newmedia-o .icon span")).set({display: 'none'}));
	newmedia_o_t1.add(startJfuc('#newmedia-o'));
	// 旋涡出现
	newmedia_o_t1.add(fadeIn($('#newmedia-o .icon #newmedia-o-img1 img:nth-child(1)'), 800));
	// 旋转与变色     
	newmedia_o_t1.add(ZiXuanfuc($('#newmedia-o .icon #newmedia-o-img1 img:nth-child(1)'), 800), '1000');
	newmedia_o_t1.add(Tweene.get($('#newmedia-o .icon #newmedia-o-img1 img:nth-child(1)'))
		.from({opacity: 0.5})
		.to({opacity: 1})
		.easing([0, 0, 1, 1])
		.loops(-1)
		.yoyo(true)
		.duration(800), '1000');
	// 内容出现
	newmedia_o_t1.add(MaoChuXiaoShifuc($('#newmedia-o .icon #newmedia-o-img2 span:nth-child(1)'), -2, 1, 4.2, 0.2, 1000, true, 2000), '2100');
	newmedia_o_t1.add(MaoChuXiaoShifuc($('#newmedia-o .icon #newmedia-o-img2 span:nth-child(2)'), -2, 1, 3.2, 4.2, 1000, true, 2000), '2000');
	newmedia_o_t1.add(MaoChuXiaoShifuc($('#newmedia-o .icon #newmedia-o-img2 span:nth-child(3)'), -2.7, 1, -4.2, 5.4, 1000, true, 2000), '1900');
	newmedia_o_t1.add(MaoChuXiaoShifuc($('#newmedia-o .icon #newmedia-o-img1 img:nth-child(2)'), -1.4, 1, -7.2, 1.2, 1000, true, 2000), '1800');
	newmedia_o_t1.add(MaoChuXiaoShifuc($('#newmedia-o .icon #newmedia-o-img2 span:nth-child(4)'), -1.7, 1, -4.7, -2.7, 1000, true, 2000), '1700');
	newmedia_o_t1.add(MaoChuXiaoShifuc($('#newmedia-o .icon #newmedia-o-img2 span:nth-child(5)'), -1.7, 1.1, 0, -3.2, 1000, true, 2000), '1600');
	newmedia_o_t1.add(MaoChuXiaoShifuc($('#newmedia-o .icon #newmedia-o-img1 img:nth-child(3)'), -1.2, 1.2, 1.6, -1, 1000, true, 2000), '1500');
	newmedia_o_t1.add(MaoChuXiaoShifuc($('#newmedia-o .icon #newmedia-o-img2 span:nth-child(6)'), -1.5, 1.3, 0.6, 2, 1000, true, 2000), '1400');
	newmedia_o_t1.add(MaoChuXiaoShifuc($('#newmedia-o .icon #newmedia-o-img2 span:nth-child(7)'), -1.5, 1.3, -1.4, 3.6, 1000, true, 2000), '1300');
	newmedia_o_t1.add(MaoChuXiaoShifuc($('#newmedia-o .icon #newmedia-o-img2 span:nth-child(8)'), -1.5, 1.3, -3.2, 1.2, 1000, true, 2000), '1200');
	newmedia_o_t1.add(MaoChuXiaoShifuc($('#newmedia-o .icon #newmedia-o-img2 span:nth-child(9)'), -1.5, 1.3, -1.8, -0.9, 1000, true, 2000), '1100');
	// 结束动效
	newmedia_o_t1.add(endJfuc('#newmedia-o'), '2400');  
	// 动画事件监听
	$('#newmedia-o a').click(function(){
		newmedia_o_t1.pause();
	})
	$("a[href='#newmedia-o']").click(function(){ $('#newmedia-o img[remark]').attr('src',function(){return $(this).attr('remark')});newmedia_o_t1.play(); });

	// 产品部
	$("#product-o>.content-J").css("background-image", "url('./images/ChanPin/bg@2x.jpg')");
	// 创建时间轴
	var product_o_t1 = Tweene.line();         
	// 开头动效
	product_o_t1.add(Tweene.get($("#product-o .icon #product-o-line>div")).set({display: 'none'}));
	product_o_t1.add(Tweene.get($("#product-o .icon #product-o-ball>img")).set({display: 'none'}));
	product_o_t1.add(startJfuc('#product-o'));

	// 灯泡出现
	product_o_t1.add(fadeIn($("#product-o .icon #product-o-ball img:nth-child(1)"), 800));
	// 星球出现
	var product_o_arr = [5, 15, 11, 21, 3, 17, 9, 19, 7, 13]
	for(var product_o_i = 0 ; product_o_i < 10; product_o_i++){
		product_o_t1.add(fadeIn($("#product-o .icon #product-o-ball img:nth-child("+product_o_arr[product_o_i]+")"), 200));
	}
	// 星球发光与连线函数
	var Shinefuc = function(number, x, y, t){
		if(t == undefined){ t = 200; }
		var TimeLine = Tweene.line(); 
		TimeLine.add(Tweene.get($("#product-o .icon #product-o-ball img:nth-child("+number+")"))
			.set({width: '+=5px', translateX: x*fontSize-2.5, translateY: y*fontSize-2.5})
	        .from({opacity: 0, display: 'inline'})
	        .to({opacity: 1, display: 'inline'})
	        .duration(t));
		return TimeLine;
	}
	var LianXianfuc = function(number, width){
		var TimeLine = Tweene.line(); 
		TimeLine.add(Tweene.get($("#product-o .icon #product-o-line div:nth-child("+number+")"))
            .from({display: 'inline', width: '0'})
            .to({display: 'inline', width: width + 'rem'})
            .duration(200));
		return TimeLine;
	}
	// 左侧星球发光并连线1
	var product_o_t2 = Tweene.line();       
    product_o_t2.add(Shinefuc(6, -9, -6));
    product_o_t2.add(LianXianfuc(1, 3.2));
    product_o_t2.add(Shinefuc(4, -4.6, -6));
    product_o_t2.add(LianXianfuc(2, 3.2));
    product_o_t2.add(LianXianfuc(3, 4.8), '-=100');
    product_o_t2.add(Shinefuc(8, -10, -1.5));
    product_o_t2.add(LianXianfuc(5, 3.2));
    product_o_t2.add(LianXianfuc(8, 1.8));
	//左侧星球发光并连线2
    var product_o_t3 = Tweene.line();
    product_o_t3.add(Shinefuc(12, -7.5, 6));
    product_o_t3.add(LianXianfuc(4, 3.3));
    product_o_t3.add(Shinefuc(10, -5.5, 2));
    product_o_t3.add(LianXianfuc(6, 5.8));
    product_o_t3.add(LianXianfuc(7, 2.9));
    product_o_t3.add(Shinefuc(2, -3, -2, 1500));  // 灯泡发亮
	//右侧星球发光并连线1
    var product_o_t4 = Tweene.line();       
    product_o_t4.add(Shinefuc(16, 9, -4.5));
    product_o_t4.add(LianXianfuc(9, 3.2));
    product_o_t4.add(Shinefuc(18, 7, -0.5));
    product_o_t4.add(LianXianfuc(10, 3.8));
    product_o_t4.add(LianXianfuc(11, 4.2), '-=100');
    product_o_t4.add(Shinefuc(14, 3, -5.5));
    product_o_t4.add(LianXianfuc(13, 5));
    product_o_t4.add(LianXianfuc(15, 1.5));
	//右侧星球发光并连线2
    var product_o_t5 = Tweene.line();
    product_o_t5.add(Shinefuc(22, 5, 5.8));
    product_o_t5.add(LianXianfuc(12, 2.8));
    product_o_t5.add(Shinefuc(20, 4.2, 2));
    product_o_t5.add(LianXianfuc(14, 2));
    product_o_t5.add(LianXianfuc(16, 2.4), '+=600');
	product_o_t1.add(product_o_t2, '2000').add(product_o_t3, '2400').add(product_o_t5, '2200').add(product_o_t4, '2600');
    // 结束动效
	product_o_t1.add(endJfuc('#product-o'));
	// 动画事件监听
	$('#product-o a').click(function(){ product_o_t1.pause(); });
	$("a[href='#product-o']").click(function(){ $('#product-o img[remark]').attr('src',function(){return $(this).attr('remark')}); product_o_t1.play(); });

	// 前端美工组
	$("#frontend-and-art-o>.content-J").css("background-image", "url('./images/QianDuan/bg@2x.jpg')");
	// 创建时间轴
	var frontend_o_t1 = Tweene.line();         
	// 开头动效
	frontend_o_t1.add(Tweene.get($("#frontend-and-art-o .icon img")).set({display: 'none'}))
	frontend_o_t1.add(startJfuc('#frontend-and-art-o'));
	// 飞机出现
	frontend_o_t1.add(Tweene.get($('#frontend-and-art-o .icon #frontend-plane'))
    	.from({left: -10 +'rem', top: wheight*0.85 + 'rem', display: 'inline'})
        .to({left: wwidth +'rem', top: wheight*0.85 + 'rem', display: 'inline'})
        .duration(1000));
	// 块抛出
    var Paofuc = function(str, h, w, a){
        var TimeLine = Tweene.line(); 
        TimeLine.add(Tweene.get($('#frontend-and-art-o .icon ' + str))
        	.set({display: 'inline', left: wwidth +'rem', top: wheight * h + 'rem'}));
		var x = wwidth, y;
		while(x > wwidth * w){
			x = x - 1;
			if(x < wwidth * w){ x = wwidth * w; }
			y = a * (x - wwidth) * (x - (wwidth * w)) + wheight * h;
			TimeLine.add(Tweene.get($('#frontend-and-art-o .icon ' + str))
				.to({ translateX: (x-wwidth)*fontSize, translateY: (y-wheight*h)*fontSize})
			    .duration(50));
		}
        return TimeLine;
    }
	frontend_o_t1.add(Paofuc('#frontend-css', 0.85, 0.3, 0.2));
    frontend_o_t1.add(Paofuc('#frontend-ai', 1.05, 0.3, 0.35));
    frontend_o_t1.add(Paofuc('#frontend-js', 0.85, 0.6, 0.25));
    frontend_o_t1.add(Paofuc('#frontend-ps', 1.05, 0.6, 0.2));
	// 结束动效
	frontend_o_t1.add(endJfuc('#frontend-and-art-o'));
	// 动画事件监听
	$('#frontend-and-art-o a').click(function(){ frontend_o_t1.pause(); });
	$("a[href='#frontend-and-art-o']").click(function(){ $('#frontend-and-art-o img[remark]').attr('src',function(){return $(this).attr('remark')}); frontend_o_t1.play(); });

	// 后台app组
	$("#backapp-o>.content-J").css("background-image", "url('./images/App/bg@3x.jpg')");
	// 创建时间轴
	var backapp_o_t1 = Tweene.line();
	// 开头动效
	backapp_o_t1.add(Tweene.get($("#backapp-o .icon img")).set({left: '1rem', bottom: '-15rem'}));
	backapp_o_t1.add(startJfuc('#backapp-o'));
	// 蜜蜂飞出
	var backapp_o_x = 1, backapp_o_y = -15, backapp_o_t = 0, backapp_o_o, backapp_o_z;
	while(backapp_o_x <= wwidth * 2 ){
		backapp_o_y = backapp_o_y + 1;
		backapp_o_x = backapp_o_t * backapp_o_t * backapp_o_t * 0.3;
		backapp_o_o = backapp_o_t * backapp_o_t * backapp_o_t * 0.4;
		backapp_o_z = 1 - backapp_o_t * backapp_o_t * backapp_o_t * 0.015;
		if(backapp_o_z < 0){ backapp_o_z = 0; } 
		backapp_o_t1.add(Tweene.get($("#backapp-o .icon img"))
		    .to({translateX: (backapp_o_x-1)*fontSize, translateY: (-15-backapp_o_y)*fontSize, rotation: backapp_o_o, scale: backapp_o_z})
		    .duration(35));
		backapp_o_t = backapp_o_t + 0.1;
	}
	// 结束动效
	backapp_o_t1.add(endJfuc('#backapp-o'), '-=1500');
	// 动画事件监听
	$('#backapp-o a').click(function(){ backapp_o_t1.pause(); });
	$("a[href='#backapp-o']").click(function(){ $('#backapp-o img[remark]').attr('src',function(){return $(this).attr('remark')}); backapp_o_t1.play(); });

	// 后台web组
	$("#backend-o>.content-J").css("background-image", "url('./images/web/bg@3x.jpg')");
	// 发光图遮挡设置
	var backend_o_obg = $("#backend-o .icon #backend-o-bg");
	var backend_o_obg_img = $("#backend-o .icon #backend-o-bg img");
	backend_o_obg_img.css({left: 6.8 - wwidth + 'rem', top: 6.9 - wheight + 'rem', width: wwidth * 2 + 'rem'});
	backend_o_obg.css({left: wwidth - 6.8 + 'rem', top: wheight - 6.9 + 'rem'});
	// 创建时间轴
	var backend_o_t1 = Tweene.line();         
	// 开头动效
	backend_o_t1.add(Tweene.get($("#backend-o .icon>img~img")).set({display: 'none'}));
	backend_o_t1.add(startJfuc('#backend-o'));
	// 中央图标出现
	backend_o_t1.add(fadeIn($('#backend-o .icon #backend-o-ball'), 800));
	// 发光
	backend_o_t1.add(Tweene.get(backend_o_obg)
		.to({width: 0 + 'rem', height: 0 + 'rem', translateX: 7*fontSize, translateY: 7*fontSize})
		.easing([0, 0, 1, 1])
		.duration(2000));
	backend_o_t1.add(Tweene.get(backend_o_obg_img)
		.to({translateX: -7*fontSize, translateY: -7*fontSize})
		.easing([0, 0, 1, 1])
		.duration(2000), '-=2000');
	// 飞船飞出        
	var backend_o_oufo = $('#backend-o .icon #backend-o-ufo');
	backend_o_t1.add(Tweene.get(backend_o_oufo).set({display: 'inline', left: wwidth - 2.5 + 'rem', top: wheight - 2.5 + 'rem', scale: 0}));
	var backend_o_x = wwidth - 2.5, backend_o_y = wheight - 2.5, backend_o_d1 = -7.5, backend_o_o = -10, backend_o_d2 = 1, backend_o_z;
	while(backend_o_y > 0 && backend_o_x < wwidth*2){
		backend_o_y = backend_o_y - 1;
		backend_o_x = backend_o_x + 0.1 * backend_o_d1 * backend_o_d2;
		backend_o_o = backend_o_o + backend_o_d2 * 3;
		backend_o_z = 1 - backend_o_d1 * backend_o_d1 * 0.008;
		if(backend_o_z >= 1){ backend_o_z = 1; }
		if(backend_o_o >= 40){ backend_o_o = 40; } 
		backend_o_t1.add(Tweene.get(backend_o_oufo)
		    .to({translateX: (backend_o_x-wwidth+2.5)*fontSize, translateY: (backend_o_y-wheight+2.5)*fontSize, scale: backend_o_z, rotation: backend_o_o})
		    .duration(100));
		backend_o_d1++;
		backend_o_d2++;
	}
	// 结束动效
	backend_o_t1.add(endJfuc('#backend-o'), '-=500');  
	// 动画事件监听
	$('#backend-o a').click(function(){ backend_o_t1.pause(); });
	$("a[href='#backend-o']").click(function(){ $('#backend-o img[remark]').attr('src',function(){return $(this).attr('remark')}); backend_o_t1.play(); });

	// 详情页动效
	// 新闻部
	$("#news-o .more").click(function(){ 
		$('#news img[remark]').attr('src', function(){
			return $(this).attr('remark')
		});
	});
	Tweene.get($("#news .news-contain img")).set({translateY: "-50%"}).play();
	var news_hintfirst = $("#news #news-hint2");
	var news_hintlast = $("#news #news-hint3");
	news_hintfirst.hide();
	news_hintlast.hide();
	var news_station = 0;
	var news_active = 0;
	$("#news").bind('touchend', function(event) {
     	// 翻页提醒
     	if(news_station == 0){
     		Tweene.get($("#news #news-hint1")).to({opacity: 0}).duration(100).play();
     		news_station++;
     	}else{
     		// 前一页
     		if($(event.target).attr("id") == "news-left"){
     			if(news_active == 0){
     				// 已经是第一页
     				var news_t1 = Tweene.line();
     				news_t1.add(fadeIn(news_hintfirst, 100, [0,0,.58,1])).add(fadeOut(news_hintfirst, 1000, [0,0,.58,1]), "+=500").play();
     			}else{
     				Tweene.get($("#news .news-contain:nth-child("+(5-news_active+1)+")")).to({rotateY: "0deg", transformOrigin: "0 0"}).duration(1000).play();
     				news_active--;
     			}
     		};
     		// 后一页
     		if($(event.target).attr("id") == "news-right"){
     			if(news_active == 4){
     				// 已经是最后一页
     				var news_t2 = Tweene.line();
     				news_t2.add(fadeIn(news_hintlast, 100, [0,0,.58,1])).add(fadeOut(news_hintlast, 1000, [0,0,.58,1]), "+=500").play();
     			}else{
     				Tweene.get($("#news .news-contain:nth-child("+(5-news_active)+")")).to({rotateY: "-91deg", transformOrigin: "0 0"}).duration(1000).easing([0,0,.58,1]).play();
     				news_active++;
     			}
     		};
     	}       
	});

	// 公关部
	$("#publicrelation-o .more").click(function(){ 
		$('#publicrelation img[remark]').attr('src', function(){
			return $(this).attr('remark')
		});
		publicrelation_t.restart();
	});
	var publicrelation_t = Tweene.line();
	// 第一部分
	publicrelation_t.add(Tweene.get($("#publicrelation .content-X>div:nth-child(1)")).set({display: "block"}));
	publicrelation_t.add(Tweene.get($("#publicrelation .content-X>div:nth-child(1) p")).set({opacity: 0}));
	for(var publicrelation_i=1; publicrelation_i<4; publicrelation_i++){
		publicrelation_t.add(fadeIn2($("#publicrelation .content-X>div:nth-child(1) p:nth-child("+publicrelation_i+")"), 800), "+=800");
	}
	publicrelation_t.add(fadeOut($("#publicrelation .content-X>div:nth-child(1)"), 500), "+=1000");
	// 第二部分	
	publicrelation_t.add(Tweene.get($("#publicrelation .content-X>div:nth-child(2) div p")).set({display: "none"}));
	publicrelation_t.add(Tweene.get($("#publicrelation .content-X>div:nth-child(2) img")).set({display: "none"}));
	publicrelation_t.add(fadeIn2($("#publicrelation .content-X>div:nth-child(2)"), 800));
	// 2.1	
	publicrelation_t.add(fadeIn2($("#publicrelation .content-X>div:nth-child(2) .publicrelation_one>p:nth-child(1)"), 800), "+=800");
	publicrelation_t.add(fadeIn2($("#publicrelation .content-X>div:nth-child(2) .publicrelation_one>p:nth-child(2)"), 800));
	publicrelation_t.add(fadeIn($("#publicrelation .content-X>div:nth-child(2) img.publicrelation_one"), 1000), "-=1600");
	publicrelation_t.add(fadeOut($("#publicrelation .content-X>div:nth-child(2) .publicrelation_one"), 500), "+=1000");	
	// 2.2	
	publicrelation_t.add(fadeIn2($("#publicrelation .content-X>div:nth-child(2) .publicrelation_two>p:nth-child(1)"), 800));
	publicrelation_t.add(fadeIn2($("#publicrelation .content-X>div:nth-child(2) .publicrelation_two>p:nth-child(2)"), 800));
	publicrelation_t.add(fadeIn($("#publicrelation .content-X>div:nth-child(2) img.publicrelation_two"), 1000), "-=1600");
	publicrelation_t.add(fadeOut($("#publicrelation .content-X>div:nth-child(2)"), 500), "+=1000");
	// 第三部分
	publicrelation_t.add(Tweene.get($("#publicrelation .content-X>div:nth-child(3)")).set({display: "block"}));
	publicrelation_t.add(Tweene.get($("#publicrelation .content-X>div:nth-child(3) p")).set({opacity: 0}));
	for(publicrelation_i=1; publicrelation_i<3; publicrelation_i++){
		publicrelation_t.add(fadeIn2($("#publicrelation .content-X>div:nth-child(3) p:nth-child("+publicrelation_i+")"), 800), "+=800");
	}

	// 影视部
	// 加载图片
    $("a[href='#movie']").on('click',function(){
        $('#movie img[remark]').attr('src',function(){return $(this).attr('remark')});
    });
    var myvideo = document.getElementById('video1');
    // 加载播放视频
    $('#movie-play').on('click',function(){
        if (!myvideo.src) {
			myvideo.src = "./images/media/movie.mp4"
		}
		myvideo.play(); 
	});
    // 样式
                $('#movie-total').css({width: cheight, height: cwidth}).addClass('movie-total-rotate').css({position: 'absolute', left: cwidth});
                $('video').css({width: cheight*0.8, height: cwidth*0.8}).css({left: cwidth});
                $('#movie-control').css({bottom: cheight*0.3});
                $('#movie-control-img').css({width: cheight*0.4498, height: cwidth*0.0933});   

    // 新媒体部
    // 加载图片
    $("a[href='#newmedia']").on('click', function(){
        $('#newmedia').css({'background-image': "url('./images/player/b2.jpg')"})
        $('#newmedia img[remark]').attr('src',function(){return $(this).attr('remark')});
    });
    // 样式
    $("#newmedia #newmedia_word").css({left: 0.2*wwidth + "rem", bottom: 0.2*wheight+1 + "rem"});
    $("#newmedia #newmedia_button").css({left: 0.16*wwidth + "rem"});
    // 加载播放暂停音频
    function weChatPlay(id, state){
        var audio = document.getElementById(id);
		var play = function(state) {
			document.removeEventListener("WeixinJSBridgeReady", play);
			document.removeEventListener("YixinJSBridgeReady", play);
	        if(state){
				audio.play();
			}else{
				audio.pause();
			} 
		};
		if(state){
			audio.play();
		}else{
			audio.pause();
		}
		//weixin
		document.addEventListener("WeixinJSBridgeReady", play, false);
		//yixin
		document.addEventListener('YixinJSBridgeReady', play, false);
    }
	var toggle_control = true;
    $('#toggle-msc').on('click',function(){
        if(toggle_control){
            $('#toggle-msc').attr("src", "./images/player/play.png");
            var audio = document.getElementById("voice0");
	        if (!audio.src) {
				audio.src = "yali.mp3";
			}
			weChatPlay("voice0", toggle_control); 
			lrc_t.resume();
			toggle_control = false;
		}else{
			$('#toggle-msc').attr("src", "./images/player/stop.png");
			weChatPlay("voice0", toggle_control); 
			lrc_t.pause();
			toggle_control = true;
		}
    });
	$('#newmedia .back').on('click',function(){
        $('#toggle-msc').attr("src", "./images/player/stop.png");
		weChatPlay("voice0", toggle_control); 
		lrc_t.pause();
		toggle_control = true;
    });
    
    // 添加动态歌词
    var lrc_t = Tweene.line();
    var wordsmove = function(arr, t){
    	var TimeLine = Tweene.line();
    	var i = 0;
    	var y = 60;
    	while(arr[i] != undefined){
    		TimeLine.add(Tweene.get($('.lrc-real')).to({translateY: -y}).duration(t), arr[i]);
    		i++;
    		y = y + 60;
    	}
    	return TimeLine;
    }
    lrc_t.add(wordsmove([3570, 6370, 9000, 12230, 15610, 18260, 19740, 22230, 24120, 26410, 29550, 31350, 33260, 36380, 39010, 41610, 44350, 49300, 51050, 53260, 56440,  58110,  65430,  68150, 70750], 1000));


    // 前端美工组
    var qianduan_t1 = Tweene.line();
            var rabbit=$('#rabbit')
            var motu=$('#motu')
            var mona=$('#mona')
            var qianduanwidth=$('#frontend-and-art').width()
            $('#rabbit').click(function(){
                alert("a");
                qianduan_t1.add(startJfuc('#frontend-and-art'));
                qianduan_t1.add(fadeOut('#speak',400),0);
                qianduan_t1.add(fadeOut('#rabbit',400),0);
                qianduan_t1.add(Tweene.get(mona)
                                      .to({opacity:0})
                                      .duration(1500),400);
                qianduan_t1.add(Tweene.get(motu)
                                      .to({opacity:1})
                                      .duration(1500),400);
                qianduan_t1.add(Tweene.get($('#monaname'))
                                      .to({opacity:0})
                                      .duration(1500),400);
                qianduan_t1.add(Tweene.get($('#motuname'))
                                      .to({opacity:1})
                                      .duration(1500),400);
                qianduan_t1.add(Tweene.get($('#frontend-and-art img:eq(1),#motu,#motuname,#rabbit'))
                                      .to({opacity:0})
                                      .duration(1000),2500);
                qianduan_t1.add(Tweene.get($('#screen'))
                                      .to({width:qianduanwidth*0.9})
                                      .duration(1000),3500);
                qianduan_t1.add(Tweene.get($('.qianduanword p:eq(0)'))
                                 .to({opacity:1})
                                 .duration(1500));
                qianduan_t1.add(Tweene.get($('.qianduanword p:eq(1)'))
                                 .to({opacity:1})
                                 .duration(1500));
                qianduan_t1.add(Tweene.get($('.qianduanword p:eq(2)'))
                                 .to({opacity:1})
                                 .duration(1500));
                qianduan_t1.add(Tweene.get($('.qianduanword p:eq(3)'))
                                 .to({opacity:1})
                                 .duration(1500));
                qianduan_t1.add(Tweene.get($('.qianduanword p:eq(4)'))
                                 .to({opacity:1})
                                 .duration(1500));
                qianduan_t1.add(Tweene.get($('.qianduanword p:eq(5)'))
                                 .to({opacity:1})
                                 .duration(1500));
                qianduan_t1.play();
            })
	$('#frontend-and-art-o a.more').click(function(){ $('#frontend-and-art img[remark]').attr('src',function(){return $(this).attr('remark')}); });

	// App
	var appwidth=$('#backapp').width()
            var appheight=$('#backapp').height()
			var backapp_t1 = Tweene.line();
			var backappufo = $('#backapp .icon #appufo');
			var backapprobot = $('#backapp .icon #approbot')
			var backapplight = $('#backapp .icon #applight')
			var backappspeak = $('#backapp .icon #appspeak')
			backapp_t1.add(startJfuc('#backapp'));
			backapp_t1.add(Tweene.get(backappufo)
		 				         .to({left:0.35*appwidth})
		  						 .duration(2000));
			backapp_t1.add(Tweene.get(backapplight)
		 				         .to({opacity:1})
		  						 .duration(1000));
			backapp_t1.add(Tweene.get(backapprobot)
		 				         .to({left:0.5*appwidth-40,top:0.79*appheight,width:80,height:80})
		  						 .duration(2000));
			backapp_t1.add(Tweene.get(backapplight)
		 				         .to({opacity:0})
		  						 .duration(1000));
			backapp_t1.add(Tweene.get(backappufo)
		 				         .to({top:0.2*appheight,left:0.6*appwidth,width:1})
		  						 .duration(2000));
			backapp_t1.add(Tweene.get(backappspeak)
		 				         .to({opacity:1})
		  						 .duration(2000));
			backapp_t1.add(Tweene.get($('#backapp p:eq(0)'))
		 				         .to({opacity:1})
		  						 .duration(1500));
			backapp_t1.add(Tweene.get($('#backapp p:eq(1)'))
		 				         .to({opacity:1})
		  						 .duration(1500));
			backapp_t1.add(Tweene.get($('#backapp p:eq(2)'))
		 				         .to({opacity:1})
		  						 .duration(1500));
			backapp_t1.add(Tweene.get($('#backapp p:eq(3)'))
		 				         .to({opacity:1})
		  						 .duration(1500));
			backapp_t1.add(Tweene.get($('#backapp p'))
		 				         .to({opacity:0})
		  						 .duration(1500));
			backapp_t1.add(Tweene.get($('#backapp p:eq(4)'))
		 				         .to({opacity:1})
		  						 .duration(1500));
			$('#backapp-o a.more').click(function(){
                $('#backapp img[remark]').attr('src',function(){return $(this).attr('remark')});
                backapp_t1.play();
            });

	
