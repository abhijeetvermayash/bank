import React from 'react';
import { AddMoneyAction, FetchAccounts } from '../Actions/Actions';
import { connect } from 'react-redux';
import _ from 'lodash';


class AccountDetails extends React.Component {

    state = { account: null, details: null, click: false }
    render() {
        console.log(11);
        console.log(this.props);
        console.log(this.state);
        return (<div className="ui container">
            <h1>Get Your Account Details</h1>
            <form className="ui form" onSubmit={this.onsubmit}>
                <label className="ui green label">Enter Your Account Number</label>
                <br /><br />
                <input className="ui input" value={this.state.account} onChange={this.getaccount} /><br /><br />
                
               
               
                <button type="submit" className="right floated ui blue button">Get Details</button>
            </form><br/><br/><br/><br/>
            {this.renderDetails()}

        </div>);
    }
    renderDetails() {
        if (!this.state.details) {
            if (!this.state.click) {
                return <div></div>
            }
            else {
                return <div className="ui error message">Sorry!No such account exists</div>
            }
        }
        
        else {
            return (
                <div class="ui items"><hr/>
                    <div class="item">

                        <div class="content">
                            <h2>Name:{this.state.details.Name}</h2>
                            <h3>Account No:{this.state.details.accountnumber}</h3>
                            <h3>Age:{this.state.details.age}</h3>
                            <h3>Gender:{this.state.details.gender}</h3>
                            <h3>Address:{this.state.details.address}</h3>
                            <h3>Balance:{this.state.details.money}</h3>

                                
                    
                            </div></div></div>
                
                );
        }
    }
    componentDidMount = () => {
        console.log(1);
        this.props.fetchaccounts();
    }
    onsubmit = (event) => {
        event.preventDefault();
        const extra = { money: this.state.moneytoadd };
        const account = this.state.account;
        console.log(extra);
        const a = _.findIndex(this.props.accounts, { 'accountnumber': account });
        console.log(31);
        console.log(a);
        const b = a + 1;
        console.log(b);
        console.log(this.props.accounts[b - 1]);
        this.setState({ details: this.props.accounts[b - 1] });
        this.setState({ click: true });
       
        
    }
    getaccount = (event) => {
        this.setState({ account: event.target.value });
    }
    add = (event) => {
        this.setState({ moneytoadd: event.target.value });
    }

}
const mapStateToProps = (state) => {
    console.log(state);
    //return { accounts: Object.values(state.accounts) }
    return { accounts: Object.values(state.accounts) }
}

export default connect(mapStateToProps, {
    addmoneyaction: AddMoneyAction,
    fetchaccounts: FetchAccounts
})(AccountDetails);