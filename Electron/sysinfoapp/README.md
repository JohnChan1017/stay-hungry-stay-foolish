npm i electron -S

npm i && npm start


npm i -S asar

asar pack AlienBase app.asar

npm i electron-packager -S


electron-packager . AlienBase --out presenterTool --win --arch=x64 --app-version=1.0.0 --overwrite --ignore=node_modules --icon=./img/icon.ico

electron-packager . AlienBaseApp --out ./myApp --win --arch=x64 --app-version=1.0.0 --overwrite --ignore=node_modules --icon=./img/icon.ico