function List(props) {
    return (  
        <li type={props.type}>
            {props.name}
        </li>
    );

}
export default List;