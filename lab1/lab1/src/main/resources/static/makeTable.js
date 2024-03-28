document.addEventListener('DOMContentLoaded', () => {
  const tables = [
    { year: 1906, id: 'table_1906', rows: 4, columns: 2, data: [
      [1, ": M 8.8 - 1906 Ecuador-Colombia Earthquake"],
      [2,": M 8.3 - Rat Islands, Aleutian Islands, Alaska"],
      [3,": M 8.2 - 16 km WNW of La Ligua, Chile"],
      [4, ": M 8.0 - 57 km NNE of Lae, Papua New Guinea"]
    ]},
    { year: 1917, id: 'table_1917', rows: 2, columns: 2, data: [
      [1, "M 8.2 - Kermadec Islands region"],
      [2, "M 8.0 - 120 km NNE of Hihifo, Tonga"]
    ]},
    { year: 1918, id: 'table_1918', rows: 3, columns: 2, data: [
      [1, "M 8.3 - 75 km SSW of Malisbeng, Philippines"],
      [2, "M 8.1 - east of the Kuril Islands"],
      [3, "M 8.0 - 60 km W of Diego de Almagro, Chile"]
    ]},
    { year: 1919, id: 'table_1919', rows: 2, columns: 2, data: [
      [1, "M 8.1 - 166 km ENE of Neiafu, Tonga"],
      [2, "M 8.2 - 183 km ESE of Kokopo, Papua New Guinea"]
    ]},
    { year: 1920, id: 'table_1920', rows: 2, columns: 2, data: [
      [1, "M 8.2 - 47 km SE of Hualien City, Taiwan"],
      [2, "M 8.1 - 97 km WSW of Isangel, Vanuatu"]
    ]},
    { year: 1938, id: 'table_1938', rows: 2, columns: 2, data: [
      [1, "M 8.5 - 141 km WNW of Tual, Indonesia"],
      [2, "M 8.2 - Alaska Peninsula"]
    ]},
    { year: 1942, id: 'table_1942', rows: 2, columns: 2, data: [
      [1, "M 8.1 - 21 km NNE of Minas de Marcona, Peru"],
      [2, "M 8.0 - south of Africa"]
    ]},
    { year: 1946, id: 'table_1946', rows: 2, columns: 2, data: [
      [1, "M 8.6 - 1946 Aleutian Islands (Unimak Island), Alaska Earthquake"],
      [2, "M 8.3 - 68 km S of Shing?, Japan"]
    ]},
    { year: 1950, id: 'table_1950', rows: 2, columns: 2, data: [
      [1, "M 8.6 - 1950 Assam-Tibet Earthquake"],
      [2, "M 8.2 - 121 km SSE of San Pedro de Atacama, Chile"]
    ]},
    { year: 1952, id: 'table_1952', rows: 2, columns: 2, data: [
      [1, "M 8.1 - 106 km SSW of Kushiro, Japan"],
      [2, "M 9.0 - 89 km ESE of Petropavlovsk-Kamchatsky, Russia"]
    ]},
    { year: 1957, id: 'table_1957', rows: 2, columns: 2, data: [
      [1, "M 8.6 - 81 km ESE of Adak, Alaska"],
      [2, "M 8.1 - 153 km SW of Bayanhongor, Mongolia"]
    ]},
    { year: 1960, id: 'table_1960', rows: 2, columns: 2, data: [
      [1, "M 8.1 - 4 km ESE of Cañete, Chile"],
      [2, "M 9.5 - 1960 Great Chilean Earthquake (Valdivia Earthquake)"]
    ]},
    { year: 1963, id: 'table_1963', rows: 2, columns: 2, data: [
      [1, "M 8.5 - 132 km ESE of Kuril’sk, Russia"],
      [2, "M 8.1 - Banda Sea"]
    ]},
    { year: 1965, id: 'table_1965', rows: 2, columns: 2, data: [
      [1, "M 8.2 - 275 km WNW of Ambon, Indonesia"],
      [2, "M 8.7 - Rat Islands, Aleutian Islands, Alaska"]
    ]},
    { year: 1971, id: 'table_1971', rows: 2, columns: 2, data: [
      [1, "M 8.0 - 201 km WNW of Panguna, Papua New Guinea"],
      [2, "M 8.1 - 113 km ESE of Kokopo, Papua New Guinea"]
    ]},
    { year: 1994, id: 'table_1994', rows: 2, columns: 2, data: [
      [1, "M 8.2 - 55 km NNW of Reyes, Bolivia"],
      [2, "M 8.3 - 48 km E of Shikotan, Russia"]
    ]},
    { year: 1995, id: 'table_1995', rows: 2, columns: 2, data: [
      [1, "M 8.0 - 36 km NNE of Antofagasta, Chile"],
      [2, "M 8.0 - 5 km E of El Colomo, Mexico"]
    ]},
    { year: 2004, id: 'table_2004', rows: 2, columns: 2, data: [
      [1, "M 8.1 - north of Macquarie Island"],
      [2, "M 9.1 - 2004 Sumatra - Andaman Islands Earthquake"]
    ]},
    { year: 2006, id: 'table_2006', rows: 2, columns: 2, data: [
      [1, "M 8.0 - 47 km SSE of Pangai, Tonga"],
      [2, "M 8.3 - Kuril Islands"]
    ]},
    { year: 2007, id: 'table_2007', rows: 4, columns: 2, data: [
      [1, "M 8.1 - east of the Kuril Islands"],
      [2, "M 8.1 - 45 km SSE of Gizo, Solomon Islands"],
      [3, "M 8.0 - 41 km SW of San Vicente de Cañete, Peru"],
      [4, "M 8.4 - 122 km SW of Bengkulu, Indonesia"],

    ]},
    { year: 2012, id: 'table_2012', rows: 2, columns: 2, data: [
      [1, "M 8.6 - off the west coast of northern Sumatra"],
      [2, "M 8.2 - off the west coast of northern Sumatra"]
    ]},
    { year: 2013, id: 'table_2013', rows: 2, columns: 2, data: [
      [1, "M 8.0 - 75 km W of Lata, Solomon Islands"],
      [2, "M 8.3 - Sea of Okhotsk"]
    ]},
    { year: 2021, id: 'table_2021', rows: 3, columns: 2, data: [
      [1, "M 8.1 - Kermadec Islands, New Zealand"],
      [2, "M 8.2 - Alaska Peninsula"],
      [3, "M 8.1 - South Sandwich Islands region"]
    ]},
  ];

  tables.forEach(tableData => {
    createTable(tableData);
    hideTable(tableData.id);
  });

  tables.forEach(tableData => {
    const table = document.getElementById(tableData.id);
    table.onclick = toggleTableVisibility.bind(null, tableData.id);
  });
});

function createTable(tableData) {
  const table = document.getElementById(tableData.id);
  const tbody = table.getElementsByTagName("tbody")[0];

  for (let i = 0; i < tableData.rows; i++) {
    const row = document.createElement("tr");

    for (let j = 0; j < tableData.columns; j++) {
      const cell = document.createElement("td");
      cell.textContent = tableData.data[i][j];
      row.appendChild(cell);
    }

    tbody.appendChild(row);
  }
}

function hideTable(tableId) {
  const table = document.getElementById(tableId);
  table.style.display = 'none';
}

function toggleTableVisibility(tableId) {
  const table = document.getElementById(tableId);
  if (table.style.display === 'none') {
    table.style.display = 'block';
  } else {
    table.style.display = 'none';
  }
}