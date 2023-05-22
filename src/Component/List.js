import React from "react";
import ListItem from "./ListItem";

export default function List ({list, chosenItem, setChosenItem}) {

    return (
        <ul className="list">
           { list.map(item => <ListItem 
                key={item.id} 
                id={item.id} 
                name={item.name} 
                chosenItem={chosenItem} 
                setChosenItem={setChosenItem}
            />)}
        </ul>
    )
}