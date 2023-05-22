import React, { useEffect, useState } from 'react' 

export default function Detail({item}) {
    const [isLoading, setIsLoading] = useState(false);
    const [itemData, setItemData] = useState(null);
    let initialUrl = item ? `https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${item.id}.json` : null;
   
    useEffect(
        ()=> {
            if(initialUrl) {
                setIsLoading(true);
                (async () => {
                    const response = await fetch(initialUrl);
                    if (response.ok) {
                      const data = await response.json();
                      console.log(data);
                      setItemData(data);
                      setIsLoading(false);
                    } else {
                      console.log("шо-то не так")
                    }
                })()
            }    
        }, [initialUrl]
    )

    return <>
        { 
            isLoading ? 
                <h2>loading...</h2> : 
                    (
                        itemData ? 
                            <div className="detail-box">
                                <img src={itemData.avatar} alt='' />
                                <h2>{item.name}</h2>
                                <span>City: {itemData.details.city}</span>
                                <span>Company: {itemData.details.company}</span>
                                <span>Position: {itemData.details.position}</span>
                            </div> :
                            null
                    )       
        } 
        
    </>
}