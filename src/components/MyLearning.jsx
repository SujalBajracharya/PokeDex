import React from "react";

const MyLearning = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-6">What I've Learned in My Pokédex Project</h1>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold">1. React Fundamentals</h2>
        <ul className="list-disc pl-6">
          <li>Working with functional components like <code>Search</code>, <code>Compare</code>, and <code>Footer</code></li>
          <li>Managing state using the <code>useState</code> hook for dynamic UI updates</li>
          <li>Handling events such as form submissions and input changes</li>
        </ul>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold">2. Fetching and Displaying Data</h2>
        <ul className="list-disc pl-6">
          <li>Integrating with the PokéAPI to fetch Pokémon data asynchronously</li>
          <li>Using <code>fetch</code> and <code>async/await</code> to handle API calls</li>
          <li>Handling loading states and displaying data or error messages dynamically</li>
        </ul>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold">3. Conditional Rendering</h2>
        <ul className="list-disc pl-6">
          <li>Displaying loading indicators while waiting for data</li>
          <li>Handling errors and displaying error messages when API calls fail</li>
          <li>Rendering data dynamically based on the state (e.g., showing Pokémon details after a search)</li>
        </ul>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold">4. Component Composition and Reusability</h2>
        <ul className="list-disc pl-6">
          <li>Breaking down the app into smaller, reusable components</li>
          <li>Passing data through props (e.g., passing Pokémon data to the <code>PokemonCard</code> component)</li>
          <li>Creating modular and maintainable code through component composition</li>
        </ul>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold">5. Styling and UI/UX</h2>
        <ul className="list-disc pl-6">
          <li>Using Tailwind CSS for utility-first styling</li>
          <li>Ensuring responsive design with utility classes like <code>md:flex-row</code> and <code>text-center</code></li>
          <li>Improving the user experience with a clean, modern UI layout</li>
        </ul>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold">6. Working with SVG Icons</h2>
        <ul className="list-disc pl-6">
          <li>Using SVG icons (e.g., GitHub icon) for better visual representation and accessibility</li>
          <li>Understanding accessibility practices like using <code>aria-label</code> for interactive elements</li>
        </ul>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold">7. Optimizing User Interaction</h2>
        <ul className="list-disc pl-6">
          <li>Implementing search functionality to allow users to find Pokémon easily</li>
          <li>Adding a compare feature to enable users to compare two Pokémon side-by-side</li>
        </ul>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold">8. Best Practices</h2>
        <ul className="list-disc pl-6">
          <li>Organizing the code in a modular and maintainable way with React components</li>
          <li>Handling errors gracefully and ensuring smooth user interactions</li>
          <li>Using Git for version control and linking to my GitHub for transparency</li>
        </ul>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold">9. Future Learning Areas</h2>
        <ul className="list-disc pl-6">
          <li>Learning state management with Redux or React's Context API for complex state management</li>
          <li>Exploring testing libraries like Jest and React Testing Library to ensure app reliability</li>
          <li>Implementing routing with React Router for a multi-page experience</li>
          <li>Optimizing the app for better performance using techniques like lazy loading and code splitting</li>
        </ul>
      </div>
    </div>
  );
};

export default MyLearning;
