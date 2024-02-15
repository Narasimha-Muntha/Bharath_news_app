News Paper website View.
This project is a news website built with React.js. It displays articles fetched from a data source and allows users to view individual article details.

Components
1. ArticleCard
The ArticleCard component represents a card that displays an article's title, summary, and an image. Users can click on the card to view the full article.
Libraries Required:
react
react-router-dom
react-bootstrap


2. ArticleDetailScreen
The ArticleDetailScreen component displays the full details of a specific article. It shows the article's title, author, published date, and content.
Libraries Required:
react
react-router-dom


3. HomeScreen
The HomeScreen component serves as the homepage of the news website. It displays a list of the latest articles using ArticleCard component. The map function is used here to iterate over the list of articles and render an ArticleCard component for each article.
Libraries Required:
react
react-bootstrap


4. CustomNavbar
The CustomNavbar component is a custom navigation bar for the website. It includes the logo and navigation links.
Libraries Required:
react
react-router-dom
react-bootstrap
Installation

To run this project locally, make sure you have Node.js installed on your machine. Then, follow these steps:

Clone this repository to your local machine.
Navigate to the project directory in your terminal.
Run npm install to install dependencies.
Run npm start to start the development server.
