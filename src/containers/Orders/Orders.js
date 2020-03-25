import * as React from "react";
import {withRouter} from "react-router-dom";
import Order from "../../components/Order/Order";
import axios from '../../axios-orders';
// import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

class Orders extends React.Component {
    state = {
        orders: null,
        loading: true,
    };

    ordersHandler = () => {
        axios.get('orders.json').then(res => {
            const fetchedOrders = [];
            for (let key in res.data) {
                fetchedOrders.push({
                    ...res.data[key],
                    id: key,
                });
            }
            this.setState({loading: false, orders: fetchedOrders});
        }).catch(error => {
            this.setState({loading: false, orders: []});
        });
    };

    componentDidMount() {
        this.ordersHandler();
    }

    render() {
        return (
            <div>
                {this.state.orders ? this.state.orders.map(order => (
                    <Order
                        key={order.id}
                        ingredients={order.ingredients}
                        price={order.price}
                    />
                )) : null}
            </div>
        );
    }
}

export default withRouter(Orders);
