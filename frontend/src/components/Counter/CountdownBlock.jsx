import React, { useState } from 'react';
import {
  Box,
  Button,
  Collapse,
  IconButton,
  TextField,
  Typography,
  Grid
} from '@material-ui/core';
import { Timer, ExpandMore as ExpandMoreIcon, ArrowDownward } from '@material-ui/icons';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  grid: {
    padding: theme.spacing(1),
    textAlign: "center",
    backgroundColor: "#A4A2A1",
    display: 'flex',
    flexDirection: 'row',
    margin: '10px 0px',
    width: '70%',
    borderRadius: '10px',
    alignItems: 'center',
  },
  gridComponent: {
    display: 'flex',
    fontSize: '15px',
    justifyContent: 'space-between',
  }
}));

const CountdownBlock = ({ num }) => {
  const classes = useStyles();
  const [isCounting, setIsCounting] = useState(false);
  const [timerValue, setTimerValue] = useState(60); // 初始時間為 60 秒
  const [timerName, setTimerName] = useState('');
  const [openSettings, setOpenSettings] = useState(false);

  const handleStartCountdown = () => {
    setIsCounting(true);
    // 在這裡可以寫開始倒數的邏輯，例如使用 setInterval()
  };

  const handleStopCountdown = () => {
    setIsCounting(false);
    // 在這裡可以寫停止倒數的邏輯，例如清除 setInterval()
  };

  const handleResetCountdown = () => {
    setIsCounting(false);
    setTimerValue(60); // 重設倒數計時器時間
  };

  const handleInputChange = (event) => {
    setTimerValue(event.target.value);
  };

  const handleNameChange = (event) => {
    setTimerName(event.target.value);
  };

  // return (
  //   <Box>
  //     {/* 倒數計時器 */}
  //     <Grid container sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
  //       <Grid item xs={12} md={2}>
  //         {/* <LocalOfferIcon fontSize="small" /> */}
  //         tet
  //       </Grid>
  //       <Grid item xs={12} md={10} sx={{ textAlign: 'start' }}>
  //         <Typography>test</Typography>
  //       </Grid>
  //     </Grid>
  //     <Box sx={{ display: 'flex', flexDirection: 'row' }}>
  //       {/* <Box>
  //         <IconButton onClick={isCounting ? handleStopCountdown : handleStartCountdown}>
  //           <Timer />
  //         </IconButton>
  //       </Box>
  //       <Box>
  //         <Typography variant="h5">
  //           {isCounting ? timerValue : `${timerValue} 秒`}
  //         </Typography>
  //       </Box> */}
  //     </Box>
  //     {/* <IconButton onClick={() => setOpenSettings(!openSettings)}>
  //       <ExpandMoreIcon />
  //     </IconButton> */}
  //     {/* <Collapse in={openSettings}>
  //       <Box mt={2}>
  //         <TextField
  //           label="名稱"
  //           variant="outlined"
  //           value={timerName}
  //           onChange={handleNameChange}
  //         />
  //         <TextField
  //           label="計時時間 (秒)"
  //           variant="outlined"
  //           type="number"
  //           value={timerValue}
  //           onChange={handleInputChange}
  //         />
  //         <Button onClick={handleResetCountdown} variant="contained" color="primary">
  //           重設計時器
  //         </Button>
  //       </Box>
  //     </Collapse> */}
  //   </Box>
  // );

  return (
    <Grid className={classes.grid} container sx={{
      // display: 'flex',
      // flexDirection: 'row',
      // alignItems: 'center',
      // marginTop: '10px',
    }}>
      <Grid item xs={12} md={1} />
      <Grid item xs={12} md={2} className={classes.gridComponent}>
        <Box sx={{ marginRight: '10px' }}>
          <Timer fontSize="small" />
        </Box>
        <Typography>{num} mins</Typography>
      </Grid>
      <Grid item xs={12} md={8} sx={{ textAlign: 'start' }}>
        <Typography>test</Typography>
      </Grid>
      <Grid item xs={12} md={1} >
        <IconButton onClick={() => setOpenSettings((p) => !p)}>
          <ArrowDownward />
        </IconButton>
      </Grid>
      <Box>
        {/* <IconButton onClick={isCounting ? handleStopCountdown : handleStartCountdown}>
          <Timer />
        </IconButton> */}
        {/* <Typography variant="h5">
          {isCounting ? timerValue : `${timerValue} 秒`}
        </Typography> */}
      </Box>
      <Collapse in={openSettings}>
        <Box mt={2}>
          <TextField
            label="名稱"
            variant="outlined"
            value={timerName}
            onChange={handleNameChange}
          />
          <TextField
            label="計時時間 (秒)"
            variant="outlined"
            type="number"
            value={timerValue}
            onChange={handleInputChange}
          />
          <Button onClick={handleResetCountdown} variant="contained" color="primary">
            重設計時器
          </Button>
        </Box>
      </Collapse>
    </Grid>
  )
};

export default CountdownBlock;
