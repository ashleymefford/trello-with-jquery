
$(document).ready(function () {
    $('.addSwimLane').on("click", function() {
        let swimlane =
            '<div class="swimlane">' +
            '<div class="swimlaneTitle">Card Title</div>' +
            '<button class="addCard">Add Card</button>' +
            '<button class="removeSwimlane">Remove</button>' +
            '</div>';
        $('.container').append(swimlane);
    });

    $('.container').on('click', '.swimlaneTitle', function(){
        let swimlaneTitle= prompt('What is the Swimlane title?');
        $(this).closest('.swimlaneTitle').text(swimlaneTitle);
    });

    $('.container').on('click', '.removeSwimlane', function() {
        $(this).closest('.swimlane').remove();
    });

    $('.container').on('click', '.addCard', function() {
        let taskCard =
            '<div class="taskCard">' +
                '<button class="removeCard">X</button>' +
            '</div>';
        $(this).closest('.swimlane').append(taskCard);
    });

    $('.container').on('click', '.removeCard', function() {
        $(this).closest('.taskCard').remove();
    });
});

