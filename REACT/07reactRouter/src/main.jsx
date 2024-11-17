import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom'
import Layout from './Layout'
import Home from './components/Home/Home'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import User from './components/User/User'
import Github, { githubInfoLoader } from './components/Github/Github'


const router = createBrowserRouter([  //takes array and stores all the routes in object
  {
    path : '/', //top level element->parent path (nesting is done inside this)
    element : <Layout />,
    children : [  //children array contains multiple object each containing nested route (i.e slash ka bad kis route pa kya render krana ha )
      {
        path : "",  //slash ka bad kuch ni h to home page rengder hoga (localhost:8080/)
        element : <Home /> //contains element which needs to be render on specified path  (<outlet/> ka andr <Home/> rkhka than layout render kr diya jayga )
      },
      {
        path : "about",  //slash ka bad about h to about page rengder hoga (/about)
        element : <About />
      },
      {
        path : "contact",
        element : <Contact />
      },
      {
        path : "user/:userid",  //dynamic route ->any thing passed inside userid can be accessed by User.jsx file
        element : <User/>
      },
      {
        loader : githubInfoLoader, //loader is used to fetch data from api in more optimized way (i.e bus link pa hover krna pa hi dta fetch hojyga)
        path : "github",
        element : <Github/>
      }
    ]
  }
])


//or we can use this syntax for router
// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<Layout />}>
//       <Route path="" element={<Home/>} />
//       <Route path="about" element={<About/>} />
//       <Route path="contact" element={<Contact/>} />
//     </Route>

//   )
// )

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)



// Notes :
// createBrowserRouter-> It creates an object structure to map paths to components.
//Example: If the URL is /about, the Layout renders the <Header> and <Footer> and inserts the <About> component inside Outlet.
/*When a child route (e.g., /about) is active:
React Router looks for an Outlet in the parent (Layout).
The corresponding child component (<About />) is dynamically rendered into the Outlet.*/