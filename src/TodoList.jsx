const TodoList = ({ list, remove }) => {
    return (
      <>
        {list?.length > 0 ? (
          <ul className="todo-list flex justify-center items-center w-full break-all sm:block">
            {list.map((entry, index) => (
              <div className="todo text-left  mx-0 my-2 flex items-center justify-start flex-col gap-2 sm:flex-row sm:m-4  sm:p-4 sm:flex-row sm:justify-center sm:gap-2 sm:min-w-['300px']">
                <li className="p-4 " key={index}> {entry} </li>
  
                <button
                  className="delete-button transition-all hover:bg-red-700 bg-red-400 py-2 px-8 rounded"
                  onClick={() => {
                    remove(entry);
                  }}
                >
                  Delete
                </button>
              </div>
            ))}
          </ul>
        ) : (
          <div className="empty mt-4">
            <p>You don't have task(s) yet</p>
          </div>
        )}
      </>
    );
  };
  
  export default TodoList;