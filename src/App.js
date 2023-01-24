import "./assets/styles/index.css";
import { Item } from "./components/Item";
import { List } from "./components/List";
import { useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const inputValue = useRef();

  const [todos, setTodo] = useState(
    JSON.parse(localStorage.getItem("todos")) || []
  );

  const handleSubmit = (evt) => {
    evt.preventDefault();
    setTodo([
      ...todos,
      {
        id: todos.at(-1)?.id + 1 || 1,
        isComplate: false,
        text: inputValue.current.value,
      },
    ]);
    inputValue.current.value = "";
    toast.success("Todo qo'shildi");
  };

  localStorage.setItem("todos", JSON.stringify(todos));

  return (
    <div className="container">
      <h1 className="display-2 fw-bold text-center my-3 mt-5">Todo App</h1>
      <form onSubmit={handleSubmit} className="w-75 mx-auto shadow p-5 mt-5 ">
        <div className="input-group">
          <input
            ref={inputValue}
            className="form-control"
            type="text"
            placeholder="Todo..."
          />
          <button className="btn btn-primary" type="submit">
            SEND
          </button>
        </div>
      </form>

      {todos.length ? (
        <List>
          {todos.map((todo) => (
            <Item
              key={todo.id}
              todos={todos}
              setTodo={setTodo}
              text={todo.text}
              isComplate={todo.isComplate}
              id={todo.id}
            />
          ))}
        </List>
      ) : (
        <h2 className="text-center mt-5">Todolar kiritilmagan</h2>
      )}
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};
export default App;
