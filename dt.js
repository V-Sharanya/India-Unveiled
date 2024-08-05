let a;
let d;
let t;
setInterval(() => {
    a = new Date();
    t = a.getHours() + ":" + a.getMinutes() + ":" + a.getSeconds();
    d = a.toLocaleDateString()  ;
    document.querySelector('.here').innerHTML = "Time : " + t + "<br/>" + "Date : " + d ;
}, 1000);

$(document).ready(function(){
    $('.dropdown-btn').on('click',function(){
        var submenu = $(this).parent().find('.dropdown-menu');
        submenu.toggleClass('active');
    })
    $(document).on('click',function(e){
        if(!$(e.target).closest('.dropdown').length){
            $('.dropdown-menu').removeClass('active');
        }
    })
})
