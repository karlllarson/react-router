import React, {useState, useEffect} from 'react'
import './App.css';
import Item from './Item'

export default function Cart() {

    useEffect( () => {
        fetchItems();
    },[]);

    const [items, setItems] = useState([]);

    const fetchItems = async () => {
        const data = await fetch('https://fortnite-api.theapinetwork.com/store/get');
        const items = await data.json();
        //console.log(items);
        setItems( items.data);
    }
    
    return (
        <div>
            <h3>Shopping Cart Page</h3>
            {items.map( (item, index) => (
                <Item key={index} name={item.item.name} itemId={item.itemId} url={item.item.images.icon} />
            ))}
        </div>
    )
}
