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
 *  2.3 todoList
 * 3. Verificar necessidade de componentizar esse arquivo
 * 4. Adicionar estado
 * 5. Criar tela para lista vazia
 */

function App() {

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>

        <div className={styles.newTask}>
          <input placeholder="Adicione uma nova tarefa" />
          <button>
            Criar 
            <img src={plus} alt="plus icon" />
          </button>
        </div>

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
          <div className={styles.todo}>
            <div className={styles.checkboxContainer}>
              <input type="checkbox" />
            </div>
            <div className={styles.todoText}>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</div>
            <button>
              <img src={trash} alt="plus icon" />
            </button>
          </div>

          <div className={styles.todo}>
            <div className={styles.checkboxContainer}>
              <input type="checkbox" />
            </div>
            <div className={styles.todoText}>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</div>
            <button>
              <img src={trash} alt="plus icon" />
            </button>
          </div>

          <div className={styles.todo}>
            <div className={styles.checkboxContainer}>
              <input type="checkbox" />
            </div>
            <div className={styles.todoText}>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</div>
            <button>
              <img src={trash} alt="plus icon" />
            </button>
          </div>

          <div className={styles.todo}>
            <div className={styles.checkboxContainer}>
              <input type="checkbox" checked/>
            </div>
            <div className={styles.todoText}>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</div>
            <button>
              <img src={trash} alt="plus icon" />
            </button>
          </div>

          <div className={styles.todo}>
            <div className={styles.checkboxContainer}>
              <input type="checkbox" checked/>
            </div>
            <div className={styles.todoText}>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</div>
            <button>
              <img src={trash} alt="plus icon" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
