import {useState, useEffect} from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';


import GitHubIcon from '@mui/icons-material/GitHub';

const GitHubUserProfile = ({ username }) => {
  const [userData, setUserData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(`https://api.github.com/users/${username}`);
        if (!response.ok) {
          throw new Error('User not found');
        }
        const data = await response.json();
        setUserData(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [username]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <Avatar src={userData.avatar_url} alt={`${username}'s avatar`} sx={{maxWidth:250, maxHeight:250,width:'100%', height:'100%'}} />
      <h2>{userData.name || 'No name provided'}</h2>
      <p>{userData.bio || 'No bio available'}</p>
      {/*<p>Followers: {userData.followers}</p>
      <p>Following: {userData.following}</p>
      <p>Public Repos: {userData.public_repos}</p>*/}
      <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
        <GitHubIcon sx={{color:'text.secondary'}}/>
      </a>
    </div>
  );
};

export const ProfilesErea = () => {
    return (
        <Box sx={{mt:5}}>
            <GitHubUserProfile username={'meo0'}/>
        </Box>
    )
}