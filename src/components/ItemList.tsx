import React from 'react';
import { Item } from '../types';

interface ItemListProps {
    items: Item[];
    onItemsChange: (items: Item[]) => void;
}

const ItemList: React.FC<ItemListProps> = ({ items, onItemsChange }) => {
    const addItem = () => {
        onItemsChange([...items, { price: 0, quantity: 1 }]);
    };

    const handlePriceChange = (index: number, value: string) => {
        const newItems = [...items];
        newItems[index].price = parseFloat(value) || 0;
        onItemsChange(newItems);
    };

    const handleQuantityChange = (index: number, value: string) => {
        const newItems = [...items];
        newItems[index].quantity = parseInt(value) || 1;
        onItemsChange(newItems);
    };

    return (
        <div className="item-list">
            <h3>Item Prices and Quantities</h3>
            <div className="item-list-header">
                <span>Price</span>
                <span>Quantity</span>
            </div>
            {items.map((item, index) => (
                <div key={index} className="item-row">
                    <input
                        type="number"
                        value={item.price || ''}
                        placeholder="Price"
                        onChange={(e) => handlePriceChange(index, e.target.value)}
                    />
                    <input
                        type="number"
                        value={item.quantity || ''}
                        placeholder="Quantity"
                        onChange={(e) => handleQuantityChange(index, e.target.value)}
                    />
                </div>
            ))}
            <button onClick={addItem} className="add-item-button">Add Item</button>
        </div>
    );
};

export default ItemList;
