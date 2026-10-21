import type { SocialNetwork } from '@/components/site/social-icons';

export const contact = {
    email: '2connectke@gmail.com',
    phone: '+254 111 646 177',
    phoneHref: 'tel:+254111646177',
    location: 'Nairobi, Kenya',
    hours: 'Monday to Friday, 9AM to 5PM',
};

// TODO: replace with the real 2Connect profile links.
export const socials: {
    label: string;
    href: string;
    network: SocialNetwork;
}[] = [
    {
        label: 'Instagram',
        href: 'https://instagram.com/2connectke',
        network: 'instagram',
    },
    {
        label: 'TikTok',
        href: 'https://tiktok.com/@2connectke',
        network: 'tiktok',
    },
    { label: 'X', href: 'https://x.com/2connectke', network: 'x' },
    {
        label: 'LinkedIn',
        href: 'https://linkedin.com/company/2connectke',
        network: 'linkedin',
    },
    {
        label: 'Facebook',
        href: 'https://facebook.com/2connectke',
        network: 'facebook',
    },
];

export const values = [
    'Innovation with purpose',
    'Collaboration',
    'Integrity',
    'Empowerment',
    'Sustainability',
];

export const hashtags = [
    '#TuConnect',
    '#MbogiYaImpact',
    '#YourActionYourImpact',
    '#VijanaNaPurpose',
    '#ShowUpKE',
    '#MtaaNiWetu',
    '#ComradesWaImpact',
];

export const stats = [
    { value: 500, suffix: '+', label: 'Opportunities created' },
    { value: 100, suffix: '+', label: 'Campus clubs' },
    { value: 2000, suffix: '+', label: 'Hours served' },
    { value: 2000, suffix: '+', label: 'Communities reached' },
];

export const pillars: {
    number: string;
    title: string;
    short: string;
    description: string;
    image: string;
    imagePosition?: string;
}[] = [
    {
        number: '01',
        title: 'Volunteer Matching',
        short: 'Your skill, mtaa yetu.',
        description:
            'Tell us what you’re good at and what you care about. We’ll match you with volunteer opportunities where you actually make a difference, from tree planting to tutoring to health outreach.',
        image: '/assets/images/2connect-outreach-02.jpg',
        // Faces sit near the top of this photo; keep them in frame.
        imagePosition: 'center 15%',
    },
    {
        number: '02',
        title: 'Wellness & Peer Support',
        short: 'Mental health first, kisha tunaenda kazi.',
        description:
            'Giving your time can take a lot out of you. So we built in wellness support, safe peer groups where you can talk openly, and real professionals when you need them.',
        image: '/assets/images/2connect-meetup-07.jpg',
    },
    {
        number: '03',
        title: 'Professional Training',
        short: 'CV inakua, mtaa inakua.',
        description:
            'Our 2CFP training gets you ready before you step in, with certificates in leadership, project management and crisis response that employers take seriously.',
        image: '/assets/images/2connect-gathering-01.jpg',
    },
    {
        number: '04',
        title: 'Campus Leadership',
        short: 'Lead your campus. Change your county.',
        description:
            'Start or run a 2Connect club on campus, lead a chapter, organise big events and work side by side with partner organisations. Real experience you can talk about in any interview.',
        image: '/assets/images/2connect-portrait-02.jpg',
        imagePosition: 'center 25%',
    },
];

export const journey = [
    {
        title: 'Discover',
        description:
            'Tell us what moves you. We get to know your skills, your passions and your schedule.',
    },
    {
        title: 'Prepare',
        description:
            'Orientation and 2CFP training, so you walk in confident and ready.',
    },
    {
        title: 'Serve',
        description:
            'We connect you with a volunteer opportunity that needs exactly what you bring.',
    },
    {
        title: 'Reflect',
        description:
            'After every project we check in. How did it go? How are you doing?',
    },
    {
        title: 'Grow',
        description:
            'New skills, new friends, and a CV that finally has something real on it.',
    },
];

export interface SiteEvent {
    id: number;
    title: string;
    category: string;
    date: string;
    day: string;
    month: string;
    time?: string;
    location: string;
    image: string;
    imagePosition?: string;
    description: string;
}

