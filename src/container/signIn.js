import * as React from "react";
import { Link } from "react-router"
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';



export class SigninComponent extends React.Component {


    render() {
        const center = {
            width: '90%',
            margin: '0 auto'
        }
        return (
            <div style={center}>
                <AppBar
                    title="Please Signin"
                    showMenuIconButton={false} />
                <form onSubmit={this.props._submit}>
                    <TextField
                        hintText="email"
                        name="email"
                        onChange={this.props._inputHandler}
                        required fullWidth
                    /><br />

                    <TextField
                        hintText="password"
                        name="pass"
                        onChange={this.props._inputHandler}
                        required fullWidth
                    /><br />
                    <RaisedButton type="submit" label="Sign in" primary={true} />
                </form>
                <div style={{ marginTop: "10px" }}> Don't have account?? <Link to="/" style={{ cursor: "pointer" }}>Create an account.</Link>
                </div>
            </div>
        )
    }
}
SigninComponent.PropTypes = {
    _inputHandler: React.PropTypes.func.isRequired,
    _submit: React.PropTypes.func.isRequired

}