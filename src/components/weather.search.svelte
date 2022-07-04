<script>
	import { globalState } from '../store/weather.global.js';
	import { getWeatherFrom } from '../services/weather.js';

	async function onSubmit(e) {
		const formData = new FormData(e.target);

		const data = {};
		formData.forEach((value, key) => (data[key] = value));
		globalState.set(getWeatherFrom(data.city));
	}
</script>

<form on:submit|preventDefault={onSubmit}>
	<input
		type="text"
		name="city"
		placeholder="Enter city name"
		class="w-full bg-transparent text-white px-5 py-2 outline-none rounded-xl border border-[#404855]"
	/>
</form>
