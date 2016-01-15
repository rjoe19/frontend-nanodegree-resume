/*
This is empty on purpose! Your code to build the resume will go here.
 */
/*
var DATA = "%data%";
// $("#main").append(["Richard Joe"]);


 var awesomeThoughts = "My name is Richard and I am AWESOME!";

 var funThoughts = awesomeThoughts.replace("AWESOME!", "FUN");

 //$("#main").append(funThoughts);



// replace, then append...




// name + role in header

 var formattedName = HTMLheaderName.replace("%data%", "Richard Joe");

 var role = "Web Developer";

var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);



var skills = ["programming", "exercise science", "coolness"];

//$("#main").append(skills.length);


//create object bio

/*var bio = {

	"name": "Richard Joe",
	"role" : "Web Developer",
	"contact info" : "rjoe19@hotmail.com",
	"skills" :  ["programming", "exercise science", "coolness", "bio-hacking"],
	"welcome message": "Nice to meet you, to meet you nice"




}


//$("#main").append(bio.name);



var bio = {
    "name": "Richard Joe",
    "role": "Web Developer",
    
    "contacts":[
        {
            "mobile": "022 1270187",
            "email": "rjoe19@hotmail.com",
            "Github": "rjoe19",
            "Twitter": "rjoe19",
            "location": "Wellington, New Zealand"
        }
    ],
    "welcomeMessage": "I'm retraining to become a web developer and am interested in the tech startup scene",
    "biopic": "images/fry.jpg",
    "skills": [
        "Programming",
        "Strength & Conditioning",
        "Web Development",
        "Muay Thai",
        "travel hacking"
        
    ],
    "display": function () {
        var bioName = HTMLheaderName.replace(DATA, bio.name);
        var bioRole = HTMLheaderRole.replace(DATA, bio.role);
        var bioImage = HTMLbioPic.replace(DATA, bio.biopic);
        var bioMessage = HTMLwelcomeMsg.replace(DATA, bio.welcomeMessage);
        /*
          Momen: √√√
          For consistency single-quotes (') are preferred over double-quotes (").
          This is helpful when creating strings that include HTML.
          https://udacity.github.io/frontend-nanodegree-styleguide/javascript.html
          p.s. It is recommended to use double-quotes when you are writing JSON.
        /*
        $('#header').prepend(bioRole).prepend(bioName).append(bioImage, bioMessage);
        $('#header').append(HTMLskillsStart);

        /*
            for (var skill in bio.skills) {
                var bioSkills = HTMLskills.replace(DATA,bio.skills[skill]);
                $("#skills").append(bioSkills);
            };
        /*

        // insert ','  between each skill and '.' to the end of the list
        var bioSkills = HTMLskills.replace(DATA, bio.skills.join(' ,  ') + ' .');
        $('#skills').append(bioSkills);

        
          Momen: √√√
          You should always declare a variable with the variable statement ("var")
          When you fail to specify var, the variable is implicitly created in the
          global context If there's no declaration, it's hard to tell in what scope
          variable lives.
          Check:
          https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var
          https://google-styleguide.googlecode.com/svn/trunk/javascriptguide.xml#var
          https://udacity.github.io/frontend-nanodegree-styleguide/javascript.html
          p.s. It is optional initializing any variable to a value.
        
        for (var contact in bio.contacts) {
            var bioMobile = HTMLmobile.replace(DATA, bio.contacts[contact].mobile);
            var bioEmail = HTMLemail.replace(DATA, bio.contacts[contact].email);
            var bioGithub = HTMLgithub.replace(DATA, bio.contacts[contact].Github);
            var bioLocation = HTMLlocation.replace(DATA, bio.contacts[contact].location);
            var bioTwitter = HTMLtwitter.replace(DATA, bio.contacts[contact].Twitter);
            $('#topContacts').append(bioMobile, bioEmail, bioGithub, bioTwitter, bioLocation);
            $('#footerContacts').append(bioMobile, bioEmail, bioGithub, bioTwitter, bioLocation);
        }
    }
};






















/*

//  returns first name + last name (all caps)

function inName(name) {

	
	var nameStr =bio.name.trim().split(" ");
	console.log(nameStr);
	bio.name[1] = bio.name[1].toUpperCase();
	bio.name[0] = bio.name[0].slice(0,1).toUpperCase() +bio.name[0].slice(1).toLowerCase();

	return bio.name[0] + " " + bio.name[1];
	console.log(bio.name[0] + bio.name[1]);
}

$('#main').append(internationalizeButton);


/*
function inName(name) {
	
	var nameStr = bio.name;
	name =name.trim().split(" ");
	console.log(name);
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase() +name[0].slice(1).toLowerCase();

	return name[0] + " " + name[1];

}

$("#main").append(internationalizeButton);
*/



