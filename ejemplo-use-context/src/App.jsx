

import './App.css'
import { UserProfile } from "./components/UserProfile";
import { UserProvider } from "./context/UserContext";
function App() {
  

  return (
    <>
      <UserProvider>
      <div >
        <h1 >Aplicación de ejemplo con useContext</h1>
        <UserProfile />
      </div>
    </UserProvider>
    </>
  )
}

export default App
