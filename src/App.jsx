import RootLayout from "./Layout/RootLayout"
import { BrowserRouter as Router, Routes, Route  } from "react-router-dom"
import BuyerPage from "./Buyer/BuyerPage"


function App() {
 
  
  return (
    <Router >
        < Routes >
            <Route path="/" element={< RootLayout />} />
            <Route path="/Buyer" element={<BuyerPage/>} />
        </Routes>
      
    </Router>
  )
}

export default App
