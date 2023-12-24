
import { useQuery } from '@tanstack/react-query';
import styles from './station-table.module.css'
import axios from 'axios';
import { baseUrl } from '../../consts';
import { WayTable } from './way-table';

export interface IParkTableProps {
    id: number;
    ways: any[];
}

export function ParkTable({ id, ways }: IParkTableProps) {

    const { data } = useQuery({
        queryKey: ["get-park", id],
        queryFn: async () => {
          const response = await axios.get(`${baseUrl}park/${id}`);
          return response.data;
        },
      });

    if(!data) { return null }

    return (    
        <div className={styles.table}>
            <div className={styles.table__header}>
                <p className={styles.table__name}>{data.name}</p>
            </div>
            {ways.map((w: any) => <WayTable way={w} />)}
        </div>
    )
}