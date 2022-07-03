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
		class="w-full p-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-2 focus:border-gray-300"
	/>
</form>
