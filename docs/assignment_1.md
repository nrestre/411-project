# Project Proposal
## Requirements
1. It must utilize a database
2. It must correlate at least two publicly available data sets via API from the Internet
3. It must use third-party authentication
4. It must have a decoupled architecture
## Project Ideas
1. App displays study areas at BU. Each study area is marked with a GPS location on a map with a description of the crowd and noise level. The app constantly updates with crowd-sourced feedback, i.e. from the app users.
    - Database: store study areas and relevant properties of each location
    - APIs: Weather and Google Maps
    - OAuth 2.0 via BU Google Account
2. App lists all sport games playing at the moment, their scores and some statistics / historical data. It will provide instructions to stream the game, prioritizing cable and free streaming options.
    - Database: store user session and favorite sports (display favorite sports first)
    - APIs: [API-SPORTS](https://api-sports.io/) for sports data and [Streaming Availability API](https://rapidapi.com/movie-of-the-night-movie-of-the-night-default/api/streaming-availability/details) for shows by streaming providers (trouble finding live stream sports API)
    - OAuth 2.0 via Google or other providers
