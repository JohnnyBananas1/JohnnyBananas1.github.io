
//Stop Video

$('#portfolioModal1').on('hidden.bs.modal', function (e) {
  $('#portfolioModal1').hide();
  $('#portfolioModal1 iframe').attr("src", jQuery("#portfolioModal1  iframe").attr("src"));
});



$('#portfolioModal2').on('hidden.bs.modal', function (e) {
  $('#portfolioModal1').hide();
  $('#portfolioModal2 iframe').attr("src", jQuery("#portfolioModal2  iframe").attr("src"));
});



$('#portfolioModal3').on('hidden.bs.modal', function (e) {
  $('#portfolioModal1').hide();
  $('#portfolioModal3 iframe').attr("src", jQuery("#portfolioModal3  iframe").attr("src"));
});
