var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

var todos = JSON.parse(localStorage.getItem('list_todos')) || [];

function renderTodos(){

    listElement.innerHTML = ''; // Limpa todo o array

    for (todo of todos){ // For para carrer todo o array
        var todoElement = document.createElement('li'); //Cria um 'li' no ul
        var todoText = document.createTextNode(todo); //Coleta o texto 

        var linkElement = document.createElement('a'); // Cria um 'a' no li

        linkElement.setAttribute('href', '#');

        var pos = todos.indexOf(todo); // indexOf buscar o todo na posição do array que está passando.
        linkElement.setAttribute('onclick', 'deleteTodo(' + pos + ')');

        var linkText = document.createTextNode('Excluir'); // Cria um texto

        linkElement.appendChild(linkText); //Coloca o texto criado no elemento 'a'

        todoElement.appendChild(todoText);
        todoElement.appendChild(linkElement);
        
        listElement.appendChild(todoElement);
    }
}

renderTodos();

function addTodo(){
    var todoText = inputElement.value;

    todos.push(todoText); // Empurra um novo conteudo para o array, sempre sera o ultimo a ser incrementado
    inputElement.value = ''; // limpara o valor digitado no input
    renderTodos();
    saveToStorage();
}

buttonElement.onclick = addTodo; // Só adiciona após o click no button

function deleteTodo (pos) {
    todos.splice(pos, 1);
    renderTodos();
    saveToStorage();
}

function saveToStorage() {
    localStorage.setItem('list_todos', JSON.stringify(todos));
}