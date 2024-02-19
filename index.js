document.addEventListener("DOMContentLoaded", async()=>{
    let bars = document.querySelectorAll(".bar");
    let barStyles = [];
    for(let i =0; i<bars.length;i++){
        barStyles[i] = bars[i].style
    }
    console.log(bars)
    fetch("./data.json")
   .then((res)=>{
        if(!res.ok){
            throw new Error("No file found")
        }else{
            return res.json()
        }
    }
   )
    .then((data)=>{
        let total = 0;
      
        for(let i=0; i<data.length;i++){
            total += data[i].amount
          
            
        }
        console.log(total)
        for(let i =0; i<bars.length;i++){
            let parentElement = bars[i].parentElement
            
            let hover = Array.from(parentElement.children)[0]
            console.log(hover)
            
            bars[i].style = `height:${(data[i].amount/total)*42}rem;
            width: 100%;
            border-radius: 0.2rem;` + `${i==new Date().getDay()-1?"background-color:hsl(186, 34%, 60%);":"background-color:hsl(10, 79%, 65%);"} `;
         
        }
        console.log(data)

        // bar hover state

    })

    
})
    

   
function handleHover(e){
    let parentElement = e.target.parentElement
    let hover = Array.from(parentElement.children)[0]
    hover.innerHTML = data[i].amount
}
