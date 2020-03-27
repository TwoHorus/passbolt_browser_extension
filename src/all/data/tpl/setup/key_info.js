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
  , __lines = "<!-- left column -->\r\n<div class=\"col7\">\r\n    <h3>Information for public and secret key</h3>\r\n    <table class=\"table-info\">\r\n        <tr class=\"owner_name\">\r\n            <td>Owner Name</td>\r\n            <td  class=\"<?= typeof fieldsDetails['name'] != 'undefined' ? fieldsDetails['name'].status : '' ?>\">\r\n                <?= keyInfo.userIds[0].name ?>\r\n                <?= typeof fieldsDetails['name'] != 'undefined' ? ' (' + fieldsDetails['name'].original + ')' : '' ?>\r\n            </td>\r\n        </tr>\r\n        <tr class=\"owner_email\">\r\n            <td>Owner Email</td>\r\n            <td class=\"<?= typeof fieldsDetails['email'] != 'undefined' ? fieldsDetails['email'].status : '' ?>\">\r\n                <?= keyInfo.userIds[0].email ?>\r\n                <?= typeof fieldsDetails['email'] != 'undefined' ? ' (' + fieldsDetails['email'].original + ')' : '' ?>\r\n            </td>\r\n        </tr>\r\n        <tr class=\"keyid\">\r\n            <td>Key Id</td>\r\n            <td><?= keyInfo.keyId.toUpperCase() ?></td>\r\n        </tr>\r\n        <tr class=\"fingerprint\">\r\n            <td>Fingerprint</td>\r\n            <td><?= keyInfo.fingerprint.toUpperCase() ?></td>\r\n        </tr>\r\n        <tr class=\"created\">\r\n            <td>Created</td>\r\n            <td><?= keyInfo.created ?></td>\r\n        </tr>\r\n        <tr class=\"expires\">\r\n            <td>Expires</td>\r\n            <td><?= keyInfo.expires ?></td>\r\n        </tr>\r\n        <tr class=\"length\">\r\n            <td>Key Length</td>\r\n            <td><?= keyInfo.length ?></td>\r\n        </tr>\r\n        <tr class=\"algorithm\">\r\n            <td>Algorithm</td>\r\n            <td><?= keyInfo.algorithm.toUpperCase() ?></td>\r\n        </tr>\r\n    </table>\r\n</div>\r\n\r\n<!-- right column -->\r\n<div class=\"col5 last\">\r\n    <div class=\"message <?= status ?> side-message\">\r\n        <?\r\n        if (status == 'warning') {\r\n          var fieldsStr = '';\r\n          for (var fieldName in fieldsDetails) {\r\n            fieldsStr += ((fieldsStr == '') ? fieldName : ' and ' + fieldName);\r\n          }\r\n        ?>\r\n        <p>\r\n            <strong>Warning:</strong> the <?= fieldsStr ?> selected by your administrator does not match\r\n            the name and email of your key. Passbolt will use the information provided by the administrator to identify yourself.\r\n        </p>\r\n        <p>\r\n            While this is not a deal breaker this may lead to some confusion.\r\n        </p>\r\n        <p class=\"small\">\r\n            Note: Passbolt does not support multiple user identities at the moment.\r\n        </p>\r\n        <?\r\n        } else {\r\n        ?>\r\n          <p>\r\n              <strong>Success!</strong>\r\n              Nice one, it looks like a valid key with your key information matching the name and email provided by your passbolt administrator.\r\n              <br><br>\r\n              You are good to go!\r\n          </p>\r\n        <?\r\n        }\r\n        ?>\r\n    </div>\r\n</div>"
  , __filename = "src/all/data/ejs/setup/key_info.ejs";
