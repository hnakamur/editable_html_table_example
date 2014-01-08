$(function() {
  $("td").dblclick(function() {
    var td = $(this), originalContent = td.text();

    td.addClass("cellEditing");
    td.data("originalContent", originalContent);
    td.html("<input type='text' value='" + originalContent + "' />");
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
      td.text(td.data("originalContent"));
      td.removeData("originalContent");
      td.removeClass("cellEditing");
    });
  });
});
