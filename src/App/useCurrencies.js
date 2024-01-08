import { useEffect, useState } from "react";

const fetchData = async () => {
    try {
        const response = await fetch("currencyList.json");

        if (!response.ok) {
            throw new Error(response.statusText);
        }

        return await response.json();

    } catch (error) {
        console.error("Error with fetching data", error)
    }
};

export const useCurrencies = () => {

    const [data, setData] = useState({});

    useEffect(() => {
        fetchData().then((json) => {

            const output = {
                dataFetched: true,
                lastUpdated: json.meta.last_updated_at,
                currencyList: Object.keys(json.data).map((item, index) => {
                    return {
                        id: index + 1,
                        name: json.data[item].code,
                        rate: json.data[item].value
                    }
                })

            }

            setData(output);
        })
    }, [])

    return data;

};