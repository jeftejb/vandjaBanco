import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar';
import TotalBalanceBox from '@/components/TotalBalanceBox';
import React from 'react'

function Home() {
  const loggedIn = {firstName: "Jefte", lastName:"Sambango", email:"jeftesambangojb@gmail.com" };
  return (
    <section className='home'>
      <div className='home-content'>
          <header className='home-home'>
               <HeaderBox 
                 type="greeting"
                 title="Welcome"
                 user = {loggedIn?.firstName || "Guest"}
                 subtext = "Acesse e configure a sua conta e transações eficientemente"
               />

          <TotalBalanceBox
          accounts = {[]} 
          totalBanks = {1}
          totalCurrentBalance = {1250.35}
          />
          </header>
          
          TRANSACOES 
         

      </div>

      <RightSidebar
      user={loggedIn}
      transactions={[]}
      banks={[{currentBalance:2000.50},{
        currentBalance:8000000.50
      }]}
      />

    </section>
  )
}

export default Home