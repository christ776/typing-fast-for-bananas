import faker from 'faker'

export const generateWords = (count = 10): Array<string> => {
    return new Array(count).fill(undefined).map((_) => faker.random.word())
}
