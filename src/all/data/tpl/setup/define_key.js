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
  , __lines = "<div class=\"col10 last feedback\">\r\n    <p class=\"message error hidden\" id=\"js_main_error_feedback\"></p>\r\n</div>\r\n<!-- left collumn -->\r\n<div class=\"col6\">\r\n    <h3>Create a new key</h3>\r\n    <div class=\"input text required disabled\">\r\n        <label for=\"OwnerName\">Owner Name</label>\r\n        <input name=\"data[Owner][name]\" class=\"required fluid\" id=\"OwnerName\" required=\"required\" type=\"text\" disabled=\"disabled\" value=\"<?= firstName ?> <?= lastName ?>\">\r\n    </div>\r\n    <div class=\"input text required disabled\">\r\n        <label for=\"OwnerEmail\">Owner Email</label>\r\n        <input name=\"data[Owner][email]\" class=\"required fluid\" id=\"OwnerEmail\" required=\"required\" type=\"text\" disabled=\"disabled\" value=\"<?= username ?>\">\r\n    </div>\r\n    <div class=\"input text\">\r\n        <label for=\"KeyComment\">Comment</label>\r\n        <input name=\"data[Key][comment]\" class=\"required fluid\" id=\"KeyComment\" required=\"required\" type=\"text\" placeholder=\"add a comment (optional)\" value=\"<?= comment ?>\">\r\n    </div>\r\n</div>\r\n\r\n<!-- right collumn -->\r\n<div class=\"col4 last\">\r\n    <h3>Advanced settings</h3>\r\n    <div class=\"input select required\">\r\n        <label for=\"KeyType\">Key Type</label>\r\n        <select name=\"data[Key][type]\" id=\"KeyType\" disabled=\"disabled\" class=\"fluid\">\r\n            <option value=\"RSA-DSA\" >RSA and DSA (default)</option>\r\n            <option value=\"DSA-EL\" >DSA and Elgamal</option>\r\n        </select>\r\n    </div>\r\n    <div class=\"input select required\">\r\n        <label for=\"KeyLength\">Key Length</label>\r\n        <select name=\"data[Key][length]\" id=\"KeyLength\" disabled=\"disabled\" class=\"fluid\">\r\n            <option value=\"1024\" >1024</option>\r\n            <option value=\"2048\" >2048</option>\r\n            <option value=\"3076\" >3076</option>\r\n        </select>\r\n    </div>\r\n\r\n    <div class=\"input date\">\r\n        <label for=\"KeyExpire\">Key Expire</label>\r\n        <input name=\"data[Key][expire]\" class=\"required fluid\" id=\"KeyExpire\" disabled=\"disabled\" required=\"required\" placeholder=\"dd/mm/yyyy\" type=\"text\">\r\n        <span class=\"input-addon\"><i class=\"fa fa-calendar fa-fw\"></i></span>\r\n    </div>\r\n</div>"
  , __filename = "src/all/data/ejs/setup/define_key.ejs";
try {
  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
  with (locals || {}) {
    ; __append("<div class=\"col10 last feedback\">\r\n    <p class=\"message error hidden\" id=\"js_main_error_feedback\"></p>\r\n</div>\r\n<!-- left collumn -->\r\n<div class=\"col6\">\r\n    <h3>Create a new key</h3>\r\n    <div class=\"input text required disabled\">\r\n        <label for=\"OwnerName\">Owner Name</label>\r\n        <input name=\"data[Owner][name]\" class=\"required fluid\" id=\"OwnerName\" required=\"required\" type=\"text\" disabled=\"disabled\" value=\"")
    ; __line = 9
    ; __append(escapeFn( firstName ))
    ; __append(" ")
    ; __append(escapeFn( lastName ))
    ; __append("\">\r\n    </div>\r\n    <div class=\"input text required disabled\">\r\n        <label for=\"OwnerEmail\">Owner Email</label>\r\n        <input name=\"data[Owner][email]\" class=\"required fluid\" id=\"OwnerEmail\" required=\"required\" type=\"text\" disabled=\"disabled\" value=\"")
    ; __line = 13
    ; __append(escapeFn( username ))
    ; __append("\">\r\n    </div>\r\n    <div class=\"input text\">\r\n        <label for=\"KeyComment\">Comment</label>\r\n        <input name=\"data[Key][comment]\" class=\"required fluid\" id=\"KeyComment\" required=\"required\" type=\"text\" placeholder=\"add a comment (optional)\" value=\"")
    ; __line = 17
    ; __append(escapeFn( comment ))
    ; __append("\">\r\n    </div>\r\n</div>\r\n\r\n<!-- right collumn -->\r\n<div class=\"col4 last\">\r\n    <h3>Advanced settings</h3>\r\n    <div class=\"input select required\">\r\n        <label for=\"KeyType\">Key Type</label>\r\n        <select name=\"data[Key][type]\" id=\"KeyType\" disabled=\"disabled\" class=\"fluid\">\r\n            <option value=\"RSA-DSA\" >RSA and DSA (default)</option>\r\n            <option value=\"DSA-EL\" >DSA and Elgamal</option>\r\n        </select>\r\n    </div>\r\n    <div class=\"input select required\">\r\n        <label for=\"KeyLength\">Key Length</label>\r\n        <select name=\"data[Key][length]\" id=\"KeyLength\" disabled=\"disabled\" class=\"fluid\">\r\n            <option value=\"1024\" >1024</option>\r\n            <option value=\"2048\" >2048</option>\r\n            <option value=\"3076\" >3076</option>\r\n        </select>\r\n    </div>\r\n\r\n    <div class=\"input date\">\r\n        <label for=\"KeyExpire\">Key Expire</label>\r\n        <input name=\"data[Key][expire]\" class=\"required fluid\" id=\"KeyExpire\" disabled=\"disabled\" required=\"required\" placeholder=\"dd/mm/yyyy\" type=\"text\">\r\n        <span class=\"input-addon\"><i class=\"fa fa-calendar fa-fw\"></i></span>\r\n    </div>\r\n</div>")
    ; __line = 45
  }
  return __output;
} catch (e) {
  rethrow(e, __lines, __filename, __line, escapeFn);
}

//# sourceURL=src/all/data/ejs/setup/define_key.ejs

}