# User Stories
## User Story 1:
"As an authorized member of BU, I want to be able to log in, so that I can access the app or continue from where I left off."
### Happy Path:
1. User opens app
2. User is prompted to log in with BU credentials
3. User logs in with BU credentials
6. User preferences, e.g. saved locations, are retrieved (if applicable)
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
User will be directed to a page that displays a list of study areas instead.  
If possible, the list will be sorted by distance from the user's location. Else, it will be sorted alphabetically by building name and room number. 
This is important because we want to make sure that the user can still utilize other features even if the map is not available.

&nbsp;
&nbsp;
&nbsp;

## User Story 3:
"As a user, I want to find a new quite study area, so that i can have a place to study without distractations and noise"
### Happy Path:
1. After logging in, user is redirected to the home page
2. User can see a map of marked study areas relative to their location
3. user and can and see the crowd and noise level review for that study location
4. user can keep taping on different locations, or chose to only displace quite places on the map. 
5. user and choice any of the options on the map and head to new study area.
### Exceptions:
Like above same principles with the map. 
Sorting based quite score would be possible, its possible for it be all acceptable study rooms within a selected distance. 
The numbers we will user to sort might not be avaliavble to the user but our assigned number for each study area relating to its metrics should be visable no matter what APIs are down. 

&nbsp;
&nbsp;
&nbsp;

## User Story 4:
"As a user, I want to be able to see and help make the study metrics better, so that i and others will be better infromed about the quite-ness and crowed-ness of the study areas as well as how much that changes day to day"
### Happy Path:
1. After logging in, user is redirected to the home page
2. When at said study location, or gps says that person is close enough to it as a side promit will ask for help with saying how busy and crowed it is.
3. the user will have two swipe ranging from 0-5 ( 0 empty or pin drop, 5 beyond loud or no seats) the color changing bar with add another level feel.
4. after the user gets a thank you with an explinations why it helps. 
5. user and app are both better off now. 
### Exceptions:
It would be best to only accept information from people who's GPS is at said location, but if GPS down we wont make it had to get around if that person whats to write a review. 
this wont change the value right way but will factor to the metircs of study room, time, day or the week/holiday, as well as weather and how that might change areas. 


&nbsp;
&nbsp;
&nbsp;

## User Story 5:
"As a user, I want to..., so that..."
### Happy Path:
### Exceptions:
