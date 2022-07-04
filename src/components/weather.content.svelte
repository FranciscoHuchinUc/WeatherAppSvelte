<script>
	export let weather;

	import WeatherIcon from '../components/weather.icon.svelte';
	import FaMapMarkerAlt from 'svelte-icons/fa/FaMapMarkerAlt.svelte';
</script>

<section class="p-10 text-center">
	<div class="flex flex-row items-center gap-4 text-center justify-center">
		<span class="w-4 h-4 text-white"><FaMapMarkerAlt /></span>
		<h1 class="font-medium text-white">
			{weather.locationName}, {weather.locationRegion}
		</h1>
	</div>
	<WeatherIcon icon={weather.conditionCode} text={weather.conditionText} />
	<h2 class="font-semibold text-8xl text-white uppercase mt-8">{weather.temperature}°</h2>
	<h3 class="font-light text-white text-3xl">
		{weather.conditionText}
	</h3>
</section>
