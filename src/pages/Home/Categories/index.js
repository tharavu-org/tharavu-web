import React, { useEffect } from 'react';
import { Box, Paper, Typography } from '@material-ui/core';
import Icon from '@mdi/react';
import {
  mdiChevronRight,
  mdiBank,
  mdiVideo,
  mdiHeart,
  mdiAtom,
  mdiRun,
  mdiMonitorCellphone,
  mdiAppsBox,
  mdiTree,
} from '@mdi/js';
import { format } from 'date-fns';
import { useDispatch, useSelector } from 'react-redux';

import Category from './Category';

export default function Categories() {
  const dispatch = useDispatch();
  const categoriesCount = useSelector((state) => state.event.categoriesCount);

  useEffect(() => {
    const todayDate = format(new Date(), 'Y-MM-dd');
    dispatch({ type: 'GET_EVENT_CATEGORIES_COUNT', payload: todayDate });
  }, [dispatch]);

  return (
    <Box p={2} component={Paper}>
      <Typography variant="button" color="primary">
        <Box display="flex" alignItems="center">
          <Icon path={mdiChevronRight} size={1.5} />
          Today
        </Box>
      </Typography>
      <Box display="flex" flexWrap="wrap">
        <Category
          label="Business"
          icon={mdiBank}
          count={categoriesCount.business}
        />
        <Category
          label="Entertainment"
          icon={mdiVideo}
          count={categoriesCount.entertainment}
        />
        <Category
          label="Environment"
          icon={mdiTree}
          count={categoriesCount.environment}
        />
        <Category
          label="Health"
          icon={mdiHeart}
          count={categoriesCount.health}
        />
        <Category
          label="Science"
          icon={mdiAtom}
          count={categoriesCount.science}
        />
        <Category label="Sports" icon={mdiRun} count={categoriesCount.sports} />
        <Category
          label="Technology"
          icon={mdiMonitorCellphone}
          count={categoriesCount.technology}
        />
        <Category
          label="Others"
          icon={mdiAppsBox}
          count={categoriesCount.others}
        />
      </Box>
    </Box>
  );
}
