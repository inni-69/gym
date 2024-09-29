import React from "react";

const WorkoutSessions = () => {
  return (
    <section className="workout_session">
      <div className="wrapper">
        <h1>TOP WORKOUT SESSION</h1>
        <p>
        Getting healthier doesn’t just happen in the gym. What you eat, how much you sleep and how you recover all play a part. This is your place for delicious recipes loaded with nutritious ingredients, guidance on healthy living and tips to get the most out of workouts.
        </p>
        <img src="/img5.jpg" alt="workout" />
      </div>
      <div className="wrapper">
        <h1>FEATURED BOOTCAMPS</h1>
        <p>
          24/7 Open with great experienced coaches and trainers
        </p>
        <div className="bootcamps">
          <div>
            <h4>Our Legacy.</h4>
            <p>
            Gold's Gym is a globally renowned fitness brand that has made its mark in India. With a strong legacy dating back to 1965 in Venice Beach, California,
            </p>
          </div>
          <div>
            <h4>Our Business Verticals.</h4>
            <p>
            We are one of the largest gym chains in India with 150+ active clubs & have been in India since 2002
            </p>
          </div>
          <div>
            <h4>What Makes Us
            Different Than Others</h4>
            <p>
            It's a fitness haven that combines state-of-the-art equipment, expert trainers, and a supportive community to foster a holistic approach to wellness.
            </p>
          </div>
          <div>
            <h4>Book Your Free Trial.</h4>
            <p>
            Book Your Free Trial by cotacting us.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkoutSessions;
