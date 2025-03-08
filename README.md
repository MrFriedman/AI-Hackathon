# Resembler Hackathon README

- Team Name: Keyboard Smashers
- Member #1: Dylan Friedman
- Member #2: Conor Mckeag
- Member #3: Tziyona Cohen

# Project description

Please provide a comprehensive description of your approach to the given problem statement. Add images, charts, links, anything that you think is necessary to describe your submission.
This is a centralized platform for accident reporting, designed to encourage drivers, passengers, and bystanders to upload digital evidence of road incidents. The primary form of evidence includes video footage from dashcams and smartphones.

Main features include:

- **Easy upload of video footage**\
  The user will be able to obtain an analysis of their video footage.
- **Autofill of insurance claim forms**\
  Most drivers will need to fill in a claim form and submit it to their insurance provider. This platform can help streamline this process by autofilling in claims form with the driver's information and accident details from the video footage.
- **Generate report summary for sharing**

# Project execution

## Requirements
- Docker
- Docker-compose
- npm
- Python

## Usage

Ensure you are in the root directory of this repository.

`docker compose up --detach`

`pip install -r requirements.txt` -> alternatively, you can create a virtual environment if you don't want to install globally.

`cd Frontend`

`npm i`

`npm run dev`

`cd ../backend`

`python app.py`

Navigate to `localhost:3000`

### Post setup

- Register an account
- Ensure that you complete the full setup of an account.
    - Otherwise features of this prototype will not function.
- From here, navigate to the notifications.
    - These notifications are just a demostration of what could be.
    - Click on any of the notifications and then try the autofill claims form.

# Future Roadmap

Future uses of our application:

- Low-cost dashcams can be sold with our system.
- Users can opt in to share their video footage to a network of other users to promote road safety awareness and prevalence of reckless driving.
    - This essentially allows users to rely on each other for related accidents.
    - For example, if person A captured an accident that occured to person B, then if person B is a registered user (i.e license plate) they will be notified with related information.

# Additional comments

Below here you have the opportunity to add more information or small notes. This could include obstacles that you have faced, known bugs or workarounds that you weren't able to solve in time.
