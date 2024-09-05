import localFont from 'next/font/local';
import { Merriweather } from 'next/font/google';

export const Fontin = localFont({
    src: '../../public/Fontin-Regular.woff',
    display: 'swap',
});

export const Monotype_Corsiva = localFont({
    src: '../../public/MTCORSVA.woff',
    display: 'swap',
});

export const merriWeather = Merriweather({
    subsets: ['latin'],
    weight: ['400', '700', '900'],
    display: 'swap',
    adjustFontFallback: false,
});
