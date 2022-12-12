import React, { FC } from 'react'
import Header from '../components/Header/Header'

const withNavigation = <P extends object>(Component: React.ComponentType<P>):React.FC<P> => {
    return props => (
        <div>
            <Header />
            {<Component {...props} />}
        </div>
    )
}

export default withNavigation