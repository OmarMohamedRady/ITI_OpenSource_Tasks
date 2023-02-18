$(function () {
  $("#draggable-2").draggable();
  $("#draggable-2").hover(function () {
    $("#draggable-2").effect("shake", {
      distance: 1,
    });
  });
  $("#droppable-2").droppable({
    drop: function (event, ui) {
      $("#photo").remove();
    },
  });
});
