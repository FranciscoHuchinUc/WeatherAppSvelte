<script>
	import { getWeatherFrom } from '../services/weather.js';
	import WeatherFooter from '../components/weather.footer.svelte';
	import WeatherIcon from '../components/weather.icon.svelte';
	const weatherPromise = getWeatherFrom();
</script>

{#await weatherPromise then weather}
	<section>
		<h1>{weather.locationName}</h1>
		<h2>{weather.temperature}°</h2>
		<h3>{weather.conditionText}</h3>
		<WeatherIcon icon={weather.conditionIcon} text={weather.conditionText} />
		<h4>{weather.windSpeed}</h4>
	</section>
	<WeatherFooter />
{/await}

<style>
	section {
		padding: 32px 0 16px 16px;
	}
	h1 {
		font-weight: 400;
		color: #333;
		text-transform: uppercase;
	}
	h2 {
		font-weight: 400;
		font-size: 74px;
		color: #333;
		text-transform: uppercase;
	}
	h3 {
		font-weight: 500;
		transform: rotate(-90deg);
		position: absolute;
		top: 80px;
		right: 0px;
	}
</style>
