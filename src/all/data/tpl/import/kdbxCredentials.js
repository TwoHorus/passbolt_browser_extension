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
  , __lines = "<div class=\"dialog-wrapper\" id=\"kdbx-credentials\">\r\n    <div class=\"dialog import\">\r\n        <div class=\"dialog-header\">\r\n            <h2><?= this.title ?></h2>\r\n            <a role=\"button\" class=\"dialog-close\">\r\n                <i class=\"fa fa-close\"></i><span class=\"visuallyhidden\">close</span>\r\n            </a>\r\n        </div>\r\n        <div class=\"js_dialog_content dialog-content\">\r\n            <form id=\"js_rs_import\">\r\n                <div class=\"form-content\">\r\n                    <div class=\"input-password-wrapper\">\r\n                        <div class=\"input password\">\r\n                            <label>Keepass password</label>\r\n                            <input name=\"passbolt.model.Resource.passphrase\" maxlength=\"50\" id=\"js_field_passphrase\" placeholder=\"password\" type=\"password\">\r\n                            <input class=\"required hidden\" maxlength=\"50\" type=\"text\" id=\"js_field_password_clear\" >\r\n                            <ul class=\"actions inline\">\r\n                                <li>\r\n                                    <a role=\"button\" id=\"js_secret_view\" class=\"button toggle\">\r\n                                        <i class=\"fa fa-eye fa-fw fa-lg\"></i>\r\n                                        <span class=\"visuallyhidden\">view</span>\r\n                                    </a>\r\n                                </li>\r\n                            </ul>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"input text\">\r\n                        <label for=\"js_field_key_file\">Keepass key file (optional)</label>\r\n                        <input class=\"jfilestyle\" name=\"passbolt.model.Resource.uri\" id=\"js_field_key_file\" type=\"file\" data-text=\"Choose a file\" data-placeholder=\"No key file selected\">\r\n                        <div id=\"js_field_key_file_feedback\" class=\"message\"></div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"submit-wrapper clearfix\">\r\n                    <input class=\"button primary\" value=\"<?= this.ctaLabel ?>\" type=\"submit\">\r\n                    <a role=\"link\" class=\"js-dialog-cancel cancel\">cancel</a>\r\n                </div>\r\n            </form>\r\n        </div>\r\n    </div>\r\n</div>"
  , __filename = "src/all/data/ejs/import/kdbxCredentials.ejs";
try {
  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
  with (locals || {}) {
    ; __append("<div class=\"dialog-wrapper\" id=\"kdbx-credentials\">\r\n    <div class=\"dialog import\">\r\n        <div class=\"dialog-header\">\r\n            <h2>")
    ; __line = 4
    ; __append(escapeFn( this.title ))
    ; __append("</h2>\r\n            <a role=\"button\" class=\"dialog-close\">\r\n                <i class=\"fa fa-close\"></i><span class=\"visuallyhidden\">close</span>\r\n            </a>\r\n        </div>\r\n        <div class=\"js_dialog_content dialog-content\">\r\n            <form id=\"js_rs_import\">\r\n                <div class=\"form-content\">\r\n                    <div class=\"input-password-wrapper\">\r\n                        <div class=\"input password\">\r\n                            <label>Keepass password</label>\r\n                            <input name=\"passbolt.model.Resource.passphrase\" maxlength=\"50\" id=\"js_field_passphrase\" placeholder=\"password\" type=\"password\">\r\n                            <input class=\"required hidden\" maxlength=\"50\" type=\"text\" id=\"js_field_password_clear\" >\r\n                            <ul class=\"actions inline\">\r\n                                <li>\r\n                                    <a role=\"button\" id=\"js_secret_view\" class=\"button toggle\">\r\n                                        <i class=\"fa fa-eye fa-fw fa-lg\"></i>\r\n                                        <span class=\"visuallyhidden\">view</span>\r\n                                    </a>\r\n                                </li>\r\n                            </ul>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"input text\">\r\n                        <label for=\"js_field_key_file\">Keepass key file (optional)</label>\r\n                        <input class=\"jfilestyle\" name=\"passbolt.model.Resource.uri\" id=\"js_field_key_file\" type=\"file\" data-text=\"Choose a file\" data-placeholder=\"No key file selected\">\r\n                        <div id=\"js_field_key_file_feedback\" class=\"message\"></div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"submit-wrapper clearfix\">\r\n                    <input class=\"button primary\" value=\"")
    ; __line = 34
    ; __append(escapeFn( this.ctaLabel ))
    ; __append("\" type=\"submit\">\r\n                    <a role=\"link\" class=\"js-dialog-cancel cancel\">cancel</a>\r\n                </div>\r\n            </form>\r\n        </div>\r\n    </div>\r\n</div>")
    ; __line = 40
  }
  return __output;
} catch (e) {
  rethrow(e, __lines, __filename, __line, escapeFn);
}

//# sourceURL=src/all/data/ejs/import/kdbxCredentials.ejs

}