const LOWERCASE_CHARS = "abcdefghijklmnopqrstuvwxyz";
const UPPERCASE_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const DIGIT_CHARS = "0123456789";
const SPECIAL_CHARS = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";

function generatePassword() {
	const length = parseInt(document.getElementById("length").value);
	const includeDigits = document.getElementById("digits").checked;
	const includeSpecial = document.getElementById("special").checked;

	let chars = LOWERCASE_CHARS + UPPERCASE_CHARS;
	if (includeDigits) chars += DIGIT_CHARS;
	if (includeSpecial) chars += SPECIAL_CHARS;

	let password = "";
	for (let i = 0; i < length; i++) {
		password += chars.charAt(Math.floor(Math.random() * chars.length));
	}
	return password;
}

function updatePassword() {
	document.getElementById("password").value = generatePassword();
}

document.addEventListener("DOMContentLoaded", function() {
	updatePassword();
	document.getElementById("generate-btn").addEventListener("click", updatePassword);
});
