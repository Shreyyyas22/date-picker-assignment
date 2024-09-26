import DatePicker from "../components/DatePicker.js";
import { Box } from '@mui/material'

const HomePage = () => {
    return (
        <Box sx={{ display: "flex",
            justifyContent: "center",
            alignItems: 'center',
            height: "100vh",
        }}
        >
        
        <div>
            <h1 className="text-center text-lg">Date Picker Assignment</h1>
            <DatePicker />
        </div>
        
        </Box>
    )
}

export default HomePage;
