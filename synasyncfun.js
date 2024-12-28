/*
sychronous function 
--------------------------------------------------------------------------------------------------------------------



function attendance() {
   return new Promise((resolve, reject) => {
       setTimeout(() => {
           let attedance = true; // Change to true/false to test.
           if (attedance) resolve("Attendance marked");
           else reject("Absent");
       }, 2000);
   });
}

attendance()
   .then((message) => console.log(message))
   .catch((error) => console.error(error));

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
async function finalday()
{
   try{
   let a = await attendance();
   console.log(a);
   let lu=await lunch();
   console.log(lu);
   let home=await goingtohome();
   console.log(home)}
   catch(error)
   {
      console.error("caugth an error",error);
   }
}
finalday()

 -------------------------------------------------------------------------------------------------------- */
