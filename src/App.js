import { useState } from 'react'
import Header from  './components/Header'
import FeedbackList from './components/FeedbackList'
import FeedbackData from './data/FeedbackData'

function App() {
    const  [feedback, setFeedback] = useState(FeedbackData)

    // function to delete a feedback item. it will be passed as a property
    const deleteFeedback = (id) => {
        setFeedback(feedback.filter((item) => item.id !== id))
    }

    return (
    <>
        <Header/>
        <div className='container'>
            <FeedbackList feedback={feedback} handleDelete={deleteFeedback}/>
        </div>
    </>
    
    )
}

export default App