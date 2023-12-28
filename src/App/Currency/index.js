import './style.css';

const currency = ({ currencyId, setCurrencyId, currencyList }) => (
    <div className="currency__container">
        <label className="currency__label" htmlFor="currency">  
            Currency:
        </label>
        <select
            className="currency__select"
            id="currency"
            value={currencyList[currencyId].name}
            onChange={(event) => (setCurrencyId(event.target.selectedIndex))}
        >
            {currencyList.map(({ id, name }) => (
                <option key={id} className="currency__option">
                    {name}
                </option>
            ))}
        </select>
    </div>
)

export default currency;