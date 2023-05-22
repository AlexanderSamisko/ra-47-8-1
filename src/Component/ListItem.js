import React from 'react';

export default function ListItem({id, name, chosenItem, setChosenItem}) {

    const activeItem = () => {
        if(!chosenItem || chosenItem.id !== id) {
            setChosenItem({
                id,
                name
            });
        }  
    }

    return <li className={
        chosenItem ? (
            chosenItem.id === id ? "list-item active" : "list-item") : "list-item"
    }  onClick={activeItem}> {name} </li>
}