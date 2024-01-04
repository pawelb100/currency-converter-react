import { useState } from 'react';
import { currencies } from '../currencies';
import Container from './Container';
import Form from './Form';
import Currency from './Currency';
import Field from './Field';
import Button from './Button';
import Result from './Result';
import Time from './Time';

const App = () => {

  const currencyList = currencies;

  const [amount, setAmount] = useState("");

  const [currencyId, setCurrencyId] = useState(1);

  const [result, setResult] = useState("");

  const calculateResult = (amount, currencyId, currencyList, setResult) => {
    const number = Number(amount).toFixed(2);
    const currency = currencyList[currencyId];
    const result = (number * currency.rate).toFixed(2);

    setResult({
      amount: number,
      result: result,
      name: currency.name
    })
  };

  return (
    <Container>
      <Form
        title={"Currency Conventer"}
        calculateResult={() => calculateResult(amount, currencyId, currencyList, setResult)}
      >
        <Field
          amount={amount}
          setAmount={setAmount}
        />
        <Currency
          currencyId={currencyId}
          setCurrencyId={setCurrencyId}
          currencyList={currencyList}
        />
        <Button />
        <Result
          result={result}
        />
        <Time />
      </Form>
    </Container>
  );
}

export default App;
