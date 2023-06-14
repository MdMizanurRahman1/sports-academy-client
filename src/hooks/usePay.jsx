import { useQuery } from "@tanstack/react-query";

const usePay = () => {


    const { data: payments = [], isLoading: loading, refetch } = useQuery({
        queryKey: ['payments'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/payments');
            return res.json();
        }
    })

    return [payments, loading, refetch]
}

export default usePay;