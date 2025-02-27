# Zero to 100 Trivia Game

[Link to live project](https://deanwraith24.github.io/triviagame/)

Zero to 100 is a trivia game where you have various questions and the answers are numbers that range between 0 and 100. The goal of the game is to get as many answers as close to the real answer as possible and tally the lowest score possible.

![Image of responsive site](assets/images/responsive.jpg)

### <u>Table of Contents</u>

* [Planning](#planning)
  * [External User Goals](#external-user-goals)
  * [Site Owner Goals](#site-owner-goals)
  * [Wireframes](#wireframes)

* [Features](#features)
  * [Landing Page](#landing-page)
  * [Game Page](#game-page)
  * [Rules Page](#rules-page)
  * [Contact Page](#contact-page)

* [Future Enhancements](#future-enhancements)

* [Testing](#testing)
  * [Manual Testing](#manual-testing)
  * [Validation](#validation)
  * [Issues](#issues)

* [Deployement](#deployement)

* [Credits](#credits)

### <u>Planning</u>

#### <u>External User Goals</u>
The goals for the user is to have a fun and challenging trivia game.

#### <u>Site Owner Goals</u>
The goals of the site owner are to produce a trivia game that can be played by ages from 6 years old and up and for it to be educational and fun.

#### <u>Wireframes</u>

##### <u>Mobile</u>

![Mobile Wireframe](assets/images/mobile.jpg)

##### <u>Desktop</u>

![Desktop Wireframe](assets/images/web.jpg)

### <u>Features</u>

#### <u>Landing Page</u>

The landing page has the game title at the top and then the rules of the game listed below.

Below the rules is a button that allows the player to start the game when they have read the rules and are ready to start.

![Landing Page](assets/images/home.jpg)

#### <u>Game Page</u>

When the player clicks the start game button on the landing page they are directed to the game page. On the game page the title at the top of the page is a link that will redirect to the landing page if the user wants to read the rules again. 

Below that is the question the user needs to answer. The questions are randomly selected from a collection of 50 questions and are not repeated in a single game.

There is then a section for the user to input a guess. It reminds the player the number needs to be between 0 and 100. 

Then there is the submit guess button. If the button is clicked and the input field is empty an error messgae will appear prompting the player to input a guess. When the guess is input and the submit button is clicked the answer to the question is displayed, the score is updated and the submit button is disabled so it can't be clicked more than once. There is also a next question button that appears so the user can move forward in the game. 

There is a score counter that updates depending on the players answer. It is updated by adding the difference between the users guess and the correct answer. There is also a question counter to show the player their progress. 

When the player answers the final question the next question button changes to end game. When clicked the screen changes to show the players final score and gives them the option to play again.

##### <u>Game Page</u>
![Game Page](assets/images/game.jpg)
##### <u>Incorrect Answer Response</u>
![Incorrect Answer](assets/images/incorrect.jpg)
##### <u>Correct Answer Response</u>
![Correct Answer](assets/images/correct.jpg)
##### <u>Final Score</u>
![Final Score](assets/images/end.jpg)

#### <u>Rules Page</u>

The rules page contains the game rule, scoring details and tips on how to play the game.

![Rules Page](assets/images/rules1.jpg)
![Rules Page](assets/images/rules2.jpg)

#### <u>Contact Page</u>

The contact page has a simple contact form and contact details for the users to contact designers with feedback and questions.

![Contact Page](assets/images/contact.jpg)

### <u>Future Enhancements</u>

The list below is some features that could be added in the future to enhance the user experience.

* Score Board
A score board could be added so that players can keep track of their top 5 scores and track their progress.

* Question Timer
A timer could be added that could either be used for the whole game or each question that could make the game more difficult.

* Categories and Difficulty
Questions could be seperated into specific categories and players could have a selection menu where they can select different categories and difficulty levels to challenge themselves.

### <u>Testing</u>

#### <u>Manual Testing</u>

I tested the game myself and also sent it to famliy and friends to play on various devices and to send feedback.

##### <u>Home Page</u>

|Feature|Expected|Testing|Result|
|:------|:-------|:------|:----:|
|Navbar links|When clicked, direct user to specified page|Clicked all links in navbar|Passed|
|Social media links|When clicked, open social media page in new window|Clicked various links|Passed|
|Start Game button|When clicked, direct user to game page and new game|Clicked button|Passed|

##### <u>Game Page</u>

|Feature|Expected|Testing|Result|
|:------|:-------|:------|:----:|
|Question section|Show random question from selection. Don't repeat in same game. Display new question.|Played multiple games|Passed|
|Guess Input|Allow only numbers to be typed in.|Typed letters and numbers|Passed|
|Submit Guess Button|Check answer, display correct/incorrect and calculate score|Played multiple games|Passed
|Next Question Button|Reload new question and display submit button again|Played multiple games|Passed|
|Score Counter|Update with correct difference after question asnwered|Played multiple games|Passed|
|Question Counter|Update question player is on|Played multiple games|Passed|
|End game screen|Show final score and button to play new game|Finished multiple games|Passed|
|Play Again Button|Reload game page with new game|Clicked button|Passed|

#### <u>Validation</u>
 * HTML
 For the HTML I used W3C Markup Validation Service.

 * CSS
 For the validation of the CSS I used Jigsaw CSS validatior.

 * JS
 For the validation of the JS I used Code Beautyify JS validatior.

#### <u>Issues</u>

Some of the issues that were encountered and then corrected during the testing are listed below, 

* Initially there was no way to return to the landing page, so the heading was turned into a link to allow this if users wanted to read the rules again.

* The submit button could be clicked more than once which would lead to the score being updated on each click, so the code was updated to disable the submit button after it has been clicked once and then be reset when the new question is loaded.

* The submit button was being displayed in the final score screen which was corrected by hiding it.

### <u>Deployement</u>

The project was deployed using GitHub Pages. The steps to deploy are as follows:

 1. Open the repository and click on the settings tab.
 2. Navigate to the Pages tab in the menu on the left.
 3. Choose deploy from a branch and select main branch.
 4. Click save and you can access the deployed website from the Pages tab.

### <u>Credits</u>

The idea for the game from a card game I have played before. The questions and answers came from the game and I selected the more general questions to be used. 

The course work and W3 Schools were helpful in developing the functions that allow the game to work.