/**
 * Defining the charts
 */

Chart.defaults.global.defaultFontColor = "#323648";
Chart.defaults.global.defaultFontFamily = "Slack-Averta";
Chart.defaults.global.defaultFontSize = 16;

/**
 * Defining colors that Slack uses for branding.
 * For reference as well.
 */
let slackColors = [
  "#F5A330", // yellow
  "#37AC81", // teal
  "#69C4D7", // light blue
  "#BE1313", // red
  "#DC175C", // pink
  "#DEDFE1", // gray
  "#5A1B49" // purple
];

let gender = new Chart("gender", {
  responsive: true,
  type: "doughnut",
  data: {
    labels: ["Males", "Females"],
    datasets: [
      {
        data: [14, 11],
        backgroundColor: ["#DEDFE1", "#69C4D7"]
      }
    ]
  }
});

let havePersonalWebsite = new Chart("havePersonalWebsite", {
  responsive: true,
  type: "doughnut",
  data: {
    labels: ["Yes", "No"],
    datasets: [
      {
        data: [19, 6],
        backgroundColor: slackColors
      }
    ]
  }
});

let hostingProvider = new Chart("hostingProvider", {
  responsive: true,
  type: "doughnut",
  data: {
    labels: [
      "Wordpress",
      "GitHub Pages",
      "Squarespace",
      "DreamHost",
      "Digital Ocean",
      "AWS"
    ],
    datasets: [
      {
        data: [2, 3, 2, 2, 2, 2],
        backgroundColor: slackColors
      }
    ]
  }
});

let experience = new Chart("experience", {
  responsive: true,
  type: "doughnut",
  data: {
    labels: ["10 or more", "6 to 9", "3 to 5", " 1 to 2"],
    datasets: [
      {
        data: [4, 8, 10, 3],
        backgroundColor: slackColors
      }
    ]
  }
});

let major = new Chart("major", {
  responsive: true,
  type: "doughnut",
  data: {
    labels: [
      "Art",
      "Business",
      "Engineering and Technology",
      "Environment",
      "Literature, Language and Social Science",
      "Science and Math"
    ],
    datasets: [
      {
        data: [8, 2, 8, 1, 5, 6],
        backgroundColor: slackColors
      }
    ]
  }
});

let contributions = new Chart("githubContributions", {
  responsive: true,
  type: "doughnut",
  data: {
    labels: [
      "N/A",
      "0 to 10",
      "11 to 50",
      "51 to 100",
      "200 or more",
      "400 or more"
    ],
    datasets: [
      {
        data: [4, 11, 4, 2, 3, 1],
        backgroundColor: slackColors
      }
    ]
  }
});

/**
 * Fun Stuff
 * Changing title to something random
 */
var title = document.title;

var altTitles = [
  "Whatcha up to? 👀",
  "'Ello Gov'nor! 🎩",
  "Top o' the mornin' to ya! ☘",
  "Wubba, lubba dub-dub! 🔬️",
  "E.T. phone home. 👽",
  "There's no place like home. 🏠",
  "Live long and prosper. 🖖",
  "Here's Johnny! 🔪",
  "My precious. 💍",
  "Do you read me, HAL? 🔴",
  "Expecto patronum! ⚡",
  "You've been such a peach! 🍑",
  "Slack is super cool, isn't it? 🤔️",
  "Vanilla is my favorite ice cream and JS flavor 🍦"
];

window.onblur = () => {
  document.title = altTitles[Math.floor(Math.random() * altTitles.length)];
};

window.onfocus = () => {
  document.title = title;
};

/**
 * Some fun console messages
 */
console.error(
  "Error: This website is too awesome, Chrome is having trouble processing all the amazing raw power. Refer to https://fvcproductions.com for a less intense but equally cool website."
);
console.log("Did you look at the HTML? There's some sweet ASCII art in there!");
console.info(
  "You're probably wondering how I got the titles to switch around."
);
console.info(
  "Well, using the built in methods of onblur and onfocus of the window object, I can manipulate the title whenever a user isn't focusing on my page."
);
console.info("Neat, right? 😊");
console.info(
  "Okay so all these chrome.loadTimes() warnings are coming from Airtable's widget. 🙄️"
);
