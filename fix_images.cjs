const fs = require('fs');

// Fix Home.jsx
let home = fs.readFileSync('src/pages/Home.jsx', 'utf8');
home = home.replace(/src=`\$\{import\.meta\.env\.BASE_URL\}images\/([^"]+)"/g, 'src={`${import.meta.env.BASE_URL}images/$1`}');
fs.writeFileSync('src/pages/Home.jsx', home);

// Fix About.jsx
let about = fs.readFileSync('src/pages/About.jsx', 'utf8');
about = about.replace(/src=`\$\{import\.meta\.env\.BASE_URL\}images\/([^"]+)"/g, 'src={`${import.meta.env.BASE_URL}images/$1`}');
fs.writeFileSync('src/pages/About.jsx', about);

console.log('JSX files syntax fixed');
