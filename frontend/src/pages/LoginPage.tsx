export default function LoginPage() {
  const handleLogin = () => {
    window.location.href = "http://localhost:3000/auth/42";
  };

  return <button onClick={handleLogin}>Login with 42</button>;
}