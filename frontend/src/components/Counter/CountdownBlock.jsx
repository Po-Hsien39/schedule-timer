import { useEffect, useState } from "react";
import {
  Box,
  MenuItem,
  IconButton,
  TextField,
  Typography,
  Grid,
} from "@material-ui/core";
import { Timer, Edit as EditIcon, Done as DoneIcon } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import DeleteIcon from '@mui/icons-material/Delete';

const useStyles = makeStyles((theme) => ({
  grid: {
    padding: theme.spacing(1),
    textAlign: "center",
    backgroundColor: "#A4A2A1",
    display: "flex",
    flexDirection: "row",
    margin: "10px 0px",
    width: "70%",
    borderRadius: "10px",
    alignItems: "center",
    justifyContent: "center",
    color: "#000",
  },
  gridComponent: {
    display: "flex",
    fontSize: "15px",
    // justifyContent: 'space-between',
  },
  box: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

const currencies = [
  {
    value: "Second",
    label: "(s)",
  },
  {
    value: "Min",
    label: "(m)",
  },
  {
    value: "Hour",
    label: "(h)",
  },
];

const CountdownBlock = ({ id, time, unit, title, updateBlock, deleteBlock }) => {
  const classes = useStyles();
  const [displayBlock, setDisplayBlock] = useState({
    id,
    title,
    unit,
    time,
  });
  const [openSettings, setOpenSettings] = useState(false);

  useEffect(() => {
    setDisplayBlock({
      id,
      title,
      unit,
      time,
    });
  }, [id, time, unit, title]);

  useEffect(() => {
    console.log(displayBlock);
  }, [displayBlock]);

  return (
    <Grid className={classes.grid} container>
      <Grid item xs={12} md={1} />
      <Grid item xs={12} md={2} className={classes.gridComponent}>
        <Box className={classes.box}>
          <Timer fontSize="small" />
        </Box>
        <Box style={{ width: "10px" }} />
        {openSettings ? (
          <Box className={classes.box}>
            <TextField
              hiddenLabel
              id="filled-hidden-label-small"
              variant="standard"
              type="number"
              style={{ width: 50 }}
              value={displayBlock.time}
              onChange={(e) =>
                setDisplayBlock((p) => ({ ...p, time: e.target.value }))
              }
            />
            <Box style={{ width: "10px" }} />
            <TextField
              id="standard-select-currency"
              select
              defaultValue={displayBlock.unit}
              variant="standard"
              onChange={(e) =>
                setDisplayBlock((p) => ({ ...p, unit: e.target.value }))
              }
            >
              {currencies.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Box>
        ) : (
          <Box className={classes.box}>
            <Typography>
              {displayBlock.time} {displayBlock.unit}
            </Typography>
          </Box>
        )}
      </Grid>
      <Grid item xs={12} md={7} sx={{ textAlign: "start" }}>
        {openSettings ? (
          <TextField
            hiddenLabel
            id="filled-hidden-label-small"
            variant="standard"
            style={{ width: "80%" }}
            inputProps={{
              style: {
                textAlign: "center", // 將文字對齊方式設為居中
              },
            }}
            value={displayBlock.title}
            onChange={(e) =>
              setDisplayBlock((p) => ({ ...p, title: e.target.value }))
            }
          />
        ) : (
          <Typography>{displayBlock.title}</Typography>
        )}
      </Grid>
      <Grid className={classes.box} item xs={12} md={2}>
        <IconButton
          onClick={() => setOpenSettings((p) => !p)}
          style={{ outline: "none", border: "none" }}
        >
          {openSettings ? (
            <DoneIcon
              fontSize="small"
              color="primary"
              onClick={() => updateBlock(displayBlock)}
            />
          ) : (
            <EditIcon fontSize="small" />
          )}
        </IconButton>
        <IconButton
          onClick={() => deleteBlock(id)}
          style={{ outline: "none", border: "none" }}
        >
          <DeleteIcon />
        </IconButton>
      </Grid>
      <Box></Box>
    </Grid>
  );
};

export default CountdownBlock;
