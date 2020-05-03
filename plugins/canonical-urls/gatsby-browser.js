
exports.onRouteUpdate = function (_ref, pluginOptions) {
  var location = _ref.location;

  if (pluginOptions === void 0) {
    pluginOptions = {
      stripQueryString: false,
      stripTrailingSlashes: false
    };
  }

  var domElem = document.querySelector("link[rel='canonical']");
  var existingValue = domElem.getAttribute("href");
  var baseProtocol = domElem.getAttribute("data-baseProtocol");
  var baseHost = domElem.getAttribute("data-baseHost");

  if (existingValue && baseProtocol && baseHost) {
    var value = baseProtocol + "//" + baseHost + location.pathname;
    var _pluginOptions = pluginOptions,
        stripQueryString = _pluginOptions.stripQueryString,
        stripTrailingSlashes = _pluginOptions.stripTrailingSlashes;

    if (!stripQueryString) {
      value += location.search;
    }

    value += location.hash;
    
    if (stripTrailingSlashes) {
      value = value.replace(/\/$/, "");
    }

    domElem.setAttribute("href", "" + value);
  }
};