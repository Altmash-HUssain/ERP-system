
import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

const CalendarView = ({ orders }) => {
    const events = orders.map(order => ({
        title: `Order ${order.id}`,
        start: new Date(order.orderDate),
        end: new Date(order.orderDate),
    }));

    return (
        <div>
            <h1>Calendar View</h1>
            <div style={{ height: 500 }}>
                <Calendar
                    localizer={localizer}
                    events={events}
                    startAccessor="start"
                    endAccessor="end"
                    style={{ margin: '20px' }}
                />
            </div>
        </div>
    );
};

export default CalendarView;
