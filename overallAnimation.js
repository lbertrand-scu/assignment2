const hoverAreaSleepOverall = document.getElementById("hoverAreaSleepOverall");
const sleepDisplayOverall = document.getElementById("sleepDisplayOverall");

hoverAreaSleepOverall.addEventListener("mouseenter", (e) => {
	sleepDisplayOverall.style.opacity = 1;
});

hoverAreaSleepOverall.addEventListener("mouseleave", (e) => {
	sleepDisplayOverall.style.opacity = 0;
})


const hoverAreaStudyOverall = document.getElementById("hoverAreaStudyOverall");
const studyDisplayOverall = document.getElementById("studyDisplayOverall");

hoverAreaStudyOverall.addEventListener("mouseenter", (e) => {
	studyDisplayOverall.style.opacity = 1;
});

hoverAreaStudyOverall.addEventListener("mouseleave", (e) => {
	studyDisplayOverall.style.opacity = 0;
})


const hoverAreaClassOverall = document.getElementById("hoverAreaClassOverall");
const classDisplayOverall = document.getElementById("classDisplayOverall");

hoverAreaClassOverall.addEventListener("mouseenter", (e) => {
	classDisplayOverall.style.opacity = 1;
});

hoverAreaClassOverall.addEventListener("mouseleave", (e) => {
	classDisplayOverall.style.opacity = 0;
})


const tooltipWorkoutOverall = document.getElementById("tooltipWorkoutOverall");

function addTooltipWorkoutOverall(rect, text) {
	rect.addEventListener("mouseenter", (e) => {
		tooltipWorkoutOverall.innerText = text;
		tooltipWorkoutOverall.style.opacity = 1
	});

	rect.addEventListener("mouseleave", () => {
		tooltipWorkoutOverall.style.opacity = 0;
	});
}

addTooltipWorkoutOverall(document.getElementById("hoverAreaWorkoutOverall"), "1.14 hours");


const hoverAreaSocialOverall = document.getElementById("hoverAreaSocialOverall");
const socialDisplayOverall = document.getElementById("socialDisplayOverall");

hoverAreaSocialOverall.addEventListener("mouseenter", (e) => {
	socialDisplayOverall.style.opacity = 1;
});

hoverAreaSocialOverall.addEventListener("mouseleave", (e) => {
	socialDisplayOverall.style.opacity = 0;
})


const tooltipEatOverall = document.getElementById("tooltipEatOverall");

function addTooltipEatOverall(rect, text) {
	rect.addEventListener("mouseenter", (e) => {
		tooltipEatOverall.innerText = text;
		tooltipEatOverall.style.opacity = 1
	});

	rect.addEventListener("mouseleave", () => {
		tooltipEatOverall.style.opacity = 0;
	});
}

addTooltipEatOverall(document.getElementById("hoverAreaEatOverall"), "1.42 hours");


const tooltipCleaningOverall = document.getElementById("tooltipCleaningOverall");

function addTooltipCleaningOverall(rect, text) {
	rect.addEventListener("mouseenter", (e) => {
		tooltipCleaningOverall.innerText = text;
		tooltipCleaningOverall.style.opacity = 1
	});

	rect.addEventListener("mouseleave", () => {
		tooltipCleaningOverall.style.opacity = 0;
	});
}

addTooltipCleaningOverall(document.getElementById("hoverAreaCleaningOverall"), "0.43 hours");

const tooltipMediaOverall = document.getElementById("tooltipMediaOverall");

function addTooltipMediaOverall(rect, text) {
	rect.addEventListener("mouseenter", (e) => {
		tooltipMediaOverall.innerText = text;
		tooltipMediaOverall.style.opacity = 1
	});

	rect.addEventListener("mouseleave", () => {
		tooltipMediaOverall.style.opacity = 0;
	});
}

addTooltipMediaOverall(document.getElementById("hoverAreaMediaOverall"), "1.57 hours");