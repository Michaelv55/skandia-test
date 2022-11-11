window.addEventListener('load', function () {
  const old = console.log;
  const logger = document.getElementById('console');
  console.log = function (message) {
    logger.innerHTML = (typeof message != 'object' ? message :
      (JSON && JSON.stringify ? JSON.stringify(message, undefined, 2) : message))
  }
});