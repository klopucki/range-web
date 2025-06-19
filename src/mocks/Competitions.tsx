import {Competition} from "../types/competitions/Competition.tsx";

export const competitions: Competition[] = [
    {
        id: 1,
        title: 'Yearly Competitions',
        date: '12-23-2025',
        registrationDate: '12-15-2025',
        extendsLicence: false,
        description: 'The Yearly Competitions is an exciting event where top competitors will showcase\n' +
            '                            their skills. Don\'t miss your chance to participate or cheer them on!',
        img: 'https://picsum.photos/150/100?random=1',
        isClosed: false
    },
    {
        id: 2,
        title: 'FBI Test',
        date: '12-23-2025',
        registrationDate: '12-15-2025',
        extendsLicence: false,
        description: 'Test your skills as an FBI agent!',
        img: 'https://picsum.photos/150/100?random=2',
        isClosed: false
    },
    {
        id: 3,
        title: 'PIRO',
        date: '12-23-2025',
        registrationDate: '12-15-2025',
        extendsLicence: true,
        description: 'What happens when you eat breakfast in a restaurant during terrorists invation? Are you able to survive?',
        img: 'https://picsum.photos/150/100?random=3',
        isClosed: true
    },
    {
        id: 4,
        title: 'COMMANDO RUNNER',
        date: '12-23-2025',
        registrationDate: '12-15-2025',
        extendsLicence: false,
        description: 'Run forest Run!!!',
        img: 'https://picsum.photos/150/100?random=4',
        isClosed: true
    },
    {
        id: 5,
        title: 'Last Chance Competition',
        date: '12-23-2025',
        registrationDate: '12-15-2025',
        extendsLicence: false,
        description: 'No enough starts to extend licence? This is your time. Start this year and we will see each other next year',
        img: 'https://picsum.photos/150/100?random=5',
        isClosed: true
    },
    {
        id: 6,
        title: 'Police test',
        date: '12-23-2025',
        registrationDate: '12-15-2025',
        extendsLicence: false,
        description: 'Not possible to pass it!!!',
        img: 'https://picsum.photos/150/100?random=6',
        isClosed: true
    },
    {
        id: 7,
        title: 'Duck shoots',
        date: '12-23-2025',
        registrationDate: '12-15-2025',
        extendsLicence: false,
        description: 'Have you evet shoot to duck? Now you have a change to try it. Get your shotgun and try yourself!',
        img: 'https://picsum.photos/150/100?random=7',
        isClosed: true
    }
];

export const registeredShooters = [
    {
        shooterId: 1,
        eventId: 2
    },
    {
        shooterId: 1,
        eventId: 3
    },
    {
        shooterId: 2,
        eventId: 2
    },
    {
        shooterId: 3,
        eventId: 2
    },
    {
        shooterId: 4,
        eventId: 2
    },
    {
        shooterId: 5,
        eventId: 2
    },
    {
        shooterId: 3,
        eventId: 1
    },
    {
        shooterId: 3,
        eventId: 3
    },
]