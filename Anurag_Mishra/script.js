function updateContent() {
    // Change the paragraph text
    const message = document.getElementById('message');
    message.textContent = "The content has been updated!";
    
    // Change the background color to a random color
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    document.body.style.backgroundColor = randomColor;
}
