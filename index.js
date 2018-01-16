const {app, BrowserWindow, Menu, MenuItem} = require('electron');
const url = require('url');
const path = require('path');  


let win;

//create the window
function createWindow() { 
   win = new BrowserWindow({width: 1000, height: 800}); 
   win.loadURL(url.format ({ 
      pathname: path.join(__dirname, 'index.html'), 
      protocol: 'file:', 
      slashes: true 
   }));
}  

app.on('ready', createWindow); 