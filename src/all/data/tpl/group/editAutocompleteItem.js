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
  , __lines = "<?\r\n    let avatarPath;\r\n    if (user.Profile.Avatar.url.small.startsWith('https://')) {\r\n        avatarPath = user.Profile.Avatar.url.small;\r\n    } else {\r\n        avatarPath = settings['user.settings.trustedDomain'] + '/' + user.Profile.Avatar.url.small;\r\n    }\r\n?>\r\n<li id=\"<?= user.User.id ?>\">\r\n    <div class=\"row\">\r\n        <div class=\"main-cell-wrapper\">\r\n            <div class=\"main-cell\">\r\n                <a>\r\n                    <div class=\"avatar\">\r\n                        <img src=\"<?= avatarPath ?>\"/>\r\n                    </div>\r\n                    <div class=\"user\">\r\n                        <span class=\"name\"><?= user.Profile.first_name ?> <?= user.Profile.last_name ?> (<?= user.Gpgkey.key_id ?>)</span>\r\n                        <span class=\"details\" title=\"<?= user.User.username ?>\"><?= user.User.username ?></span>\r\n                    </div>\r\n                </a>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</li>\r\n"
  , __filename = "src/all/data/ejs/group/editAutocompleteItem.ejs";
try {
  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
  with (locals || {}) {
    ; 
    let avatarPath;
    if (user.Profile.Avatar.url.small.startsWith('https://')) {
        avatarPath = user.Profile.Avatar.url.small;
    } else {
        avatarPath = settings['user.settings.trustedDomain'] + '/' + user.Profile.Avatar.url.small;
    }

    ; __line = 8
    ; __append("\r\n<li id=\"")
    ; __line = 9
    ; __append(escapeFn( user.User.id ))
    ; __append("\">\r\n    <div class=\"row\">\r\n        <div class=\"main-cell-wrapper\">\r\n            <div class=\"main-cell\">\r\n                <a>\r\n                    <div class=\"avatar\">\r\n                        <img src=\"")
    ; __line = 15
    ; __append(escapeFn( avatarPath ))
    ; __append("\"/>\r\n                    </div>\r\n                    <div class=\"user\">\r\n                        <span class=\"name\">")
    ; __line = 18
    ; __append(escapeFn( user.Profile.first_name ))
    ; __append(" ")
    ; __append(escapeFn( user.Profile.last_name ))
    ; __append(" (")
    ; __append(escapeFn( user.Gpgkey.key_id ))
    ; __append(")</span>\r\n                        <span class=\"details\" title=\"")
    ; __line = 19
    ; __append(escapeFn( user.User.username ))
    ; __append("\">")
    ; __append(escapeFn( user.User.username ))
    ; __append("</span>\r\n                    </div>\r\n                </a>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</li>\r\n")
    ; __line = 26
  }
  return __output;
} catch (e) {
  rethrow(e, __lines, __filename, __line, escapeFn);
}

//# sourceURL=src/all/data/ejs/group/editAutocompleteItem.ejs

}