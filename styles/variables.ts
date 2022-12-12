import { Colors } from "./themes/Theme";

export const fontFamily = ``;

export const mediaSizes = {
    desktopLarge: '1440px',
    desktopSmall: '1200px',
    tabletLarge: '992px',
    tabletSmall: '768px',
    mobileLarge: '576px',
    mobileSmall: '480px',
}

export type MediaSize = `${string}px`;

export const colors: Colors = {
    primary: "rgb(31, 41, 55)",
    white: '#fff',
    delete: '#FF7664',
    black: '#2F3234',
    gray: 'rgb(75, 85, 99)',
    purple: 'rgb(99, 102, 241)'
}

export const headerHeight = '80px'
export const mobileHeaderHeight = '64px'