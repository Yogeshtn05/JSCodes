/*


callback hell
-----------------------------------------------------

function attedance(callback) {
   console.log("attendance");
   callback();
}

function lunch(callback) {
   console.log("lunch");
   callback();
}

function goingtohome() {
   console.log("day completed");
}

attedance(()=>{
   lunch(()=>{
      goingtohome(()=>{
         console.log("daycompleted");
      })
   }
   )
}
)
----------------------------------------------------------
*/