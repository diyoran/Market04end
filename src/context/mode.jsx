import { createContext, useState } from "react";

const ModeContext = createContext();

const ModeProvider = ({ children }) => {
    const [Mode, setMode] = useState("light")
    const handleMode = () => {
        setMode (() => Mode === "light" ? "dark" : "light")
    }
    const modeValues = {Mode, setMode, handleMode}
    return (
        <ModeContext.Provider value={modeValues}>
            {children}
        </ModeContext.Provider>
    )
}

export { ModeContext, ModeProvider}