import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: 'http://eagledefi.finance/exchange/#/swap',
      },
      {
        label: 'Liquidity',
        href: 'http://eagledefi.finance/exchange/#/pool',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Armory',
    icon: 'PoolIcon',
    href: '/nests',
  },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'PancakeSwap',
        href: 'https://pancakeswap.info/token/0x11D3e7410EE8F58b4d6F2b0Ed97be9A591dAa2F4',
      },
      // {
      //   label: 'CoinMarketCap',
      //   href: 'https://coinmarketcap.com/currencies/viking-swap/',
      // },
      // {
      //   label: 'CoinGecko',
      //   href: 'https://www.coingecko.com/en/coins/viking-swap',
      // },
    ],
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: "Github",
        href: "https://github.com/EagleDefi/",
      },
      // {
      //   label: "Docs",
      //   href: "https://vikingswap.gitbook.io/viking-swap/",
      // },
      {
        label: "Blog",
        href: "https://medium.com/@eagledefi/",
      },
    ],
  },
  // {
  //   label: 'Audit by Hacken',
  //   icon: 'HelmetIcon',
  //   href: 'https://www.vikingswap.finance/files/vikingHackenAudit.pdf',
  // },
]

export default config
