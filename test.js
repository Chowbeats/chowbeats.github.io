document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById('infoForm');
  const successDiv = document.getElementById('successMessage');

  form.addEventListener('submit', async function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const company = document.getElementById('company').value;
    const phone = document.getElementById('phone').value;

    const data = new URLSearchParams();
    data.append('name', name);
    data.append('company', company);
    data.append('phone', phone);

    try {
      const response = await fetch('https://script.google.com/macros/s/AKfycbzOb8VYbz9BF2_DQ2CVOVtKyv1M7toGr-ESzrMhCoRXs1jWdYloT-AjadqHYW-xYFdTdg/exec', {
        method: 'POST',
        body: data
      });

      const result = await response.json();
      if (result.result === 'success') {
        successDiv.classList.remove('d-none');
        form.reset();

        setTimeout(() => {
          successDiv.classList.add('d-none');
        }, 4000);
      } else {
        alert('Erro ao salvar os dados.');
      }
    } catch (error) {
      alert('Erro de conexão: ' + error.message);
    }
  });
});
