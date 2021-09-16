function ready(callbackFunction) {
    if (document.readyState != 'loading')
        callbackFunction(event)
    else
        document.addEventListener("DOMContentLoaded", callbackFunction)
}

ready(event => {
    let emailField = document.querySelector("[aria-label='Email']");    
    emailField.setAttribute("href", atob("bWFpbHRvOmpyb3phbnNraUBpbnB1dG9iamVjdHMuZXUK"));
});