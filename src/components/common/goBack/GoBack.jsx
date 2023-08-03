import { Box, IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
const GoBack = () => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        position: "fixed",
        right: { xs: "10px", sm: "40px" },
        bottom: "20px",
        border: "2px solid steelblue",
        borderRadius: "50%",
        backgroundColor: "white",
        zIndex: 1
      }}
    >
      <IconButton color="primary" onClick={() => navigate(-1)}>
        <ArrowBackIcon color="primary"/>
      </IconButton>
    </Box>
  );
};

export default GoBack;
