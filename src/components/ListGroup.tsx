// import { Fragment } from "react";

function ListGroup() {
    const items = [
        'New York',
        'Los Angeles',
        'Chicago',
        'Houston',
        'Phoenix',
        'Philadelphia',
        'San Antonio',
    ];

    return (
    <>
        <h1>List</h1>
        <ul className="list-group">
            {items.map((item, index) => (
                <li key={index} className="list-group-item">
                    {item}
                </li>
            ))}
        </ul>
    </>
  );
}

export default ListGroup;