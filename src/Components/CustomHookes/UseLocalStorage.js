const UseLocalStorage = (name) => {
    const setItem = (value) => {
        try{
            window.localStorage.setItem(name,JSON.stringify(value))
        }catch(error){
            console.error('error',error);
        }
    }

    const getItem = () => {
        try{
            const item = window.localStorage.getItem(name)
            return item ? JSON.parse(item):undefined;
        }catch(error){
            console.error('error',error);
        }
    }

    const removeItem = () => {
        try{
            window.localStorage.removeItem(name)
        }catch(error){
            console.error('error',error);
        }
    }

    return {setItem, getItem, removeItem};
}
export default UseLocalStorage;