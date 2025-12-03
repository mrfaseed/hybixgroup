import * as Si from 'react-icons/si';
const icons = [
    'SiReact', 'SiNextdotjs', 'SiVuedotjs', 'SiNodedotjs', 'SiTypescript', 'SiTailwindcss',
    'SiFlutter', 'SiSwift', 'SiKotlin', 'SiFirebase', 'SiRedux',
    'SiFigma', 'SiAdobexd', 'SiSketch', 'SiInvision', 'SiZeplin',
    'SiGoogleanalytics', 'SiSemrush', 'SiAhrefs', 'SiMoz', 'SiYoast',
    'SiFacebook', 'SiGoogleads', 'SiMailchimp', 'SiHubspot', 'SiCanva', 'SiHootsuite',
    'SiAmazonaws', 'SiMicrosoftazure', 'SiGooglecloud', 'SiTerraform', 'SiKubernetes', 'SiDocker',
    'SiShopify', 'SiWoocommerce', 'SiMagento', 'SiStripe', 'SiPaypal', 'SiBigcommerce',
    'SiEthereum', 'SiSolidity', 'SiIpfs',
    'SiPython', 'SiTensorflow', 'SiPytorch', 'SiScikitlearn', 'SiOpenai', 'SiKeras',
    'SiJenkins', 'SiGitlab', 'SiAnsible', 'SiPrometheus',
    'SiKalilinux', 'SiWireshark'
];

icons.forEach(icon => {
    if (!Si[icon]) {
        console.log(`Missing icon: ${icon}`);
    }
});
