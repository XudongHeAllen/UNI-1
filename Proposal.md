# Vision Statement
Uni. will connect University of Manitoba students with similar interests by providing a platform that allows them to share details about activities they are hosting or attending. Uni. will also tell students about activities they have an interest in and wish to attend. 

# Motivations
Universities are full of unique and diverse people. At universities, we often meet new people, connect, and learn from them. Therefore, Uni. will give students with common interests the opportunity to meet and celebrate their interests together. Additionally, Uni. will give people the opportunity to step out of their comfort zones and find new interests and new friends to share experiences with. However, unlike similar platforms, the activities created on Uni. will be held exclusively between University of Manitoba students who will be verified by their UMNetID; further, the activities will be held on the campus ensuring they are safe and monitored. Uni. is suited for typical group activities held among university students like study sessions and sporting activities. This will ensure their activities are well attended. 

# Objectives and Success Criteria
The following are the objectives for the project:
Connect people with the same interests. Hence, creating a more sociable community on campus. 
Create awareness about the activities happening on campus.
Give users a platform to create and manage activities.
Help users further their interests. For instance, a user might be interested in making new friends and socializing and , through Uni. they can further that interest and broaden their network. 
Promote in-person communication.

We will consider this project a success if we have:
A user base of at least 3000 users in the first 12 months (10% of the University of Manitoba student population). 
20 activities are posted per month (1 in 50 users posts an activity once a week) in the first 12 months.
An average rating of 4 stars with 2 new reviews and 5 new ratings every month after the first 12 months.
We get an average of 4 users monthly who say that they have made a useful connection based on in-app surveys.

# Chosen Technologies
### Backend: Node.js and Express framework
There are several reasons for choosing Express with Node.js for the backend development. The most important reason is that it uses an event driven I/O which makes it lightweight and efficient. It has a strong and ever-growing community and the package manager, npm, is the largest software registry on the web. The other reason is that we are using JavaScript for the frontend and having Node.js for the backend would maintain code universitlity across the stack. Further, we need low-latency between the frontend and the backend because a major goal of the app is to show the correct number of people who have shown up to an activity in real time. Express provides a robust set of features for web and mobile applications but it is a minimalist web framework so it is simple and easy to use.

### Project management: GitHub
The decision to use GitHub for project management because most of the team had previous experience using it. Also, there is sufficient documentation and support on areas where the team may encounter problems. We will use the “create issues” feature to suggest new ideas, track bugs, and assign tasks to group members. We will use the “project boards” feature to give structure to our project by using the board as a visual representation of the workflow of tasks in-progress or those that are planned for future implementation. Furthermore, the board will provide a visual representation of priority levels assigned to various tasks currently on the board.

### Data Storage: MongoDB
We have decided to use MongoDB because MongoDB has very good documentation, it is relatively easy to learn and some members of the team have solid experience with it. The user base for MongoDB is large and continuously growing as well, meaning there is a an available community. Also, MongoDB provides a lot of flexibility because it is easy to create and modify the data models. MongoDB can be used offline and this would be rather useful for testing purposes. It also has support on AWS, which makes it easy for us as our database and backend can be hosted in one place.

### Frontend Mobile: React Native
We decided to proceed with React Native because we have chosen JavaScript-based backend and frontend web technology. Also, React Native is getting more popular in the mobile community, this means that the support community is large. Although we are not using Swift for iOS and Java for Android, the apps we write with React Native are native iOS and Android apps which means these are not hybrid apps. Apps written in React Native are proven to perform as good as natively written apps.

### IDE’s: Jetbrains (Webstorm or IntelliJ Idea)
The team has decided to use IDE tools provided by Jetbrains because most members of the team are familiar with similar tools from them. Jetbrains makes the Interfaces for their tools fairly consistent, so if a new tool from them is needed, learning it would be easy. Jetbrains tools is also very good at abstracting trivial tasks and dependency issues to allow the developer focus on writing actual code. The community of users for Jetbrains tools is also pretty large, and Jetbrains provides lots of official documentation for all their tools as well. This ensures that we are able to get answers for any issues or questions which they may have. We intend to leverage the abstraction which Jetbrains IDE’s provide in order to help us work more quickly since we can focus more on writing actual code, and also to make the process of building the Project more consistent between members of the team.

### Frontend Web: React 
React is much more focused on user interface unlike MeteorJS, Firebase and AngularJs. It gives your users a highly responsive interface with the help of Javascript interactions between the native environment of the device and React. As a result, this increases the application’s load time and helps to keep it running very smoothly without any interruptions.

# User Stories

***Priority: High***	

As a host, I would like to create an activity other users can see.
As a host, I would like to specify the time and location of an activity.
As an attendee or host, I would like to show my interests.
As an attendee or host, I would like to see other users’ interests.
As an attendee or host, I would like to see who is at an activity.
As an attendee, I would like to state that I am attending an activity.
As an attendee or host, I would like to state that I am at an activity.
As an attendee, I would like to be notified about an activity that I will be interested in.
As a host, I would like to be notified about a new attendee at my activity.
As an attendee, I would like to see information about an activity.

***Priority: Medium***

As an attendee or host, I would like to search for an activity which I may be interested in.
As a host, I would like to invite people who I have previously invited to an activity.

***Priority: Low***

As an attendee, I would like to rate an activity after attending.
As an attendee, I would like to review a host after attending an activity.
