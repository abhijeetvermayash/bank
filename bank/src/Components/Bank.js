import React from 'react';
import { Link } from 'react-router-dom';
 
class Bank extends React.Component {
    render() {
        return (<div>
            <h1>Welcome To Bank</h1>
            <Link to="/bank/create" className="ui green button" >Create a new Account</Link>
            <Link to="/bank/addmoney" className="ui green button" >Add Money</Link>
            <Link to="/bank/withdrawmoney" className="ui green button" >Withdraw Money</Link>
            <Link to="/bank/show" className="ui green button" >Get Account Details</Link>


        </div>);
    }
}

export default Bank;