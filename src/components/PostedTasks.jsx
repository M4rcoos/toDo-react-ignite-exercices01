import styles from "./PostedTasks.module.css";



export function PostedTasks({children}) {
  return (
    <main className={styles.container}>
      <div className={styles.content}>
        <header>
          <div className={styles.createdTask}>
            Tarefas criadas<span>0</span>
          </div>
          <div className={styles.done}>
            Concluidas<span>0 de 5</span>
          </div>
        </header>
       {children}
      </div>
    </main>
  );
}
