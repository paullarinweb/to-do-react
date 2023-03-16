const TodoInput = ({ todo, setTodo, addTodo }) => {
    return (
      <div className="input-wrapper flex flex-col max-w-44 gap-4 sm:gap-0 sm:flex-row sm:flex sm:justify-center items-center sm:flex-nowrap flex-wrap">
        <input
        className="text-black py-3 px-4 w-full sm:w-auto rounded mx-0 my-4 sm:m-4"
          type="text"
          name="todo"
          value={todo}
          placeholder="Create a new todo"
          onChange={(e) => {
            setTodo(e.target.value);
          }}
        />
        <button className="add-button max-w-[100px] sm:max-w-auto hover:bg-slate-100 bg-white text-black py-3 px-6 rounded" onClick={addTodo}>
          Add
        </button>
      </div>
    );
  };
  
  export default TodoInput;