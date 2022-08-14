$(document).ready
(function () {
  $('#enviarCorreo').click(function(){
      alert("El correo fue enviado correctamente...");
  });
  $("#desaparece1").click(function () {
    $(".txt-1").toggle();
  });
  $("#desaparece2").click(function () {
    $(".txt-2").toggle();
  });
  $("#desaparece3").click(function () {
    $(".txt-3").toggle();
  });

  $('#cambia1').dblclick(function () {
    $(this).css('color', 'red');
  });
  $('#cambia2').dblclick(function () {
    $(this).css('color', 'red');
  });
}
)