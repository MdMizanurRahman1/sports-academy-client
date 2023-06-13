
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";


const useCard = () => {
    const { user, loading } = useAuth();

    const [axiosSecure] = useAxiosSecure();
    const { refetch, data: cart = [] } = useQuery({
        queryKey: ['card', user?.email],
        enabled: !loading,

        queryFn: async () => {
            const res = await axiosSecure(`/card?email=${user?.email}`)
            console.log('res from axios', res)
            return res.data;
        },
    })

    return [cart, refetch]

};

export default useCard;


