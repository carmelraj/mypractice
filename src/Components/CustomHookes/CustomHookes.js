import { useState, useEffect } from "react";
const UseFetch = (url='', options=null) => {
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)

    useEffect(()=>{
        setLoading(true)
       fetch(url,options)
       .then((response)=>response.json())
       .then((data)=>{
        setData(data)
        setError(null)
    }).catch((error)=>{
        setError(error)
        setData(null)
    }).finally(()=>setLoading(false));
    },[url, options])
    return {data, error, loading}    
}
export default UseFetch;