import React, {Component} from 'react';
import Aux from '../../hoc/Auxilary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

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
		totalPrice: 4
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
	}

	removeIngredientHandler = (type) => {
		const oldCount = this.state.ingredients[type];
		const updatedCount = oldCount - 1;
		const upddatedIngredients = {
			...this.state.ingredients
		};
		upddatedIngredients[type] = updatedCount;
		const priceAddition = this.INGREDIENT_PRICES[type];
		const oldPrice = this.state.totalPrice;
		const newPrice = oldPrice - priceAddition;
		this.setState({totalPrice: newPrice, ingredients: upddatedIngredients});
	}

	render() {
		return (
			<Aux>
				<Burger ingredients = {this.state.ingredients} />
				<BuildControls 
					ingredientsAdded={this.addIngredientHandler} 
					ingredientsRemoved={this.removeIngredientHandler} 
				/>
			</Aux>
		);
	}
}

export default BurgerBuilder;