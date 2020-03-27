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
  , __lines = "<!-- left collumn -->\r\n<div class=\"col7\">\r\n    <h3>Set a security token</h3>\r\n    <p>Please choose a color and three letters (or remember the combination we conveniently generated for you).</p>\r\n\r\n    <div class=\"colorpicker\">\r\n        <div class=\"input color\">\r\n            <input type=\"text\" id=\"js_security_token_text\" class=\"token\" name=\"text\"  maxlength=\"3\"/>\r\n            <div id=\"js_field_name_feedback\" class=\"message error hidden\"><!-- Error message --></div>\r\n            <input type=\"hidden\" id=\"js_security_token_background\" name=\"background\"  />\r\n            <input type=\"hidden\" id=\"js_security_token_color\" name=\"color\" />\r\n        </div>\r\n        <div id=\"js_colorpicker\"></div>\r\n    </div>\r\n\r\n</div>\r\n\r\n<!-- right collumn -->\r\n<div class=\"col4 last\">\r\n    <h3>Wait, why do I need this?</h3>\r\n    <p>\r\n        This token is used to prevent malicious web pages tricking you by mimicking passbolt dialogs in\r\n        order to steal your data (aka. this protects you from phishing attacks).\r\n    </p>\r\n    <p>\r\n        This visual cue will be shown whenever we ask you for your passphrase and other sensitive places to\r\n        help make sure you are dealing with an authentic passbolt dialog and not a fake one!\r\n    </p>\r\n</div>\r\n"
  , __filename = "src/all/data/ejs/setup/security_token.ejs";
try {
  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
  with (locals || {}) {
    ; __append("<!-- left collumn -->\r\n<div class=\"col7\">\r\n    <h3>Set a security token</h3>\r\n    <p>Please choose a color and three letters (or remember the combination we conveniently generated for you).</p>\r\n\r\n    <div class=\"colorpicker\">\r\n        <div class=\"input color\">\r\n            <input type=\"text\" id=\"js_security_token_text\" class=\"token\" name=\"text\"  maxlength=\"3\"/>\r\n            <div id=\"js_field_name_feedback\" class=\"message error hidden\"><!-- Error message --></div>\r\n            <input type=\"hidden\" id=\"js_security_token_background\" name=\"background\"  />\r\n            <input type=\"hidden\" id=\"js_security_token_color\" name=\"color\" />\r\n        </div>\r\n        <div id=\"js_colorpicker\"></div>\r\n    </div>\r\n\r\n</div>\r\n\r\n<!-- right collumn -->\r\n<div class=\"col4 last\">\r\n    <h3>Wait, why do I need this?</h3>\r\n    <p>\r\n        This token is used to prevent malicious web pages tricking you by mimicking passbolt dialogs in\r\n        order to steal your data (aka. this protects you from phishing attacks).\r\n    </p>\r\n    <p>\r\n        This visual cue will be shown whenever we ask you for your passphrase and other sensitive places to\r\n        help make sure you are dealing with an authentic passbolt dialog and not a fake one!\r\n    </p>\r\n</div>\r\n")
    ; __line = 30
  }
  return __output;
} catch (e) {
  rethrow(e, __lines, __filename, __line, escapeFn);
}

//# sourceURL=src/all/data/ejs/setup/security_token.ejs

}