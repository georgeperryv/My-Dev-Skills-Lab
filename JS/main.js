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

    $('ul').css({"list-style-type": "none", "display": "grid", "grid-template-columns": "1fr 20fr"});

    $('#add-skill').on('click', function() {
        const $newButton = '<li><button id="x-button" type="button"> X </button></li>'
        $("ul").append($newButton);

        const newSkill= $('input:text').val();
        console.log(newSkill);
        const $template = '<li>' + newSkill + '</li>';
        $("ul").append($template); });
        
        // append('<button id="x-button" type="button"> X </button>');
        // $newRemoveButton.css({"align-content": "flex-start", "padding-left": "0px", "gap" : "15px"});
        // $('ul').append($('#skill-input').val());

        

        // $(this).fadeOut(1000,function() {
        //     $(this).remove();
        //     });
        // });
     


    $('ul').click('button', function() {
            // let closest = $(this).closest('li');
            // closest.remove();
            // $(this).remove();

            $(this).closest('li').remove(), function() {
                $(this).remove();
            };});

            console.log("hi")

        // console.log($('.remove-button'));
    

   
// console.log($(".remove-button"));
    //     $('ul').append("<li>hello<li>");
    //   });
      
    // $('ul').css({"display":"block"});
    
//   });