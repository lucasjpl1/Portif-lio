import { styled } from "@mui/material"
import { ReactNode } from "react"


interface StyledButoonProps {
    children: ReactNode
}

const StyledButton: React.FC<StyledButoonProps> = ({ children }) => {
  
    const StyledButton = styled("button")(({ theme })=> ({
        backgroundColor: "tranparent",
        border: '1px solid ${theme.palette.primary.contrastText}',
        borderRadius: "3px",
        padding: "5px 15px",
        width: "100%",
        color: theme.palette.primary.contrastText,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "10px",
        '&:hover':{
            backgroundColor: theme.palette.secondary.dark
        } 
    }))


    return (
      <>
        <StyledButton>
            {children}
        </StyledButton>
      </>
    )
  }
  
  export default StyledButton
  