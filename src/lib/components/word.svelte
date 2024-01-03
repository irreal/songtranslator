<script lang="ts">
	import type { SongWord } from '$lib/song.model';
	export let word: SongWord;
	export let highlighted = false;
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher<{ highlightWord: {} }>();
</script>

<span
	role="contentinfo"
	class={`${highlighted ? 'bg-yellow-500' : ''}`}
	on:mouseenter={() => dispatch('highlightWord', {})}>{word.text}</span
>
