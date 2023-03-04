
import { AppTheme } from './theme'
import { AppRouter } from './router/AppRouter'
import { AuthProvider } from './auth/context/auth'

function App() {

  return (
    <AppTheme>
      <AuthProvider>
        <AppRouter />
      </AuthProvider>
    </AppTheme>
  )
}

export default App
