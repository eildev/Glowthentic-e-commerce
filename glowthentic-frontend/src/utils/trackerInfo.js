export const getGeoInfo = async () => {
    try {
        const response = await fetch('https://ipapi.co/json/');
        const data = await response.json();
        return data.country || 'Unknown';
    } catch (error) {
        console.error('Error fetching geo info:', error);
        return 'Unknown';
    }
};