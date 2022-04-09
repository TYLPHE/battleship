function errorMessage(/* array */ msg) {
  if (msg.length === 0) {
  } else {
    const previousErr = document.querySelector('.message-window');
    if (previousErr) {
      previousErr.remove();
    }
    const window = document.createElement('div');
    window.classList.add('message-window');
    const title = document.createElement('div');
    title.textContent = 'Error Log';
    window.appendChild(title);
    const msgCont = document.createElement('div');
    window.appendChild(msgCont)
    for (let i = 0; i < msg.length; i += 1) {
      let line = document.createElement('div');
      line.textContent = msg[i];
      line.classList.add('message')
      msgCont.appendChild(line);
    }
    const half = document.querySelector('.half');
    half.appendChild(window);
  }
}

export default errorMessage;
