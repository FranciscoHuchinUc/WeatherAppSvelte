<script>
	import '../app.css';
</script>

<div
	class="h-[600px] w-[400px] max-w-full block shadow-md rounded-lg border relative pl-3 pr-3 pt-3"
>
	<slot />
</div>

<style>
	@import url('http://fonts.cdnfonts.com/css/gordita');

	:global(body) {
		background: #fdfdfd;
		font-family: 'Gordita', sans-serif;
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100vh;
	}

	:global(*, *::after, *::before) {
		padding: 0;
		margin: 0;
		box-sizing: border-box;
	}
</style>
