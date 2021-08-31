import React from 'react'
import { Fade } from 'react-reveal';
import CountUp from 'react-countup';
import { useState } from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';


export default function StatsPanel({player_data}) {

    const [tab, setTab] = useState(1);
    const tabGamemodeID = ['eight_one_', 'eight_two_', 'four_three_', 'four_four_']

    const handleClick = (e) => {
        setTab(e.target.value);
    }

    const dataNull = () => {
        if (player_data === null || typeof(player_data) === 'undefined' || (player_data.hasOwnProperty('stats') === false)) {
            return true;
        }
        return false;
    }

    const displayInfo = stat => {
        if (dataNull()) {
            return "null";
        } else if (typeof(player_data[stat]) === 'undefined') {
            return "null";
        }
        return player_data[stat];
    }

    const displayStat = stat => {
        if (dataNull() || typeof(player_data.stats) === 'undefined') {
            return 0;
        } else if (player_data.stats.hasOwnProperty('Bedwars') === false || player_data.stats.Bedwars.hasOwnProperty(stat) === false ) {
            return 0;
        }
        return player_data.stats.Bedwars[stat];
    }

    const getLevel = (stat) => {
        if ( dataNull() || player_data.hasOwnProperty('achievements') === false || player_data.achievements.hasOwnProperty('bedwars_level') === false) {
            return 0;
    }
        return player_data.achievements[stat];
    }

    const getRatio = (stat1, stat2) => {
        let KD = parseFloat(displayStat(stat1)/displayStat(stat2));
        if (Object.is(NaN,KD)) {
            return 0;
        }
        return KD;
    }

    const getRank = () => {
        if (player_data === null || dataNull()) {
            return 'no-rank'
        }
        if (player_data.hasOwnProperty('newPackageRank')) {
            return player_data.newPackageRank;
        }
        return 'no-rank'
    }

    if (!dataNull()) {

        return (
            <Fade bottom distance={'45px'}>
                <div className='stat-panel-box'>
                    <div className='username-header'>
                        <img alt={''} src={`https://crafatar.com/avatars/${player_data.uuid}?overlay=true&size=100`} className='player-head' style={{marginRight: '30px', width: '85px', height: '85px'}}/>
                        <div className={getRank()}>[{getLevel('bedwars_level')}]✫ {displayInfo('displayname')}</div>
                    </div>
                    <Fade delay={400}>
                        <div className='overall-stats'>
                                <CountUp start={0} end={displayStat('wins_bedwars')} delay={0} duration={1.4} separator={','}>
                                    {({ countUpRef }) => (
                                        <div>
                                            Wins: <span className='number' ref={ countUpRef}/>
                                        </div>
                                    )}
                                </CountUp> 
                                <CountUp start={0} end={displayStat('losses_bedwars')} delay={0} duration={1.4} decimals={0} separator={','}>
                                    {({ countUpRef }) => (
                                        <div>
                                            Losses: <span className='number'  ref={ countUpRef}/>
                                        </div>
                                    )}
                                </CountUp>
                                <CountUp start={0} end={getRatio('wins_bedwars', 'games_played_bedwars') * 100} delay={0} duration={1.5} decimals={1}>
                                    {({ countUpRef }) => (
                                        <div>
                                            Win Percentage: <span className='number' style={{color:'#D12A6F'}} ref={ countUpRef }/>
                                        </div>
                                    )}
                                </CountUp>    
                                <CountUp start={0} end={displayStat('final_kills_bedwars')} delay={0} duration={1.4} decimals={0} separator={','}>
                                    {({ countUpRef }) => (
                                        <div>
                                            Final Kills: <span  className='number' ref={ countUpRef}/>
                                        </div>
                                    )}
                                </CountUp>
                                <CountUp start={0} end={displayStat('final_deaths_bedwars')} delay={0} duration={1.4} decimals={0} separator={','}>
                                    {({ countUpRef }) => (
                                        <div>
                                            Final Deaths: <span  className='number' ref={ countUpRef}/>
                                        </div>
                                    )}
                                </CountUp>
                                <CountUp start={0} end={getRatio('final_kills_bedwars', 'final_deaths_bedwars')} delay={0} duration={1.4} decimals={2}>
                                    {({ countUpRef }) => (
                                        <div>
                                            Final K/D: <span className='number' style={{color:'#D12A6F'}} ref={ countUpRef}/>
                                        </div>
                                    )}
                                </CountUp>
                                <CountUp start={0} end={displayStat('beds_broken_bedwars')} delay={0} duration={1.4} decimals={0} separator={','}>
                                    {({ countUpRef }) => (
                                        <div>
                                            Beds Broken: <span className='number' ref={ countUpRef}/>
                                        </div>
                                    )}
                                </CountUp>  
                                <CountUp start={0} end={displayStat('beds_lost_bedwars')} delay={0} duration={1.4} separator={','}>
                                    {({ countUpRef }) => (
                                        <div>
                                            Beds Lost: <span  className='number' ref={ countUpRef}/>
                                        </div>
                                    )}
                                </CountUp>   
                                <CountUp start={0} end={getRatio('beds_broken_bedwars', 'beds_lost_bedwars')} delay={0} duration={1.4} decimals={2}>
                                    {({ countUpRef }) => (
                                        <div>
                                            Bed Ratio: <span  className='number' style={{color:'#D12A6F'}} ref={ countUpRef}/>
                                        </div>
                                    )}
                                </CountUp>
                                <CountUp start={0} end={displayStat('winstreak')} delay={0} duration={2.5}>
                                    {({ countUpRef }) => (
                                        <div>
                                            Winstreak: <span  className='number'  style={{color:'gold'}} ref={ countUpRef}/>
                                        </div>
                                    )}
                                </CountUp>        
                        </div>
                    </Fade>
                </div>
                <div className='stats-tabs'>
                            <ButtonGroup size='lg'>
                                <Button onClick={handleClick} active={tab === 1} variant='outline-dark' value='1'> Solos </Button>
                                <Button onClick={handleClick} active={tab === 2} variant='outline-dark' value='2'> Duos </Button>
                                <Button onClick={handleClick} active={tab === 3} variant='outline-dark' value='3'> 3v3v3v3 </Button>
                                <Button onClick={handleClick} active={tab === 4} variant='outline-dark' value='4'> 4v4v4v4 </Button>
                            </ButtonGroup>
                            <div>
                                <Fade delay={400}>
                                    <div className='gamemode-stat' style={{paddingTop:'35px'}}>
                                        <p className="alignleft" style={{fontSize:'50px'}}>
                                            <CountUp start={0} end={displayStat(tabGamemodeID[tab - 1] + 'wins_bedwars')} delay={0} duration={.5} separator={','}/>
                                        </p>
                                        <p className="aligncenter" style={{fontSize:'50px'}}>
                                            <CountUp start={0} end={displayStat(tabGamemodeID[tab - 1] + 'final_kills_bedwars')} delay={0} duration={.5} separator={','}/>
                                        </p>
                                        <p className="alignright" style={{fontSize:'50px'}}>
                                            <CountUp start={0} end={displayStat(tabGamemodeID[tab - 1] + 'beds_broken_bedwars')} delay={0} duration={.5} separator={','}/>
                                        </p> 
                                    </div>
                                    <div className='gamemode-stat-labels' style={{marginTop:'-25px', backgroundColor:'transparent'}}>
                                        <p className="alignleft">Wins</p>
                                        <p className="aligncenter">Final Kills</p>
                                        <p className="alignright">Bed Breaks</p> 
                                    </div>
                                    <div className='gamemode-stat' style={{paddingTop:'35px'}}>
                                        <p className="alignleft" style={{fontSize:'50px'}}>
                                            <CountUp start={0} end={displayStat(tabGamemodeID[tab - 1] + 'games_played_bedwars')} delay={0} duration={.5} separator={','}/>
                                        </p>
                                        <p className="aligncenter" style={{fontSize:'50px'}}>
                                            <CountUp start={0} end={displayStat(tabGamemodeID[tab - 1] + 'final_deaths_bedwars')} delay={0} duration={.5} separator={','}/>
                                        </p>
                                        <p className="alignright" style={{fontSize:'50px'}}>
                                            <CountUp start={0} end={displayStat(tabGamemodeID[tab - 1] + 'beds_lost_bedwars')} delay={0} duration={.5} separator={','}/>
                                        </p> 
                                    </div>
                                    <div className='gamemode-stat-labels' style={{marginTop:'-25px', backgroundColor:'transparent'}}>
                                        <p className="alignleft">Games</p>
                                        <p className="aligncenter">Final Deaths</p>
                                        <p className="alignright">Beds Lost</p> 
                                    </div>
                                    <div className='gamemode-stat' style={{paddingTop:'35px', color:'#D12A6F'}}>
                                        <p className="alignleft" style={{fontSize:'50px'}}>
                                            <CountUp start={0} end={getRatio(tabGamemodeID[tab - 1] + 'wins_bedwars', tabGamemodeID[tab - 1] + 'games_played_bedwars') * 100} delay={0} duration={.5} separator={','}/>%
                                        </p>
                                        <p className="aligncenter" style={{fontSize:'50px', color:'#D12A6F'}}>
                                            <CountUp start={0} end={getRatio(tabGamemodeID[tab - 1] + 'final_kills_bedwars', tabGamemodeID[tab - 1] + 'final_deaths_bedwars')} delay={0} decimals={2} duration={.5} separator={','}/>
                                        </p>
                                        <p className="alignright" style={{fontSize:'50px', color:'#D12A6F'}}>
                                            <CountUp start={0} end={getRatio(tabGamemodeID[tab - 1] + 'beds_broken_bedwars', tabGamemodeID[tab - 1] + 'beds_lost_bedwars')} delay={0} duration={.5} decimals={2} separator={','}/>
                                        </p> 
                                    </div>
                                    <div className='gamemode-stat-labels' style={{marginTop:'-25px', backgroundColor:'transparent', color:'black'}}>
                                        <p className="alignleft">Winrate</p>
                                        <p className="aligncenter">Final K/D</p>
                                        <p className="alignright">Bed Ratio</p> 
                                    </div>                               
                                </Fade>
                            </div>
                </div>
            </Fade>
        )
    }
    else {
        return (
            <Fade bottom distance={'45px'}>
                <div className='stat-panel-box'>
                    <div className='username-header'>
                            <img alt={''} src={'default.png'} className='player-head' style={{marginRight: '30px', width: '85px', height: '85px'}}/>
                            <div className='not-found'>
                                Player not found
                            </div>
                    </div>
                </div>
            </Fade>
        )
    }
}
