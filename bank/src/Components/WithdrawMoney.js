import React from 'react';
import { AddMoneyAction, FetchAccounts } from '../Actions/Actions';
import { connect } from 'react-redux';
import _ from 'lodash';


class WithdrawMoney extends React.Component {

    state = { account: null, moneytoadd: null, ok: 0,valid:0};
    render() {
        console.log(11);
        console.log(this.props);
        console.log(this.state);
        return (<div className="ui container">
            <h1>Add Money To Your Account</h1>
            <form className="ui form" onSubmit={this.onsubmit}>
                <label className="ui green label">Enter Your Account Number</label>
                <br /><br />
                <input className="ui input" value={this.state.account} onChange={this.getaccount} /><br /><br />
                <label className="ui green label">Enter Money To Withdraw</label>
                <br /><br />
                <input className="ui input" value={this.state.moneytoadd} onChange={this.add} /><br /><br />
                <button type="submit" className="right floated ui blue button">Withdraw Money</button>
            </form><br/><br/>
            {this.rendervalid()}
            {this.renderwithdraw()}

        </div>);
    }
    rendervalid() {
        if (this.state.valid === 0) {
            return <div></div>
        }
        else if (this.state.valid === 1) {
            return <div></div>
        }
        else {
            return <div className="ui error message">Please enter a valid account Number</div>
        }
    }
    renderwithdraw() {
        if (this.state.ok === 0) {
            return <div></div>
        }
        else if (this.state.ok === 1) {
            return (
                <div><h1>Amount of {this.state.moneytoadd} has been withdrawed.</h1></div>

            );
        }
        else {
            return <div><h1>You don't have sufficient balance to complete this transaction</h1></div>
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
        const size = _.size(this.props.accounts);
        if (account >= this.props.accounts[0].accountnumber && account <= this.props.accounts[size - 1].accountnumber) {
            console.log(extra);
            const a = _.findIndex(this.props.accounts, { 'accountnumber': account });
            console.log(31);
            console.log(a);
            const b = a + 1;
            console.log(b);
            console.log(this.props.accounts[b - 1]);
            const previous = this.props.accounts[b - 1].money;
            console.log(previous);
            const m = Number(previous) - Number(extra.money);
            if (m >= 0) {
                const money = { money: m };

                console.log(1);
                console.log(money);

                this.props.addmoneyaction(b, money);
                this.setState({ ok: 1 });
            }
            else {
                this.setState({ ok: 2 });
            }
            this.setState({ valid: 1 });
        }
        else {
            this.setState({ valid: 2 });
        }
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
})(WithdrawMoney);