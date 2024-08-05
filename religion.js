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

    $('.hindu').on('click',function(){
        console.log("hinduism clicked")
        var hindu = $(this).parent().find('.about1');
        hindu.toggleClass('active');
    })
    $(document).on('click',function(e){
        if(!$(e.target).closest('.hindu').length){
            $('.about1').removeClass('active');
        }
    })
    $('.islam').on('click',function(){
        var islam = $(this).parent().find('.about2');
        islam.toggleClass('active');
    })
    $(document).on('click',function(e){
        if(!$(e.target).closest('.islam').length){
            $('.about2').removeClass('active');
        }
    })
    $('.chris').on('click',function(){
        var chris = $(this).parent().find('.about3');
        chris.toggleClass('active');
    })
    $(document).on('click',function(e){
        if(!$(e.target).closest('.chris').length){
            $('.about3').removeClass('active');
        }
    })
    $('.sikh').on('click',function(){
        var sikh = $(this).parent().find('.about4');
        sikh.toggleClass('active');
    })
    $(document).on('click',function(e){
        if(!$(e.target).closest('.sikh').length){
            $('.about4').removeClass('active');
        }
    })
    $('.budh').on('click',function(){
        var budh = $(this).parent().find('.about5');
        budh.toggleClass('active');
    })
    $(document).on('click',function(e){
        if(!$(e.target).closest('.budh').length){
            $('.about5').removeClass('active');
        }
    })
    $('.jain').on('click',function(){
        var jain = $(this).parent().find('.about6');
        jain.toggleClass('active');
    })
    $(document).on('click',function(e){
        if(!$(e.target).closest('.jain').length){
            $('.about6').removeClass('active');
        }
    })
    $('.jud').on('click',function(){
        var jud = $(this).parent().find('.about7');
        jud.toggleClass('active');
    })
    $(document).on('click',function(e){
        if(!$(e.target).closest('.jud').length){
            $('.about7').removeClass('active');
        }
    })
})