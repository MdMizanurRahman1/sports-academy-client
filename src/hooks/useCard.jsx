import { useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../providers/AuthProvider";


const useCard = () => {
    const { user } = useContext(AuthContext);

    const { refetch, data: card = [] } = useQuery({
        queryKey: ['card', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/addToCard?email=${user?.email}`)
            return res.json();
        },
    })

    return [card, refetch]
};

export default useCard;


