// 获取宽高以及中央位置
var cwidth = $(window).width();
var cheight = $(window).height(); 
var wwidth = $(window).width()/ fontSize * 0.5;
var wheight = $(window).height()/ fontSize * 0.5;
// 通用动画函数        
// 淡入 $:jquery对象 t:时长 arr:淡出速度曲线(默认匀速)
var fadeIn = function($, t, arr){
    if(arr == undefined){ arr = [0, 0, 1, 1]; };
    var TimeLine = Tweene.line();
    TimeLine.add(Tweene.get($)
        .from({opacity: 0, display: 'inline'})
        .to({opacity: 1, display: 'inline'})
        .easing(arr)
        .duration(t));
    return TimeLine;
}
// 淡入 $:jquery对象 t:时长 arr:淡出速度曲线(默认匀速)
var fadeIn2 = function($, t, arr){
    if(arr == undefined){ arr = [0, 0, 1, 1]; };
    var TimeLine = Tweene.line();
    TimeLine.add(Tweene.get($)
        .from({opacity: 0, display: 'block'})
        .to({opacity: 1, display: 'block'})
        .easing(arr)
        .duration(t));
    return TimeLine;
}     
// 淡出 $:jquery对象 t:时长 arr:淡出速度曲线(默认匀速)
var fadeOut = function($, t, arr){
    if(arr == undefined){ arr = [0, 0, 1, 1]; };
    var TimeLine = Tweene.line();
    TimeLine.add(Tweene.get($)
        .to({opacity: 0, display: 'none'})
        .easing(arr)
        .duration(t));
    return TimeLine;
}       
// 顺时针循环旋转 $:jquery对象 speed:旋转速度 xystr:旋转中心(默认图形中点)
var ZiXuanfuc = function($, speed, xystr){
    if(xystr == undefined){ xystr = '50% 50%'; };
    var TimeLine = Tweene.line();
    TimeLine.add(Tweene.get($)
        .to({rotation: '360', transformOrigin: xystr})
        .easing([0, 0, 1, 1])
        .loops(-1)    
        .duration(speed));
    return TimeLine;
}
// 放大出现效果 $:jquery对象 speed:放大速度 arr:速度曲线(默认匀速)
var FangDaChuXianfuc = function($, speed, arr){
    if(arr == undefined){ arr = [0, 0, 1, 1]; };
    var TimeLine = Tweene.line();
    TimeLine.add(Tweene.get($)
        .from({scale: 0, display: 'inline', opacity: 1})
        .to({scale: 1, display: 'inline', opacity: 1})
        .easing(arr)
        .duration(speed));
    return TimeLine; 
}
// 冒气泡式动效 $:jquery对象 dx1,dy1:冒出时对中心的偏移距离 dx2,dy2:移动终点位置对中心的偏移距离 t1:冒出并移动的时长 bool:移动完成后是否消失 t2:消失的时长
var MaoChuXiaoShifuc = function($, dx1, dy1, dx2, dy2, t1, bool, t2){
    var TimeLine = Tweene.line();
    TimeLine.add(Tweene.get($)
        // 用于测试位置
        // .set({display: 'inline', left: wwidth+dx2 + 'rem', top: wheight+dy2 + 'rem'})
        .from({scaleX: 0, scaleY: 0, display: 'inline', translateX: dx1*fontSize, translateY: dy1*fontSize})
        .to({scaleX: 1, scaleY: 1, display: 'inline', translateX: dx2*fontSize, translateY: dy2*fontSize})
                        .duration(t1));
    if(bool){
        TimeLine.add(fadeOut($, t2));
    }
    return TimeLine; 
}      
// 简介页开始动效 str:简介页id
var startJfuc = function(str){
    var TimeLine = Tweene.line();
    TimeLine.add(Tweene.get($(str + " .title")).set({display: 'none'}));
    TimeLine.add(Tweene.get($(str + " .intro")).set({display: 'none'}));
    TimeLine.add(Tweene.get($(str + " a")).set({display: 'none'}));
    TimeLine.add(Tweene.get($(str + " .icon")).set({display: 'block'}));
    TimeLine.add(fadeIn($(str + ' .title'), 1000, [.89, 0, .79, .46]));
    return TimeLine;
}
// 点击探索按钮的通用动画
var scanfuc = function(str){
    var TimeLine = Tweene.line();
    TimeLine.add(Tweene.get(str+" .more").to({scale: 1.05}).duration(500).loops(-1).yoyo(true));
    return TimeLine;
}
// 简介页结束动效 str:简介页id
var endJfuc = function(str){
    var TimeLine = Tweene.line();
    TimeLine.add(fadeOut($(str + ' .icon'), 800), '+=800');
    TimeLine.add(fadeIn($(str + ' .intro'), 800));
    TimeLine.add(fadeIn($(str + ' a'), 800));
    TimeLine.add(scanfuc(str));
    return TimeLine;
}
// 向下滑动提示图片动画
var indfuc = function(str){
    var TimeLine = Tweene.line();
    var ind = $(str + " .ind");
    TimeLine.add(fadeIn(ind, 50));
    TimeLine.add(Tweene.get(ind).to({translateY: 0.5*fontSize}).duration(400).loops(-1).yoyo(true).easing([0, 0, 1, 1]), "-=50");
    return TimeLine;
}
// // 第一页动效
// var first_t1 = Tweene.line();  
// $(document).ready(function(){
//     var first_img = $("#firstPage img")
//     // 第一句第二句放大旋转
//     var first_str = ["1000", "1000", "+=500", "-=300"];
//     var first_stro = 0;
//     for(var first_i=0; first_i<2; first_i++){       
//         first_t1.add(FangDaChuXianfuc(first_img[first_i], 300), first_str[first_stro]);
//         first_stro++;
//         first_t1.add(Tweene.get(first_img[first_i]).to({rotation: '360', transformOrigin: '50% 50%'}).easing([0, 0, 1, 1]) .duration(300), first_str[first_stro]);
//         first_stro++;
//     }
//     // 第三句缩小
//     first_t1.add(Tweene.get(first_img[2]).set({scale: 2.8}), "+=800");
//     first_t1.add(fadeIn(first_img[2], 100));
//     first_t1.add(Tweene.get(first_img[2]).to({scale: 1}).duration(500));
//     // 第四五六句淡出
//     for(first_i=3; first_i<6; first_i++){
//         first_t1.add(fadeIn(first_img[first_i], 1000));
//     }
//     first_t1.add(indfuc("#firstPage"));
// });
// 加载页动效
// // 百分比变化
// var load_per = 0;
// var load_cartoon1;
// var load_number = $("#loading-cover #load-ball span")
// load_cartoon1 = setInterval(function(){
//     load_per++;
//     if(load_per >= 99){
//         clearInterval(load_cartoon1);
//     }
//     load_number.text(load_per + "％");
// }, 30); 
// var load_t1 = Tweene.line(); 
// var load_img = $("#loading-cover #load-ball img");
// var load_div = $("#loading-cover #load-ball div");
// // 水上涨
// load_t1.add(Tweene.get(load_div).to({translateY: -10*fontSize}).duration(3000).easing([0, 0, 1, 1]), '0');
// load_t1.add(Tweene.get(load_img[0]).to({translateY: -10*fontSize}).duration(3000).easing([0, 0, 1, 1]), '0');
// load_t1.add(Tweene.get(load_img[1]).to({translateY: -10*fontSize}).duration(3000).easing([0, 0, 1, 1]), '0');
// // 波浪起伏
// load_t1.add(Tweene.get(load_img[1]).to({translateX: -15*fontSize}).loops(-1).yoyo(true).duration(1200).easing([0, 0, 1, 1]), '0');
// // 船摇动
// load_t1.add(Tweene.get(load_img[0]).to({rotation: -10}).loops(-1).yoyo(true).duration(500).easing([0, 0, 1, 1]), '0');
// // 字跳动
// load_t1.add(Tweene.get($("#loading-cover p")).to({scale: 0.9}).loops(-1).yoyo(true).duration(400).easing([0, 0, 1, 1]), '0');
// load_t1.play();
// // 全部加载完成后加载页消失
// $(window).load(function(){
//     // 检索加载动画是否完成
//     var load_cartoon2 = setInterval(function(){
//         var load_arr = load_div.css("-webkit-transform").split('(')[1].split(')')[0].split(',');
//         if(load_arr[5] <= -9.95*fontSize || load_number.text() == "99％"){ 
//             // 完成加载动画最后一部分   
//             var load_t2 = Tweene.line();
//             load_t1.add(Tweene.get(load_div).to({translateY: -12*fontSize}).duration(100).easing([0, 0, 1, 1]), '0');
//             load_t1.add(Tweene.get(load_img[0]).to({translateY: -12*fontSize}).duration(100).easing([0, 0, 1, 1]), '0');
//             load_t1.add(Tweene.get(load_img[1]).to({translateY: -12*fontSize}).duration(100).easing([0, 0, 1, 1]), '0');
//             load_number.text("100％");
//             // 加载页消失
//             load_t2.add(fadeOut($("#loading-cover"),500));
//             load_t2.play();
//             // 循环动画停止，第一页动画开始
//             load_t1.pause();
//             clearInterval(load_cartoon2);
//             first_t1.play();
//         }
//     }, 50);
;