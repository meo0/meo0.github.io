import Box from '@mui/material/Box';
import { ThemeProvider, createTheme, useColorScheme } from "@mui/material/styles";
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';



const ThemeContrler = () => {
    const {mode, setMode} = useColorScheme();
    if (!mode) {
        return null;
    }
    return(
        <Box sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
            p: 3,
            borderRadius: 1,
            bgcolor: 'background.default',
            color: 'text.primary',
            boxShadow: 2,
            width: '100%',
            minHeight: '56px'
        }}>
            <Select
                value={mode}
                onChange={(e) => setMode(e.target.value)}
            >
                <MenuItem value='system'>system</MenuItem>
                <MenuItem value='light'>light</MenuItem>
                <MenuItem value='dark'>dark</MenuItem>
            </Select>
        </Box>
    )
}

export const SettingsContainer = () => {
    return(
        <Box>
            <Box sx={{color:'gray', typography: 'subtitle2'}}>settings</Box>
            <Box sx={{display:'flex', flexWrap:'wrap', maxWidth:'100%', p:1, m:1}}>
                <Card sx={{ maxWidth: 288,}}>
                    <CardContent>
                        <Box>Theme Color</Box>
                    </CardContent>
                    <CardActions>
                        <ThemeContrler/>
                    </CardActions>
                </Card>
            </Box>
        </Box>
    )
}