import trash from '../assets/trash.svg';

import styles from './Todo.module.css';

interface TodoProps {
  description: string;
  done: boolean;
  onChange: () => void;
  onDelete: () => void;
}

export function Todo({description, done, onChange, onDelete}: TodoProps) {

  const getDescriptionTextClass = (checked: boolean) => 
    styles.todoText + (checked ? ` ${styles.checkedTodoText}` : '');

  return (
    <div className={styles.todo} key={description}>
      <div className={styles.checkboxContainer}>
        <input type="checkbox" checked={done} onChange={onChange}/>
      </div>
      <div className={getDescriptionTextClass(done)}>{description}</div>
      <button>
        <img src={trash} alt="trash icon" onClick={onDelete}/>
      </button>
    </div>
  )
}