<script lang="ts">
	import type { Song } from '$lib/song.model';
	import SongVersion from './song-version.svelte';

	export let song: Song;

	let highlightedPart = -1;
	let highlightedLine = -1;
	let highlightedWord = -1;

	function highlightCb({ detail: { word, line } }: CustomEvent<{ word: number; line: number }>) {
		highlightedLine = line;
		highlightedWord = word;
	}
</script>

<div class="flex flex-col justify-center items-center gap-2">
	<div>Naziv: {song.name}</div>
	<div>Autor: {song.author}</div>
	<div class="flex flex-col gap-6">
		{#each song.versions as version, idx}
			<SongVersion
				songVersion={version}
				on:highlightChanged={highlightCb}
				on:partChanged={() => (highlightedPart = idx)}
			/>
		{/each}
	</div>
</div>
