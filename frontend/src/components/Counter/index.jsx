import React, { useState, useEffect } from "react";
import { Button, TextField, Box, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { socket } from "../../socket";
import { useParams } from "react-router-dom";
import CountdownTimer from "./CountdownTimer";
import CountdownSetting from "./CountdownSetting";
import CountdownBlock from "./CountdownBlock";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "black",
  },
}));

const Counter = () => {
  const classes = useStyles();
  const { id: sessionId } = useParams();
  const [sessionState, setSessionState] = useState(null);

  function startTimer(time) {
    socket.emit("start-timer", { room: sessionId, time });
  }

  function updateBlock(data) {
    socket.emit("update-session", {...data, room: sessionId})
  }

  useEffect(() => {
    if (!sessionId) return;
    socket.emit("join-session", { sessionName: sessionId });

    function onStateUpdate(data) {
      setSessionState(data);
    }

    socket.on("session-state", onStateUpdate);

    return () => {
      socket.off("session-state", onStateUpdate);
    };
  }, [sessionId]);

  useEffect(() => {
    if (sessionState && sessionState.blocks)console.log(sessionState.blocks);
  }, [sessionState]);

  return (
    <Box
      className={classes.root}
      sx={{
        textAlign: "center",
        color: "#fff",
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        backgroundColor: "#B6BBB0",
      }}
    >
      {/* {sessionState && (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {sessionState.blocks.map((b, i) => (
            <CountdownBlock key={i} id={b.id} time={b.time} unit={b.unit} title={b.title} updateBlock={updateBlock}/>
          ))}
        </Box>
      )} */}
      {/* (sessionState.isActive ? (
          <CountdownTimer endTime={sessionState.endedAt} />
        ) : (
          <CountdownSetting
            times={[5, 10, 15, 20, 30, 60]}
            startTimer={startTimer}
          />
        )) */}
    </Box>
  );
};

export default Counter;
