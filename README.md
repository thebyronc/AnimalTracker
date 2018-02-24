# Animal Tracker
Tracking system to log Zoo Animal information including age, name, species, behavior, etc...

## Setup Up
In the terminal run these commands:
```
$ git clone https://github.com/thebyronc/AnimalTracker.git
//go to root cloned folder
$ npm install
$ bower install
$ gulp build
$ gulp serve
//Chrome should auto load the application at localhost
```

## About
This is an Epicodus Friday project for Week 3 of JavaScript Course.

### Tools Used
- [Atom](https://atom.io/) - Text Editor
- [npm](https://www.npmjs.com/) - Package manager for JavaScript
- [gulp](https://gulpjs.com/) - Toolkit to automate tasks
- [Bower](https://bower.io/) - Frontend package manager
- [Jasmine](https://jasmine.github.io/) - Framework for testing JavaScript code
- [karma](https://karma-runner.github.io/2.0/index.html) - Toolkit to test in application in browsers


### Behavior Driven Specifications
As a user…
- I want to log a newly-admitted animal by submitting a form with animal species, name, age, diet, zoo location, number of needed caretakers, sex, one like and one dislike.
- I want to view a list of animals I have logged.
- I want options to view all animals, only young animals (less than 2 years of age), or only mature animals (2 years of age and older).
- I want to click an animal to edit its name, age or caretakers.

### Future Additions
- Add picture loading and Display
- Link to zoo webcam api to see a live feed of Animal
- Add custom SASS styling with corresponding Gulp tasks to compile.
- Display of the total number of caretakers needed in a day.
- Add a property that records when each animal was admitted. The user could enter a date and time, or the app can generate a timestamp.
- Expand the application to differentiate between animals' species. Group the animals into those categories. Then include a component to display the total needed caretakers for whichever species the user selects.
- Add a new master component to average the total age for each species.
- Show animals based on diet type. Then, show all animals who eat meat (carnivores AND omnivores)

### Author
**Byron Chang** - [GitHub](https://github.com/thebyronc)
