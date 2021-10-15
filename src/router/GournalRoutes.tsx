import { Gournal } from "../components/Gournal";
import { NewGournal } from "../components/NewGournal";
import { Page404 } from "../components/Page404";

export const GournalRoutes = [
  {
    path: "/",
    exact: true,
    children: <Gournal />
  },
  {
    path: "/new",
    exact: true,
    children: <NewGournal />
  },
  {
    path: "*",
    exact: false,
    children: <Page404 />
  }
]
