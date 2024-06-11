function sendCommand(command) {
    fetch(`/${command}`)
      .then(response => response.text())
      .then(data => {
        console.log(data);
        updateStatus();
      });
  }
  
  function setSchedule() {
    const scheduleButton = document.getElementById('scheduleButton');
    const scheduleInputs = document.getElementById('scheduleInputs');
    const hour = document.getElementById('hour').value;
    const minute = document.getElementById('minute').value;
    fetch(`/schedule?hour=${hour}&minute=${minute}`)
      .then(response => response.text())
      .then(data => {
        console.log(data);
        if (data === 'Schedule enabled') {
          scheduleButton.innerText = 'Desativar Horário Programado';
          scheduleButton.style.backgroundColor = 'red';
          scheduleInputs.classList.add('hidden');
        } else {
          scheduleButton.innerText = 'Ativar Horário Programado';
          scheduleButton.style.backgroundColor = '';
          scheduleInputs.classList.remove('hidden');
        }
        updateStatus();
      });
  }
  
  function updateStatus() {
    fetch('/status')
      .then(response => response.text())
      .then(data => {
        document.getElementById('status').innerText = data;
      });
  }
  
  // Atualize o status ao carregar a página
  window.onload = updateStatus;
  