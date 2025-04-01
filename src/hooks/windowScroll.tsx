import { useEffect } from "react";
import { useLocation } from "wouter";


export const useScrollToTop = () => {
    const [location] = useLocation();

    useEffect(() => {
        // Evita quando refresh ou voltar nativamente a página seja restaurada no mesmo lugar.
        window.history.scrollRestoration = "manual";
        window.scroll(0, 0);
    }, [location]);
}