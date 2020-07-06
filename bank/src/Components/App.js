import React from 'react';
import { Router, Route } from 'react-router-dom';
import history from '../History'
import AccountDetails from './AccountDetails';
import AddMoney from './AddMoney';
import Bank from './Bank';
import CreateAccount from './CreateAccount';
import WithdrawMoney from './WithdrawMoney';


class App extends React.Component {
    render() {
        return (<div>
            <Router history={history}>
                <Route path="/" exact component={Bank} />
                <Route path="/bank/create" exact component={CreateAccount} />
                <Route path="/bank/addmoney" exact component={AddMoney} />
                <Route path="/bank/withdrawmoney" exact component={WithdrawMoney} />
                <Route path="/bank/show" exact component={AccountDetails} />
            </Router>
        </div>);
    }
}
export default App;