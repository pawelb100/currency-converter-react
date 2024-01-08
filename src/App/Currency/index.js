import { CurrencyContainer, CurrencyLabel, Select, Option } from "./styled";

const Currency = ({ currencyId, setCurrencyId, currencyList }) => (
    <CurrencyContainer>
        <CurrencyLabel htmlFor="currency">  
            Currency:
        </CurrencyLabel>
        <Select
            id="currency"
            value={currencyList[currencyId].name}
            onChange={(event) => (setCurrencyId(event.target.selectedIndex))}
        >
            {currencyList.map(({ id, name }) => (
                <Option key={id}>
                    {name}
                </Option>
            ))}
        </Select>
    </CurrencyContainer>
)

export default Currency;