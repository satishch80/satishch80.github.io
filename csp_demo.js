function _readItemFromSessionStorage() {
  return window.sessionStorage.getItem("my-session-storage-token");
}

function _readItemFromLocalStorage() {
  return window.sessionStorage.getItem("my-local-storage-token");
}


function accessStorage() {
  console.log ("value from session storage: " + _readItemFromSessionStorage());
  console.log ("value from local storage: " + _readItemFromLocalStorage());
}

setInterval(accessStorage, 5000);
