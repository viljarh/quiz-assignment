# Quiz App Assignment IDATA2503

### Overview

This is a simple Quiz application built with React Native as part of the IDATA2503 assignment. The application contains 20 multiple-choice questions
about React Native. While answering the questions the user can see the progress at the top in a progress bar.
After completing the 20 questions, the user gets redirected to a result page that displays the result.
In the result page the user can see their score and whether each answer was correct.

### Features

- Multiple-choice: Users can choose from a set of options
- Progress-bar: A bar at the top of the screen that shows the user how far they've progressed (Additional feature)
- Result page: After quiz is completed, users are redirected to result page
- Navigation: Users can navigate between screens

### Data flow

- The quiz questions are stores in a Typescript file in the /constants directory, and gets shuffled before the quiz starts
- Answers and score are managed using React state

### User stories

1. User can answer 20 questions about React Native
2. User can see a progress bar indicating how far they've progressed through the quiz
3. User can see their score after completing the quiz
4. User can review their answers and see the correct answers for the questions they got wrong
5. User can navigate back to the home screen and take quiz again after completing the quiz

### Working in group

When we first received the assignment, we first discussed possible ways to build the application and made one draft each.
While we were making the drafts we discussed what we wanted to do with the application. While some students were provided with a prebuilt quiz
app from the Udemy course, we built ours from scratch, which gave us a deeper understanding.

After completing our drafts, we reviewed each others drafts and provided feedback. We then selected one of the drafts to continue working on collaboratively.
The main challenge we faced was that the project specifications were given in the Udemy course for Flutter, which we didn't use because
we chose React Native.

### Class diagram

Class diagram can be found under /assets/diagrams/

### How to run the project

1. Clone repository and `cd quiz-assignment`
2. `npm install`
3. `npx expo start`
