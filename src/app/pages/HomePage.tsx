import { useQuery } from '@apollo/client';
import React from 'react'
import { Tasks } from '../../interfaces';
import { GET_TASK } from '../graphql/querys';
import { TareasLayout } from '../layout/TareasLayout'
import { CardTask } from '../components/CardTask';
import { Grid } from '@mui/material';

export const HomePage = () => {
  const { loading, error, data } = useQuery<Tasks>(GET_TASK);

 
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <TareasLayout>
      <Grid 
      container 
      spacing={3}
      
      sx={{marginTop:1}}
      flexWrap="wrap"
      >

        {
          data?.tasks.map((task)=>(
            <CardTask key={task.id} task={task}/>
          ))
        }
      </Grid>
    </TareasLayout>
  )
}
