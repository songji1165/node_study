process.on("tick", function (count) {
  console.log("tick발생:%s", count);
});
setTimeout(function () {
  console.log("2s after tick try");
  process.emit("tick", "2"); //이벤트 전달
}, 2000);

console.log("argb 속성의 파라미터:" + process.argv.length);
console.log("argb 속성의 파라미터:" + process.argv);

var nconf = require("nconf");
nconf.env();
console.log("환경변수값 : %s", nconf.get("os"));

var os = require("os");
console.log("hostname:&s", os.hostname());

var path = require("path");
var direc = ["users", "mike", "docs"];
