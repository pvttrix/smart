(function(){
    'use strict';
    var cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        card.addEventListener('mouseover', () => {
            var values = card.querySelectorAll('.skill__value');
            values.forEach(value => {
                var score = value.getAttribute('data-value');
                value.style.transform = `translate3d(-${100 - score}%, 0, 0)`;
            })
        });
        card.addEventListener('mouseleave', () => {
            var values = card.querySelectorAll('.skill__value');
            values.forEach(value => {
                value.style.transform = `translate3d(-100%, 0, 0)`;
            })
        });
    })

})();