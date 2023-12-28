import { FormContainer, FormFieldset, FormLegend } from "./styled";

const Form = ({ title, calculateResult, children }) => (
  <form
  onSubmit={(event) => {
    event.preventDefault();
    calculateResult();
  }}
  >
    <FormFieldset>
      <FormLegend>{title}</FormLegend>
      <FormContainer>
        {children}
      </FormContainer>
    </FormFieldset>
  </form>
);

export default Form;