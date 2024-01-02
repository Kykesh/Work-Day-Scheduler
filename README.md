# Work Day Scheduler

## Overview

The Work Day Scheduler is a simple and intuitive application designed to help employees with busy schedules manage their time more effectively. By providing a daily planner for the standard business hours of 9 AM to 5 PM, users can easily add and save important events for each hour of the day. This browser-based application features a dynamically updated user interface powered by jQuery and utilizes the Day.js library for date and time manipulation.

## Table of Contents
1. [Overview](#overview)
2. [User Story](#user-story)
3. [Acceptance Criteria](#acceptance-criteria)
4. [Installation](#installation)
5. [Usage](#usage)
6. [Features](#features)
7. [Screenshot](#screenshot)
8. [Deployed Application](#deployed-application)
9. [License](#license)

## User Story

As an employee with a busy schedule, I want to add important events to a daily planner so that I can manage my time effectively.

## Acceptance Criteria

- The current day is displayed at the top of the calendar when the planner is opened.
- Time blocks for standard business hours (9 AM to 5 PM) are presented upon scrolling down.
- Each time block is color-coded to indicate whether it is in the past, present, or future.
- Clicking into a time block allows the user to enter an event.
- Clicking the save button for a time block saves the event text in local storage.
- Upon refreshing the page, the saved events persist.

## Installation

To get started with the Work Day Scheduler:

1. Clone the starter code from the repository.
2. Make your own repository with the cloned starter code.
3. Open the `index.html` file in a web browser to start scheduling your day.

## Usage

Here's how you can use the Work Day Scheduler:

1. **Open the Planner**: Access the Work Day Scheduler through your web browser.
2. **Add Events**: Click on the time block corresponding to the desired hour and type in your event or task.
3. **Save Events**: Press the save button on the right side of the time block to store your event in local storage.
4. **View Persistent Data**: Even after refreshing the page, your events will remain saved and displayed.

## Features

- **Dynamic Date Display**: The application shows the current date at the top of the calendar.
- **Color-Coded Time Blocks**: Easily distinguish between past, present, and future with color-coded time blocks.
- **Persistent Storage**: Your events are stored in local storage and will be retrieved even after the browser is refreshed.
- **Interactive UI**: A clean and responsive design ensures an efficient user experience.

## Screenshot

![Work Day Scheduler Screenshot](/Assets/Work-Day-Scheduler.png)

## Deployed Application

Check out the deployed application here: [Work Day Scheduler Live Site]()

## License

This project is licensed under the [MIT License](LICENSE.txt).
