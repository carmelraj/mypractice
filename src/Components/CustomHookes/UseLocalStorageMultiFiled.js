const UseLocalStorageMultiFiled = () =>{
    
    const setItemOne = (value) =>{        
        try{            
            Object.keys(value).forEach((key)=>{
                window.localStorage.setItem(key,JSON.stringify(value[key]))
            })
            

        }catch(error){
            console.error('error',error);
        }        
    }

    const getItemOne = (value) =>{
        try{
            Object.keys(value).forEach((key)=>{
              const item =  window.localStorage.getItem(key,JSON.stringify(value[key]))
              return item?item:undefined;
            })
            

        }catch(error){
            console.error('error',error);
        }
    }

    return {setItemOne,getItemOne}
}

export default UseLocalStorageMultiFiled;