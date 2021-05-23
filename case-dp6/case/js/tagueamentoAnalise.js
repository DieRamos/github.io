
var lorem = document.getElementById('loremId');
lorem.addEventListener("click", function(event) {
    ga('lorem.send', {
        hitType: 'event',
        eventCategory: 'analise',
        eventAction: 'ver_mais',
        eventLabel:  'Lorem'
    });
});

var ipsum = document.getElementById('ipsumId');
ipsum.addEventListener("click", function(event) {
    ga('ipsum.send', {
        hitType: 'event',
        eventCategory: 'analise',
        eventAction: 'ver_mais',
        eventLabel:  'Ipsum'
    });
});

var dolor = document.getElementById('dolorId');
dolor.addEventListener("click", function(event) {
    ga('dolor.send', {
        hitType: 'event',
        eventCategory: 'analise',
        eventAction: 'ver_mais',
        eventLabel:  'Dolor'
    });
});



