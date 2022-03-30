import axios from 'axios';
import {useEffect, useState} from 'react';

export function useFetch(url){
    const [data, setData] = useState(null);
    const [fetch, setIsFetch] = useState(true);

    useEffect (()=>{
        axios.get(url)
        .then(response=>{
            setData(response.data);
        })
        .finally(()=>{
            setIsFetch(false);
        })

    },[])
    return {data, fetch}
}
