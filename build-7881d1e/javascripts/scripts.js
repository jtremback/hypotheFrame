//SLIDING DOORS
$(document).ready(function(){
  $(".annotator-frame").addClass("annotator-collapsed");
  $("#toolbar .tab").click(function(){
    $(".annotator-frame").toggleClass("annotator-collapsed");
  });
});

