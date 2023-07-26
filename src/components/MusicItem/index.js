import './index.css'
import {AiOutlineDelete} from 'react-icons/ai'

const MusicItem = props => {
  const {each, deletedMusic} = props
  const deleteMusic = () => {
    deletedMusic(each.id)
  }
  return (
    <li className="li">
      <div className="main-music-div">
        <div className="flex1">
          <img src={each.imageUrl} alt="track" className="music-image" />
          <div>
            <p className="name">{each.name}</p>
            <p className="genre">{each.genre}</p>
          </div>
        </div>
        <div className="flex2">
          <p className="duration">{each.duration}</p>
          <button
            type="button"
            className="button"
            onClick={deleteMusic}
            data-testid="delete"
          >
            <AiOutlineDelete className="icon2" />
          </button>
        </div>
      </div>
    </li>
  )
}
export default MusicItem
