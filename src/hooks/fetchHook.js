import {useState, useEffect} from 'react'

export default function useFetch(url) { 
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [hasError, setHasError] = useState(null);

    useEffect(
        () => {
            if(url){
                (async () => {
                    setIsLoading(true);
                    try {
                        const response = await fetch(url);
                        if (response.ok) {
                            const data = await response.json();
                            setData(data); 
                        }
                    } catch (e) {
                        console.log("шо-то не так")
                        setHasError(e)
                    } finally {
                        setIsLoading(false);
                    }  
                })()
              }
        }, [url]
    )

    return [{data, isLoading, hasError}]
}