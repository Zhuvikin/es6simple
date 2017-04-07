#Simple ES6 Webpack config

####Download npm dependencies 
```$xslt
npm install
```
####Simply build project by Webpack
```$xslt
npm run build
```

####Start Webpack DevServer
```$xslt
npm start
```

####Intellij IDEA debug enabling
In order to debug sources in IntelliJ IDEA do the following:
* Download and install Google Chrome 'JetBrains IDE Support' extension
* Ensure that debugging port of the extension is set as in the Intellij IDEA 
* Start DevServer. It should appear on 9000 port as it set in the webpack.config.js
* Set some breakpoints in the sources
* Start debug in IDE and go to http://localhost:9000/ in Chrome
* Debugger should catch evaluation. Enjoy!


#### Presentation WEB-resources
 
* ES6 features - http://es6-features.org/ 
* Babel - https://babeljs.io/ 
* Node.js - https://nodejs.org/
* npm - https://www.npmjs.com/
* Webpack - https://webpack.js.org
* Intellij Idea debugging setup - https://blog.jetbrains.com/webstorm/2017/01/debugging-react-apps/
* Webpack DevServer - https://webpack.js.org/configuration/dev-server/