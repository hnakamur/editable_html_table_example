$(function() {
  $("td").dblclick(function() {
    var td = $(this), OriginalContent = td.text();

    td.addClass("cellEditing");
    td.html("<input type='text' value='" + OriginalContent + "' />");
    td.children().first().focus();

    td.children().first().keypress(function(e) {
      if (e.which == 13) {
        var text = $(this), newContent = text.val(), td = text.parent();
        td.text(newContent);
        td.removeClass("cellEditing");
      }
    });

    td.children().first().blur(function(){
      var td = $(this).parent();
      td.text(OriginalContent);
      td.removeClass("cellEditing");
    });
  });
});
