import images from './images';

const Menu = [
   // {
    //    text: 'About us',
    //    link: '#team',
   // },
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
        text: 'See how it works',
        link: '#quote',
    }
];
const ServicesData = [
    {
        titleone: 'Launch Your Website in Minutes',
        titletwo: 'No coding needed—just add your products and go live fast.',
        link: '#',
        itemclass: 'blight',
        imgURL: images.services03,
    },
    {
        titleone: 'Reach More Customers with Ads',
        titletwo: 'Targeted ads bring buyers to your site, locally or nationwide.',
        link: '#',
        itemclass: 'blight',
        imgURL: images.services01,
    },
    {
        titleone: 'Affordable Plans for Every Business',
        titletwo: 'Plans start at ₦5,000/month—grow at your pace.',
        link: '#',
        itemclass: 'bgreen',
        imgURL: images.services02,
    },
    {
        titleone: 'Works on Any Device',
        titletwo: 'Fast-loading sites that work on phones, tablets, or PCs.',
        link: '#',
        itemclass: 'bgreen',
        imgURL: images.services04,
    },
   /* {
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
    */
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
        title: 'Sign Up Free',
        description: ' Sign up for a free account and tell us about your business and what you need.',
    },
    {
        title: 'Build Your Site',
        description: 'We will create a custom website for you that looks great and works perfectly on any device.',
    },
    {
        title: 'Grow with Ads',
        description: 'We will help you reach more customers with targeted ads that bring buyers to your site.',
    }, /*
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
    }, */

];

const Team = [
    {
        name: 'Opay',
        position: '',
        info: 'Opay is widely used in Nigeria and is a popular payment method for online transactions. SpurNG utilizes Opay to provide a seamless payment experience for our clients.',
        foto: images.team01,
        linkedin: '#',
    },
    {
        name: 'Paystack ',
        position: '',
        info: 'Paystack is a popular payment gateway in Nigeria. SpurNG uses Paystack to provide a secure and reliable payment experience for our clients.',
        foto: images.team02,
        linkedin: '#',
    },
    {
        name: 'MTN',
        position: '',
        info: 'MTN is a leading telecommunications company in Nigeria. SpurNG uses MTN in collab with Google to provide ADs for our clients.',
        foto: images.team03,
        linkedin: '#',
    },


];

const Testimonials = [
    {
        name: 'Mummy Helen',
        position: 'Managing Director at SUNSITECOMPUTERS',
        testimonial: '"Spur has been a great partner for us. They have helped us grow our business and increase our online presence. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Spur to any company looking to grow their online presence."',
    },
    {
        name: 'Abiodun Akande',
        position: 'Real Estate Developer at Abiodun Akande and Associates',
        testimonial: '"Really great service. I have been using Spur for a few years now and I am very happy with the results. They have helped me grow my business and increase my online presence. I highly recommend Spur to anyone looking to grow their business."',
    },
    {
        name: 'Titi Margaret',
        position: 'Sole Proprietor at FeminineGirlHub',
        testimonial: '"MADE MY BUSINESS GROW! I have been using Spur for a few months now and I am very happy with the results. They have helped me grow my business and increase my online presence. I highly recommend Spur to anyone looking to grow their business."',
    },
    // {
    //     name: 'John Smith',
    //     position: 'Marketing Director at XYZ Corp',
    //     testimonial: '"We have been working with Spur for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Spur to any company looking to grow their online presence."',
    // },
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