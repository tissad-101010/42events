import { Navigate } from "react-router-dom";
import { useMe } from "../hooks/useMe";
import type { JSX } from "react/jsx-dev-runtime";

export default function ProtectedRoute({
  children,
}: {
  children: JSX.Element;
}) {
  const { data: user, isLoading, isError } = useMe();

  if (isLoading) return <div>Loading...</div>;

  if (isError || !user) return <Navigate to="/login" />;

  return children;
}