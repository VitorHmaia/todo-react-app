import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

/**
 * Componente `Todo` exibe uma tarefa individual em uma lista de tarefas.
 *
 * @param {Object} task - Um objeto que representa a tarefa.
 * @param {function} deleteTodo - Função chamada para excluir a tarefa.
 * @param {function} editTodo - Função chamada para alternar o modo de edição da tarefa.
 * @param {function} toggleComplete - Função chamada para marcar a tarefa como concluída ou não concluída.
 *
 * @returns {JSX.Element} - Um elemento JSX que representa a tarefa.
 */
export const Todo = ({task, deleteTodo, editTodo, toggleComplete}) => {
  return (
    <div className="Todo">
        {/* Exibe o nome da tarefa com base no status de conclusão. */}
        <p className={`${task.completed ? "completed" : "incompleted"}`} onClick={() => toggleComplete(task.id)}>{task.task}</p>
        
        {/* Ícones para edição e exclusão da tarefa. */}
        <div>
          <FontAwesomeIcon className="edit-icon" icon={faPenToSquare} onClick={() => editTodo(task.id)} />
          <FontAwesomeIcon className="delete-icon" icon={faTrash} onClick={() => deleteTodo(task.id)} />
        </div>
    </div>
  )
}
