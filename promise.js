/*promise*/
/*

function attendance() {
   return new Promise((resolve, reject) => {
       setTimeout(() => {
           let attedance = true;
           if (attendance) resolve("Attendance marked");
           else reject("Absent");
       }, 2000);
   });
}

function lunch() {
   return new Promise((resolve, reject) => {
       setTimeout(() => {
           let lu = true;
           if (lu) resolve("Lunch break started");
           else reject("No lunch today");
       }, 2000);
   });
}

function goingtohome() {
   return new Promise((resolve, reject) => {
       setTimeout(() => {
           let gu = true; // Change this to true for successful execution.
           if (gu) resolve("Heading home");
           else reject("Did not go home");
       }, 2000);
   });
}
// Chaining the promises

attendance()
   .then((value) => {
       console.log(value);
       return lunch();
   })
   .then((value) => {
       console.log(value);
       return goingtohome();
   })
   .then((value) => {
       console.log(value);
       console.log("Day completed");
   })
   .catch((error) => {
       console.error("Error:", error);
   });
*/