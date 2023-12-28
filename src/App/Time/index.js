import { useEffect, useState } from 'react';
import { TimeParagraph } from './styled';

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
        <TimeParagraph>
            Current time is: {date.toLocaleString()}
        </TimeParagraph>
    )
}

export default Time;