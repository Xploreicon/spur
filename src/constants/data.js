import images from './images';

const Menu = [
    {
        text: 'About us',
        link: '#team',
    },
    {
        text: 'Services',
        link: '#services',
    },
    {
        text: 'Use Cases',
        link: '#use-cases',
    },
    {
        text: 'Process',
        link: '#process',
    },

    {
        text: 'Testimonials',
        link: '#testimonials',
    },
    {
        text: 'Request a quote',
        link: '#quote',
    }
];
const ServicesData = [
    {
        titleone: 'Web Design &',
        titletwo: 'Development',
        link: '#',
        itemclass: 'blight',
        imgURL: images.services03,
    },
    {
        titleone: 'Search engine',
        titletwo: 'optimization',
        link: '#',
        itemclass: 'blight',
        imgURL: images.services01,
    },
    {
        titleone: 'Pay-per-click',
        titletwo: 'advertising',
        link: '#',
        itemclass: 'bgreen',
        imgURL: images.services02,
    },
    {
        titleone: 'Email',
        titletwo: 'Marketing',
        link: '#',
        itemclass: 'bgreen',
        imgURL: images.services04,
    },
    {
        titleone: 'Ecommerce',
        titletwo: 'Solution',
        link: '#',
        itemclass: 'bdark',
        imgURL: images.services05,
    },
    {
        titleone: 'Analytics and',
        titletwo: 'Tracking',
        link: '#',
        itemclass: 'bdark',
        imgURL: images.services06,
    },
]
const CaseStudies = [
    {
        text: 'For a clothing brand, we designed & created a website then implemented a targeted PPC campaign that resulted in a 70% increase in the website traffic and a 50% increase in sales.',
        link: '#',
    },
    {
        text: 'For a gadget company,we designed & created a website then developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic which resulted in 90% sales.',
        link: '#',
    },
    {
        text: 'For an entertainment hub,we designed & created a website then created google ad and a social media marketing campaign that increased followers by 25% and generated a 60% increase in online merch sales.',
        link: '#',
    },
];

const WorkingProcess = [
    {
        title: 'Consultation',
        description: 'During the initial consultation, we will discuss your business goals and objectives using a website, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.',
    },
    {
        title: 'Research and Strategy Development',
        description: 'Once we know what you need, we do some digging. We look at what is working in your market and come up with a plan to help you stand out.',
    },
    {
        title: 'Implementation',
        description: ' With the plan in place, we get to work building your website and making sure everything looks and works just right.',
    },
    {
        title: 'Monitoring and Optimization',
        description: 'After your site is up and running, we keep track of how it is doing. If something is not working as well as it should, we fix it.',
    },
    {
        title: 'Reporting and Communication',
        description: 'You will always know how things are going. We will give you regular updates on what we are doing and how it is helping your business',
    },
    {
        title: 'Continual Improvement',
        description: 'The internet is always changing, and so are we. We are always looking for new ways to help you reach your goals and grow your business.',
    },

];

const Team = [
    {
        name: 'Ajie Divine',
        position: 'CEO and Founder',
        info: '5+ years of experience in Web Development. Expertise in React,Redux,Javascript and Node.',
        foto: images.team01,
        linkedin: '#',
    },
    {
        name: 'Agwnobi Adaku ',
        position: 'Director of Operations',
        info: '2+ years of experience in project management and team leadership. Strong organizational and communication skills, also a Social Media Manager',
        foto: images.team02,
        linkedin: '#',
    },
    {
        name: 'Tewogbola Tolulope',
        position: 'Web designer & UI/UX',
        info: '3+ years of experience in Web design. Proficient in User experience based designs',
        foto: images.team03,
        linkedin: '#',
    },


];

const Testimonials = [
    {
        name: 'John Smith',
        position: 'Marketing Director at XYZ Corp',
        testimonial: '"We have been working with Spur for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Spur to any company looking to grow their online presence."',
    },
    {
        name: 'John Smith',
        position: 'Marketing Director at XYZ Corp',
        testimonial: '"We have been working with Spur for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Spur to any company looking to grow their online presence."',
    },
    {
        name: 'John Smith',
        position: 'Marketing Director at XYZ Corp',
        testimonial: '"We have been working with Spur for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Spur to any company looking to grow their online presence."',
    },
    {
        name: 'John Smith',
        position: 'Marketing Director at XYZ Corp',
        testimonial: '"We have been working with Spur for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Spur to any company looking to grow their online presence."',
    },
];

const ProcessData = [
    {
        titleone: 'RiverFoundEnergy',
        titletwo: 'Oil & Gas',
        link: 'https://www.riverfoundenergy.com/',
        itemclass: 'blight',
        imgURL: images.process1,
    },
    {
        titleone: 'GreenCamp',
        titletwo: '(coming soon)',
        link: '#',
        itemclass: 'blight',
        imgURL: images.process2,
    },
    // {
    //     titleone: 'Pay-per-click',
    //     titletwo: 'advertising',
    //     link: '#',
    //     itemclass: 'bgreen',
    //     imgURL: images.services02,
    // },
    // {
    //     titleone: 'Email',
    //     titletwo: 'Marketing',
    //     link: '#',
    //     itemclass: 'bgreen',
    //     imgURL: images.services04,
    // },
    // {
    //     titleone: 'Ecommerce',
    //     titletwo: 'Solution',
    //     link: '#',
    //     itemclass: 'bdark',
    //     imgURL: images.services05,
    // },
    // {
    //     titleone: 'Analytics and',
    //     titletwo: 'Tracking',
    //     link: '#',
    //     itemclass: 'bdark',
    //     imgURL: images.services06,
    // },
]
export default { Menu, CaseStudies, WorkingProcess, Team, Testimonials, ServicesData, ProcessData, };