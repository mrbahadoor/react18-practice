import { MouseEvent } from "react";

function ListGroup() {
    const items:string[] = [
        'New York',
        'Los Angeles',
        'Chicago',
        'Houston',
        'Phoenix',
        'Philadelphia',
        'San Antonio',
    ];

    // Event handler
    const handleClick = (event:MouseEvent) => console.log(event); 

    return (
    <>
        <h1>List</h1>
        {/* Logical add: true && 'Mosh' returns Mosh */}
        { items.length === 0 && <p>No items to display</p> }
        <ul className="list-group">
            {items.map((item, index) => (
                <li key={index} className="list-group-item" onClick={ handleClick }>
                    {item}
                </li>
            ))}
        </ul>
    </>
  );
}

export default ListGroup;