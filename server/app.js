const  express = require('express');
const  bodyParser = require('body-parser');
const mysql      = require('mysql');
const  app = express();

//CORS：允许跨域
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Credentials", true);
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});


const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'test'
});
connection.connect();

//启用中间件，接受post过来的数据
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.post('/login', (req, res) => {
    //第一步：接受post过来的数据
    let $username = req.body.username;
    let $passwd = req.body.passwd;

    let sql = 'SELECT * FROM users WHERE username = ?';
    connection.query(sql, $username, (err, result)=>{
        console.log(result);
        // 空数组 ：  作为布尔值，是true
        if(result.length == 0){
            res.json({r:'username_not_exist'}); //账号不存在
        }else if($passwd != result[0].passwd){
            res.json({r:'passwd_err'}); //密码错误
        }else{
            res.json({r:'success'});
        }
    });
});


app.get('/getkw', (req, res) => {
    //接收get过来的值
    let kw = req.query.kw;
    let sql = `SELECT * FROM pc WHERE kw LIKE "%${kw}%" LIMIT 50`;
    connection.query(sql, (err, results)=>{
        res.json(results);
    });
});


app.get('/getbooks', (req, res) => {
    //接收get过来的值
    let page = req.query.page;
    let sql = `SELECT * FROM book WHERE 1 LIMIT 50`;
    connection.query(sql, (err, results)=>{
        res.json(results);
    });
});

app.get('/getmovie', (req, res) => {
    //接收get过来的值
    // let page = req.query.page;
    // let sql = `SELECT * FROM book WHERE 1 LIMIT 50`;
    // connection.query(sql, (err, results)=>{
    //     res.json(results);
    // });
     res.json([
        {
          id: 1,
          img:
            "http://image11.m1905.cn/uploadfile/2018/1116/thumb_1_220_318_20181116094502849166.jpg",
          mtitle: "茜茜公主（译制版）",
          score: 9.0,
          sum: "公主邂逅国王相恋"
        },
        {
          id: 2,
          img:
            "http://image11.m1905.cn/uploadfile/2018/1116/thumb_1_220_318_20181116092518306841.jpg",
          mtitle: "巴黎圣母院）",
          score: 8.0,
          sum: "巴黎圣母院"
        },
        {
          id: 3,
          img:
            "http://image11.m1905.cn/uploadfile/2018/1117/thumb_1_150_226_20181117023311491330.jpg",
          mtitle: "巴黎圣母院）",
          score: 8.0,
          sum: "巴黎圣母院"
        },
        {
          id: 4,
          img:
            "http://image11.m1905.cn/uploadfile/2018/1116/thumb_1_220_318_20181116092518306841.jpg",
          mtitle: "巴黎圣母院）",
          score: 8.0,
          sum: "巴黎圣母院"
        },
        {
          id: 5,
          img:
            "http://image11.m1905.cn/uploadfile/2018/1116/thumb_1_220_318_20181116092518306841.jpg",
          mtitle: "巴黎圣母院）",
          score: 8.0,
          sum: "巴黎圣母院"
        }
      ]);
});


app.listen(81);