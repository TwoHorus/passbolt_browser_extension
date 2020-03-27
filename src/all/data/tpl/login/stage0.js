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
  , __lines = "<div class=\"col6 push1 information\">\r\n    <h2>Welcome back!</h2>\r\n    <div class=\"plugin-check-wrapper\">\r\n        <div class=\"plugin-check <?= browserName ?> success\">\r\n            <p class=\"message\">\r\n                Nice one! The plugin is installed and configured. You are good to go!\r\n            </p>\r\n        </div>\r\n    </div>\r\n    <div class=\"plugin-check-wrapper\">\r\n        <div class=\"plugin-check gpg notice\">\r\n            <p class=\"message\">\r\n                Checking if the server can use the following key:\r\n                <a href=\"auth/verify\" target='_blank' id=\"serverkey_id\">\r\n                   <?= serverKeyId ?>\r\n                </a>\r\n            </p>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"col4 push1 last\">\r\n    <div class=\"logo\">\r\n        <h1><span>Passbolt</span></h1>\r\n    </div>\r\n    <div class=\"users login form\">\r\n        <div class=\"feedback\">\r\n            <i class=\"fa fa-cog fa-spin huge\" ></i>\r\n            <p>Checking server key<br> please wait...</p>\r\n        </div>\r\n    </div>\r\n</div>\r\n"
  , __filename = "src/all/data/ejs/login/stage0.ejs";
try {
  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
  with (locals || {}) {
    ; __append("<div class=\"col6 push1 information\">\r\n    <h2>Welcome back!</h2>\r\n    <div class=\"plugin-check-wrapper\">\r\n        <div class=\"plugin-check ")
    ; __line = 4
    ; __append(escapeFn( browserName ))
    ; __append(" success\">\r\n            <p class=\"message\">\r\n                Nice one! The plugin is installed and configured. You are good to go!\r\n            </p>\r\n        </div>\r\n    </div>\r\n    <div class=\"plugin-check-wrapper\">\r\n        <div class=\"plugin-check gpg notice\">\r\n            <p class=\"message\">\r\n                Checking if the server can use the following key:\r\n                <a href=\"auth/verify\" target='_blank' id=\"serverkey_id\">\r\n                   ")
    ; __line = 15
    ; __append(escapeFn( serverKeyId ))
    ; __append("\r\n                </a>\r\n            </p>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"col4 push1 last\">\r\n    <div class=\"logo\">\r\n        <h1><span>Passbolt</span></h1>\r\n    </div>\r\n    <div class=\"users login form\">\r\n        <div class=\"feedback\">\r\n            <i class=\"fa fa-cog fa-spin huge\" ></i>\r\n            <p>Checking server key<br> please wait...</p>\r\n        </div>\r\n    </div>\r\n</div>\r\n")
    ; __line = 32
  }
  return __output;
} catch (e) {
  rethrow(e, __lines, __filename, __line, escapeFn);
}

//# sourceURL=src/all/data/ejs/login/stage0.ejs

}