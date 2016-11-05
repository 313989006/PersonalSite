/**
 * Created by CNY on 2016/11/4.
 */
define(function (require, exports, module) {
    console.log('1111');
    var SlideImg = require('./SlideImg');
    var MagnifierHander = require('./MagnifierHander');
    module.exports = Magnifier;
    function Magnifier() {
        this.init();
        console.log('init');
    }
    Magnifier.prototype.init=function () {
        var a$Li1 = $('.slideimg_box_one li');
        var slideImg1=new SlideImg(a$Li1,[{top:0,left:0,opacity:1},{top:0,left:460,opacity:0},{top:-120,left:460,opacity:0},{top:-120,left:0,opacity:0}],200);
        var a$Li2 = $('.slideimg_box_two li');
        var slideImg2=new SlideImg(a$Li2,[{top:0,left:0,opacity:1},{top:58,left:0,opacity:0},{top:58,left:460,opacity:0},{top:0,left:460,opacity:0}],20);
        var magnifierHander = new MagnifierHander();
        //前进后退按钮事件
        $('.lightbox_bt1').mousedown(function () {
            $(this).css('backgroundPosition','-60px center')
        }).mouseup(function () {
            magnifierHander.handerUp ();
            slideImg1.prevent(function () {
                magnifierHander.handerDown();
                slideImg2.prevent();
            });
            $(this).css('backgroundPosition','0 center')
        });
        $('.lightbox_bt2').mousedown(function () {
            $(this).css('backgroundPosition','-90px center')
        }).mouseup(function () {
            magnifierHander.handerUp ();
            slideImg1.next(function () {
                magnifierHander.handerDown();
                slideImg2.next();
            });
            $(this).css('backgroundPosition','-30px center')
        });
    };
});