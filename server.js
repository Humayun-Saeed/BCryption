
var mongoose=require('mongoose')
var express=require('express')
var bcrypt=require('bcrypt')
const res = require('express/lib/response')
var app=express()
app.use(express.json())
var encrypted;
app.post('/home',async(req,res)=>{

const password=req.body.password
const cycle=5

const hash_password=async(password,cycle)=>{
    const encrypted=await bcrypt.hash(password,cycle).then((value) => {
      return value
    })
    .catch((err) => {
    console.log(err);    
    })
    return encrypted
}
 encrypted=await hash_password(password,cycle)
console.log(encrypted);
//
})
app.post('/signin',(req,res)=>{
var password=req.body.password
console.log(password);
console.log(encrypted);
bcrypt.compare(password,encrypted).then(result=>{

if(result){
    console.log("succress");
}
else{
    console.log("err is preasent: ");
}

})

})
app.listen(3000,()=>{
console.log("server is running at the port: ");
})
