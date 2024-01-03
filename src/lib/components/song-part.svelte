<script lang="ts">
	import type { SongPart } from '$lib/song.model';
	import { createEventDispatcher } from 'svelte';
	import Word from './word.svelte';

	const dispatch = createEventDispatcher<{
		partChanged: {};
		highlightChanged: { word: number; line: number };
	}>();

	export let songPart: SongPart;
	export let highlighted = false;

	let highlightedLine = -1;
	let highlightedWord = -1;

	function lineCb(idx: number) {
		highlightedLine = idx;
		highlightedWord = -1;
		dispatch('highlightChanged', { word: highlightedWord, line: highlightedLine });
	}
	function wordCb(idx: number) {
		highlightedWord = idx;
		dispatch('highlightChanged', { word: highlightedWord, line: highlightedLine });
	}

	function partChangedCb() {
		dispatch('partChanged', {});
	}
</script>

<div
	class={`border-[1px] border-black p-4 relative ${highlighted ? 'bg-red-500' : ''}`}
	on:mouseenter={() => partChangedCb()}
	role="contentinfo"
>
	<div class={`absolute left-1/2 top-[-15px] 	`}>
		{songPart.type}
	</div>
	{#each songPart.lyrics as lyrics, idx}
		<div
			role="contentinfo"
			class={`${highlighted && highlightedLine === idx ? 'bg-blue-500' : ''} `}
			on:mouseenter={() => lineCb(idx)}
		>
			{#each lyrics.words as word, idxWord}
				<Word
					{word}
					highlighted={highlighted && highlightedLine === idx && highlightedWord === idxWord}
					on:highlightWord={() => wordCb(idxWord)}
				/>{' '}
			{/each}
		</div>
	{/each}
</div>