/*

//create object using dot notation

var work = {};
work.position = "Digital Marketing Consultant";
work.employer = "Kiwi Designs";
work.years = 2.5;


//create object using bracket notation

var education = {};
education["name"] = "Victoria University of Wellington";
education["years"] = "2001 - 2004";
education["city"] = "Wellington, New Zealand";

//$("#main").append(work["position"]);
//$("#main").append(education.name);



//JSON activity


var work = {

"jobs": [
		{	
				"employer": "Kiwi Designs",
	                 "title": "Digital Marketing Consultant",
	                 "location": "Auckland, New Zealand",
	                 "dates": "2013 - 2015",
	                 "description": "creating direct response website for B2B clients"

		},
		{
			"employer": "Champion Fruit Supplies",
	                 "title": "Duty Manager",
	                 "location": "Wellington, New Zealand",
	                 "dates": "2008 - 2012",
	                 "description": "Managing day-to-day running of retail store"


		},
		{
			"employer": "Porirua City Council",
	                 "title": "Finance Assistant",
	                 "location": "Wellington, New Zealand",
	                 "dates": "2006 - 2007",
	                 "description": "Assisting ratepayers with applications, data entry, customer service"





		}

	]

}

//loops thru diff work place locations
function locationizer (work_obj) {
	var locationArray =[];

	for (job in work_obj.jobs) {
		var newLocation = work_obj.jobs[job].location;
		locationArray.push(newLocation);
	}

	return locationArray;


}

console.log(locationizer(work));





var education = {

"schools": [
	{
		"name" : "Victoria University of Wellington",
		"location": "Wellington, New Zealand",
		"degree": "Bachelor of Commerce",
		"majors": "Accounting & commercial",
		"dates": "2001 - 2004",
		"URL": "http://www.vuw.ac.nz"
		
		},
	{
		"name": "Enspiral Dev Academy",
		"location": "Wellington, New Zealand",
		"degree":"n/a",
		"majors": "full stack web dev"
		"dates": "2016"
		"url": "http://www.devacademy.co.nz"
		}
	],


"online courses": [
		{
		"title": "Javascript Basics",
		"school": "Udacity",
		"date": "2016",
		"url": "http://www.udacity.com/course/viewer#!/c-ud804"

		}
	]
}


var projects = {
	"projects": [
		{
			"title": "sample project 1",
			"dates": "2016",
			"description": "blah blah blah blah"

		}

	]

}


//if statements, appending skills to page

if (bio.skills.length> 0) {
	$("#header").append(HTMLskillsStart);

	var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
	$("#skills").append(formattedSkill);


}



// jobs to page, for in loop
function displayWork() {
	for (job in work.jobs) {

		$("#workExperience").append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);

		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		$(".work-entry:last").append(formattedEmployerTitle);

		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		$(".work-entry:last").append(formattedDates);

		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedDescription);

	}

}

displayWork();


//event handler - click location

$(document).click(function(loc) {
  	var x = loc.pageX;
  	var y = loc.pageY;

  	logClicks(x,y);

});

*/




var DATA = "%data%";



