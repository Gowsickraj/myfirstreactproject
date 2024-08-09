import { useState } from 'react'
import './Stylesignup.css'

export const Signup = () => {

    const [user, setUser] = useState({})

    const Myfunction = (e) => {
        const { name, value } = e.target;
        setUser({ [name]: value });
        localStorage.setItem(name, value);
        {
            console.log(value);
        }
    }
    return (
        
            <form>
                <label>User Name:
                    <input type="text"
                        name='username'
                        onChange={Myfunction}
                        placeholder="Type your name"
                        required />
                </label>
                <br />
                <br />
                <label>Date Of Birth:
                    <input type='date'
                        name='dateofbirth'
                        onChange={Myfunction}
                        required />
                </label>
                <br />
                <br />
                <label>Contact number:
                    <input type='text'
                        name='number'
                        onChange={Myfunction}
                        placeholder="Enter Phone Number"
                        required />
                </label>
                <br />
                <br />
                <label>Email:
                    <input type="email"
                        name='email'
                        placeholder="Enter your Email"
                        onChange={Myfunction}
                        required />
                </label>
                <br />
                <br />
                <label>
                    Enter your Password:
                    <input type='password'
                        placeholder='Enter your password'
                        name='password'
                        onChange={Myfunction}
                        required />
                </label>
                <br />
                <br />
                <label>
                    Re-Enter password:
                    <input type='password'
                        name='re-password'
                        placeholder='Re-Enter password'
                        onChange={Myfunction}
                        required />
                </label>
                <br />
                <br />
                <button name='submit'>Submit</button>
            </form>
    )
    }