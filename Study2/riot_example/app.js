//���W���[����ǂݍ���
var http = require('http');
var express    = require('express');
var app        = express();
var mysql = require('mysql');

//mysqlConnection.js�ō쐬����connection���Ăяo��
var connection = require('./mysqlConnection');

//�T�[�o�[�쐬
var server = http.createServer(function(req, res) {
  res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
  res.write('Hello Ryu1!');
  res.end();
});

//�N�G���쐬
app.get('/', function (req, res) {
  console.log("db�̓��e�����o��");
  //�N�G����
  connection.query('select name from testTable where id = 0', function (error, results, fields) {
    if (error) throw error; //error�̏ꍇ
    res.send(results);//��ʂ�response�Ƃ��ĕ\��
    console.log("results: " + results[0].name); //json�Ŏ󂯎�����ꍇ�̒l�̎擾���@
  });
});

//�T�[�o�[�N���Blisten()���\�b�h�����s����3000�ԃ|�[�g�ő҂��󂯂���B
app.listen(3000, function () {
  console.log('listening on port 3000');
});
