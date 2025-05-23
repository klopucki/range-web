import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import Backend from 'i18next-http-backend';

i18n
    .use(Backend)
    .use(initReactI18next)
    .init({
        backend: {
            loadPath: '/lang/{{lng}}.json',
        },
        lng: 'pl', // todo change language button
        interpolation: {
            escapeValue: false,
        },
    });
