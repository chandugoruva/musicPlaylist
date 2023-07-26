import './index.css'
import {BiSearch} from 'react-icons/bi'
import {useState} from 'react'
import MusicItem from '../MusicItem'

const Home = props => {
  const {initialTracksList} = props
  const [updatedTracksList, setList] = useState(initialTracksList)
  const [input, setInput] = useState('')
  const onChangeSearch = event => {
    setInput(event.target.value)
  }
  const updatedFilterTracksList = updatedTracksList.filter(each =>
    each.name.toLowerCase().includes(input.toLowerCase()),
  )
  const deletedMusic = id => {
    const filteredList = updatedTracksList.filter(each => each.id !== id)
    setList(filteredList)
  }
  return (
    <div>
      <div className="bg-image">
        <h1 className="heading">Ed Sheeran</h1>
        <p className="paragraph">Singer</p>
      </div>
      <div className="music-div">
        <div className="flex">
          <h1 className="heading">Songs Playlist</h1>
          <div className="input-div">
            <input
              type="search"
              placeholder="Search"
              className="input"
              onChange={onChangeSearch}
            />
            <BiSearch className="icon" />
          </div>
        </div>
        {updatedFilterTracksList.length === 0 ? (
          <p className="no-songs-found">No Songs Found</p>
        ) : (
          <ul>
            {updatedFilterTracksList.map(each => (
              <MusicItem
                each={each}
                key={each.id}
                deletedMusic={deletedMusic}
              />
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}
export default Home
