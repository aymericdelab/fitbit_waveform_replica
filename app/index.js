import clock from "clock";
import document from "document";
import { preferences } from "user-settings";
import * as util from "../common/utils";
import { HeartRateSensor } from "heart-rate";
import userActivity from "user-activity";


let tap = 0;
const face = document.getElementById("face");
face.addEventListener("click", (evt) => {
  tap+=50;
})

// HEART REATE
const myHeart = document.getElementById("myHeart");

if (HeartRateSensor) {
   console.log("This device has a HeartRateSensor!");
   const hrm = new HeartRateSensor();
   hrm.addEventListener("reading", () => {
     let heartRateNow = hrm.heartRate;
     myHeart.text = hrm.heartRate;
     //console.log(`Current heart rate: ${hrm.heartRate}`);
   });
   hrm.start();
} else {
   console.log("This device does NOT have a HeartRateSensor!");
}

// MINUTES HOUR AND DATE
// Update the clock every minute
clock.granularity = "minutes";
clock.granularity = "seconds";
const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

// Get a handle on the <text> element
//const myLabel = document.getElementById("myLabel");
const myHours = document.getElementById("Hours");
const myMinutes = document.getElementById("Minutes");
const myDate = document.getElementById("myDate")
const mySteps = document.getElementById("mySteps");
const myCalories = document.getElementById("myCalories");

// Update the <text> element every tick with the current time
clock.ontick = (evt) => {
  let today = evt.date;
  let hours = today.getHours();
  let day = days[today.getDay()];
  let date = today.getDate();
  
  if (preferences.clockDisplay === "12h") {
    // 12h format
    hours = hours % 12 || 12;
  } else {
    // 24h format
    hours = util.zeroPad(hours);
  }
  let mins = util.zeroPad(today.getMinutes());
  
  myHours.text = hours;
  myMinutes.text = mins;
  myDate.text = `${day} ${date}`;
  
  //CALORIES
  let caloriesNow = userActivity.today.adjusted.calories;
  myCalories.text = caloriesNow+tap;
  
  // STEPS
  let stepsNow = userActivity.today.adjusted.steps;
  mySteps.text = stepsNow;
}


