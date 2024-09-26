import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setStartDate, setEndDate } from '../dateSlice.js';
import { TextField, Box, Typography } from '@mui/material';
import RecurrenceSelector from '../components/RecurrenceSelector.js';
import CalendarPreview from '../components/CalenderPreview.js';

const DatePicker = () => {
  const dispatch = useDispatch();
  const startDate = useSelector((state) => state.date.startDate);
  const endDate = useSelector((state) => state.date.endDate);

  const handleDateChange = (e, type) => {
    if (type === 'start') {
      dispatch(setStartDate(e.target.value));
    } else {
      dispatch(setEndDate(e.target.value));
    }
  };

  return (
    <Box
      sx={{
        p: 4,
        bgcolor: 'background.paper',
        borderRadius: 2,
        boxShadow: 3,
        maxWidth: 400,
      }}
    >
      <Typography variant="h6" gutterBottom>
        Select Dates
      </Typography>
      <TextField
        label="Start Date"
        type="date"
        fullWidth
        value={startDate || ''}
        onChange={(e) => handleDateChange(e, 'start')}
        slotProps={{ inputLabel: { shrink: true } }}  // Updated here
        sx={{ mb: 2 }}
      />
      <TextField
        label="End Date (Optional)"
        type="date"
        fullWidth
        value={endDate || ''}
        onChange={(e) => handleDateChange(e, 'end')}
        slotProps={{ inputLabel: { shrink: true } }}  // Updated here
      />
      <RecurrenceSelector />
      <CalendarPreview />
    </Box>
  );
};

export default DatePicker;