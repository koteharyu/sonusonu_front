import { memo, VFC } from "react";
import { Link } from "react-router-dom";

export const Page404: VFC = memo(() => {
  return (
    <>
      <h1>Not Found 404</h1>
      <Link to="/">Homeへ戻る</Link>
    </>
  )
})
