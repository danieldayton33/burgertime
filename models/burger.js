const orm = require("../config/orm");

const burger = {
    all: (cb)=>{
        orm.selectAll("burgers",function(res){
            cb(res);
        });
    },
    one: (value, cb)=>{
        orm.insertOne("burgers","burger_name", value, function(res){
            cb(res);
        });
    },
    update: (colValue, cb)=>{
        orm.updateOne("burgers", "devoured", 1, "id", colValue, function(res){
            cb(res);
        });
    }
};

module.exports = burger;