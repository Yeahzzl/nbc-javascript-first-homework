// for문을 이용하여 숫자리스트의 숫자를 모두 더한 값을 총합 변수에 할당 후 console.log로 출력합니다.
function total() {
  let 총합 = 0;

  for (let i = 0; i <= 10; i++) {
    총합 += i;
  }
  return 총합;
}

console.log(total()); // 결과: 55
