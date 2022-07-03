<script>
	export let humidity;
	export let windSpeed;
	export let feelsLike;
</script>

<footer
	class="absolute left-4 right-4 bottom-2 flex justify-around text-center px-3 py-2 rounded-xl border-2 border-gray-500"
>
	<div>
		<span class="block">{humidity}%</span>
		<strong class="text-gray-700 font-semibold">Humidity</strong>
	</div>
	<div>
		<span class="block">{windSpeed} Km/h</span>
		<strong class="text-gray-700 font-semibold">Wind Speed</strong>
	</div>
	<div>
		<span class="block">{feelsLike}°</span>
		<strong class="text-gray-700 font-semibold">Feels Like</strong>
	</div>
</footer>
