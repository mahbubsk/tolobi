import '../App.css';
import Hero from '../sections/hero'

import { images, icons } from '../assets'
import Features from '../sections/features';
import PricingTable from '../sections/pricing-table';
import Timeline from '../sections/timeline';
import CompetitorTable from '../sections/competitor-table';
import WhyUseTolobi from '../sections/why-use-tolibo';
import FAQ from '../sections/faq';

const features = [
  {
    type: 'time',
    icon: icons.documentTime,
    excerpt: 'Save valuable time from the rental process'
  },
  {
    type: 'time',
    icon: icons.documentTime,
    excerpt: 'Save valuable time from the rental process'
  },
  {
    type: 'time',
    icon: icons.documentTime,
    excerpt: 'Save valuable time from the rental process'
  }
]
const datas = [
  {
    title: `Access to Tolobi's Dashboard`,
    checkers: ['tick', 'cross', 'tick']
  },
  {
    title: `Access to Tolobi's Dashboard`,
    checkers: ['tick', 'tick', 'tick']
  },
  {
    title: `Access to Tolobi's Dashboard`,
    checkers: ['tick', 'cross', 'tick']
  }
]

const info = {
  title: 'TENANT PLACEMENT FEE',
  subTitle: 'Tax Deductible',
  data: [
    {
      percentage: '75',
      excerpt: `Of First Month’s Rent`
    },
    {
      percentage: '75',
      excerpt: `Of First Month’s Rent`
    }, {
      percentage: '75',
      excerpt: `Of First Month’s Rent`
    },
  ]
}

const tableDataOfCompetitor = [
  {
    title: 'Features',
    competitor: 'Competitors',
    tolobi: images.logo
  },
  {
    title: 'Tenant Placement Fee',
    competitor: {
      percentage: '100%',
      condition: 'Of First Month’s Rent'
    },
    tolobi: {
      percentage: '40%',
      condition: 'Of First Month’s Rent'
    }
  },
  {
    title: 'Mark Up On Repairs',
    competitor: '100%',
    tolobi: '0%'
  }
]

const whyUseTolobi = {
  title: 'Why Our Clients',
  subTitle: 'Work With Us',
  bgImage: images.bgImage,
  cards: [
    {
      icon: icons.workStyle,
      title: 'Unbeatable Pricing.',
      excerpt: 'Transparent, Low, Fixed Fee For Any Rental Unit.'
    },
    {
      icon: icons.workStyle,
      title: 'No Exclusivity.',
      excerpt: 'Transparent, Low, Fixed Fee For Any Rental Unit.'
    },
    {
      icon: icons.workStyle,
      title: 'Results Driven.',
      excerpt: 'Transparent, Low, Fixed Fee For Any Rental Unit.'
    },
    {
      icon: icons.workStyle,
      title: 'Rental Focused.',
      excerpt: 'Transparent, Low, Fixed Fee For Any Rental Unit.'
    }
  ]
}

const faqData = {
  title: 'Frequently Asked Questions',
  items: [
    {
      title: `What's included in the Tolobi Leasing service?`,
      excerpt: 'Our Leasing service includes marketing your listing on over 40 websites, on-demand Self-Tours, quick and thorough tenant screening, and lease preparation. With our Leasing service, you can get high-quality renters for a one-time leasing fee of 50-75% of the 1st month’s rent (depending on the region).'
    },
    {
      title: `What's included in the Tolobi Leasing service 2?`,
      excerpt: 'Our Leasing service includes marketing your listing on over 40 websites, on-demand Self-Tours, quick and thorough tenant screening, and lease preparation. With our Leasing service, you can get high-quality renters for a one-time leasing fee of 50-75% of the 1st month’s rent (depending on the region).'
    },
    {
      title: `What's included in the Tolobi Leasing service 3?`,
      excerpt: 'Our Leasing service includes marketing your listing on over 40 websites, on-demand Self-Tours, quick and thorough tenant screening, and lease preparation. With our Leasing service, you can get high-quality renters for a one-time leasing fee of 50-75% of the 1st month’s rent (depending on the region).'
    },
    {
      title: `What's included in the Tolobi Leasing service 4?`,
      excerpt: 'Our Leasing service includes marketing your listing on over 40 websites, on-demand Self-Tours, quick and thorough tenant screening, and lease preparation. With our Leasing service, you can get high-quality renters for a one-time leasing fee of 50-75% of the 1st month’s rent (depending on the region).'
    },
    {
      title: `What's included in the Tolobi Leasing service 5?`,
      excerpt: 'Our Leasing service includes marketing your listing on over 40 websites, on-demand Self-Tours, quick and thorough tenant screening, and lease preparation. With our Leasing service, you can get high-quality renters for a one-time leasing fee of 50-75% of the 1st month’s rent (depending on the region).'
    },
  ]
}

function App() {
  return (
    <div className="App">
      <Hero image={images.bgImage} />
      <Features features={features} />
      <PricingTable datas={datas} info={info} />
      <CompetitorTable data={tableDataOfCompetitor} />
      <WhyUseTolobi data={whyUseTolobi} />
      {/* <Timeline /> */}
      <FAQ data={faqData} />
    </div>
  );
}

export default App;
