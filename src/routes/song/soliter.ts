import type { SongLine, Song } from '$lib/song.model';

function createLines(text: string): SongLine[] {
	return text.split('\n').map((l) => createLine(l));
}
function createLine(text: string): SongLine {
	return { words: text.split(' ').map((w) => ({ text: w, references: [] })), references: [] };
}

export const Soliter: Song = {
	name: 'Soliter',
	author: 'Đorđe Balašević',
	references: [],
	versions: [
		{
			type: 'original',
			language: 'sr',
			versionAuthor: 'Đorđe Balašević',
			references: [],
			id: 'original',
			parts: [
				{
					type: 'verse',
					lyrics: createLines(`Naš soliter je super, brat je na glavi bratu,
						al' da krenemo redom, znači na prvom spratu,
						žive dobri južnjaci,
						znam ih samo po faci i po pesmama.`),
					references: []
				},
				{
					type: 'verse',
					lyrics: createLines(`A nad njima se viju tići junačke krvi.
						Jes', na drugom su spratu, al' su inače prvi.
						Kažu: "Uzdaj se u se,
						u se i u svoje Ruse, pa da guslamo!"`),
					references: []
				},
				{
					type: 'chorus',
					lyrics: createLines(`Naš soliter je veselo zdanje, talasa masa, ljulja ga stalno.
						Sad je doveden u prizemno stanje, al' zamišljen je monumentalno.
						Takvog nema na svetu okruglom, fasada drži, a temelji klize...
						Naš je soliter pod izvesnim uglom, kao slavni toranj iz Pizze.`),
					references: []
				},
				{
					type: 'verse',
					lyrics: createLines(
						`U, na trećem je spratu opštenarodna strava,
						ona dva podstanara traže stanarska prava.
						Zasad parnica fer je,
						dok ne poleti perje kroz naš soliter.`
					),
					references: []
				},
				{
					type: 'verse',
					lyrics: createLines(
						`A na četvrtom sevdah, raja puca od zdravlja.
						Jedni vide svog boga, drugim Gospa se javlja,
						a proleter goloruk
						diže vile na o-ruk, era mermera.`
					),
					references: []
				},
				{
					type: 'chorus',
					lyrics: createLines(`Naš soliter je veselo zdanje, talasa masa, ljulja ga stalno.
						Sad je doveden u prizemno stanje, al' zamišljen je monumentalno.
						Takvog nema na svetu okruglom, fasada drži, a temelji klize...
						Naš je soliter pod izvesnim uglom, kao slavni toranj iz Pizze.`),
					references: []
				},
				{
					type: 'verse',
					lyrics: createLines(
						`Susjed s petoga kata ima pregled od gore:
						jedan prozor na zapad, drugi prozor na more.
						Da se nebi opekel,
						nikad niš ne bu rekel... To je najbolje.`
					),
					references: []
				},
				{
					type: 'verse',
					lyrics: createLines(
						`A na šestem nastropju neki skupovi tužni.
						Ti se ne druže s nama, mi smo suviše južni.
						I kad razmislim malo,
						njima nije baš stalo za naš soliter.`
					),
					references: []
				},
				{
					type: 'chorus',
					lyrics: createLines(`Naš soliter je veselo zdanje, talasa masa, ljulja ga stalno.
						Sad je doveden u prizemno stanje, al' zamišljen je monumentalno.
						Takvog nema na svetu okruglom, fasada drži, a temelji klize...
						Naš je soliter pod izvesnim uglom, kao slavni toranj iz Pizze.`),
					references: []
				}
			]
		}
	]
};
