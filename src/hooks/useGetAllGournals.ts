import axios from "axios"
import { useState } from "react"

export const useGetAllGournals = () => {

  type Gournal = {
    id: number
    title: string
    content: string
    image_url: string
    created_at: Date
  }
  const [gournals, setGournals] = useState<Array<Gournal>>([])

  const getAllGournal = () => {
    axios.get<Array<Gournal>>('http://localhost:3001/api/v1/gournals')
      .then((res) => {
        setGournals(res.data)
      })
      .catch((e) => console.log(e))
  }

  return { getAllGournal, gournals }
}
