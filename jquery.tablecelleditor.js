;(function($, document) {
  $.fn.tablecelleditor = function(options) {
    var settings = $.extend(true, {}, $.fn.tablecelleditor.defaults, options);
    return $(this).each(function() {
      $(this).dblclick(function() {
        $.fn.tablecelleditor.startEdit($(this), settings);
      });
    });
  };

  $.fn.tablecelleditor.defaults = {
    inputCSS: {
      border: 0,
      width: "100%"
    }
  };

  $.fn.tablecelleditor.startEdit = function(td, settings) {
    var originalContent = td.text();
    td.addClass("cellEditing");
    td.data("originalContent", originalContent);
    var el = document.createElement("input"), $el = $(el);
    $el.attr({type: "text", value: originalContent});
    $el.css("fontSize", td.css("fontSize"));
    $el.css(settings.inputCSS);
    td.empty();
    td.append(el);
    $el.focus();

    $el.keypress(function(e) {
      if (e.which == 13) {
        $.fn.tablecelleditor.commitEdit(e, settings);
      }
    });

    $el.keydown(function(e) {
      if (e.which == 27) {
        $.fn.tablecelleditor.resetEdit(e, settings);
      }
    });

    $el.blur(function(e) {
      $.fn.tablecelleditor.resetEdit(e, settings);
    });
  };

  $.fn.tablecelleditor.commitEdit = function(e) {
    var text = $(e.target), newContent = text.val(), td = text.parent();
    td.text(newContent);
    td.removeData("originalContent");
    td.removeClass("cellEditing");
  };

  $.fn.tablecelleditor.resetEdit = function(e) {
    var td = $(e.target).parent();
    td.text(td.data("originalContent"));
    td.removeData("originalContent");
    td.removeClass("cellEditing");
  };
}(jQuery, document));
