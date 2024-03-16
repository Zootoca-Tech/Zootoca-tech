import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home1',
  templateUrl: './home1.component.html',
  styleUrls: ['./home1.component.css']
})
export class Home1Component implements OnInit {
  @Input() data: any;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  footerData = {
    backExists: "0",
    wallpaper: ""
  }

  about = {
    title: "About us",
    subtitle: "We are competitive",
    description: "Welcome to Zootoca Technologies, a dynamic and innovative digital media company dedicated to shaping the future of content creation, distribution, and engagement. Our passion lies in harnessing the power of technology to transform ideas into captivating digital experiences.",
    images: [
      {
        image: "assets/images/about-slider/1.jpg"
      },
      {
        image: "assets/images/about-slider/2.jpg"
      },
      {
        image: "assets/images/about-slider/3.jpg"
      },
      {
        image: "assets/images/about-slider/4.jpg"
      },
      {
        image: "assets/images/about-slider/5.jpg"
      }
    ]
  }

  whatwedo = {
    title: "What We do",
    work: [
      {
        image: "assets/images/pic1.jpg",
        title: "SEO",
        serial: "01"
      },
      {
        image: "assets/images/pic2.jpg",
        title: "Cutting-Edge Content Creation",
        serial: "02"
      },
      {
        image: "assets/images/pic3.jpg",
        title: "Tech-Driven Solutions",
        serial: "03"
      }
    ],
    subtitle: "We present the idea with impressive details.",
    description: "Vivid colors and abstract patterns, combined with unique uses of light, textures, and space, create an outdoor space that magnifies..."
  }

  testimonials = {
    title: "Testimonial",
    testimonials: [
      {
        image: "assets/images/testimonials/ceo1.jpeg",
        name:"Kalai Selvan",
        role: "(Director)",
        company: "SSC  Max Academy",
        quotes: "An absolute joy to work with ZOOTOCA Technology.They helped us with every aspect of designing,making videos and setting up our website and they always go extra mile with customer support and service."
      },
      {
        image: "assets/images/testimonials/ceo2.png",
        name:"Thankamani. K",
        role: "(Director)",
        company: "GoldBell Foundation",
        quotes: "They are so responsive and timely in getting back to me.I love their design sense, and their willingness to dig down deep to understand my business and what’s important to me and the people I need to reach.I’m so thankful to ZOOTOCA."
      },
      {
        image: "assets/images/testimonials/ceo3.jpeg",
        name:"",
        role: "",
        company: "Annai Velankanni Shrine",
        quotes: "Viewing a mass, whether via television or on the internet, is certainly a worthwhile activity.ZOOTOCA Technology help us to make a live mass video and other special occasion related videos in a great way.They have a young,energetic editors to make a quality videos to reach the viewers."
      },
      {
        image: "assets/images/testimonials/ceo4.jpg",
        name:"Prabhu. T",
        role: "(Director)",
        company: "Foodeye",
        quotes: "Awesome experience working with this team.They continuously gives suggestions to improve our online presence. We do not have to worry when ZOOTOCA is with us. Truly grateful for all the efforts they’ve put making our company a success today!"
      },
      {
        image: "assets/images/testimonials/ceo5.jpeg",
        name:"Novel",
        role: "(Director)",
        company: "YNside",
        quotes: "Heroes of ZOOTOCA believes in client success and they have an array of tools and expertise to make that happen from digital marketing to SEO, to website design. Best of all, they have dedicated and responsive team that is open to ideas!"
      },
      {
        image: "assets/images/testimonials/ceo3.jpeg",
        name:"Murali",
        role: "(Event Coordinator)",
        company: "Open Mic Shows",
        quotes: "Viewing a mass, whether via television or on the internet, is certainly a worthwhile activity.ZOOTOCA Technology help us to make a live mass video and other special occasion related videos in a great way.They have a young,energetic editors to make a quality videos to reach the viewers."
      }
    ]
  }

