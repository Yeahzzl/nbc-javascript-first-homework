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
nowTime(hour);
