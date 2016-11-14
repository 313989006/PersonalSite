/**
 * Created by CNY on 2016/11/8.
 */
define(function (require, exports, module) {
    module.exports = Skill;
    function Skill() {
    }
    Skill.init = function () {
        var Cloud3d = require('./Cloud3d');
        var aLiBt = $('.cloud3d .bts li');
        var board = new Board();
        var _this=this;
        //圆球初始化
        var oUlBall = document.getElementById('ball');
        var sTxtBall = '熟悉模块化面向对象的方式编程熟悉Javascript编写过Javascript运动类库熟悉JQueryZeptoBootstrapNodeJsEasyUI使用了解AngularJs';
        this.ball=new Cloud3d.Ball(oUlBall,sTxtBall);
        aLiBt.eq(0).click(function () {
            if (_this.ball.state=='out') {
                if (_this.cone.state=='in'||_this.cylinder.state=='in') {
                    _this.cone.out();
                    _this.cylinder.out();
                    setTimeout(function () {
                        _this.ball.in();
                    },1000);
                }else {
                    _this.ball.in();
                }
            }else {
                _this.ball.out();
            }
        });

        //圆锥初始化
        var oUlCone = document.getElementById('cone');
        var sTxtCone = '熟悉模块化面向对象的方式编程熟悉Javascript编写过Javascript运动类库熟悉使用了解AngularJs';
        this.cone=new Cloud3d.Cone(oUlCone,sTxtCone);
        aLiBt.eq(1).click(function () {
            if (_this.cone.state=='out') {
                if (_this.ball.state=='in'||_this.cylinder.state=='in') {
                    _this.ball.out();
                    _this.cylinder.out();
                    setTimeout(function () {
                        _this.cone.in();
                    },1000);
                }else {
                    _this.cone.in();
                }
            }else {
                _this.cone.out();
            }
        });
        //圆柱初始化
        var oUlCylinder = document.getElementById('cylinder');
        var sTxtCylinder = '熟悉模块化面向对象的方式编程熟悉Javascript编写过Javascript运动类库熟悉常用js框架使用了解AngularJs了解HTML 5新标签的语义';
        this.cylinder=new Cloud3d.Cylinder(oUlCylinder,sTxtCylinder);
        aLiBt.eq(2).click(function () {
            if (_this.board.state == 'in') {
                _this.board.out();
            }
            if (_this.cylinder.state=='out') {
                if (_this.cone.state=='in'||_this.ball.state=='in') {
                    _this.ball.out();
                    _this.cone.out();
                    setTimeout(function () {
                        _this.cylinder.in();
                    },1000);
                }else {
                    _this.cylinder.in();
                }
            }else {
                _this.cylinder.out();
            }
        });

        //图形单击事件处理
        $('.click_layer').click(function () {
            if (_this.ball.state=='in') {
                _this.ball.out();
                setTimeout(function () {
                    board.closeCallback = function () {
                        _this.ball.in();
                    };
                    var sHtml = '<h2 >前端 <span>H5&&JavaScript</span><em class="skill_board_close"></em></h2><p><strong>JavaScript</strong><br/>熟悉熟悉Javascript模块化、面向对象的方式编程；<br/>熟悉JQuery/Zepto、Bootstrap、NodeJs、EasyUI使用；<br/>了解AngularJs、Canvas、SVG。<p><strong>Html5&Css3</strong><br/>了解HTML 5新标签的语义。<br/>熟练使用H5语义标签和Css3新特性制作炫酷页面效果；<br/>熟练编写兼容主流浏览器的PC端和移动端页面布局；<br/>熟练使用Chrome、Firefox、IE等浏览器开发者工具调试；</p><p><strong>Photoshop</strong><br/>熟悉Photoshop操作，具备基本图片处理和平面设计能力。<br/>能根据图片特征及Web页面需要存成最优的格式的图片。</p>';
                    board.init(sHtml);
                    board.in();
                },1000);
            }
            if (_this.cone.state=='in') {
                _this.cone.out();
                setTimeout(function () {
                    board.closeCallback = function () {
                        _this.cone.in();
                    };
                    var sHtml = '<h2 >后台 <span>C#&&Java</span><em class="skill_board_close"></em></h2><div class="skill_board_con gradient"><p><strong>JavaScript</strong><br/>熟悉熟悉Javascript模块化、面向对象的方式编程；<br/>熟悉JQuery/Zepto、Bootstrap、NodeJs、EasyUI使用；<br/>了解AngularJs、Canvas、SVG。<p><strong>Html5&Css3</strong><br/>了解HTML 5新标签的语义。<br/>熟练使用H5语义标签和Css3新特性制作炫酷页面效果；<br/>熟练编写兼容主流浏览器的PC端和移动端页面布局；<br/>熟练使用Chrome、Firefox、IE等浏览器开发者工具调试；</p><p><strong>Photoshop</strong><br/>熟悉Photoshop操作，具备基本图片处理和平面设计能力。<br/>能根据图片特征及Web页面需要存成最优的格式的图片。</p></div>';
                    board.init(sHtml);
                    board.in();
                },1000);
            }
            if (_this.cylinder.state=='in') {
                _this.cylinder.out();
                setTimeout(function () {
                    board.closeCallback = function () {
                        _this.cylinder.in();
                    };
                    var sHtml = '<h2 >数据库 <span>SqlServer&&Other</span><em class="skill_board_close"></em></h2><div class="skill_board_con gradient"><p><strong>JavaScript</strong><br/>熟悉熟悉Javascript模块化、面向对象的方式编程；<br/>熟悉JQuery/Zepto、Bootstrap、NodeJs、EasyUI使用；<br/>了解AngularJs、Canvas、SVG。<p><strong>Html5&Css3</strong><br/>了解HTML 5新标签的语义。<br/>熟练使用H5语义标签和Css3新特性制作炫酷页面效果；<br/>熟练编写兼容主流浏览器的PC端和移动端页面布局；<br/>熟练使用Chrome、Firefox、IE等浏览器开发者工具调试；</p><p><strong>Photoshop</strong><br/>熟悉Photoshop操作，具备基本图片处理和平面设计能力。<br/>能根据图片特征及Web页面需要存成最优的格式的图片。</p></div>';
                    board.init(sHtml);
                    board.in();
                },1000);
            }
        });

    };
    Skill.init();
    Skill.in= function (endCallback) {
        $('#main').css('background', '#413235 url(images/main_bg2.jpg) no-repeat center top');
        var _this=this;
        $('.cloud3d').animate({top: 140},800,'swing', function () {
            _this.ball.in();
            _this.ball.rotateStart();
            _this.cone.rotateStart();
            _this.cylinder.rotateStart();
        });
    };
    Skill.out= function (endCallback) {
        $('.cloud3d').animate({top: -500},800,'swing');
    };
    //面板
    function Board() {
        this.board = $('.skill_board');
        var _this=this;

    }
    Board.prototype.init= function (sHtml) {
        this.board.html(sHtml);
        var _this=this;
        $('.skill_board_close').click(function () {
            _this.out(_this.closeCallback);//点击关闭窗口后执行回调在外部定义。
        });
    };
    Board.prototype.in= function () {
        this.board.animate({opacity: 1},200,'linear');
        this.state = 'in';
    };
    Board.prototype.out= function (endCallback) {
        this.board.animate({opacity: 0},200,'linear', function () {
            if (endCallback) {
                endCallback();
            }
        });
        this.state = 'out';
    };
});