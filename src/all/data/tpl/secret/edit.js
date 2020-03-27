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
  , __lines = "\r\n<div class=\"form-content\">\r\n    <div class=\"input-password-wrapper\">\r\n        <input type=\"hidden\" id=\"js_field_secret_id\" />\r\n        <div class=\"input password required\">\r\n            <input maxlength=\"4096\" type=\"password\" id=\"js_secret\" placeholder=\"password\" value=\"\"/>\r\n            <input maxlength=\"4096\" type=\"text\" id=\"js_secret_clear\" placeholder=\"password\" class=\"hidden\"/>\r\n            <div class=\"security-token\"></div>\r\n        </div>\r\n        <ul class=\"actions inline\">\r\n            <li>\r\n                <a id=\"js_secret_view\" class=\"button toggle\">\r\n                    <i class=\"fa fa-eye fa-fw fa-lg\"></i>\r\n                    <span class=\"visuallyhidden\">view</span>\r\n                </a>\r\n            </li>\r\n            <li>\r\n                <a id=\"js_secret_generate\" class=\"button\">\r\n                    <i class=\"fa fa-magic fa-fw fa-lg\"></i>\r\n                    <span class=\"visuallyhidden\">generate</span>\r\n                </a>\r\n            </li>\r\n        </ul>\r\n\r\n        <div id=\"js_secret_strength\" class=\"password-complexity\">\r\n        </div>\r\n\r\n        <div class=\"input text\">\r\n            <div id=\"js_field_password_feedback\" class=\"message error\">\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"
  , __filename = "src/all/data/ejs/secret/edit.ejs";
try {
  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
  with (locals || {}) {
    ; __append("\r\n<div class=\"form-content\">\r\n    <div class=\"input-password-wrapper\">\r\n        <input type=\"hidden\" id=\"js_field_secret_id\" />\r\n        <div class=\"input password required\">\r\n            <input maxlength=\"4096\" type=\"password\" id=\"js_secret\" placeholder=\"password\" value=\"\"/>\r\n            <input maxlength=\"4096\" type=\"text\" id=\"js_secret_clear\" placeholder=\"password\" class=\"hidden\"/>\r\n            <div class=\"security-token\"></div>\r\n        </div>\r\n        <ul class=\"actions inline\">\r\n            <li>\r\n                <a id=\"js_secret_view\" class=\"button toggle\">\r\n                    <i class=\"fa fa-eye fa-fw fa-lg\"></i>\r\n                    <span class=\"visuallyhidden\">view</span>\r\n                </a>\r\n            </li>\r\n            <li>\r\n                <a id=\"js_secret_generate\" class=\"button\">\r\n                    <i class=\"fa fa-magic fa-fw fa-lg\"></i>\r\n                    <span class=\"visuallyhidden\">generate</span>\r\n                </a>\r\n            </li>\r\n        </ul>\r\n\r\n        <div id=\"js_secret_strength\" class=\"password-complexity\">\r\n        </div>\r\n\r\n        <div class=\"input text\">\r\n            <div id=\"js_field_password_feedback\" class=\"message error\">\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n")
    ; __line = 34
  }
  return __output;
} catch (e) {
  rethrow(e, __lines, __filename, __line, escapeFn);
}

//# sourceURL=src/all/data/ejs/secret/edit.ejs

}