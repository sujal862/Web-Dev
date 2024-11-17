import React from 'react'
import useTheme from '../context/theme';

export default function ThemeBtn() {
    
    const {themeMode , lightTheme , darkTheme} = useTheme(); //useTheme hook gave the access of themeMode state and the lightMode and darkMode functions.

    const onChangeBtn = (e) => {
        const darkModeStatus = e.currentTarget.checked  //gives the current status of the checkbox ? true or false (if true i.e themeMode is dark)
        if(darkModeStatus) {
            darkTheme() //call darkTheme function to change the themeMode to 'dark'.
        } else {
            lightTheme(); 
        }
        console.log(themeMode)
    }

    return (
        <label className="relative inline-flex items-center cursor-pointer">
            <input
                type="checkbox"
                value=""
                className="sr-only peer"
                onChange={onChangeBtn}
                checked={themeMode === 'dark'}  //It checks if the themeMode variable is equal to 'dark'. If it is, the checkbox will be rendered as checked (true); otherwise, it will be unchecked (false).
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            <span className="ml-3 text-sm font-medium text-gray-900">Toggle Theme</span>
        </label>
    );
}


//Note: checked=> checkbox's state stays in sync with the themeMode value in the parent component.
/* The themeMode === 'dark' expression evaluates to:
true → Checkbox is checked.
false → Checkbox is unchecked.

imp*** : 
Dynamic Behavior : The checkbox will automatically reflect the current themeMode, even if the state (of themeMode) changes from another part of the app.
Using checked binds the UI state of the checkbox directly to the application's state, ensuring consistency.





Extra smjna ha to (imp) : 

Q) mera simple sa question ya ha ki is code ma jb hum checkbox tick kraga to checked ka value true hojyga and usika sath themeMode bhi dark hojyga to onChangeBtn function ma  
if(darkModeStatus) { darkTheme() } 
themeMode phir sa dark krna ka kya jrorat ha jb wo check hona ka sath hi ho gya ha ?

Ans : 1. State Synchronization: React mein, jab aap kisi state ko update karte hain, toh aapko ensure karna hota hai ke aapka UI aur state hamesha sync mein rahe. Agar user checkbox ko toggle karta hai, toh aapko yeh confirm karna hai ke theme sahi tarah se update ho raha hai.

2. User Intent: Checkbox ko tick karne ka matlab hai ke user chahta hai ke theme dark ho. Agar themeMode pehle se hi dark hai, toh darkTheme() function ko call karna unnecessary lag sakta hai, 
lekin yeh user ke action ko explicitly handle karne ke liye hai. Agar kabhi aapne theme ko kisi aur tareeqe se change kiya ho (jaise button click ya kisi aur event se), toh checkbox ka status sahi hoga.
*/



