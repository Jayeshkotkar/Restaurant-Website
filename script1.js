const minus = document.querySelectorAll(".minus");
const num = document.querySelectorAll(".num");
const plus = document.querySelectorAll(".plus");
const para = document.querySelectorAll("div>p");
const parent = document.querySelector(".parent");
const order = document.querySelector(".order");
const price = document.querySelectorAll(".Price span")

let cont;


for(let i=0;i<plus.length;i++)
{
    let pls_btn = plus[i];

    pls_btn.setAttribute("id","click");
    
    pls_btn.addEventListener("click",() => {
       
        num[i].innerText++;
       
   

        if(pls_btn.id == "click")
        {
            pls_btn.id = "clicked";
            
        cont = para[i].innerText;

        
        
        
        let tr = document.createElement("tr");
        

            
        td1 = document.createElement("td");
        td2 = document.createElement("td");
        td3 = document.createElement("td");
        
        
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        
        parent.appendChild(tr);

        td1.innerText = cont;
        
        
        
        
    }
    td2.innerText = num[i].innerText;
    td3.innerText = price[i].innerText * num[i].innerText;
    
        console.dir(pls_btn.id);
        
    });
}





for(let i=0;i<minus.length;i++)
{
    let mns_btn = minus[i];
    
    mns_btn.addEventListener("click",() => {

        
        if(num[i].innerText > 0)
        {
            console.log("minus clicked");
            num[i].innerText--;
        }

    });
}