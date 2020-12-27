const oracledb = require('oracledb');

credentials = {
    user: "",
    password: "",
    connectString: ""
}

try {
    oracledb.initOracleClient({libDir: '/opt/oracle/instantclient_21_1'});
} catch (err) { 
    console.error('No se puede conectar al cliente!');
}

async function Open(query, binds, autoCommit) {

    let connection = await oracledb.getConnection(credentials);
    let result = await connection.execute(query, binds, { autoCommit });
    connection.release();
    return result;
}

exports.Open = Open;