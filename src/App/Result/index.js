import { ResultParagraph } from "./styled";

const Result = ({ result }) => {

    if (!result)
        return;
    
    return (
        <ResultParagraph>
            {result.amount} PLN = {result.result} {result.name}
        </ResultParagraph>
    )
}

export default Result;