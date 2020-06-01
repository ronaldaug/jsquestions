        let editor = ace.edit("editor");
        editor.setTheme("ace/theme/tomorrow_night_blue");
        editor.session.setMode("ace/mode/javascript");

        const JSCourse = document.querySelector("#jscourse");
      
      
        JSCourse.addEventListener("submit",e=>{
            e.preventDefault();

            const data = {
                'code':editor.getValue()
            }

            fetch(req_url,{
                method:"post",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify(data)
            })
            .then(e=>e.json())
            .then(res=>{

              const Res = document.querySelector(".result");
              let ans = `<p>Your result = ${res.data.ans}</p>`;
              
                // if fail
                if(res.code !== 200){
                    message('failed',res.message);
                    Res.innerHTML = ans;
                    return;
                }
                            
                if(res.data.next){
                    ans += `<a class="btn btn-sm btn-success" href="${res.data.next}">Go to next lesson &rarr;</a>`;
                }
                Res.innerHTML = ans;
                message('success',res.message);

            })
            .catch(err=>{
               console.log(err)
                message('failed','Opps! Something went wrong<br> please make sure your function is correct!');
              
            })
        })
      
      
      function message(status,msg){
          const cls = status == 'success'?'alert-success':'alert-danger';
          document.querySelector(".message").innerHTML = `<p class="alert ${cls}">${msg}</p>`;
        
          setTimeout(()=>{
            document.querySelector(".message").innerHTML = '';
          },3000)
                  
      }