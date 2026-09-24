const { app, BrowserWindow, Menu } = require('electron');
const path = require('path');
function createWindow(){
  const win = new BrowserWindow({width:1400,height:900,minWidth:1050,minHeight:700,title:'Modern Switchgear Inventory',backgroundColor:'#f1f5f9',webPreferences:{contextIsolation:true,nodeIntegration:false}});
  win.loadFile(path.join(__dirname,'index.html'));
}
app.whenReady().then(()=>{
  createWindow();
  Menu.setApplicationMenu(Menu.buildFromTemplate([
    {label:'File',submenu:[{role:'reload',label:'Refresh'},{type:'separator'},{role:'quit',label:'Exit'}]},
    {label:'View',submenu:[{role:'togglefullscreen',label:'Full Screen'},{role:'resetZoom',label:'Reset Zoom'},{role:'zoomIn',label:'Zoom In'},{role:'zoomOut',label:'Zoom Out'}]}
  ]));
  app.on('activate',()=>{if(BrowserWindow.getAllWindows().length===0)createWindow();});
});
app.on('window-all-closed',()=>{if(process.platform!=='darwin')app.quit();});
