import { useRef, useState } from "react";

function App(){

   const[time, setTime ]=useState(0);
   const[laps,setLaps]=useState([]);
   const intervalRef= useRef(null);

   function handleStart(){
      if(intervalRef.current !==null)return;
      intervalRef.current=setInterval(() => {
         setTime(time=>time+1);
      }, 1000);
   }

   function handlePause(){
      clearInterval(intervalRef.current);
      intervalRef.current=null;
   }
   function handleReset(){
      clearInterval(intervalRef.current);
      intervalRef.current=null;
      setTime(0);
      setLaps([]);
   }

   function handleLap(){
      setLaps(prev => [...prev,timeZone()]);
   }

   function timeZone(){
const hours= Math.floor(time/3600);
const minutes =Math.floor((time% 3600)/60);
const seconds = time%60;

return `${hours.toString().padStart(2,"0")}:${minutes.toString().padStart(2,"0")}:${seconds.toString().padStart(2,"0")}`
   }

   return(
      <div className=" flex justify-center items-center text-center  h-screen text-white px-4">
<div className="flex flex-col items-center  rounded-lg shadow-lg p-4 md:p-6 w-full max-w-sm bg-gray-800">
<h1 className=" text-2xl  md:text-4xl font-bold mb-4"> {timeZone()}</h1 >

<div className="flex flex-wrap justify-center gap-4">
   <button onClick={handleStart} className="bg-blue-500 hover:bg-blue-700 rounded px-3 py-2 ">Start</button> 
    <button onClick={handlePause} className="bg-yellow-500 hover:bg-yellow-700 rounded px-3  py-2">Pause</button>
     <button onClick={handleReset} className="bg-red-500 hover:bg-red-700 rounded px-3  py-2">Reset</button>  
      <button onClick={handleLap} className="bg-violet-500 hover:bg-violet-700 rounded px-4  py-2">Lap</button> 
   </div>

   <div className="mt-6 max-h-40 overflow-y-auto w-full p-2">
      {laps.map((lap,index)=> (
         <p key={index} className="border-b py-1">
             Lap {index +1}  :  {lap} </p>
      ))}

      
   </div>

   </div> 
      </div>
   )

  
};
export default App;