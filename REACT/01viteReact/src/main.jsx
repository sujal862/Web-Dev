import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'

import App from './App.jsx'

//how render func in React(framework) actually creates the ele/tag inside render fun internally(BTS)
const reactElement = React.createElement(
    'a', //1st parameter = tag name
    {href: 'https://google.com', target: '_blank'}, //2nd parameter:is attriute - all atributes are written inside object -if no attribute than leave empty  {} 
    'click me to visit google' , //3rd para -innertext (children)
    anotherElement //4th para- if any variable(evaluated expression if any)
)

const anotherElement=(
    <a href='https://google.com' target='_blank'>Click me to visit page</a>
)

ReactDOM.createRoot(document.getElementById('root')).
render(

    // <App />
    reactElement
 
)
