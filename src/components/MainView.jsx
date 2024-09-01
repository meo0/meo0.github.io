import { useState } from "react"
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';

import { ProfilesErea } from "./ProfilesErea";
import { InfoErea } from "./InfoErea";

export const MainView = () => {
    return (
        <div style={{}}>
            <Box sx={{maxWidth: '1280px', mx:'auto'}}>
                <Grid container spacing={0.5}>
                    <Grid size={3}>
                        <ProfilesErea />
                    </Grid>
                    <Grid size={9}>
                        <InfoErea/>
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}