  // testimonials = {
  //   experience: {
  //     title: "Infographic",
  //     items: [
  //       {
  //         count: "24",
  //         title: "Years of Experience"
  //       },
  //       {
  //         count: "340",
  //         title: "Project Taken"
  //       },
  //       {
  //         count: "86",
  //         title: "Awards Won"
  //       },
  //       {
  //         count: "36",
  //         title: "Twitter Followers"
  //       }
  //     ]
  //   },
  //   testimonials: {
  //     title: "Testimonial",
  //     content: [
  //       {
  //         image: "assets/images/testimonials/pic1.jpg",
  //         name: "Rosalina D. William",
  //         role: "Architect",
  //         quote: "“Amazing fast and reliable customer support! The team of developers are willing to go mile for customer service! Thanks! which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite sense of me.”"
  //       },
  //       {
  //         image: "assets/images/testimonials/pic2.jpg",
  //         name: "Mitchal Jhon",
  //         role: "Architect",
  //         quote: "“Amazing fast and reliable customer support! The team of developers are willing to go mile for customer service! Thanks! which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite sense of me.”"
  //       },
  //       {
  //         image: "assets/images/testimonials/pic3.jpg",
  //         name: "Barney Smith",
  //         role: "Interior designer",
  //         quote: "“Great theme, just what we were looking for. Easy to install, easy to navigate. Well documented. Really enjoyed the support. which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite sense of me.”"
  //       },
  //       {
  //         image: "assets/images/testimonials/pic4.jpg",
  //         name: "Rosalina D. William",
  //         role: "Architect",
  //         quote: "“Great theme, just what we were looking for. Easy to install, easy to navigate. Well documented. Really enjoyed the support. which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite sense of me.”"
  //       },
  //       {
  //         image: "assets/images/testimonials/pic3.jpg",
  //         name: "Rosalina D. William",
  //         role: "CEO, Intearch",
  //         quote: "“Great theme, just what we were looking for. Easy to install, easy to navigate. Well documented. Really enjoyed the support. which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite sense of me.”"
  //       }
  //     ]
  //   }
  // }
  homeservice = {
    title: "All Services",
    title2: "Services",
    services: [
      {
        serial: "01",
        // icon: "assets/images/service-images/Event.jpg",
        icon: "assets/images/em.png",
        title: "Event Management",
        title2: " “REMEMBERED US” ",
        PopupImage: "assets/images/service-images/Event Management.jpg",
        description: "  The passionate team at ZOOTOCA Technologies is dedicated to assisting in the production of your event,from arrangement to achievement.Zootoca team has a massive communication over the community to arrange the guest for any kind of event according to your wish. <br><br> we specialize in crafting unforgettable events tailored to your unique vision. Our comprehensive event management services encompass everything from initial concept development to flawless execution, ensuring that every detail is meticulously planned and executed to perfection. Whether you're planning a corporate conference, a grand gala, a wedding celebration, or a social gathering, we are here to bring your vision to life and create an experience that will leave a lasting impression",
        imageIn: "/assets/images/service-images/event_management_2.webp",
        subtitle:`Crafting Unforgettable Experiences`,
        subdescription:`we specialize in crafting unforgettable events tailored to your unique vision. Our comprehensive event management services encompass everything from initial concept development to flawless execution, ensuring that every detail is meticulously planned and executed to perfection. Whether you're planning a corporate conference, a grand gala, a wedding celebration, or a social gathering, we are here to bring your vision to life and create an experience that will leave a lasting impression.`,
        subimage:`/assets/images/service-images/Event_Management_1.jpeg`,
        subheading: [
          "Traditional events", 
          "Corporate events",
          "Private parties",
          "Promotional events",

          ],
          subescription: [
            "To organize a traditional  event our professional team will stand you.We understand the value of customs and cultures made by our forefathers and we put our best effort to make various events successfully and cheerfully celebrated.",
            "We are specialized in  organizing corporate events such as Business meet,Annual meetings,Product launch,team appreciation ceremonies and so on. We will execute your plan to a grand success!  ",
            "We will start from  conceptualization to execution.We  will make an entire arrangememt from every look and corner(Which includes  DJ,Photography,Videography,Décor and so on)We make sure everything moves like a clock and your guests are happy in the event.",
            "We help you to enhance the customer services by promoting your brands or products . Trends come and go,but the effectiveness of different marketing strategies help your product to rule the world.",
          ]
      },
      {
        serial: "02",
        icon: "assets/images/seo.png",
        title: "Search Engine Optimization (SEO)",
        title2: "  “GET IN TOUCH WITH YOUR VALUABLE VIEWERS” ",
        PopupImage: "assets/images/service-images/search engine.jpg",
        description: "ZOOTOCA Technologies team will build a pathway between you and your viewers for achieving multiple success at once with very less investment.<br>We provide a range of architectural 3D modeling services to our customers to aid the Web Digital Media Group is a leading Android UI/UX App development company that delivers end-to-end Android App development services to open up new opportunities for business. Being a top company, we specialize to transform your unique ideas into real-time Android applications. We will help you unlock wonderful experience on different types of devices – foldable devices, tablets, smartphones, auto/cars, wearables/smartwatch, and television. No matter, whatever size and shape of your device is, you can have more engaging and fast experience. We, as the most trusted Android App development company, use latest tools to enable innovation. Our company is committed to unlocking the power of Android such as Android developer tools, security protocols, libraries, Android architecture components, and Android framework.",
        imageIn: "assets/images/service-images/seo.png",
        subtitle:`Real-time Seo`,
        subdescription:`While understanding the market, we will analyze your website's structure, internal framework and build other primary elements that search engine algorithms are biased towards. Once we have gathered all this info, we will recommend work usage, improved alignment & relevance to target your specific keywords. And contextualize the target audience's dialect at the very most. The top digital marketing agency, we know the A to Z of Search Engine Optimization services.`,
        subimage:`/assets/images/service-images/seo2.png`,
        subheading: [
          "Target group", 
          "Content",
          "Search",
          "Ranking",

          ],
          subescription: [
            "Your target audience is the foundation of your SEO strategy. Our team analyze what your audience likes and ind the solution or how to attract the people to improve your site engagement.",
            "With intense competition and the need for quality content, the path can seem daunting. But fear not- our expert team is here to guide you through the challenges and lead you to success!",
            "We work with strong web development platform to implement best practices for technical search engine optimization which provides fast,seamless user experience that is intuitive and high performing to improve the visibility.",
            "In today’s digital world, establishing a strong online presence is essential for any company looking to thrive. However the journey to become top of the google’s search ranking is not so easy. But Our ZOOTOCA team is there to help you to reach with different strategies and techniques.",
          ]
      },
      {

        serial: "03",
        icon: "assets/images/wd.png",
        title: "Web Design",
        title2: " “ GIVE SOMETHING DIFFERENT to see for your viewers” ",
        PopupImage: "assets/images/service-images/Web Design.jpg",
        description: "ZOOTOCA Technologies team will blend creative thinking and we implement your needs with our EEE’s – Experience, Expertise, Enthusiasm. <br> In today's digital age, having a strong online presence is crucial for businesses and individuals alike. A well-designed website serves as a virtual storefront, attracting visitors, conveying information, and driving conversions. However, the process of website development can seem daunting to those unfamiliar with the technical aspects involved. In this guide, we'll break down the essential steps involved in creating a website, from conceptualization to launch.",
        imageIn: "/assets/images/service-images/webdevelop1.png",
        subtitle:`Design Your Website`,
        subdescription:`The design of your website plays a crucial role in attracting and retaining visitors. Start by creating a wireframe or mockup to visualize the layout and structure of your site. Pay attention to factors such as navigation, branding, typography, color scheme, and imagery. Aim for a clean and intuitive design that enhances user experience.
        Once you have a solid plan in place, it's time to bring your website to life. Depending on your chosen platform, you may use pre-designed templates or custom coding to build your site. Pay attention to responsiveness, ensuring that your website displays correctly across different devices and screen sizes. Customize your site's functionality with plugins, widgets, and integrations to enhance its performance and user experience.`,
        subimage:`/assets/images/service-images/webdevelop2.png`,
        subheading: [
          "UI/UX design", 
          "Full stack web development",
          "Static and dynamic website"

          ],
          subescription: [
            "We take an entire responsibility for creating intuitive,engaging and visually appealing digital experience for users.We have an expertize designing team to ensure that design  decisions align goals and technical constraints.",
            "Our team is flexible  and skilled in developing client side web applications.We are also proficient in building server side applications.We are also responsible for production environments and manage the deployment process.",
            " We focus on layout,graphics,adobe photoshop,illustrator to develop the web.We will develop the layouts depending upon the requirements of the projects.",
          ]
      },
      {
        serial: "04",
        icon: "assets/images/ga.png",
        title: "Social Media Marketing",
        title2: "     “YOU’ve CAME TO THE RIGHT PLACE FOR YOUR BETTERMENT” ",
        PopupImage: "assets/images/service-images/social media add.jpg",
        description: "ZOOTOCA Technologies assure that you can reach your target customers with our best strategies. Social media has revolutionized the way businesses connect with their audience, offering a powerful platform for engagement, promotion, and brand building. Social media marketing (SMM) has become an indispensable tool for businesses of all sizes to reach and influence their target demographic. In this guide, we'll explore the fundamentals of social media marketing and strategies for leveraging these platforms effectively.",
        imageIn: "/assets/images/service-images/Sc_marketing_1.png",
        subtitle:`Develop a Content Strategy & Engage Audience`,
        subdescription:`Content is at the heart of social media marketing. Develop a content strategy that aligns with your brand identity, goals, and audience preferences. Create a mix of content types, including images, videos, blog posts, infographics, and user-generated content. Consistency is key, so establish a posting schedule and maintain a steady flow of high-quality content
        Social media is a two-way conversation, and engagement is crucial for building relationships and fostering loyalty. Respond promptly to comments, messages, and mentions from your audience. Encourage conversation and interaction by asking questions, running polls, and hosting contests or giveaways. Show appreciation for your followers and make them feel valued.`,
        subimage:`/assets/images/service-images/socialMediaMark.png`,
        subheading: [
          "Social media marketing", 
          "Influencer marketing",
          "Product marketing",

          ],
          subescription: [
            "Social media is a real time platform.If you want to use it to grow your business you need to post regularly.Our team support to stay on top of engagements with your business.we will keep up with trends,and maintain accurate profiles.",
            "Zootoca team will focus on adding value through useful interesting content and building up your brand.We can organically promote your business and others will promote it for you.",
            "We implement the process of communicating a product’s unique value to customers.We will also captures audience attention, tells your brand story and keeps customers coming back.  ",
          ]
      },
      {
        serial: "05",
        icon: "assets/images/gd.png",
        title: "Graphic Design",
        title2: "   “MAKE YOUR DREAM INTO VISUALIZATION” ",
        PopupImage: "assets/images/service-images/Graphic Design .jpg",
        description: `ZOOTOCA Technologies will create you a best platform to communicate information through visual concepts,we have a best graphic designers to make your dream into reality. <br> Graphic design is the art of visual communication, where creativity meets functionality to convey messages, ideas, and emotions through images, typography, colors, and layout. From logos and branding to advertising and web design, graphic design plays a pivotal role in shaping our visual landscape. In this guide, we'll delve into the world of graphic design, exploring its principles, techniques, and applications. Understanding these principles is essential for creating visually appealing and effective designs. Whether it's arranging elements on a page or choosing colors and fonts, adherence to these principles ensures harmony and clarity in design.`,
        imageIn: "/assets/images/service-images/grapdsgn.png",
        subtitle:`Building Strong Brand Identity`,
        subdescription:`Graphic design plays a pivotal role in shaping brand identity and perception. A cohesive visual identity, including logos, color palettes, typography, and imagery, helps distinguish brands from competitors and fosters brand recognition and loyalty. Work closely with clients to understand their values, target audience, and market positioning, and translate these into visually compelling brand assets.`,
        subimage:`/assets/images/service-images/grapdsgn1.png`,
        subheading: [
        "Branding Design",
        "Poster design",
        "Brochure design",
        "Packaging design",
        ],
        subescription: [
          "ZOOTOCA team will guide you to give an identity to your organization,makes your business memorable,encourages the customers to reach you.We have an enthusiastic team to support your marketing and advertisement to make your employers pride.",
          "ZOOTOCA has an energetic designers to design a poster to capture a moving audience with a impactful posters.We effectively convey essential informations to the audience.",
          "We have sufficient designers in our team to develop an eye catchy brochures which has a sufficient information about your organization.We help you to highlight your professionalism,provide essential details which shows how you are commited to quality and your audience.",
          "Consumers tend to judge a book by their covers.The real challenge is not only creating a visually pleasing design but one that is unique amongst competing product as well.Zootoca team will give you a best ideas for your brand to reach the heights."
        ]
      },
      {
        serial: "06",
        icon: "assets/images/ve.png",
        title: "Video Editing",
        title2: " “REMEMBERED US” ",
        description: `Video editing is the creative process of assembling and manipulating video footage to create a cohesive narrative or visual experience. From feature films and documentaries to social media content and advertisements, video editing plays a vital role in shaping the way we consume and interact with visual media. In this guide, we'll explore the art of video editing, from basic techniques to advanced concepts, and uncover the secrets behind crafting compelling videos
        Video editing is a dynamic and creative process that requires a combination of technical skill, artistic vision, and storytelling prowess. By mastering the basics of organization, storytelling, editing techniques, audio mixing, visual effects, and exporting, you can transform raw footage into compelling videos that captivate audiences and leave a lasting impression. Embrace experimentation, practice regularly, and never stop learning to refine your craft and push the boundaries of your creativity in the exciting world of video editing.`,
        imageIn: "/assets/images/service-images/videoedit.png",
        PopupImage: "assets/images/video editing.jpg",
        subtitle:`Transforming Footage into Stories`,
        subdescription:`At the heart of video editing is storytelling. Whether you're creating a short film, promotional video, or vlog, every video should have a clear narrative arc or message. Start by outlining the key points or scenes you want to include, then arrange your footage in a logical sequence that conveys your story effectively. Experiment with pacing, rhythm, and structure to engage your audience and evoke emotions.`,
        subimage:`/assets/images/service-images/videoediting.png`,
        subheading: [
          "Cinematic video editing", 
          "Documentary video",
          "Event video",
          "Reels and shorts"

          ],
          subescription: [
            "We have  an expert video editors will use different cinematic editing techniques to make your video looks like a real movie you’d watch in theaters.We will assure you that your video will have a proper sound and powerful visual effects and so on ",
            "You will need to handle a lot of raw footage if you want to make a documentary video,editing plays a vital and challenging role. Zootoca team will help you to manage the projects and make easier for you.",
            "This involves capturing the event’s highlights,interview,presentations and any other relevant content to create a compelling video recap.We satisfy your expectations and requirements for the video.",
            "If you are looking for a platform with a strong community of users and creative tools,Reals and shorts are good option for connecting with people.Zootoca team will help you to shoot the videos,edit,add music and effects."
          ]
      },

      {
        serial: "07",
        icon: "assets/images/pg.png",
        title: "Photography & Videography",
        title2: "  “Discovering the  BEAUTY through our lens” ",
        description: `A picture is worth a thousand words, but video tells the whole story. ZOOTOCA Technologies will help to obtain the customer through eye-catching pictures and videos. <br> Photography and videography are powerful mediums for storytelling, self-expression, and capturing the beauty of the world around us. From documenting life's special moments to creating visual masterpieces, photographers and videographers play a vital role in preserving memories and shaping our collective narrative. In this guide, we'll delve into the art of photography and videography, exploring techniques, equipment, and creative approaches to capturing stunning images and videos.`,
        imageIn: "/assets/images/service-images/vdography&photography.jpeg",
        subtitle:`The Art of Photography and Videography`,
        subdescription:`Photography and videography are powerful story telling mediums, capable of evoking emotions, conveying messages, and capturing moments in time. Whether you're shooting portraits, landscapes, street scenes, or documentaries, strive to tell a compelling story through your images and videos. Look for interesting subjects, moments, and details that communicate a narrative or evoke a sense of wonder and curiosity.`,
        subimage:`/assets/images/service-images/phot_vdo_1.jpeg`,
        subheading: [
          "Traditional photography", 
          "Fashion photography",
          "Candid photography",
          "Event photography",
          "Cinematic video editing",
          "Documentary video",
          "Event video",
          "Reels and shorts"

          ],
          subescription: [
            "We  have a passionate photographers to handle set up,take down and will work with you to ensure that all your photography needs are met.We can also help to  create a more polished and professional look for your event.",
            "We will take entire responsibility from clothing,accessories,hairstyle and makeup too.Our work directly contributes to supporting countless individuals in the fashion industry.",
            "We capture spontaneous moments on the go instead of directing to pose.Our team has an efficiency to capture these unexpected and beautiful pictures without pressuring anyone.so that you can have 100% fun and 0%tension.",
            "We will organize all your private parties like wedding,birthday to large public gatherings like corporate events,galas,award ceremonies and music festivals.we provide you professional art of snapping high quality images during a wide variety of occasions.",
            "We have  an expert video editors will use different cinematic editing techniques to make your video looks like a real movie you’d watch in theatres.We will assure you that your video will have a proper sound and powerful visual effects and so on.",
            "You will need to handle a lot of raw footage if you want to make a documentary video,editing plays a vital and challenging role.Zootoca team will help you to manage the projects and make easier for you",
            "This involves capturing the event’s highlights,interview,presentations and any other relevant content to create a compelling video recap.We satisfy your expectations and requirements for the video.",
            "If you are looking for a platform with a strong community of users and creative tools,Reals and shorts are good option for connecting with people.Zootoca team will help you to shoot the videos,edit,add music and effects."
          ]
      },
      {
        serial: "08",
        icon: "assets/images/ma.png",
        title: "Mobile Apps",
        title2: "  “READY TO SHOWCASE YOU” ",
        PopupImage: "assets/images/service-images/Android & IOS App.jpg",
        description: `ZOOTOCA Technologies have a  well equipped  app developers will help you to reach out all your expectations.We uses programming languages and development skills to create,test and develop application on mobile devices. <br> Mobile apps have transformed the way businesses operate, offering new avenues for customer engagement, sales, and service delivery. Today, companies across industries use mobile apps to streamline processes, enhance customer experiences, and drive revenue growth. From e-commerce giants like Amazon and Alibaba to ride-sharing platforms like Uber and Lyft, mobile apps have reshaped entire industries, disrupting traditional business models and revolutionizing the way we interact with products and services.`,
        imageIn: "/assets/images/service-images/mobile_app_1.png",
        subtitle:`The Way We Interact with Technology`,
        subdescription:`As technology continues to evolve, so too will mobile apps. Emerging trends like augmented reality (AR), virtual reality (VR), and the Internet of Things (IoT) are poised to revolutionize the app landscape, offering new possibilities for immersive experiences and interconnected ecosystems.

        Artificial intelligence (AI) and machine learning (ML) will play an increasingly prominent role in app development, powering personalized recommendations, predictive analytics, and intelligent automation.
        
        With each new innovation, mobile apps will continue to shape the way we live, work, and play, driving progress and unlocking new opportunities for individuals and businesses alike.`,
        subimage:`/assets/images/service-images/mobile_app_2.png`,
        subheading: [
          "ANDROID", 
          "IOS"
          ],
          subescription: [
            "ZOOTOCA has an excellent and innovative android app developers will create test for code to ensure robustness and performance.They can fix bugs in existing android applications and can also add new features.",
            "We have a expertise and talented developers design and build applications.We ensure the performance,quality and responsiveness of applications will reach you on time.",
          ]
      },
      {
        serial: "09",
        icon: "assets/images/im.png",
        title: "Influencer Marketing",
        title2: " “Embrace the power of genuine connections” ",
        description: `ZOOTOCA Technologies team is a unique blend of knowledge and experience,equipped with a diverse set of skills,We provide you immeasurable quality of service reflects in every aspects. <br> Influencer marketing is a form of collaboration between brands and individuals who have a significant and engaged following on social media platforms. These influencers, often experts or enthusiasts in a particular niche, have built credibility and trust with their audience, making them valuable partners for brands seeking to reach and influence their target demographic.`,
        imageIn: "/assets/images/service-images/Influencer_marketing_1.jpg",
        PopupImage: "assets/images/service-images/Influencer Marketing.jpg",
        subtitle:`  Building Authentic Connections in the Digital Age `,
        subdescription:`Successful influencer marketing relies on building authentic relationships between brands and influencers. Approach influencers with respect and transparency, clearly outlining your campaign objectives, expectations, and compensation. Foster open communication and collaboration throughout the partnership, allowing influencers creative freedom to authentically integrate your brand into their content in a way that resonates with their audience.
        Crafting Compelling Content`,
        subimage:`/assets/images/service-images/Influencer_marketing_2.jpg`,
        subheading: [
          "Brand Ambassador", 
          "Social media influencers",

          ],
          subescription: [
            "We will do a research and identify potential brand ambassadors who have a strong presence and influence on social media platforms relevant to the audience.We will work closely with the ambassadors  to create engaging content that reasonate with audience.",
            "We will look over the influencers who are authentic,genuine and have a strong connection with the audience.We will avoid influencers who promotes too many brands because this can undetermine the creditability for your brand.",
          ]
      },
      {
        serial: "10",
        icon: "assets/images/sma.png",
        title: "SOCIAL MEDIA ADS & Google Ads",
        PopupImage: "assets/images/service-images/social media add.jpg",
        title2: " “SMART ADVERTISING STARTS HERE” ",
        description: `Google Ads, formerly known as Google AdWords, is a powerful online advertising platform that enables businesses to reach potential customers through targeted ads displayed on Google's search engine results pages (SERPs), websites, and apps. With its vast reach, advanced targeting options, and measurable results, Google Ads offers businesses of all sizes the opportunity to increase visibility, drive traffic, and grow revenue. In this guide, we'll explore the fundamentals of Google Ads, including setup, optimization, and best practices for maximizing your advertising investment.
        Google. Ads can appear as text ads, display ads, video ads, or shopping ads, depending on the campaign type and targeting settings. With Google Ads, advertisers can target specific locations, demographics, interests, devices, and more to reach their desired audience.`,
        imageIn: "/assets/images/service-images/Google_ads_1.jpg",
        subtitle:`Creating Compelling Ad Copy`,
        subdescription:`Crafting compelling ad copy is crucial for capturing the attention of potential customers and driving clicks to your website. Write clear, concise, and relevant ad copy that highlights the unique selling points of your products or services and encourages users to take action. Experiment with different ad formats, headlines, descriptions, and call-to-action (CTA) buttons to optimize performance and maximize click-through rates (CTR).`,
        subimage:`/assets/images/service-images/gg_ads.png`,
        subheading: [
          "Search Ads", 
          "Video ads",
          "Local ads",
          "Instagram ads",
          "Twitter ads",
          "Facebook ads"
          ],
          subescription: [
            "Text based ads that appear on google search engine.We help you to reach potential customers across different platforms.",
            "Ads displayed on you tube videos.Product based ads that showcase along with their images,prices and descriptions.It will help the customers to make the decisions directly from the ad.",
            "Ads that target users based  on their location allowing businessess to reach customer in specific geographical areas.we will guide you with different strategies to increase local visibility.",
            "Initially we will create instagram account for your business.We can help you to post your company ads which Will appear in user’s feeds,stories,explore page.We ensure that your ads are visually appealing and aligns with your brand identity.",
            "Twitter offers several ad formats including tweets.We will help you to select the best ad format that suits your goal.We will monitor  key metrics such as impressions and conversions.Based on the performance data we can make adjustments and optimize the results.",
            "Facebook offers you image ads,video ads,carousel ads and more.We can also add headlines and descriptions.We will make sure that the ad is engaging with the audience for your identity."
          ]
      },
      {
        serial: "11",
        icon: "assets/images/cw.png",
        title: "Content Creation",
        title2: " “CRAFTING WORDS” ",
        description: ` We have an expert and excel team to write script for interviews, voiceovers, and any scripted segments to ensure the video tells a cohesive story.Overall our content creators contribute their creativity,skills to produce the unimaginable reach.<br> In today's digital landscape, content creation has become a cornerstone of marketing strategy, serving as a means to engage, educate, and inspire audiences across various platforms. From blog posts and social media updates to videos and podcasts, creating high-quality content is essential for building brand awareness, driving traffic, and nurturing relationships with your audience. In this guide, we'll explore the art of content creation, including strategies, best practices, and tips for producing compelling and impactful content. Research your audience demographics, interests, preferences, and pain points to tailor your content to their needs and interests. Develop buyer personas to represent different segments of your audience and use them as a guide when creating content that resonates with your target demographic.`,
        imageIn: "/assets/images/service-images/content-writ.png",
        subtitle:`A Guide to Effective Content Creation`,
        subdescription:`The key to successful content creation is to provide value to your audience by addressing their needs, answering their questions, and solving their problems. Focus on creating content that educates, entertains, or inspires your audience and positions your brand as a trusted authority in your niche. Conduct keyword research and address relevant topics and keywords that align with your audience's interests and search intent.`,
        subimage:`/assets/images/service-images/Content_creation_1.jpeg`,
        subheading: [
          "Blog post", 
          "Website content",
          "Social media content",
          "Email newsletters",
          "Case studies",
          "Video scripts",
          "Press release"


          ],
          subescription: [
            "We make an informative articles to educate,entertain or engage the readers on specific topic.We will analyze the in depth trends and your opinion.",
            "We aim to inform about the organization to the viewers through our content.We also include homepage copy,product/service descriptions and so on.",
            "We can also create short form content created for social media platforms like facebook,twitter,instagram and linked in.Social media content includes post,captions,tweets and updates to engage the followers.",
            "We can create a written messages distributed via email or sms.It may contain updates,promotions,curated content  designed to drive conversations.",
            "We will come up with excellent narrative that  showcase how a product or service solved a specific problem.We can also demonstrate real world applications.",
            "Zootoca team will never disappoint you in our content.Our wise team is always there to write the scripts for your video content including tutorials,interviews and promotional videos.We can make narration to any visuals to ensure a cohesive  and engaging presentation.",
            "We can make official announcements distributed to media outlets,journalist and stakeholders to share news,updates or events related to an organization.",

          ]
      },
      {
        serial: "12",
        icon: "assets/images/ms.png",
        title: "Marketing Strategy",
        title2: "",
        description: `A marketing strategy serves as a roadmap for businesses to achieve their goals, attract customers, and drive growth in a competitive marketplace. Whether you're a startup, small business, or multinational corporation, a well-defined marketing strategy provides clarity, direction, and focus for your marketing efforts. In this guide, we'll explore the essential components of a marketing strategy, from defining objectives to implementing tactics and measuring success.
        The first step in developing a marketing strategy is to clearly define your objectives and goals. What do you want to achieve with your marketing efforts? Whether it's increasing brand awareness, generating leads, driving sales, or building customer loyalty, establish specific, measurable, achievable, relevant, and time-bound (SMART) objectives that align with your overall business objectives.`,
        imageIn: "/assets/images/service-images/MarketingStratgy.png",
        subtitle:`Blueprint for Business Success`,
        subdescription:`Selecting the right marketing channels is essential for reaching and engaging your target audience effectively. Consider factors such as audience demographics, behavior, preferences, and media consumption habits when choosing channels such as digital marketing, social media, email marketing, content marketing, search engine optimization (SEO), paid advertising, and offline tactics. Develop an integrated marketing mix that leverages multiple channels to amplify your message and maximize reach.`,
        subimage:`/assets/images/service-images/Marketing stra_2.png`,
        subheading: [
          "Digital Marketing Strategy", 
          "Branding Strategy",
          "Content Marketing Strategy",
          "Social Media Marketing Strategy",
          "Influencer Marketing Strategy"
          ],
          subescription: [
           "Incorporates various online channels such as search engines, websites, email, and mobile apps to reach and engage customers.",
           "Focuses on building a strong brand identity and emotional connection with customers to foster loyalty and trust.",
           "Involves creating and distributing valuable, relevant content to attract and engage a target audience, with the goal of driving profitable customer action.",
           "Utilizes social media platforms to connect with audiences, build brand awareness, and drive website traffic or sales.",
           "Collaborates with influencers or individuals with a large following to promote products or services to their audience."
          ]
      }
    ]
  }
  // homeservice = {
  //   title: "All Services",
  //   title2: "Services",
  //   services: [
  //     {
  //       serial: "01",
  //       icon: "assets/images/em.png",
  //       title: "Event Management",
  //       description: "We specialize in crafting and executing seamless, extraordinary events that leave a lasting impression, making your moments truly unforgettable.",
  //       PopupImage: "assets/images/service-images/Event Management.jpg",
  //       subtitle:`Real-time Seo`
  //     },
  //     {
  //       serial: "02",
  //       icon: "assets/images/seo.png",
  //       title: "SEO",
  //       description: "We excel in driving organic leads and traffic to your website through powerful SEO strategies, fostering natural online growth.",
  //       PopupImage: "assets/images/service-images/search engine.jpg"
  //     },
  //     {
  //       serial: "03",
  //       icon: "assets/images/pg.png",
  //       title: "Photography",
  //       description: "We effortlessly transform everyday photos into captivating masterpieces, meticulously enhancing the essence and beauty of each captured moment",
  //       PopupImage: "assets/images/service-images/Photography & Videography.jpg"
  //     },
  //     {
  //       serial: "04",
  //       icon: "assets/images/wd.png",
  //       title: "Web Design",
  //       description: "We create user-friendly websites that foster lasting connections, enabling you to cultivate and nurture long-term relationships with your customers.",
  //       PopupImage: "assets/images/service-images/Web Design.jpg"
  //     },
  //     {
  //       serial: "05",
  //       icon: "assets/images/ve.png",
  //       title: "Video Editing",
  //       description: "We expertly blend visuals and sound, sculpting a seamless masterpiece that brings the narrative to life with precision and finesse.",
  //       PopupImage: "assets/images/video editing.jpg"
  //     },
  //     {
  //       serial: "06",
  //       icon: "assets/images/gd.png",
  //       title: "Graphic Design",
  //       description: "We seamlessly blend creativity with precision, transforming ideas into visually captivating masterpieces through the artistry of graphic design.",
  //       PopupImage: "assets/images/service-images/Graphic Design .jpg"
  //     },
  //     {
  //       serial: "07",
  //       icon: "assets/images/ms.png",
  //       title: "Marketing Strategy",
  //       description: "We strategically connect with our audience, blending data-driven insights and compelling narratives to elevate our brand impact.",
  //       PopupImage: "assets/images/service-images/Social Media Marketing .jpg"
  //     },  
  //     {
  //       serial: "08",
  //       icon: "assets/images/cw.png",
  //       title: "Content Writing",
  //       description: "We, as content creators, blend creativity and precision to elevate brands and engage audiences effectively.",
  //       PopupImage: "assets/images/content creation.jpg"
  //     },
  //     {
  //       serial: "09",
  //       icon: "assets/images/im.png",
  //       title: "Influencer Marketing",
  //       description: "We amplify brand stories through strategic influencer partnerships, creating authentic connections that captivate audiences worldwide.",
  //       PopupImage: "assets/images/service-images/Influencer Marketing.jpg"
  //     },
  //     {
  //       serial: "10",
  //       icon: "assets/images/ma.png",
  //       title: "Mobile Apps",
  //       description: "We elevate experiences through cutting-edge mobile apps, bridging innovation and convenience seamlessly.",
  //       PopupImage: "assets/images/service-images/Android & IOS App.jpg"
  //     },
  //     {
  //       serial: "11",
  //       icon: "assets/images/sma.png",
  //       title: "Social media Ads",
  //       description: "We captivate audiences with precision-targeted social media ads, creating visually stunning content that elevates your brand.",
  //       PopupImage: "assets/images/service-images/social media add.jpg"
  //     },
  //     {
  //       serial: "12",
  //       icon: "assets/images/ga.png",
  //       title: "Google Ads",
  //       description: "We elevate businesses to new heights through the power of Google Ads, utilizing advanced technology and data-driven strategies.",
  //       PopupImage: "assets/images/google ads.jpg"
  //     }
  //   ]
  // }

