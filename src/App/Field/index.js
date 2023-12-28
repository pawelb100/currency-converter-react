import './style.css';

const Field = ({ amount, setAmount }) => (
    <div className="field__container">
        <label
            className="field__label"
            htmlFor="amount">
            Amount:
        </label>
        <input
            id="amount"
            className="field__input"
            type="number"
            step="0.01"
            value={amount}
            onChange={(event) => (setAmount(event.target.value))}
            placeholder="Enter value"
            required={true} />
    </div>
);

export default Field;