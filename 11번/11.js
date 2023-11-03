const today = new Date();
const hour = today.getHours();

function nowTime() {
  if (hour < 10) {
    console.log("good morning");
  } else if (hour < 18) {
    console.log("good afternoon");
  } else {
    console.log("good evening");
  }
}
// console.log(today);
nowTime(hour);

// new Date()로 현재 날짜 시간정보를 가져올 수 있음!
