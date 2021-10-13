import axios from "axios";
import { memo, useEffect, useState, VFC } from "react";
import { useGetAllGournals } from "../hooks/useGetAllGournals";


export const Gournal: VFC = memo(() => {

  const { getAllGournal, gournals } = useGetAllGournals()

  useEffect(() => {
    getAllGournal()
  }, [])

  return (
    <>
      {gournals?.map((gournal) => (
        <p key={gournal.id}>{gournal.id}</p>
      ))}
    </>
  )
})
