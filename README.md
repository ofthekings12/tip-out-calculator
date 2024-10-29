# Overview

This Tip Out Calculator is a simple tool that helps streamline and automate the calculation of tip outs in the service industry. Instead of manually calculating your tip out—which can lead to mistakes due to human error—this app does the heavy lifting for you.

I built this project after realizing that manual calculations sometimes led to inaccurate tip outs, resulting in frustration between staff and management. The app was developed based on a step-by-step infographic created by a colleague that explained the calculation process in detail.

## Infographic


## Live Version:
[https://kingwest-tip-calculator.netlify.app/](https://kingwest-tip-calculator.netlify.app/)

## Why I Built This App
As someone who works in the service industry, we often had to manually calculate our tip outs at the end of a shift. This process involved subtracting promo amounts from total sales, applying a tip-out percentage, adjusting for tax, and finally determining if the server owes money to the house or vice versa. Unfortunately, human error occasionally led to incorrect amounts, causing confusion or discrepancies.

I built this app to solve that problem and provide a fast, accurate, and easy way to calculate tip outs, reducing mistakes and ensuring the calculations are consistent.

## Features
Input Sales, Promos, and Net Amount: Enter total sales, promo amounts (in a comma-separated format), and net amounts to determine your tip out.
Automatic Tip Out Calculation: The app calculates your tip out based on the correct percentage and adjusts it for tax.
Simple Results: The app clearly shows how much tip out is owed, and whether the server owes the house or the house owes the server.
Responsive Design: Works well on both desktop and mobile screens for easy use at the end of a shift.

## Screenshots
<!-- Add screenshots or links to images here if you have any -->

### How It Works
Enter your total sales for the shift.
Input any promo amounts as a comma-separated list (e.g., 10,20,30).
Enter the net amount (positive or negative) that indicates the current balance owed.
Click the "Calculate Tip Out" button.
View the results, including the adjusted total sales, tip out amount, tax-adjusted tip out, and whether you owe the house or the house owes you.
The app automatically deducts promo amounts, calculates the tip out at 5.75%, adjusts for tax, and provides the final amount owed.

### How to Use the App
Clone or download the repository to your local machine.
Install the necessary dependencies using npm install.
Run the app locally by typing npm start in the terminal.
Open the app in your browser, enter the required information, and get your results instantly.
Technologies Used

**React:** The frontend framework used to build the app.
**CSS:** Custom styles and responsive design to ensure a smooth user experience across devices.
**JavaScript:** Core logic for calculations and user interactions.
