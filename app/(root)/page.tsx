import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import React from 'react'

const loggedIn = {firstName: 'Aaryan' , lastName: 'Chaudhary', email: 'aaryancdry1@gmail.com'}

const Home = () => {
  return (
    <section className='home'>
      <div className="home-content">
        <header className='home-header'>
          <HeaderBox
          type="greeting"
          title="Welcome"
          user = {loggedIn?.firstName || 'Guest'}
          subtext="Access and manage your accounts and transactions efficiently."
           />

           <TotalBalanceBox
           accounts={[]}
           totalBanks= {1}
           totalCurrentBalance={1250.25}
           />
        </header>
        RECENT TRANSACTIONS
      </div>
      <RightSidebar
      user={loggedIn}
      transactions={[]}
      banks={[{currentBalance: 123.50},{currentBalance: 500.50}]}
       />
    </section>
  )
}

export default Home
