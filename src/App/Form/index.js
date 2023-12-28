import './style.css';

const Form = ({ title, calculateResult, children }) => (
  <form
  className="form"
  onSubmit={(event) => {
    event.preventDefault();
    calculateResult();
  }}
  >
    <fieldset className="form__fieldset">
      <legend className="form__legend">{title}</legend>
      <div className="form__container">
        {children}
      </div>
    </fieldset>
  </form>
);

export default Form;