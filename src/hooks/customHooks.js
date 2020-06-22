import { h } from "preact";
import { useState } from "preact/hooks";
import sendForm from "../services/sendForm";

const useFormHook = (callback) => {
  const [inputs, setInputs] = useState({});
  const handleSubmit = (event) => {
    if (event) {
      event.preventDefault();
      console.log(inputs);
      sendForm(inputs);
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

const useFormNetlify = (callback) => {
  /* Here’s the juicy bit for posting the form submission */
  const [state, setState] = useState();

  const encode = (data) => {
    return Object.keys(data)
        .map(key => `${encodeURIComponent(key)  }=${  encodeURIComponent(data[key])}`)
        .join("&");
  }

  const handleSubmit = (e) => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...state }),
    })
      .then(() => alert("Success!"))
      .catch((error) => alert(error));

    e.preventDefault();
  };

  const handleChange = (e) => setState({ [e.target.name]: e.target.value });
  return {
    handleSubmit,
    handleChange,
    state,
  };
};

export {useFormHook, useFormNetlify};
