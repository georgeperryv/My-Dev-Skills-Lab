$('th').css( {    
    'display': 'flex',
    'flex-direction': 'row',
    'align-items': 'center',
    'margin-right': '370px',
    'margin-top': '5px',
    'marginbottom': '5px',
    'height': '20px'});
$(function () {

    $("#button").on("click", function () {
        // console.log("button works");
        const newSkill = $("input:text").val();
        // console.log(newSkill);
        const template = `
        <tr>
        
        <td><br><button class="btn btn-xs btn-danger">X</button>&nbsp&nbsp&nbsp${newSkill}<br></td>
      
        </tr>
        `;
        $(".skill-list > tbody").append(template);
        $('.input').val('');
    });
});
$(".skill-list > tbody").on('click', 'button', function() {
    $(this).closest('tr').remove(), function() {
        $(this).remove();
    };
});

// $('.skill-list tbody').on('click', 'button', function(){
//     console.log("button works");
//     $(this).closest('tr').fadeOut(1000), function() {
//         $(this).remove();
//     };
// });

// //`
// <li>${newSkill}</li>`

