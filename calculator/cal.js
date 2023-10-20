let cal = document.forms['cal'];
let input = cal.getElementsByTagName('input'); //숫자 입력값
let clearBtn = document.getElementsByClassName('clearBtn')[0]; //초기화(AC) 버튼 객체
let resultBtn = document.getElementsByClassName('resultBtn')[0]; //결과내기(=) 버튼 객체

//계산기 입력 처리함수
function calc(value) {
  if (cal['result'].value == 0) {
    cal['result'] = '';
  }

  cal['result'].value += value;
}

//계산기 초기화 함수
function clr() {
  cal['result'].value = 0;
}

//AC 버튼 클릭 시 초기화
clearBtn.onclick = () => {
  clr();
}

//input값 확인
for (let i = 0; i < input.length; i++) {
  if (input[i].value != '=' && input[i].value != 'AC') {
    // input[i].onclick = () => {
    //   calc(input[i].value); //화살표 함수는 this바인딩이 불가능
    // }
    input[i].onclick = function () {
      calc(this.value);
    }
  }
}