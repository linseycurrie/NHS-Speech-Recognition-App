import React, {Component} from 'react';
import {DayPilot, DayPilotCalendar, DayPilotNavigator} from "daypilot-pro-react";
import '../ReminderStyle.css';

const styles = {
  wrap: {
    display: "flex"
  },
  left: {
    marginRight: "10px"
  },
  main: {
    flexGrow: "1"
  }
};

class ReminderComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      viewType: "Week",
      weekStarts: 0,
      locale: "en-gb",
      headerDateFormat: "dddd d MMM yyyy",
      durationBarVisible: true,
      timeRangeSelectedHandling: "Enabled",
      onTimeRangeSelected: args => {
        let dp = this.calendar; 
        DayPilot.Modal.prompt("Create new appointment reminder:").then(function(modal) {
          dp.clearSelection();
          if (!modal.result) { return; }
          dp.events.add(new DayPilot.Event({
            start: args.start,
            end: args.end,
            id: DayPilot.guid(),
            text: modal.result
          }));
        });
      },
      eventDeleteHandling: "Update",
      onEventClick: args => {
        let dp = this.calendar;
        DayPilot.Modal.prompt("Update appointment reminder:", args.e.text()).then(function(modal) {
          if (!modal.result) { return; }
          args.e.data.text = modal.result;
          dp.events.update(args.e);
        });
      },
    };
  }

  componentDidMount() {

    this.setState({
      startDate: "2020-12-06",
      events: [
        {
          id: 1,
          text: "New Filling @ Dentist",
          start: "2020-12-08T10:30:00",
          end: "2020-12-08T12:00:00"
        },
        {
          id: 2,
          text: "Diabetes Clinic @ QE Hospital",
          start: "2020-12-09T09:30:00",
          end: "2020-12-09T10:30:00",
          backColor: "#38761d"
        },
        {
          id: 2,
          text: "Open Heart Surgey @ Golden Jubilee Hospital ",
          start: "2021-12-10T10:15:00",
          end: "2021-12-10T16:30:00",
          backColor: "#cc4125"
        },
      ]
    });
  }

  render() {
    var {...config} = this.state;
    return (
      <div style={styles.wrap}>
        <div style={styles.left}>
          <DayPilotNavigator
            selectMode={"week"}
            showMonths={1}
            skipMonths={1}
            onTimeRangeSelected={ args => {
              this.setState({
                startDate: args.day
              });
            }}
          />
        </div>
        <div style={styles.main}>
        <DayPilotCalendar
          {...config}
          ref={component => {
            this.calendar = component && component.control;
          }}
        />
        </div>
      </div>
    );
  }
}

export default ReminderComponent;