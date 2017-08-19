$(document).ready(function(){
    var a = $(window).height() + "px";
    var b = $(window).width() + "px";
    $(".swiper-slide").css("height",a);
    $(".back_pic").css("width",b);

    //侧边栏
        var sidebar = $(".sidebar");

        function showSidebar(){
            sidebar.show();
            setTimeout(function () {
            sidebar.addClass('active');
            }, 0);
        }

        function hideSidebar(){
            sidebar.removeClass("active");
            setTimeout(function () {
            if (!sidebar.hasClass('active')) {
                sidebar.hide();
                }
            }, 500);
        }

        $('#more').click(function () {
            showSidebar();
        });
        $('.sidebar-bg').click(function () {
            hideSidebar();
        });
    // build the swiper 
    var swiper = new Swiper('.swiper-container',{
        direction: 'vertical',
        initialSlide: 0,
        calculateHeight: true,
        autoHeight: true,
    });

    // 第二第四页动效
    // var cartoon24 = function(str, arr){
    //     var TimeLine = Tweene.line();
    //     var line = $(str+" .sec-con");
    //     var linelenth = line.size();
    //     TimeLine.add(Tweene.get($(str+" .sec-con p")).set({opacity: 0}))
    //     for(var i=0; i<linelenth; i++){
    //         if(i > 0){
    //             TimeLine.add(Tweene.get(line[i-1]).to({opacity: 0}).duration(500).easing([0, 0, 1, 1]), "+=500");
    //         }
    //         var line_p = $(str+" #sec-div"+arr[i]+" p");
    //         var maxlen = line_p.size();
    //         for(var j=0; j<maxlen; j++){
    //             TimeLine.add(fadeIn(line_p[j], 800), "+=200");
    //         }
    //     }
    //     TimeLine.add(indfuc("#otwo"));
    //     TimeLine.add(Tweene.get($(str+" .second")).to({translateX: -0.4*fontSize}).loops(-1).yoyo(true).duration(500).easing([0, 0, 1, 1]), "0");
    //     TimeLine.add(Tweene.get($(str+" .second")).to({translateY: -0.4*fontSize}).loops(-1).yoyo(true).duration(500).easing([0, 0, 1, 1]), "200");
    //     return TimeLine;
    // }
    // $(".second").css({left: 0.3 + "rem", top: 0.3 + "rem"});
    // $(".second .sec-img2").css({left: wwidth-1.2*wwidth + "rem", top: wheight-1.2*wwidth*1334/750 + "rem"});
    // // 第二页
    // var sec = Tweene.line();
    // sec.add(cartoon24("#otwo", [1, 2, 3]));
    // // 第四页
    // var four = Tweene.line();
    // four.add(cartoon24("#ofour", [4, 5, 6, 7]));


    
    //         // 第三页（未改动）
    //         $('#star-zodiac').width(cwidth*0.9).css({position: 'relative', bottom: function(index,value){
    //             return $('#star-bg').height()-$('#star-zodiac').height()*0.0686
    //         }, 'z-index': 7});
    //         $('.main-wrapper').width(cwidth).height(3500*cwidth/750 + 'px').css({'background-size': cwidth + 'px'});
    //         $('.star-container').width(cwidth).height(cheight);

    //         // 动画
    //         var starline = Tweene.line();
    //         starline.add(Tweene.get($('.main-wrapper')).to({marginTop: -$('.main-wrapper').height() + cheight + 'px'}).duration(40000));

    //         $('#star-content-wrapper').css({width: cwidth*0.9, height: '3020px', left: cwidth*0.05});
    //         $('#star-p1').css({top: $('.main-wrapper').height()*0.0814, right: 0});
    //         $('#star-p2').css({top: $('.main-wrapper').height()*0.2171, left: 0});
    //         $('#star-p3').css({top: $('.main-wrapper').height()*0.34, right: 0});
    //         $('#star-p4').css({top: $('.main-wrapper').height()*0.46, left: 0});
    //         $('#star-p5').css({top: $('.main-wrapper').height()*0.58, right: 0});
    //         $('#star-p6').css({top: $('.main-wrapper').height()*0.6929, left: 0});
    //         $('#star-p7').css({top: $('.main-wrapper').height()*0.8571, right: 0});

        
    //         // 第五页（未改动）
    //         $('.mutiangle img').width(cwidth*0.5);
    //         $('.mutiangle').css({top: cheight*0.5 - $('.mutiangle').height()*0.5 + 'px'});
    //         //console.log($('#tech').width())
            
    //         $('.bigplanet').width(cwidth*0.2);
    //         $('#tech').css({left: cwidth*0.5 - $('.bigplanet').width()*0.5 + 'px', top: cheight*0.5 - 160 - $('#tech').height()*0.5 + 'px' })
    //         /*$('#total-overview').on('swipe',function(){
    //             $.mobile.changePage("#submit", {transition: "slidedown"}); 
    //         });*/

    //         var surround = Tweene.line();
    //         var record = 0,
    //             reverse = true,
    //             xstd = cwidth*0.5 - $('.bigplanet').width()*0.5,
    //             ystd = cheight*0.5 - $('#tech').height()*0.5,
    //             x = 0,
    //             y = -160,
    //             angle = 0,
    //             unit = Math.PI/180;
    //         //console.log(xstd,ystd)
    //         while (angle < Math.PI*2){
    //             angle += unit;
    //             x = 160*Math.sin(angle);
    //             y = -160*Math.cos(angle)+160;
    //             surround.add(Tweene.get($('#tech')).to({transform: "translate(" + x + 'px,' + y + 'px'}).duration(60).easing([0,0,1,1]));
    //         }
    //         $('#info').css({top: ystd + 80 + 'px', left: xstd + 138});
    //         var surround1 = Tweene.line();
    //         var record = 0,
    //             reverse = true,
    //             x = 138,
    //             y = 80,
    //             angle = Math.PI/180*120,
    //             unit = Math.PI/180;
    //         while (angle < Math.PI/180*480){
    //             angle += unit;
    //             x = 160*Math.sin(angle) - 160*Math.sin(Math.PI/180*120);
    //             y = -160*Math.cos(angle) + 160*Math.cos(Math.PI/180*120);
    //             surround1.add(Tweene.get($('#info')).to({transform: "translate(" + x + 'px,' + y + 'px'}).duration(60).easing([0,0,1,1]));
    //         }
    //         $('#man').css({top: ystd + 80 + 'px', left: xstd - 138});
    //         var surround2 = Tweene.line();
    //         var record = 0,
    //             reverse = false,
    //             x = -138,
    //             y = 80,
    //             angle = Math.PI/180*240,
    //             unit = Math.PI/180;
    //         while (angle < Math.PI/180*600){
    //             angle += unit;
    //             x = 160*Math.sin(angle) - 160*Math.sin(Math.PI/180*240);
    //             y = -160*Math.cos(angle) + 160*Math.cos(Math.PI/180*240);
    //             surround2.add(Tweene.get($('#man')).to({transform: "translate(" + x + 'px,' + y + 'px'}).duration(60).easing([0,0,1,1]));
    //         }

            // 二级部门
            //$('.Dabumen').width(cwidth*0.5).css({top: cheight*0.5 - $('#mutiangle').height()*0.5 + 'px'});
});

        