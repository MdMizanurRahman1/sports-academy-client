
import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';


const usePopular = () => {
    const { user } = useContext(AuthContext);

    const { refetch, data: popular = [] } = useQuery({
        queryKey: ['instructor'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/instructor`)
            return res.json();
        },
    })
    return [popular, refetch]
};

export default usePopular;