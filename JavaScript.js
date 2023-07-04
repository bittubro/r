
		function getLinkList() {
			// Define your link list and password mappings here
			return [
				{ password: "dwcxbyhp", link: "https://cloud.vocon-it.com/products" },
				{ password: "hpbybyhphp", link: "https://www.google.com/" },
				{ password: "cycxdwfw", link: "https://www.facebook.com/" },
				{ password: "hpbybypbyjn", link: "https://mcqf.blogspot.com/" },
	{ password: "hpbycxdw", link: "https://cloud.vocon-it.com/products" }
			];
		}





		function getPasswordMap() {
			// Define your password map here
			return {
				"1": "az",
				"2": "by",
				"3": "cx",
				"4": "dw",
				"5": "ev",
				"6": "fu",
				"7": "gq",
				"8": "hp",
				"9": "io",
				"0": "jn"
			};
		}

		function checkPassword() {
			var input = document.getElementById("password").value;
			var map = getPasswordMap();
			var convertedInput = "";
			for (var i = 0; i < input.length; i++) {
				if (map[input[i]]) {
					convertedInput += map[input[i]];
					}
				}
			var linkList = getLinkList();
			for (var i = 0; i < linkList.length; i++) {
				if (convertedInput === linkList[i].password) {
					window.open(linkList[i].link, "_blank");
					return;
				}
			}
			alert("Password is incorrect, please try again.");
		}
	


