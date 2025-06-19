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
        img: 'https://picsum.photos/150/100?random=1'
    },
    {
        id: 2,
        title: 'FBI Test',
        date: '12-23-2025',
        registrationDate: '12-15-2025',
        extendsLicence: false,
        description: 'Test your skills as an FBI agent!',
        img: 'https://picsum.photos/150/100?random=2'
    },
    {
        id: 3,
        title: 'PIRO',
        date: '12-23-2025',
        registrationDate: '12-15-2025',
        extendsLicence: true,
        description: 'What happens when you eat breakfast in a restaurant during terrorists invation? Are you able to survive?',
        img: 'https://picsum.photos/150/100?random=3'
    },
    {
        id: 4,
        title: 'COMMANDO RUNNER',
        date: '12-23-2025',
        registrationDate: '12-15-2025',
        extendsLicence: false,
        description: 'Run forest Run!!!',
        img: 'https://picsum.photos/150/100?random=4'
    }
];