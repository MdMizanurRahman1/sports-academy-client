import { useQuery } from "@tanstack/react-query";

const useClass = () => {


    const { data: myclass = [], isLoading: loading, refetch } = useQuery({
        queryKey: ['add'],
        queryFn: async () => {
            const res = await fetch('https://sports-academy-server-liart.vercel.app/add');
            return res.json();
        }
    })

    return [myclass, loading, refetch]
}

export default useClass;