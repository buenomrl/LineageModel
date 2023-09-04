const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '123321',
  database: 'l2jdb'
});

connection.connect(function(err) {
  if (err) {
    console.error('Erro na conexão:', err);
    return;
  }
  console.log('Conexão com sucesso!');
  
  // Após a conexão, você pode executar a consulta aqui
  connection.query('SELECT account_name FROM characters', function(err, rows, fields) {
    if (!err) {
      console.log('Resultados:', rows);
    } else {
      console.error('Erro na consulta:', err);
    }

    // Após concluir a consulta, é aconselhável fechar a conexão
    connection.end();
  });
});
