import Footer from '@/components/Footer';
import './globals.css';
import Navbar from '@/components/navbar';

export const metadata = {
  title: {
    default: "Celebrate India's 77th Independence Day | Wisher Online",
    template: `%s | Wisher Online - Celebrate India's 77th Independence Day`
  },
  description: {
    default: `Join us in celebrating India's 77th Independence Day with heartfelt wishes and messages. Send wishes to your loved ones and share the patriotic spirit!`,
    template: `%s | Join us in celebrating India's 77th Independence Day with heartfelt wishes and messages.`
  },
  referrer: 'origin-when-cross-origin',
  keywords: [
    'Happy 77th Independence Day',
    'India Independence Day 2023',
    'Independence Day quotes',
    'Best wishes for Independence Day',
    'Patriotic messages in Hindi',
    'Freedom anniversary celebration',
    'Virtual Independence Day events',
    'Indian national holiday',
    `India's journey to freedom`,
    'Historical significance of Independence Day',
    'Indian flag hoisting',
    'Unity in diversity celebrations',
    'Proud to be Indian',
    'Tri-color flag',
    'Online patriotic greetings',
    'Virtual celebrations with family',
    `India's struggle for independence`,
    'Nationwide patriotic fervor',
    'Red Fort celebrations',
    'Online Independence Day wishes',
    'Inspiring stories of freedom fighters',
    'Patriotism and national pride',
    `Remembering India's heroes`,
    'Digital Independence Day cards',
    'Cultural programs on Independence Day',
  ],
  publisher: 'Arshahdul Ahmed - WebRizen LLP',
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer/>
        </body>
    </html>
  )
}