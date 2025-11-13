Employee management system

It is a React based functional project

Features in it:-
	A employer can give task to his employee
	Employee can accept that task, mark as field or marks as completed kr skta hai

info about files and project

    "context" folder is used for centralize the data at one location so that every component can access the data from a single location.

        context folder contains a file:-
            1. AuthProvider.jsx - used for authorization. jo phele  se bne huye usernames, email or any other essential data honge woh phele se hi iske andr store krlenge


 Utils-> localStorage.jsx hai voh data ko local storage (browser storage) me store krne k liye hai

setLocalStorage() function in localStorage.jsx is used to set the data in the local storage

useEffect - side stack me function chlane ka kaam krta hai


localStorage.clear() function is used to clear the local storage of the browser
