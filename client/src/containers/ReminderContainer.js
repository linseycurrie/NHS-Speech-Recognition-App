import React from 'react';
import HeaderComponent from '../components/Header_Footer_elements/HeaderComponent';
import ReminderComponent from '../components/ReminderComponent';
import Request from '../helpers/request'

const ReminderContainer = () => {

    const headerCopy = "Your Reminders"

    const handlePost = function(reminder) {
        const request = new Request();
        request.post('/api/reminders', reminder)
        .then(() => window.location = "/")
    }

    return(
        <>
            <HeaderComponent headerCopy={headerCopy}/>
            <ReminderComponent onCreate={handlePost} />
        </>
    )
}

export default ReminderContainer;