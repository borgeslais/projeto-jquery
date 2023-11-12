// Código JQuery

$(document).ready(function(){

    var form = $('#form-task');
    var input = $('#input-task');
    var taskList = $('#task-list');

    form.submit(function(event) {
        event.preventDefault();

        var taskText = input.val();

        var listItem = $('<li></li>').text(taskText)

        listItem.click(function() {
            $(this).toggleClass('completed');
        });

        taskList.append(listItem);

        input.val('');
    })
})