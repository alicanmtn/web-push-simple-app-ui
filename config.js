//var path = require("path");

//let app_base = path.dirname(require.main.filename);

let config = {};

config.server = {};
config.server.ip = "127.0.0.1";
config.server.port = 3000;

config.filesplitter = "//##setting";

config.path = {};
config.path.sdkpath = "\\sdk\\relatedpush_sdk.js";
config.path.configfile =
    "\\settingsheader\\pushSettingsTemplate.txt";

config.path.output = {};
config.path.output.template_base64 =
    "\\dist\\template\\base64relatedpush_sdk.txt";
config.path.output.template =
    "\\dist\\template\\relatedpush_sdk.txt";

module.exports = { config };
