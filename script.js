$(function() {
  $("td").dblclick(function() {
    var td = $(this), originalContent = td.text();

    td.addClass("cellEditing");
    td.data("originalContent", originalContent);
    var el = document.createElement("input"), $el = $(el);
    $el.attr({type: "text", value: originalContent});
    td.empty();
    td.append(el);
    $el.focus();

    $el.keypress(function(e) {
      if (e.which == 13) {
        var text = $(this), newContent = text.val(), td = text.parent();
        td.text(newContent);
        td.removeClass("cellEditing");
      }
    });

    $el.blur(function() {
      var td = $(this).parent();
      td.text(td.data("originalContent"));
      td.removeData("originalContent");
      td.removeClass("cellEditing");
    });
  });
});
