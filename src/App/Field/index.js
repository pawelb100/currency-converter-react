import { FieldContainer, FieldLabel, Input } from "./styled";

const Field = ({ amount, setAmount }) => (
    <FieldContainer>
        <FieldLabel htmlFor="amount">
            Amount:
        </FieldLabel>
        <Input
            id="amount"
            type="number"
            step="0.01"
            value={amount}
            onChange={(event) => (setAmount(event.target.value))}
            placeholder="Enter value"
            required={true} />
    </FieldContainer>
);

export default Field;