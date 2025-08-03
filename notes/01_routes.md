Suppose your routes are:

js
{
  path : "",
  element : <Home />
},
{
  path: ":explore",
  element : <ExplorePage />
},
{
  path: ":explore/:id",
  element : <DetailsPage />
}
/ matches the home page.

/movies will match the ExplorePage, and explore will be 'movies'.

/tvshows/123 will match the DetailsPage, with explore = 'tvshows' and id = '123'.

Why Use This?
You use colons to capture dynamic parts of the URL so you can use them in your page/component.

For example, in DetailsPage, you could read useParams() to get {explore: 'movies', id: '123'}.

In summary:
Colon = "this is a variable part of the path"

No colon = fixed/static path

Example usage in component:import { useParams } from "react-router-dom";

function DetailsPage() {
  const { explore, id } = useParams();
  // You can now use explore and id in your component
}
If you have further questions about dynamic routes or React Router, feel free to ask!



## The class active:scale-50 is a Tailwind CSS utility that applies a transformation scale of 0.5 (half size) to an element when it is in the :active state. The active state usually corresponds to when you are clicking or tapping an element (for example, when you click and hold a button).

What does it do?
scale-50: Shrinks (scales) the element to 50% of its original size.

active:: Means this scaling only happens when the element is active (i.e., being pressed/clicked).

Example
jsx
<button className="active:scale-50 transition">