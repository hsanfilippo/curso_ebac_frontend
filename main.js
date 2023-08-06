const inputListArray = [];
let addTask = '';

$(document).ready(function() { 

    $('input').fadeIn(2000);
    $('button').fadeIn(2000);
    $('h1').fadeIn(1500);

    $('form').on('submit', function(e) {
        e.preventDefault();    
        const inputValue = $('#input-task').val();
        let addTask = $('<li></li>');    
        $(`
            <p 
            class="task"
            title="Marcar/desmarcar como completo">
            ${inputValue}
            </p>
        `).appendTo(addTask);
        $(addTask).appendTo('ul');
        $('#input-task').val('');
    });

    $('ul').on('click', '.task', function() {
        console.log('a');
        $(this).toggleClass('completed');
    });
});