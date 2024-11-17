//in this code it is shown that how react renders(inject) a ele into selected ele (how internally things happen)
//pure java script
/*
function customRender(reactElement, container) { // reactElement ko container ma inject kr dega
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children;
    domElement.setAttribute("href", reactElement.props.href);
    domElement.setAttribute("target", reactElement.props.target);

    container.appendChild(domElement);
}
*/

//better version of above fun which handles multiple attribute more optimally
function customRender(reactElement, container) { // custom render code (inject)
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children;
    for(const prop in reactElement.props){
        domElement.setAttribute(prop, reactElement.props[prop]);
    }

    container.appendChild(domElement);
}

const reactElement = { //react ka and ak ele kasa bnta ha visualization
    type: 'a',
    props: { //properties
        href: 'https://googe.com',
        target: '_blank',
    },
    children: 'Click me to visit google'
}



const mainContainer = document.getElementById("root");

customRender(reactElement , mainContainer); //call of func -> reactElement ko mainContainer mai render krdo