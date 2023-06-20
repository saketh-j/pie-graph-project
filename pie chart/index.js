document.getElementById('plot-btn').addEventListener('click', function () {
    var inputValue = parseInt(document.getElementById('input-value').value);
    var maxValue = parseInt(document.getElementById('max-value').value);
  
    if (isNaN(inputValue) || isNaN(maxValue)) {
      alert('Please enter valid input values.');
      return;
    }
  
    if (inputValue > maxValue) {
      alert('Input Value cannot be greater than Max Value.');
      return;
    }
  
    var percentage = (inputValue / maxValue) * 100;
  
    // Update bar graph
    var barFill = document.querySelector('.bar-fill');
    barFill.style.height = percentage + '%';
  
    // Update pie chart
    var pieFill = document.querySelector('.pie-fill');
    pieFill.style.transform = 'rotate(' + percentage + 'deg)';
    pieFill.style.clipPath = `polygon(0% 0%, 100% 0%, 100% ${percentage}%, 0 ${percentage}%)`;
    
    // Update bar graph
    var barFill = document.querySelector('.bar-fill-1');
    barFill.style.height = percentage + '%';
  });
  