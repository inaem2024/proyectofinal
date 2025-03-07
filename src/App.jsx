import { Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import Navigation from './components/Navigation'
import { ExchangeRates } from './components/ExchangeRates'

// Componentes de página
const Home = () => (
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <h1 className="text-3xl font-bold text-gray-900">Bienvenido a Tu Banco</h1>
    <p className="mt-4 text-gray-600">Gestiona tus finanzas de manera fácil y segura</p>
  </div>
)

const Movements = () => (
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <h2 className="text-2xl font-bold text-gray-900">Tus Movimientos</h2>
    {/* Aquí irá el componente de movimientos */}
  </div>
)

const Transfers = () => (
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <h2 className="text-2xl font-bold text-gray-900">Transferencias</h2>
    {/* Aquí irá el componente de transferencias */}
  </div>
)

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navigation />
      <Toaster position="top-right" />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movements" element={<Movements />} />
          <Route path="/transfers" element={<Transfers />} />
          <Route path="/exchange" element={<ExchangeRates />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
