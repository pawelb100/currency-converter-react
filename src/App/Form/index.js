import { FormContainer, FormFieldset, FormLegend } from "./styled";

const Form = ({ title, calculateResult, dataFetched, children }) => (
  <form
  onSubmit={(event) => {
    event.preventDefault();
    calculateResult();
  }}
  >
    <FormFieldset>
      <FormLegend>{title}</FormLegend>
      <FormContainer>
        {
          dataFetched ? children : <p>Loading rates...</p> 
        }
      </FormContainer>
    </FormFieldset>
  </form>
);

export default Form;