/**
 * Created by CK on 2016/12/23.
 */
define(['jquery'],function($){
    function ScrollTo(opts){
        this.opts = $.extend({},ScrollTo.DEFAULTS, opts); //将用户传递进来的参数opts覆盖默认的参数ScrollTo.DEFAULTS，去生成一个新的对象，然后返回新的对象
        this.$el =  $('html,body');
    }

    ScrollTo.prototype.move = function() {
        var opts = this.opts,
            dest = opts.dest;
        if($(window).scrollTop() != dest){   //没有到达目的地，且不在运动，才执行滚动
            if(!this.$el.is(':animated')){
                this.$el.animate({
                    scrollTop: dest
                }, opts.speed);
            }
        }
    };

    ScrollTo.prototype.go = function() {
        var dest = this.opts.dest;
        if($(window).scrollTop() != dest){
            this.$el.scrollTop(dest);
        }
    };


    ScrollTo.DEFAULTS = {
        dest: 0,
        speed: 800
    };

    return {
        ScrollTo:ScrollTo
    };

});