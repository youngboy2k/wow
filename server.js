const express = require('express');
const app = express();
const port = process.env.PORT || 8000;
// const router = express.Router();

// express서버 실행시 다음 코드가 실행 됨.
app.listen(port, () => {
  console.log(`server is listening at localhost:${process.env.PORT}`);
});

// public 폴더에있는 모든 파일을 연결해준다.
app.use(express.static('public'));


// 최상위도메인 접속시
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/main.html')
  // res.json({
  //     success: true,
  // });
});

// 최상위도메인/main 접속시.
app.get('/main', (req, res) => {
  res.sendFile(__dirname + '/public/main.html')
});