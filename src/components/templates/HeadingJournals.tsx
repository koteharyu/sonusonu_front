import { Flex } from "@chakra-ui/react";
import { memo, useEffect, VFC } from "react";
import { HeadingJournalCard } from "../molecules/HeadingJournalCard";
import { useGetAllGournals } from '../../hooks/useGetAllGournals'

export const HeadingJournals: VFC = memo(() => {

  const { getThreeJournals, gournals } = useGetAllGournals()

  useEffect(() => {
    getThreeJournals()
  }, [])

  return (
    <>
      <Flex justifyContent="space-around">
        {gournals.map((journal) => (
          <HeadingJournalCard key={journal.id} title={journal.title} imageUrl={journal.image_url} createdAt={journal.processed_created_at} />
        ))}
      </Flex>
    </>
  )
})
