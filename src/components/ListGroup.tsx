// import { Fragment } from "react";

function ListGroup() {
    const items:string[] = [
        // 'New York',
        // 'Los Angeles',
        // 'Chicago',
        // 'Houston',
        // 'Phoenix',
        // 'Philadelphia',
        // 'San Antonio',
    ];

    // const message = items.length === 0 ? <p>No items to display</p> : null;

    // const getMessage = () => {
    //     return items.length === 0 ? <p>No items to display</p> : null;;
    // }

    // Use {..} to render items dynamically in JSX otherwise only html/xml allowed 
    return (
    <>
        <h1>List</h1>
        {/* Logical add: true && 'Mosh' returns Mosh */}
        { items.length === 0 && <p>No items to display</p> }
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