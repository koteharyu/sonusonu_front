import { Wrap, WrapItem } from "@chakra-ui/react";
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
      <Wrap p={{ base: 4, md: 10 }} spacing="30px" justify="center">
        {gournals.map((journal) => (
          <WrapItem key={journal.id}>
            <HeadingJournalCard title={journal.title} imageUrl={journal.image_url} createdAt={journal.processed_created_at} />
          </WrapItem>
        ))}
      </Wrap>
    </>
  )
})
