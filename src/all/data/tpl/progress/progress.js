module.exports = function(locals, escapeFn, include, rethrow
) {
rethrow = rethrow || function rethrow(err, str, flnm, lineno, esc){
  var lines = str.split('\n');
  var start = Math.max(lineno - 3, 0);
  var end = Math.min(lines.length, lineno + 3);
  var filename = esc(flnm); // eslint-disable-line
  // Error context
  var context = lines.slice(start, end).map(function (line, i){
    var curr = i + start + 1;
    return (curr == lineno ? ' >> ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'ejs') + ':'
    + lineno + '\n'
    + context + '\n\n'
    + err.message;

  throw err;
};
escapeFn = escapeFn || function (markup) {
  return markup == undefined
    ? ''
    : String(markup)
      .replace(_MATCH_HTML, encode_char);
};
var _ENCODE_HTML_RULES = {
      "&": "&amp;"
    , "<": "&lt;"
    , ">": "&gt;"
    , '"': "&#34;"
    , "'": "&#39;"
    }
  , _MATCH_HTML = /[&<>'"]/g;
function encode_char(c) {
  return _ENCODE_HTML_RULES[c] || c;
};
;
var __line = 1
  , __lines = "<div id=\"js_plugin_progress_dialog\" class=\"dialog-wrapper progress-dialog\">\r\n    <div class=\"dialog\">\r\n        <div class=\"dialog-header\">\r\n            <h2><?= title!=null ? title : '' ?></h2>\r\n            <a class=\"dialog-close js-dialog-close\">\r\n                <i class=\"fa fa-close\"></i>\r\n                <span class=\"visuallyhidden\">close</span>\r\n            </a>\r\n        </div>\r\n        <div class=\"js_dialog_content dialog-content\">\r\n            <!-- Form content class to have the white background -->\r\n            <div class=\"form-content\">\r\n                <label>Take a deep breath and enjoy being in the present moment...</label>\r\n                <div class=\"progress-bar-wrapper\">\r\n                    <span id=\"js_progress_bar_container\" class=\"progress-bar big infinite\">\r\n                        <span class=\"progress\"></span>\r\n                    </span>\r\n                </div>\r\n                <div class=\"progress-details\">\r\n                    <span id=\"js_progress_step_label\" class=\"progress-step-label\">&nbsp;</span>\r\n                    <span style=\"float:right\" class=\"progress-percent\"><span id=\"js_progress_percent\"></span></span>\r\n                </div>\r\n            </div>\r\n            <div class=\"submit-wrapper clearfix\">\r\n                <a id=\"progress-waiting\" class=\"button primary processing\">Close</a>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"
  , __filename = "src/all/data/ejs/progress/progress.ejs";
try {
  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
  with (locals || {}) {
    ; __append("<div id=\"js_plugin_progress_dialog\" class=\"dialog-wrapper progress-dialog\">\r\n    <div class=\"dialog\">\r\n        <div class=\"dialog-header\">\r\n            <h2>")
    ; __line = 4
    ; __append(escapeFn( title!=null ? title : '' ))
    ; __append("</h2>\r\n            <a class=\"dialog-close js-dialog-close\">\r\n                <i class=\"fa fa-close\"></i>\r\n                <span class=\"visuallyhidden\">close</span>\r\n            </a>\r\n        </div>\r\n        <div class=\"js_dialog_content dialog-content\">\r\n            <!-- Form content class to have the white background -->\r\n            <div class=\"form-content\">\r\n                <label>Take a deep breath and enjoy being in the present moment...</label>\r\n                <div class=\"progress-bar-wrapper\">\r\n                    <span id=\"js_progress_bar_container\" class=\"progress-bar big infinite\">\r\n                        <span class=\"progress\"></span>\r\n                    </span>\r\n                </div>\r\n                <div class=\"progress-details\">\r\n                    <span id=\"js_progress_step_label\" class=\"progress-step-label\">&nbsp;</span>\r\n                    <span style=\"float:right\" class=\"progress-percent\"><span id=\"js_progress_percent\"></span></span>\r\n                </div>\r\n            </div>\r\n            <div class=\"submit-wrapper clearfix\">\r\n                <a id=\"progress-waiting\" class=\"button primary processing\">Close</a>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n")
    ; __line = 30
  }
  return __output;
} catch (e) {
  rethrow(e, __lines, __filename, __line, escapeFn);
}

//# sourceURL=src/all/data/ejs/progress/progress.ejs

}