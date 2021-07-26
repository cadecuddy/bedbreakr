import React from 'react';
import Fade from 'react-reveal'
import SearchBar from './SearchBar';
import { useState } from 'react';
import StatsPanel from './StatsPanel';

export default function App() {
  const [player, setPlayer] = useState({});
  const [loading, setLoading] = useState(true);

  const api = {
    base: 'https://api.hypixel.net/player?key=',
    key: process.env.REACT_APP_HYPIXEL_API_KEY
  }

  const onSearch = async(text) => {
    if (text === '') {
      return ''
    }
    text = text.replace(/\s+/g, '');

    fetch(`https://api.minetools.eu/uuid/${text}`)
      .then(res => res.json())
      .then(result => {
        if (result.status === "ERR" || result === "") {
          setLoading(true)
          setPlayer(null)
          setLoading(false)
        }
        else {
            fetch(`${api.base}${api.key}&uuid=${result.id}`)
            .then(bedwars_res => bedwars_res.json())
            .then(bedwars_json => {
              setLoading(true)
              setPlayer(bedwars_json.player);
              setLoading(false)
              });
        }}).catch(err => {
          setPlayer(null);
      });
  }

  return (
    <main>
      <Fade bottom distance={'45px'}>
        <div className='intro-header'>
          BEDBREAKR
            <div className='intro-subheader'>
              Quick Minecraft Bedwars Stats
              <SearchBar onSearch={onSearch}/>
            </div>
        </div>
      </Fade>
      {loading === false && <StatsPanel player_data={player}/>}
      <Fade delay={600}>
        <div className='github'>
          by vvalet
        </div>
      </Fade>
    </main>
  )
}