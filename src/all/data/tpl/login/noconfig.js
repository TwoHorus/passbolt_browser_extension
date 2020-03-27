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
  , __lines = "<div class=\"col6 push1 information\">\r\n    <h2>Almost there, please register!</h2>\r\n    <div class=\"plugin-check-wrapper\">\r\n        <div class=\"plugin-check <?= browserName ?> warning\">\r\n            <p class=\"message\">\r\n                The plugin is installed but not configured.\r\n                <? if(publicRegistration) { ?>\r\n                    <a href=\"<?= passboltDomain ?>/register\">Please register</a>,\r\n                <? } else { ?>\r\n                    Please contact your domain administrator to request an invitation,\r\n\t\t\t\t<? } ?>\r\n                or <a href=\"<?= passboltDomain ?>/recover\">recover your account if you already have one!</a>\r\n            </p>\r\n        </div>\r\n    </div>\r\n    <p>\r\n        If you already registered please check your mail inbox (and your spam folder).\r\n    </p>\r\n</div>\r\n<div class=\"col4 push1 last\">\r\n\t<div class=\"logo\">\r\n\t\t<h1><span>Passbolt</span></h1>\r\n\t</div>\r\n    <div class=\"users login form\">\r\n        <div class=\"feedback\">\r\n            <i class=\"fa huge fa-rocket\" ></i>\r\n            <p>You need an account to login.</p>\r\n        </div>\r\n        <div class=\"actions-wrapper center\">\r\n\t\t\t<? if(publicRegistration) { ?>\r\n                <a class=\"button primary\" href=\"<?= passboltDomain ?>/register\">Register</a>\r\n                <a href=\"<?= passboltDomain ?>/recover\">Have an account?</a>\r\n\t\t\t<? } else { ?>\r\n                Please contact your domain administrator to request an invitation.<br><br>\r\n                or <a href=\"<?= passboltDomain ?>/recover\">recover your existing account</a>\r\n\t\t\t<? } ?>\r\n        </div>\r\n    </div>\r\n</div>\r\n"
  , __filename = "src/all/data/ejs/login/noconfig.ejs";
try {
  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
  with (locals || {}) {
    ; __append("<div class=\"col6 push1 information\">\r\n    <h2>Almost there, please register!</h2>\r\n    <div class=\"plugin-check-wrapper\">\r\n        <div class=\"plugin-check ")
    ; __line = 4
    ; __append(escapeFn( browserName ))
    ; __append(" warning\">\r\n            <p class=\"message\">\r\n                The plugin is installed but not configured.\r\n                ")
    ; __line = 7
    ;  if(publicRegistration) { 
    ; __append("\r\n                    <a href=\"")
    ; __line = 8
    ; __append(escapeFn( passboltDomain ))
    ; __append("/register\">Please register</a>,\r\n                ")
    ; __line = 9
    ;  } else { 
    ; __append("\r\n                    Please contact your domain administrator to request an invitation,\r\n				")
    ; __line = 11
    ;  } 
    ; __append("\r\n                or <a href=\"")
    ; __line = 12
    ; __append(escapeFn( passboltDomain ))
    ; __append("/recover\">recover your account if you already have one!</a>\r\n            </p>\r\n        </div>\r\n    </div>\r\n    <p>\r\n        If you already registered please check your mail inbox (and your spam folder).\r\n    </p>\r\n</div>\r\n<div class=\"col4 push1 last\">\r\n	<div class=\"logo\">\r\n		<h1><span>Passbolt</span></h1>\r\n	</div>\r\n    <div class=\"users login form\">\r\n        <div class=\"feedback\">\r\n            <i class=\"fa huge fa-rocket\" ></i>\r\n            <p>You need an account to login.</p>\r\n        </div>\r\n        <div class=\"actions-wrapper center\">\r\n			")
    ; __line = 30
    ;  if(publicRegistration) { 
    ; __append("\r\n                <a class=\"button primary\" href=\"")
    ; __line = 31
    ; __append(escapeFn( passboltDomain ))
    ; __append("/register\">Register</a>\r\n                <a href=\"")
    ; __line = 32
    ; __append(escapeFn( passboltDomain ))
    ; __append("/recover\">Have an account?</a>\r\n			")
    ; __line = 33
    ;  } else { 
    ; __append("\r\n                Please contact your domain administrator to request an invitation.<br><br>\r\n                or <a href=\"")
    ; __line = 35
    ; __append(escapeFn( passboltDomain ))
    ; __append("/recover\">recover your existing account</a>\r\n			")
    ; __line = 36
    ;  } 
    ; __append("\r\n        </div>\r\n    </div>\r\n</div>\r\n")
    ; __line = 40
  }
  return __output;
} catch (e) {
  rethrow(e, __lines, __filename, __line, escapeFn);
}

//# sourceURL=src/all/data/ejs/login/noconfig.ejs

}