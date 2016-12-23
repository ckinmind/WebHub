
requirejs.config({
    paths: {
        jquery: 'jquery-1.11.3.min'
    }
});

requirejs(['jquery','backtop'],function($,backtop){

    // new backtop.BackTop($('#backTop'),{
    //     mode:'go',
    //     pos: 400,
    //     speed: 200
    // });

    /*注册成jquery 插件*/
    $('#backTop').backtop({
        mode:'move',
        pos: 200,
        speed: 800
    });

});