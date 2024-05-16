const container = document.getElementById('container');

container.addEventListener('click', function(event) {
  if (event.target.tagName === 'DIV' && event.target.classList.contains('box')) {
    event.target.classList.add('clicked');
    //논리연산자 -> div 와 클래스명이 box 라면 -> clicked 클래스를 추가한다
  }
});


function getSquare(number) {
    return number * number;
  }
  
  const result = getSquare(5);
  console.log(result); // 25 출력 (5의 제곱)


