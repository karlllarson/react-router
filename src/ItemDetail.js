import React, { useState, useEffect } from 'react';

export default function ItemDetail({ match }) {
    useEffect(() => {
        fetchItem();
    }, []);

    const [item, setItem] = useState({});

    const fetchItem = async () => {
        const data = await fetch("https://fortnite-api.theapinetwork.com/store/get");
        const items = await data.json();
        console.log("match.params.id=" + match.params.id)
        for (let index=0; index<items.data.length; index++) {
            if (items.data[index].itemId === match.params.id) {
                setItem(items.data[index]);
                console.log("found match itemId=" + items.data[index].itemId);
                console.log(items.data[index]);
                break;
            }
        }
    }
    if (item !== undefined && item.item !== undefined)
        return (
            <div>
                <div><img alt="item" height="60px" src={item.item.images.icon} /></div>
                <div><h3>{item.item.name}</h3></div>
            </div>
        )
    else
        return (
            <div>
                <h3>Empty</h3>
            </div>
        )
}
