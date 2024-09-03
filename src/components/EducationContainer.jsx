import {useContext} from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

import { education, learning } from './Data'
import { LanguageContext } from './SettingsContainer';



export const EduCard = ({link, imgId,name,description}) => {
  const handleCardClick = () => {
    if(link !== ''){
    window.location.href = link;
    }
  }
  return (
    <Box sx={{m:1}}>  
    <Card sx={{ maxWidth: 288,}}>
      <CardActionArea onClick={handleCardClick}>
        <CardMedia
          component="img"
          height="140"
          image={`/img/${imgId}`}
          alt={`${name}`}
          sx={{ objectFit: 'contain',}}
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

export const EducationContainer = () => {
    const {language} = useContext(LanguageContext);
    const educationData = education[language] || [];
    const eduCardList = educationData.map(edu => <EduCard key={edu.id} link={edu.link} imgId={edu.imgId} name={edu.name} description={edu.description} />);
    return (
        <Box>
            <Box sx={{color:'gray', typography: 'subtitle2'}}>education</Box>
            <Box sx={{display:'flex', flexWrap:'wrap', maxWidth:'100%', p:1, m:1}}>
                {eduCardList}
            </Box>
        </Box>
    );
}

export const LearningContainer = () => {
  const {language} = useContext(LanguageContext);
  const learningData = learning[`${language}`] || [];
  const lerningCardList = learningData.map(learning => <EduCard key={learning.id} link={learning.link} imgId={learning.imgId} name={learning.name} description={learning.description} />);
  return (
    <Box>
        <Box sx={{color:'gray', typography: 'subtitle2'}}>learning</Box>
        <Box sx={{display:'flex', flexWrap:'wrap', maxWidth:'100%', p:1, m:1}}>
            {lerningCardList}
        </Box>
    </Box>
  )
}