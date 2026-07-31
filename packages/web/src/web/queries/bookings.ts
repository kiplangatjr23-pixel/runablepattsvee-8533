import { useMutation, useQueryClient } from "@tanstack/react-query";
import { orpc } from "../lib/api";

export function useCreateBooking() {
  const queryClient = useQueryClient();
  return useMutation(
    orpc.bookings.create.mutationOptions({
      onSuccess: () =>
        queryClient.invalidateQueries({ queryKey: orpc.bookings.key() }),
    }),
  );
}
