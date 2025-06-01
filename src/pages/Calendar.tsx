import React, { useState, useEffect } from 'react';
import '../css/calendar.css';

interface Event {
  id: string;
  title: string;
  date: string;
  time?: string;
  description?: string;
  type: 'meeting' | 'deadline' | 'personal' | 'work' | 'event';
}

const Calendar: React.FC = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [events, setEvents] = useState<Event[]>([]);
  const [showEventModal, setShowEventModal] = useState(false);
  const [newEvent, setNewEvent] = useState<Partial<Event>>({
    title: '',
    date: '',
    time: '',
    description: '',
    type: 'personal'
  });

  // Get current month and year
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();

  // Get first day of month and number of days
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1);
  const lastDayOfMonth = new Date(currentYear, currentMonth + 1, 0);
  const daysInMonth = lastDayOfMonth.getDate();
  const startingDayOfWeek = firstDayOfMonth.getDay();

  // Month names
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  // Load events from localStorage on component mount
  useEffect(() => {
    const savedEvents = localStorage.getItem('calendar-events');
    if (savedEvents) {
      setEvents(JSON.parse(savedEvents));
    }
  }, []);

  // Save events to localStorage whenever events change
  useEffect(() => {
    localStorage.setItem('calendar-events', JSON.stringify(events));
  }, [events]);

  const navigateMonth = (direction: 'prev' | 'next') => {
    setCurrentDate(prev => {
      const newDate = new Date(prev);
      if (direction === 'prev') {
        newDate.setMonth(prev.getMonth() - 1);
      } else {
        newDate.setMonth(prev.getMonth() + 1);
      }
      return newDate;
    });
  };

  const handleDateClick = (day: number) => {
    const clickedDate = new Date(currentYear, currentMonth, day);
    setSelectedDate(clickedDate);
    setNewEvent(prev => ({
      ...prev,
      date: clickedDate.toISOString().split('T')[0]
    }));
  };

  const getEventsForDate = (day: number): Event[] => {
    const dateStr = new Date(currentYear, currentMonth, day).toISOString().split('T')[0];
    return events.filter(event => event.date === dateStr);
  };

  const handleAddEvent = () => {
    if (newEvent.title && newEvent.date) {
      const event: Event = {
        id: Date.now().toString(),
        title: newEvent.title,
        date: newEvent.date,
        time: newEvent.time,
        description: newEvent.description,
        type: newEvent.type as Event['type']
      };
      setEvents(prev => [...prev, event]);
      setNewEvent({
        title: '',
        date: '',
        time: '',
        description: '',
        type: 'personal'
      });
      setShowEventModal(false);
    }
  };

  const handleDeleteEvent = (eventId: string) => {
    setEvents(prev => prev.filter(event => event.id !== eventId));
  };

  const renderCalendarDays = () => {
    const days = [];
    
    // Empty cells for days before the first day of the month
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(<div key={`empty-${i}`} className="calendar-day empty"></div>);
    }

    // Days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const dayEvents = getEventsForDate(day);
      const isToday = new Date().toDateString() === new Date(currentYear, currentMonth, day).toDateString();
      const isSelected = selectedDate?.toDateString() === new Date(currentYear, currentMonth, day).toDateString();

      days.push(
        <div
          key={day}
          className={`calendar-day ${isToday ? 'today' : ''} ${isSelected ? 'selected' : ''} ${dayEvents.length > 0 ? 'has-events' : ''}`}
          onClick={() => handleDateClick(day)}
        >
          <span className="day-number">{day}</span>
          {dayEvents.length > 0 && (
            <div className="event-indicators">
              {dayEvents.slice(0, 3).map((event, index) => (
                <div
                  key={index}
                  className={`event-dot ${event.type}`}
                  title={event.title}
                ></div>
              ))}
              {dayEvents.length > 3 && <span className="more-events">+{dayEvents.length - 3}</span>}
            </div>
          )}
        </div>
      );
    }

    return days;
  };

  return (
    <div className="calendar-container">
      <div className="calendar-header">
        <h1>Calendar</h1>
        <div className="calendar-controls">
          <button onClick={() => navigateMonth('prev')} className="nav-button">
            ←
          </button>
          <h2>{monthNames[currentMonth]} {currentYear}</h2>
          <button onClick={() => navigateMonth('next')} className="nav-button">
            →
          </button>
        </div>
        <button 
          onClick={() => setShowEventModal(true)} 
          className="add-event-button"
        >
          Add Event
        </button>
      </div>

      <div className="calendar-grid">
        <div className="weekday-headers">
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
            <div key={day} className="weekday-header">{day}</div>
          ))}
        </div>
        <div className="calendar-days">
          {renderCalendarDays()}
        </div>
      </div>

      {selectedDate && (
        <div className="selected-date-events">
          <h3>Events for {selectedDate.toLocaleDateString()}</h3>
          {getEventsForDate(selectedDate.getDate()).map(event => (
            <div key={event.id} className={`event-item ${event.type}`}>
              <div className="event-content">
                <h4>{event.title}</h4>
                {event.time && <p className="event-time">{event.time}</p>}
                {event.description && <p className="event-description">{event.description}</p>}
              </div>
              <button 
                onClick={() => handleDeleteEvent(event.id)}
                className="delete-event-button"
              >
                ×
              </button>
            </div>
          ))}
        </div>
      )}

      {showEventModal && (
        <div className="modal-overlay" onClick={() => setShowEventModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h3>Add New Event</h3>
            <div className="form-group">
              <label>Title:</label>
              <input
                type="text"
                value={newEvent.title || ''}
                onChange={(e) => setNewEvent(prev => ({ ...prev, title: e.target.value }))}
                placeholder="Event title"
              />
            </div>
            <div className="form-group">
              <label>Date:</label>
              <input
                type="date"
                value={newEvent.date || ''}
                onChange={(e) => setNewEvent(prev => ({ ...prev, date: e.target.value }))}
              />
            </div>
            <div className="form-group">
              <label>Time (optional):</label>
              <input
                type="time"
                value={newEvent.time || ''}
                onChange={(e) => setNewEvent(prev => ({ ...prev, time: e.target.value }))}
              />
            </div>
            <div className="form-group">
              <label>Type:</label>
              <select
                value={newEvent.type || 'personal'}
                onChange={(e) => setNewEvent(prev => ({ ...prev, type: e.target.value as Event['type'] }))}
              >
                <option value="personal">Personal</option>
                <option value="work">Work</option>
                <option value="meeting">Meeting</option>
                <option value="deadline">Deadline</option>
              </select>
            </div>
            <div className="form-group">
              <label>Description (optional):</label>
              <textarea
                value={newEvent.description || ''}
                onChange={(e) => setNewEvent(prev => ({ ...prev, description: e.target.value }))}
                placeholder="Event description"
              />
            </div>
            <div className="modal-buttons">
              <button onClick={handleAddEvent} className="save-button">Save Event</button>
              <button onClick={() => setShowEventModal(false)} className="cancel-button">Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Calendar;