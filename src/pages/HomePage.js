import React from 'react';
import { Link } from 'react-router-dom'
import Toolbar from '../components/Toolbar'

export default function HomePage() {
    return (
        <div className='home__page'>
            <Toolbar />
            <p className='home__navigation'>Forum/</p>
            <div className='home'>

                <div className="home__topics">
                    <p>Horror</p>

                    <div className='topic__container'>
                        <Link to='/stories'>Horror Stories</Link>
                    </div>

                    <div className='topic__container'>
                        <Link to='/accidents'>Terible Accidents</Link>
                    </div>

                    <div className='topic__container'>
                        <Link to='/myth'>Horror Myths</Link>

                    </div>
                </div>

                <div className="home__topics">
                    <p>Disscussions</p>

                    <div className='topic__container'>
                        <Link to='/chat'>Free Chat Disscussion</Link>
                    </div>

                    <div className='topic__container'>
                        <Link to='/lost'>Lost/Stolen/Missing/Found</Link>
                    </div>

                    <div className='topic__container'>
                        <Link to='/partner'>Find A Friend</Link>
                    </div>

                    <div className='topic__container'>
                        <Link to='/partner'>Users Reports</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}