try {
  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
  with (locals || {}) {
    ; __append("<!-- left column -->\r\n<div class=\"col7\">\r\n    <h3>Information for public and secret key</h3>\r\n    <table class=\"table-info\">\r\n        <tr class=\"owner_name\">\r\n            <td>Owner Name</td>\r\n            <td  class=\"")
    ; __line = 7
    ; __append(escapeFn( typeof fieldsDetails['name'] != 'undefined' ? fieldsDetails['name'].status : '' ))
    ; __append("\">\r\n                ")
    ; __line = 8
    ; __append(escapeFn( keyInfo.userIds[0].name ))
    ; __append("\r\n                ")
    ; __line = 9
    ; __append(escapeFn( typeof fieldsDetails['name'] != 'undefined' ? ' (' + fieldsDetails['name'].original + ')' : '' ))
    ; __append("\r\n            </td>\r\n        </tr>\r\n        <tr class=\"owner_email\">\r\n            <td>Owner Email</td>\r\n            <td class=\"")
    ; __line = 14
    ; __append(escapeFn( typeof fieldsDetails['email'] != 'undefined' ? fieldsDetails['email'].status : '' ))
    ; __append("\">\r\n                ")
    ; __line = 15
    ; __append(escapeFn( keyInfo.userIds[0].email ))
    ; __append("\r\n                ")
    ; __line = 16
    ; __append(escapeFn( typeof fieldsDetails['email'] != 'undefined' ? ' (' + fieldsDetails['email'].original + ')' : '' ))
    ; __append("\r\n            </td>\r\n        </tr>\r\n        <tr class=\"keyid\">\r\n            <td>Key Id</td>\r\n            <td>")
    ; __line = 21
    ; __append(escapeFn( keyInfo.keyId.toUpperCase() ))
    ; __append("</td>\r\n        </tr>\r\n        <tr class=\"fingerprint\">\r\n            <td>Fingerprint</td>\r\n            <td>")
    ; __line = 25
    ; __append(escapeFn( keyInfo.fingerprint.toUpperCase() ))
    ; __append("</td>\r\n        </tr>\r\n        <tr class=\"created\">\r\n            <td>Created</td>\r\n            <td>")
    ; __line = 29
    ; __append(escapeFn( keyInfo.created ))
    ; __append("</td>\r\n        </tr>\r\n        <tr class=\"expires\">\r\n            <td>Expires</td>\r\n            <td>")
    ; __line = 33
    ; __append(escapeFn( keyInfo.expires ))
    ; __append("</td>\r\n        </tr>\r\n        <tr class=\"length\">\r\n            <td>Key Length</td>\r\n            <td>")
    ; __line = 37
    ; __append(escapeFn( keyInfo.length ))
    ; __append("</td>\r\n        </tr>\r\n        <tr class=\"algorithm\">\r\n            <td>Algorithm</td>\r\n            <td>")
    ; __line = 41
    ; __append(escapeFn( keyInfo.algorithm.toUpperCase() ))
    ; __append("</td>\r\n        </tr>\r\n    </table>\r\n</div>\r\n\r\n<!-- right column -->\r\n<div class=\"col5 last\">\r\n    <div class=\"message ")
    ; __line = 48
    ; __append(escapeFn( status ))
    ; __append(" side-message\">\r\n        ")
    ; __line = 49
    ; 
        if (status == 'warning') {
          var fieldsStr = '';
          for (var fieldName in fieldsDetails) {
            fieldsStr += ((fieldsStr == '') ? fieldName : ' and ' + fieldName);
          }
        
    ; __line = 55
    ; __append("\r\n        <p>\r\n            <strong>Warning:</strong> the ")
    ; __line = 57
    ; __append(escapeFn( fieldsStr ))
    ; __append(" selected by your administrator does not match\r\n            the name and email of your key. Passbolt will use the information provided by the administrator to identify yourself.\r\n        </p>\r\n        <p>\r\n            While this is not a deal breaker this may lead to some confusion.\r\n        </p>\r\n        <p class=\"small\">\r\n            Note: Passbolt does not support multiple user identities at the moment.\r\n        </p>\r\n        ")
    ; __line = 66
    ; 
        } else {
        
    ; __line = 68
    ; __append("\r\n          <p>\r\n              <strong>Success!</strong>\r\n              Nice one, it looks like a valid key with your key information matching the name and email provided by your passbolt administrator.\r\n              <br><br>\r\n              You are good to go!\r\n          </p>\r\n        ")
    ; __line = 75
    ; 
        }
        
    ; __line = 77
    ; __append("\r\n    </div>\r\n</div>")
    ; __line = 79
  }
  return __output;
} catch (e) {
  rethrow(e, __lines, __filename, __line, escapeFn);
}

//# sourceURL=src/all/data/ejs/setup/key_info.ejs

}