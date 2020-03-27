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
  , __lines = "<div class=\"page login-form master-password \">\r\n    <div class=\"input text required\">\r\n        <label for=\"UserUsername\">Username</label>\r\n        <input name=\"data[User][username]\" class=\"required fluid\" maxlength=\"50\" type=\"text\" id=\"UserUsername\"\r\n               required=\"required\"\r\n               value=\"\" disabled=\"disabled\"/>\r\n    </div>\r\n    <div class=\"input text required\">\r\n        <label for=\"js_master_password\">Passphrase</label>\r\n        <input type=\"password\" placeholder=\"passphrase\" id=\"js_master_password\">\r\n        <span class=\"security-token\"></span>\r\n        <div id='loginMessage' class=\"message helptext\">Please enter your passphrase</div>\r\n    </div>\r\n    <div class=\"input checkbox hidden\">\r\n        <input type=\"checkbox\" name=\"remember-me\" id=\"rememberMe\">\r\n        <label for=\"rememberMe\">Remember passphrase until I log out</label>\r\n    </div>\r\n    <div class=\"submit-wrapper clearfix\">\r\n        <a id='loginSubmit' class=\"button primary big\">login</a>\r\n    </div>\r\n</div>"
  , __filename = "src/all/data/ejs/login/form.ejs";
try {
  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
  with (locals || {}) {
    ; __append("<div class=\"page login-form master-password \">\r\n    <div class=\"input text required\">\r\n        <label for=\"UserUsername\">Username</label>\r\n        <input name=\"data[User][username]\" class=\"required fluid\" maxlength=\"50\" type=\"text\" id=\"UserUsername\"\r\n               required=\"required\"\r\n               value=\"\" disabled=\"disabled\"/>\r\n    </div>\r\n    <div class=\"input text required\">\r\n        <label for=\"js_master_password\">Passphrase</label>\r\n        <input type=\"password\" placeholder=\"passphrase\" id=\"js_master_password\">\r\n        <span class=\"security-token\"></span>\r\n        <div id='loginMessage' class=\"message helptext\">Please enter your passphrase</div>\r\n    </div>\r\n    <div class=\"input checkbox hidden\">\r\n        <input type=\"checkbox\" name=\"remember-me\" id=\"rememberMe\">\r\n        <label for=\"rememberMe\">Remember passphrase until I log out</label>\r\n    </div>\r\n    <div class=\"submit-wrapper clearfix\">\r\n        <a id='loginSubmit' class=\"button primary big\">login</a>\r\n    </div>\r\n</div>")
    ; __line = 21
  }
  return __output;
} catch (e) {
  rethrow(e, __lines, __filename, __line, escapeFn);
}

//# sourceURL=src/all/data/ejs/login/form.ejs

}