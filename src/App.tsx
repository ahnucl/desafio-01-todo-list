import { useState, FormEvent, ChangeEvent } from "react";
import { Header } from "./components/Header";
import plus from './assets/plus.svg';
import trash from './assets/trash.svg';

import styles from './App.module.css'

import './global.css'

/**
 * TODO: (irônico)
 * 1. Adicionar ícones botões ( + e lixeira)
 * 2. Estilizar App
 *  2.1 newTask - ok
 *  2.2 info - ok 
 *    2.2.1 problema nas cores da logo e desse elemento - ok (era o forçar tema escuro do browser)
 *  2.3 todoList - ok
 * 3. Verificar necessidade de componentizar esse arquivo
 * 4. Adicionar estado
 * 5. Criar tela para lista vazia
 */

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

  function handleTodoToggle(event: ChangeEvent<HTMLInputElement>, todoIndex: number) {
    const newTodoList = todoList.map((todo, index) => ({
      done: index === todoIndex ? event.target.checked : todo.done,
      description: todo.description,
    }));

    setTodoList(newTodoList);
  }

  const getDescriptionTextClass = (checked: boolean) => 
    checked ? `${styles.todoText} ${styles.checkedTodoText}` : styles.todoText;

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
            <span>5</span>
          </div>

          <div className={styles.done}>
            Concluídas
            <span>2 de 5</span>
          </div>
        </div>

        <div className={styles.todoList}>
          {todoList.map((todo, index) => 
            <div className={styles.todo} key={todo.description}>
              <div className={styles.checkboxContainer}>
                <input type="checkbox" checked={todo.done} onChange={(e) => handleTodoToggle(e, index)}/>
              </div>
              <div className={getDescriptionTextClass(todo.done)}>{todo.description}</div>
              <button>
                <img src={trash} alt="plus icon" />
              </button>
            </div>
            )}
        </div>
      </div>
    </div>
  )
}

export default App
