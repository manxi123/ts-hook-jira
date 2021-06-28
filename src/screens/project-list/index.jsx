import React from "react"
import { useState, useEffect } from "react"
import { cleanObject, useDebounce } from "utils"
import { List } from "./list"
import { SearchPannel } from "./search-pannel"
import * as qs from 'qs'


const apiUrl = process.env.REACT_APP_API_URL

export const ProjectListScreen = () => {

    const [list, setList] = useState([])

    const [param, setParam] = useState({
      name: '',
      personId: ''
    })

    // 使用自定义hook
    const debouncedParam = useDebounce(param, 2000)

    const [users, setUsers] = useState([])

    useEffect(() => {
    fetch(`${apiUrl}/projects?${qs.stringify(cleanObject(debouncedParam))}`).then(async response => {
      if (response.ok) {
        setList(await response.json())
      }
    })
  }, [debouncedParam])

  useEffect(() => {
    fetch(`${apiUrl}/users`).then(async response => {
      if (response.ok) {
        setUsers(await response.json())
      }
    })
  }, [])


  return <div>
    <SearchPannel users={users} param={param} setParam={setParam} />
    <List users={users} list={list} />
  </div>
}