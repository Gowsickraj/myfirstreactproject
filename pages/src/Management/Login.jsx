import { useState } from "react"

export const Login = () => {

    const [condition, setcondtion] = useState({})
    const ball = (e) => {
        const { name, value } = e.target;

        setcondtion({ [name]: value });
        localStorage.setItem(name, value);

        {
            console.log(value);
        }
    }

    return (
        <form>
            <label>
                User Name:
                <input type="text"
                    name="name"
                    placeholder="Type your Name*"
                    onChange={ball}
                    required />
            </label>
            <br />
            <br />
            <label>
                Password:
                <input type="password"
                    placeholder="Enter password*"
                    name="pass"
                    onChange={ball}
                    required />
            </label>
            <br />
            <br />
            <button>Submit</button>
        </form>
    )
}