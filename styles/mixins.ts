import { css } from 'styled-components';
import { MediaSize, mediaSizes } from './variables';

export const mixins = {
    below: (size: MediaSize) => `@media (max-width: ${size})`,
    above: (size: MediaSize) => `@media (min-width: ${size})`,
    desktopLarge: ()=> `@media (max-width: ${mediaSizes.desktopLarge})`,
    desktopSmall: () => `@media (max-width: ${mediaSizes.desktopSmall})`,
    tabletLarge: () => `@media (max-width: ${mediaSizes.tabletLarge})`,
    tabletSmall: () => `@media (max-width: ${mediaSizes.tabletSmall})`,
    mobileLarge: () => `@media (max-width: ${mediaSizes.mobileLarge})`,
    mobileSmall: () => `@media (max-width: ${mediaSizes.mobileSmall})`,
}

export const hideScrollbar = css`
    /* Hide scrollbar for IE, Edge and Firefox */
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
    
    /* Hide scrollbar for Chrome, Safari and Opera */
    &::-webkit-scrollbar {
    display: none;
    }
`

export default mixins
