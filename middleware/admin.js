export default function({ $auth, redirect, store }) {
  let user = store.state.auth.user;
  if (user && user.role === "admin") {
  } else if (user && user.role === "client") {
    redirect("/client/jobs");
  } else if (user && user.role === "writer") {
    redirect("/dashboard/jobfeed");
  } else {
    store.dispatch("setFormerRoute", route.fullPath, { root: true })
    redirect('/signin');
  }
}
