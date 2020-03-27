import React from 'react';
import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";
import {Route, withRouter, Switch} from 'react-router-dom';
import Spinner from "../../components/UI/Spinner/Spinner";
import {connect} from 'react-redux';
const ContactData = React.lazy(() => import('./ContactData/ContactData').then());

class Checkout extends React.Component {

    checkoutCancelledHandler = () => {
        this.props.history.goBack();
    }

    checkoutContinuedHandler = () => {
        this.props.history.push('/checkout/contact-data');
    }

    render() {
        return (
            <div>
                <CheckoutSummary
                    ingredients={this.props.ingredients}
                    checkoutCancelled={this.checkoutCancelledHandler}
                    checkoutContinued={this.checkoutContinuedHandler}
                />
                <Switch>
                    <Route
                        path={this.props.match.path + "/contact-data"}
                        render={() => (
                            <React.Suspense fallback={<Spinner/>}>
                                <ContactData/>
                            </React.Suspense>
                        )}
                    />
                </Switch>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ingredients: state.ingredients,
    }
};

export default connect(mapStateToProps)(withRouter(Checkout));
