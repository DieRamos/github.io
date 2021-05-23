
var nome = document.getElementById('nome');
nome.addEventListener("change", function(event) {
    
    ga('nome.send', {
        hitType: 'event',
        eventCategory: 'contato',
        eventAction: 'nome',
        eventLabel:  'preencheu'
    });
});

var email = document.getElementById('email');
email.addEventListener("change", function(event) {
    
    ga('email.send', {
        hitType: 'event',
        eventCategory: 'contato',
        eventAction: 'email',
        eventLabel:  'preencheu'
    });
});

var telefone = document.getElementById('telefone');
telefone.addEventListener("change", function(event) {
    
    ga('telefone.send', {
        hitType: 'event',
        eventCategory: 'contato',
        eventAction: 'telefone',
        eventLabel:  'preencheu'
    });
});

var enviar = document.getElementById('enviarId');
enviar.addEventListener("click", function(event) {
    
    ga('enviar.send', {
        hitType: 'event',
        eventCategory: 'contato',
        eventAction: 'enviado',
        eventLabel:  'enviado'
    });
});
