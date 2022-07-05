<script>
	import { globalState } from '../store/weather.global.js';
	import { getWeatherFrom } from '../services/weather.js';
	import WeatherSearch from '../components/weather.search.svelte';
	import WeatherFooter from '../components/weather.footer.svelte';
	import WeatherContent from '../components/weather.content.svelte';

	let weatherPromise = {};

	// Global State - Weather Controller Search
	globalState.set(getWeatherFrom());
	globalState.subscribe((value) => {
		weatherPromise = value;
	});
</script>

<svelte:head>
	<!-- elements go here -->
	<title>Weather App</title>
</svelte:head>

{#await weatherPromise then weather}
	<WeatherSearch />
	<WeatherContent {weather} />
	<WeatherFooter
		humidity={weather.humidity}
		windSpeed={weather.windSpeed}
		feelsLike={weather.feelsLike}
	/>
{/await}
