import { h } from "preact";

export default function sendForm(inputs) {
  const url = "https://vayawebllevas.com/dev/vayavaya/form55.php";
  const data = inputs;

  fetch(url, {
    method: "POST", // or 'PUT'
    body: data, // data can be `string` or {object}!
    //mode: "no-cors"
  })
    .then((res) => console.log(res))
    //.catch(error => console.error('Error:', error))
    // .then((response) => {
    //   if (response == "success") {
    //     console.log(response);
    //   } else {
    //     console.log(response);
    //   }
    // });
}
