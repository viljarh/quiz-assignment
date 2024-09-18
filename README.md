# Quiz App Assignment IDATA2503

### Overview

This is a simple Quiz application built with React Native as part of the IDATA2503 assignment. The application contains 20 multiple-choice questions
about React Native. While answering the questions the user can see the progress at the top in a progress bar.
After completing the 20 questions, the user gets redirected to a result page that displays the result.
In the result page the user can see their score and whether each answer was correct.

### Features

- Randomized quiz: Shuffles the 20 predefined questions
- Multiple-choice: Users can choose from a set of options
- Progress-bar: A bar at the top of the screen that shows the user how far they've progressed
- Result page: After quiz is completed, users are redirected to result page
- Navigation: Users can navigate between screens

### Data flow

- The quiz questions are stores in a Typescript file in the /constants directory, and gets shuffled before the quiz starts
- Answers and score are managed using React state

### Working in group

When we first got the assignment we first discussed possible ways to solve it, and from there we made a draft each.
While we were making the drafts we discussed what we wanted to do with the application. According to other students they got
provided with a complete quiz app in the Udemy course, and they just had to add extra features. We made our application from scratch.
