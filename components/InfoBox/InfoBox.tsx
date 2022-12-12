import React, { FC } from 'react'
import { Colors } from '../../styles/themes/Theme'
import { InfoBoxWrapper } from './styles'

interface InfoBoxProps {
    title: string
    value: string | number
    color: Colors | string
}

const InfoBox: FC<InfoBoxProps> = ({ title, value, color = 'white' }) => {
    return (
        <InfoBoxWrapper>
            <h4>{title}</h4>
            <div>{value}</div>
        </InfoBoxWrapper>
    )
}

export default InfoBox