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
  , __lines = "<!-- left collumn -->\r\n<div class=\"col7\">\r\n    <h3>Generating the secret and public key</h3>\r\n\r\n    <div class=\"progress-bar-wrapper\">\r\n        <span class=\"progress-bar big infinite\"><span class=\"progress \"></span></span>\r\n    </div>\r\n\r\n    <p>We are generating your public and secret keys. This may take a while. Just take a deep breath and enjoy being in the moment. </p>\r\n\r\n</div>\r\n\r\n<!-- right collumn -->\r\n<div class=\"col4 last\"></div>"
  , __filename = "src/all/data/ejs/setup/generate_key.ejs";
try {
  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
  with (locals || {}) {
    ; __append("<!-- left collumn -->\r\n<div class=\"col7\">\r\n    <h3>Generating the secret and public key</h3>\r\n\r\n    <div class=\"progress-bar-wrapper\">\r\n        <span class=\"progress-bar big infinite\"><span class=\"progress \"></span></span>\r\n    </div>\r\n\r\n    <p>We are generating your public and secret keys. This may take a while. Just take a deep breath and enjoy being in the moment. </p>\r\n\r\n</div>\r\n\r\n<!-- right collumn -->\r\n<div class=\"col4 last\"></div>")
    ; __line = 14
  }
  return __output;
} catch (e) {
  rethrow(e, __lines, __filename, __line, escapeFn);
}

//# sourceURL=src/all/data/ejs/setup/generate_key.ejs

}