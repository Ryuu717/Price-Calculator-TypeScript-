import React, { useState } from 'react';
import './App.css';
import ItemList from './components/ItemList';
import TotalPrice from './components/TotalPrice';
import { Item } from './types';

const App: React.FC = () => {
    const [items, setItems] = useState<Item[]>([]);

    return (
        <div className="App">
            <h1>Price Calculator</h1>
            <ItemList items={items} onItemsChange={setItems} />
            <TotalPrice items={items} />
        </div>
    );
};

export default App;