var bio = {
    "name": "Richard Joe",
    "role": "Web Developer",
    
    "contacts":[
        {
            "mobile": "022 1270187",
            "email": "rjoe19@hotmail.com",
            "Github": "rjoe19",
            "Twitter": "rjoe19",
            "location": "Wellington, New Zealand"
        }
    ],
    "welcomeMessage": "I'm retraining to become a web developer and am interested in the tech startup scene",
    "biopic": "images/fry.jpg",
    "skills": [
        "Programming",
        "Strength & Conditioning",
        "Web Development",
        "Muay Thai",
        "travel hacking"
    ],
    "display": function () {
        var bioName = HTMLheaderName.replace(DATA, bio.name);
        var bioRole = HTMLheaderRole.replace(DATA, bio.role);
        var bioImage = HTMLbioPic.replace(DATA, bio.biopic);
        var bioMessage = HTMLwelcomeMsg.replace(DATA, bio.welcomeMessage);
        /*
          Momen: √√√
          For consistency single-quotes (') are preferred over double-quotes (").
          This is helpful when creating strings that include HTML.
          https://udacity.github.io/frontend-nanodegree-styleguide/javascript.html
          p.s. It is recommended to use double-quotes when you are writing JSON.
        */
        $('#header').prepend(bioRole).prepend(bioName).append(bioImage, bioMessage);
        $('#header').append(HTMLskillsStart);

        /*
            for (var skill in bio.skills) {
                var bioSkills = HTMLskills.replace(DATA,bio.skills[skill]);
                $("#skills").append(bioSkills);
            };
        */

        // insert ','  between each skill and '.' to the end of the list
        var bioSkills = HTMLskills.replace(DATA, bio.skills.join(' ,  ') + ' .');
        $('#skills').append(bioSkills);

        /*
          Momen: √√√
          You should always declare a variable with the variable statement ("var")
          When you fail to specify var, the variable is implicitly created in the
          global context If there's no declaration, it's hard to tell in what scope
          variable lives.
          Check:
          https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var
          https://google-styleguide.googlecode.com/svn/trunk/javascriptguide.xml#var
          https://udacity.github.io/frontend-nanodegree-styleguide/javascript.html
          p.s. It is optional initializing any variable to a value.
        */
        for (var contact in bio.contacts) {
            var bioMobile = HTMLmobile.replace(DATA, bio.contacts[contact].mobile);
            var bioEmail = HTMLemail.replace(DATA, bio.contacts[contact].email);
            var bioGithub = HTMLgithub.replace(DATA, bio.contacts[contact].Github);
            var bioLocation = HTMLlocation.replace(DATA, bio.contacts[contact].location);
            var bioTwitter = HTMLtwitter.replace(DATA, bio.contacts[contact].Twitter);
            $('#topContacts').append(bioMobile, bioEmail, bioGithub, bioTwitter, bioLocation);
            $('#footerContacts').append(bioMobile, bioEmail, bioGithub, bioTwitter, bioLocation);
        }
    }
};



var education = {
    "schools": [
        {
            "name": "Victoria University of Wellington",
            "location": "Wellington, New Zealand",
            "degree": "Bachelor",
            "majors": "Accounting & Commercial Law",
            "dates": "2001  - 2004",
            "url": "http://www.vuw.ac.nz"
        },
        {
            "name": "Dev Academy",
            "location": "Wellington, New Zealand",
            "degree": "skills based learning",
            "majors": "full stack web dev",
            "dates": "2016",
            "url": "http://www.devacademy.co.nz"
        }
    ],
    "onlineCourses": [
        {
            "title": "Front-End Web Developer Nanodegree",
            "school": "Udacity",
            "dates": "2016",
            "url": "https://www.udacity.com/course/viewer#!/c-ud804"
        }
       
    ],
    "display": function () {

    for (var school in education.schools) {
        $('#education').append(HTMLschoolStart);

        var eduName = HTMLschoolName.replace(DATA, education.schools[school].name);
        var eduDegree = HTMLschoolDegree.replace(DATA, education.schools[school].degree);
        var eduDates = HTMLschoolDates.replace(DATA, education.schools[school].dates);
        var eduLocation = HTMLschoolLocation.replace(DATA, education.schools[school].location);
        var eduMajor = HTMLschoolMajor.replace(DATA, education.schools[school].majors);
        $('.education-entry:last').append(eduName + eduDegree, eduDates, eduLocation, eduMajor);
        $('.education-entry:last').children('a').attr('href',  education.schools[school].url);
    }

    $('#education').append(HTMLonlineClasses);
    for (var course in education.onlineCourses) {

        $('#education').append(HTMLschoolStart);
        var eduOnlineTitle = HTMLonlineTitle.replace(DATA, education.onlineCourses[course].title);
        var eduOnlineSchool = HTMLonlineSchool.replace(DATA, education.onlineCourses[course].school);
        var eduOnlineDate =
            HTMLonlineDates.replace(DATA, education.onlineCourses[course].dates);
        var eduURL = HTMLonlineURL.replace(DATA, education.onlineCourses[course].url);
        $('.education-entry:last').append(eduOnlineTitle + eduOnlineSchool, eduOnlineDate, eduURL);
        $('.education-entry:last').children('a').attr('href',  education.onlineCourses[course].url);
    }
}
};

