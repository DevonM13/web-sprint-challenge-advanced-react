import React from "react";
import { render, waitFor, screen } from "@testing-library/react";
// import userEvent from '@testing-library-user-event';
import '@testing-library/jest-dom';
import AppFunctional from "./AppFunctional.js";
// import mockServer from "../../backend/mock-server.js";

// Write your tests here
describe('AppFunctional component', () => {
  // let userEmail, submitBtn;
  // let user;
  // beforeEach(() => {
  //   render(<AppFunctional />)
    // user = userEvent.setUp()
    // userEmail = screen.getAllByPlaceholderText('type email')
    // submitBtn = screen.getAllByTestId('submit')
  // })

  const testForm = {
    x: 2,
    y: 2,
    steps: 0,
    email: 'lady@gaga.com'
  };
  
  test('[1] headings renders to the screen correctly', () => {
    render(<AppFunctional />);
    expect(screen.getByText('Coordinates (2, 2)')).toBeVisible();
    expect(screen.getByText('You moved 0 times')).toBeVisible();
  });

  test('[2] links render to the screen correctly', () => {
    render(<AppFunctional />);
    expect(document.querySelector('#grid'));
  });

  test('[3] there is an active square with a B', () => {
    render(<AppFunctional />);
    expect(document.querySelector('.square active'));
    expect(screen.getByText('B')).toBeVisible();
  });

  test('[4] buttons render to the screen correctly', () => {
    render(<AppFunctional />);
    expect(document.querySelector('#keypad'));
    expect(document.querySelector('#left'));
    expect(document.querySelector('#right'));
    expect(document.querySelector('#up'));
    expect(document.querySelector('#down'));
  });

  test('[5] input and submit button rendors to the screen correctly', () => {
    render(<AppFunctional />);
    expect(screen.getByPlaceholderText('type email'));
    expect(document.querySelector('#submit'));
  });
});
