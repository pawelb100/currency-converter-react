import { useEffect, useState } from 'react';
import './style.css';

const Time = () => {

    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setDate(date => new Date());
        }, 1000);
        
        return () => {
            clearInterval(intervalId);
        };

    }, []);

    return (
        <p className="paragraph">
            Current time is: {date.toLocaleString()}
        </p>
    )
}

export default Time;