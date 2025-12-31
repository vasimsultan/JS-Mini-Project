let boxes=document.querySelectorAll(".box");
let resetbtn= document.querySelector("#reset-btn");
let newGamebtn= document.querySelector("#new-btn");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

 let trun0 = true;

 let count = 0;

const winpatterns =[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

    const resetGame = () => {
        trun0 = true;
        count = 0;
        enableboxes();
        msgcontainer.classList.add("hide");


    }

boxes.forEach((box) =>{
    box.addEventListener("click",()=> {
        // console.log("box clicked");
        if(trun0){
            box.innerText = "O"
            trun0= false;
        }else{
            box.innerText= "X"
            trun0 = true;
        }
        box.disabled=true;
        count++;

         winner = checkwinner();

        if (count === 9 && !winner) {
            gamedraw();
          }
    })
   
   });

   const gamedraw = () => {
    msg.innerText = `Game was a Draw.`;
    msgcontainer.classList.remove("hide");
    disableboxes();
  };
  

   const disableboxes = () => {
    for(let box of boxes){
        box.disabled =true;
    }}

   const enableboxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText= "";
    } }

    const showwinner = (winner) => {
        msg.innerText= `Congratulations , Winner is ${winner}`;
        msgcontainer.classList.remove("hide");
        disableboxes();
    }

   const checkwinner = () => {
    for(let pattern of winpatterns){
    let pos1val = boxes[pattern[0]].innerText;
    let pos2val = boxes[pattern[1]].innerText;
    let pos3val = boxes[pattern[2]].innerText;

if(pos1val != "" && pos2val != "" && pos2val != "" ){
   if(pos1val === pos2val && pos2val === pos3val)
    {
        // console.log("winner", pos1val);
        showwinner(pos1val);
        return  true;
    }}

    }};

    newGamebtn.addEventListener("click",resetGame);
    resetbtn.addEventListener("click", resetGame);