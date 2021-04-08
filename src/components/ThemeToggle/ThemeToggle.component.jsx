import React, { useContext } from 'react';
import Switch from '@material-ui/core/Switch';
import { useVideos } from '../../providers/Context';

const ThemeToggle = () => {
  const videoContext = useVideos();

  return <Switch onClick={videoContext.toggleTheme} name="checkedA" />;
};
export default ThemeToggle;
