export type Song = {
	name: string;
	author: string;
	versions: SongVersion[];
	references: Reference[];
};

export type SongVersion = {
	type: 'original' | 'translation-literal' | 'translation-interpretation';
	id: string;
	versionAuthor: string;
	language: string;
	references: Reference[];
	parts: SongPart[];
};

export type SongPart = SongIntro | SongVerse | SongChorus | SongBridge | SongOutro;

export type SongLyrics = { lyrics: SongLine[]; references: Reference[] };

export type SongLine = { words: SongWord[]; references: Reference[] };

export type Reference = {
	versionId: string;
	part: number;
	line: number;
	word: number;
};

export type SongWord = { text: string; references: Reference[] };

export type SongIntro = {
	type: 'intro';
} & SongLyrics;

export type SongVerse = {
	type: 'verse';
} & SongLyrics;

export type SongChorus = {
	type: 'chorus';
} & SongLyrics;

export type SongBridge = {
	type: 'bridge';
} & SongLyrics;

export type SongOutro = {
	type: 'outro';
} & SongLyrics;
