import axios from 'axios';

// Configuración base de axios
const api = axios.create({
    baseURL: 'https://api.exchangerate-api.com/v4/latest',
    timeout: 5000
});

// Servicio para obtener tipos de cambio
export const getCurrencyRates = async (baseCurrency = 'EUR') => {
    try {
        const response = await api.get(`/${baseCurrency}`);
        return response.data;
    } catch (error) {
        // Manejo específico de errores
        if (error.response) {
            // Error de respuesta del servidor
            throw new Error(`Error del servidor: ${error.response.status}`);
        } else if (error.request) {
            // Error de red
            throw new Error('Error de red: No se pudo conectar con el servidor');
        } else {
            // Otros errores
            throw new Error(`Error: ${error.message}`);
        }
    }
}
