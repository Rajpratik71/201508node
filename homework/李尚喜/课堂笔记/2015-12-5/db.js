/**
 * Created by Administrator on 15-12-5.
 */
var mongoose = require("mongoose");
var db = mongoose.connect("mongodb://127.0.0.1:27017/person");
db.connection.on("error", function (error) {
    console.log("数据库连接失败：" + error);
});
db.connection.on("open", function () {
    console.log("数据库连接成功");
});