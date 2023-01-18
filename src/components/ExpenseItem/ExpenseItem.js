import ExpenseItemDate from "../ExpenseItemDate"
import   "./ExpenseItem.css"
const ExpenseItem=({id, title, amount, date})=>{

    return(
        <div className="expense-item" id={id}> 
           <ExpenseItemDate date={date} />
            <div className="expense-i tem__description">
                <h2>{title}</h2>
                <div className="expense-item__price">{amount}</div>
            </div>
        </div>
    )
}
export default ExpenseItem