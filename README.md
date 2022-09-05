# Project-Restaurant-Reviews


### PROJECT OVERVIEW

Potential customers will always put their trust in other customers before the establishment. That's the allure of social proof marketing. While the business's promotional and advertising activities will undoubtedly bring in new customers, nothing beats the support of existing customers who can attest to the quality of the products and experience.

Users consider online reviews to be more credible than any other advertisement. The reviews will speak for themselves if the restaurants do their utmost to provide exceptional customer service. People now recommend restaurants to their friends and family based on online ratings.

This site targets food lovers and it focuses on online reviews of restaurants around the city. 

### UI Design of public server

![Screenshot 2022-09-01 at 16 16 12](https://user-images.githubusercontent.com/91460556/187937793-b38b07ce-30b8-4528-9c97-8e62723dce46.png)

**FIGMA [DESIGN](https://www.figma.com/file/DCI4Nlu5kR6pCmxHsUSTxm/Project-2?node-id=0%3A1)** :tent:

### FEATURES

The sites main feature is to the collection of restaurant reviews - the users can register and/or log-in, write a review to any restaurant they wish, find a restaurant they would like to dine-in and see the reviews of other users. Users can also edit their review or delete it if wanted.

With pending implementations, the site has plans on adding photo uploading feature with better UI and descriptions as shown on the Figma link, as well as adding comments on reviews. 

For the bugs and limitations,the site that the /'review'/:reviewID url which is part of the "edit" feature - is not responding to the css link I created, making it look messy. Lastly, the .env file which was placed on the .gitignore is still showing on this repository. 


### MONGO SAMPLE DOCUMENTS

#### RESTAURANT-REVIEWS COLLECTION

![Screenshot 2022-09-05 at 14 58 42](https://user-images.githubusercontent.com/91460556/188455034-edccca8f-1248-4c1b-9338-836614603550.png)


#### USERS COLLECTION

![Screenshot 2022-09-01 at 18 04 47](https://user-images.githubusercontent.com/91460556/187961156-3a3f879a-289a-48d6-b311-e799c6c1315b.png)


### API DOCUMENTATION AND TEST CASES

| Title | Write a review about the restaurant | 
| :---: | :---: | 
| Method | POST | 
| Endpoint Path | mongo/write-review | 
| Body |![Screenshot 2022-09-05 at 15 03 19](https://user-images.githubusercontent.com/91460556/188456017-5ed85ebb-8da1-497b-8d23-e9b0cab5ca4d.png)| 
| Parameters | restaurant, title, date, cuisine, food ordered, review, ratings | 
| Expected Response | "status": 200|

| Title | Find a review about the restaurant | 
| :---: | :---: | 
| Method | GET | 
| Endpoint Path | /find-restaurant | 
| Body | N/A| 
| Parameters | N/A | 
| Expected Response |![Screenshot 2022-09-01 at 18 26 16](https://user-images.githubusercontent.com/91460556/187965153-b2d67041-8a85-4614-9b7c-dad99aeb5c05.png)|

| Title | Delete a review | 
| :---: | :---: | 
| Method | POST | 
| Endpoint Path | /delete/reviews/:reviewId | 
| Body |![Screenshot 2022-09-01 at 18 28 16](https://user-images.githubusercontent.com/91460556/187965512-ba9801df-86b6-412c-86ab-938aca7e2898.png)| 
| Parameters | restaurant, title, cuisine, review, ratings | 
| Expected Response | {}deleted|

| Title | Edit a review | 
| :---: | :---: | 
| Method | POST | 
| Endpoint Path | /edit/reviews/:reviewId | 
| Body |![Screenshot 2022-09-05 at 15 01 08](https://user-images.githubusercontent.com/91460556/188455833-a5ce17b1-4d06-42f8-a315-48e90fe50842.png)| 
| Parameters | restaurant, title, cuisine, review, ratings | 
| Expected Response | 302: Found |

| Title | Write a comment | 
| :---: | :---: | 
| Method | POST | 
| Endpoint Path | '/reviews/:reviewId/comments' | 
| Body |![Screenshot 2022-09-05 at 16 37 59](https://user-images.githubusercontent.com/91460556/188473409-39588c5a-df97-4b32-854a-89b7d05abca8.png)| 
| Parameters | review (string): Review of the restaurant |
||nickname (string): name of reviewer |
| Expected Response | 'Comment has been added successfully' |

| Title | Edit a comment | 
| :---: | :---: | 
| Method | PUT | 
| Endpoint Path | '/comments/:commentId/update' | 
| Body |![Screenshot 2022-09-05 at 16 45 43](https://user-images.githubusercontent.com/91460556/188474765-e0639b1a-96e1-47b8-8df9-68b90a88471c.png)| 
| Parameters | review (string): Review of the restaurant |
||nickname (string): name of reviewer |
| Expected Response | 'Comment updated' |

| Title | Delete a comment | 
| :---: | :---: | 
| Method | DELETE | 
| Endpoint Path | '/comments/:commentId' | 
| Body |![Screenshot 2022-09-05 at 17 04 01](https://user-images.githubusercontent.com/91460556/188477989-15628811-e224-45ee-8d84-dc20e1b5070e.png)| 
| Parameters | commentID |
| Expected Response | 'Comment deleted' |

### PLATFORM USED

- Github for CI/CD
- Gitpod.io
- Dependencies used:
  - NodeJS 
  - NodeJS depencies: 
    - "cors": "^2.8.5",
    - "dotenv": "^16.0.2",
    - "express": "^4.18.1",
    - "handlebars-helpers": "^0.10.0",
    - "hbs": "^4.2.0",
    - "jsonwebtoken": "^8.5.1",
    - "mongodb": "^4.9.0",
    - "wax-on": "^1.2.2",
    - "yarn": "^1.22.19"
  - MongoDB
  - HTML, CSS and Bootstrap
  - Google fonts, Fontawesome and Canva.


### CREDITS

- DATA:
  - DWAD-E Trent Global class recordings.
  - https://tripAdvisor.com

- ILLUSTRATIONS
  - https://www.canva.com/

- FONTS
  - https://fonts.google.com/


