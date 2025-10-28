
import Grid from '@mui/material/GridLegacy'; 
import Paper from "@mui/material/Paper";
import './ToursCared.css';
import { Box, Rating} from "@mui/material";
import { Typography } from "@mui/material";

import AccessTime from "@mui/icons-material/AccessTime";


const ToursCared = ({tours}) => {
   return (
     <Grid className='All' item xs={3}>
       <Paper elevation={6}>
         <img src={tours.image} className="img" />
         <Typography variant="body1" component="p" marginLeft={1}>
           {tours.name}
         </Typography>
         <Box
           sx={{
             display: "flex",
             alignItems: "center",
             marginLeft: "4px",
           }}
         >
           <AccessTime fontSize="small" />
           <Typography
             variant="body2"
             component="p"
             marginLeft={0.5}
             fontSize={11}
           >
             {tours.duration} hours
           </Typography>
         </Box>
         <Box
           sx={{
             display: "flex",
             alignItems: "center",
             marginTop: "20px",
           }}
         >
           <Rating
             name="half-rating-read"
             defaultValue={tours.rating}
             precision={0.5}
             readOnly
             size="small"
           />
           <Typography marginLeft={1}>{tours.rating}</Typography>
           <Typography className='rev'
             variant="body2"
             component="p"
             marginLeft={1}
             fontSize={10}
           >
             {tours.numberOfReviews} Reviews
           </Typography>
         </Box>
         <Box>
           <Typography variant="h6" component="h3" marginLeft={1}>
             Form C ${tours.price}
           </Typography>
         </Box>
       </Paper>
     </Grid>
   );
}



export default ToursCared;

