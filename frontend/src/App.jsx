
import { Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'

import Catalog from './pages/Catalog'
import AdminPage from './pages/AdminPage'
import { DolciProvider } from './contexts/DolciContext'
function App() {

  return (
    <>
      <Navigation />
      <DolciProvider>
        <Routes>
          <Route path='/catalog' Component={Catalog} />
          <Route path='/admin' Component={AdminPage} />
        </Routes>
      </DolciProvider>
    </>
  )
}

export default App

/* acce
headers.append('Access-Control-Allow-Origin', 'http://localhost:3000');
headers.append('Access-Control-Allow-Credentials', 'true');
} */