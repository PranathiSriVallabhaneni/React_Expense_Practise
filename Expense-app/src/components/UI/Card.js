import "./Card.css"

function Card(props){
    const classes = "card"// + " " + props.className   //Will append classes if u want to add more classes to the component
    return (
        <div className={classes}>{props.children}</div>        
    );
}

export default Card;