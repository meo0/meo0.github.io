import { useState } from "react"
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';

import { ProfilesErea } from "./ProfilesErea";
import { InfoErea } from "./InfoErea";

export const MainView = () => {
    return (
        <div style={{}}>
            <Box sx={{maxWidth: '1280px', mx:'auto'}}>
                <Grid container spacing={0.5} sx={{height:'100vh'}}>
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
        </div>
    )
}