export const events: SiteEvent[] = [
    {
        id: 1,
        title: 'Community Cleanup Drive',
        category: 'Environment',
        date: 'Sat, 18 Oct 2025',
        day: '18',
        month: 'Oct',
        time: '10:00 AM to 6:00 PM',
        location: 'Ihit Coworking, Dennis Pritt',
        image: '/assets/images/2connect-outreach-02.jpg',
        imagePosition: 'center 15%',
        description:
            'Gloves on, music up. We’re cleaning up our neighbourhood together, and you’ll leave with new friends and a full heart.',
    },
    {
        id: 2,
        title: 'Youth Mental Wellness Workshop',
        category: 'Wellness',
        date: 'Fri, 25 Jul 2025',
        day: '25',
        month: 'Jul',
        time: '9:00 AM to 5:00 PM',
        location: 'TuWork CoWorking, Lavington',
        image: '/assets/images/2connect-meetup-05.jpg',
        description:
            'A day to breathe, talk honestly and pick up tools that actually help. For everyone who gives so much of themselves.',
    },
    {
        id: 3,
        title: 'Campus Leadership Training',
        category: 'Training',
        date: 'Mon, 20 Apr 2026',
        day: '20',
        month: 'Apr',
        location: 'University of Nairobi',
        image: '/assets/images/2connect-gathering-01.jpg',
        description:
            'For campus ambassadors who want to lead well. Planning projects, running teams and making your club count.',
    },
    {
        id: 4,
        title: 'Healthcare Outreach Program',
        category: 'Health',
        date: 'Tue, 12 May 2026',
        day: '12',
        month: 'May',
        location: 'Kiambu County',
        image: '/assets/images/2connect-portrait-01.jpg',
        imagePosition: 'center 30%',
        description:
            'We’re supporting local clinics with health education, outreach and an extra set of hands where it’s needed most.',
    },
    {
        id: 5,
        title: '2Connect Community Meetup',
        category: 'Networking',
        date: 'Fri, 5 Jun 2026',
        day: '05',
        month: 'Jun',
        location: 'Nakuru, Kenya',
        image: '/assets/images/2connect-meetup-06.jpg',
        description:
            'Volunteers, partners and community leaders in one room. Come say hi, swap stories and leave with your next big idea.',
    },
];

export interface GalleryItem {
    src: string;
    title: string;
    place: string;
    category: string;
    caption: string;
}

// TODO: replace 'Kenya' with the real location of each shoot.
/** Add new photos here. They appear in the gallery in this order. */
export const gallery: GalleryItem[] = [
    {
        src: '/assets/images/2connect-outreach-02.jpg',
        title: 'The 2Connect family',
        place: 'Kenya',
        category: 'Community',
        caption:
            'Same energy, same mission. This is what showing up looks like.',
    },
    {
        src: '/assets/images/2connect-outreach-01.jpg',
        title: 'School compound cleanup',
        place: 'Kenya',
        category: 'Outreach',
        caption:
            'Brooms up, sleeves rolled. Leaving the place better than we found it.',
    },
    {
        src: '/assets/images/2connect-gathering-01.jpg',
        title: 'Community gathering',
        place: 'Kenya',
        category: 'Community',
        caption:
            'Good people, green lawn and conversations that keep going long after.',
    },
    {
        src: '/assets/images/2connect-hike-02.jpg',
        title: 'Waterfall hike',
        place: 'Kenya',
        category: 'Wellness',
        caption:
            'Fresh air, cold water and the crew. Wellness looks like this too.',
    },
    {
        src: '/assets/images/2connect-meetup-01.jpg',
        title: 'Evening meetup',
        place: 'Kenya',
        category: 'Meetups',
        caption: 'One table, honest conversations and plenty of laughs.',
    },
    {
        src: '/assets/images/2connect-hike-01.jpg',
        title: 'Into the forest',
        place: 'Kenya',
        category: 'Wellness',
        caption:
            'Slowing down and reconnecting with nature, one trail at a time.',
    },
    {
        src: '/assets/images/2connect-portrait-01.jpg',
        title: 'Faces of 2Connect',
        place: 'Kenya',
        category: 'People',
        caption: 'The smiles behind the work.',
    },
    {
        src: '/assets/images/2connect-hike-05.jpg',
        title: 'Hike day',
        place: 'Kenya',
        category: 'Wellness',
        caption: 'Rooted together, literally.',
    },
    {
        src: '/assets/images/2connect-meetup-05.jpg',
        title: 'Evening meetup',
        place: 'Kenya',
        category: 'Meetups',
        caption: 'Where the next big idea usually starts.',
    },
    {
        src: '/assets/images/2connect-portrait-02.jpg',
        title: 'Faces of 2Connect',
        place: 'Kenya',
        category: 'People',
        caption: 'Every member brings something only they can.',
    },
    {
        src: '/assets/images/2connect-hike-03.jpg',
        title: 'Waterfall hike',
        place: 'Kenya',
        category: 'Wellness',
        caption: 'Making memories off the clock.',
    },
    {
        src: '/assets/images/2connect-portrait-03.jpg',
        title: 'Faces of 2Connect',
        place: 'Kenya',
        category: 'People',
        caption: 'Game night focus.',
    },
    {
        src: '/assets/images/2connect-hike-06.jpg',
        title: 'Waterfall hike',
        place: 'Kenya',
        category: 'Wellness',
        caption: 'Showing up for yourself counts too.',
    },
    {
        src: '/assets/images/2connect-meetup-07.jpg',
        title: 'Evening meetup',
        place: 'Kenya',
        category: 'Meetups',
        caption: 'Catching up, checking in, planning what is next.',
    },
];
