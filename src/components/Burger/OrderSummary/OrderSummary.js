import React from 'react';

import Aux from '../../../hoc/Auxilary/Auxilary';
import Button from '../../UI/Button/Button';

class OrderSummary extends React.Component {
    ingredientSummary = null;
    UNSAFE_componentWillUpdate(nextProps, nextState, nextContext) {
        console.log("[Order Summary] will update");
        this.ingredientSummary = Object.keys(this.props.ingredients)
            .map(igKey => {
                return(
                    <li key = {igKey}>
                        <span style = {{textTransform: 'capitalize'}}>{igKey}</span>:
                        <span>{this.props.ingredients[igKey]}</span>
                    </li>
                );
            });
    }


    render() {
        return (
            <Aux>
                <h3>Your Order</h3>
                <p>A delicious burger with the following ingredients:</p>
                <ul>
                    {this.ingredientSummary}
                </ul>
                <p>
                    <strong>Total Price: {this.props.price}</strong>
                </p>
                <p>Continue to Checkout?</p>
                <Button
                    btnType = "Danger"
                    clicked = {this.props.purchaseCancel}
                >
                    Cancel
                </Button>
                <Button
                    btnType = "Success"
                    clicked = {this.props.purchaseContinue}
                >
                    Continue
                </Button>
            </Aux>
        );
    }
}

export default OrderSummary;
