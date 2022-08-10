import { Header } from "./components/Header";
import styles from './App.module.css'

import './global.css'

/**
 * TODO: (irônico)
 * 1. Adicionar ícones botões ( + e lixeira)
 * 2. Estilizar App
 *  2.1 newTask - ok
 *  2.2 info
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
          <input placeholder="Adicione uma tarefa" />
          <button>Criar +</button>
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
            <input type="checkbox" />
            <div>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</div>
            <button>X</button>
          </div>

          <div>
            <input type="checkbox" />
            <div>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</div>
            <button>X</button>
          </div>

          <div>
            <input type="checkbox" />
            <div>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</div>
            <button>X</button>
          </div>

          <div>
            <input type="checkbox" checked/>
            <div>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</div>
            <button>X</button>
          </div>

          <div>
            <input type="checkbox" checked/>
            <div>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</div>
            <button>X</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
