const {VM} = require('vm2');
const vm = new VM();

const express = require("express");
const app     = express();
app.use(express.json());
app.use(express.static('public'));

const _message = (code,message,data) =>{
    return {code,message,data};
}

app.post('/check',(req,res)=>{

    const originCode = req.body.code;

    if(originCode.includes('ilovecoding')){
        res.status(401).send(_message(401,`Opps! you can't cheat this`,data));
    }

    const plusFunc   = originCode + `\n reverseString('gnidocevoli');`;

    const data = vm.run(plusFunc);
    
    if(data !== 'ilovecoding'){
        res.status(401).send(_message(401,`Opps! it's incorrect.`,data));
    }

    res.status(200).send(_message(200,`Harray! it's correct!.`,data));
})


// listen for requests :)
const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
});