var work = {
    "jobs": [
        {
            "employer": "Kiwi Designs",
            "title": "Digital Marketing Consultant ",
            "url": "http://www.kiwidesigns.us",
            "dates": "January 2013 - July 2015",
            "location": " Auckland, New Zealand",
            "description": "Creating direct response websites for SMEs"
        },
        {
            "employer": "Champion Fruit Supplies",
            "title": "Duty Manager",
            "url": "n/a",
            "dates": "Jan 2008 - dec 2012",
            "location": "Wellington, New Zealand",
            "description": "Managing day to day retail store."
        },
        {
            "employer": "Porirua City Council",
            "title": "Finance Assistant",
            "url": "http://www.pcc.govt.nz",
            "dates": "2006 - 2007",
            "location": "Porirua, New Zealand",
            "description": "Assisting ratepayers with applications, data entry, admin."
        }
    ],
    "display": function () {
        for (var job in work.jobs) {
            $('#workExperience').append(HTMLworkStart);

            var workEmployer = HTMLworkEmployer.replace(DATA, work.jobs[job].employer);
            var workTitle = HTMLworkTitle.replace(DATA, work.jobs[job].title);
            var workDates = HTMLworkDates.replace(DATA, work.jobs[job].dates);
            var workDescription = HTMLworkDescription.replace(DATA, work.jobs[job].description);
            // jQuery( ":last" ) Selects the last matched element
            $('.work-entry:last').append(workEmployer + workTitle, workDates, workDescription);
            $('.work-entry:last').children('a').attr('href', work.jobs[job].url);
        }
    }
};

var projects = {
    "project": [
        {
            "title": "To Do list",
            "dates": "Dec 2015",
            "url" : "n/a",
            "description": "creation of to-do-list as per of EDA web dev asssignments",
            "images": [
                "images/fry.jpg",
               
            ]
        
        }
    ],
    "display": function(){
	for (var project in projects.project){
		$('#projects').append(HTMLprojectStart);
		var projectTitle = HTMLprojectTitle.replace(DATA,projects.project[project].title);
		var projectDates = HTMLprojectDates.replace(DATA,projects.project[project].dates);
		var projectDescription = HTMLprojectDescription.replace(DATA,projects.project[project].description);

		$('.project-entry:last').append(projectTitle,projectDates,projectDescription);
        $('.project-entry:last').children("a").attr("href", projects.project[project].url);
    /*
      Momen: √√√
      What if your project doesn't contain images?
      Do you need to check first?
    */
    if(projects.project[project].images.length !== 0){
        for (var image in projects.project[project].images) {
			var projectImage = HTMLprojectImage.replace(DATA,projects.project[project].images[image]);
			$('.project-entry:last').append(projectImage);
		}
    }else{
        $('.project-entry:last').append(HTMLprojectNoImage);
    }
	}
}
};

//information about click locations, hint: On line 89 in helper.js
$(document).click(function(loc) {

  var x= loc.pageX;
  var y = loc.pageY;
});



bio.display();
work.display();
education.display();
projects.display();



$('#main').append(internationalizeButton);
$('#mapDiv').append(googleMap);ｕ啕ｕ啕ｕ啕ｕ啕ｕ啕ｕ啕ｕ啕ｕ啕ｕ啕ｕ啕ｕ啕ｕ啕ｕ啕ｕ啕ｕ啕ｕ啕ｕ啕ｕ啕ｕ啕ｕ啕ｕ啕ｕ啕ｕ啕ｕ啕ｕ啕ｕ啕ｕ啕ｕ啕ｕ啕ｕ啕ｕ啕ｕ啕ｕ啕ｕ啕ｕ啕ｕ啕ｕ啕ｕ啕ｕ啕ｕ啕ｕ啕ｕ啕ｕ啕ｕ啕ｕ啕ｕ啕ｕ啕ｕ啕ｕ啕ｕ啕ｕ啕ｕ啕ｕ啕ｕ啕ｕ啕ｕ啕ｕ啕ｕ啕ｕ啕ｕ啕ｕ啕ｕ啕ｕ