
/**
 * 미션 2
 * 
 * Echo 기능을 수행하는 소켓 서버
 
 * 외장모듈 : net

 소켓을 사용해 IP 주소와 포트만을 가지고 간편히 서로 다른 시스템이 통신을 할 수 있다. 또한 동일한 서버에서 실행중인 프로세스 간의 IPC에도 유용하게 사용할 수 있다. net 모듈을 사용해 소켓 서버와 같이 동작하는 Server 객체를 생성할 수 있고, 소켓 클라이언트와 같이 동작하는 Socket 객체도 생성 가능하다. Socket 객체는 Duplex 스트림을 확장했기 때문에 서버와 클라이언트 둘 다 읽기/쓰기가 가능하다. 
 */
var net = require("net");

// 소켓 서버 생성
var server = net.createServer(function (socket) {
  // 연결된 클라이언트 정보 확인
  socket.name = socket.remoteAddress + ":" + socket.remotePort;
  console.log("클라이언트 연결됨 -> " + socket.name);

  // 클라이언트로부터 메시지를 받았을 때 발생하는 이벤트
  socket.on("data", function (data) {
    console.log("클라이언트로부터 받은 데이터 : " + data);

    // 받은 메시지를 돌려줌
    socket.write(data + " from server.");
  });

  // 클라이언트 연결이 끊어진 경우
  socket.on("end", function () {
    console.log("클라이언트로부터 연결 끊어짐 -> " + socket.name);
  });
});

// 소켓 서버 실행
var port = 13000;
server.listen(port);
