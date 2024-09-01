import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

import {projects} from './Data'

export default function ProjectCard({name, imgId, description, link}) {
  const handleCardClick = () => {
    window.location.href = link;
  }
  return (
    <Card sx={{ maxWidth: 345, m:1}}>
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
  );
}

export const ProjectContainer = ({title}) => {
    const projectcardlist = projects.map(project => 
        <ProjectCard key={project.id} name={project.name} imgId={project.imgId} description={project.description} link={project.link} />);
    return (
        <>
            <Box sx={{color:'gray', typography: 'subtitle2'}}>{title}</Box>
            <Box sx={{display:'inline-flex'}}>
                {projectcardlist}
            </Box>
        </>
    )
}