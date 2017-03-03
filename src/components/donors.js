import React, { Component } from 'react';
import { connect } from 'react-redux'
import { FindDonors } from '../store/action/auth'
import { FirebaseService } from '../helpers/firebaseService'
// import { List, ListItem } from 'material-ui/List';
// import ActionGrade from 'material-ui/svg-icons/action/grade';
// import ContentSend from 'material-ui/svg-icons/content/send';
// import ContentDrafts from 'material-ui/svg-icons/content/drafts';
// import ActionInfo from 'material-ui/svg-icons/action/info';
// import Divider from 'material-ui/Divider';
// import ContentInbox from 'material-ui/svg-icons/content/inbox';


class Donors extends Component {
    constructor(props) {
        super(props)
        this.onSearch = this.onSearch.bind(this)
        // let _self = this
        // _self.arr = []
        this.state = { arr: [] }
    }



    onSearch(e) {
        let _self = this;
        e.preventDefault()
        let ref = FirebaseService.ref.child("/users");
        // this.todo = [];
        console.log(this.state.arr)
        ref.orderByChild(this.refs.data.value.toUpperCase()).equalTo(true).once('value', function (snapshot) {
            snapshot.forEach(childSnapshot => {
                _self.state.arr.push(childSnapshot.val());
            })
            // _self.arr.push(snapshot.val())
            // console.log(this.state)
            // _self.props.findDonor(todo)
        });
        this.setState({
            arr: _self.state.arr
        })
        console.log(_self.state.arr)

        // console.log(_self.props.storeReducer)
        // console.log(this.props.storeReducer.user.length)
    }
    render() {
        const style = {
            width: '50%',
            margin: "0 auto"
            , border: 'outset 3px'
        }
        return (
            <div className="App">
                <form onSubmit={this.onSearch}>
                    <input type="text" ref="data" />
                    <button type="submit"> Submit  </button>
                </form>
                <h1>for example write a or b </h1>

                
                {this.state.arr.map((v, i) => {
                    return (
                        // <h1 </h1>

                <div style={style}>
                    <table key={i}>
                        <tbody>
                            <tr>
                                <th>Name</th>
                                <td>
                            {v.firstname } {v.lastname} </td>
                            </tr>
                            <tr>
                                <th>Email</th>
                                <td>
                            {v.email} </td>
                            </tr>
                            <tr>
                                <th>Age</th>
                                <td>
                            {v.age} </td>
                            </tr>
                            <tr>
                                <th>Blood Group</th>
                                    <td>
                            {v.blood} </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                    )
                    // (this.state.arr) ? <h1>{JSON.stringify(this.state.arr)}</h1> : <h1>a</h1>
                    // (this.props.storeReducer.user.length == 0) ? <h1>{JSON.stringify(this.props.storeReducer.user)}</h1> : <h1>a</h1>
                    // this.props.storeReducer.map((v, i) => {
                    //     return (
                    //         <h1>hello</h1>
                    //     )
                })
                }
            </div>
        );
    }
}


const mapStateToProps = (state) => { // mapStateToProps ye iska apna function he
    // console.log(state.UserReducer)
    return {
        storeReducer: state.UserReducer
    }
}
const mapDispatchToProps = (dispatch) => { // mapDispatchToProps ye iska apna function he
    return {
        findDonor: (data) => {
            // console.log(data)
            dispatch(FindDonors(data))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Donors);
// export default Donors;
