declare module 'styled-components' {
    export interface DefaultTheme extends Theme { } 
}

export default interface Theme {
    background: string,
    body: Color,
    colors: (Colors),
    pages: {
        home: {
            background: Color,
        }
    }
}

type Colors = {
    primary: string,
    white: string,
    delete: string,
    black: string,
    gray: string,
    purple: string,
}

type Color = '#ed1c24' | '#fff' | '#000' | string
