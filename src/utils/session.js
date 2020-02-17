export default function signout() {
  sessionStorage.clear();
  localStorage.removeItem('currentUser');
  window.location = '/';
  window.location.reload(true);
}
