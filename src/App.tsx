import { useState, FormEvent, ChangeEvent } from "react";
import { Header } from "./components/Header";
import { Todo } from "./components/Todo";
import plus from './assets/plus.svg';
import clipboard from './assets/Clipboard.svg'

import styles from './App.module.css'

import './global.css'

interface Todo {
  description: string;
  done: boolean;
}

function App() {
  const [todoList, setTodoList] = useState<Todo[]>([])
  const [newTodoDescription, setNewTodoDescription] = useState<string>('');

  function handleNewTodoDescriptionChange(event: ChangeEvent<HTMLInputElement>){
    setNewTodoDescription(event.target.value);
  }

  function handleCreateTodo(event: FormEvent) {
    event.preventDefault();
    
    const newTodo: Todo = {
      description: newTodoDescription,
      done: false,
    }

    setTodoList([...todoList, newTodo]);
  }

  function handleTodoToggle(todoToToggleIndex: number) {
    const newTodoList = todoList.map((todo, index) => ({
      done: index === todoToToggleIndex ? !todo.done : todo.done,
      description: todo.description,
    }));

    setTodoList(newTodoList);
  }

  function handleDeleteTodo(todoToDeleteIndex: number) {
    const newTodoList = todoList.filter((_, index) => index !== todoToDeleteIndex);

    setTodoList(newTodoList);
  }

  const createdTodosAmount = todoList.length;

  const doneTodosAmount = todoList.reduce((acc, cur) => cur.done ? acc + 1 : acc, 0);

  const doneTodosString = createdTodosAmount ? `${doneTodosAmount} de ${createdTodosAmount}` : 0;

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>

        <form className={styles.newTask} onSubmit={handleCreateTodo}>
          <input 
            placeholder="Adicione uma nova tarefa" 
            value={newTodoDescription} 
            onChange={handleNewTodoDescriptionChange}/>
          <button type="submit">
            Criar 
            <img src={plus} alt="plus icon" />
          </button>
        </form>

        <div className={styles.info}>
          <div className={styles.created}>
            Tarefas criadas
            <span>{createdTodosAmount}</span>
          </div>

          <div className={styles.done}>
            Concluídas
            <span>{doneTodosString}</span>
          </div>
        </div>

        <div className={styles.todoList}>
          {todoList.length ?
            todoList.map((todo, index) => 
              <Todo 
                description={todo.description}
                done={todo.done}
                onChange={() => handleTodoToggle(index)}
                onDelete={() => handleDeleteTodo(index)}
                key={todo.description}
              />
            ) :
            <div className={styles.empty}>
              <img src={clipboard} alt="clipboard icon" />
              <strong>Você ainda não tem tarefas cadastradas</strong> 
              <p>Crie tarefas e organize seus itens a fazer</p>
            </div>
          }
        </div>
      </div>
    </div>
  )
}

export default App
