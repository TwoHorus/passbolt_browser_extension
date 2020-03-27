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
  , __lines = "<div class=\"col7\">\r\n    <div class=\"plugin-check-wrapper\">\r\n        <h3>Plugin check</h3>\r\n        <div class=\"plugin-check <?= browserName ?> success\">\r\n            <p class=\"message\">Nice one! The plugin is installed and up to date. You are good to go!</p>\r\n        </div>\r\n    </div>\r\n    <div class=\"why-plugin-wrapper\">\r\n        <h3>Url Check</h3>\r\n        <p>\r\n            You are about to register the plugin to work with the following domain.\r\n            Please confirm that this is a domain managed by an organisation you trust:\r\n        </p>\r\n        <div class=\"feedback\">\r\n            <p class=\"message error hidden\" id=\"js_main_error_feedback\"></p>\r\n        </div>\r\n        <form>\r\n            <div class=\"input text domain disabled\">\r\n                <label for=\"js_setup_domain\">Domain</label>\r\n                <input type=\"text\" value=\"<?= domain ?>\" id=\"js_setup_domain\" disabled=\"disabled\" />\r\n            </div>\r\n            <div class=\"input text key-fingerprint disabled\">\r\n                <label for=\"js_setup_key_fingerprint\">Server Key</label>\r\n                <input name=\"key_fingerprint\" id=\"js_setup_key_fingerprint\" value=\"\" placeholder=\"Retrieving server key. Please wait...\" type=\"text\" value=\"\" disabled=\"disabled\"/>\r\n                <a class=\"more\" id=\"js_server_key_info\">More</a>\r\n                <div class=\"message error\"></div>\r\n            </div>\r\n            <div class=\"input checkbox\">\r\n                <input type=\"checkbox\" id=\"js_setup_domain_check\" value=\"legit\"/>\r\n                <label for=\"js_setup_domain_check\">I've checked, this domain name and the server key look legitimate.</label>\r\n            </div>\r\n        </form>\r\n    </div>\r\n</div>\r\n<div class=\"col5 last\">\r\n    <!--<div class=\"video-wrapper\">-->\r\n        <!--<iframe width=\"400\" height=\"300\" src=\"https://www.youtube.com/embed/u-vDLf7cmf0\" frameborder=\"0\" allowfullscreen></iframe>-->\r\n    <!--</div>-->\r\n</div>\r\n\r\n"
  , __filename = "src/all/data/ejs/setup/domain_check.ejs";
try {
  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
  with (locals || {}) {
    ; __append("<div class=\"col7\">\r\n    <div class=\"plugin-check-wrapper\">\r\n        <h3>Plugin check</h3>\r\n        <div class=\"plugin-check ")
    ; __line = 4
    ; __append(escapeFn( browserName ))
    ; __append(" success\">\r\n            <p class=\"message\">Nice one! The plugin is installed and up to date. You are good to go!</p>\r\n        </div>\r\n    </div>\r\n    <div class=\"why-plugin-wrapper\">\r\n        <h3>Url Check</h3>\r\n        <p>\r\n            You are about to register the plugin to work with the following domain.\r\n            Please confirm that this is a domain managed by an organisation you trust:\r\n        </p>\r\n        <div class=\"feedback\">\r\n            <p class=\"message error hidden\" id=\"js_main_error_feedback\"></p>\r\n        </div>\r\n        <form>\r\n            <div class=\"input text domain disabled\">\r\n                <label for=\"js_setup_domain\">Domain</label>\r\n                <input type=\"text\" value=\"")
    ; __line = 20
    ; __append(escapeFn( domain ))
    ; __append("\" id=\"js_setup_domain\" disabled=\"disabled\" />\r\n            </div>\r\n            <div class=\"input text key-fingerprint disabled\">\r\n                <label for=\"js_setup_key_fingerprint\">Server Key</label>\r\n                <input name=\"key_fingerprint\" id=\"js_setup_key_fingerprint\" value=\"\" placeholder=\"Retrieving server key. Please wait...\" type=\"text\" value=\"\" disabled=\"disabled\"/>\r\n                <a class=\"more\" id=\"js_server_key_info\">More</a>\r\n                <div class=\"message error\"></div>\r\n            </div>\r\n            <div class=\"input checkbox\">\r\n                <input type=\"checkbox\" id=\"js_setup_domain_check\" value=\"legit\"/>\r\n                <label for=\"js_setup_domain_check\">I've checked, this domain name and the server key look legitimate.</label>\r\n            </div>\r\n        </form>\r\n    </div>\r\n</div>\r\n<div class=\"col5 last\">\r\n    <!--<div class=\"video-wrapper\">-->\r\n        <!--<iframe width=\"400\" height=\"300\" src=\"https://www.youtube.com/embed/u-vDLf7cmf0\" frameborder=\"0\" allowfullscreen></iframe>-->\r\n    <!--</div>-->\r\n</div>\r\n\r\n")
    ; __line = 41
  }
  return __output;
} catch (e) {
  rethrow(e, __lines, __filename, __line, escapeFn);
}

//# sourceURL=src/all/data/ejs/setup/domain_check.ejs

}