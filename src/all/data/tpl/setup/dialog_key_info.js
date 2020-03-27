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
  , __lines = "<div class=\"dialog-wrapper\">\r\n    <div class=\"dialog medium key-info\" id=\"dialog-server-key-info\">\r\n        <div class=\"dialog-header\">\r\n            <h2>Please verify the server key</h2>\r\n            <a class=\"dialog-close js-dialog-close\">\r\n                <i class=\"fa fa-close\"></i>\r\n                <span class=\"visuallyhidden\">close</span>\r\n            </a>\r\n        </div>\r\n        <div class=\"js_dialog_content dialog-content\">\r\n            <div class=\"form-content\">\r\n                <p>\r\n                    <strong>\r\n                        Check that the details of the GPG key below are valid. Do not hesitate to contact your support person in case of doubt!\r\n                    </strong>\r\n                </p>\r\n                <table>\r\n                    <tbody>\r\n                    <tr class=\"owner-name\">\r\n                        <td class=\"label\">Owner Name</td>\r\n                        <td class=\"value\"><?= userIds[0].name ?></td>\r\n                    </tr>\r\n                    <tr class=\"owner-email\">\r\n                        <td class=\"label\">Owner Email</td>\r\n                        <td class=\"value\"><?= userIds[0].email ?></td>\r\n                    </tr>\r\n                    <tr class=\"keyid\">\r\n                        <td class=\"label\">Key ID</td>\r\n                        <td class=\"value\">\r\n                            <? var kid = keyId.toUpperCase(); ?>\r\n                            <?= kid ?>\r\n                        </td>\r\n                    </tr>\r\n                    <tr class=\"fingerprint\">\r\n                        <td class=\"label\">Fingerprint</td>\r\n                        <td class=\"value\">\r\n                            <? var fgprt = fingerprint.toUpperCase(); ?>\r\n                            <?= fgprt ?>\r\n                        </td>\r\n                    </tr>\r\n                    <tr class=\"created\">\r\n                        <td class=\"label\">Created</td>\r\n                        <td class=\"value\">\r\n                            <?= created ?>\r\n                        </td>\r\n                    </tr>\r\n                    <tr class=\"expires\">\r\n                        <td class=\"label\">Expires</td>\r\n                        <td class=\"value\">\r\n                            <?= expires ?>\r\n                        </td>\r\n                    </tr>\r\n                    <tr class=\"length\">\r\n                        <td class=\"label\">Length</td>\r\n                        <td class=\"value\"><?= length ?></td>\r\n                    </tr>\r\n                    <tr class=\"algorithm\">\r\n                        <td class=\"label\">Algorithm</td>\r\n                        <td class=\"value\">\r\n                            <? var algo = algorithm.toUpperCase(); ?>\r\n                            <?= algo ?>\r\n                        </td>\r\n                    </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n\r\n            <div class=\"submit-wrapper clearfix\">\r\n                <input type=\"submit\" value=\"OK\" class=\"button primary\" id=\"key-info-ok\">\r\n                <!-- <a class=\"button\" id=\"js_keyinfo_help\">Help!</a> -->\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"
  , __filename = "src/all/data/ejs/setup/dialog_key_info.ejs";
try {
  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
  with (locals || {}) {
    ; __append("<div class=\"dialog-wrapper\">\r\n    <div class=\"dialog medium key-info\" id=\"dialog-server-key-info\">\r\n        <div class=\"dialog-header\">\r\n            <h2>Please verify the server key</h2>\r\n            <a class=\"dialog-close js-dialog-close\">\r\n                <i class=\"fa fa-close\"></i>\r\n                <span class=\"visuallyhidden\">close</span>\r\n            </a>\r\n        </div>\r\n        <div class=\"js_dialog_content dialog-content\">\r\n            <div class=\"form-content\">\r\n                <p>\r\n                    <strong>\r\n                        Check that the details of the GPG key below are valid. Do not hesitate to contact your support person in case of doubt!\r\n                    </strong>\r\n                </p>\r\n                <table>\r\n                    <tbody>\r\n                    <tr class=\"owner-name\">\r\n                        <td class=\"label\">Owner Name</td>\r\n                        <td class=\"value\">")
    ; __line = 21
    ; __append(escapeFn( userIds[0].name ))
    ; __append("</td>\r\n                    </tr>\r\n                    <tr class=\"owner-email\">\r\n                        <td class=\"label\">Owner Email</td>\r\n                        <td class=\"value\">")
    ; __line = 25
    ; __append(escapeFn( userIds[0].email ))
    ; __append("</td>\r\n                    </tr>\r\n                    <tr class=\"keyid\">\r\n                        <td class=\"label\">Key ID</td>\r\n                        <td class=\"value\">\r\n                            ")
    ; __line = 30
    ;  var kid = keyId.toUpperCase(); 
    ; __append("\r\n                            ")
    ; __line = 31
    ; __append(escapeFn( kid ))
    ; __append("\r\n                        </td>\r\n                    </tr>\r\n                    <tr class=\"fingerprint\">\r\n                        <td class=\"label\">Fingerprint</td>\r\n                        <td class=\"value\">\r\n                            ")
    ; __line = 37
    ;  var fgprt = fingerprint.toUpperCase(); 
    ; __append("\r\n                            ")
    ; __line = 38
    ; __append(escapeFn( fgprt ))
    ; __append("\r\n                        </td>\r\n                    </tr>\r\n                    <tr class=\"created\">\r\n                        <td class=\"label\">Created</td>\r\n                        <td class=\"value\">\r\n                            ")
    ; __line = 44
    ; __append(escapeFn( created ))
    ; __append("\r\n                        </td>\r\n                    </tr>\r\n                    <tr class=\"expires\">\r\n                        <td class=\"label\">Expires</td>\r\n                        <td class=\"value\">\r\n                            ")
    ; __line = 50
    ; __append(escapeFn( expires ))
    ; __append("\r\n                        </td>\r\n                    </tr>\r\n                    <tr class=\"length\">\r\n                        <td class=\"label\">Length</td>\r\n                        <td class=\"value\">")
    ; __line = 55
    ; __append(escapeFn( length ))
    ; __append("</td>\r\n                    </tr>\r\n                    <tr class=\"algorithm\">\r\n                        <td class=\"label\">Algorithm</td>\r\n                        <td class=\"value\">\r\n                            ")
    ; __line = 60
    ;  var algo = algorithm.toUpperCase(); 
    ; __append("\r\n                            ")
    ; __line = 61
    ; __append(escapeFn( algo ))
    ; __append("\r\n                        </td>\r\n                    </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n\r\n            <div class=\"submit-wrapper clearfix\">\r\n                <input type=\"submit\" value=\"OK\" class=\"button primary\" id=\"key-info-ok\">\r\n                <!-- <a class=\"button\" id=\"js_keyinfo_help\">Help!</a> -->\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>")
    ; __line = 74
  }
  return __output;
} catch (e) {
  rethrow(e, __lines, __filename, __line, escapeFn);
}

//# sourceURL=src/all/data/ejs/setup/dialog_key_info.ejs

}