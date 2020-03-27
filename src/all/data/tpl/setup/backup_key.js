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
  , __lines = "<div class=\"col7\">\r\n    <div class=\"plugin-check-wrapper\">\r\n        <h3>Let's make a backup</h3>\r\n        <p>All good! The secret key is stored in your add-on and ready to use.</p>\r\n        <div class=\"success message backup-prompt\">\r\n            <a id=\"js_backup_key_download\" class=\"button primary next big\">\r\n                <i class=\"fa fa-fw fa-download\"></i>\r\n                <span>download</span>\r\n            </a>\r\n            <span class=\"help-text\">Take some time to make a backup of your key (and store it in a safe location).</span>\r\n        </div>\r\n        <p>\r\n            You should always make a backup. If you lose this key (by breaking or losing your computer\r\n            and not having a backup for example), your encrypted data will be lost even if you remember\r\n            your passphrase.\r\n        </p>\r\n    </div>\r\n</div>\r\n<div class=\"col4 last\">\r\n    <h3>Pro tips</h3>\r\n    <p>\r\n        The secret key is itself encrypted, so it is only usable if one knows the passphrase.<br><br>\r\n        It is a good practice to store a backup in a different location.\r\n        You can, for example, print it and mail it to a family member (along with a nice postcard!) and ask them to keep it somewhere safe.\r\n        <br><br>\r\n        Or, even better, you can store it in a safe if you have one!\r\n    </p>\r\n</div>"
  , __filename = "src/all/data/ejs/setup/backup_key.ejs";
try {
  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
  with (locals || {}) {
    ; __append("<div class=\"col7\">\r\n    <div class=\"plugin-check-wrapper\">\r\n        <h3>Let's make a backup</h3>\r\n        <p>All good! The secret key is stored in your add-on and ready to use.</p>\r\n        <div class=\"success message backup-prompt\">\r\n            <a id=\"js_backup_key_download\" class=\"button primary next big\">\r\n                <i class=\"fa fa-fw fa-download\"></i>\r\n                <span>download</span>\r\n            </a>\r\n            <span class=\"help-text\">Take some time to make a backup of your key (and store it in a safe location).</span>\r\n        </div>\r\n        <p>\r\n            You should always make a backup. If you lose this key (by breaking or losing your computer\r\n            and not having a backup for example), your encrypted data will be lost even if you remember\r\n            your passphrase.\r\n        </p>\r\n    </div>\r\n</div>\r\n<div class=\"col4 last\">\r\n    <h3>Pro tips</h3>\r\n    <p>\r\n        The secret key is itself encrypted, so it is only usable if one knows the passphrase.<br><br>\r\n        It is a good practice to store a backup in a different location.\r\n        You can, for example, print it and mail it to a family member (along with a nice postcard!) and ask them to keep it somewhere safe.\r\n        <br><br>\r\n        Or, even better, you can store it in a safe if you have one!\r\n    </p>\r\n</div>")
    ; __line = 28
  }
  return __output;
} catch (e) {
  rethrow(e, __lines, __filename, __line, escapeFn);
}

//# sourceURL=src/all/data/ejs/setup/backup_key.ejs

}