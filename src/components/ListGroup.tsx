import {useState} from "react";

interface ListGroupProps{
    items: string[];
    heading: string;
    onSelectItem: (item:string) => void;
}
export default function ListGroup({items, heading, onSelectItem}: ListGroupProps) {

    const [selectedIndex, setSelectedIndex] = useState<number>(-1);
    

    return (
        <>
            <h1>{heading}</h1>
            {items.length == 0 && <p>No item found</p>}
            <ul class="list-group">
                {items.map((item, index) => <li class={selectedIndex === index ? "list-group-item active" : "list-group-item"} key ={item} onClick={() => {setSelectedIndex(index); onSelectItem(item);}}>{item}</li>)}
            </ul>
        </>
    )
}