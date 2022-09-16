import ITodo from "../types/data";

interface TodoList extends ITodo{
    removeTodo: (id: number) => void
    toggleTodo: (id: number) => void
}

const TodoItem: React.FC<TodoList> = (props) => {
    const {id, title, complete, removeTodo, toggleTodo} = props;

    return <div>
        <input type="checkbox" checked={complete} onChange={()=>toggleTodo(id)}/>
        <span style={
            {
                display: 'inline-block',
                marginRight: '10px',
                marginLeft: '10px',
                fontSize: "16pt",
                fontFamily: 'Tahoma'

            }
        }>{title}</span>
        <button style={
            {
                background: 'transparent',
                border: 'none',
                outline: 'none',
                color: 'red'
            }
        } onClick={()=>removeTodo(id)}>x</button>
    </div>
}

export {TodoItem}