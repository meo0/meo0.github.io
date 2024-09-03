import { useContext } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import { projects } from './Data';
import { LanguageContext } from './SettingsContainer';

export function ProjectCard({ name, imgId, description, link }) {
    const handleCardClick = () => {
        window.location.href = link;
    }
    return (
        <Box sx={{ m: 1 }}>
            <Card sx={{ maxWidth: 288, }}>
                <CardActionArea onClick={handleCardClick}>
                    <CardMedia
                        component="img"
                        height="140"
                        image={`/img/${imgId}`}
                        alt={`${name}`}
                        sx={{ objectFit: 'cover', objectPosition: 'top' }}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {`${name}`}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            {`${description}`}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Box>
    );
}

export const ProjectContainer = () => {
    const {language} = useContext(LanguageContext);
    console.log(language);
    const projectsData = projects[`${language}`] || [];
    const projectcardlist = projectsData.map(project =>
        <ProjectCard key={project.id} name={project.name} imgId={project.imgId} description={project.description} link={project.link} />);
    return (
        <Box sx={{ widows: '100%', pt: 15 }}>
            <Box sx={{ color: 'gray', typography: 'subtitle2' }}>projects</Box>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', maxWidth: '100%', p: 1, m: 1 }}>
                {projectcardlist}
            </Box>
        </Box>
    )
}