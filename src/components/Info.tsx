import styles from "./Info.module.css";

interface InfoProps {
  createdTodosAmount: number;
  doneTodosAmount: number
}

export function Info({ createdTodosAmount, doneTodosAmount }: InfoProps) {
  const doneTodosString = createdTodosAmount ? `${doneTodosAmount} de ${createdTodosAmount}` : 0;

  return (
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
  )
}