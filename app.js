const data = [{
    "title": "Work",
    "timeframes": {
      "daily": {
        "current": 5,
        "previous": 7
      },
      "weekly": {
        "current": 32,
        "previous": 36
      },
      "monthly": {
        "current": 103,
        "previous": 128
      }
    }
  },
  {
    "title": "Play",
    "timeframes": {
      "daily": {
        "current": 1,
        "previous": 2
      },
      "weekly": {
        "current": 10,
        "previous": 8
      },
      "monthly": {
        "current": 23,
        "previous": 29
      }
    }
  },
  {
    "title": "Study",
    "timeframes": {
      "daily": {
        "current": 0,
        "previous": 1
      },
      "weekly": {
        "current": 4,
        "previous": 7
      },
      "monthly": {
        "current": 13,
        "previous": 19
      }
    }
  },
  {
    "title": "Exercise",
    "timeframes": {
      "daily": {
        "current": 1,
        "previous": 1
      },
      "weekly": {
        "current": 4,
        "previous": 5
      },
      "monthly": {
        "current": 11,
        "previous": 18
      }
    }
  },
  {
    "title": "Social",
    "timeframes": {
      "daily": {
        "current": 1,
        "previous": 3
      },
      "weekly": {
        "current": 5,
        "previous": 10
      },
      "monthly": {
        "current": 21,
        "previous": 23
      }
    }
  },
  {
    "title": "Self Care",
    "timeframes": {
      "daily": {
        "current": 0,
        "previous": 1
      },
      "weekly": {
        "current": 2,
        "previous": 2
      },
      "monthly": {
        "current": 7,
        "previous": 11
      }
    }
  }
]

let col2 = document.querySelector(".col-2");
let daily = document.querySelector(".daily");
let weekly = document.querySelector(".weekly");
let monthly = document.querySelector('.monthly')



daily.addEventListener('click', ()=>{
    let right = document.getElementsByClassName('col-2')[0].children;
    daily.classList.add('active');
    weekly.classList.remove('active');
    monthly.classList.remove('active');
    for(i=0;i<6;i++){
        right[i].children[0].children[1].children[0].textContent = data[i].timeframes.daily.current + "hrs"
        right[i].children[0].children[1].children[1].textContent = "Yesterday - " + data[i].timeframes.daily.previous + "hrs"
    }
});

weekly.addEventListener('click', ()=>{
    let right = document.getElementsByClassName('col-2')[0].children;
    daily.classList.remove('active');
    weekly.classList.add('active');
    monthly.classList.remove('active');
    for(i=0;i<6;i++){
      right[i].children[0].children[1].children[0].textContent = data[i].timeframes.weekly.current + "hrs"
      right[i].children[0].children[1].children[1].textContent = "Last Week - " + data[i].timeframes.weekly.previous + "hrs"
    }
});

monthly.addEventListener("click", ()=>{
    let right = document.getElementsByClassName('col-2')[0].children;
    daily.classList.remove('active');
    weekly.classList.remove('active');
    monthly.classList.add('active');
    for(i=0;i<6;i++){
      right[i].children[0].children[1].children[0].textContent = data[i].timeframes.monthly.current + "hrs"
      right[i].children[0].children[1].children[1].textContent = "Last Month - " + data[i].timeframes.monthly.previous + "hrs"
    }
});

