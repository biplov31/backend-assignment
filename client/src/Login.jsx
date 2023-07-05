
const Login = () => {
  return (
    <form action="http://localhost:3000/login" method="GET">
      <input type="email" name="email" placeholder="Enter your email" required />
      <input type="password" name="password" placeholder="Enter the password" />
      <button>Login</button>
    </form>
  )
}

export default Login