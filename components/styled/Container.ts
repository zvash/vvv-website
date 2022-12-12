import styled from 'styled-components'
import mixins from '../../styles/mixins'

const { desktopLarge, desktopSmall, tabletLarge } = mixins

const Container = styled.div`
    width: 100%;
    margin-right: auto;
    margin-left: auto;
    max-width: 1252px;
    padding-left: 16px;
    padding-right: 16px;
    box-sizing: border-box;
    
    ${desktopLarge} {    
        max-width: 1252px;
    }

    ${desktopSmall} { 
        max-width: 960px;
    }

    ${tabletLarge} {
        max-width: 100%;
    }
`

export default Container
