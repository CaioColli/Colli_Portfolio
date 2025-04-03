import { Route, Switch } from "wouter"

import { Home } from "../pages/home"
import { Project } from "../pages/project"
import { useScrollToTop } from "../hooks/windowScroll"
import { DynamicCategory } from "../pages/dynamicCategory"

export const Routes = () => {
    useScrollToTop();

    return (
        <>
            <Switch>
                <Route path="/" component={Home} />
                <Route path="/portfolio/:category">
                    {(params: any) => <DynamicCategory category={params.category} />}
                </Route>
                <Route path="/project/:id">
                    {(params: any) => <Project id={params.id} />}
                </Route>
            </Switch>
        </>
    )
}