News Paper website View.


This project is a news website built with React.js. It displays articles iterate on artcicles objects and allows users to view individual article details.

Components

1. ArticleCard
The ArticleCard component represents a card that displays an article's title, summary, and an image. Users can click on the read more to view the full article.



2. ArticleDetailScreen
The ArticleDetailScreen component displays the full details of a specific article. It shows the article's title, author, published date, and content.



3. HomeScreen
The HomeScreen component serves as the homepage of the news website. It displays a list of the latest articles using ArticleCard component. The map function is used here to iterate over the list of articles and render an ArticleCard component for each article.


4. CustomNavbar
The CustomNavbar component is a custom navigation bar for the website. It includes the logo and navigation links.

Installation

To run this project locally, make sure you have Node.js installed on your machine. Then, follow these steps:

Libraries Required:

react
npm install react-router-dom
npm install react-bootstrap
Run npm install to install dependencies.
Run npm start to start the development server.


