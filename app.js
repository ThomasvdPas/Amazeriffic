var main = function() {
    "use strict";

    var toDos = [
        "Finish writing book",
        "Take Gracie to the park",
        "Answer recruiter emails on LinkedIn",
        "Prep for Monday's class",
        "Make up some new ToDos",
        "Get Groceries"
    ];

    $(".tabs a span").toArray().forEach(function(element) {
        // create a click handler for this element
        var $element = $(element);
        $element.on("click", function() {
            var $content;

            $(".tabs a span").removeClass("active");
            $(element).addClass("active");
            $("main .content").empty();

            // Add list in reversed order
            if ($element.parent().is(":nth-child(1)")) {
                console.log("you clicked the first tab");
                $content = $("<ul>");
                for (var iterator = toDos.length - 1; iterator > 0; iterator--) {
                    $content.append($("<li>").text(toDos[iterator]));
                    // console.log(toDos[iterator]);
                }
                $("main .content").append($content);

                // Add list in order
            } else if ($element.parent().is(":nth-child(2)")) {

                console.log("you clicked the second tab");
                $content = $("<ul>");
                toDos.forEach(function(todo) {
                    $content.append($("<li>").text(todo));
                });
                $("main .content").append($content);
            }
            return false
        })
    })

    $(".tabs a:first-child span").trigger("click");

    // FIZZBUZZ
    for (var i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
};

$(document).ready(main);