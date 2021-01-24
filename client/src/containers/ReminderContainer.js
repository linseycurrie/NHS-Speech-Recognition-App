import React from 'react';
import HeaderComponent from '../components/Header_Footer_elements/HeaderComponent';
import CalendarComponent from '../components/ReminderComponents/CalendarComponent';
import ReminderComponent from '../components/ReminderComponents/ReminderComponent';
import Request from '../helpers/request'

const ReminderContainer = () => {

    const headerCopy = "Your Reminders";
    const headerBanner = "/calendar.jpg";

    const handlePost = function(reminder) {
        const request = new Request();
        request.post('/api/reminders', reminder)
        .then(() => window.location = "/")
    }

    return(
        <>
            <HeaderComponent headerCopy={headerCopy} headerBanner={headerBanner}/>
            <ReminderComponent onCreate={handlePost} />
            <CalendarComponent />
        </>
    )
}

export default ReminderContainer;