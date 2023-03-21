# User Stories
## User Story 1:
"As an authorized member of BU, I want to be able to log in, so that I can access the app or continue from where I left off."
### Happy Path:
1. User opens app
2. User is prompted to log in with BU credentials
3. User logs in with BU credentials
6. User preferences, e.g. saved locations and other settings, are retrieved
### Exceptions:
User is not authorized, i.e. they do not have a BU account, so they cannot access the app.  
This is important because we want to make sure that only BU students can access the app.  
Some study areas are only available to BU students and faculty so we want to make sure that only authorized users can participate.  

&nbsp;
&nbsp;
&nbsp;

## User Story 2:
"As a logged in user, I want to view study areas relative to my location, so that I can find a study area that is convenient for me."
### Happy Path:
1. After logging in, user is redirected to the home page
2. User can see a map of marked study areas relative to their location
3. Each study area has a indicator of the crowd and noise level
4. User can click on a study area to view more information about it
### Exceptions:
Map is not available, e.g. due to API failure.  
User should be directed to a page that displays a list of study areas instead.  
If possible, the list should be sorted by distance from the user's location. Else, it should be sorted alphabetically by building name and room number. 
This is important because we want to make sure that the user can still utilize other features even if the map is not available.

&nbsp;
&nbsp;
&nbsp;

## User Story 3:
"As a user, I want to find a quiet and relatively less crowded study area, so that I study without distractations and noise."
### Happy Path:
1. After logging in, user is redirected to the home page
2. User can see a map of marked study areas relative to their location
3. Each study location should have an indicator of the crowd and noise level
4. User can filter locations based on provided metrics, e.g. only display quiet areas on the map
5. User can click on a study area to view more information about it
6. User can make an informed decision on where to study based on the metrics provided
### Exceptions:
Similar to the map user story, sorting study areas based on quietness and displaying the results in a list is possible. We would also like to displaya all acceptable study rooms within a selected distance. The numbers we use to sort might not be available to the user but our assigned number for each study area relating to its metrics should be visible no matter whether the APIs are down. 

&nbsp;
&nbsp;
&nbsp;

## User Story 4:
"As a user, I want to be able to improve and contribute to the study metrics, so that others and I will be better informed about the quietness and crowdedness of the study areas as well as how much that changes day to day"
### Happy Path:
1. After logging in, user is redirected to the home page
2. When the user is at a study location, or the GPS indicates that user is close enough to it, the app should ask the user for help on how busy and crowded the study area is
3. The user should have to swipe ranging from 0-5 (0: empty or pin drop, 5: no seats or beyond loud). There should be a color-changing bar for each level that should add additional depth to the user experience
4. After submitting the scores, the user should receive a "Thank You" prompt with an explanation of why their contribution helps
5. User and App are both better off now
### Exceptions:
It would be best to only accept information from people whose GPS is at said location, but if GPS is down we should not make it hard for users to get around if they want to write a review. Their "offline" review should not change the value right way but should factor to the metrics of study room, time, day or the week/holiday, as well as weather and how that might change areas. 

&nbsp;
&nbsp;
&nbsp;

## User Story 5:
"As a user, I want to..., so that..."
### Happy Path:
### Exceptions:
