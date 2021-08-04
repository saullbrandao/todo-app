import { createContext, ReactNode, useContext, useState } from 'react'

type TodoContextProviderProps = {
  children: ReactNode
}

type ListItem = {
  value: string
  id: string
  checked: boolean
}

type TodoContextType = {
  todoList: ListItem[]
  addItem: (item: ListItem) => void
}

const TodoContext = createContext({} as TodoContextType)

export function TodoContextProvider(props: TodoContextProviderProps) {
  const [todoList, setTodoList] = useState([
    { value: 'Number 1', id: '1', checked: false },
    { value: 'Number 2', id: '2', checked: false },
    { value: 'Number 3', id: '3', checked: true },
    { value: 'Number 4', id: '4', checked: false },
    { value: 'Number 5', id: '5', checked: false },
  ])

  function addItem(item: ListItem) {
    setTodoList(prevState => [...prevState, item])
  }

  return (
    <TodoContext.Provider value={{ todoList, addItem }}>
      {props.children}
    </TodoContext.Provider>
  )
}

export function useTodo() {
  const value = useContext(TodoContext)
  return value
}
