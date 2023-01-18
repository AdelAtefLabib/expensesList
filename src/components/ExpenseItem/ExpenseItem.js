import ExpenseItemDate from "../ExpenseItemDate";
import "./ExpenseItem.css";
const ExpenseItem = ({expenses}) => {
  return expenses.map((item, index) => {
    return (
      <div className="expense-item" id={item.id}  key={item.id}>
        <ExpenseItemDate date={item.date} />
        <div className="expense-i tem__description">
          <h2>{item.title}</h2>
          <div className="expense-item__price">{item.amount}</div>
        </div>
      </div>
    );
  });
};
export default ExpenseItem;
