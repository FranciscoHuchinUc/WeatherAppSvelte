<script>
	export let weather;

	import WeatherIcon from '../components/weather.icon.svelte';
</script>

<section class="p-10">
	<h1 class="font-normal text-gray-800 uppercase">
		{weather.locationName}
		<sup class="bg-blue-400 py-1 px-2 text-[10px] text-gray-100 font-medium rounded-full"
			>{weather.locationRegion}</sup
		>
	</h1>
	<h2 class="font-normal text-7xl text-gray-800 uppercase mt-8">{weather.temperature}°</h2>
	<h3 class="font-medium text-4xl rotate-90 float-right text-start opacity-20">
		{weather.conditionText}
	</h3>
	<WeatherIcon icon={weather.conditionIcon} text={weather.conditionText} />
</section>
