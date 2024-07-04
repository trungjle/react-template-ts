import { useQuery } from "@tanstack/react-query";
import { fetchExpenses } from "../api/expenses";

export default function useExpenses() {
    const { data, isLoading, isError } = useQuery({
        queryKey: ["expenses"],
        queryFn: fetchExpenses,
    });

    return { expenses: data, loading: isLoading, error: isError };
}
