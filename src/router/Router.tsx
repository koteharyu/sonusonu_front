import { memo, VFC } from "react";
import { Switch, Route } from "react-router-dom";
import { Home } from "../components/Home";
import { Menu } from "../components/Menu";
import { Page404 } from "../components/Page404";
import { GournalRoutes } from "./GournalRoutes";

export const Router: VFC = memo(() => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/menu">
        <Menu />
      </Route>
      <Route path="/gournal" render={({ match: {url}}) => (
        <Switch>
          {GournalRoutes.map((route) => (
            <Route key={route.path} exact={route.exact} path={`${url}${route.path}`}>
              {route.children}
            </Route>
          ))}
        </Switch>
      )}>
      </Route>
      <Route path="*">
        <Page404 />
      </Route>
    </Switch>
  )
})
