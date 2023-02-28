import FeedbackItem from './FeedbackItem'

function FeedbackList({feedback, handleDelete}) { // feedback is not destructured here. This is the full contents of the FeedbackData file.
    if(!feedback || feedback.length === 0) {
        return <p>No Feedback Yet</p>
    }

    return (
        <div className='feedback-list'> {/* The CSS class for the list that holds the items */}
        {feedback.map((item) => 
            <FeedbackItem key={item.id} item={item} handleDelete={handleDelete}/>
        )}
        </div>
    )
}

export default FeedbackList
