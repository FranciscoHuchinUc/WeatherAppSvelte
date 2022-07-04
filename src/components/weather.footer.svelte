<script>
	export let humidity;
	export let windSpeed;
	export let feelsLike;
</script>

<footer
	class="bg-[#1E2126] absolute left-4 right-4 bottom-6 flex justify-around text-center px-6 py-3 rounded-xl"
>
	<div>
		<span class="block font-bold text-white">{humidity}%</span>
		<strong class="text-white font-normal text-sm">Humidity</strong>
	</div>
	<div class="border-l-2 border-r-2 px-6 border-[#2B2F36]">
		<span class="block font-bold text-white">{windSpeed} Km/h</span>
		<strong class="text-white font-normal text-sm">Wind Speed</strong>
	</div>
	<div>
		<span class="block font-bold text-white">{feelsLike}°</span>
		<strong class="text-white font-normal text-sm">Feels Like</strong>
	</div>
</footer>
