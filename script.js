const buttons = document.querySelectorAll(".btn");
const screen = document.querySelector(".screen");
const equal = document.querySelector(".btn-equal");
const clear = document.querySelector(".btn-clear");
const deleteBtn = document.querySelector(".btn-delete");

buttons.forEach((button)=>{
    button.addEventListener("click", (e)=>{
        const value = e.target.dataset.num;
        screen.value += value; 
        return;
    });
});

equal.addEventListener("click", ()=>{
    if(screen.value == ""){
        screen.value = "Please enter  value";
    }else{
        // let answer = eval(2/2);
        let answers  = eval("screen.value");
        screen.value = answers;
    };
    // console.log(eval("2+2"));
});

deleteBtn.forEach(btn=>{
    btn.addEventListener("click", (e)=>{
        if(btn.id == "delete"){
            let string = screen.innerText.toString();
            screen.innerText = string.substr(0, string.length - 1);
        }
    })
});

clear.addEventListener("click", ()=>{
    screen.value = answer;
});
