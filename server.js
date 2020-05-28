const {VM} = require('vm2');
const vm = new VM();

const express = require("express");
const app     = express();
app.use(express.json());
app.use(express.static('public'));

// app.post('/check',(req,res)=>{

//     const originCode = req.body.code;

//     if(originCode.includes('ilovecoding')){
//         res.status(401).send({
//             'code':401,
//             'message':'Oop, You cannot cheat this!',
//             'data':null
//         });
//     }

//     const plusFunc   = originCode + `\n reverseString('gnidocevoli');`;

//     const data = vm.run(plusFunc);
    
//     if(data !== 'ilovecoding'){
//         res.status(401).send({
//             'code':401,
//             'message':'Oop, incorrect function!',
//              data
//         });
//     }

//     res.status(200).send({
//         'code':200,
//         'message':'Harray! you passed it!!',
//          data
//     });
// })


// listen for requests :)
const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
});
