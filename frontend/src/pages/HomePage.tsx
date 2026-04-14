import { useMe } from "../hooks/useMe.ts";

export default function HomePage() {
  const { data: user } = useMe();

  return <h1>Welcome {user.login}</h1>;
}