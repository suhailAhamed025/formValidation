import { useState } from "react";
import "./App.css";
import FormInput from "./component/FormInput";

function App() {
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    fullName: "",
    birthday: "",
    password: "",
    confirmPassword: "",
  });


  let inputs=[
  {
    id:'1',
    name:'userName',//name should be equal to formData name
    type:'text',
    placeholder:'User Name',
    errorMassage:"user name should be 3-4 characters and shouldn'nt include any special characters",
    lable:'User Name',
    pattern:'^[A-Za-z0-9]{4,16}$',
    required:true
  },
  {
    id:'2',
    name:'email',
    type:'email',
    placeholder:'Email',
    errorMassage:"should be valid email",
    lable:'Email',
    required:true
  },
  {
    id:'3',
    name:'birthday',
    type:'date',
    placeholder:'Birthday',
    errorMassage:"",
    lable:'Birthday'
    
  },
  {
    id:'4',
    name:'password',
    type:'password',
    placeholder:'Password',
    errorMassage:"password should be 8-18 characters and should include atleate 1 letter, 1 number and 1 special character ",
    lable:'Password',
    pattern:`^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
    required:true
  }, {
    id:'5',
    name:'confirmPassword',
    type:'password',
    placeholder:'Confirm Password',
    errorMassage:"Password doesn't match",
    lable:'Confirm Password',
    pattern: formData.password,
    required:true
  },

]


let handelSubmit=(e)=>{
    e.preventDefault()

}
let onChange=(e)=>{
  setFormData({...formData ,[e.target.name]:e.target.value})
}


  return (
    <div className="App">
      <form onSubmit={handelSubmit}>
      <h1>Sign up</h1>
        {inputs.map((e)=>{
          return(
        <FormInput key={e.id} {...e} value={formData[e.name]} onChange={onChange}/>
  )})}
        <button type="submit" >submit</button>
      </form>
    </div>
  );
}

export default App;
