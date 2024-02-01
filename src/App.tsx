import './App.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import ScreenHome from './widgets/screens/ScreenHome'

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: Infinity,
        refetchOnWindowFocus: false,
      },
    },
  })
  return (
    <QueryClientProvider client={queryClient}>
      <ScreenHome />
    </QueryClientProvider>
  )
}

export default App
