import { useState } from "react";

function ConfirmPassword(){

    const [inputValue,setInputValue] = useState("")
    const onTextChange = (e) => {
        setInputValue(e.target.value)
    }

    return (
        <div>
            <div>
                <label htmlFor="confirmPassword">Confirm Password:</label> <br></br>
                <input type="password" id="confirmPassword" placeholder="confirm password" onChange={onTextChange} required />
            </div>
        </div>
    );
}
export default ConfirmPassword;
