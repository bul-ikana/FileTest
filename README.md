#FileTest

A simple example app of the [cordova-plugin-file](https://github.com/apache/cordova-plugin-file) using [ionic](ionicframework.com) and [ngCordova](http://ngcordova.com/).

FileTest show some two common use cases for the file plugin.

The first one is loading a file provided in the packaged ionic app. 

The second one is a bit more complex and involves many steps:

1. Fetching a file from a remote source.
2. Saving this file to a directory in the user's device
3. Check existence of this file whenever the app is started
4. Retrieving and reading the previously saved file.

FileTest populates a list from 3 different sources:

1. Local JSON file located in the `www` directory of the ionic project
2. Remote JSON file located in a server of mine, used just for reference
3. Remote JSON file located in a server of mine, intended to be saved to file system and be read from there.

##Screenshots
![](https://raw.githubusercontent.com/bul-ikana/FileTest/master/docs/img/c1.png)
![](https://raw.githubusercontent.com/bul-ikana/FileTest/master/docs/img/c2.png)

## Dependencies.

To run this project you need

* [Node.js](https://nodejs.org) 
* Android SDK (for android)
* Xcode and a mac (for iOS)
* [Ionic CLI](http://ionicframework.com/getting-started/)
* A physical device or emulator, as plugin won't run on browser

##Installation

1. Clone the repo
2. Run `ionic state restore` to add platforms and plugins to the project
3. Run `ionic run android` to deploy to android, or `ionic run ios` to deploy to iOS.

##Questions or issues?

Please feel free to raise an issue in our issue page.