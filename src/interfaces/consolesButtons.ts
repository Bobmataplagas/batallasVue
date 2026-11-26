import type { consola } from '@/interfaces/games.interface'
import n64 from '@/assets/images/n64.jpg'
import gameCube from '@/assets/images/gamecube.jpg'
import gameBoyAdvance from '@/assets/images/gba.jpg'
import ds from '@/assets/images/ds.jpg'
import wii from '@/assets/images/wii.gif'
import threeDs from '@/assets/images/3ds.jpg'
import playStation from '@/assets/images/ps1.gif'

export interface consoleButton {
    section: consola
    image: string
    alt: string
}

export const consoleButtons: consoleButton[] = [
    { section: 'Nintendo 64', image: n64, alt: 'Nintendo 64' },
    { section: 'Nintendo GameCube', image: gameCube, alt: 'Nintendo GameCube' },
    { section: 'Game Boy Advance', image: gameBoyAdvance, alt: 'Game Boy Advance' },
    { section: 'Nintendo DS', image: ds, alt: 'Nintendo DS' },
    { section: 'Nintendo Wii', image: wii, alt: 'Nintendo Wii' },
    { section: 'Nintendo 3DS', image: threeDs, alt: 'Nintendo 3DS' },
    { section: 'PlayStation 1', image: playStation, alt: 'PlayStation 1' },
] as const

