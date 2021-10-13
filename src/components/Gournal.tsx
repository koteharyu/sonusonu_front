import { memo, useEffect, VFC } from "react";
import { Stack } from '@chakra-ui/react'
import { useGetAllGournals } from "../hooks/useGetAllGournals";
import { GournalCard } from "./templates/GournalCard";


export const Gournal: VFC = memo(() => {

  const { getAllGournal, gournals } = useGetAllGournals()

  useEffect(() => {
    getAllGournal()
  }, [])

  return (
    <>
      <Stack spacing={6}>
        {gournals?.map((gournal) => (
          <GournalCard title={gournal.title} imageUrl={gournal.image_url} content={gournal.content} createdAt={gournal.created_at} />
        ))}
      </Stack>
    </>
  )
})
