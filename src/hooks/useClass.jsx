import { useQuery } from "@tanstack/react-query";

const useClass = () => {


    const { data: myclass = [], isLoading: loading, refetch } = useQuery({
        queryKey: ['add'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/add');
            return res.json();
        }
    })

    return [myclass, loading, refetch]
}

export default useClass;