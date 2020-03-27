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
  , __lines = "<!-- left collumn -->\r\n<div class=\"col7\">\r\n    <h3>Set your passphrase</h3>\r\n    <p>This is the only passphrase you will need to remember from now on, so make sure you choose it wisely! </p>\r\n\r\n    <div class=\"input-password-wrapper\">\r\n        <div class=\"input password required\">\r\n            <label for=\"js_field_password\" class=\"hidden\">New passphrase</label>\r\n            <input name=\"passbolt.model.User.password\" type=\"password\" id=\"js_field_password\" placeholder=\"enter your passphrase here\">\r\n            <input class=\"required hidden\" type=\"text\" id=\"js_field_password_clear\">\r\n        </div>\r\n        <ul class=\"actions inline\">\r\n            <li>\r\n                <a id=\"js_show_pwd_button\" class=\"button toggle mad_controller_component_button_controller mad_view_view js_component ready\r\n                    tooltip-right always-show large\" data-tooltip=\"click here to view in clear text\">\r\n                    <i class=\"fa fa-eye fa-lg\"></i>\r\n                    <span class=\"visuallyhidden\">view</span>\r\n                </a>\r\n            </li>\r\n        </ul>\r\n        <div id=\"js_user_pwd_strength\" class=\"password-complexity\">\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"password-hints\">\r\n        <p>Some tips for choosing a strong passphrase:</p>\r\n        <ul id=\"js_password_match_criterias\">\r\n        </ul>\r\n    </div>\r\n</div>\r\n\r\n<!-- right collumn -->\r\n<div class=\"col4 last\">\r\n\r\n</div>"
  , __filename = "src/all/data/ejs/setup/secret.ejs";
try {
  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
  with (locals || {}) {
    ; __append("<!-- left collumn -->\r\n<div class=\"col7\">\r\n    <h3>Set your passphrase</h3>\r\n    <p>This is the only passphrase you will need to remember from now on, so make sure you choose it wisely! </p>\r\n\r\n    <div class=\"input-password-wrapper\">\r\n        <div class=\"input password required\">\r\n            <label for=\"js_field_password\" class=\"hidden\">New passphrase</label>\r\n            <input name=\"passbolt.model.User.password\" type=\"password\" id=\"js_field_password\" placeholder=\"enter your passphrase here\">\r\n            <input class=\"required hidden\" type=\"text\" id=\"js_field_password_clear\">\r\n        </div>\r\n        <ul class=\"actions inline\">\r\n            <li>\r\n                <a id=\"js_show_pwd_button\" class=\"button toggle mad_controller_component_button_controller mad_view_view js_component ready\r\n                    tooltip-right always-show large\" data-tooltip=\"click here to view in clear text\">\r\n                    <i class=\"fa fa-eye fa-lg\"></i>\r\n                    <span class=\"visuallyhidden\">view</span>\r\n                </a>\r\n            </li>\r\n        </ul>\r\n        <div id=\"js_user_pwd_strength\" class=\"password-complexity\">\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"password-hints\">\r\n        <p>Some tips for choosing a strong passphrase:</p>\r\n        <ul id=\"js_password_match_criterias\">\r\n        </ul>\r\n    </div>\r\n</div>\r\n\r\n<!-- right collumn -->\r\n<div class=\"col4 last\">\r\n\r\n</div>")
    ; __line = 35
  }
  return __output;
} catch (e) {
  rethrow(e, __lines, __filename, __line, escapeFn);
}

//# sourceURL=src/all/data/ejs/setup/secret.ejs

}