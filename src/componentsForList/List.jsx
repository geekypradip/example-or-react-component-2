import ListHeader from "./ListHeader";
import Listitems from "./ListItems";
function List(props) {
    return ( 
        <>
         <ListHeader title={props.heading}/>
        <Listitems name={props.name} src={props.src}/>
        </>
       
     );
}

export default List;
