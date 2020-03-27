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
  , __lines = "<?\r\nif (Object.keys(criterias).length == 0) {\r\n?>\r\n<li>It is at least 8 char in length </li>\r\n<li>It contains lower and uppercase character</li>\r\n<li>It contains letters and numbers</li>\r\n<li>It contains special characters (like / or * or %)</li>\r\n<li>It is not part of a dictionary</li>\r\n<? } else { ?>\r\n<li class=\"<?= criterias.minLength ? 'success' : 'error' ?>\">It is at least 8 char in length</li>\r\n<li class=\"<?= criterias.alpha && criterias.uppercase ? 'success' : 'error' ?>\">It contains lower and uppercase character</li>\r\n<li class=\"<?= (criterias.alpha || criterias.uppercase) && criterias.digit ? 'success' : 'error' ?>\">It contains letters and numbers</li>\r\n<li class=\"<?= criterias.special ? 'success' : 'error' ?>\">It contains special characters (like / or * or %)</li>\r\n<? if (typeof criterias.dictionary !== 'undefined') { ?>\r\n<li class=\"<?= criterias.dictionary ? 'success' : 'error' ?>\">It is not part of a dictionary\r\n    <? if (typeof criterias.dictionary_error !== 'undefined') { ?>(network error)<? } ?>\r\n</li>\r\n<? } else { ?>\r\n<li>It is not part of a dictionary (checking, please wait...)</li>\r\n<? } ?>\r\n<? } ?>\r\n"
  , __filename = "src/all/data/ejs/secret/criterias.ejs";
try {
  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
  with (locals || {}) {
    ; 
if (Object.keys(criterias).length == 0) {

    ; __line = 3
    ; __append("\r\n<li>It is at least 8 char in length </li>\r\n<li>It contains lower and uppercase character</li>\r\n<li>It contains letters and numbers</li>\r\n<li>It contains special characters (like / or * or %)</li>\r\n<li>It is not part of a dictionary</li>\r\n")
    ; __line = 9
    ;  } else { 
    ; __append("\r\n<li class=\"")
    ; __line = 10
    ; __append(escapeFn( criterias.minLength ? 'success' : 'error' ))
    ; __append("\">It is at least 8 char in length</li>\r\n<li class=\"")
    ; __line = 11
    ; __append(escapeFn( criterias.alpha && criterias.uppercase ? 'success' : 'error' ))
    ; __append("\">It contains lower and uppercase character</li>\r\n<li class=\"")
    ; __line = 12
    ; __append(escapeFn( (criterias.alpha || criterias.uppercase) && criterias.digit ? 'success' : 'error' ))
    ; __append("\">It contains letters and numbers</li>\r\n<li class=\"")
    ; __line = 13
    ; __append(escapeFn( criterias.special ? 'success' : 'error' ))
    ; __append("\">It contains special characters (like / or * or %)</li>\r\n")
    ; __line = 14
    ;  if (typeof criterias.dictionary !== 'undefined') { 
    ; __append("\r\n<li class=\"")
    ; __line = 15
    ; __append(escapeFn( criterias.dictionary ? 'success' : 'error' ))
    ; __append("\">It is not part of a dictionary\r\n    ")
    ; __line = 16
    ;  if (typeof criterias.dictionary_error !== 'undefined') { 
    ; __append("(network error)")
    ;  } 
    ; __append("\r\n</li>\r\n")
    ; __line = 18
    ;  } else { 
    ; __append("\r\n<li>It is not part of a dictionary (checking, please wait...)</li>\r\n")
    ; __line = 20
    ;  } 
    ; __append("\r\n")
    ; __line = 21
    ;  } 
    ; __append("\r\n")
    ; __line = 22
  }
  return __output;
} catch (e) {
  rethrow(e, __lines, __filename, __line, escapeFn);
}

//# sourceURL=src/all/data/ejs/secret/criterias.ejs

}