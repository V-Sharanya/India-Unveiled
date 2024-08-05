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
})