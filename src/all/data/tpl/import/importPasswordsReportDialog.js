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
  , __lines = "<?\r\nvar success = true;\r\nif(this.errorsList.length > 0) {\r\n    success = false;\r\n}\r\n?>\r\n<div class=\"dialog-wrapper\">\r\n    <div class=\"dialog report\">\r\n        <div class=\"dialog-header\">\r\n            <? if (success) { ?>\r\n            <h2>Success!</h2>\r\n            <? } else { ?>\r\n            <h2>Something went wrong!</h2>\r\n            <? } ?>\r\n            <a class=\"dialog-close\" role=\"button\">\r\n                <i class=\"fa fa-close\"></i><span class=\"visuallyhidden\">close</span>\r\n            </a>\r\n\r\n        </div>\r\n        <div class=\"js_dialog_content dialog-content\">\r\n\r\n            <form class=\"tab-content ready selected\" id=\"js_rs_import_report\">\r\n                <div class=\"form-content\">\r\n                    <? if (success) { ?>\r\n                    <p><strong><?= this.successList.length ?> passwords have been imported successfully.</strong></p>\r\n                    <? } else { ?>\r\n                    <p class=\"error inline-error\">There was an issue when importing the passwords:</p>\r\n                    <? } ?>\r\n                    <? if (!success) { ?>\r\n                    <p>\r\n                        <strong><?= this.successList.length ?> out of <?= this.resources.length ?></strong> passwords have been imported.\r\n                    </p>\r\n                    <? } ?>\r\n                    <? if(this.tagsIntegration === true) { ?>\r\n                    <p>You can find the newly imported passwords under the tag: '<?= this.importTag ?>'.</p>\r\n                    <? } ?>\r\n                    <? if (!success) { ?>\r\n                    <div class=\"accordion error-details closed\">\r\n                        <div class=\"accordion-header\">\r\n                            <a role=\"link\">Errors details</a>\r\n                        </div>\r\n                        <div class=\"accordion-content hidden\" style=\"display: none;\">\r\n                            <div class=\"input text\">\r\n                                <label for=\"js_field_debug\" class=\"visuallyhidden\">Errors details</label>\r\n                                <textarea id=\"js_field_debug\"><?= JSON.stringify(this.errorsList, null, 4); ?></textarea>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <? } ?>\r\n                </div>\r\n                <div class=\"submit-wrapper clearfix\">\r\n                    <input class=\"button primary\" value=\"Ok\" type=\"submit\">\r\n                </div>\r\n            </form>\r\n        </div>\r\n    </div>\r\n</div>"
  , __filename = "src/all/data/ejs/import/importPasswordsReportDialog.ejs";
try {
  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
  with (locals || {}) {
    ; 
var success = true;
if(this.errorsList.length > 0) {
    success = false;
}

    ; __line = 6
    ; __append("\r\n<div class=\"dialog-wrapper\">\r\n    <div class=\"dialog report\">\r\n        <div class=\"dialog-header\">\r\n            ")
    ; __line = 10
    ;  if (success) { 
    ; __append("\r\n            <h2>Success!</h2>\r\n            ")
    ; __line = 12
    ;  } else { 
    ; __append("\r\n            <h2>Something went wrong!</h2>\r\n            ")
    ; __line = 14
    ;  } 
    ; __append("\r\n            <a class=\"dialog-close\" role=\"button\">\r\n                <i class=\"fa fa-close\"></i><span class=\"visuallyhidden\">close</span>\r\n            </a>\r\n\r\n        </div>\r\n        <div class=\"js_dialog_content dialog-content\">\r\n\r\n            <form class=\"tab-content ready selected\" id=\"js_rs_import_report\">\r\n                <div class=\"form-content\">\r\n                    ")
    ; __line = 24
    ;  if (success) { 
    ; __append("\r\n                    <p><strong>")
    ; __line = 25
    ; __append(escapeFn( this.successList.length ))
    ; __append(" passwords have been imported successfully.</strong></p>\r\n                    ")
    ; __line = 26
    ;  } else { 
    ; __append("\r\n                    <p class=\"error inline-error\">There was an issue when importing the passwords:</p>\r\n                    ")
    ; __line = 28
    ;  } 
    ; __append("\r\n                    ")
    ; __line = 29
    ;  if (!success) { 
    ; __append("\r\n                    <p>\r\n                        <strong>")
    ; __line = 31
    ; __append(escapeFn( this.successList.length ))
    ; __append(" out of ")
    ; __append(escapeFn( this.resources.length ))
    ; __append("</strong> passwords have been imported.\r\n                    </p>\r\n                    ")
    ; __line = 33
    ;  } 
    ; __append("\r\n                    ")
    ; __line = 34
    ;  if(this.tagsIntegration === true) { 
    ; __append("\r\n                    <p>You can find the newly imported passwords under the tag: '")
    ; __line = 35
    ; __append(escapeFn( this.importTag ))
    ; __append("'.</p>\r\n                    ")
    ; __line = 36
    ;  } 
    ; __append("\r\n                    ")
    ; __line = 37
    ;  if (!success) { 
    ; __append("\r\n                    <div class=\"accordion error-details closed\">\r\n                        <div class=\"accordion-header\">\r\n                            <a role=\"link\">Errors details</a>\r\n                        </div>\r\n                        <div class=\"accordion-content hidden\" style=\"display: none;\">\r\n                            <div class=\"input text\">\r\n                                <label for=\"js_field_debug\" class=\"visuallyhidden\">Errors details</label>\r\n                                <textarea id=\"js_field_debug\">")
    ; __line = 45
    ; __append(escapeFn( JSON.stringify(this.errorsList, null, 4) ))
    ; __append("</textarea>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    ")
    ; __line = 49
    ;  } 
    ; __append("\r\n                </div>\r\n                <div class=\"submit-wrapper clearfix\">\r\n                    <input class=\"button primary\" value=\"Ok\" type=\"submit\">\r\n                </div>\r\n            </form>\r\n        </div>\r\n    </div>\r\n</div>")
    ; __line = 57
  }
  return __output;
} catch (e) {
  rethrow(e, __lines, __filename, __line, escapeFn);
}

//# sourceURL=src/all/data/ejs/import/importPasswordsReportDialog.ejs

}