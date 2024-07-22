
import './App.css'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'

function App() {

  const isUserLoggedIn = true

  return (
    <div>
      {
        isUserLoggedIn ?
          <HomePage /> :
          <LoginPage />
      }
    </div>
  )
}

export default App
