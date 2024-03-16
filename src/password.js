function Password() {

    const [inputValue,setInputValue] = useState("");
    const onTextChange = (e) =>{
        setInputValue(e.target.value);
    }

    return (
        <div>
            <div>
                <label htmlFor="password">Password:</label><br></br>
                <input type="password" id="password" placeholder="enter password" required />
            </div>
        </div>
    )
}

export default Password;