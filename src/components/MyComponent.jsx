import React, { useCallback, useMemo, useEffect } from "react";
import largeFile from "../large-file.json";

function getLength(arr){
  console.log("I am calculating");
  let count = 0;
  for(let i = 0; i < arr.length; i++) count++;
    return count;
}




const MyComponent = (props) => {
  const totalEntries = useMemo(() => getLength(largeFile), []);

  const handleOnWindowLoad = useCallback(() =>{
    console.log("Loaded")
  },[]);

  useEffect(()=>{

    window.addEventListener("load", handleOnWindowLoad );

    return () =>{
      window.addEventListener("load", handleOnWindowLoad );
    };
  } , [props.state, handleOnWindowLoad])





  return ( 
    <div>
      <h1>Hello form my Component</h1>
      <h3>Total Entries {totalEntries}</h3>
      <h3>Count {props.state}</h3>

    </div>
   );
}

export default MyComponent;