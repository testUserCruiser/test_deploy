import TravelPic from '../assets/chicagoreszd.jpg'
// import DarkMode from '../assets/Darkreszd.jpg'
// import SEO from '../assets/seo.png'
import Residpic from '../assets/redispubsub.jpeg'
import Protopic from '../assets/protocolbuffers.png'


export const cardData = [
    {
        thumbnail: Protopic,
        title: "Why you should move to the new Protocol Buffers instead of old JSON",
        link: "Why-you-should-move-to-the-new-Protocol-Buffers-instead-of-old-JSON",
        content: "APIs are backbone of modern applications. APIs are powering the backend for web client and mobile client applications, and also used for communicate between applications regardless of technology and platform.",
        tags: ["tech", "dev", "stack"],
        date: "july 8, 2020 5 min"
    },
    {
        thumbnail: Residpic,
        title: "Redis Pub/Sub & the messaging system",
        link: "Redis-PubSub-&-the-messaging-system",
        content: "Redis Pub/Sub implements the messaging system where the senders (publishers) sends the messages while the receivers (subscribers) receive them. The link by which the messages are transferred is called channel.",
        tags: ["dev"],
        date: "Oct 22, 2019 2 min"
    },        
    {
        thumbnail: TravelPic,
        title: "My trip to Chicago & why I hate traveling",
        link: "My-trip-to-Chicago-&-why-I-hate-traveling",
        content: "I wanted to visit Naperville,IL 3 years ago and even told my friends about it, but 2 years after that moment, I didn’t really want to travel anywhere anymore because in my opinion, the Internet (even if it’s not decentralized) saves",
        tags: ["travel", "bio"],
        date: "Apr 15, 2020 4 min"
    }
]
