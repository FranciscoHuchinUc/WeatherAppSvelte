<script>
	// Props
	export let icon;
	export let text;
</script>

<div class="w-44 h-36 max-w-full flex mx-auto mt-6">
	<img src={`/icon/${icon}.png`} alt={text} class="object-contain" />
</div>
