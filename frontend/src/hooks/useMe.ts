import { useQuery } from "@tanstack/react-query";

export const useMe = () => {
  return useQuery({
    queryKey: ["me"],
    queryFn: async () => {
      const res = await fetch("/api/me", {
        credentials: "include",
      });

      if (!res.ok) throw new Error("Not authenticated");

      return res.json();
    },
    retry: false,
  });
};