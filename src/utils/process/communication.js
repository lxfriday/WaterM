/**
 * 监听器
 * @time 2018/08/27
 * @author lxfriday
 */

const { ipcRenderer } = require('electron');

// 发送最小化窗口的信号
export function sendMinimizeWindow() {
  ipcRenderer.send('window-minimize');
}

// 发送关闭窗口的信号
export function sendCloseWindow() {
  ipcRenderer.send('window-close');
}

export default {
  sendMinimizeWindow,
  sendCloseWindow,
};
