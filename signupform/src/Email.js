import { useState } from "react";
// import Password from "./password";
// import ConfirmPassword from "./passwordconfirm.js";

function Email() {

    const [inputValue,setInputValue] = useState("");
    const onTextChange = (e) =>{
        setInputValue(e.target.value);
    }
    console.log("email ", inputValue);
    return (
        <div>
            <form id="form">
                <div id="email">
                    <label htmlFor="gmail">Email:</label> <br></br>
                    <input type="email" id="gmail" required placeholder="enter gmail" onChange={onTextChange}/>
                </div>
                {/* <Password /> */}
                {/* <ConfirmPassword setInputValue={setInputValue} value={inputValue}/> */}
                <button id="btn" type="submit">Sign Up</button>
            </form>
        </div>
    );
}
export default Email;
