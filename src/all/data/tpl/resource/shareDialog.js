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
  , __lines = "<div class=\"dialog-wrapper\">\r\n    <div class=\"dialog share-password-dialog\">\r\n        <div class=\"dialog-header\">\r\n<? if (resourcesCount > 1) { ?>\r\n            <h2><span>Share <?= resourcesCount ?> passwords </span></h2>\r\n<? } else { ?>\r\n            <h2>Share<span class=\"dialog-header-subtitle\"></span></h2>\r\n<? } ?>\r\n            <a class=\"dialog-close js-dialog-close\">\r\n                <i class=\"fa fa-close\"></i>\r\n                <span class=\"visuallyhidden\">close</span>\r\n            </a>\r\n        </div>\r\n        <div class=\"js-dialog-content dialog-content\">\r\n\r\n<? if (resourcesCount == 1) { ?>\r\n            <ul class=\"tabs-nav menu\">\r\n                <li id=\"js-share-go-to-edit\">\r\n                    <div class=\"row\">\r\n                        <div class=\"main-cell-wrapper\">\r\n                            <div class=\"main-cell\">\r\n                                <a><span>Edit</span></a>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </li>\r\n                <li id=\"js-share-go-to-share\" class=\"\">\r\n                    <div class=\"row\">\r\n                        <div class=\"main-cell-wrapper\">\r\n                            <div class=\"main-cell\">\r\n                                <a class=\"selected\"><span>Share</span></a>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </li>\r\n            </ul>\r\n\r\n            <div class=\"tab\">\r\n                <div class=\"tab-content\" style=\"display:block\">\r\n<? } ?>\r\n\r\n                    <div class=\"processing-wrapper\">\r\n                        <span class=\"processing-text\">Retrieving permissions</span>\r\n                    </div>\r\n\r\n                    <div id=\"js-share-edit-list\" class=\"form-content permission-edit\">\r\n                        <ul class=\"permissions scroll\"></ul>\r\n                    </div>\r\n\r\n                    <div id=\"js-share-feedbacks\" class=\"feedbacks message hidden\"></div>\r\n\r\n                    <div id=\"js-share-form-content-add\" class=\"form-content permission-add hidden\">\r\n                        <div class=\"input text autocomplete\">\r\n                            <label for=\"js-search-aros-input\">Share with people or groups</label>\r\n                            <input maxlength=\"255\" id=\"js-search-aros-input\" placeholder=\"enter one name or email\" autocomplete=\"off\" type=\"text\">\r\n                            <div class=\"security-token\"></div>\r\n                        </div>\r\n                        <div id=\"js-search-aro-autocomplete\" class=\"autocomplete-wrapper hidden\">\r\n                            <div class=\"autocomplete-content scroll\"></div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"submit-wrapper clearfix\">\r\n                        <input id=\"js-share-save\" type=\"submit\" class=\"button disabled primary\" value=\"save\" disabled=\"disabled\"/>\r\n                        <a id=\"js-share-cancel\" class=\"cancel\">cancel</a>\r\n                    </div>\r\n                </div>\r\n\r\n<? if (resourcesCount == 1) { ?>\r\n            </div>\r\n        </div>\r\n<? } ?>\r\n\r\n    </div>\r\n</div>\r\n"
  , __filename = "src/all/data/ejs/resource/shareDialog.ejs";
try {
  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
  with (locals || {}) {
    ; __append("<div class=\"dialog-wrapper\">\r\n    <div class=\"dialog share-password-dialog\">\r\n        <div class=\"dialog-header\">\r\n")
    ; __line = 4
    ;  if (resourcesCount > 1) { 
    ; __append("\r\n            <h2><span>Share ")
    ; __line = 5
    ; __append(escapeFn( resourcesCount ))
    ; __append(" passwords </span></h2>\r\n")
    ; __line = 6
    ;  } else { 
    ; __append("\r\n            <h2>Share<span class=\"dialog-header-subtitle\"></span></h2>\r\n")
    ; __line = 8
    ;  } 
    ; __append("\r\n            <a class=\"dialog-close js-dialog-close\">\r\n                <i class=\"fa fa-close\"></i>\r\n                <span class=\"visuallyhidden\">close</span>\r\n            </a>\r\n        </div>\r\n        <div class=\"js-dialog-content dialog-content\">\r\n\r\n")
    ; __line = 16
    ;  if (resourcesCount == 1) { 
    ; __append("\r\n            <ul class=\"tabs-nav menu\">\r\n                <li id=\"js-share-go-to-edit\">\r\n                    <div class=\"row\">\r\n                        <div class=\"main-cell-wrapper\">\r\n                            <div class=\"main-cell\">\r\n                                <a><span>Edit</span></a>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </li>\r\n                <li id=\"js-share-go-to-share\" class=\"\">\r\n                    <div class=\"row\">\r\n                        <div class=\"main-cell-wrapper\">\r\n                            <div class=\"main-cell\">\r\n                                <a class=\"selected\"><span>Share</span></a>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </li>\r\n            </ul>\r\n\r\n            <div class=\"tab\">\r\n                <div class=\"tab-content\" style=\"display:block\">\r\n")
    ; __line = 40
    ;  } 
    ; __append("\r\n\r\n                    <div class=\"processing-wrapper\">\r\n                        <span class=\"processing-text\">Retrieving permissions</span>\r\n                    </div>\r\n\r\n                    <div id=\"js-share-edit-list\" class=\"form-content permission-edit\">\r\n                        <ul class=\"permissions scroll\"></ul>\r\n                    </div>\r\n\r\n                    <div id=\"js-share-feedbacks\" class=\"feedbacks message hidden\"></div>\r\n\r\n                    <div id=\"js-share-form-content-add\" class=\"form-content permission-add hidden\">\r\n                        <div class=\"input text autocomplete\">\r\n                            <label for=\"js-search-aros-input\">Share with people or groups</label>\r\n                            <input maxlength=\"255\" id=\"js-search-aros-input\" placeholder=\"enter one name or email\" autocomplete=\"off\" type=\"text\">\r\n                            <div class=\"security-token\"></div>\r\n                        </div>\r\n                        <div id=\"js-search-aro-autocomplete\" class=\"autocomplete-wrapper hidden\">\r\n                            <div class=\"autocomplete-content scroll\"></div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"submit-wrapper clearfix\">\r\n                        <input id=\"js-share-save\" type=\"submit\" class=\"button disabled primary\" value=\"save\" disabled=\"disabled\"/>\r\n                        <a id=\"js-share-cancel\" class=\"cancel\">cancel</a>\r\n                    </div>\r\n                </div>\r\n\r\n")
    ; __line = 69
    ;  if (resourcesCount == 1) { 
    ; __append("\r\n            </div>\r\n        </div>\r\n")
    ; __line = 72
    ;  } 
    ; __append("\r\n\r\n    </div>\r\n</div>\r\n")
    ; __line = 76
  }
  return __output;
} catch (e) {
  rethrow(e, __lines, __filename, __line, escapeFn);
}

//# sourceURL=src/all/data/ejs/resource/shareDialog.ejs

}