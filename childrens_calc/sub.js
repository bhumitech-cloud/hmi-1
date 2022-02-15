// const a_label = document.getElementById("A");
// const b_label = document.getElementById("B");
const btn1 = document.getElementById("submit-btn1");
const btn2 = document.getElementById("submit-btn2");
const ans = document.getElementById("ans");

const checkBtn1 = document.querySelector(".btn-check1");
const checkBtn2 = document.querySelector(".btn-check2");

const img1 = document.getElementById("hand-sign1");
const img2 = document.getElementById("hand-sign2")


A = Math.floor(Math.random() * 5)+1
B = Math.floor(Math.random() * 5)+1

console.log(A, B, A+B)
if(A < B) {
    tmp = B
    B = A
    A = tmp
}

C = A-B
D = C+B
E = Math.floor(Math.random() * 2)



// a_label.innerHTML = A
img1.src = A + ".jpg"

// b_label.innerHTML = B
img2.src = B + ".jpg"

btn_list = [btn1, btn2]

if(E==0) {
    btn1.innerHTML = C
    btn2.innerHTML = D
} else {
    btn1.innerHTML = D
    btn2.innerHTML = C
}

checkBtn1.addEventListener('click', ()=>{
    if(checkBtn1.innerHTML == C) {
        ans.innerHTML="Correct"
        ans.style.color='green'
        setTimeout(() => {console.log("waiting...");location.reload()}, 3000);
    } else {
        ans.innerHTML="Oops! Try again..."
        ans.style.color='red'
    }
    ans.style.fontSize = "80px"
});

checkBtn2.addEventListener('click', ()=>{
    if(checkBtn2.innerHTML == C) {
        ans.innerHTML="Correct"
        ans.style.color='green'
        setTimeout(() => {console.log("waiting...");location.reload()}, 3000);
    } else {
        ans.innerHTML="Oops! Try again..."
        ans.style.color='Red'
    }
    ans.style.fontSize = "80px"
});