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
  , __lines = "<? if (!options) { ?>\r\n    <div class=\"input checkbox\">\r\n        <input type=\"checkbox\" id=\"js_remember_master_password\"/>\r\n        <label for=\"js_remember_master_password\">Remember it for 5 minutes</label>\r\n    </div>\r\n<? } else if (Object.keys(options).length) { ?>\r\n    <div class=\"input checkbox\">\r\n        <input type=\"checkbox\" id=\"js_remember_master_password\"/>\r\n        <label for=\"js_remember_master_password\">Remember it for </label>\r\n    </div>\r\n    <div class=\"input select\">\r\n        <select id=\"js_remember_master_password_duration\">\r\n        <? for (var time in options) { ?>\r\n            <option value=\"<?= time.toString() ?>\"><?= options[time].toString() ?></option>\r\n        <? } ?>\r\n        </select>\r\n    </div>\r\n<? } ?>\r\n"
  , __filename = "src/all/data/ejs/master/rememberMeOptions.ejs";
try {
  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
  with (locals || {}) {
    ;  if (!options) { 
    ; __append("\r\n    <div class=\"input checkbox\">\r\n        <input type=\"checkbox\" id=\"js_remember_master_password\"/>\r\n        <label for=\"js_remember_master_password\">Remember it for 5 minutes</label>\r\n    </div>\r\n")
    ; __line = 6
    ;  } else if (Object.keys(options).length) { 
    ; __append("\r\n    <div class=\"input checkbox\">\r\n        <input type=\"checkbox\" id=\"js_remember_master_password\"/>\r\n        <label for=\"js_remember_master_password\">Remember it for </label>\r\n    </div>\r\n    <div class=\"input select\">\r\n        <select id=\"js_remember_master_password_duration\">\r\n        ")
    ; __line = 13
    ;  for (var time in options) { 
    ; __append("\r\n            <option value=\"")
    ; __line = 14
    ; __append(escapeFn( time.toString() ))
    ; __append("\">")
    ; __append(escapeFn( options[time].toString() ))
    ; __append("</option>\r\n        ")
    ; __line = 15
    ;  } 
    ; __append("\r\n        </select>\r\n    </div>\r\n")
    ; __line = 18
    ;  } 
    ; __append("\r\n")
    ; __line = 19
  }
  return __output;
} catch (e) {
  rethrow(e, __lines, __filename, __line, escapeFn);
}

//# sourceURL=src/all/data/ejs/master/rememberMeOptions.ejs

}