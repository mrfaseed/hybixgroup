import * as Si from 'react-icons/si';
const icons = [
    'SiAmazon', 'SiAws', 'SiAzure', 'SiMicrosoft', 'SiZeplin', 'SiAhrefs', 'SiMoz'
];

icons.forEach(icon => {
    if (Si[icon]) {
        console.log(`Found icon: ${icon}`);
    } else {
        console.log(`Missing icon: ${icon}`);
    }
});
