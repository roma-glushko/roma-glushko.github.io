"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _path = _interopRequireDefault(require("path"));

var _sitemap = _interopRequireDefault(require("sitemap"));

var _internals = require("./internals");

var publicPath = "./public";

exports.onPostBuild = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(_ref, pluginOptions) {
    var graphql, pathPrefix, _ref$basePath, basePath, options, _defaultOptions$optio, query, serialize, output, exclude, hostname, resolveSiteUrl, rest, saved, excludeOptions, queryRecords, filteredRecords, urls, map, siteUrl;

    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            graphql = _ref.graphql, pathPrefix = _ref.pathPrefix, _ref$basePath = _ref.basePath, basePath = _ref$basePath === void 0 ? pathPrefix : _ref$basePath;
            options = (0, _extends2.default)({}, pluginOptions);
            delete options.plugins;
            delete options.createLinkInHead;
            _defaultOptions$optio = (0, _extends2.default)({}, _internals.defaultOptions, {}, options), query = _defaultOptions$optio.query, serialize = _defaultOptions$optio.serialize, output = _defaultOptions$optio.output, exclude = _defaultOptions$optio.exclude, hostname = _defaultOptions$optio.hostname, resolveSiteUrl = _defaultOptions$optio.resolveSiteUrl, rest = (0, _objectWithoutPropertiesLoose2.default)(_defaultOptions$optio, ["query", "serialize", "output", "exclude", "hostname", "resolveSiteUrl"]);
            saved = _path.default.join(publicPath, output); // Paths we're excluding...

            excludeOptions = exclude.concat(_internals.defaultOptions.exclude);
            _context.next = 9;
            return graphql(query);

          case 9:
            queryRecords = _context.sent;
            filteredRecords = (0, _internals.filterQuery)(queryRecords, excludeOptions, basePath, resolveSiteUrl);
            urls = serialize(filteredRecords);

            if (!(!rest.sitemapSize || urls.length <= rest.sitemapSize)) {
              _context.next = 16;
              break;
            }

            map = _sitemap.default.createSitemap(rest);
            urls.forEach(function (u) {
              return map.add(u);
            });
            return _context.abrupt("return", (0, _internals.writeFile)(saved, map.toString()));

          case 16:
            siteUrl = filteredRecords.site.siteMetadata.siteUrl;
            return _context.abrupt("return", new Promise(function (resolve) {
              // sitemap-index.xml is default file name. (https://git.io/fhNgG)
              var indexFilePath = _path.default.join(publicPath, (rest.sitemapName || "sitemap") + "-index.xml");

              var sitemapIndexOptions = (0, _extends2.default)({}, rest, {
                hostname: (hostname || (0, _internals.withoutTrailingSlash)(siteUrl)) + (0, _internals.withoutTrailingSlash)(pathPrefix || ""),
                targetFolder: publicPath,
                urls: urls,
                callback: function callback(error) {
                  if (error) throw new Error(error);
                  (0, _internals.renameFile)(indexFilePath, saved).then(resolve);
                }
              });

              _sitemap.default.createSitemapIndex(sitemapIndexOptions);
            }));

          case 18:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x, _x2) {
    return _ref2.apply(this, arguments);
  };
}();