  projects = {
    title: "All Projects",
    projects: [
      {
        category: "col-one",
        title: "Chair Furniture",
        place: "Muscat, Sultanate of Oman",
        image: "assets/images/projects/portrait/pic1.jpg"
      },
      {
        category: "col-two",
        title: "Chair Furniture",
        place: "Muscat, Sultanate of Oman",
        image: "assets/images/projects/portrait/pic2.jpg"
      },
      {
        category: "col-three",
        title: "Chair Furniture",
        place: "Muscat, Sultanate of Oman",
        image: "assets/images/projects/portrait/pic3.jpg"
      },
      {
        category: "col-four",
        title: "Chair Furniture",
        place: "Muscat, Sultanate of Oman",
        image: "assets/images/projects/portrait/pic4.jpg"
      },
      {
        category: "col-three",
        title: "Chair Furniture",
        place: "Muscat, Sultanate of Oman",
        image: "assets/images/projects/portrait/pic5.jpg"
      },
      {
        category: "col-two",
        title: "Chair Furniture",
        place: "Muscat, Sultanate of Oman",
        image: "assets/images/projects/portrait/pic6.jpg"
      },
      {
        category: "col-one",
        title: "Chair Furniture",
        place: "Muscat, Sultanate of Oman",
        image: "assets/images/projects/portrait/pic7.jpg"
      }
    ]
  }

