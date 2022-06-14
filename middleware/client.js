export default function({$auth, redirect, store, route}) {
  let user = store.state.auth.user
  if (user && (user.role === 'writer')) {
    redirect('/dashboard/jobfeed')
  } else if (user && (user.role === 'client')) {
    
  } else {
    store.dispatch("setFormerRoute", route.fullPath, { root: true })
    redirect(`/signin`)
  }
} 