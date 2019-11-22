// Alert Popup
const alertBanner = document.getElementById('alert');

alertBanner.innerHTML =
  `
    <div class="alert-banner">
      <p><strong>Alert:</strong> You have <strong>6</strong> overdue tasks
      to complete</p>
      <p class="alert-banner-close">x</p>
    </div>
  `

  alertBanner.addEventListener('click', e => {
    const element = e.target;
    if (element.classList.contains('alert-banner-close')) {
      alertBanner.style.display = 'none';
    }
  });

  // Traffic Chart Navigation Updates
  const trafficNav = document.querySelector('.traffic-nav');
  const weekly = document.getElementById('weekly');
  const daily = document.getElementById('daily');
  const trafficList = document.querySelector('.traffic-nav');
  let trafficLabel = ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3",
  "4-10", "11-17", "18-24", "25-31"];
  let trafficDataSet = [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500, 2500];

  trafficList.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
      e.target.classList.add('active');
      const li = document.querySelectorAll('.traffic-nav-link');
      for (let i = 0; i < li.length; i++) {
        if (li[i] === e.target) {
          continue
        } else {
          li[i].classList.remove('active');
        };
      }
    }
  });

// Traffic Chart
const trafficCanvas = document.getElementById('traffic-chart');

makeNewChart();

function makeNewChart() {
  let trafficData = {
    labels: trafficLabel ,
    datasets: [{
      data: trafficDataSet ,
      backgroundColor: 'rgba(116, 119, 191, .3)',
      borderWidth: 1,
    }]
  };

  let trafficOptions = {
    aspectRatio: 2.5,
    animation: {
      duration: 0
    },
    scales: {
      yAxes: [{
        ticks: {
        beginAtZero:true
        }
      }]
    },
    legend : {
      display: false
    }
  };

  let trafficChart = new Chart(trafficCanvas, {
    type: 'line',
    data: trafficData,
    options: trafficOptions
  });
}

trafficNav.addEventListener('click', e => {
  const element = e.target;
  if (element.id === "weekly") {
    trafficDataSet = [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500, 2500];
    trafficLabel = ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3",
    "4-10", "11-17", "18-24", "25-31"];
    makeNewChart();
  }
});

trafficNav.addEventListener('click', e => {
  const element = e.target;
  if (element.id === "daily") {
    trafficDataSet = [750, 1250, 1000, 2000, 1500, 1750, 0];
    trafficLabel = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    makeNewChart();
  }
});

trafficNav.addEventListener('click', e => {
  const element = e.target;
  if (element.id === "hourly") {
    trafficDataSet = [100, 65, 70, 150, 90, 55, 60, 200, 125, 70, 65, 35];
    trafficLabel = ['01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00'];
    makeNewChart();
  }
});

trafficNav.addEventListener('click', e => {
  const element = e.target;
  if (element.id === "monthly") {
    trafficDataSet = [5500, 6000, 5000, 4500, 7000, 5250, 6500, 4000, 5000, 6250, 4500, 5000];
    trafficLabel = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    makeNewChart();
  }
});


// Daily chart
const dailyCanvas = document.getElementById('daily-chart')

const dailyData = {
  labels: ["S", "M", "T", "W", "T", "F", "S"],
  datasets: [{
    label: '# of Hits',
    data: [75, 115, 175, 125, 225, 200, 100],
    backgroundColor: '#7477BF',
    borderWidth: 1
  }]
};

const dailyOptions = {
  scales: {
    yAxes: [{
      ticks: {
      beginAtZero:true
      }
    }]
  },
  legend : {
    display: false
  }
};

let dailyChart = new Chart(dailyCanvas, {
  type: 'bar',
  data: dailyData,
  options: dailyOptions
});

// Mobile Chart
const mobileCanvas = document.getElementById('mobile-pie');

const mobileData = {
  labels: ["Desktop", "Tablet", "Phones"],
  datasets: [{
    label: '# of Users',
    data: [2000, 550, 500],
    borderWidth: 0,
    backgroundColor: [
      '#7477BF',
      '#78CF82',
      '#51B6C8'
    ]
  }]
};

const mobileOptions = {
  legend: {
    position: 'right',
    labels: {
      boxWidth: 20,
      fontStyle: 'bold'
    }
  }
}

let mobileChart = new Chart(mobileCanvas, {
  type: 'doughnut',
  data: mobileData,
  options: mobileOptions
});

// Message Functionality
const user = document.getElementById('userField');
const message = document.getElementById('messageField');
const send = document.getElementById('send');

send.addEventListener('click', () => {
  if (user.value === "" && message.value === "") {
    alert("Please fill out user and message fields before sending");
  } else if (user.value === "") {
    alert("Please fill out user field before sending");
  } else if (message.value === "") {
    alert("Please fill out message field before sending");
  } else {
    alert(`Message successfully sent to: ${user.value}`)
  }
});

// Notification Dropdown
const header = document.querySelector('header');
const notificationBox = document.getElementById('notifications');
const notifications = [
  'Victoria sent you a message.',
  'Dan Oliver suggested a link to you.',
  'Dawn Wood viewed your profile.'
];

header.addEventListener('click', e => {
  const element = e.target;
  if (element.classList.contains('bell')) {
    if (notificationBox.innerHTML === "") {
      const div = document.createElement('DIV');
      div.classList.add('notificationList');
      notificationBox.appendChild(div);
      for (i = 0; i < notifications.length; i++) {
        const notificationText = document.createElement('DIV');
        notificationText.classList.add('notificationText');
        const p = document.createElement('P');
        p.innerHTML = notifications[i];
        div.appendChild(notificationText);
        notificationText.appendChild(p);
      }
    } else {
      notificationBox.firstChild.remove();
    }
  }
});

// Save Settings to Local Storage
const settingsButton = document.querySelector('.settings-button');
const timezone = document.getElementById('timezone');
const emailButton = document.getElementById('emailButton');
const profileButton = document.getElementById('profileButton');

settingsButton.addEventListener('click', e => {
  const element = e.target;
  let timezoneValue = timezone.value;
  let emailValue = emailButton.checked;
  let profileValue = profileButton.checked;
  if (element.id === "save") {
    localStorage.setItem('timezoneStorage', timezoneValue);
    localStorage.setItem('emailStorage', emailValue);
    localStorage.setItem('profileStorage', profileValue);
    alert('Your settings have been saved!');
  } else if (element.id === "cancel") {
    localStorage.clear();
    timezone.value = localStorage.timezoneStorage;
    emailButton.checked = false;
    profileButton.checked = false;
  }
});

timezone.value = localStorage.timezoneStorage;

if (localStorage.emailStorage === "true") {
  emailButton.checked = true;
} else if (localStorage.emailStorage === "false") {
  emailButton.checked = false;
}

if (localStorage.profileStorage === "true") {
  profileButton.checked = true;
} else if (localStorage.profileStorage === "false") {
  profileButton.checked = false;
}

// Autocomplete Feature for User search
const userField = document.getElementById('userField');
const userNames = [
  'Victoria Chambers',
  'Dale Byrd',
  'Dawn Wood',
  'Dan Oliver'];

new Autofill(userField, {
  list: userNames
});
