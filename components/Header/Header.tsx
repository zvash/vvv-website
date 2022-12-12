import { signOut } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Container from '../styled/Container'
import { HeaderWrapper } from './styles'


const Header = () => {
    return (
        <HeaderWrapper>
            <Container>
                <Link href="/">
                    <Image src="/logo.png" width={50} height={50} alt="Logo" />
                </Link>
                <div className="Actions">
                    <button className="Logout" onClick={() => signOut()}>
                        <Image src="/power.svg" width={24} height={24} alt="Logout" />
                    </button>
                </div>
            </Container>
        </HeaderWrapper>
    )
}

export default Header