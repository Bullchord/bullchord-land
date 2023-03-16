import React from 'react'
import { BarChart, XAxis, YAxis, Tooltip, Legend, Bar } from 'recharts'
import { DefaultPlayer as Video } from 'react-html5video/dist';
import 'react-html5video/dist/styles.css';
import Colorful from '../../assets/colorful.mp4';
import './token.css';


const data = [
    {
        "name": "45%",
        "Ecosystem": 45,
    },
    {
        "name": "20%",
        "Locked": 20,
    },
    {
        "name": "13%",
        "Team": 13,
    },
    {
        "name": "10%",
        "Marketing": 10,
    },
    {
        "name": "2%",
        "Advisor": 2,
    },
    {
        "name": "10%",
        "Presale": 10
    }
]



const Chart = () => {
    return (
        <>
        <div className='bull3_token_head'>
            <div className='bull3_vid-banner'>
            <Video className="video" autoPlay loop muted>
                <source src={Colorful} type="video/mp4"/>
            </Video>             
            <h1>Token</h1>
            </div>
        </div>
        <div className='bull3__chart'>
            <div data-aos='fade-up' className='bull3__content'>
                
                <div className='bull3_metric'>
                    {/* <h1 >Tokenomics</h1> */}
                    <h2>Max Supply: 1,000,000,000 $bullchord</h2>
                    <p className='bull3__eco'>45% - Ecosystem</p>
                    <p className='bull3__lock'>20% - Locked</p>
                    <p className='bull3__team'>13% - Team</p>
                    <p className='bull3__market'>10% - Marketing</p>
                    <p className='bull3__adv'>2% - Advisor</p>
                    <p className='bull3__pre'>10% - Presale</p>
                </div>
                <div className='bull3__piechart'>
                    <BarChart width={600} height={300} data={data}>
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip cursor={false} />
                        <Legend />
                        <Bar dataKey="Ecosystem" fill="#14A5AD" />
                        <Bar dataKey="Locked" fill="#724BB1" />
                        <Bar dataKey="Team" fill='#97ffef' />
                        <Bar dataKey="Marketing" fill='#00FF19' />
                        <Bar dataKey="Advisor" fill='#EBC1FF' />
                        <Bar dataKey="Presale" fill='#b7ff9a' />
                    </BarChart>
                </div>
            </div>
        </div>
        </>
    )
}

export default Chart;

