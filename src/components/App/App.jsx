import React, { Component } from 'react';
import Feedback from '../Feedback/Feedback';
import Statistics from '../Statistics/Statistics';
import Section from '../Section/Section';
import Notification from '../Notification/Notification';

import css from './App.module.css';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  clickOnButton = evt => {
    let buttonId = evt.target.name;

    return this.setState({ [buttonId]: (this.state[buttonId] += 1) });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    let total = bad + neutral + good;
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    let total = this.countTotalFeedback();
    let positivePercentage = Math.round((good / total) * 100);
    return positivePercentage;
  };

  render() {
    const { good, neutral, bad } = this.state;
    let total = this.countTotalFeedback();

    return (
      <div className={css.container}>
        <Section title={'Please leave feedback'}>
          <Feedback
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={this.clickOnButton}
          />
        </Section>

        <Section title={'Statistics'}>
          {total ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </div>
    );
  }
}
