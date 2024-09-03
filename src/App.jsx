import "./App.css";
import { useState } from "react";
import axios from "axios";

function App() {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  
  const handleSubmit = () => {
    if (!name ||!mobile ||!email) {
      alert("All fields are required!");
    }else if(!mobile){
      alert("Please enter a valid mobile number!");
    }else if(!email.includes("@")){
      alert("Please enter a valid email address!");
    }else{
      const url = "http://localhost/submitFormReact/submitFormReact/server/enquiry.php";
      let fData = new FormData();
      fData.append("name", name);
      fData.append("mobile", mobile);
      fData.append("email", email);  
      axios.post(url, fData)
      .then(response => alert(response.data))
      .catch(error => alert(error))
    }
  
  }
  return (
    <>
      <div className="container">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)}/>
        <label htmlFor="mobile">Mobile</label>
        <input type="text" id="mobile" name="mobile" value={mobile} onChange={(e) => setMobile(e.target.value)}/>
        <label htmlFor="email">Email</label>
        <input type="text" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
        <input type="button" id="send" name="send" value="SEND" onClick={handleSubmit}/>
      </div>
    </>
  )
}

export default App
