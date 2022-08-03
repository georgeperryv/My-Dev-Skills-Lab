// $(document).ready(function() {
    $(".container").css({"display": "grid", "justify-content": "center", 
    "position": "absolute",
    "top": "50%", "left": "50%", "-ms-transform": "translate(-50%, -50%)",
    "transform": "translate(-50%, -50%)"});

    $('.skills-title').css({"display": "flex", "background-color": "green", "padding":"10px", 
    "width": "400px", "justify-content": "center", "color": "white"});

    $(".input-button").css({"display": "flex", "justify-content": "space-between", "height": "40px"});

    $("#skill-input").css({"width": "70%"});

    $("#add-skill").css({"width": "25%"});

    $('ul').css({"list-style-type": "none", "display": "flex"});

    $('#add-skill').on('click', function(evt) {
        const $newRemoveButton = $('ul').append('<button class="remove-button" type="button"> X </button>');
        $newRemoveButton.css({"align-content": "flex-start", "padding-left": "0px", "gap" : "30px"});
        $('ul').append($('#skill-input').val());
     
    });

$('.remove-button').on('click', function(evt) {
    console.log("hi"); });
   
console.log($(".remove-button"));
    //     $('ul').append("<li>hello<li>");
    //   });
      
    // $('ul').css({"display":"block"});
    
//   });