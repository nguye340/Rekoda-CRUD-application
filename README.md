# Rekoda CRUD application for Project35 SER AI🎙️

## Introduction 🚀

The purpose of this web application in relation to our capstone project, Sentience, is to create a CRUD app to collect users' voice samples to train the Speech Emotion Recognition AI and improve its in-game accuracy, as well as promoting our game Sentience (now known as TIMEline).
Note: Sentience is a Unity-based game centering on mental illness with a unique feature—Speech Emotion Recognition (SER) powered by Python and Scikit Learn library)

[Watch REKODA's Demo Here](https://www.youtube.com/watch?v=efgzlScauMw&t=112s&ab_channel=Th%E1%BA%A3oH%C3%A2nNguy%E1%BB%85n)


## Key Features 🌟

- **Speech Emotion Recognition (SER):** Utilizing Python and Psychit Learn, our game captures players' emotions through voice, influencing in-game elements like weather. SER currently boasts a 74% accuracy with a dataset of 1000 voice samples.

- **Challenge:** The accuracy hurdle in SER prompted us to develop a web application. This Angular-based app collects voice samples from participants, enhancing SCR Engine's machine learning dataset for more accurate emotion classifications.

## Architecture 🏗️

- **Data Flow:** The recording application captures sound using RecordRTC JavaScript Library, converts it to Base64, and passes it to the Spring Boot backend.

- **Storage:** MongoDB stores the data, including audio files saved as WAV. The front end updates in real-time, displaying the latest recordings.

## Demo 🎥

- **Components:** The web app comprises Record, Playlist, and Sign-In components, offering seamless recording, playback, and user interactions.

- **Recording:** Utilizing Web Audio API, the app provides a real-time audio visualizer for users to record and play back their voice samples. The Base64 storage ensures efficient use of resources.

- **Playlist:** Users can access a list of past recordings, play them, and delete if needed. The service TypeScript facilitates smooth interactions with the Spring Boot API.

- **Sign-In:** A component to gather user information for improved connectivity and interaction.

## Next Steps 🚀

- **Storage Enhancement:** Explore options like S3 bucket or Azure disk storage to persistently store user-uploaded audio samples.

- **Security Implementation:** Allow users to choose whether to submit or delete their recordings, ensuring data privacy.

- **TensorFlow Integration:** Implement TensorFlow.js for improved quality control in recognizing speech and analyzing voice samples.

## Stack Used 🛠️

This full-stack application is developed using Angular 8 for the front-end, Spring Boot with Spring Web MVC for the back-end REST Controller, and Spring Data MongoDB for interacting with the MongoDB database.

- **Frontend:** Angular 8, HTTPClient & Router.
- **Backend:** Spring Boot, Spring Web MVC, Spring Data MongoDB.
- **Database:** MongoDB.

## Closing Remarks 🌐

Project 35's REKODA is a testament to our commitment to overcoming challenges and contributing to the realm of full-stack development. We appreciate your time and welcome any questions or comments. Thank you for joining us me this journey.
