import { Config } from './src/lib/config.types';

export const config: Config = {
  runtime: 'nodejs',
  themeColor: "#5789f6",
  logoURL: "/images/logo.png",
  site: {
    url: "https://www.bastiondayz.com/",
    title: "Bastion DayZ",
/*     twitter: {
      site: "@site",
      creator: "@creator",
      card: "summary_large_image",
      images: [
        {
          url: "/images/marketing/banner.png",
          alt: "Marketing Banner for Bastion DayZ",
        },
      ],
    }, */
  },
  pages: {
    home: {
      title: "Home | Bastion DayZ",
      description: "Welcome to the Bastion DayZ! We are a DayZ community that is dedicated to providing the best experience for our players. Join us today!",
      sections: {
        network: {
          title: "Server Network",
          description: "Our DayZ servers are hosted in Europe and are maintained by our dedicated team of developers and system administrators.",
        },
        about: {
          title: "About Us",
          description: "We are a community of DayZ players who are passionate about the game and the experiences it provides. We strive to provide a safe and enjoyable environment for all players.",
          rows: {
            1: {
              title: "Events",
              description: "We host regular events and competitions for our players to participate in. These events are a great way to meet new people and have fun in the game.",
              image: {
                url: "/images/about/events.png",
                alt: "Events Image",
              },
            },
            2: {
              title: "Community",
              description: "We believe that a strong community is the key to a successful server. We work hard to foster a positive and inclusive community for all players.",
              image: {
                url: "/images/about/community.png",
                alt: "Community Image",
              },
            },
            3: {
              title: "Development",
              description: "Our team of developers are constantly working to improve the server and add new features. We welcome feedback and suggestions from our players.",
              image: {
                url: "/images/about/development.png",
                alt: "Development Image",
              },
            },
          },
        },
        leaderboard: {
          title: "Leaderboard",
          description: "Check out the top players on our servers and see how you compare. Can you make it to the top of the leaderboard?",
        },
        contact: {
          title: "Contact Us",
          description: "If you have any questions or concerns, please don't hesitate to contact us through the following channels.",
          links: {
            'Discord': "https://discord.gg/bastiondayz"
          },
        },
      },
    },
  },
  hero: {
    title: "We listen, we learn, we deliver.",
    description: "Our DayZ Community is built on the principles of transparency, integrity, and trust. We are committed to providing the best experience for our players. Wether you are a seasoned veteran or a new player, we have a place for you.",
    background: {
      color: 'rgb(51 65 85)',
      image: {
        url: "/images/hero.jpg",
        alt: "Hero Image",
      },
    },
    cta: {
      label: "Join us today!",
      href: "https://discord.gg/bastiondayz",
    },
  },
  servers: [
    {
      name: 'Bastion US1',
      ipv4: '216.39.240.50',
      gamePort: 2302,
      steamQueryPort: 27016,
      cftoolsApiId: '06bbd7eb-9e94-4ebf-8646-b90a344806db',
    },
    {
      name: 'Bastion US2',
      ipv4: '104.129.132.66',
      gamePort: 2302,
      steamQueryPort: 27016,
      cftoolsApiId: 'c5738674-bac8-4e04-94e7-bb121198fa2c',
    },
    {
      name: 'Bastion EU1',
      ipv4: '64.40.9.198',
      gamePort: 2302,
      steamQueryPort: 27016,
      cftoolsApiId: '487c5364-157b-4824-ac55-21b025f7cec5',
    },
    {
      name: 'Bastion AU1',
      ipv4: '103.152.197.151',
      gamePort: 2302,
      steamQueryPort: 27016,
      cftoolsApiId: '2e7bfe86-d035-420a-8a1a-7936d780150a',
    },
  ],
  cftools: {
    leaderboard: {
      enabled: false,
      defaultSortValue: 'kills',
      allowedSortValues: ['kills', 'deaths', 'kdratio', 'longest_kill', 'longest_shot', 'playtime'],
      blacklistedCFToolsIds: [],
      showAmount: 1,
    },
  },
  footer: {
    trademarkNotice: "The DayZ logo is a registered trademark of Bohemia Interactive a.s. Bastion is not affiliated with Bohemia Interactive a.s. or DayZ. All other trademarks are the property of their respective owners.",
    brandingName: "Bastion DayZ",
    brandingURL: '/',
    initialCopyrightYear: 2024,
    copyrightBrandName: "Bastion",
    copyrightBrandUrl: '/',
    links: [
/*       {
        url: '#',
        label: 'About',
      },
      {
        url: '#',
        label: 'Meet the Team',
      },
      {
        url: '#',
        label: 'Campaigns',
      },
      {
        url: '#',
        label: 'Blog',
      },
      {
        url: '#',
        label: 'Affiliate Program',
      },
      {
        url: '#',
        label: 'FAQs',
      },
      {
        url: '#',
        label: 'Contact',
      }, */
    ],
  },
};
