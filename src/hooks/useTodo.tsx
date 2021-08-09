import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react'

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
  filteredList: ListItem[]
  filter: ListFilter
  addItem: (item: ListItem) => void
  removeItem: (id: string) => void
  handleCheck: (id: string) => void
  clearCompleted: () => void
  handleFilter: (filter: ListFilter) => void
}

const TodoContext = createContext({} as TodoContextType)

export function TodoContextProvider(props: TodoContextProviderProps) {
  const [todoList, setTodoList] = useState<ListItem[]>([])
  const [filteredList, setFilteredList] = useState<ListItem[]>(todoList)
  const [filter, setFilter] = useState<ListFilter>('all')

  // on mount set todo list state with tasks saved on localStorage
  useEffect(() => {
    const list = localStorage.tasks ? JSON.parse(localStorage.tasks) : []
    setTodoList(list)
  }, [])

  // every time the todoList changes save it to the localStorage
  useEffect(() => {
    localStorage.tasks = JSON.stringify(todoList)
  }, [todoList])

  useEffect(() => {
    switch (filter) {
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

  function handleFilter(filter: ListFilter) {
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
      value={{
        filteredList,
        filter,
        addItem,
        removeItem,
        handleCheck,
        clearCompleted,
        handleFilter,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  )
}

export function useTodo() {
  const value = useContext(TodoContext)
  return value
}
