import { useState } from "react";
import Button from 'react-bootstrap/Button';

const Example7 = () => {
    const [data, setData] = useState({
        user: '',
        password: ''
    });

    const { user, password } = data;

    const handleInputChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(data);
        setData({ user: '', password: '' });
    };

    return (
        <div className="border w-25 mt-5 m-auto p-3">
            <form onSubmit={handleSubmit}>
                <div className="mt-10">
                    <label >userName </label>
                    <input
                        type="text"
                        placeholder="username"
                        className="form-control"
                        value={user}
                        name="user"
                        onChange={handleInputChange}
                    />
                </div>
                <br />
                <div className="mt-3">
                    <label >password </label>
                    <input
                        type="password"
                        placeholder="password"
                        className="form-control"
                        value={password}
                        name="password"
                        onChange={handleInputChange}
                    />
                </div>
                <br />
                <div>
                    <Button type="submit" className="btn btn-primary w-100" name="primary">Submit</Button>
                </div>
            </form>
        </div>
    );
};

export default Example7;
