import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setRecurrenceType, setRecurrenceOptions } from '../dateSlice.js';
import { Box, Typography, Select, MenuItem, TextField } from '@mui/material';

const recurrenceTypes = ['none', 'daily', 'weekly', 'monthly', 'yearly'];

const RecurrenceSelector = () => {
  const dispatch = useDispatch();
  const recurrenceType = useSelector((state) => state.date.recurrenceType);
  const [customOptions, setCustomOptions] = useState({ interval: 1 });

  useEffect(() => {
    dispatch(setRecurrenceOptions(customOptions));
  }, [customOptions, dispatch]);

  const handleRecurrenceChange = (e) => {
    dispatch(setRecurrenceType(e.target.value));
  };

  const handleCustomOptionChange = (e) => {
    const { name, value } = e.target;
    setCustomOptions((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <Box mb={3}>
      <Typography variant="body1" gutterBottom>
        Recurrence
      </Typography>
      <Select
        fullWidth
        value={recurrenceType}
        onChange={handleRecurrenceChange}
        sx={{ mb: 2 }}
      >
        {recurrenceTypes.map((type) => (
          <MenuItem key={type} value={type}>
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </MenuItem>
        ))}
      </Select>
      {recurrenceType !== 'none' && (
        <TextField
          label={`Recurrence Interval (every X ${recurrenceType}s)`}
          type="number"
          name="interval"
          value={customOptions.interval}
          fullWidth
          onChange={handleCustomOptionChange}
        />
      )}
    </Box>
  );
};

export default RecurrenceSelector;