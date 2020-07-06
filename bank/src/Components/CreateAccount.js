import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { CreateAccountAction } from '../Actions/Actions';


class CreateAccount extends React.Component {
    render() {
        console.log(this.props);
        return (<div className="ui container">
            <h1>Create A New Bank Account</h1>
            <form className="ui error form" onSubmit={this.props.handleSubmit(this.onsubmit)} autoComplete="off">
                <label className="ui green label">Account Holder Name</label><br/><br/>
                <Field name="Name" component={this.renderform} /><br />
                <label className="ui green label">Age</label><br /><br />
                <Field name="age" component={this.renderform} /><br/>
                <label className="ui green label">Gender</label><br /><br />
                <Field name="gender" component={this.renderform} /><br/>
                <label className="ui green label">New Account Number</label><br /><br />
                <Field name="accountnumber" component={this.renderform} /><br />
                <label className="ui green label">Address</label><br /><br />
                <Field name="address" component={this.renderform} /><br />
                <label className="ui green label">initial deposite</label><br /><br />
                <Field name="money" component={this.renderform} /><br />
                <button type="submit" className="right floated ui blue button">Create new Account</button>
            </form>
            </div>
            
            );
    }
    onsubmit=(formValues)=> {
        console.log(99999999);
        console.log(formValues);
        this.props.createaccountaction(formValues);
    }

    renderform = (formprops) => {
        console.log(formprops);
        return (<div>
            <input className="ui input" {...formprops.input} />
            {this.rendererror(formprops.meta)}
        </div>
        );
    }
    rendererror(a) {
     
        if (a.error && a.touched) {
            console.log(1);
            return (
                <div className="ui error message">
                    <div className="header">
                        {a.error}
                    </div>

                </div>
                );
        }
    }
}
const mapStateToProps = (state) => {
    console.log(111);
    console.log(state);
}
const validate=(formValues)=>{
    const error = {};
    if (!formValues.Name) {
        error.Name = "Please Enter account holder name";
    }
    if (!formValues.age) {
        error.age = "please enter your age";

    }
    if (!formValues.gender) {
        error.gender = "please enter your gender";
    }
    if (!formValues.accountnumber) {
        error.accountnumber = "please enter a new account number";
    }
    if (!formValues.address) {
        error.address = "please enter your address";
    }
    if (!formValues.money) {
        error.money="please enter your initial deposite,it can't be zero"
    }
    return error;
}



export default connect(mapStateToProps, {
    createaccountaction: CreateAccountAction
})(reduxForm({
    form: 'createaccount',
    validate: validate
})(CreateAccount));