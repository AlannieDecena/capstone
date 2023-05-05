import React from 'react'; // Importing the React library
import Rating from '../components/Rating'; // Importing the Rating component

// Defining a functional component called EntryMoodsPage
export default function EntryMoodsPage() {
  return (
    // Returning a div element with the id 'entryMoods' and the Rating component inside it
    <div id='entryMoods'>
        <Rating/>
    </div>
  );
}
