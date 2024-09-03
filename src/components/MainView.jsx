import { useContext, useState } from "react"
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import { ThemeProvider, createTheme, useColorScheme } from "@mui/material/styles";

import { ProfilesErea } from "./ProfilesErea";
import { InfoErea } from "./InfoErea";
import { LanguageContext, LanguageProvider } from "./SettingsContainer";

const theme = createTheme({
    colorSchemes: {
        dark: true,
    },
});

export const MainView = () => {
    const language = useContext(LanguageContext);
    return (
        <ThemeProvider theme={theme}>
        <Box sx={{height:'100vh', bgcolor:'background.default', color:'text.primary'}}>
            <Box sx={{maxWidth: '1280px', mx:'auto', height:'100%'}}>
                <Grid container spacing={0.5} sx={{height:'100%'}}>
                    <Grid size={3} sx={{}}>
                        <ProfilesErea />
                    </Grid>
                    <Grid size={9} sx={{
                        height: '100%', // 画面の高さに固定
                        overflowY: 'scroll', // 垂直方向のスクロールを有効にする
                        scrollbarWidth: 'none', // Firefox用
                        '&::-webkit-scrollbar': {
                            display: 'none', // Chrome, Safari, Edge用
                        },
                    }}>
                        <InfoErea/>
                    </Grid>
                </Grid>
            </Box>
        </Box>
        </ThemeProvider>
    )
}