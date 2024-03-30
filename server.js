const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');
const path = require('path');
require('dotenv').config();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '/build')));

const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
    host: process.env.REACT_APP_SMTP_NAME,
    port: process.env.REACT_APP_SMTP_PORT,
    secure: true,
    auth: {
        user: process.env.REACT_APP_NAVER_ID,
        pass: process.env.REACT_APP_NAVER_PW
    }
});

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '/build/index.html'));
});

app.post('/api/test', function (req, res) {
    var node_val = req.body;
    console.log(node_val);
    res.send({"test": "test"});
});

app.post('/api/sendMail', function (req, res) {
    var mailOptions = {
        from: 'eminimiz@naver.com',
        to: 'eminimiz@naver.com',
        subject: '[홈페이지]제작 문의가 들어왔습니다.',
        html: 
            `<div>
                <table border=1>
                    <tr>
                        <th style='width:100px;height:50px;background:aliceblue;'>성함</th>
                        <td style='width:200px;'>${req.body.name}</td>
                    </tr>
                    <tr>
                        <th style='width:100px;height:50px;background:aliceblue;'>이메일 주소</th>
                        <td style='width:200px;'>${req.body.email}</td>
                    </tr>
                    <tr>
                        <th style='width:100px;height:50px;background:aliceblue;'>문의 제목</th>
                        <td style='width:200px;'>${req.body.title}</td>
                    </tr>
                    <tr>
                        <th style='width:100px;height:200px;background:aliceblue;overflow:auto;'>문의 내용</th>
                        <td style='width:200px;'>${req.body.content}</td>
                    </tr>
                </table>
            </div>`
    }
    res.json(true);
    // transporter.sendMail(mailOptions, function (error, info) {
    //     if (error) {
    //         res.send(false);
    //         // res.send("<script>alert('접수에 실패하였습니다.\n아래의 메일로 연락주시면 빠른시일 내에 연락드리겠습니다.\n감사합니다.')</script>");
    //     } else {
    //         res.send(true);
    //         // res.send("<script>alert('접수가 완료되었습니다.\n빠른 시일 내에 연락드리겠습니다.\n감사합니다.')</script>");
    //     }
    // });
});

app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, '/build/index.html'));
});
app.listen(5000);