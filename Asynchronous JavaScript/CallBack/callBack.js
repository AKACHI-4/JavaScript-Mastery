// CallBacks, CallBack Hell, Pyramid of doom ⚠️

// understand callBack 🔽

// function myFunc1(){
//     console.log("Function is doing Task 1"); 
// }
// myFunc1(()=>{ 
//     console.log("function is doing Task 2"); 
// }); 

// function getTwoNumberAndAdd(number1, number2, onSuccess,onFailure){
//     if(typeof number1 === "number" && typeof number2 === "number") onSuccess(number1,number2);
//     else onFailure();
// }

// function addTwoNumber(number1, number2){
//     console.log("Sum:", number1 + number2); 
// }

// getTwoNumberAndAdd(4,5,addTwoNumber); 
// getTwoNumberAndAdd(4,5,(a,b)=>{ 
//     console.log("sum:",a+b);
// },()=>{ 
//     console.log("wrong data type"); 
// }); 

// CallBack in Asychronous 🔽
const heading1 = document.querySelector(".heading1"); 
const heading2 = document.querySelector(".heading2"); 
const heading3 = document.querySelector(".heading3"); 
const heading4 = document.querySelector(".heading4"); 
const heading5 = document.querySelector(".heading5"); 
const heading6 = document.querySelector(".heading6");
const heading7 = document.querySelector(".heading7");

// CallBack Hell
// Diffcult to maintain this to avoid this we take help from promises
// With the help of promises it gets easy to maintain and tackle 
// setTimeout(()=>{
//     heading1.textContent = "One";
//     heading1.style.color = "violet";
//     setTimeout(()=>{ 
//         heading2.textContent = "Two";
//         heading2.style.color = "Purple";
//         setTimeout(()=>{ 
//             heading3.textContent = "Three";
//             heading3.style.color = "red";
//             setTimeout(()=>{ 
//                 heading4.textContent = "Four";
//                 heading4.style.color = "pink";
//                 setTimeout(()=>{ 
//                     heading5.textContent = "Five";
//                     heading5.style.color = "green";
//                     setTimeout(()=>{ 
//                         heading6.textContent = "Six";
//                         heading6.style.color = "blue";
//                         setTimeout(()=>{ 
//                             heading7.textContent = "seven";
//                             heading7.style.color = "brown";
//                         },1000);
//                     },3000);
//                 },2000);
//             },1000);
//         },2000);
//     },2000);
// },1000); 


function changeTxt(element, text, color, time, onSuccessCallBack, onFailureCallBack){
    setTimeout(()=>{ 
        if(element){
            element.textContent = text; 
            element.style.color = color;
            if(onSuccessCallBack){
                onSuccessCallBack();    
            }
        }else{ 
            if(onFailureCallBack){
                onFailureCallBack(); 
            }    
        }
    },time); 
}

// Pyramid of doom 
changeTxt(heading1,"One","green",2000,()=>{ 
    changeTxt(heading2,"Two","purple",1000,()=>{ 
        changeTxt(heading3,"Three","yellow",2000,()=>{ 
            changeTxt(heading4,"four","pink",3000,()=>{ 
                changeTxt(heading5,"five","cyan",1000,()=>{ 
                    changeTxt(heading6,"Six","blue",2000,()=>{ 
                        changeTxt(heading7,"Seven","red",1000,()=>{ 
                        },()=>{console.log("Element doesn't exist!!");});
                    },()=>{console.log("Element doesn't exist!!");});
                },()=>{console.log("Element doesn't exist!!");});
            },()=>{console.log("Element doesn't exist!!");});
        },()=>{console.log("Element doesn't exist!!");});
    },()=>{console.log("Element doesn't exist!!");});
},()=>{console.log("Element doesn't exist!!");});
