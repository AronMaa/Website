const oracledb = require('oracledb');

async function connectToOracle() {
    try {
        const connection = await oracledb.getConnection({
            user: "learningDbUser",
            password: "tp4",
            connectString: "localhost:1521/xepdb1"
        });
        console.log('Connected to Oracle!');

        connection.close();
    } catch (err) {
        console.error('Error connecting to Oracle:', err);
    }
}

connectToOracle();
