import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { TaskElement, Tasks } from '../../interfaces';


const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'description',
    headerName: 'Descripcion'
  },
 
];

interface Props{
  tasks:TaskElement[];
}

export const  GridTask =({tasks = []}:Props)=> {
  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={tasks}
        columns={columns}
        pageSizeOptions={[4]}
        autoPageSize
        pagination
        // experimentalFeatures={{ newEditingApi: true }}
      />
    </Box>
  );
}