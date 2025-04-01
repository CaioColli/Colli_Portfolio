import { Route, Switch } from "wouter"

import { Home } from "../pages/home"
import { Project } from "../pages/project"
import { useScrollToTop } from "../hooks/windowScroll"

export const Routes = () => {
    useScrollToTop();

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