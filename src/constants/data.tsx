export const routes = [
  {
    path: "/",
    name: "Home",
  },
  {
    path: "/users",
    name: "Users",
  },
  {
    path: "/locations",
    name: "Locations",
  },
  {
    path: "/components",
    name: "Components",
  },
  {
    name: "Resources",
    data: [
      {
        path: "/roadmap",
        name: "Roadmap",
      },
      {
        path: "/roadmap",
        name: "Learning",
      },
    ],
  },
];
export const numberOfResults = [10, 20, 30, 40, 50];

export const concepts = [
  {
    title: "API Fetching",
    content: `This challenge performs a API Fetchching with basic object destructuring. 
      The data is fetched from <span class="active"> https://randomuser.me/api </span> and displayed in a table. 
      The table is searchable and paginated. Users and Locations pages are built using this concept. 
      The steps to perform API fetching are as follows:
      <ul>
        <li> Create a custom hook to fetch data from the API </li>
        <li> Use JS fetch or axios to fetch data from the API </li>
        <li> Use the custom hook in the component </li>
        <li> Display the data in a table </li>
      </ul>
      `,
  },
  {
    title: "Custom Hooks",
    content: `To fetch data from an API a custom hook is created which is situated in <span class="active"> src/hooks/useFetch.tsx </span>. 
              It is nothing but a wrapper around the fetch API. 
              It takes in a url and returns the data and loading state. 
              The hook is used in <span class="active">src/pages/Users.tsx</span> and <span class="active">src/pages/Locations.tsx</span>
              The steps to create a custom hook are as follows:
              <ul>
                <li> Create a normal function </li>
                <li> Create state variables </li>
                <li> Perform the API call </li>
                <li> Update the state variables </li>
                <li> Return the data and loading state </li>
              </ul>
              `,
  },
  {
    title: "Searching and Sorting",
    content: `The table is searchable and sortable. The search and sort are helper functions situated in <span class='active'>src/utils/helper.tsx </span>.
              To search the table, the searchValue function is used.
              To sort the table (click on the column), the sortTable function is used. 
              The steps to perform searching and sorting are as follows:
               <ul>
                <li> Create a search input </li>
                <li> Add an onChange event listener to the input </li>
                <li> Create a search function that searches through all the table and update the state</li>
                <li> Display the data in a table </li>
                <li> To sort add onClick functionality on the table columns </li>
                <li> Add an onClick event listener to the table columns </li>
                <li> Create a sort function that sorts the table and update the state </li>
                <li> Display the data in a table </li>
              </ul>
               `,
  },
  {
    title: "Flattening Deep Nested Objects",
    content: `The data fetched from the API is a deeply nested object. To display the data in a table, the object is flattened using recursion. 
              The flatten function is situated in <span class='active'>src/utils/helper.tsx </span>.
              It takes in an object and returns a flattened object.
              The flatten function is used in <span class='active'> src/pages/Users.tsx </span> and <span class='active'>src/pages/Locations.tsx </span>.
              The steps to flatten a deeply nested object are as follows:
              <ul>
                <li> Create a function that takes parses array of objects </li>
                <li> Try to parse the nested object recurrsively </li>
                <li> Store the data in one single array </li>
                <li> Return the array </li>
              </ul>
              `,
  },
  {
    title: "React Context",
    content: `The theme is handled using React Context. The theme context is situated in <span class='active'>src/contexts/ThemeContext.tsx </span>. 
              It takes in a state and dispatch and returns a provider.
              The theme context is used in <span class='active'>src/App.tsx</span> and <span class='active'>src/components/sidebar/Sidebar.tsx</span>
              The steps to create a context are as follows: 
                  
              <ul>
                <li> Create a context </li>
                <li> Create a reducer </li>
                <li> Create a provider </li>
                <li> Wrap the provider around the component </li>
                <li> Use the context in the component </li>
                <li> Create a toggle button to toggle the theme and use the dispatch function to update the state </li>
                <li> Add appropriate CSS classes to the elements </li>

              </ul>

    `,
  },
  {
    title: "Pagination",
    content: `The table is paginated. The pagination is handled by the handlePagination function in <span class='active'>src/pages/Users.tsx</span> and 
    <span class='active'> src/pages/Locations.tsx </span>
               The pagination is done by changing the results state. The results state is used in the useFetch hook to fetch the data from the API.
              The steps to perform pagination are as follows:
              <ul>
                <li> Create a pagination component </li>
                <li> Add appropriate CSS classes to the elements </li>
                <li> Add onClick event listeners to the pagination buttons </li>
                <li> Create a function that handles the pagination </li>
                <li> Update the results state </li>
              </ul>
              `,
  },
  {
    title: "Calling a component recurrsively",
    content: `The sidebar is a tree structure which is built by recursively calling a component.
              The steps to build a tree structure are as follows:
              <ul>
                <li> Create a component that displays the menu options </li>
                <li> If the menu option has children i.e. nested options, call the created component recurrsively </li>
                <li> Store the data in one single array </li>
                <li> Return the array to the caller component</li>
              </ul>
                `,
  },
  {
    title: "Component Design",
    content: `In left side menu there is an option "Components" where different components are created using React.
              Current created components are:
              <ul>
                <li> Tabs </li>
                <li> Autocomplete </li>
              </ul>
              New components will be added in future.
                `,
  },
];

export const sampleData = [
  "Frontend System Design",
  "Component Architecture Design",
  "Frontend Interview",
  "User Interface Design",
  "React Questions",
];
