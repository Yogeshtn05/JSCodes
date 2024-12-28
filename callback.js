//CALLBACK

function dog(CALLBACK)
{
   setTimeout(()=>
   {
   console.log("jack");
   },2000)
   CALLBACK();
}
function cat()
{
   console.log("rose");

}
dog(cat)