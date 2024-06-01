function convert(){
        var toUnit = document.getElementById('format').value;
        var temperature = parseFloat(document.getElementById('temp').value);
        var convertedValue;
        var resultUnit;
        if (toUnit === 'f'){
            convertedValue = (temperature * 9/5) +32;
            resultUnit = 'F';
        }
        else if (toUnit === 'c'){
            convertedValue = (temperature -32) * 5/9;
            resultUnit = 'C';
        } 
        else {
          alert('enter a right message');  
        }
        alert(convertedValue.toFixed(2) +  ' ' + resultUnit);
  

    }

