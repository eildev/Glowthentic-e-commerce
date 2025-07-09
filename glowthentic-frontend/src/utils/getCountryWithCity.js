export const getCountryWithCity = async () => {
    try {
        const response = await fetch('https://countriesnow.space/api/v0.1/countries');
        const data = await response.json();
        return data.data || [];
    } catch (error) {
        // console.error('Error fetching geo info:', error);
        return [];
    }
};