import{useState,useEffect} from "react";

function Timer(){
    const [second, setSecond]=useState(0)
    const [IsRunning,setIsRunning]=useState(true);

// if(!IsRunning) return;
    useEffect(()=>{
        const interval=setInterval(()=>{
            setSecond(prev=>prev+1);
        },1000)


        return()=>clearInterval(interval);
    },[IsRunning]);


    return (
        <>
        <h1>timer</h1>
        <h2>{second}</h2>

        <button onClick={()=>setIsRunning(!IsRunning)}>{IsRunning?'pause':'Resume'}</button>
        </>
    );
}


export default Timer;