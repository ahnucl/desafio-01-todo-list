import { Header } from "./components/Header";
import styles from './App.module.css'

import './global.css'

function App() {

  return (
    <div>
      <Header />
      
      <input placeholder="Adicione uma tarefa" />
      <button>Criar +</button>

      <div>
        Tarefas criadas
        5
      </div>

      <div>
        Concluídas
        2 de 5
      </div>

      <div className={styles.todoList}>
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
  )
}

export default App
