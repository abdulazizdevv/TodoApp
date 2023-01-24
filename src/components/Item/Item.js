import { toast } from "react-toastify";

export const Item = ({ text, isComplate, id, todos, setTodo }) => {
  const handleDelete = (todoId) => {
    const filteredTodos = todos.filter((todo) => todo.id !== todoId);
    console.log(filteredTodos);
    setTodo([...filteredTodos]);
    toast.error("Todo o'chirildi");
  };
  const handleEdite = (todoId, text) => {
    const findedTodo = todos.find((todo) => todo.id === todoId);
    const newText = prompt("Yangi todo kiriting", text);
    findedTodo.text = newText;
    setTodo([...todos]);
    toast.warning("Todo o'zgartirildi");
  };

  const handleChange = (todoId) => {
    const findedTodo = todos.find((todo) => todo.id === todoId);
    findedTodo.isComplate = !findedTodo.isComplate;
    setTodo([...todos]);
    if (findedTodo.isComplate) {
      toast.info("Todo bajarildi");
    }
  };

  return (
    <li className="list-group-item my-3 d-flex align-items-center">
      <span>{id}.</span>
      <input
        onChange={() => handleChange(id)}
        checked={isComplate}
        className="form-check-input ms-3"
        type="checkbox"
      />
      <strong
        className={
          isComplate ? "mx-3 text-decoration-line-through text-success" : "mx-3"
        }
      >
        {text}
      </strong>
      <button
        onClick={() => handleEdite(id)}
        className="btn btn-warning mx-2 ms-auto"
      >
        EDIT
      </button>
      <button onClick={() => handleDelete(id, text)} className="btn btn-danger">
        DELETE
      </button>
    </li>
  );
};
