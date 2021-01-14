const STATS_API_BASE_URL = 'https://api.covid19api.com';

const getSammaryData = async () =>{
    const response = await fetch(`${STATS_API_BASE_URL}/summary`);
    const data = await response.json();

    return data;
}

const getAllCountries = async () =>{
    const response = await fetch(`${STATS_API_BASE_URL}/countries`);
    const data = await response.json();

    return data;
}

export {getSammaryData, getAllCountries};