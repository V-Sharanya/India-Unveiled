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

document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementsByClassName('search')[0];
    const cards = document.querySelectorAll('.card1');

    searchInput.addEventListener('input', () => {
        const query = searchInput.value.toLowerCase();

        cards.forEach(card1 => {
            const countryName = card1.getAttribute('data-name').toLowerCase();
            if (countryName.includes(query)) {
                card1.style.display = 'flex'; // Show the card
            } else {
                card1.style.display = 'none'; // Hide the card
            }
        });
    });
});
