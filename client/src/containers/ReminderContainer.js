import React from 'react';
import ReminderComponent from '../components/ReminderComponent';
import Request from '../helpers/request'

const ReminderContainer = () => {
    const handlePost = function(reminder) {
        const request = new Request();
        request.post('/api/reminders', reminder)
    }

    return(
        <ReminderComponent onCreate={handlePost} />
    )
}

export default ReminderContainer;