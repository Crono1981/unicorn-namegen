import { readdir } from 'fs/promises'
import path from 'path'
import bodyParser from 'body-parser'
import express, { Request, Response } from 'express'

function getRandomSegment(array: string[], isNoneAllowed: boolean) {
    let max: number = array.length

    if (isNoneAllowed) max += array.length

    const index = Math.floor(Math.random() * max)

    if (index < array.length) {
        return array[index]
    }

    return ''
}

async function getRandomImageUrl() {
    const dirPath = path.join(process.cwd(), './static/images/unicorns')

    const files = await readdir(dirPath)

    const index = Math.floor(Math.random() * files.length)

    return files[index]
}


const app = express()

const titles = [
    'Princesse',
    'Son Altesse',
    'Dame',
    'Lady',
    'Mademoiselle',
    'Comtesse'
]
const names = [
    'Véronique',
    'Véronique',
    'Véronique',
    'Stardust',
    'Fleur',
    'Perle',
    'Comète',
    'Mélodie',
    'Émeraude',
    'Bella',
    'Joséphine',
    'Angela',
    'Élizabeth',
    'Storm',
    'Canelle',
    'Praline',
    'Luna',
    'Rogacien',
    'Clochette',
    'Galipette'
]
const aliases = [
    'la pouliche',
    'la jument',
    'la créature',
    'la merveille',
    'la beauté',
    'l\'étoile',
    'la force de la nature',
    'la tempête',
    'la monture',
    'la cheffe',
    'la guerrière',
    'la combattante',
    'la défenseuse',
    'la déesse',
    'la souveraine',
    'la protectrice'
]

const qualificatives = [
    'superbe',
    'mystique',
    'foudroyante',
    'étincelante',
    'venue du firmament',
    'sans peur',
    'coquine',
    'taquine',
    'de l\'infini',
    'du monde astral',
    'au service de la justice',
    'adorable',
    'full cute',
    'ratoureuse',
    'qui combat le crime',
    'à la défense de l\'univers',
    'des éléments',
    'en charge de garder la paix',
    'ambassadrice des câlins',
    'à la peau douce'
]

app.use(bodyParser.json())
app.get('/new-unicorn', async (_req: Request, res: Response) => {
    const part1: string = getRandomSegment(titles, true)
    const part2: string = getRandomSegment(names, false)
    const part3: string = getRandomSegment(aliases, false)
    const part4: string = getRandomSegment(qualificatives, false)

    let name: string = `${part2}, ${part3}`

    if (part1) name = `${part1} ${name}`
    if (part4) name = `${name} ${part4}`

    const imageUrl = await getRandomImageUrl()

    res.json({ name, imageUrl })
})

export default app
