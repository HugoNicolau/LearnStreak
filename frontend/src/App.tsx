import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <div>
      <header>
        <h1>LearnStreak</h1>
        {/* Add navigation links */}
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/login">Login</a></li>
            <li><a href="/register">Register</a></li>
            <li><a href="/dashboard">Dashboard</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <h2>Welcome to LearnStreak!</h2>
        <p>Your one-stop solution for learning and tracking your progress.</p>
        <img src={viteLogo} className="logo" alt="Vite logo" />
        <img src={reactLogo} className="logo react" alt="React logo" />
        <Outlet/>
      </main>
    </div>
  )
}

export default App
