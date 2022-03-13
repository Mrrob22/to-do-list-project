
function ToDo({todo, toggleTask, removeTask, editTask, index}){
    return (
        <div key={todo.id} className='item-todo'>
            <div
                className={todo.complete ? 'item-text strike' : 'item-text'}
                onClick={()=>toggleTask(todo.id)}
            >
                <span>{index}. </span>
                <span>{todo.task}</span>
            </div>
            <div className='item-delete' onClick={()=>{removeTask(todo.id)}}>
                X
            </div>
            <div className='item-delete' onClick={()=>{editTask(todo.id)}}>
                Edit
            </div>

        </div>
    )
}
export default ToDo;