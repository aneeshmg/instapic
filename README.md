# instapic
A cordova based app for NIE summer school 2k15

###Steps taken:

* `cordova create instapic nie.summer.school InstaPic`
* `cordova platform add android`
* Create directory "yeoman", `mkdir yeoman && cd yeoman`
* Create Yeoman webapp project `yo webapp`
* Create "before_prepare" directory inside "hooks" `cd hooks && mkdir before_prepare && cd before_prepare`
* Create a script "yeomanbuildandcopy.sh" as done.
* Clean up code generated by yeoman.
* Wrote some JS to fetch random images off the internet
* Added some styles to make it look good on mobile device
