import { TimeParagraph } from './styled';
import { useCurrentDate } from './useCurrentDate';

const Time = ({ lastUpdated }) => {

    const currentDate = useCurrentDate();

    const updatedDate = new Date(lastUpdated);

    return (
        <>
            <TimeParagraph>
                Current time is: {currentDate.toLocaleString()}
            </TimeParagraph>
            <TimeParagraph>
                Last updated: {updatedDate.toLocaleDateString()}
            </TimeParagraph>
        </>
    )
}

export default Time;