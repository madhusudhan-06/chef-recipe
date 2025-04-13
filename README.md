# Chef Recipe React App

A React-based web application that allows users to input ingredients they have on hand, and the app will display recipe from an external API.

## Features
- **User Input**: Enter the list of ingredients you have.
- **Recipe Generation**: The app will give you a recipe that match the ingredients from an external API.
- **Responsive Design**: Fully responsive for mobile and desktop views.

## Technologies Used
- React.js
- CSS / Styled-components (for styling)

## Prerequisites
- Node.js
- npm or yarn

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/madhusudhan-06/chef-recipe.git
   ```

2. **Navigate to the project directory**:
   ```bash
   cd chef-recipe
   ```

3. **Install dependencies**:
   ```bash
   npm install
   ```
   or if you're using yarn:
   ```bash
   yarn install
   ```

4. **Set up the API**:
   - Obtain an API key from your chosen recipe API provider (e.g., openAI, deepseek, Spoonacular, Edamam, etc.).Here gemini is used.
   - Create a `.env` file in the root of the project and add your API key:
     ```env
     VITE_APP_API_KEY=your_api_key_here
     ```

5. **Run the app**:
   ```bash
   npm run dev
   ```
   or with yarn:
   ```bash
   yarn start
   ```

   The app should now be running on [http://localhost:5173](http://localhost:5173).

## Usage

1. Open the app in your browser.
2. Input a list of ingredients (e.g., "tomato, garlic, onion").
3. Click on the "Get a Recipe" button.
4. The app will display a relevant recipe that you can try based on the ingredients you entered.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---
