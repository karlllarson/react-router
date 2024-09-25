import React from 'react'
import {Link} from 'react-router-dom';

export default function Item( props) {
    return (
        <div>
            <Link to={"/items/" + props.itemId}> {props.name} </Link>
        </div>
    )
}
