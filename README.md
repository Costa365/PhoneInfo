# Phone Info

Simple React.js application that shows mobile phone information using [https://fonoapi.freshpixl.com](https://fonoapi.freshpixl.com).

Hosted here: http://fonoapi.co.nf/

## How this application was made

- Install [Node.js](https://nodejs.org)
- Install create-react-app: 
```console
$ npm install -g create-react-app
```
- Create application:
```console
$ create-react-app PhoneInfo
$ npm install react-table
```
- Create an API key for fonoapi and store it in ~\\.env (outside src)
```console
REACT_APP_FONOAPI_KEY=xxxxxxxxxxxxx
```
- Start the application and modify:
```console
$ cd PhoneInfo
$ npm start
```
- Build static files to uplead to server:
```console
$ npm run build
```
