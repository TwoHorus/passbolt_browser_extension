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
  , __lines = "<ul>\r\n<? if (!aros.length) { ?>\r\n    <li>\r\n        <div class=\"row\">\r\n            <div class=\"main-cell-wrapper\">\r\n                <div class=\"main-cell\" style=\"font-size:16px;\">\r\n                    No user or group found\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </li>\r\n<? } ?>\r\n<? for(let i in aros) {\r\n    const aro = aros[i];\r\n    let aroAvatarPath, aroName, aroDetails, cssClass;\r\n    if (aro.profile) {\r\n        if (aro.profile.avatar.url.small.startsWith('https://')) {\r\n            aroAvatarPath = `${aro.profile.avatar.url.small}`;\r\n        } else {\r\n            aroAvatarPath = `${domain}/${aro.profile.avatar.url.small}`;\r\n        }\r\n        aroName = `${aro.profile.first_name} ${aro.profile.last_name} (${aro.gpgkey.key_id})`;\r\n        aroDetails = aro.username;\r\n        cssClass = 'user';\r\n    } else {\r\n        aroAvatarPath = `${domain}/img/avatar/group_default.png`;\r\n        aroName = aro.name;\r\n        aroDetails = `${aro.user_count} Member(s)`;\r\n        cssClass = 'group';\r\n    }\r\n?>\r\n    <li id=\"<?= aro.id ?>\">\r\n        <div class=\"row\">\r\n            <div class=\"main-cell-wrapper\">\r\n                <div class=\"main-cell\">\r\n                    <a>\r\n                        <div class=\"avatar\">\r\n                            <img src=\"<?= aroAvatarPath ?>\"/>\r\n                        </div>\r\n                        <div class=\"<?= cssClass ?>\">\r\n                            <span class=\"name\"><?= aroName ?></span>\r\n                            <span class=\"details\" title=\"<?= aroDetails ?>\"><?= aroDetails ?></span>\r\n                        </div>\r\n                    </a>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </li>\r\n<? } ?>\r\n</ul>\r\n"
  , __filename = "src/all/data/ejs/resource/shareAutocomplete.ejs";
try {
  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
  with (locals || {}) {
    ; __append("<ul>\r\n")
    ; __line = 2
    ;  if (!aros.length) { 
    ; __append("\r\n    <li>\r\n        <div class=\"row\">\r\n            <div class=\"main-cell-wrapper\">\r\n                <div class=\"main-cell\" style=\"font-size:16px;\">\r\n                    No user or group found\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </li>\r\n")
    ; __line = 12
    ;  } 
    ; __append("\r\n")
    ; __line = 13
    ;  for(let i in aros) {
    const aro = aros[i];
    let aroAvatarPath, aroName, aroDetails, cssClass;
    if (aro.profile) {
        if (aro.profile.avatar.url.small.startsWith('https://')) {
            aroAvatarPath = `${aro.profile.avatar.url.small}`;
        } else {
            aroAvatarPath = `${domain}/${aro.profile.avatar.url.small}`;
        }
        aroName = `${aro.profile.first_name} ${aro.profile.last_name} (${aro.gpgkey.key_id})`;
        aroDetails = aro.username;
        cssClass = 'user';
    } else {
        aroAvatarPath = `${domain}/img/avatar/group_default.png`;
        aroName = aro.name;
        aroDetails = `${aro.user_count} Member(s)`;
        cssClass = 'group';
    }

    ; __line = 31
    ; __append("\r\n    <li id=\"")
    ; __line = 32
    ; __append(escapeFn( aro.id ))
    ; __append("\">\r\n        <div class=\"row\">\r\n            <div class=\"main-cell-wrapper\">\r\n                <div class=\"main-cell\">\r\n                    <a>\r\n                        <div class=\"avatar\">\r\n                            <img src=\"")
    ; __line = 38
    ; __append(escapeFn( aroAvatarPath ))
    ; __append("\"/>\r\n                        </div>\r\n                        <div class=\"")
    ; __line = 40
    ; __append(escapeFn( cssClass ))
    ; __append("\">\r\n                            <span class=\"name\">")
    ; __line = 41
    ; __append(escapeFn( aroName ))
    ; __append("</span>\r\n                            <span class=\"details\" title=\"")
    ; __line = 42
    ; __append(escapeFn( aroDetails ))
    ; __append("\">")
    ; __append(escapeFn( aroDetails ))
    ; __append("</span>\r\n                        </div>\r\n                    </a>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </li>\r\n")
    ; __line = 49
    ;  } 
    ; __append("\r\n</ul>\r\n")
    ; __line = 51
  }
  return __output;
} catch (e) {
  rethrow(e, __lines, __filename, __line, escapeFn);
}

//# sourceURL=src/all/data/ejs/resource/shareAutocomplete.ejs

}