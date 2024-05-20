//문제1-----------------------------------------------------------------

const users = [{
    이름: "철수",
    나이: 19,
    성별: "남"
}, {
    이름: "짱구",
    나이: 20,
    성별: "남"
}, {
    이름: "유리",
    나이: 21,
    성별: "여"
}

]

//문제2-----------------------------------------------------------------

const usersContainer = document.querySelector(".userContainer")
const names = document.querySelectorAll(".name");
const ages = document.querySelectorAll(".age");
const genters = document.querySelectorAll(".gender");

users.forEach(function (user) {
    let html = `<div class="usercard">
    <h1 class="name">이름 : ${user.이름}</h1>
    <P class="age">나이 : ${user.나이}</P>
    <P class="gender">성별 : ${user.성별}</P>
    </div>
    <hr/>`;
    usersContainer.insertAdjacentHTML("beforeend", html); 
})

//문제3-----------------------------------------------------------------

const girl = users.find(user => user.성별 === "여");

// console.log(girl)

//문제4-----------------------------------------------------------------

const boy = users.filter(user => user.성별 ==="남");

// console.log(boy);

//문제5-----------------------------------------------------------------

const newage = users.map((user) => {
    return {
        이름: user.이름,
        나이: user.나이 + 10,
        성별: user.성별,
    }
});
// console.log(users);
// console.log(newage);

//문제6-----------------------------------------------------------------

const 나이정렬 = [...users].sort((a, b) => {
    return b.나이 - a.나이
})

// console.log(나이정렬);
// console.log(users);

//문제7-----------------------------------------------------------------

const 튜터님 = {
	이름: "병수",
	나이: 20,
	주소: "시골",
}

const {이름, 나이, 주소} = 튜터님;

// console.log(이름);
// console.log(나이);
// console.log(주소);

