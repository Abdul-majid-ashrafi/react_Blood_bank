import React, { Component } from 'react';
import { Loggedin } from '../store/action/auth'
import { connect } from 'react-redux'
import { Link } from 'react-router';
import { FirebaseService } from '../helpers/firebaseService'



class Home extends Component {
    constructor(props) {
        super(props)

        let key = localStorage.getItem('currentUser')
        FirebaseService.ref.child(`/users/${key}`).on("value", (snapshot) => {
            if (snapshot.val()) {
                this.props.Loggedin(snapshot.val())
                console.log(this.props.authReducer.user)
            }
        })
    }

    render() {
        return (
            <div className="App">
                <h1>Hello{Home}</h1>
                <Link to="/homenested">Home</Link>
                <Link to="/aboutnested">About</Link>
                {this.props.children}
            </div>
        );
    }
}
const mapStateToProps = (state) => { // mapStateToProps ye iska apna function he
    return {
        authReducer: state
    }
}
const mapDispatchToProps = (dispatch) => { // mapDispatchToProps ye iska apna function he
    return {
        Loggedin: (data) => {
            dispatch(Loggedin(data))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);
// export default Home;
