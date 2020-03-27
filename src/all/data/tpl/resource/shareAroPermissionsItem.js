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
  , __lines = "<?\r\nlet avatarPath = '';\r\nlet aroName = '';\r\nlet aroDetails = '';\r\n\r\nif (aroPermissions.aro.profile) {\r\n    if (aroPermissions.aro.profile.avatar.url.small.startsWith('https://')) {\r\n        avatarPath = `${aroPermissions.aro.profile.avatar.url.small}`;\r\n    } else {\r\n        avatarPath = `${domain}/${aroPermissions.aro.profile.avatar.url.small}`;\r\n    }\r\n    aroName = `${aroPermissions.aro.profile.first_name} ${aroPermissions.aro.profile.last_name}`;\r\n    aroDetails = aroPermissions.aro.username;\r\n} else {\r\n    avatarPath = `${domain}/img/avatar/group_default.png`;\r\n    aroName = aroPermissions.aro.name;\r\n    aroDetails = 'Group';\r\n}\r\n?>\r\n<li id=\"<?= aroPermissions.aro.id ?>\" class=\"row\">\r\n    <div class=\"avatar\">\r\n        <img src=\"<?= avatarPath ?>\"/>\r\n    </div>\r\n\r\n    <div class=\"group\">\r\n        <span class=\"name\"><?= aroName ?></span>\r\n        <span class=\"details\"><a><?= aroDetails ?></a></span>\r\n    </div>\r\n\r\n    <div class=\"select rights\">\r\n        <select class=\"permission <?= !canEdit ? 'disabled' : '' ?>\" <?= !canEdit ? 'disabled=\"disabled\"' : '' ?>>\r\n            <option value=\"1\" <?= aroPermissions.type == 1 ? 'selected=\"selected\"' : ''?>>can read</option>\r\n            <option value=\"7\" <?= aroPermissions.type == 7 ? 'selected=\"selected\"' : ''?>>can update</option>\r\n            <option value=\"15\" <?= aroPermissions.type == 15 ? 'selected=\"selected\"' : ''?>>is owner</option>\r\n            <? if (aroPermissions.type == -1) { ?>\r\n            <option value=\"-1\" selected=\"selected\">varies</option>\r\n            <? } ?>\r\n        </select>\r\n<? if (aroPermissions.type == -1) { ?>\r\n        <div href=\"#\" class=\"more_details tooltip-alt\">\r\n            <i class=\"fa fa-info-circle\"></i>\r\n            <div class=\"tooltip-text right\">\r\n                <? if(aroPermissions.variesDetails[0].length) { ?>\r\n                <b>no access</b>: <?= aroPermissions.variesDetails[0].join(', ') ?><br/>\r\n                <? } ?>\r\n                <? if(aroPermissions.variesDetails[1].length) { ?>\r\n                <b>can read</b>: <?= aroPermissions.variesDetails[1].join(', ') ?><br/>\r\n                <? } ?>\r\n                <? if(aroPermissions.variesDetails[7].length) { ?>\r\n                <b>can update</b>: <?= aroPermissions.variesDetails[7].join(', ') ?><br/>\r\n                <? } ?>\r\n                <? if(aroPermissions.variesDetails[15].length) { ?>\r\n                <b>is owner</b>: <?= aroPermissions.variesDetails[15].join(', ') ?><br/>\r\n                <? } ?>\r\n            </div>\r\n        </div>\r\n<? } ?>\r\n    </div>\r\n\r\n    <div id=\"js_actions_rs_perm_<?= aroPermissions.aro.id ?>\" class=\"actions\">\r\n        <a class=\"js-share-delete-button close <?= !canEdit ? 'disabled' : '' ?>\" title=\"remove\">\r\n            <i class=\"fa fa-times-circle\"></i>\r\n            <span class=\"visuallyhidden\">remove</span>\r\n        </a>\r\n    </div>\r\n</li>\r\n"
  , __filename = "src/all/data/ejs/resource/shareAroPermissionsItem.ejs";
