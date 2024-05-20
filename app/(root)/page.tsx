import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import React from 'react'

const Home = () => {
    const loggedIn = {
        firstName: "Rishab",
        lastName: "Sah",
        email: "abc@xyz.com"
    }
    return (
        <section className='home'>
            <div className='home-content'>
                <header className='home-header'>
                    <HeaderBox
                        type="greeting"
                        title="Welcome"
                        user={loggedIn?.firstName || "Guest"}
                        subtext="Access and manage your account and transactions efficiently"
                    />
                    <TotalBalanceBox
                        accounts={[]}
                        totalBanks={1}
                        totalCurrentBalance={12500000.35}
                    />
                </header>
                Recent Transactions
            </div>
            <RightSidebar user={loggedIn}
                transactions={[]}
                banks={[{ currentBalance: 1333000 }, {
                    currentBalance: 500000
                }]}
            />
        </section>
    )
}

export default Home