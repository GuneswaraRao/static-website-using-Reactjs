import React from 'react';
import '../../App.css';
import './SignUp.css';

const SignUp = () => {
    //  <h1 className='sign-up'>LIKE & SUBSCRIBE</h1>;
    return (
        <div id="card">
            <div id="card-content">
                <div id="card-title">
                    <h2>SIGN Up</h2>
                    <div className="underline-title"></div>
                </div>
                <form method="post" class="form">
                    <label for="user-fname" className="la-email" >
                        &nbsp;First Name
                    </label>
                    <input id="user-email" className="form-content" type="text" name="name" autocomplete="on" required />
                    <div className="form-border"></div>
                    <label for="user-lname" className="la-email" >
                        &nbsp;Last Name
                    </label>
                    <input id="user-email" className="form-content" type="text" name="name" autocomplete="on" required />
                    <div className="form-border"></div>

                    <label for="user-email" className="la-email" >
                        &nbsp;Email
                    </label>
                    <input id="user-email" className="form-content" type="email" name="email" autocomplete="on" required />
                    <div className="form-border"></div>
                    <label for="user-password" className="la-pass" >&nbsp;Password
                    </label>
                    <input id="user-password" className="form-content" type="password" name="password" required />
                    <div className="form-border"></div>
                    <label for="user-password" className="la-pass" >&nbsp; Re-Password
                    </label>
                    <input id="user-password" className="form-content" type="password" name="re-password" required />
                    <div className="form-border"></div>
                    <input id="submit-btn" type="submit" name="submit" value="Create" />
                    <a href="#" id="signup">Already you have an Member</a>
                </form>
            </div>
        </div>
    )
}
export default SignUp