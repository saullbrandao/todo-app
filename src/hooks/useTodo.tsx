import { createContext, ReactNode, useContext, useEffect, useState } from 'react'

type TodoContextProviderProps = {
  children: ReactNode
}

type ListItem = {
  value: string
  id: string
  checked: boolean
}

type ListFilter = 'all' | 'active' | 'completed'

type TodoContextType = {
  filteredList: ListItem[],
  addItem: (item: ListItem) => void
  removeItem: (id: string) => void
  handleCheck: (id: string) => void
  clearCompleted: () => void
  handleFilter: (filter: ListFilter) => void
}

const TodoContext = createContext({} as TodoContextType)

export function TodoContextProvider(props: TodoContextProviderProps) {
  const [todoList, setTodoList] = useState<ListItem[]>([
    { value: 'Number 1', id: '1', checked: false },
    { value: 'Number 2', id: '2', checked: false },
    { value: 'Number 3', id: '3', checked: true },
    { value: 'Number 4', id: '4', checked: false },
    { value: 'Number 5', id: '5', checked: false },
  ])
  const [filteredList, setFilteredList] = useState<ListItem[]>(todoList)
  const [filter, setFilter] = useState<ListFilter>('all')

  useEffect(() => {
    switch(filter){
      case 'all':
        setFilteredList(todoList)
        break
      case 'active': 
        setFilteredList(todoList.filter(item => !item.checked))
        break
      case 'completed': 
        setFilteredList(todoList.filter(item => item.checked))
        break
      default:
        break
    }
  }, [filter, todoList])

  function addItem(item: ListItem) {
    setTodoList(prevState => [...prevState, item])
  }

  function removeItem(id: string) {
    const newList = todoList.filter(item => item.id !== id)
    setTodoList(newList)
  }

  function clearCompleted() {
    const newList = todoList.filter(item => !item.checked)
    setTodoList(newList)
  }

  function handleFilter(filter: ListFilter){
    setFilter(filter)
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
      value={{ filteredList, addItem, removeItem, handleCheck, clearCompleted, handleFilter }}
    >
      {props.children}
    </TodoContext.Provider>
  )
}

export function useTodo() {
  const value = useContext(TodoContext)
  return value
}
