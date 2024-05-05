'use client'
import { useState, useEffect } from 'react';
import dayjs from 'dayjs';
import Badge from '@mui/material/Badge';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { PickersDay } from '@mui/x-date-pickers/PickersDay';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { DayCalendarSkeleton } from '@mui/x-date-pickers/DayCalendarSkeleton';

function fakeFetch(date, tasks, { signal }) {
  return new Promise((resolve, reject) => {
    const timeout = setTimeout(() => {
      const daysInMonth = date.daysInMonth();
      const highlightedDays = [];

      for (let i = 1; i <= daysInMonth; i++) {
        const dateStr = date.set('date', i).format('DD-MM-YYYY');
        if (tasks[dateStr] && tasks[dateStr].length > 0) {
          highlightedDays.push(i);
        }
      }
      resolve({ highlightedDays });
    }, 100);

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
  const [highlightedDays, setHighlightedDays] = useState([]);
  const [selectedDate, setSelectedDate] = useState(initialValue);
  const [tasks, setTasks] = useState(() => {
    // Initialize tasks from local storage or an empty object if not found
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : {};
  });

  useEffect(() => {
    // Save tasks to local storage whenever it changes
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const fetchHighlightedDays = (date) => {
    setIsLoading(true);
    fakeFetch(date, tasks, {
      signal: new AbortController().signal,
    })
      .then(({ highlightedDays }) => {
        setHighlightedDays(highlightedDays);
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
    const dateStr = selectedDate.format('DD-MM-YYYY');
    setTasks((prevTasks) => ({
      ...prevTasks,
      [dateStr]: [...(prevTasks[dateStr] || []), { task, completed: false }],
    }));
  };

  const handleDeleteTask = (date, index) => {
    setTasks((prevTasks) => ({
      ...prevTasks,
      [date]: prevTasks[date].filter((_, i) => i !== index),
    }));
  };

  const handleCheckboxChange = (date, index) => {
    setTasks((prevTasks) => ({
      ...prevTasks,
      [date]: prevTasks[date].map((task, i) =>
        i === index ? { ...task, completed: !task.completed } : task
      ),
    }));
  };

  return (
    <div className='w-4/5'>
      <h1 className='text-center'>Calendar</h1>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateCalendar
          value={selectedDate}
          onChange={handleDateChange}
          loading={isLoading}
          renderLoading={() => <DayCalendarSkeleton />}
          slots={{ day: ServerDay }}
          slotProps={{ day: { highlightedDays } }}
          sx={{
            height: '300px',
            width: '210px',
            '.MuiPickersDay-root': {
              width: '28px', 
              height: '28px', 
              margin: '0 1px',
              padding: '0px',
            },
            '.mui-dplwbx-MuiPickersCalendarHeader-label': {
              fontSize:'15 px',
              margin: '0px',
            },
            '.mui-1aqny2q-MuiPickersCalendarHeader-root': {
              padding:'0px',
            }
          }}
        />
      </LocalizationProvider>
      <div>
        <h2 className='text-center text-[14px]'>Todo List {selectedDate.format('DD-MM-YYYY')}</h2>
        <input 
          style={{padding:'10px', paddingLeft:'0px', borderRadius:'30px', outline: 'none'}}
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
          {tasks[selectedDate.format('DD-MM-YYYY')]?.map((task, index) => (
            <li  className=" py-1" key={index}>
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => handleCheckboxChange(selectedDate.format('DD-MM-YYYY'), index)}
              /><span  className='pr-2'></span>
                {task.task} {/* Display the task */}
              <button className="float-right pr-3 " onClick={() => handleDeleteTask(selectedDate.format('DD-MM-YYYY'), index)}>
                x
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CalendarPage;
