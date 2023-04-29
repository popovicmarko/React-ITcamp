export function Register() {
    return (
        <div>
            <h1>Register</h1>
            <from>
                <label>Name</label>
                <input type="text" placeholder="Enter Username" name="firstname" required></input>
                <label>Surame</label>
                <input type="text" placeholder="Enter Username" name="lasttname" required></input>
                <label>e-mail</label>
                <input type="text" placeholder="Enter Username" name="username" required></input>
                <label>password</label>
                <input type="password " name="password " required></input>
                <button>Register</button>
            </from>
        </div>
    )
}