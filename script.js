let table_body = document.querySelector("tbody");
let input_text = document.querySelector("input")
let button = document.querySelector("button");
let last = document.querySelector(".end");

function display(arr = ""){
   let filtered = emojiList.filter((elements) => {
    if(elements.description.indexOf(arr) !== -1){
        return true;
    }

    
    if(elements.aliases.some((ele) => ele.startsWith(arr))){
        return true;
    }

    if(elements.tags.some((ele)=> ele.startsWith(arr))){
        return true;
    }



   });

    filtered.forEach((element) =>{
       
        let table_row = document.createElement("tr");
        let data_1 = document.createElement("td");
        let data_2 = document.createElement("td");
        let data_3 = document.createElement("td");
        table_body.appendChild(table_row).appendChild(data_1);
        table_row.appendChild(data_2);
        table_row.appendChild(data_3);
        table_row.classList.add("table_row");
        data_1.classList.add("data1");
        data_2.classList.add("data2");
        data_3.classList.add("data3");
        data_1.innerText = element.emoji;
        data_2.innerText = element.aliases;
        data_3.innerText = element.description;
    })

    if(table_body.children.length == 0){
        last.style.display = "block";
    }else{
        last.style.display = "none";
    }
   
}

window.onload = () =>{
    display();
}

input_text.addEventListener("keyup" , () => {
    while(table_body.children.length !== 0){
        table_body.lastChild.remove();
    }
    let val = input_text.value;
    display(val);
    
});


button.addEventListener("click" , () => {
    while(table_body.children.length !== 0){
        table_body.lastChild.remove();
    }
    let val = input_text.value;
    input_text.value = null;
    display(val);
  
});