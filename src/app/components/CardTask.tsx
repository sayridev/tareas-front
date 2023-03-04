import { Card, CardContent, LinearProgress, Typography } from "@mui/material"
import { TaskElement } from "../../interfaces"

interface Props{
    task:TaskElement
}



export const CardTask = ({task}:Props) => {


    const progress = (value:string) => {
        switch (value) {
            case "pendiente":
                return 10;
            case "en-progreso":
                return 40;
            case "completado":
                return 100;
        
            default:
                return 0;
        }
      
    }

  return (
    <Card sx={{minWidth:275,margin:2, maxWidth: 275, border:'1px solid' ,borderColor:'primary.main'}} >
        <CardContent>
        <Typography sx={{ fontSize: 16,borderRadius:1,padding:1,backgroundColor:'secondary.main',display:'flex' }} color="white" gutterBottom>
          {task.description}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
         Estado: {task.status}
        </Typography>
        <LinearProgress variant="determinate" value={progress(task.status)} />
        </CardContent>
    </Card>
  )
}
