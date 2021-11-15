function Category(props) {
    return (  
        <div>
            <label htmlFor="product name">{props.label}</label>
            <img src={props.src} alt={props.label} />
        </div>
    );
}

export default Category;