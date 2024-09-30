const fs = require("fs");
var { config } = require("./config");

var sdk_path = config.path.sdkpath;
var template = config.path.output.template;
var tempale_base64 = config.path.output.template_base64;
var settings = config.path.configfile;
var splitter = config.filesplitter;

let settingsString = ReadSettings();
let sdkString = ReadSdk();

if (settingsString && sdkString) {
  WriteTemplate(settingsString + sdkString);
  WriteBase64Template(settingsString + sdkString);
}
function ReadSdk() {
  if (!fs.existsSync(sdk_path))
    throw Error("sdk javascript yok" + "_" + sdk_path);

  let content = fs.readFileSync(sdk_path, "utf8");
  let res = content.split(splitter);
  if (res.length != 2) {
    console.log("hata split karakteri yok");
    return undefined;
  }
  return res[1];
}

function ReadSettings() {
  if (!fs.existsSync(settings)) throw Error("setting template yok");
  let content = fs.readFileSync(settings, "utf8");
  if (content !== "" || content != undefined) return content;
  return undefined;
}

function WriteTemplate(str) {
  fs.writeFile(template, str, "utf8", (err, data) => {
    if (err) throw err;
    console.log(`template oluşturuldu. path: ${template}`);
  });
}

function WriteBase64Template(str) {
  const buff = Buffer.from(str);
  var text = buff.toString("base64");
  fs.writeFile(tempale_base64, text, "utf8", (err, data) => {
    if (err) throw err;
    console.log(`base64 template scripti oluşturuldu. path ${tempale_base64}`);
  });
}
