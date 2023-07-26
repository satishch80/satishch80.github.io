function _readItemFromSessionStorage() {
  return window.sessionStorage.getItem("my-session-storage-token");
}

function _readItemFromLocalStorage() {
  return window.sessionStorage.getItem("my-local-storage-token");
}
