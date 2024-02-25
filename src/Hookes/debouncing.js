import { useState, useEffect } from "react";
const Debouncing = (input, delay=500) => {
    // console.log('recived input',input)
    const [debounce, setDebounce] = useState('')
    useEffect(()=>{
            const timer= setTimeout(()=>{
                setDebounce(input)
            },delay)
            return()=>{
                clearInterval(timer)
            }
    },[input,delay])

    return debounce;
}
export default Debouncing;