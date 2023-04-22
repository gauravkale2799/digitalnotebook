import classes from './MealItem.module.css';
import MealItemForm from './MealItemForm';
const MealItem =props=> {
    const  price = `$${props.price.toFixed(2)}`;
    return(


        <li>
            <div>
                <h3>{props.name}</h3>
                <div className={classes.description}>{props.description}</div>
                <div className={props.price}>{price}</div>
            </div>
            <div>
                <MealItemForm/>

            </div>
        </li>
    )

}

export default MealItem;