<script>
	// Props
	export let icon;
	export let text;
</script>

<div class="w-44 max-w-full flex mx-auto mt-6 bg-cover">
	<img src={`/icon/${icon}.png`} alt={text} class="w-full" />
</div>
