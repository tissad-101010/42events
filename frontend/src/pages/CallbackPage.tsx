import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";

export default function CallbackPage() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  useEffect(() => {
    const code = new URLSearchParams(window.location.search).get("code");

    if (!code) return;

    (async () => {
      await fetch("/api/auth/callback", {
        method: "POST",
        body: JSON.stringify({ code }),
        credentials: "include",
      });

      await queryClient.invalidateQueries({ queryKey: ["me"] });

      navigate("/");
    })();
  }, [navigate, queryClient]);

  return <div>Authenticating...</div>;
}