  // clients = {
  //   title: "Our Clients",
  //   title2: "Clients",
  //   clients: [
  //     "assets/images/client-logo/logo1.png",
  //     "assets/images/client-logo/logo2.png",
  //     "assets/images/client-logo/logo3.png",
  //     "assets/images/client-logo/logo4.png",
  //     "assets/images/client-logo/logo5.png",
  //     "assets/images/client-logo/logo6.png",
  //     "assets/images/client-logo/logo7.png",
  //     "assets/images/client-logo/logo8.png"
  //   ]
  // }

  team = {
    title: "Super Team",
    team: [
      {
        image: "assets/images/our-team5/1.jpg",
        name: "Johnny Jackman",
        role: "Architect"
      },
      {
        image: "assets/images/our-team5/2.jpg",
        name: "Daniel Rickman",
        role: "Architect"
      },
      {
        image: "assets/images/our-team5/3.jpg",
        name: "Mark Norwich",
        role: "Architect"
      },
      {
        image: "assets/images/our-team5/4.jpg",
        name: "Nich Jonas",
        role: "Architect"
      }
    ]
  }

  client = [
    "assets/images/client-logo/BN Logo.png",
    "assets/images/client-logo/ynside.webp",
    "assets/images/client-logo/refimac_.png",
    "assets/images/client-logo/SSC Logo.png",
    "assets/images/client-logo/GoldBell_foundation.jpg",
  ]
}
