$(function(){
/************window.resize*********************************************************************/
    //$(window).resize(function(){
    //    GC.w = document.documentElement.clientWidth;
    //    GC.h = document.documentElement.clientHeight;
    //    $('.page').css({width:GC.w,height:GC.h});
    //    $('.page1 .content').css({width:GC.w,height:GC.h});
    //});
    
    var timeout,isCanMove = false;
    function initDate(){
        //var time = getTime();
        //var str = +":"+time.second+"   "+time.week;
        //$('.page1 .date .time').html(time.hour+':'+time.minutes);
        //$('.page1 .date .week').html(time.month+'月'+time.day+'日'+'  '+time.week);
        //timeout = setTimeout(initDate,1000);
    }
    function getWeek(w){
        var week = ["星期日","星期一","星期二","星期三","星期四","星期五","星期六"];
        return week[w];
    }
    function format(data){
        var result = ('00'+data).substr(((data+"").length == 1) ? 1 : 2);
        return result;
    }

    function page1Play(){
        //alert("in page1Play");
        var li = $('.page1 .message li');
        //for( var i = 0 ; i < li.length; i++ ){
            //(function(index){
                //alert(1111111);
                setTimeout(function(){
                    //alert(2222);
                    li.eq(0).addClass('page1LiAnimate').removeClass('hidden');
                    //alert(li[0].className+"    ,   "+li.eq(0).css('opacity'));
                    $('.tips')[0].currentTime = 0;
                    //$('.tips')[0].play();
                    init.isCanMove = true;
                    //alert(init.isCanMove);
                },1000);
           // })(0);
        //}
    }

    init.initDate = initDate;  // 设置时间循环
    init.page1Play = page1Play;  // 消息显示与消息声音提示

/*********page1 滑动来解锁***********************************************************************/
    var isTouchmove = false,
        startX = 0,
        pStartX = 0,
        pageSwipe = $('.page1 .content').get(0);
        pageSwipe1 = $('.page1 .content').get(1);
        //console.log(pageSwipe1)
    pageSwipe.addEventListener('touchstart',function(event){
        event.preventDefault();
        var touch = event.targetTouches[0];
        startX = touch.pageX;
    },false);
    pageSwipe.addEventListener('touchmove',function(event){
        event.preventDefault();
        var touch = event.targetTouches[0];
        pStartX += touch.pageX - startX;
        startX = touch.pageX;
        $(this).css('left',pStartX);
        if( parseInt($(this).css('left')) > 0 ){
            isTouchmove = true;
        }else{
            isTouchmove = false;
        }
    },false);
    pageSwipe.addEventListener('touchend',function(){
        //alert(init.isCanMove);
        if( isTouchmove ){
            if( 1 ){
                clearTimeout(timeout);
                //if( $('.page1 .unlock')[0].readyState == 4 ){
                    $('.page1 .unlock')[0].play();
                //}
                $('.page1').addClass('hidden');
                showMessage1();
            }else{
                $(this).css('left',0);
            }
        }else{
            $(this).css('left',0);
        }
        pStartX = 0;
        startX = 0;
        isTouchmove = false;
    },false);
    pageSwipe1.addEventListener('touchstart',function(event){
        event.preventDefault();
        var touch = event.targetTouches[0];
        startX = touch.pageX;
    },false);
    pageSwipe1.addEventListener('touchmove',function(event){
        event.preventDefault();
        var touch = event.targetTouches[0];
        pStartX += touch.pageX - startX;
        startX = touch.pageX;
        $(this).css('left',pStartX);
        if( parseInt($(this).css('left')) > 0 ){
            isTouchmove = true;
        }else{
            isTouchmove = false;
        }
    },false);
    pageSwipe1.addEventListener('touchend',function(){
        //alert(init.isCanMove);
        if( isTouchmove ){
            if( 1 ){
                clearTimeout(timeout);
                //if( $('.page1 .unlock')[0].readyState == 4 ){
                    $('.page1 .unlock')[0].play();
                //}
                $('.page1').addClass('hidden');
                showMessage();
            }else{
                $(this).css('left',0);
            }
        }else{
            $(this).css('left',0);
        }
        pStartX = 0;
        startX = 0;
        isTouchmove = false;
    },false);

/**********page2**************************************************************************/
    // 获取早两个小时的时间
    function getEarlyTime(){
        var time = getTime(),
            str = '';
        str += getFirstTime(time.hour - 2);
        if( (time.hour - 2) > 12 ){
            str += format((time.hour - 2 - 12)) + ':';
        }else{
            str += format(time.hour - 2)+':';
        }
        str += format(Math.floor(time.minutes / 3));
        return str;   //昨天 晚上10:23
    }
    // 获取当前时间
    function getCurrentTime(){
        var time = getTime(),
            str = '';
        str += getFirstTime(time.hour);
        if( time.hour > 12 ){
            str += format((time.hour - 12)) + ':';
        }else{
            str += format(time.hour)+':';
        }
        str += format(time.minutes);
        return str;   //昨天 晚上10:23
    }
    // 判断当前时间 所处阶段
    function getFirstTime(hour){
        if( hour < 0 ) {
            return '昨天 晚上';
        }else if( hour >= 0 && hour < 6 ){
            return '凌晨';
        }else if( hour >= 6 && hour < 10 ){
            return '上午';
        }else if( hour >= 10 && hour < 14 ){
            return '中午';
        }else if( hour >= 14 && hour < 18 ){
            return '下午';
        }else if( hour >= 18 && hour < 24 ){
            return '晚上';
        }
    }
    // 获取当前时间
    function getTime(){
        var date = new Date();
        var time = {
            'year':date.getFullYear(),
            'month':date.getMonth() + 1,
            'day':date.getDate(),
            'hour':format(date.getHours()),
            'minutes':format(date.getMinutes()),
            'second':format(date.getSeconds()),
            'week':getWeek(date.getDay())
        };
        return time;
    }
    // 依次显示信息1
    function showMessage(){

        var li = $('#wechat_bg .con .content li');
        $('#wechat_bg').removeClass('hidden');
        //li.eq(0).find('.mTime').html(getEarlyTime());
        //li.eq(2).find('.mTime').html(getCurrentTime());
        $('#wechat_bg .con .content').removeClass('hidden');
        var totalHeight = 0,
            maxHigh = (GC.h / 1039) * 962,
            scrollTotop = 0;
        //console.log(maxHigh);
        $('#wechat_bg .con .content').height((GC.h / 1039) * 962)
        //$('#wechat_bg .con .content').css('top': cheight*0.1)
        for( var j = 0 ; j < 5; j++ ){
            totalHeight += li.eq(j).height();
        }

        for( var i = 0; i < li.length;i++ ){
            (function(ind){
                setTimeout(function(){
                    li.eq(ind+1).addClass('liStart').removeClass('hidden');//.addClass('liAnimate');

                    var h = li.eq(ind+1).height();
                    totalHeight += h;

                    if( totalHeight > maxHigh - 10 ){
                        scrollTotop = totalHeight - maxHigh + 10;
                        setTimeout(function(){
                            $('#wechat_bg .con .content').animate({'top':-scrollTotop+'px'},150);
                            $('#wechat_bg .con .content').css('height',totalHeight + 'px');
                        },(ind == 1) ? 0 : 350);

                    }
                    //if( ind <= 4){
                        //return;
                    //}else{
                        li.eq(ind).removeClass('liStart').addClass('liAnimate');  // 每条消息出现的动画时间为 0.3s
                    //}
                    if( ind == (li.length - 1) ){  // 当播放到最后一条消息时
                        //setTimeout(showPage3,2500);   // 等待1650ms ，显示下一个页面
                        //------------------------------
                        //李磊改
                        //setTimeout("alert('over')", 5000);
                    }
                    //if( $('.tips')[0].readyState == 4 ){
                        $('.tips')[0].currentTime = 0;
                        $('.tips')[0].play();
                    //}
                },(        (ind > 2 ) ? (ind-2) * 1200 : ((ind == 2) ? parseInt(Math.random()*500) + 300 : 0 )      )     );   // 每条消息播放等待时间分别比上一条消息的多 800ms
            })(i);
        }
    }
    // 依次显示信息2
    function showMessage1(){
        var li = $('#market_bg .con .content li');
        $('#market_bg').removeClass('hidden');
        //li.eq(0).find('.mTime').html(getEarlyTime());
        //li.eq(2).find('.mTime').html(getCurrentTime());
        $('#market_bg .con .content').removeClass('hidden');
        var totalHeight = 0,
            maxHigh = (GC.h / 1039) * 962,
            scrollTotop = 0;
        //console.log(maxHigh);
        $('#market_bg .con .content').height((GC.h / 1039) * 962)
        //('#market_bg .con .content').css({'margin-top': cheight*0.1})
        $('#market_bg .con').css({'margin-top': cheight*0.1})
        for( var j = 0 ; j < 5; j++ ){
            totalHeight += li.eq(j).height();
        }

        for( var i = 0; i < li.length;i++ ){
            (function(ind){
                setTimeout(function(){
                    li.eq(ind+1).addClass('liStart').removeClass('hidden');//.addClass('liAnimate');

                    var h = li.eq(ind+1).height();
                    totalHeight += h;

                    if( totalHeight > maxHigh - 10 ){
                        scrollTotop = totalHeight - maxHigh + 10;
                        setTimeout(function(){
                            $('#market_bg .con .content').animate({'top':-scrollTotop+'px'},150);
                            $('#market_bg .con .content').css('height',totalHeight + 'px');
                        },(ind == 1) ? 0 : 350);

                    }
                    //if( ind <= 4){
                        //return;
                    //}else{
                        li.eq(ind).removeClass('liStart').addClass('liAnimate');  // 每条消息出现的动画时间为 0.3s
                    //}
                    if( ind == (li.length - 1) ){  // 当播放到最后一条消息时
                        //setTimeout(showPage3,2500);   // 等待1650ms ，显示下一个页面
                        //------------------------------
                        //李磊改
                        //setTimeout("alert('over')", 5000);
                    }
                    //if( $('.tips')[0].readyState == 4 ){
                        $('.tips')[0].currentTime = 0;
                        $('.tips')[0].play();
                    //}
                },(        (ind > 2 ) ? (ind-2) * 1200 : ((ind == 2) ? parseInt(Math.random()*500) + 500 : 0 )      )     );   // 每条消息播放等待时间分别比上一条消息的多 800ms
            })(i);
        }
    }
/******来电页面 page3 显示*****************************************************************************/
// var minu = 0, sec = 0,voiceTime,isCanAnswer = false,isHangup = false;
//     function showPage3(){
//         // page3 渐显，时间为 1s  1s后隐藏page2  播放page3的音乐（即：来电铃声）
//         $('.page3').removeClass('hidden');
//         //setTimeout(function(){
//             $('.page2').addClass('hidden');
//             //if( $('.page3 .call')[0].readyState == 4 ){
//                 $('.page3 .call')[0].play();   // 来电铃声播放
//             //}
//             isCanAnswer = true;
//         //},1000);
//         //$('.page3').removeClass('hidden').addClass('toBig');//.animate({'width':GC.w / 20 + 'rem','height':GC.h / 20+'rem'},5000);
//     }
//     // 接听按钮点击
//     $('.page3 .answer .answerBtn')[0].addEventListener('touchstart',function(){
//         if( !isCanAnswer ){
//             return;
//         }
//         $('.page3 .call')[0].pause();   // 来电铃声关闭

//         $('.page3 .answer .answerLight').addClass('hidden');
//         $(this).closest('.answer').addClass('moveToCenter');
//         $('.page3 .hangup').animate({'opacity':0},500);
//         setTimeout(function(){  // 500ms 后隐藏page3 显示page4
//             $('.page3 .answer .answerBtn').addClass('toHangup');
//             $('.page3').addClass('hidden');
//             $('.page4').removeClass('hidden');
//             //  初始化时间，并播放语音
//             minu = 0;
//             sec = 0;
//             isHangup = true;
//             //if( $('.page4 .hangupBtn audio')[0].readyState == 4 ){
//                 $('.page4 .hangupBtn audio')[0].play();
//             //}
//             ctrlVoiceTime();
//         },500);
//     },false);
// /******通话页面 page4 显示*****************************************************************************/
//     // 控制 通话 时间
//     //advance = false, // 是否播放文案页
//     var duduTime;   // 嘟嘟声音时间控制
//     function ctrlVoiceTime(){
//         $('.page4 .time').html(format(minu)+':'+format(sec));
//         sec += 1;
//         if( sec >= 60 ){
//             sec = 0;
//             minu += 1;
//         }
//         voiceTime = setTimeout(ctrlVoiceTime,1000);
//         if( (minu * 60 + sec) > 7 ){  // 设定通话时间最大为5秒，五秒后清除通话时间的定时器，并暂停语音，播放嘟嘟声音
//             clearTimeout(voiceTime);
//             $('.page4 .hangupBtn audio')[0].pause();
//             //if( $('.page4 .dudu')[0].readyState == 4 ){
//                 $('.page4 .dudu')[0].play();
//             //}
//             //advance = true;
//             duduTime = setTimeout(function(){   // 嘟嘟声音为4秒，4秒后显示文案页
//                 showPage5();
//             },4000);
//         }
//     }
//     // 通话中 点击挂断按钮
//     $('.page4 .hangupBtn').click(function(){
//         if( !isHangup ){
//             return;
//         }
//         // 清除控制时间定时器  暂停语音  暂停嘟嘟声音 清除嘟嘟声音定时器
//         clearTimeout(voiceTime);
//         clearTimeout(duduTime);
//         $('.page4 .hangupBtn audio')[0].pause();
//         $('.page4 .dudu')[0].pause();
//         //if( ( minu * 60 + sec ) > 7 ){
//         //    advance = true;
//         //}
//         // 显示下一个页面  文案页 或 领取礼物页
//         showPage5();
//     });

//     function showPage5(){
//         // 清除控制时间定时器  暂停语音  暂停嘟嘟声音 清除嘟嘟声音定时器
//         clearTimeout(duduTime);
//         clearTimeout(voiceTime);
//         $('.page4 .hangupBtn audio')[0].pause();
//         $('.page4 .dudu')[0].pause();

//         //if( advance ){
//             // 显示文案页 播放文案页的背景音乐
//         $('.page4').addClass('hidden');
//         $('.page5').removeClass('hidden');
//         //if( $('.page5 .wordBG')[0].readyState == 4 ){
//             $('.page5 .wordBG')[0].play();
//         //}
//         page5Animation();
//         //}else{
//         //    // 显示 礼物领取页
//         //    $('.page4').addClass('hidden');
//         //    $('.page7').removeClass('hidden');
//         //}
//     }
// /******文案页 page5 显示*****************************************************************************/
//     $('.page5 #cycleCanvas').attr({'width':GC.w,'height':GC.h});
//     function page5Animation(){
//         //Game.ctor('cycleCanvas');
//         quotationAnimate();
//         createStart();
//     }
//     // 文案页 page5 第一部分 动画
//     function quotationAnimate(){
//         var li = $('.page5 .quotations li');
//         for( var i = 0; i < li.length; i++ ){
//             (function(index){
//                 setTimeout(function(){
//                     if( index == (li.length - 1) ){   // 如果当前是最后一条文案
//                         li.eq(index).removeClass('hidden').addClass('lastAnimation');
//                         // 最后一条文案 停留 3000ms 后显示第二部分文案
//                         setTimeout(function(){
//                             $('.page5 .message').removeClass('hidden');//.css({'width':GC.w+'px','height':GC.h+'px'});
//                             //$('.page5 .messBG').css({'width':GC.w+'px','height':GC.h+'px'}).addClass('person').removeClass('hidden');
//                             $('.page5 .messBG').addClass('person').removeClass('hidden');
//                             nextAnimate();   // 第二部分文案动画
//                         },2000);
//                     }else{
//                         li.eq(index).removeClass('hidden').addClass('doAnimate');  // 文案显示渐隐时间为2500ms
//                     }
//                 },2500 * index+500);  // 第一条文案等待 500ms  后面的文案比前一条文案多等待 2500ms
//             })(i);
//         }
//     }
//     /***文案页 page5 第二部分 动画******/
//     var restTime,startTime,bigTime,isCan5To7 = false;  // 休息一下的定时器
//     function nextAnimate(){
//         var li = $('.page5 .message li');
//         for( var i = 0 ; i < li.length; i++ ){
//             li.eq(i).addClass('fadeInMove'+i).removeClass('hidden');
//         }
//         setTimeout(function() {
//             li.eq(li.length - 2).addClass('bigAnimate');

//             //restTime = setTimeout(function(){
//             //    page5Topage7();
//             //},15500);
//         },10000);
//         setTimeout(function(){
//             isCan5To7 = true;
//         },9000);
//         //for( var i = 0; i < li.length; i++ ){
//         //    if( i < 2 ){   // 前两条文案 渐隐并移动
//         //        (function(index){
//         //            setTimeout(function(){
//         //                li.eq(index).removeClass('hidden').addClass('fadeInMove');   // fadeInMove 动画  持续 2000ms
//         //            },2500 * index);  // 每条文案比前一条文案显示晚 2500ms
//         //        })(i);
//         //    }else if( i == 2 ){
//         //        li.eq(2).removeClass('hidden').addClass('restFadeIn');
//         //        bigTime = setTimeout(function(){
//         //            li.eq(2).addClass('bigAnimate');
//         //            isCan5To7 = true;
//         //        },6000);
//         //    }else{ // 后两条 只是渐隐  restFadeIn 动画  持续 2000ms
//         //        li.eq(3).removeClass('hidden').addClass('restFadeIn');   // 渐显
//         //        // 设置休息一下循环放大的时间，如果超过  3000ms 未点击，跳转到  礼物领取页面
//         //        restTime = setTimeout(function(){
//         //            page5Topage7();
//         //        },15500);
//         //    }
//         //}
//     }
//     init.nextAnimate = nextAnimate;
//     init.page5Topage7 = page5Topage7;

    // function createStart(){
    //     var p = document.createElement('p');
    //     $('.page5 .start')[0].appendChild(p);
    //     $('.page5 .start p:last').css({'left':Math.floor(Math.random()*GC.w)+'px','top':Math.floor(Math.random()*GC.h)+'px'});

    //     var totalP = $('.page5 .start p');
    //     if( totalP.length > 5 ){
    //         $('.page5 .start')[0].removeChild(totalP[0]);
    //     }
    //     startTime = setTimeout(createStart,Math.floor(Math.random() * 3000));
    // }

    // var page5Rest = $('.page5 .message .rest')[0],
    //     page5 = $('.page5 .message')[0],
    //     isMovePage5 = false;
    // page5Rest.addEventListener('touchstart',function(e){
    //     e.preventDefault();
    //     clearTimeout(restTime);  // 停止 休息一下 的定时器
    //     clearTimeout(startTime);   // 停止 创建星星 的定时器
    //     clearTimeout(bigTime);
    //     page5Topage7();
    // },false);

    // page5.addEventListener('touchstart',function(e){
    //     e.preventDefault();
    // },false);
    // page5.addEventListener('touchmove',function(e){
    //     e.preventDefault();
    //     isMovePage5 = true;
    // },false);
    // page5.addEventListener('touchend',function(){
    //     if( isMovePage5 && isCan5To7 ){
    //         clearTimeout(restTime);  // 停止 休息一下 的定时器
    //         clearTimeout(startTime);   // 停止 创建星星 的定时器
    //         clearTimeout(bigTime);
    //         page5Topage7();
    //     }
    // },false);

    // // 从page5 文案页 跳转到 page7 礼物领取页
    // function page5Topage7(){
    //     clearTimeout(restTime);  // 停止 休息一下 的定时器
    //     clearTimeout(startTime);   // 停止 创建星星 的定时器
    //     clearTimeout(bigTime);
    //     //$('.page5 .wordBG')[0].pause();  // 停止播放背景音乐
    //     // 显示page7 隐藏 page5
    //     //$('.page5 .message').addClass('moveToTop');
    //     $('.page5 .message .messBG').addClass('scaleToBig');
    //     $('.page5 .message').addClass('toFadeIn');
    //     $('.page5 .apply-page').addClass('moveToCen').removeClass('hidden');
    //     //if( !$('.page7').hasClass('hidden') ){
    //     //    $('.page5 .wordBG')[0].pause();  // 停止播放背景音乐
    //     //}
    // }

    // function submitApplication(data, successCb, errorCb) {
    //     $.ajax({
    //         url: ctx + '/programmer/regist',
    //         data: data,
    //         type: 'post',
    //         dataType: 'json',
    //         success: successCb,
    //         error: errorCb ? errorCb : function() {}
    //     });
    // }
    // function submitRegistration(data, successCb, errorCb) {
    //     $.ajax({
    //         url: ctx + '/programmer/createUser',
    //         data: data,
    //         type: 'post',
    //         dataType: 'json',
    //         success: successCb,
    //         error: errorCb ? errorCb : function() { console.log('网络错误'); }
    //     });
    // }

    // $('.page5 .apply-page .apply-gift').click(function() {
    //     //$('.page7').addClass('hidden');
    //     //$(hasApplied ? '.page10' : '.page8').removeClass('hidden');
    //     $('.page5').hide();
        
    //     if(hasApplied){
    //      $(".done-check-text").hide();
    //      $(".haveget").show();
    //      $('.page10' ).show();
    //     }else{
    //      $('.page8' ).show();
    //     }
      
    // });

    // $('.page8 .submit-btn').click(function() {
    //     var emptyElem;
    //     $('.page8 input').each(function(idx, elem) {
    //         if(!$(elem).val() && $(elem).prop('required')) {
    //             emptyElem = elem;
    //             return false;
    //         }
    //     });
    //     if(emptyElem) {
    //         $(emptyElem).siblings('.required.error').removeClass('hidden');
    //     }
    //     if($('.page8 .error:not(.hidden)').length > 0) return;

    //     submitApplication({
    //         remark: $('.page8 .remark').val(),
    //         name: $('.page8 .name').val(),
    //         homePage: $('.page8 .homePage').val(),
    //         contact: $('.page8 .contact').val(),
    //         email: $('.page8 .email').val()
    //     }, function(result) {
    //         console.log(result)
    //         if(!result.success) {
    //             switch(result.state) {
    //                 case 3002:
    //                     //已经申请过了
    //                     //$('.page8').addClass('hidden');
    //                     //$('.page10').removeClass('hidden');
    //                     $('.page8').hide();
    //                     $('.page10').show();
    //                     break;
    //                 case -1:
    //                     !$('.page8 input.remark').val() && $('.page8 input.remark').siblings('.required.error').removeClass('hidden');
    //                     !$('.page8 input.name').val() && $('.page8 input.name').siblings('.required.error').removeClass('hidden');
    //                     !$('.page8 input.homePage').val() && $('.page8 input.homePage').siblings('.required.error').removeClass('hidden');
    //                     !$('.page8 input.contact').val() && $('.page8 input.contact').siblings('.required.error').removeClass('hidden');
    //                     !$('.page8 input.email').val() && $('.page8 input.email').siblings('.required.error').removeClass('hidden');
    //                     break;
    //                 case -2:
    //                     $('.page8 .email.error').removeClass('hidden');
    //                     break;
    //                 case -3:
    //                     $('.page8 .tel.error').removeClass('hidden');
    //                     break;
    //                 default:
    //                     break;
    //             }
    //         } else {
    //             //$('.page8').addClass('hidden');
    //             //$(result.content ? '.page10' : '.page9').removeClass('hidden');
    //             $('.page8').hide();
    //             $(result.content ? '.page10' : '.page9').show();
    //         }
    //     });
    // });

    // $('.page9 input[type="checkbox"]').click(function(event) {
    //     if($(event.target).prop('checked')) {
    //         $('.page9 .checkbox').addClass('clicked');
    //         //$('.page9 .check-protocol .required.error').addClass('hidden');
    //         $('.page9 .check-protocol .required.error').hide();
    //     } else {
    //         $('.page9 .checkbox').removeClass('clicked');
    //         //$('.page9 .check-protocol .required.error').removeClass('hidden');
    //         $('.page9 .check-protocol .required.error').show();
    //     }
    // });

    // $('.page9 a.protocol').click(function() {
    //     //$('.page9 .region').addClass('hidden');
    //     //$('.page9 .agreement').removeClass('hidden');
    //     $('.page9').css('height', 'auto');
    //     $('.page9 .region').hide();
    //     $('.page9 .agreement').show();
    // });

    // $('.page9 .agreement .goBack').click(function() {
    //     //$('.page9 .agreement').addClass('hidden');
    //     //$('.page9 .region').removeClass('hidden');
    //     $('.page9').css('height', '');
    //     $('.page9 .agreement').hide();
    //     $('.page9 .region').show();
    // });

    // $('.page9 .submit-btn').click(function() {
    //     var emptyElem;
    //     $('.page9 input').each(function(idx, elem) {
    //         if(!$(elem).val() && $(elem).prop('required')) {
    //             emptyElem = elem;
    //             return false;
    //         }
    //     });
    //     if(emptyElem) {
    //         $(emptyElem).siblings('.required.error').removeClass('hidden');
    //         return;
    //     }
    //     if($('.page9 :not(.hidden).error').length > 0) return;

    //     submitRegistration({
    //         contact: $('.page8 .contact').val(),
    //         email: $('.page8 .email').val(),
    //         password: $('.page9 .password').val()
    //     }, function(result) {
    //         if(!result.success) {
    //             switch(result.state) {
    //                 case -4:
    //                     $('.page9 .regist-info.error').removeClass('hidden').text('请先提交表单再注册');
    //                     setTimeout(function() {
    //                         //$('.page9').addClass('hidden');
    //                         //$('.page8').removeClass('hidden');
    //                         $('.page9').hide();
    //                         $('.page8').show();
    //                     }, 1000);
    //                     break;
    //                 case -5:
    //                     $('.page9 .length.error').removeClass('hidden');
    //                     break;
    //                 case -9:
    //                     $('.page9 .regist-info.error').removeClass('hidden').text('您的邮箱已经注册过了');
    //                     setTimeout(function() {
    //                         //$('.page9').addClass('hidden');
    //                         //$('.page10').removeClass('hidden');
    //                         $('.page9').hide();
    //                         $('.page10').show();
    //                     }, 1000);
    //                     break;
    //             }
    //         } else {
    //             //$('.page9').addClass('hidden');
    //             //$('.page10').removeClass('hidden');
    //             $('.page9').hide();
    //             $('.page10').show();
    //         }
    //     }, function() {
    //         $('.page9 .registe-info.error').removeClass('hidden').text('网络错误');
    //     });
    // });

    // $('.page9 .pseye').click(function(event) {
    //     if($(event.target).hasClass('open')) {
    //         $(event.target).removeClass('open');
    //         $('.page input[type="text"]').attr('type', 'password');
    //     } else {
    //         $(event.target).addClass('open');
    //         $('.page input[type="password"]').attr('type', 'text');
    //     }
    // });

    // $('.page9 .no-submit').click(function() {
    //     //$('.page9').addClass('hidden');
    //     //$('.page10').removeClass('hidden');
    //     $('.page9').hide();
    //     $('.page10').show();
    // });

    // $('.page8, .page9').on('focus', 'input', function(event) {
    //     $(event.target).siblings('.error').addClass('hidden');
    // });
    // $('.page8, .page9').on('blur', 'input', function(event) {
    //     var elem = $(event.target);
    //     var telRe = /0?1[35847][0-9]{9}/;
    //     if(elem.prop('required') && !elem.val().replace(/\s+/g, '')) {
    //         elem.siblings('.required.error').removeClass('hidden');
    //     } else if(elem.attr('type') === 'email' && !elem.val().replace(/^\s+|\s+$/g, '').match(/^[\w.-]+@([\w-]+\.)+[\w-]+$/)) {
    //         elem.siblings('.email.error').removeClass('hidden');
    //     } else if(elem.attr('type') === 'tel' && !elem.val().replace(/^\s+|\s+$/g, '').match(telRe)) {
    //         elem.siblings('.tel.error').removeClass('hidden');
    //     } else if(elem.attr('length')) {
    //         var lens = elem.attr('length').split('-');
    //         var min = parseInt(lens[0]);
    //         var max = parseInt(lens[1]);
    //         if(elem.val().length < min || elem.val().length > max) {
    //             elem.siblings('.length.error').removeClass('hidden');
    //         }
    //     }
    // });

    // $('.page10 .share .submit-btn').click(function() {
    //     //$('.page10 .cover').removeClass('hidden');
    //     $('.page10 .cover').show();
    // });
    // $('.page10 .cover').click(function() {
    //     $('.page10 .cover').hide();
    // });
});

