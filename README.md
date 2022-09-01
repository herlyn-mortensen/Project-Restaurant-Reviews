# Project-Restaurant-Reviews


### PROJECT OVERVIEW

Potential customers will always put their trust in other customers before the establishment. That's the allure of social proof marketing. While the business's promotional and advertising activities will undoubtedly bring in new customers, nothing beats the support of existing customers who can attest to the quality of the products and experience.

Users consider online reviews to be more credible than any other advertisement. The reviews will speak for themselves if the restaurants do their utmost to provide exceptional customer service. People now recommend restaurants to their friends and family based on online ratings.

This site targets food lovers and it focuses on online reviews of restaurants around the city. 

![Screenshot 2022-09-01 at 16 16 12](https://user-images.githubusercontent.com/91460556/187937793-b38b07ce-30b8-4528-9c97-8e62723dce46.png)

**FIGMA (FOR GUIDANCE) [DESIGN](https://www.figma.com/file/DCI4Nlu5kR6pCmxHsUSTxm/Project-2?node-id=0%3A1)** :tent:

### FEATURES

The sites main feature is to the collection of restaurant reviews - the users can register and/or log-in, write a review to any restaurant they wish, find a restaurant they would like to dine-in and see the reviews of other users. Users can also edit their review or delete it if wanted.

With pending implementations, the site has plans on adding photo uploading feature with better UI and descriptions as shown on the Figma link, as well as adding comments on reviews. 

For the bugs and limitations,the site that the /'review'/:reviewID url which is part of the "edit" feature - is not responding to the css link I created, making it look messy.


### MONGO SAMPLE DOCUMENTS

#### RESTAURANT-REVIEWS COLLECTION

![Screenshot 2022-09-01 at 17 07 07](https://user-images.githubusercontent.com/91460556/187948500-a3cb9bd9-0ee1-4b70-817f-963b63cfd34c.png)



### API DOCUMENTATION

| Title | Write a review about the restaurant | 
| :---: | :---: | 
| Method | POST | 
| Endpoint Path | mongo/write-review | 
| Body | ![Screenshot 2022-09-01 at 17 25 33](https://user-images.githubusercontent.com/91460556/187952653-c84b4ff8-3d86-4e68-b1c1-2451116e7044.png)| 
| Parameters | restaurant, title, cuisine, review, ratings | 
| Expected Response | "status": 200|

| Title | Write a review about the restaurant | 
| :---: | :---: | 
| Method | POST | 
| Endpoint Path | mongo/write-review | 
| Body | ![Screenshot 2022-09-01 at 17 25 33](https://user-images.githubusercontent.com/91460556/187952653-c84b4ff8-3d86-4e68-b1c1-2451116e7044.png)| 
| Parameters | restaurant, title, cuisine, review, ratings | 
| Expected Response | "status": 200|


### TEST CASES




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


