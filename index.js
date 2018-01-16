const {app, BrowserWindow, Menu, MenuItem} = require('electron');
const url = require('url');
const path = require('path');  


let win;


function createWindow() { 
   win = new BrowserWindow({width: 1000, height: 800}); 
   win.loadURL(url.format ({ 
      pathname: path.join(__dirname, 'index.html'), 
      protocol: 'file:', 
      slashes: true 
   }));
}  
const template = [
{
    label: 'MEdit',
    submenu: [
        {
            role:'edt1'
        },
        {
            type: 'seperator'
        },
        {
            role: 'edt2'
        }
    ]
},
{
    label: 'savr',
    submenu:[
        {
            role: 'dsf'
        },
        {
            role: 'dasdasda'
        }
    ]
}

];

const menu = Menu.buildFromTemplate(template);
Menu.setApplicationMenu(menu);
app.on('ready', createWindow); 