import './style.css';

const Result = ({ result }) => {

    if (!result)
        return;
    
    return (
        <p className="result__paragraph">
            {result.amount} PLN = {result.result} {result.name}
        </p>
    )
}

export default Result;