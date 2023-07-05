
const Register = () => {
  return (
    <form action="http://localhost:3000/register" method="POST">
      <input type="text" name="username" placeholder="Enter your username" required />
      <input type="email" name="email" placeholder="Enter your email" required />
      <input type="password" name="password" placeholder="Enter the password" />
      <button>Register</button>
    </form>
  )
}

export default Register