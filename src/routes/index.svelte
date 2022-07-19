<script lang="ts">
	import { onMount } from 'svelte';
	import { CodeBlockLowlight } from '../codeblock';

	onMount(() => {
		console.log(
			CodeBlockLowlight.configure({
				HTMLAttributes: {
					class: 'hljs'
				}
			})
		);
	});
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
