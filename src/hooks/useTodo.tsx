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
  removeItem: (id: string) => void
  handleCheck: (id: string) => void
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

  function removeItem(id: string) {
    const newList = todoList.filter(item => item.id !== id)
    setTodoList(newList)
  }

  function handleCheck(id: string) {
    const updatedList = todoList.map(item => {
      if (item.id === id) {
        return {
          ...item,
          checked: !item.checked,
        }
      }
      return item
    })

    setTodoList(updatedList)
  }

  return (
    <TodoContext.Provider
      value={{ todoList, addItem, removeItem, handleCheck }}
    >
      {props.children}
    </TodoContext.Provider>
  )
}

export function useTodo() {
  const value = useContext(TodoContext)
  return value
}
