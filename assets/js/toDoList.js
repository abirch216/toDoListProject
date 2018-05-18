//cross-out todo when clicked on
$("ul").on('click', "li", function() {
  /* Act on the event */
  $(this).toggleClass('complete');  
});

//click on x to delete todo
$("ul").on("click", "span", function(event) {
  $(this).parent().fadeOut(500, function() {
    $(this).remove();
  });
  event.stopPropagation();
});

//create new todo
$("input[type='text']").on("keypress", function(event) {
  if(event.which === 13){
    var toDoText = $(this).val();
    $(this).val("");
    $("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> " + toDoText + "</li>");
  }
});

//toggle input text row
$(".fa-plus").on("click", function(){
  $("input[type='text']").fadeToggle();
});