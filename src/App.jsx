import { Fragment, useContext, useEffect } from "react";
import "./App.css"
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home";
import Product from "./pages/Product"
import Bag from "./pages/Bag";
import { ModeContext } from "./context/mode";
import useLocalStorage from 'react-use-localstorage'


const App = () => {
  const { Mode, setMode, handleMode } = useContext(ModeContext)

  const [value, setvalue] = useLocalStorage("mode", Mode)

  const changeMode = (e) => {
    const checked = e.target.checked
    if (checked) {
      // setMode("dark")
      setvalue("dark")
    } else {
      // setMode("light")
      setvalue("light")
    }

  }

  useEffect(() => {
    setMode(value)
  }, [value])

  return (
    <Fragment>
      <header className={`mode-${Mode}`}>
        <div className="container">
          <label>
            <input type="checkbox" onChange={changeMode} />
            <span>Mode</span>
          </label>
        </div>
      </header>
      <main className={`main mode-${Mode}`}>
        <Routes>
          <Route path="/Market" index element={<Home />} />
          <Route path="/Market/product/:id" element={<Product />} />
          <Route path="*" element={<h2 className="title-2">404</h2>} />
          <Route path="/Market/bag/" element={<Bag />} />
        </Routes>
      </main>
    </Fragment>
  )
}

export default App;