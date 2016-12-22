const API_KEY = 'efdd8131247971037e8b3299672be35a';
const root_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;                      

export const FETCH_WEATHER = 'FETCH_WEATHER';

esport function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},us`;

	return {
		type: FETCH_WEATHER
	}
}