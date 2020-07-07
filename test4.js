var Calc = require("./Calc");

var calc = new Calc();

console.log(Calc.title + "에 stop이벤트 전달");

var fs = require("fs");

var data = fs.readFile("./package.json", "utf-8", function (err, data) {
  console.log("data읽기", data);
});
calc.emit("stop"); //cal객체에 event 전달

fs.writeFileSync("./output.txt", "helloworld");
console.log("output파일 쓰기 완료");

fs.open("./output.txt","w",function(err,fd){
    if( err ) throw err;

    var buf = new Buffer("안녕!\n");
    fs.write(fd, buf, 0, buf.length, null, function(err, written, buffer){
        if(err) throw err;

        console.log(err, written, buffer);

        fs.close(fd, function(){
            console.log("파일 열고 데이터 쓰고, 파일 닫기 완료")
        })
    })
})