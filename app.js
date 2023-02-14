document.getElementById('bold').addEventListener('click', function() {
    const textArea = document.getElementById('field');
    textArea.style.fontWeight = 'bold';
})

document.getElementById('italic').addEventListener('click', function() {
    const textArea = document.getElementById('field');
    textArea.style.fontStyle = 'italic';
})

document.getElementById('underline').addEventListener('click', function() {
    const textArea = document.getElementById('field');
    textArea.style.textDecoration = 'underLine';
})
document.getElementById('align-left').addEventListener('click', function() {
    const textArea = document.getElementById('field');
    textArea.style.textAlign = 'left';
})
document.getElementById('align-center').addEventListener('click', function() {
    const textArea = document.getElementById('field');
    textArea.style.textAlign = 'center';
})
document.getElementById('align-right').addEventListener('click', function() {
    const textArea = document.getElementById('field');
    textArea.style.textAlign = 'right';
})
document.getElementById('align-justify').addEventListener('click', function() {
    const textArea = document.getElementById('field');
    textArea.style.textAlign = 'justify';
})

document.getElementById('size').addEventListener('keyup', function() {
    const inputValue = document.getElementById('size');
    const value = inputValue.value;

    const textArea = document.getElementById('field');
    // const text = textArea.value
    textArea.style.fontSize = value + 'px';

})



document.getElementById('upper-case').addEventListener('click', function() {
    const textArea = document.getElementById('field');
    textArea.style.textTransform = 'upperCase';
})



document.getElementById('color').addEventListener('mouseleave', function() {
    const color = document.getElementById('color');
    const textColor = color.value;

    const textArea = document.getElementById('field');
    textArea.style.color = textColor;


})