<script lang="ts">
	import type { SongVersion } from '$lib/song.model';
	import SongPart from './song-part.svelte';

	export let songVersion: SongVersion;
	let highlightedPart = -1;
	function highlightedPartCb(idx: number) {
		highlightedPart = idx;
	}
</script>

{#each songVersion.parts as part, idx}
	<SongPart
		songPart={part}
		highlighted={highlightedPart === idx}
		on:highlightChanged
		on:partChanged={() => highlightedPartCb(idx)}
	/>
{/each}
