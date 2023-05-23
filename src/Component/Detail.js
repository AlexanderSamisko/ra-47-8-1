import React  from 'react';
import useFetch from '../hooks/fetchHook';

export default function Detail({item}) {
    let initialUrl = item ? `https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${item.id}.json` : null;
    const [{data, isLoading, hasError}] = useFetch(initialUrl);

    return <>
        { 
            isLoading ? 
                <h2>loading...</h2> : 
                    (
                        initialUrl && data.details ? 
                            <div className="detail-box">
                                <img src={data.avatar} alt='' />
                                <h2>{data.name}</h2>
                                <span>City: {data.details.city}</span>
                                <span>Company: {data.details.company}</span>
                                <span>Position: {data.details.position}</span>
                            </div> 
                        : null
                    )       
        } 
        
    </>
}