import React from 'react';
import { ClipboardText, Trash } from "phosphor-react";
import { CheckBox } from "./CheckBox";
import styles from './Task.module.css';

export function Task({content}) {
  return (
    <>
      {true ? (
          <main>
            <div className={styles.contentTask}>
              <CheckBox content={content}/>
              <button className={styles.btnDeleteTask}  title="Deletar tarefa">
                <Trash size={20} />
              </button>
            </div>
          </main>
        ) : (
          <main className={styles.noTasks}>
            <ClipboardText className={styles.clipBoard} />
            <p className={styles.p1}>Você ainda não tem tarefas cadastradas</p>
            <p className={styles.p2}>
              Crie tarefas e organize seus itens a fazer
            </p>
          </main>
        )}
    </>
  );
}
