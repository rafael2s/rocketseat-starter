var xhr = new XMLHttpRequest();

xhr.open('GET', 'https://api.github.com/users/rafaelpopo') //Api de usuarios para retornar informações de perfil, nesse caso o meu, utilizando AJAX.
xhr.send(null);

// requisição assincrona não acontece no mesmo fluxo que o script e por isso não consegue ter o corpo da api, pois não espera a requisição terminai para continua.

xhr.onreadystatechange = function(){
    if(xhr.readyState === 4) {
        console.log(JSON.parse(xhr.responseText));
    }
}
