import { useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../providers/AuthProvider";


const useCard = () => {
    const { user } = useContext(AuthContext);

    const { refetch, data: cart = [] } = useQuery({
        queryKey: ['card', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/card?email=${user?.email}`)
            return res.json();
        },
    })

    return [cart, refetch]
};

export default useCard;


