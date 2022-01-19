import React from 'react';
import Statistics from './Statistics'
import FeedbackOptions from './FeedbackOptions'
import Section from './section/section'

class Feedback extends React.Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    };

    assessmentСhoice = (e) => {
        this.setState({
            [e.currentTarget.name]: this.state[e.currentTarget.name] + 1,
        })
    };


    countTotalFeedback = () => {
        const totalFeedback = this.state.good + this.state.neutral + this.state.bad
        return totalFeedback
    };

    countPositiveFeedbackPercentage = () => {
        const PositiveFeedbackProcent = (this.state.good + this.state.neutral) / this.countTotalFeedback() * 100
        return PositiveFeedbackProcent
    };


    render() {
        return (
            <>
                <Section title="Please leave feedback">
                    <FeedbackOptions onLeaveFeedback={this.assessmentСhoice} />
                </Section>

                <Section title="Statistics">
                    {this.countTotalFeedback() === 0 ?
                        <h3>No feedback given</h3> :
                        <Statistics good={this.state.good} neutral={this.state.neutral} bad={this.state.bad} total={this.countTotalFeedback()} positivePercentage={this.countPositiveFeedbackPercentage()} />

                    }


                </Section>
            </>


        )
    }
}

export default Feedback