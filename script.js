let input=document.querySelector('.input-text')
let btn=document.querySelectorAll('.btn')

btn.forEach((butt)=>{
    butt.addEventListener('click',(e)=>{
        let val=e.target.innerHTML;
        
        
        if(e.target.innerHTML == "="){
         let ans=eval(input.value)
         input.value = "= "+ans;
        }
        
        else if(e.target.innerHTML == "AC"){
            input.value ="";
        }
        else{
            input.value+=val;
        }
        
        
        

    })
   
})