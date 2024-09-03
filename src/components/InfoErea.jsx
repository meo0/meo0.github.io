import Box from '@mui/material/Box';
import { ProjectContainer } from './ProjectContainer';
import { EducationContainer, LearningContainer } from './EducationContainer';
import { SettingsContainer} from './SettingsContainer';


export const InfoErea = () => {
    return (
        <Box
            sx={{
            }}
        >
            <ProjectContainer />
            <EducationContainer />
            <LearningContainer />
            <SettingsContainer />
        </Box>
    )
}