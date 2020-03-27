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
  , __lines = "<div class=\"dialog-wrapper\">\r\n    <div class=\"dialog confirm\">\r\n        <div class=\"dialog-header\">\r\n            <h2>Do you really want to leave ?</h2>\r\n            <a class=\"js-dialog-close dialog-close\">\r\n                <i class=\"fa fa-close\"></i>\r\n                <span class=\"visuallyhidden\">close</span>\r\n            </a>\r\n        </div>\r\n        <div class=\"js_dialog_content dialog-content\">\r\n            <div class=\"form-content\">\r\n                <p>\r\n                    There are unsaved changes, you might want to save them before leaving.\r\n                </p>\r\n            </div>\r\n        </div>\r\n        <div class=\"submit-wrapper clearfix\">\r\n            <input type=\"submit\" value=\"Leave anyway\" class=\"js-dialog-confirm button primary warning\">\r\n            <a class=\"js-dialog-cancel cancel\">cancel</a>\r\n        </div>\r\n    </div>\r\n</div>\r\n"
  , __filename = "src/all/data/ejs/dialog/confirmLeaveDialog.ejs";
try {
  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
  with (locals || {}) {
    ; __append("<div class=\"dialog-wrapper\">\r\n    <div class=\"dialog confirm\">\r\n        <div class=\"dialog-header\">\r\n            <h2>Do you really want to leave ?</h2>\r\n            <a class=\"js-dialog-close dialog-close\">\r\n                <i class=\"fa fa-close\"></i>\r\n                <span class=\"visuallyhidden\">close</span>\r\n            </a>\r\n        </div>\r\n        <div class=\"js_dialog_content dialog-content\">\r\n            <div class=\"form-content\">\r\n                <p>\r\n                    There are unsaved changes, you might want to save them before leaving.\r\n                </p>\r\n            </div>\r\n        </div>\r\n        <div class=\"submit-wrapper clearfix\">\r\n            <input type=\"submit\" value=\"Leave anyway\" class=\"js-dialog-confirm button primary warning\">\r\n            <a class=\"js-dialog-cancel cancel\">cancel</a>\r\n        </div>\r\n    </div>\r\n</div>\r\n")
    ; __line = 23
  }
  return __output;
} catch (e) {
  rethrow(e, __lines, __filename, __line, escapeFn);
}

//# sourceURL=src/all/data/ejs/dialog/confirmLeaveDialog.ejs

}