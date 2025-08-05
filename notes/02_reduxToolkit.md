## what is the useSelelctor and how it workes
The useSelector hook is a function provided by React-Redux that allows React components to read values from the Redux store.

What is useSelector?
It is a hook (function) from the react-redux library.

It lets your React component access state values stored globally in Redux.

When you call useSelector, you pass it a function called a "selector" that tells Redux which part of the state you want.

How does useSelector work?
useSelector takes your Redux store’s current state as an argument and runs your selector function on it.

Whenever the selected part of the state changes (in this case, state.movieHubData.bannerData), the component will re-render automatically to reflect the new state.

It only subscribes to the part of state you ask for. If other state changes in Redux, your component does not re-render.

Example Explained
js
const trendingMovie = useSelector(state => state.movieHubData.bannerData);
trendingMovie will hold whatever is stored in bannerData under movieHubData in your Redux store.

The selector function you pass as an argument: state => state.movieHubData.bannerData tells Redux to pull only that part.

Visualization
Suppose your Redux state looks like this:

js
{
  someOtherFeature: {...},
  movieHubData: {
    bannerData: [...], // <-- UseSelector will get this array!
    imageURL: "..."
  }
}
When bannerData updates in Redux (e.g., after fetching new movies), this component gets the latest data automatically.

Why use useSelector?
It keeps UI and global state in sync.

It replaces the older connect() HOC, making code shorter and more readable in functional React components.

In summary:
useSelector reads data from the Redux global state.

It makes your component automatically update when that piece of state changes.

You use a selector function to pick exactly what you need from state:

js
const valueINeed = useSelector(state => state.feature.someValue);