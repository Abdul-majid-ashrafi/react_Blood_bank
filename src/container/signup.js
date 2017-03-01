import * as React from "react";

export class SignupComponent extends React.Component {
    render() {
        return (
            <div className="container text-center" style={{ marginTop: "50px" }}>
                <form onSubmit={this.props._submit} >
                    <div>
                        <label htmlFor="Firstname" className="pull-left">Firstname</label>
                        <input type="text" name="firstname"
                            value={this.props.signUpState.firstname}
                            className="form-control"
                            placeholder="Firstname"
                            required autoFocus
                            onChange={this.props._inputHandler}
                            />
                    </div>
                    <div>
                        <br />
                        <label htmlFor="Lastname" className="pull-left">Lastname</label>
                        <input type="text" name="lastname"
                            value={this.props.signUpState.lastname}
                            className="form-control"
                            placeholder="Lastname"
                            required
                            onChange={this.props._inputHandler}
                            />
                        <br />
                    </div>

                    <div>
                        <label htmlFor="Username" className="pull-left"><span>User age</span></label>
                        <input type="text" name="age"
                            value={this.props.signUpState.age}
                            className="form-control"
                            placeholder="User age"
                            required
                            onChange={this.props._inputHandler}
                            />
                        <br />
                    </div>
                    <div>
                        <label htmlFor="inputEmail" className="pull-left">Email address</label>
                        <input type="email" name="email"
                            value={this.props.signUpState.email}
                            className="form-control"
                            placeholder="Email address"
                            required
                            onChange={this.props._inputHandler}
                            />
                    </div>
                    <br />
                    {!this.props.isProfileRoute &&
                        <div >
                            <label htmlFor="inputPassword" className="pull-left">Password</label>
                            <input type="password" name="pass"
                                value={this.props.signUpState.pass}
                                className="form-control"
                                placeholder="Password"
                                required
                                onChange={this.props._inputHandler}
                                />
                        </div>
                    }
                    <br />
                    <button type="submit" >
                        {this.props.isProfileRoute ? <span>Update</span> : <span>Sign up</span>}
                    </button>
                </form>
            </div>
        )
    }
}
SignupComponent.PropTypes = {
    _inputHandler: React.PropTypes.func.isRequired,
    _submit: React.PropTypes.func.isRequired

}
// export default SignupComponent;