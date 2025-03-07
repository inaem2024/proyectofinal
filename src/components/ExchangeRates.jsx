import { useState, useEffect } from 'react';
import { getCurrencyRates } from '../services/api';

export const ExchangeRates = () => {
    const [rates, setRates] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadRates = async () => {
            try {
                setLoading(true);
                setError(null);
                const data = await getCurrencyRates();
                setRates(data.rates);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        loadRates();
    }, []);

    if (loading) {
        return <div className="loading">Cargando tipos de cambio...</div>;
    }

    if (error) {
        return (
            <div className="error-message">
                <p>❌ {error}</p>
                <button onClick={() => window.location.reload()}>
                    Intentar de nuevo
                </button>
            </div>
        );
    }

    return (
        <div className="exchange-rates">
            <h2>Tipos de cambio actuales</h2>
            <div className="rates-grid">
                {rates && Object.entries(rates)
                    .filter(([currency]) => ['USD', 'GBP', 'JPY', 'CHF'].includes(currency))
                    .map(([currency, rate]) => (
                        <div key={currency} className="rate-item">
                            <span className="currency">{currency}</span>
                            <span className="rate">{rate.toFixed(2)}</span>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};
