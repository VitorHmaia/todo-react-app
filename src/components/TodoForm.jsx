import React, {useState} from 'react'

export const TodoForm = ({addTodo}) => {
    const [value, setValue] = useState("")

    const handleSubmit = e => {
        e.preventDefault();

        addTodo(value);
        setValue("")
    }
  return (
    <form className ='TodoForm' onSubmit={handleSubmit}>
        <input type="text" className='TodoInput' 
        value= {value} placeholder='Qual tarefa planejou para hoje?' 
        onChange={(e) => setValue(e.target.value)}/>
        <button type='submit' className='TodoBtn'>Add</button>
    </form>
  )
}
