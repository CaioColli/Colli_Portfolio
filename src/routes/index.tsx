import { Route, Switch } from "wouter"

import { Home } from "../pages/home"
import { Project } from "../pages/project"

export const Routes = () => {
    return (
        <>
            <Switch>
                <Route path="/" component={Home} />
                <Route path="/project/:id">
                    {(params: { id: string }) => <Project id={params.id} />  }
                </Route>
            </Switch>
        </>
    )
}