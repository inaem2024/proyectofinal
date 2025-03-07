import { useState, useEffect } from 'react';
import { getCurrencyRates } from '../services/api';
import { toast } from 'react-hot-toast';
import { ArrowTrendingUpIcon, ArrowTrendingDownIcon, ArrowPathIcon } from '@heroicons/react/24/outline';

export default function Dashboard() {
  const [rates, setRates] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadRates = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await getCurrencyRates();
      setRates(data.rates);
      toast.success('Datos actualizados correctamente');
    } catch (err) {
      setError(err.message);
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadRates();
  }, []);

  const mainCurrencies = ['USD', 'GBP', 'JPY', 'CHF'];

  return (
    <div className="min-h-screen bg-gray-100">
      <main className="py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="md:flex md:items-center md:justify-between">
            <div className="min-w-0 flex-1">
              <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
                Panel de Control
              </h2>
            </div>
            <div className="mt-4 flex md:ml-4 md:mt-0">
              <button
                type="button"
                onClick={loadRates}
                disabled={loading}
                className="inline-flex items-center gap-x-2 rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
              >
                <ArrowPathIcon className={`h-5 w-5 ${loading ? 'animate-spin' : ''}`} />
                Actualizar
              </button>
            </div>
          </div>

          {/* Contenido principal */}
          <div className="mt-8">
            {error ? (
              <div className="rounded-md bg-red-50 p-4">
                <div className="flex">
                  <div className="ml-3">
                    <h3 className="text-sm font-medium text-red-800">Error al cargar los datos</h3>
                    <div className="mt-2 text-sm text-red-700">{error}</div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {mainCurrencies.map((currency) => (
                  <div
                    key={currency}
                    className="relative overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:px-6 sm:py-6"
                  >
                    <dt>
                      <div className="absolute rounded-md bg-indigo-500 p-3">
                        {rates && rates[currency] > 1 ? (
                          <ArrowTrendingUpIcon className="h-6 w-6 text-white" aria-hidden="true" />
                        ) : (
                          <ArrowTrendingDownIcon className="h-6 w-6 text-white" aria-hidden="true" />
                        )}
                      </div>
                      <p className="ml-16 truncate text-sm font-medium text-gray-500">
                        EUR/{currency}
                      </p>
                    </dt>
                    <dd className="ml-16 flex items-baseline">
                      <p className="text-2xl font-semibold text-gray-900">
                        {loading ? (
                          <span className="animate-pulse">...</span>
                        ) : (
                          rates && rates[currency]?.toFixed(4)
                        )}
                      </p>
                    </dd>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
