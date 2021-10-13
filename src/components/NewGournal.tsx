import { ChangeEvent, memo, useState, VFC } from "react";
import { Button,Box, FormControl, FormLabel, Input, Textarea} from '@chakra-ui/react'
import axios from "axios";
import { useHistory } from "react-router-dom";

export const NewGournal: VFC = memo(() => {

  const history = useHistory()

  const [newTitle, setNewTitle] = useState("")
  const [newContent, setNewContent] = useState("")
  const [image, setImage] = useState<File | null>(null)

  const handleTitle = (e: ChangeEvent<HTMLInputElement>) => setNewTitle(e.target.value)
  const handleContent = (e: any) => setNewContent(e.target.value)
  const selectImage = (e: any) => setImage(e.target.files[0])

  const createFormData = () => {
    const formData = new FormData()
    if (image) {
      formData.append('gournal[title]', newTitle)
      formData.append('gournal[content]', newContent)
      formData.append('gournal[image]', image)
    } else {
      formData.append('gournal[title]', newTitle)
      formData.append('gournal[content]', newContent)
    }
    return formData
  }

  const submitGournal = () => {
    const data = createFormData()
    axios.post('http://localhost:3001/api/v1/gournals', data)
    .then(() => history.push('/gournal'))
    .catch((e) => console.error(e))
  }

  return (
    <Box m={5}>
      <FormControl>
        <FormLabel>Title</FormLabel>
        <Input type="text" value={newTitle} onChange={handleTitle} placeholder="title" />
      </FormControl>
      <FormControl>
        <FormLabel>Content</FormLabel>
        <Textarea type="text" value={newContent} onChange={handleContent} placeholder="content" />
      </FormControl>
      <FormControl mt={3}>
        <Input type="file" onChange={selectImage} />
      </FormControl>
      <FormControl mt={3}>
        <Button onClick={submitGournal}>Submit</Button>
      </FormControl>
    </Box>
  )
})
