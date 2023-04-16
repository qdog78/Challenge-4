
/** 
 * Criteria 
 */


// WHEN I click the start button
When I load up page I should only see a start button
Then I click on the button, 
then the button should disappear
// THEN a timer starts and I am presented with a question
Have a place for the time,
figure out max time in seconds
have a place for the question
have a place for answers
show the question and place it at the place where we're going to place it (create function)
start the time in the place where its supposed to be
show answers in the correct place(create function)
start the countdown
start subtracting time every second
// WHEN I answer a question
clicking a answer
grading the answer (Checking if correct)
if answered right we add to the score (false)
if wrong we subtract time remaining (true)
// THEN I am presented with another question
clear out the old question
clear out answers
start the time in the place where its supposed to be (create function)
show answers in the correct place (create function)
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and score
create a textbox for intials
create a score textbox
locally save it

