import TodoItem, { TodoItemProps } from "./TodoItem";

type TodoItemListProps = {
  data: Array<TodoItemProps>;
  deleteTodo: (index: number) => void;
  updateTodo: (index: number) => void;
};

const TodoItemList: React.FC<TodoItemListProps> = ({
  data,
  deleteTodo,
  updateTodo
}) => {
  return (
    <div>
      {data.map((todoItem, index) => {
        console.log("Index:", index);
        return (
          <div key={index} className="mt-2">
            <TodoItem
              title={todoItem.title}
              content={todoItem.content}
              status={todoItem.status}
              deleteTodo={() => deleteTodo(index)}
              updateTodo={() => updateTodo(index)}
            />
          </div>
        );
      })}
    </div>
  );
};

export default TodoItemList;
