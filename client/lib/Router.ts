class Router {
  push(url: string) {
    window.history.pushState(undefined, "", url);
    const locationChange = new CustomEvent("pushstate", {
      composed: true,
    });
    window.dispatchEvent(locationChange);
  }
  back() {
    window.history.back();
  }
}

const router = new Router();

export default router;
