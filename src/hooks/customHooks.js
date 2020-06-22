import { h } from "preact";
import { useState, useEffect } from "preact/hooks";
import sendForm from "../services/sendForm";

const useFormHook = (callback) => {
  const [inputs, setInputs] = useState({});
  const handleSubmit = (event) => {
    if (event) {
      event.preventDefault();
      //console.log(inputs);
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

const useFormNetlify = () => {
  /* Here’s the juicy bit for posting the form submission */
  const [state, setState] = useState({});

  const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
  }

  const handleSubmit = (e) => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...state }),
    })
      .then(() => console.log(state))
      .catch((error) => alert(error));

    e.preventDefault();
  };

  //const handleChange = (e) => setState({ [e.target.name]: e.target.value });
  const handleChange = (event) => {
    //event.persist();
    setState((state) => ({
      ...state,
      [event.target.name]: event.target.value,
    }));
  };
  return {
    handleSubmit,
    handleChange,
    state,
  };
};
/*
const useDarkMode = () => {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    if (theme !== "dark") {
      localStorage.setItem("theme", "dark");
      setTheme("dark");
    } else {
      localStorage.setItem("theme", "light");
      setTheme("light");
    }
  };

  useEffect(() => {
    const localTheme = localStorage.getItem("theme");
    if (localTheme) {
      setTheme(localTheme);
    }
  }, []);

  return {
    theme,
    toggleTheme,
  };
};*/

export { useFormHook, useFormNetlify };
