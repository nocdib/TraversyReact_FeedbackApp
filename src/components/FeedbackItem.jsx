
import {FaTimes} from 'react-icons/fa'
import Card from './shared/Card'

function FeedbackItem({item, handleDelete}) { // item is not destructured here. This is the full item object.

  return (
    <Card>
        <div className="num-display">{item.rating}</div>
        <button className='close' onClick={() => handleDelete(item.id)}><FaTimes color='purple'/></button>
        <div className="text-display">{item.text}</div>
    </Card>
  )
}

export default FeedbackItem
