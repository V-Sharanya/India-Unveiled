$(document).ready(function(){
    $('.dropdown-btn').on('click',function(){
        console.log("the button is clicked");
        var submenu = $(this).parent().find('.dropdown-menu');
        submenu.toggleClass('active');
    })

    $(document).on('click',function(e){
        if(!$(e.target).closest('.dropdown').length){
            $('.dropdown-menu').removeClass('active');
        }
    })

    $('.btn1').on('click',function(){
        var menu1 = $(this).parents().find('.intro-content');
        menu1.toggleClass('active');
        $('.pre-content').removeClass('active');
        $('.bronze-content').removeClass('active');
        $('.iron-content').removeClass('active');
        $('.classic-content').removeClass('active');
        $('.early-content').removeClass('active');
        $('.late-content').removeClass('active');
        $('.modern-content').removeClass('active');
        $('.latemodern-content').removeClass('active');
        $('.independence-content').removeClass('active');
    })

    $('.btn2').on('click',function(){
        var menu2 = $(this).parents().find('.pre-content');
        menu2.toggleClass('active');
        $('.intro-content').removeClass('active');
        $('.bronze-content').removeClass('active');
        $('.iron-content').removeClass('active');
        $('.classic-content').removeClass('active');
        $('.early-content').removeClass('active');
        $('.late-content').removeClass('active');
        $('.modern-content').removeClass('active');
        $('.latemodern-content').removeClass('active');
        $('.independence-content').removeClass('active');
    })

    $('.btn3').on('click',function(){
        var menu3 = $(this).parents().find('.bronze-content');
        menu3.toggleClass('active');
        $('.intro-content').removeClass('active');
        $('.pre-content').removeClass('active');
        $('.iron-content').removeClass('active');
        $('.classic-content').removeClass('active');
        $('.early-content').removeClass('active');
        $('.late-content').removeClass('active');
        $('.modern-content').removeClass('active');
        $('.latemodern-content').removeClass('active');
        $('.independence-content').removeClass('active');
    })

    $('.btn4').on('click',function(){
        var menu4 = $(this).parents().find('.iron-content');
        menu4.toggleClass('active');
        $('.intro-content').removeClass('active');
        $('.pre-content').removeClass('active');
        $('.bronze-content').removeClass('active');
        $('.classic-content').removeClass('active');
        $('.early-content').removeClass('active');
        $('.late-content').removeClass('active');
        $('.modern-content').removeClass('active');
        $('.latemodern-content').removeClass('active');
        $('.independence-content').removeClass('active');
    })

    $('.btn5').on('click',function(){
        var menu5 = $(this).parents().find('.classic-content');
        menu5.toggleClass('active');
        $('.intro-content').removeClass('active');
        $('.pre-content').removeClass('active');
        $('.bronze-content').removeClass('active');
        $('.iron-content').removeClass('active');
        $('.early-content').removeClass('active');
        $('.late-content').removeClass('active');
        $('.modern-content').removeClass('active');
        $('.latemodern-content').removeClass('active');
        $('.independence-content').removeClass('active');
    })
 
    $('.btn6').on('click',function(){
        var menu6 = $(this).parents().find('.early-content');
        menu6.toggleClass('active');
        $('.intro-content').removeClass('active');
        $('.pre-content').removeClass('active');
        $('.bronze-content').removeClass('active');
        $('.iron-content').removeClass('active');
        $('.classic-content').removeClass('active');
        $('.late-content').removeClass('active');
        $('.modern-content').removeClass('active');
        $('.latemodern-content').removeClass('active');
        $('.independence-content').removeClass('active');
    })

    $('.btn7').on('click',function(){
        var menu7 = $(this).parents().find('.late-content');
        menu7.toggleClass('active');
        $('.intro-content').removeClass('active');
        $('.pre-content').removeClass('active');
        $('.bronze-content').removeClass('active');
        $('.iron-content').removeClass('active');
        $('.classic-content').removeClass('active');
        $('.early-content').removeClass('active');
        $('.modern-content').removeClass('active');
        $('.latemodern-content').removeClass('active');
        $('.independence-content').removeClass('active');
    })

    $('.btn8').on('click',function(){
        var menu8 = $(this).parents().find('.modern-content');
        menu8.toggleClass('active');
        $('.intro-content').removeClass('active');
        $('.pre-content').removeClass('active');
        $('.bronze-content').removeClass('active');
        $('.iron-content').removeClass('active');
        $('.classic-content').removeClass('active');
        $('.early-content').removeClass('active');
        $('.late-content').removeClass('active');
        $('.latemodern-content').removeClass('active');
        $('.independence-content').removeClass('active');
    })

    $('.btn9').on('click',function(){
        var menu9 = $(this).parents().find('.latemodern-content');
        menu9.toggleClass('active');
        $('.intro-content').removeClass('active');
        $('.pre-content').removeClass('active');
        $('.bronze-content').removeClass('active');
        $('.iron-content').removeClass('active');
        $('.classic-content').removeClass('active');
        $('.early-content').removeClass('active');
        $('.late-content').removeClass('active');
        $('.modern-content').removeClass('active');
        $('.independence-content').removeClass('active');
    })

    $('.btn10').on('click',function(){
        var menu10 = $(this).parents().find('.independence-content');
        menu10.toggleClass('active');
        $('.intro-content').removeClass('active');
        $('.pre-content').removeClass('active');
        $('.bronze-content').removeClass('active');
        $('.iron-content').removeClass('active');
        $('.classic-content').removeClass('active');
        $('.early-content').removeClass('active');
        $('.late-content').removeClass('active');
        $('.modern-content').removeClass('active');
        $('.latemodern-content').removeClass('active');
    })
})