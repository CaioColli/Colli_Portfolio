import { Route, Switch } from "wouter"

import { Home } from "../pages"

export const Routes = () => {
    return (
        <>
            <Switch>
                <Route path="/" component={Home} />
            </Switch>
        </>
    )
}