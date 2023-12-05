import { TurnedInNot } from "@mui/icons-material"
import { Grid, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"
import { useDispatch } from "react-redux"
import { setActiveNote } from "../../store/journal/journalSlice";
import { useMemo } from "react";

export const SideBarItem = ({ title, body, id,date,imageUrls }) => {
    
    const newTitle = useMemo(() => {
        return title.length > 17
            ? title.substring(0,17) + '...'
            : title;
    }, [title])

    const dispatch = useDispatch();
    
    const onSelectNote = () =>{
        dispatch( setActiveNote({ title, body, id,date,imageUrls }) )
    }
  return (
    
    <ListItem disablePadding>
        <ListItemButton onClick={onSelectNote }>
            <ListItemIcon>
            <TurnedInNot/>
            </ListItemIcon>
            <Grid container>
                <ListItemText primary={ title } />
                <ListItemText secondary= {body} />
            </Grid>                      
        </ListItemButton>
    </ListItem>
        
  )
}
