import React from 'react';
import PropTypes from "prop-types";


const FeedbackOptions = ({ onLeaveFeedback }) => (

    <div>
        <button type='botton' name='good' onClick={onLeaveFeedback}>good</button>
        <button type='botton' name='neutral' onClick={onLeaveFeedback}>neutral</button>
        <button type='botton' name='bad' onClick={onLeaveFeedback}>bad</button>
    </div>
)


export default FeedbackOptions

FeedbackOptions.propTypes = {
    onLeaveFeedback: PropTypes.func.isRequired
}
