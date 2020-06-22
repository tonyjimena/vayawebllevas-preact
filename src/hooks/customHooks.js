import { h } from "preact";
import { useState } from "preact/hooks";
import sendForm from "../services/sendForm";

const useFormHook = (callback) => {
  const [inputs, setInputs] = useState({});
  const handleSubmit = (event) => {
    if (event) {
      event.preventDefault();
      console.log(inputs);
      sendForm(inputs)
    
    }
  };
  const handleInputChange = (event) => {
    //event.persist();
    setInputs((inputs) => ({
      ...inputs,
      [event.target.name]: event.target.value,
    }));
  };
  return {
    handleSubmit,
    handleInputChange,
    inputs,
  };
};

export default useFormHook;
