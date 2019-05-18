# VeLiCity [![Codacy Badge](https://api.codacy.com/project/badge/Grade/82ae76253256496cb03ed0cceafeeec5)](https://app.codacy.com/app/Franckeddy/VeLiCity?utm_source=github.com&utm_medium=referral&utm_content=Franckeddy/VeLiCity&utm_campaign=Badge_Grade_Dashboard)

## <img src='https://raw.github.com/voodootikigod/logo.js/master/specific-uses/badge_js-strict.png' width='20' /> Design an interactive bike rental map

     Google MAPS API / OpenData ville de Paris API / Web Storage 

     Use Canvas, touch compatibility on smartphone and tablet 

     Automatic and controllable POO slider, conversion to JQuery plugin to find ds dedicated repo 

DIAPORAMA

     The home page of the application will display a slideshow of photos and text explaining the operation of the application. This slide show also reacts to the keyboard with the left and right keys to move back and forward manually.

CARD OF BIKES 

     Below the slide show is a map using the GoogleMaps API with the location of all bike stations, positioned using markers. A click on a marker displays the status of the station in a panel built in HTML and CSS next to the Google Maps. The location and status of each station (open, under construction, how many bikes and places are available, etc.) is provided via an OpenData API of the city of Paris. The data must come from this API.

BOOKING BIKES 

     It must be possible to book an available bike at the selected station by signing into a free field implemented using the HTML5 Canvas API. Once the signature is validated, a bike is marked as reserved for this station. For this project, the reservation will have no effect. Only the browser browser 'hold' that the bike has been reserved. The reservation data will be stored in the browser using the HTML5 Web Storage API and displayed in a footer below the panel. The reservation expires automatically after 20 minutes and also when the web browser closes. The footer permanently displays the status of the reservation (if there is one), with a dynamic count of the time remaining before the reservation expires. There can only be one reservation at a time. If a new reservation takes place, it replaces the previous one.

TECHNICAL CONSTRAINTS 

     You can use the jQuery library but no jQuery plugins. You will develop the entire slideshow yourself. The JavaScript code must be entirely designed in object-oriented programming. The code must use the Google Maps APIs and open data APIs of the city of Paris. It must also use the Web Storage and Canvas APIs. 

## Coding style tests 

**[<img src='https://avatars1.githubusercontent.com/u/1834093?s=200&v=4' width='30'/>
](https://app.codacy.com/)** 
**Codacy** is an automated code analysis/quality tool that helps developers ship better software, faster. With Codacy, you get static analysis, cyclomatic complexity, duplication and code unit test coverage changes in every commit and pull request.

You can use Codacy to enforce your code quality standard, save time in code reviews, enforce security best practices and onboard developers faster. Integrate with your GitHub repositories to get quality analysis of every pull request inside GitHub.

```
_Integrated in your workflow_
Codacy adapts to your code review process, pushing results as comments in your pull requests and commits into your workflow in GitHub.

_Track your quality evolution_
Get a code quality glance at your project and track its quality evolution over time, easily paying back your technical debt.Give an example
```
## Built With
* [<img src='http://assets.stickpng.com/thumbs/584816c8cef1014c0b5e4987.png' width='30' />](https://www.jetbrains.com/phpstorm/) - **PhpStorm**, The Lightning-Smart PHP IDE.
* [<img src='https://upload.wikimedia.org/wikipedia/commons/0/03/Fish_shell_logo_ascii.png' width='30' />](https://fishshell.com/) - **Fish**, Command line shell for Linux, macOS, and the rest of the family. 

## Versioning
[<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/1200px-Octicons-mark-github.svg.png' width='30' />
](https://github.com/) - **Github**, Web-based version-control and collaboration platform for software developers.

## Authors

* [**Franck GARCON**](https://github.com/Franckeddy)
