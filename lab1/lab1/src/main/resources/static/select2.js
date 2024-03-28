document.addEventListener('DOMContentLoaded', () => {
  const table = document.getElementById('table');
  const tbody = table.querySelector('tbody');

  const years = Array.from({ length: 2022 - 1905 }, (_, i) => 1905 + i);

  for (let i = 0; i < years.length; i += 10) {
    const tr = document.createElement('tr');
    for (let j = i; j < i + 10 && j < years.length; j++) {
      const td = document.createElement('td');
      td.textContent = years[j] + '년';
      
      if(years[j]===1905||years[j]===1907||years[j]===1910||years[j]===1911||years[j]===1914||years[j]==1922||years[j]===1923||years[j]===1924||years[j]===1929||years[j]===1932||years[j]===1933||years[j]===1934||years[j]===1939||years[j]===1940||years[j]===1941||years[j]===1943||years[j]===1944||years[j]===1945||years[j]===1949||years[j]===1958||years[j]===1964||years[j]===1966||years[j]===1968||years[j]===1969||years[j]===1970||years[j]===1972||years[j]===1976||years[j]===1977||years[j]===1986||years[j]===1989||years[j]==1996||years[j]===1998||years[j]===2000||years[j]===2001||years[j]===2003||years[j]===2005||years[j]===2009||years[j]===2010||years[j]===2011||years[j]===2014||years[j]===2015||years[j]===2017||years[j]===2018||years[j]===2019) td.style.backgroundColor = 'rgb(201, 173, 167)';

      else if(years[j]===1919||years[j]===1917||years[j]===1920||years[j]===1938||years[j]===1942||years[j]===1946||years[j]===1950||years[j]===1952||years[j]===1957||years[j]===1960||years[j]===1963||years[j]===1965||years[j]===1985||years[j]===1971||years[j]===1994||years[j]===1995||years[j]===2004||years[j]===2006) td.style.backgroundColor = 'rgb(154, 140, 152)';

      else if(years[j]===1918||years[j]===2021) td.style.backgroundColor = 'rgb(74, 78, 105)'; 

      else if(years[j]===1906||years[j]===1907) td.style.backgroundColor = 'rgb(34, 34, 59)';

      td.onclick = function() { 
        if(years[j]===1905) window.location.href = `https://earthquake.usgs.gov/earthquakes/eventpage/iscgem16957865/executive`;
        else if(years[j]===1907) window.location.href ='https://earthquake.usgs.gov/earthquakes/eventpage/iscgem16957943/executive';
        else if(years[j]===1910) window.location.href ='https://earthquake.usgs.gov/earthquakes/eventpage/iscgem16958079/executive';
        else if(years[j]===1911) window.location.href ='https://earthquake.usgs.gov/earthquakes/eventpage/iscgem16958130/executive';
        else if(years[j]===1914) window.location.href ='https://earthquake.usgs.gov/earthquakes/eventpage/iscgem913984/executive';
        else if(years[j]===1922) window.location.href ='https://earthquake.usgs.gov/earthquakes/eventpage/official19221111043251_30/executive';
        else if(years[j]===1923) window.location.href ='https://earthquake.usgs.gov/earthquakes/eventpage/official19230203160150_30/executive';
        else if(years[j]===1924) window.location.href ='https://earthquake.usgs.gov/earthquakes/eventpage/iscgem910911/executive';
        else if(years[j]===1929) window.location.href ='https://earthquake.usgs.gov/earthquakes/eventpage/iscgem908171/executive';
        else if(years[j]===1932) window.location.href ='https://earthquake.usgs.gov/earthquakes/eventpage/iscgem906183/executive';
        else if(years[j]===1933) window.location.href ='https://earthquake.usgs.gov/earthquakes/eventpage/iscgem906183/executive';
        else if(years[j]===1932) window.location.href ='https://earthquake.usgs.gov/earthquakes/eventpage/official19330302173100_30/executive';
        else if(years[j]===1934) window.location.href ='https://earthquake.usgs.gov/earthquakes/eventpage/iscgem904745/executive';
        else if(years[j]===1939) window.location.href ='https://earthquake.usgs.gov/earthquakes/eventpage/iscgem902275/executive';
        else if(years[j]===1940) window.location.href ='https://earthquake.usgs.gov/earthquakes/eventpage/iscgem901374/executive';
        else if(years[j]===1941) window.location.href ='https://earthquake.usgs.gov/earthquakes/eventpage/iscgem901083/executive';
        else if(years[j]===1943) window.location.href ='https://earthquake.usgs.gov/earthquakes/eventpage/iscgem899789/executive';
        else if(years[j]===1944) window.location.href ='https://earthquake.usgs.gov/earthquakes/eventpage/iscgem899647/executive';
        else if(years[j]===1945) window.location.href ='https://earthquake.usgs.gov/earthquakes/eventpage/iscgem899220/executive';
        else if(years[j]===1949) window.location.href ='https://earthquake.usgs.gov/earthquakes/eventpage/official19490822040118000_10/executive';
        else if(years[j]===1958) window.location.href ='https://earthquake.usgs.gov/earthquakes/eventpage/official19581106225809_30/executive';
        else if(years[j]===1964) window.location.href ='https://earthquake.usgs.gov/earthquakes/eventpage/official19640328033616_30/executive';
        else if(years[j]===1966) window.location.href ='https://earthquake.usgs.gov/earthquakes/eventpage/iscgem842581/executive';
        else if(years[j]===1968) window.location.href ='https://earthquake.usgs.gov/earthquakes/eventpage/iscgem821946/executive';
        else if(years[j]===1969) window.location.href ='https://earthquake.usgs.gov/earthquakes/eventpage/iscgem805430/executive';
        else if(years[j]===1970) window.location.href ='https://earthquake.usgs.gov/earthquakes/eventpage/iscgem794176/executive';
        else if(years[j]===1972) window.location.href ='https://earthquake.usgs.gov/earthquakes/eventpage/iscgem765501/executive';
        else if(years[j]===1976) window.location.href ='https://earthquake.usgs.gov/earthquakes/eventpage/usp0000ee7/executive';
        else if(years[j]===1977) window.location.href ='https://earthquake.usgs.gov/earthquakes/eventpage/iscgem694739/executive';
        else if(years[j]===1986) window.location.href ='https://earthquake.usgs.gov/earthquakes/eventpage/usp0002tmu/executive';
        else if(years[j]===1989) window.location.href ='https://earthquake.usgs.gov/earthquakes/eventpage/official19890523105446320_10/executive';
        else if(years[j]===1996) window.location.href ='https://earthquake.usgs.gov/earthquakes/eventpage/official19960217055930550_33/executive';
        else if(years[j]===1998) window.location.href ='https://earthquake.usgs.gov/earthquakes/eventpage/usp0008hzd/executive';
        else if(years[j]===2000) window.location.href ='https://earthquake.usgs.gov/earthquakes/eventpage/usp000a3qq/executive';
        else if(years[j]===2001) window.location.href ='https://earthquake.usgs.gov/earthquakes/eventpage/official20010623203314130_33/executive';
        else if(years[j]===2003) window.location.href ='https://earthquake.usgs.gov/earthquakes/eventpage/official20030925195006360_27/executive';
        else if(years[j]===2005) window.location.href ='https://earthquake.usgs.gov/earthquakes/eventpage/official20050328160936530_30/executive';
        else if(years[j]===2009) window.location.href ='https://earthquake.usgs.gov/earthquakes/eventpage/usp000h1ys/executive';
        else if(years[j]===2010) window.location.href ='https://earthquake.usgs.gov/earthquakes/eventpage/official20100227063411530_30/executive';
        else if(years[j]===2011) window.location.href ='https://earthquake.usgs.gov/earthquakes/eventpage/official20110311054624120_30/executive';
        else if(years[j]===2014) window.location.href ='https://earthquake.usgs.gov/earthquakes/eventpage/usc000nzvd/executive';
        else if(years[j]===2015) window.location.href ='https://earthquake.usgs.gov/earthquakes/eventpage/us20003k7a/executive';
        else if(years[j]===2017) window.location.href ='https://earthquake.usgs.gov/earthquakes/eventpage/us2000ahv0/executive';
        else if(years[j]===2018) window.location.href ='https://earthquake.usgs.gov/earthquakes/eventpage/us1000gcii/executive';
        else if(years[j]===2019) window.location.href ='https://earthquake.usgs.gov/earthquakes/eventpage/us60003sc0/executive';
        else if(years[j]===1906) toggleTableVisibility('table_1906');
        else if(years[j]===1917) toggleTableVisibility('table_1917');
        else if(years[j]===1918) toggleTableVisibility('table_1918');
        else if(years[j]===1919) toggleTableVisibility('table_1919');
        else if(years[j]===1920) toggleTableVisibility('table_1920');
        else if(years[j]===1938) toggleTableVisibility('table_1938');
        else if(years[j]===1942) toggleTableVisibility('table_1942');
        else if(years[j]===1946) toggleTableVisibility('table_1946');
        else if(years[j]===1950) toggleTableVisibility('table_1950');
        else if(years[j]===1952) toggleTableVisibility('table_1952');
        else if(years[j]===1957) toggleTableVisibility('table_1957');
        else if(years[j]===1960) toggleTableVisibility('table_1960');
        else if(years[j]===1963) toggleTableVisibility('table_1963');
        else if(years[j]===1965) toggleTableVisibility('table_1965');
        else if(years[j]===1971) toggleTableVisibility('table_1971');
        else if(years[j]===1985) toggleTableVisibility('table_1985');
        else if(years[j]===1994) toggleTableVisibility('table_1994');
        else if(years[j]===1995) toggleTableVisibility('table_1995');
        else if(years[j]===2004) toggleTableVisibility('table_2004');
        else if(years[j]===2006) toggleTableVisibility('table_2006');
        else if(years[j]===2021) toggleTableVisibility('table_2021');
        else window.location.href='noinfo.html';
      }
      
      tr.appendChild(td);
    }
    tbody.appendChild(tr);
    
  }
});
