

/**
 * 写一个函数
 * 传入一个对象 person
 * save之前我要让这个人加一岁
 *
 **/

<<<<<<< HEAD
function createPeron(o){
    for(var key in o){
        if(key == 'age') o[key] +=1;
    }

//定义集合的存储数据结构
    var PersonSchema = new mongoose.Schema({
        name : { type:String },
        age  : { type:Number, default:0 },
        time : { type:Date, default:Date.now },
        email: { type:String,default:''}
    },{collection:'person'});

// 创建Model
    var PersonModel = db.model("person", PersonSchema);

    var personEntity = new PersonModel({
        name : "zfpx",
        age  : 18,
        email: "zfpx@qq.com"
    });
    console.log(personEntity.name); // zfpx
    console.log(personEntity.age); // 6
// doc 保存之后的文档
    personEntity.save(function(error,doc){
        if(error){
            console.log("error :" + error);
        }else{
            console.log(doc);
        }
    });
}
=======
function savePerson(person){
    //给这个person加一岁
    //把这个person保存到数据里
}
savePerson({name:'zfpx',age:99});
>>>>>>> 4ae2012862f821c612c2dcf8248a22e16c394b55
