var OS = navigator.platform;
var buttons = document.getElementById("buttons");

if (OS.startsWith("Mac")) {
    buttons.innerHTML = "<button>Download For Mac</button><br><br><button>Download For Linux</button><br><br><button>Download For Windows</button>";
} else if (OS.startsWith("Win")) {
    buttons.innerHTML = "<button>Download For Windows</button><br><br><button>Download For Mac</button><button>Download For Linux</button>";
} else if (OS.startsWith("Linux")) {
    buttons.innerHTML = "<button>Download For Linux</button><br><br><button>Download For Windows</button><br><br><button>Download For Mac</button>";
} else {
    buttons.innerHTML = "<button>Download For Mac</button><br><br><button>Download For Linux</button><br><br><button>Download For Windows</button><br><br>:( There is no version of Rayyansaidi Desktop for your OS";
}