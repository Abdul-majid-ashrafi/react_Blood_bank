// import React, { Component } from 'react';
// import { Loggedin } from '../store/action/auth'
// import { connect } from 'react-redux'
// import { Link } from 'react-router';
// import { FirebaseService } from '../helpers/firebaseService'
// // import { List, ListItem } from 'material-ui/List';

// const styles = {
//     root: {
//         border: '2px outset',
//         display: 'flex',
//         flexWrap: 'wrap',
//     },
// };

// class Home extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             // name: this.props.authReducer.user.firstname
//         }
//     }

//     componentWillMount() {
//         let key = localStorage.getItem('currentUser')
//         // FirebaseService.ref.child(`/users`).on("child_added", (snapshot) => {
//         //     if (snapshot.val().type === 'donor') {

//         //     console.log(snapshot.val())
//         //     }
//         // })
//         FirebaseService.ref.child(`/users/${key}`).on("value", (snapshot) => {
//             if (snapshot.val()) {
//                 // this.setState({
//                     // name: snapshot.val().firstname + " " + snapshot.val().lastname
//                 // })
//                 this.props.Loggedin(snapshot.val())
//             }
//         })
//     }
//     render() {
//         // console.log(this.state.name)
//         // setInterval(() => {
//             // (this.props.authReducer.user.type === 'donor') ? this.setState(<h1>m</h1>) : <h1>a</h1>
//         // }, 200)
//         return (
//             <div className="App">
//                 <h1>Hello {this.state.name}</h1>
//                 {(this.props.authReducer.AuthReducer.user.type === 'donor') ?

//                     <div style={styles.root}>
//                         <h1>mani </h1>
//                     </div>
//                     :
//                     <div>
//                         <Link to="/donorList">Donors</Link>
//                         <Link to="/aboutnested">About</Link>
//                     </div>}
//             </div>
//         );
//     }
// }
// const mapStateToProps = (state) => { // mapStateToProps ye iska apna function he
//     return {
//         authReducer: state
//     }
// }
// const mapDispatchToProps = (dispatch) => { // mapDispatchToProps ye iska apna function he
//     return {
//         Loggedin: (data) => {
//             dispatch(Loggedin(data))
//         }
//     }
// }
// export default connect(mapStateToProps, mapDispatchToProps)(Home);

//                         // <List>
//                         //     <ListItem
//                         //         primaryText="Name"
//                         //         secondaryText={this.props.authReducer.user.firstname + " " + this.props.authReducer.user.lastname}
//                         //         />
//                         //     <ListItem
//                         //         primaryText="Email"
//                         //         secondaryText={this.props.authReducer.user.email}
//                         //         />
//                         //     <ListItem
//                         //         primaryText="Age"
//                         //         secondaryText={this.props.authReducer.user.age}
//                         //         />
//                         //     <ListItem
//                         //         primaryText="Blood Group"
//                         //         secondaryText={this.props.authReducer.user.blood}
//                         //         />
//                         // </List>