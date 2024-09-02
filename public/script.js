document.addEventListener('DOMContentLoaded', () => {
  const editor = document.getElementById('editor');
  const responseDiv = document.getElementById('response');

  editor.addEventListener('input', () => {
    const textValue = editor.value;

    fetch('/update-text', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ textarea: textValue })
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      responseDiv.innerHTML = data.htmlContent;
    })
    .catch(error => console.error('Error:', error));
  });
});
