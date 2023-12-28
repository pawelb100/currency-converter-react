import { useEffect, useState } from 'react';
import { TimeParagraph } from './styled';
import { useCurrentDate } from './useCurrentDate';

const Time = () => {

    const date = useCurrentDate();

    return (
        <TimeParagraph>
            Current time is: {date.toLocaleString()}
        </TimeParagraph>
    )
}

export default Time;