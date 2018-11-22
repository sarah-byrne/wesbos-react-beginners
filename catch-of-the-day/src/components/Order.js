import React from 'react';
import { formatPrice } from '../helpers';

class Order extends React.Component {
    renderOrder = (key) => {
        const fish = this.props.fishes[key];
        const noOrdered = this.props.order[key];
        const isAvailable = fish.status === "available";

        if (!isAvailable) {
            return <li key={key}>
                Sorry {fish? fish.name : "fish"} is not available
            </li>
        }

        return (
            <li key={key}>
                {noOrdered} lbs {fish.name}
                {formatPrice(noOrdered * fish.price)}
            </li>
        )
    }

    render() {
        const orderedFishes = Object.keys(this.props.order);
        const total = orderedFishes.reduce((prevTotal, key) => {
            const fish = this.props.fishes[key];
            const noOrdered = this.props.order[key];
            const isAvailable = fish && fish.status === "available";
            if (isAvailable) {
                return prevTotal + (noOrdered * fish.price);
            }
            return prevTotal;
        }, 0);

        return (
            <div className="order-wrap">
                <h2>Your Order</h2>
                <ul className="order">
                    {orderedFishes.map(this.renderOrder)}
                </ul>
                <div className="total">
                    <strong>TOTAL: {formatPrice(total)}</strong>
                </div>
            </div>
        )
    }
}

export default Order;
