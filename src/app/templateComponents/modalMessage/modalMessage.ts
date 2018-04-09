export default {
  modal(message) {
    let mainDataMessage = document.querySelector('.app-message'),
      dataMessage = document.createElement('div');

    dataMessage.classList.add('message-window');
    dataMessage.innerText = message;
    mainDataMessage.insertBefore(dataMessage, mainDataMessage.children[0]);

    setTimeout(function () {
      dataMessage.style.opacity = '0';
      mainDataMessage.removeChild(dataMessage);
    }, 4000);

    return dataMessage;
  }
}
