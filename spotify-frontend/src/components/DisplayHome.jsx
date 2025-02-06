import React from 'react'
import NavBar from './NavBar'
import AlbumItem from './AlbumItem'
import SongItem from './SongItem'
import { useContext } from 'react'
import { PlayerContext } from '../context/PlayerContext'



const DisplayHome = () => {

  const {songsData,albumsData} = useContext(PlayerContext);
  
  return (
    <>
        <NavBar/>
        <div className='mb-4'>
            <h1 className='my-5 font-bold text-2xl'>Featured Charts</h1>
            <div className='flex overflow-auto'>
              {albumsData.map((items,index)=>(<AlbumItem key={index} name={items.name} desc={items.desc} id={items._id} image={items.image}/>))}
            </div>
         </div>
         <div className='mb-4'>
            <h1 className='my-5 font-bold text-2xl'>Today's biggest hits</h1>
            <div className='flex overflow-auto'>
              {songsData.map((item,index)=>(<SongItem key={index} name={item.name} desc={item.desc} id={item._id} image={item.image}/>))}
            </div>
         </div>
    </>
  )
}

export default DisplayHome