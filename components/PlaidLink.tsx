import { createLinkToken, exchangePublicToken } from '@/lib/actions/user.actions';
import { useRouter } from 'next/navigation';
import React, { useCallback, useEffect, useState } from 'react'
import {PlaidLinkOnSuccess, PlaidLinkOptions, usePlaidLink} from 'react-plaid-link'


const PlaidLink = ({user,variant}: PlaidLinkProps) => {
    const router = useRouter()
    const [token, setToken] = useState('');
    useEffect(() => {
      const getLinkToken = async () => {
        const data = await createLinkToken(user);
        setToken(data?.linkToken)
     }       
      getLinkToken();
    }, [user])
    
    const onSuccess = useCallback<PlaidLinkOnSuccess>( async (public_token:string) => {   
        await exchangePublicToken({publicToken : public_token,user})
        router.push('/') 
      },
      [user]
    )
    
    const config: PlaidLinkOptions = {
        token,
        onSuccess
    }
    const {open,ready} = usePlaidLink(config)
  return (
    <>
    {variant === 'primary'?(
        <button onClick={()=> open()}
        disabled={!ready} className='plaidlink-primary'>
            CONNECT BANK
        </button>
    ): variant === 'ghost'?(
        <button>
            CONNECT BANK
        </button>
    ):(
        <button>
            CONNECT BANK
        </button>
    )
    }
    </>
  )
}

export default PlaidLink
