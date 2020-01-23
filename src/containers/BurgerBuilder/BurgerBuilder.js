import React, {Component} from 'react';
import Aux from '../../hoc/Auxilary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Modal from '../../components/UI/Modal/Modal';

class BurgerBuilder extends Component {

	INGREDIENT_PRICES = {
		salad: 0.5,
		cheese: 0.4,
		bacon: 0.7,
		meat: 1.3
	};
	state = {
		ingredients: {
			salad: 0,
			bacon: 0,
			cheese: 0,
			meat: 0,
		},
		totalPrice: 4,
		purchasable: false,
	}

	updatePurchaseState(ingredients) {
		const sum = Object.keys(ingredients)
		.map(igKey => {
			return ingredients[igKey];
		})
		.reduce((sum, el) => {
			return sum + el;
		}, 0);
		this.setState({purchasable: sum > 0});
	}

	addIngredientHandler = (type) => {
		const oldCount = this.state.ingredients[type];
		const updatedCount = oldCount + 1;
		const upddatedIngredients = {
			...this.state.ingredients
		};
		upddatedIngredients[type] = updatedCount;
		const priceAddition = this.INGREDIENT_PRICES[type];
		const oldPrice = this.state.totalPrice;
		const newPrice = oldPrice + priceAddition;
		this.setState({totalPrice: newPrice, ingredients: upddatedIngredients});
		this.updatePurchaseState(upddatedIngredients);
	}

	removeIngredientHandler = (type) => {
		const oldCount = this.state.ingredients[type];
		if (oldCount <= 0) {
			return null;
		}
		const updatedCount = oldCount - 1;
		const upddatedIngredients = {
			...this.state.ingredients
		};
		upddatedIngredients[type] = updatedCount;
		const priceAddition = this.INGREDIENT_PRICES[type];
		const oldPrice = this.state.totalPrice;
		const newPrice = oldPrice - priceAddition;
		this.setState({totalPrice: newPrice, ingredients: upddatedIngredients});
		this.updatePurchaseState(upddatedIngredients);
	}

	render() {
		const disabledInfo = {
			...this.state.ingredients
		};

		for (let key in disabledInfo) {
			disabledInfo[key] = disabledInfo[key] <= 0
		}
		return (
			<Aux>
				<Modal>
					<OrderSummary
						ingredients = {this.state.ingredients}
					></OrderSummary>
				</Modal>
				<Burger ingredients = {this.state.ingredients} />
				<BuildControls 
					ingredientsAdded={this.addIngredientHandler} 
					ingredientsRemoved={this.removeIngredientHandler} 
					disabled = {disabledInfo}
					price = {this.state.totalPrice}
					purchasable = {this.state.purchasable}
				/>
			</Aux>
		);
	}
}

export default BurgerBuilder;