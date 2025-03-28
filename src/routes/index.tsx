import { Route, Switch } from "wouter"

import { Home } from "../pages/home"

export const Routes = () => {
    return (
        <>
            <Switch>
                <Route path="/" component={Home} />
                <Route path="/project/:id">
                    {(params: { id: string }) => <h1> {params.id} </h1> }
                </Route>
            </Switch>
        </>
    )
}