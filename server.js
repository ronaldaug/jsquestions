const {VM} = require('vm2');
const vm = new VM();

const express = require("express");
const app     = express();
app.use(express.json());
app.use(express.static('public'));

const _message = (code,message,data) =>{
    return {code,message,data};
}

// Q 1
app.post('/reverse',(req,res)=>{

    const originCode = req.body.code;

    if(originCode.includes('ilovecoding')){
        res.status(401).send(_message(401,`Opps! you can't cheat this`,{ans:'',next:''}));
    }

    const plusFunc   = originCode + `\n reverseString('gnidocevoli');`;

    const ans = vm.run(plusFunc);
    
    if (ans !== 'ilovecoding'){
        res.status(401).send(_message(401,`Opps! it's incorrect.`,{ans,next:''}));
    }

    res.status(200).send(_message(200,`Harray! it's correct!.`,{ans,next:'qwrfr6uit4.html'}));
})

// Q 2
app.post('/wrap',(req,res)=>{

    const originCode = req.body.code;

    if(originCode.includes('ilovecoding') || originCode.includes('****')){
        res.status(400).send(_message(400,`Opps! you can't cheat this`,{ans:'',next:''}));
    }

    const plusFunc   = originCode + `\n wrapWithStars('ilovecoding');`;    

    const ans = vm.run(plusFunc);

    const correctAns = `*************<br>*ilovecoding*<br>*************`;
  
  console.log(ans.trim() , correctAns.trim());
    
    if(ans.trim() !== correctAns.trim() ){
        res.status(400).send(_message(400,`Opps! it's incorrect.`,{ans,next:''}));
    }

    res.status(200).send(_message(200,`Harray! it's correct!.`,{ans,next:'uy4dsaem73.html'}));
})


// Q 3
app.post('/getwords',(req,res)=>{

    const originCode = req.body.code;

    if(originCode.includes('programming') || originCode.includes('the')){
        res.status(400).send(_message(400,`Opps! you can't cheat this`,{ans:'',next:''}));
    }

    const plusFunc   = originCode + `\n getWords('[programming] is [the] greatest work');`;    

    const ans = vm.run(plusFunc);

    const correctAns = ['programming','the'];
  
    console.log(ans,correctAns);
  
    if(ans !== correctAns ){
        res.status(400).send(_message(400,`Opps! it's incorrect.`,{ans,next:''}));
    }

    res.status(200).send(_message(200,`Harray! it's correct!.`,{ans,next:'next.html'}));
})

// listen for requests :)
const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
});
