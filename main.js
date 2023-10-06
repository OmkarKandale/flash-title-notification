const flashTitleNotification = () => {
	let originalTitle = document.title;
	let isFlash = false;

	const changeTitle = () => {
		document.title = isFlash ? `(10) New Message Received` : originalTitle;
		isFlash = !isFlash;
	};
	setInterval(changeTitle, 1000);
};

window.onload = flashTitleNotification;
