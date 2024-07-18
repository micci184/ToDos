import TodoItem, { TodoItemProps } from "./TodoItem";

type ToDoITemListProps = {
  data: Array<TodoItemProps>;
};

const TodoItemList: React.FC<ToDoITemListProps> = ({ data }) => {
	return (
		<div>
			{data.map((todoItem, index) => (
				<div key={index} className="mt-2">
					<TodoItem title={todoItem.title} content={todoItem.content}/>
				</div>
			))}
		</div>
	);
};

export default TodoItemList;
