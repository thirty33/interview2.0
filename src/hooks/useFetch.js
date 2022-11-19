import { useState, useEffect} from 'react';
import axios from 'axios';

const API = process.env.API;

export const useFetch = ({ url, method }) => {

    const [response, setResponse] = useState([]);
    const [loading, setLoading] = useState(false);
    const [sincronizedItems, setSincronizedItems] = useState(false);
    const [queryParams, setQueryParams] = useState({
        search: ''
    });

    useEffect(() => {
        const controller = new AbortController();

        const getResponse = async () => {
            setLoading(true)
            const { data , status } = await axios({
                method,
                url: `${API}/${url}`,
                params: {
                    ...queryParams
                },
                signal: controller.signal
            })

            if(status === 200) {
                setResponse(data.results)
            }
            setLoading(false)
            setSincronizedItems(true)
        }

        if(!sincronizedItems) {
            getResponse();
        }
        return() => {
            controller.abort()
        }
    }, [sincronizedItems])

    return {
        response,
        loading,
        setSincronizedItems,
        setQueryParams
    }
}