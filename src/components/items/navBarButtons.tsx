import styled from "@emotion/styled";
import MuiButton from "@mui/material/Button";
export const NavBarButtons = styled(MuiButton)((props) => ({
    borderRadius: 20,
    label: props.name,
    height: "25px", 
    width: "103px",
    marginTop: "auto",
    marginBottom: "auto",
    color: "#FFFFFF",
    padding: "1vh",
    marginRight: "1vh",
    backgroundColor: "#990909",
    opacity: "0.90",
    "&:hover": {
        backgroundColor: "#B40A0A",
    }
  }));