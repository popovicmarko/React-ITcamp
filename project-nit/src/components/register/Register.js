import './Register.css'
export function Register() {
    return (
        <div className='cointener'>
            <form>
                <h1>Register</h1>
                <label>Name</label>
                <input type="text" placeholder="First Name" name="firstname" required></input>
                <label>Surame</label>
                <input type="text" placeholder="Last Name" name="lasttname" required></input>
                <label>Username</label>
                <input type="text" placeholder="Enter Username" name="username" required></input>
                <label>password</label>
                <input placeholder="Enter Password" type="password " name="password " required></input>
                <button>Register</button>
            </form>
        </div>
    )
}