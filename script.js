document.querySelector(".btn").addEventListener("click", function() {
    document.querySelector(".title").innerHTML = "제목 아니다";
})

//함수
function sum (num1, num2) {
   return num1 + num2;
}

console.log(sum(2,3));

console.log("----------");


//조건문
function isEvenOrOdd(num){
    if(num%2 === 0){
        console.log("짝수입니다")
    }

    if(num%2 === 1){
        console.log("홀수입니다")   
    }
}
isEvenOrOdd(5);
isEvenOrOdd(4);

console.log("----------");

//변수
const name = "훈돌라";
const age = 28;

const user = `
이름 : ${name}
나이 : ${age}
`;

console.log(user);

