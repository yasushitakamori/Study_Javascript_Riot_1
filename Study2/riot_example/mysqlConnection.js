//mysql���W���[�����Ăяo���܂�
var mysql = require('mysql');

//DB�̒�`
var dbConfig = {
  host     : 'localhost', //�ڑ���z�X�g
  user     : 'root',      //���[�U�[��
  password : 'miracle1105',          //�p�X���[�h
  database : 'test'       //DB��
};

var connection;

function handleDisconnect() {
    console.log('create mysql connection');
    connection = mysql.createConnection(dbConfig); //�ڑ����鏀��

    //�ڑ�
    connection.connect(function(err) {
        if(err) {
            console.log('error when connecting to db:', err);
            setTimeout(handleDisconnect, 2000); //2�b�҂��Ă��珈��
        }
    });

    //error���̏���
    connection.on('error', function(err) {
        console.log('db error', err);
        if(err.code === 'PROTOCOL_CONNECTION_LOST') {
            handleDisconnect();
        } else {
            throw err;
        }
    });

    module.exports = connection; //connection��(���̃t�@�C������)require�ŌĂяo����悤�ɂ���
}

handleDisconnect();