try {
  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
  with (locals || {}) {
    ; 
let avatarPath = '';
let aroName = '';
let aroDetails = '';

if (aroPermissions.aro.profile) {
    if (aroPermissions.aro.profile.avatar.url.small.startsWith('https://')) {
        avatarPath = `${aroPermissions.aro.profile.avatar.url.small}`;
    } else {
        avatarPath = `${domain}/${aroPermissions.aro.profile.avatar.url.small}`;
    }
    aroName = `${aroPermissions.aro.profile.first_name} ${aroPermissions.aro.profile.last_name}`;
    aroDetails = aroPermissions.aro.username;
} else {
    avatarPath = `${domain}/img/avatar/group_default.png`;
    aroName = aroPermissions.aro.name;
    aroDetails = 'Group';
}

    ; __line = 19
    ; __append("\r\n<li id=\"")
    ; __line = 20
    ; __append(escapeFn( aroPermissions.aro.id ))
    ; __append("\" class=\"row\">\r\n    <div class=\"avatar\">\r\n        <img src=\"")
    ; __line = 22
    ; __append(escapeFn( avatarPath ))
    ; __append("\"/>\r\n    </div>\r\n\r\n    <div class=\"group\">\r\n        <span class=\"name\">")
    ; __line = 26
    ; __append(escapeFn( aroName ))
    ; __append("</span>\r\n        <span class=\"details\"><a>")
    ; __line = 27
    ; __append(escapeFn( aroDetails ))
    ; __append("</a></span>\r\n    </div>\r\n\r\n    <div class=\"select rights\">\r\n        <select class=\"permission ")
    ; __line = 31
    ; __append(escapeFn( !canEdit ? 'disabled' : '' ))
    ; __append("\" ")
    ; __append(escapeFn( !canEdit ? 'disabled="disabled"' : '' ))
    ; __append(">\r\n            <option value=\"1\" ")
    ; __line = 32
    ; __append(escapeFn( aroPermissions.type == 1 ? 'selected="selected"' : ''))
    ; __append(">can read</option>\r\n            <option value=\"7\" ")
    ; __line = 33
    ; __append(escapeFn( aroPermissions.type == 7 ? 'selected="selected"' : ''))
    ; __append(">can update</option>\r\n            <option value=\"15\" ")
    ; __line = 34
    ; __append(escapeFn( aroPermissions.type == 15 ? 'selected="selected"' : ''))
    ; __append(">is owner</option>\r\n            ")
    ; __line = 35
    ;  if (aroPermissions.type == -1) { 
    ; __append("\r\n            <option value=\"-1\" selected=\"selected\">varies</option>\r\n            ")
    ; __line = 37
    ;  } 
    ; __append("\r\n        </select>\r\n")
    ; __line = 39
    ;  if (aroPermissions.type == -1) { 
    ; __append("\r\n        <div href=\"#\" class=\"more_details tooltip-alt\">\r\n            <i class=\"fa fa-info-circle\"></i>\r\n            <div class=\"tooltip-text right\">\r\n                ")
    ; __line = 43
    ;  if(aroPermissions.variesDetails[0].length) { 
    ; __append("\r\n                <b>no access</b>: ")
    ; __line = 44
    ; __append(escapeFn( aroPermissions.variesDetails[0].join(', ') ))
    ; __append("<br/>\r\n                ")
    ; __line = 45
    ;  } 
    ; __append("\r\n                ")
    ; __line = 46
    ;  if(aroPermissions.variesDetails[1].length) { 
    ; __append("\r\n                <b>can read</b>: ")
    ; __line = 47
    ; __append(escapeFn( aroPermissions.variesDetails[1].join(', ') ))
    ; __append("<br/>\r\n                ")
    ; __line = 48
    ;  } 
    ; __append("\r\n                ")
    ; __line = 49
    ;  if(aroPermissions.variesDetails[7].length) { 
    ; __append("\r\n                <b>can update</b>: ")
    ; __line = 50
    ; __append(escapeFn( aroPermissions.variesDetails[7].join(', ') ))
    ; __append("<br/>\r\n                ")
    ; __line = 51
    ;  } 
    ; __append("\r\n                ")
    ; __line = 52
    ;  if(aroPermissions.variesDetails[15].length) { 
    ; __append("\r\n                <b>is owner</b>: ")
    ; __line = 53
    ; __append(escapeFn( aroPermissions.variesDetails[15].join(', ') ))
    ; __append("<br/>\r\n                ")
    ; __line = 54
    ;  } 
    ; __append("\r\n            </div>\r\n        </div>\r\n")
    ; __line = 57
    ;  } 
    ; __append("\r\n    </div>\r\n\r\n    <div id=\"js_actions_rs_perm_")
    ; __line = 60
    ; __append(escapeFn( aroPermissions.aro.id ))
    ; __append("\" class=\"actions\">\r\n        <a class=\"js-share-delete-button close ")
    ; __line = 61
    ; __append(escapeFn( !canEdit ? 'disabled' : '' ))
    ; __append("\" title=\"remove\">\r\n            <i class=\"fa fa-times-circle\"></i>\r\n            <span class=\"visuallyhidden\">remove</span>\r\n        </a>\r\n    </div>\r\n</li>\r\n")
    ; __line = 67
  }
  return __output;
} catch (e) {
  rethrow(e, __lines, __filename, __line, escapeFn);
}

//# sourceURL=src/all/data/ejs/resource/shareAroPermissionsItem.ejs

}