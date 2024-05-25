var path = require("path");

var DATA_ROOT = "./storage/";

exports.filePath = function (relPath, decodeURI) {
  if (decodeURI) relPath = decodeURIComponent(relPath);
  if (relPath.indexOf("./storage/") >= 0) {
    var e = new Error("Do Not Contain .. in relPath!");
    e.status = 400;
    throw e;
  } else {
    return path.join(DATA_ROOT, relPath);
  }
};
