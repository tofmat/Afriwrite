export default function({ $auth, redirect, store, route }) {
  let user = store.state.auth.user;
  if (user && user.role === "writer") {
  } else if (user && user.role === "client") {
    redirect("/client/jobs");
  } else {
    store.dispatch("setFormerRoute", route.fullPath, { root: true })
    redirect(`/signin`);
  }
}
