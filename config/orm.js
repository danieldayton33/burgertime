const connection = require("./connection");

const orm = {
    selectAll: (tableName,cb)=>{
    connection.query(`select * from ${tableName}`, (err,data)=>{
            if(err) throw err;
            cb(data);
        });
    },
    insertOne: (tableName, col, value, cb)=>{
        const queryString = `insert into ${tableName} 
        (${col}) values("${value}")`;
        console.log("QUERYSTRING",queryString);
        connection.query(queryString,(err,data)=>{
            if(err) throw err;
            cb(data);
        });
    },
    updateOne: (tableName, objColVals, value, colName, colValue, cb)=>{
        const queryString = `update ${tableName} 
        set ${objColVals}=${value}
        where ${colName} = ${colValue}`;
        console.log(queryString);
        connection.query(queryString,(err,data)=>{
            if(err) throw err;
            cb(data);
        });

    }
}
module.exports = orm;