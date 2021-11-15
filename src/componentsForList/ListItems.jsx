import Category from "./CategoryItem";
function Listitems(props) {
    return ( 
        <Category label={props.name} src={props.src}/> 
     );
}

export default Listitems;