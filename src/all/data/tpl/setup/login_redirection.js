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
  , __lines = "<!-- left collumn -->\r\n<div class=\"col7\">\r\n    <h3>Setup is complete</h3>\r\n    <div class=\"message success\">\r\n        <strong>\r\n            <i class=\"fa fa-check-circle\"></i>\r\n            Success!\r\n        </strong>\r\n        You have successfully completed the setup, thank you!\r\n        You will soon be redirected to the login page.\r\n    </div>\r\n    <div class=\"input-wrapper\">\r\n        <a id=\"js_spinner\" class=\"button primary next big processing\">login!</a>\r\n        <a>Click here if you can't wait</a>.\r\n    </div>\r\n    <p>\r\n    </p>\r\n</div>\r\n\r\n<!-- right collumn -->\r\n<div class=\"col4 last\">\r\n\r\n</div>\r\n"
  , __filename = "src/all/data/ejs/setup/login_redirection.ejs";
try {
  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
  with (locals || {}) {
    ; __append("<!-- left collumn -->\r\n<div class=\"col7\">\r\n    <h3>Setup is complete</h3>\r\n    <div class=\"message success\">\r\n        <strong>\r\n            <i class=\"fa fa-check-circle\"></i>\r\n            Success!\r\n        </strong>\r\n        You have successfully completed the setup, thank you!\r\n        You will soon be redirected to the login page.\r\n    </div>\r\n    <div class=\"input-wrapper\">\r\n        <a id=\"js_spinner\" class=\"button primary next big processing\">login!</a>\r\n        <a>Click here if you can't wait</a>.\r\n    </div>\r\n    <p>\r\n    </p>\r\n</div>\r\n\r\n<!-- right collumn -->\r\n<div class=\"col4 last\">\r\n\r\n</div>\r\n")
    ; __line = 24
  }
  return __output;
} catch (e) {
  rethrow(e, __lines, __filename, __line, escapeFn);
}

//# sourceURL=src/all/data/ejs/setup/login_redirection.ejs

}