import { memo, VFC } from "react";
import { Switch, Route } from "react-router-dom";
import { Gournal } from "../components/Gournal";
import { Home } from "../components/Home";
import { Menu } from "../components/Menu";
import { Page404 } from "../components/Page404";

export const Router: VFC = memo(() => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/menu">
        <Menu />
      </Route>
      <Route exact path="/gournal">
        <Gournal />
      </Route>
      <Route path="*">
        <Page404 />
      </Route>
    </Switch>
  )
})
