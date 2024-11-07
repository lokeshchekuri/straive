// json2html.js

// The function that generates the HTML table
export default function json2html(data) {
    // Start constructing the HTML table
    let html = '<table data-user="lokeshmeru@gmail.com">'; // Add the data-user attribute
    
    // Add the table header
    html += '<thead><tr>';
    html += '<th>Name</th>';
    html += '<th>Age</th>';
    html += '<th>Gender</th>';
    html += '</tr></thead>';
  
    // Add the table body with rows
    html += '<tbody>';
  
    // Loop through the array of objects (data) to create table rows
    data.forEach(item => {
      html += '<tr>';
      
      // Add the Name, Age, and Gender cells for each row
      html += `<td>${item.Name}</td>`;
      html += `<td>${item.Age}</td>`;
      
      // Check if the 'Gender' field exists and add it; otherwise, add an empty cell
      html += `<td>${item.Gender || ''}</td>`;
      
      html += '</tr>';
    });
  
    html += '</tbody>';
    
    // Close the table tag
    html += '</table>';
    
    // Return the generated HTML as a string
    return html;
  }
  