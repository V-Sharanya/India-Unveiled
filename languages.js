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
    //to get full screen
    $('.top2').on('click',function(){
        console.log("clicked");
      this.requestFullscreen().catch((e) => {
          console.log(e);
        });
    })    
    $('.hin').on('mouseenter',function(){
        var hindimenu = $(this).parent().find('.hindi');
        hindimenu.toggleClass('active');
    })
    $(document).on('click',function(e){
        if(!$(e.target).closest('.hin').length){
            $('.hindi').removeClass('active');
        }
    })
    $('.ben').on('mouseenter',function(){
        var menu = $(this).parent().find('.bengali');
        menu.toggleClass('active');
    })

    $(document).on('click',function(e){
        if(!$(e.target).closest('.ben').length){
            $('.bengali').removeClass('active');
        }
    })

    $('.mai').on('mouseenter',function(){
        var menu3 = $(this).parent().find('.maithili');
        menu3.toggleClass('active');
    })

    $(document).on('click',function(e){
        if(!$(e.target).closest('.mai').length){
            $('.maithili').removeClass('active');
        }
    })

    $('.nep').on('mouseenter',function(){
        var menu4 = $(this).parent().find('.nepalese');
        menu4.toggleClass('active');
    })

    $(document).on('click',function(e){
        if(!$(e.target).closest('.nep').length){
            $('.nepalese').removeClass('active');
        }
    })

    $('.sans').on('mouseenter',function(){
        var menu5 = $(this).parent().find('.sanskrit');
        menu5.toggleClass('active');
    })

    $(document).on('click',function(e){
        if(!$(e.target).closest('.sans').length){
            $('.sanskrit').removeClass('active');
        }
    })

    $('.tam').on('mouseenter',function(){
        var menu6 = $(this).parent().find('.tamil');
        menu6.toggleClass('active');
    })

    $(document).on('click',function(e){
        if(!$(e.target).closest('.tam').length){
            $('.tamil').removeClass('active');
        }
    })

    $('.ur').on('mouseenter',function(){
        var menu7 = $(this).parent().find('.urdu');
        menu7.toggleClass('active');
    })

    $(document).on('click',function(e){
        if(!$(e.target).closest('.ur').length){
            $('.urdu').removeClass('active');
        }
    })

    $('.assam').on('mouseenter',function(){
        var menu8 = $(this).parent().find('.assamese');
        menu8.toggleClass('active');
    })

    $(document).on('click',function(e){
        if(!$(e.target).closest('.assam').length){
            $('.assamese').removeClass('active');
        }
    })

    $('.dog').on('mouseenter',function(){
        var menu9 = $(this).parent().find('.dogri');
        menu9.toggleClass('active');
    })

    $(document).on('click',function(e){
        if(!$(e.target).closest('.dog').length){
            $('.dogri').removeClass('active');
        }
    })

    $('.kan').on('mouseenter',function(){
        var menu10 = $(this).parent().find('.kannada');
        menu10.toggleClass('active');
    })

    $(document).on('click',function(e){
        if(!$(e.target).closest('.kan').length){
            $('.kannada').removeClass('active');
        }
    })

    $('.guj').on('mouseenter',function(){
        var menu11 = $(this).parent().find('.gujarati');
        menu11.toggleClass('active');
    })

    $(document).on('click',function(e){
        if(!$(e.target).closest('.guj').length){
            $('.gujarati').removeClass('active');
        }
    })

    $('.bo').on('mouseenter',function(){
        var menu12 = $(this).parent().find('.bodo');
        menu12.toggleClass('active');
    })

    $(document).on('click',function(e){
        if(!$(e.target).closest('.bo').length){
            $('.bodo').removeClass('active');
        }
    })

    $('.man').on('mouseenter',function(){
        var menu13 = $(this).parent().find('.manipur');
        menu13.toggleClass('active');
    })

    $(document).on('click',function(e){
        if(!$(e.target).closest('.man').length){
            $('.manipur').removeClass('active');
        }
    })

    $('.ori').on('mouseenter',function(){
        var menu14 = $(this).parent().find('.oriya');
        menu14.toggleClass('active');
    })

    $(document).on('click',function(e){
        if(!$(e.target).closest('.ori').length){
            $('.oriya').removeClass('active');
        }
    })

    $('.mara').on('mouseenter',function(){
        var menu15 = $(this).parent().find('.marathi');
        menu15.toggleClass('active');
    })

    $(document).on('click',function(e){
        if(!$(e.target).closest('.mara').length){
            $('.marathi').removeClass('active');
        }
    })

    $('.san').on('mouseenter',function(){
        var menu16 = $(this).parent().find('.santhali');
        menu16.toggleClass('active');
    })

    $(document).on('click',function(e){
        if(!$(e.target).closest('.san').length){
            $('.santhali').removeClass('active');
        }
    })

    $('.tel').on('mouseenter',function(){
        var menu17 = $(this).parent().find('.telugu');
        menu17.toggleClass('active');
    })

    $(document).on('click',function(e){
        if(!$(e.target).closest('.tel').length){
            $('.telugu').removeClass('active');
        }
    })

    $('.pun').on('mouseenter',function(){
        var menu18 = $(this).parent().find('.punjabi');
        menu18.toggleClass('active');
    })

    $(document).on('click',function(e){
        if(!$(e.target).closest('.pun').length){
            $('.punjabi').removeClass('active');
        }
    })

    $('.sin').on('mouseenter',function(){
        var menu19 = $(this).parent().find('.sindhi');
        menu19.toggleClass('active');
    })

    $(document).on('click',function(e){
        if(!$(e.target).closest('.sin').length){
            $('.sindhi').removeClass('active');
        }
    })

    $('.mal').on('mouseenter',function(){
        var menu20 = $(this).parent().find('.malayalam');
        menu20.toggleClass('active');
    })

    $(document).on('click',function(e){
        if(!$(e.target).closest('.mal').length){
            $('.malayalam').removeClass('active');
        }
    })

    $('.kon').on('mouseenter',function(){
        var menu21 = $(this).parent().find('.konkani');
        menu21.toggleClass('active');
    })

    $(document).on('click',function(e){
        if(!$(e.target).closest('.kon').length){
            $('.konkani').removeClass('active');
        }
    })

    $('.kash').on('mouseenter',function(){
        var menu22 = $(this).parent().find('.kashmiri');
        menu22.toggleClass('active');
    })

    $(document).on('click',function(e){
        if(!$(e.target).closest('.kash').length){
            $('.kashmiri').removeClass('active');
        }
    })
})