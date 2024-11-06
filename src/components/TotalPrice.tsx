import React from 'react';
import { Item } from '../types';

interface TotalPriceProps {
    items: Item[];
}

const TotalPrice: React.FC<TotalPriceProps> = ({ items }) => {
    const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <div>
            <h3>Total Price: ${total.toFixed(2)}</h3>
        </div>
    );
};

export default TotalPrice;
