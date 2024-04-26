// pages/calendar.js
'use client'
import { useState, useEffect } from 'react';
import dayjs from 'dayjs';
import Badge from '@mui/material/Badge';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { PickersDay } from '@mui/x-date-pickers/PickersDay';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { DayCalendarSkeleton } from '@mui/x-date-pickers/DayCalendarSkeleton';


function fakeFetch(date, { signal }) {
  return new Promise((resolve, reject) => {
    const timeout = setTimeout(() => {
      const daysInMonth = date.daysInMonth();
      const daysToHighlight = [1, 2, 3].map(() => getRandomNumber(1, daysInMonth));

      resolve({ daysToHighlight });
    }, 500);

    signal.onabort = () => {
      clearTimeout(timeout);
      reject(new DOMException('aborted', 'AbortError'));
    };
  });
}

const initialValue = dayjs();

function ServerDay(props) {
  const { highlightedDays = [], day, outsideCurrentMonth, ...other } = props;

  const isSelected =
    !props.outsideCurrentMonth && highlightedDays.indexOf(props.day.date()) >= 0;

  return (
    <Badge
      key={props.day.toString()}
      overlap="circular"
      badgeContent={isSelected ? '🔵' : undefined}
    >
      <PickersDay {...other} outsideCurrentMonth={outsideCurrentMonth} day={day} />
    </Badge>
  );
}

const CalendarPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [highlightedDays, setHighlightedDays] = useState([0, 0, 0]);
  const [selectedDate, setSelectedDate] = useState(initialValue);
  const [tasks, setTasks] = useState({});

  const fetchHighlightedDays = (date) => {
    setIsLoading(true);
    fakeFetch(date, {
      signal: new AbortController().signal,
    })
      .then(({ daysToHighlight }) => {
        const highlightedDays = daysToHighlight.filter(day => {
            const dateStr = date.set('date', day).format('YYYY-MM-DD');
            return tasks[dateStr] && tasks[dateStr].length > 0;
          });
        setHighlightedDays(daysToHighlight);
        setIsLoading(false);
      })
      .catch((error) => {
        if (error.name !== 'AbortError') {
          throw error;
        }
      });
  };

  useEffect(() => {
    fetchHighlightedDays(selectedDate);
  }, [selectedDate]);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleAddTask = (task) => {
    const dateStr = selectedDate.format('YYYY-MM-DD');
    setTasks((prevTasks) => ({
      ...prevTasks,
      [dateStr]: [...(prevTasks[dateStr] || []), task],
    }));
  };

  const handleDeleteTask = (date, index) => {
    setTasks((prevTasks) => ({
      ...prevTasks,
      [date]: prevTasks[date].filter((_, i) => i !== index),
    }));
  };

  return (
    <div>
      <h1>Calendar</h1>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateCalendar
          value={selectedDate}
          onChange={handleDateChange}
          loading={isLoading}
          renderLoading={() => <DayCalendarSkeleton />}
          slots={{ day: ServerDay }}
          slotProps={{ day: { highlightedDays } }}
        />
      </LocalizationProvider>
      <div>
        <h2>Todo List {selectedDate.format('DD-MM-YYYY')}</h2>
        <input
          type="text"
          placeholder="Enter task"
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              handleAddTask(e.target.value);
              e.target.value = '';
            }
          }}
        />
        <ul>
          {tasks[selectedDate.format('YYYY-MM-DD')]?.map((task, index) => (
            <li key={index}>
              <input
                type="checkbox"
                onChange={() => {}}
                checked={false} // Implement your logic for checkbox status
              />
              {task}
              <button onClick={() => handleDeleteTask(selectedDate.format('YYYY-MM-DD'), index)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CalendarPage;
