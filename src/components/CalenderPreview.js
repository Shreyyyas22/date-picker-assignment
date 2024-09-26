import React from 'react';
import { useSelector } from 'react-redux';
import { Box, Typography, Grid2 } from '@mui/material';

const CalendarPreview = () => {
  const { startDate, endDate, recurrenceType, recurrenceOptions } = useSelector((state) => state.date);

  const generateDates = () => {
    const dates = [];
    if (!startDate) return dates; // No start date, return empty array

    const start = new Date(startDate);
    let end = endDate ? new Date(endDate) : null;

    // If end date is not provided, set it to one year from the start date
    if (!end) {
      end = new Date(start);
      end.setFullYear(start.getFullYear() + 1);
    }

    const interval = Number(recurrenceOptions.interval || 1);

    // Validate interval to prevent infinite loops
    if (interval <= 0) {
      console.warn('Interval must be greater than 0');
      return [];
    }

    let currentDate = new Date(start);
    if (recurrenceType === 'daily') {
      while (currentDate <= end) {
        dates.push(currentDate.toISOString().split('T')[0]);
        currentDate.setDate(currentDate.getDate() + interval);
      }
    } else if (recurrenceType === 'weekly') {
      while (currentDate <= end) {
        dates.push(currentDate.toISOString().split('T')[0]);
        currentDate.setDate(currentDate.getDate() + 7 * interval);
      }
    } else if (recurrenceType === 'monthly') {
      while (currentDate <= end) {
        dates.push(currentDate.toISOString().split('T')[0]);
        currentDate.setMonth(currentDate.getMonth() + interval);
      }
    } else if (recurrenceType === 'yearly') {
      while (currentDate <= end) {
        dates.push(currentDate.toISOString().split('T')[0]);
        currentDate.setFullYear(currentDate.getFullYear() + interval);
      }
    }
    return dates;
  };

  const dates = generateDates();

  return (
    <Box mt={4}>
      <Typography variant="h6" gutterBottom>
        Recurring Dates Preview:
      </Typography>
      {dates.length > 0 ? (
        <Grid2 container spacing={2}>
          {dates.map((date, index) => (
            <Grid2 item xs={12} sm={6} md={4} lg={3} key={index}>
              <Typography variant="body2" align="center">
                {date}
              </Typography>
            </Grid2>
          ))}
        </Grid2>
      ) : (
        <Typography variant="body2">No recurring dates available</Typography>
      )}
    </Box>
  );
};

export default CalendarPreview;