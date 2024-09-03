import { useState, useContext, createContext } from 'react';
import Box from '@mui/material/Box';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import { projects, education, learning } from './Data';
import { useColorScheme } from '@mui/material/styles';
import { Luggage } from '@mui/icons-material';


export const LanguageContext = createContext({});

export const LanguageProvider = (props) => {
    const { children } = props;
    const [language, setLanguage] = useState('en');

    return (
        <LanguageContext.Provider value={{ language, setLanguage }}>
            {children}
        </LanguageContext.Provider>
    )
}


const ThemeContrler = () => {
    const { mode, setMode } = useColorScheme();
    if (!mode) {
        return null;
    }
    return (
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
    const {language, setLanguage} = useContext(LanguageContext);

    return (
            <Box>
                <Box sx={{ color: 'gray', typography: 'subtitle2' }}>settings</Box>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', maxWidth: '100%', p: 1, m: 1 }}>
                    <Card sx={{ maxWidth: 288, p:1, m:1}}>
                        <CardContent>
                            <Box>Theme Color</Box>
                        </CardContent>
                        <CardActions>
                            <ThemeContrler />
                        </CardActions>
                    </Card>
                    <Card sx={{ maxWidth: 288, p:1, m:1}}>
                        <CardContent>
                            <Box>Language</Box>
                        </CardContent>
                        <CardActions>
                            <Select
                                value={language}
                                onChange={(e) => setLanguage(e.target.value)}
                            >
                                <MenuItem value='en'>English</MenuItem>
                                <MenuItem value='ja'>日本語</MenuItem>
                            </Select>
                        </CardActions>
                    </Card>
                </Box>
            </Box>
    )
}