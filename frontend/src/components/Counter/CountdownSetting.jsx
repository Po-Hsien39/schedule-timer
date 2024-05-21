import { Typography, Button, Box } from "@mui/material"

const CountdownSetting = ({ times, startTimer }) => {

    const handleCountdownSetting = (index) => {
        startTimer(times[index]);
    }

    return (
        <div>
            <Typography variant="h5" gutterBottom>
                Countdown Setting
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
                {times.map((time, index) => (
                    <Button key={index} variant="contained" sx={{ margin: 1 }} onClick={(e) => handleCountdownSetting(index)}>
                        {time}
                    </Button>
                ))}
            </Box>
        </div>
    )
}

export default CountdownSetting;