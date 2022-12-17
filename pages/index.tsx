import { GetServerSideProps, NextPage } from 'next'
import { Session, unstable_getServerSession } from 'next-auth'
import { getSession, useSession } from 'next-auth/react'
import Head from 'next/head'
import Button from '../components/styled/Button'
import withNavigation from '../hoc/withNavigation'
import { Box, DashboardWrapper } from '../styles/pages'
import { authOptions } from '../pages/api/auth/[...nextauth]'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useCopyToClipboard } from 'react-use'

const Index: NextPage = () => {

  const { data: session } = useSession()

  const [subscription, setSubscription] = useState('')
  const [loading, setLoading] = useState(false)
  const [copied, setCopied] = useState(false)
  const [copyState, copyToClipboard] = useCopyToClipboard();

  useEffect(() => {
    if (session) {
      setLoading(true)
      axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/accounts/subscription`, {
        headers: {
          "Authorization": `Bearer ${session.user?.token}`
        }
      })
        .then(res => {
          if (res.data.data.subscription_link != null) {
            setSubscription(`${process.env.NEXT_PUBLIC_APP_URL}${res.data.data.subscription_link}`)
          }
        })
        .catch(err => {
          console.log(err.response)
        })
        .finally(() => {
          setLoading(false)
        })
    }
  }, [session])

  useEffect(() => {
    if (copyState.value) {
      setCopied(true)
      setTimeout(() => {
        setCopied(false)
      }, 5000);
    }
  }, [copyState])

  const createSubscription = () => {
    if (session) {
      setLoading(true);
      axios.post(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/accounts`, {}, {
        headers: {
          "Authorization": `Bearer ${session.user?.token}`
        }
      })
        .then(res => {
          setSubscription(`${process.env.NEXT_PUBLIC_APP_URL}${res.data.data.subscription_link}`)
        })
        .catch(err => {
          console.log(err.response)
        })
        .finally(() => {
          setLoading(false)
        })

    }
  }



  return (
    <DashboardWrapper>
      <Head>
        <title>VPN Manager</title>
        <meta name="description" content="VPN Manager" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box>
        <h2>Hello, </h2>

        {subscription ? (
          <div className="InfoWrapper">
            {/* <h3>You have <strong>3</strong> invites remaining!</h3> */}
            <h4>Your configuration link</h4>
            <div className='DetailRow'>
              <div>{subscription}</div>
              <button onClick={() => copyToClipboard(subscription)}>
                copy
                <span className={copied ? 'Copied' : ''}>Copied!</span>
              </button>
            </div>
          </div>
        ) : (
          <div className="Actions">
            <Button onClick={() => createSubscription()} disabled={loading}>{loading ? 'Loading' : 'Create subscription'}</Button>
          </div>
        )}

      </Box>


    </DashboardWrapper>
  )
}

export default withNavigation(Index)