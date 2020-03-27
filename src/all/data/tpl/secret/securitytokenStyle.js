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
  , __lines = "<style>\r\n    <?= id ?>:focus,\r\n    <?= id ?> ~ .security-token {\r\n        background: <?= color ?>;\r\n        color: <?= textcolor ?>;\r\n    }\r\n    <?= id ?>:focus ~ .security-token {\r\n        background: <?= textcolor ?>;\r\n        color: <?= color ?>;\r\n    };\r\n</style>"
  , __filename = "src/all/data/ejs/secret/securitytokenStyle.ejs";
try {
  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
  with (locals || {}) {
    ; __append("<style>\r\n    ")
    ; __line = 2
    ; __append(escapeFn( id ))
    ; __append(":focus,\r\n    ")
    ; __line = 3
    ; __append(escapeFn( id ))
    ; __append(" ~ .security-token {\r\n        background: ")
    ; __line = 4
    ; __append(escapeFn( color ))
    ; __append(";\r\n        color: ")
    ; __line = 5
    ; __append(escapeFn( textcolor ))
    ; __append(";\r\n    }\r\n    ")
    ; __line = 7
    ; __append(escapeFn( id ))
    ; __append(":focus ~ .security-token {\r\n        background: ")
    ; __line = 8
    ; __append(escapeFn( textcolor ))
    ; __append(";\r\n        color: ")
    ; __line = 9
    ; __append(escapeFn( color ))
    ; __append(";\r\n    };\r\n</style>")
    ; __line = 11
  }
  return __output;
} catch (e) {
  rethrow(e, __lines, __filename, __line, escapeFn);
}

//# sourceURL=src/all/data/ejs/secret/securitytokenStyle.ejs

}