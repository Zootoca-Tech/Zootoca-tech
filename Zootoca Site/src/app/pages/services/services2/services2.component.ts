import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services2',
  templateUrl: './services2.component.html',
  styleUrls: ['./services2.component.css']
})
export class Services2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  banner = {
    image: "https://aws-in-eventphotos.s3.ap-south-1.amazonaws.com/BannerImages/Services.jpg",
    title: "Our Services",
    description: "Empower your brand with our dynamic services, From captivating photography to innovative marketing strategies, we've got you covered.",
    page: "Services"
  }

  footerData = {
    backExists: "0",
    wallpaper: ""
  }

  services = {
    title: "All Services",
    title2: "Services",
    services: [
      {
        serial: "01",
        icon: "assets/images/service-images/Event.jpg",
        title: "Event Management",
        description: "we specialize in crafting unforgettable events tailored to your unique vision. Our comprehensive event management services encompass everything from initial concept development to flawless execution, ensuring that every detail is meticulously planned and executed to perfection. Whether you're planning a corporate conference, a grand gala, a wedding celebration, or a social gathering, we are here to bring your vision to life and create an experience that will leave a lasting impression",
        imageIn: "/assets/images/service-images/event_management_2.webp",
        subtitle:`Crafting Unforgettable Experiences`,
        subdescription:`we specialize in crafting unforgettable events tailored to your unique vision. Our comprehensive event management services encompass everything from initial concept development to flawless execution, ensuring that every detail is meticulously planned and executed to perfection. Whether you're planning a corporate conference, a grand gala, a wedding celebration, or a social gathering, we are here to bring your vision to life and create an experience that will leave a lasting impression.`,
        subimage:`/assets/images/service-images/Event_Management_1.jpeg`
      },
      {
        serial: "02",
        icon: "assets/images/service-images/s_e_o.jpg",
        title: "SEO",
        description: "We provide a range of architectural 3D modeling services to our customers to aid the Web Digital Media Group is a leading Android UI/UX App development company that delivers end-to-end Android App development services to open up new opportunities for business. Being a top company, we specialize to transform your unique ideas into real-time Android applications. We will help you unlock wonderful experience on different types of devices – foldable devices, tablets, smartphones, auto/cars, wearables/smartwatch, and television. No matter, whatever size and shape of your device is, you can have more engaging and fast experience. We, as the most trusted Android App development company, use latest tools to enable innovation. Our company is committed to unlocking the power of Android such as Android developer tools, security protocols, libraries, Android architecture components, and Android framework.",
        imageIn: "assets/images/service-images/seoCvr.jpg",
        subtitle:`Real-time Seo`,
        subdescription:`While understanding the market, we will analyze your website's structure, internal framework and build other primary elements that search engine algorithms are biased towards. Once we have gathered all this info, we will recommend work usage, improved alignment & relevance to target your specific keywords. And contextualize the target audience's dialect at the very most. The top digital marketing agency, we know the A to Z of Search Engine Optimization services.`,
        subimage:`/assets/images/service-images/SEO_container_1.jpeg`,
      },
      {

        serial: "03",
        icon: "assets/images/service-images/Website_Development.jpg",
        title: "Web Design",
        description: "In today's digital age, having a strong online presence is crucial for businesses and individuals alike. A well-designed website serves as a virtual storefront, attracting visitors, conveying information, and driving conversions. However, the process of website development can seem daunting to those unfamiliar with the technical aspects involved. In this guide, we'll break down the essential steps involved in creating a website, from conceptualization to launch.",
        imageIn: "/assets/images/service-images/Web_dev_2.jpeg",
        subtitle:`Design Your Website`,
        subdescription:`The design of your website plays a crucial role in attracting and retaining visitors. Start by creating a wireframe or mockup to visualize the layout and structure of your site. Pay attention to factors such as navigation, branding, typography, color scheme, and imagery. Aim for a clean and intuitive design that enhances user experience.
        Once you have a solid plan in place, it's time to bring your website to life. Depending on your chosen platform, you may use pre-designed templates or custom coding to build your site. Pay attention to responsiveness, ensuring that your website displays correctly across different devices and screen sizes. Customize your site's functionality with plugins, widgets, and integrations to enhance its performance and user experience.`,
        subimage:`/assets/images/service-images/Wb_development_1.jpeg`
      },
      {
        serial: "04",
        icon: "assets/images/service-images/SocialMedia_Marketing.jpg",
        title: "Social Media Marketing",
        description: "Social media has revolutionized the way businesses connect with their audience, offering a powerful platform for engagement, promotion, and brand building. Social media marketing (SMM) has become an indispensable tool for businesses of all sizes to reach and influence their target demographic. In this guide, we'll explore the fundamentals of social media marketing and strategies for leveraging these platforms effectively.",
        imageIn: "/assets/images/service-images/social-medi_market.png",
        subtitle:`Develop a Content Strategy & Engage Audience`,
        subdescription:`Content is at the heart of social media marketing. Develop a content strategy that aligns with your brand identity, goals, and audience preferences. Create a mix of content types, including images, videos, blog posts, infographics, and user-generated content. Consistency is key, so establish a posting schedule and maintain a steady flow of high-quality content
        Social media is a two-way conversation, and engagement is crucial for building relationships and fostering loyalty. Respond promptly to comments, messages, and mentions from your audience. Encourage conversation and interaction by asking questions, running polls, and hosting contests or giveaways. Show appreciation for your followers and make them feel valued.`,
        subimage:`/assets/images/service-images/Social_media_1.jpeg`,
      },
      {
        serial: "05",
        icon: "assets/images/service-images/Graphic_Design.jpg",
        title: "Graphic Design",
        description: `Graphic design is the art of visual communication, where creativity meets functionality to convey messages, ideas, and emotions through images, typography, colors, and layout. From logos and branding to advertising and web design, graphic design plays a pivotal role in shaping our visual landscape. In this guide, we'll delve into the world of graphic design, exploring its principles, techniques, and applications.
        Understanding these principles is essential for creating visually appealing and effective designs. Whether it's arranging elements on a page or choosing colors and fonts, adherence to these principles ensures harmony and clarity in design.`,
        imageIn: "/assets/images/service-images/Graphic_2.jpeg",
        subtitle:`Building Strong Brand Identity`,
        subdescription:`Graphic design plays a pivotal role in shaping brand identity and perception. A cohesive visual identity, including logos, color palettes, typography, and imagery, helps distinguish brands from competitors and fosters brand recognition and loyalty. Work closely with clients to understand their values, target audience, and market positioning, and translate these into visually compelling brand assets.
        `,
        subimage:`/assets/images/service-images/Graphic_design_1.jpeg`
      },
      {
        serial: "06",
        icon: "assets/images/service-images/Video_Editing.jpg",
        title: "Video Editing",
        description: `Video editing is the creative process of assembling and manipulating video footage to create a cohesive narrative or visual experience. From feature films and documentaries to social media content and advertisements, video editing plays a vital role in shaping the way we consume and interact with visual media. In this guide, we'll explore the art of video editing, from basic techniques to advanced concepts, and uncover the secrets behind crafting compelling videos
        Video editing is a dynamic and creative process that requires a combination of technical skill, artistic vision, and storytelling prowess. By mastering the basics of organization, storytelling, editing techniques, audio mixing, visual effects, and exporting, you can transform raw footage into compelling videos that captivate audiences and leave a lasting impression. Embrace experimentation, practice regularly, and never stop learning to refine your craft and push the boundaries of your creativity in the exciting world of video editing.`,
        imageIn: "/assets/images/service-images/vdoediting_2.jpeg",
        subtitle:`Transforming Footage into Stories`,
        subdescription:`At the heart of video editing is storytelling. Whether you're creating a short film, promotional video, or vlog, every video should have a clear narrative arc or message. Start by outlining the key points or scenes you want to include, then arrange your footage in a logical sequence that conveys your story effectively. Experiment with pacing, rhythm, and structure to engage your audience and evoke emotions.`,
        subimage:`/assets/images/service-images/Video_editing_1.jpeg`
      },

      {
        serial: "07",
        icon: "/assets/images/service-images/phptography and videography.jpg",
        title: "Photography & Videography",
        description: `Photography and videography are powerful mediums for storytelling, self-expression, and capturing the beauty of the world around us. From documenting life's special moments to creating visual masterpieces, photographers and videographers play a vital role in preserving memories and shaping our collective narrative. In this guide, we'll delve into the art of photography and videography, exploring techniques, equipment, and creative approaches to capturing stunning images and videos.`,
        imageIn: "/assets/images/service-images/vdography&photography.jpeg",
        subtitle:`The Art of Photography and Videography`,
        subdescription:`Photography and videography are powerful story telling mediums, capable of evoking emotions, conveying messages, and capturing moments in time. Whether you're shooting portraits, landscapes, street scenes, or documentaries, strive to tell a compelling story through your images and videos. Look for interesting subjects, moments, and details that communicate a narrative or evoke a sense of wonder and curiosity.`,
        subimage:`/assets/images/service-images/phot_vdo_1.jpeg`
      },
      {
        serial: "08",
        icon: "/assets/images/service-images/Mobile_apps.jpeg",
        title: "Mobile Apps",
        description: `Mobile apps have transformed the way businesses operate, offering new avenues for customer engagement, sales, and service delivery. Today, companies across industries use mobile apps to streamline processes, enhance customer experiences, and drive revenue growth.
        From e-commerce giants like Amazon and Alibaba to ride-sharing platforms like Uber and Lyft, mobile apps have reshaped entire industries, disrupting traditional business models and revolutionizing the way we interact with products and services.`,
        imageIn: "/assets/images/service-images/mobileapps_1.jpeg",
        subtitle:`The Way We Interact with Technology`,
        subdescription:`As technology continues to evolve, so too will mobile apps. Emerging trends like augmented reality (AR), virtual reality (VR), and the Internet of Things (IoT) are poised to revolutionize the app landscape, offering new possibilities for immersive experiences and interconnected ecosystems.

        Artificial intelligence (AI) and machine learning (ML) will play an increasingly prominent role in app development, powering personalized recommendations, predictive analytics, and intelligent automation.
        
        With each new innovation, mobile apps will continue to shape the way we live, work, and play, driving progress and unlocking new opportunities for individuals and businesses alike.`,
        subimage:`/assets/images/service-images/appssubimg.jpeg`
      },
      {
        serial: "09",
        icon: "assets/images/service-images/Influencer_Marketing.jpg",
        title: "Influencer Marketing",
        description: `Influencer marketing is a form of collaboration between brands and individuals who have a significant and engaged following on social media platforms. These influencers, often experts or enthusiasts in a particular niche, have built credibility and trust with their audience, making them valuable partners for brands seeking to reach and influence their target demographic.`,
        imageIn: "/assets/images/service-images/influ_mar_2.jpeg",
        subtitle:`  Building Authentic Connections in the Digital Age `,
        subdescription:`Successful influencer marketing relies on building authentic relationships between brands and influencers. Approach influencers with respect and transparency, clearly outlining your campaign objectives, expectations, and compensation. Foster open communication and collaboration throughout the partnership, allowing influencers creative freedom to authentically integrate your brand into their content in a way that resonates with their audience.
        Crafting Compelling Content`,
        subimage:`/assets/images/service-images/Influencer_Marketing_1.jpeg`
      },
      {
        serial: "10",
        icon: "assets/images/service-images/G_ads.jpg",
        title: "Google Ads",
        description: `Google Ads, formerly known as Google AdWords, is a powerful online advertising platform that enables businesses to reach potential customers through targeted ads displayed on Google's search engine results pages (SERPs), websites, and apps. With its vast reach, advanced targeting options, and measurable results, Google Ads offers businesses of all sizes the opportunity to increase visibility, drive traffic, and grow revenue. In this guide, we'll explore the fundamentals of Google Ads, including setup, optimization, and best practices for maximizing your advertising investment.
        Google. Ads can appear as text ads, display ads, video ads, or shopping ads, depending on the campaign type and targeting settings. With Google Ads, advertisers can target specific locations, demographics, interests, devices, and more to reach their desired audience.`,
        imageIn: "/assets/images/service-images/g_ads_2.jpeg",
        subtitle:`Creating Compelling Ad Copy`,
        subdescription:`Crafting compelling ad copy is crucial for capturing the attention of potential customers and driving clicks to your website. Write clear, concise, and relevant ad copy that highlights the unique selling points of your products or services and encourages users to take action. Experiment with different ad formats, headlines, descriptions, and call-to-action (CTA) buttons to optimize performance and maximize click-through rates (CTR).`,
        subimage:`/assets/images/service-images/Google_Ads.jpeg`
      },
      {
        serial: "11",
        icon: "assets/images/service-images/Content_Creation.jpg",
        title: "Content Creation",
        description: `In today's digital landscape, content creation has become a cornerstone of marketing strategy, serving as a means to engage, educate, and inspire audiences across various platforms. From blog posts and social media updates to videos and podcasts, creating high-quality content is essential for building brand awareness, driving traffic, and nurturing relationships with your audience. In this guide, we'll explore the art of content creation, including strategies, best practices, and tips for producing compelling and impactful content.
        . Research your audience demographics, interests, preferences, and pain points to tailor your content to their needs and interests. Develop buyer personas to represent different segments of your audience and use them as a guide when creating content that resonates with your target demographic.`,
        imageIn: "/assets/images/service-images/great-content_2.jpeg",
        subtitle:`A Guide to Effective Content Creation`,
        subdescription:`The key to successful content creation is to provide value to your audience by addressing their needs, answering their questions, and solving their problems. Focus on creating content that educates, entertains, or inspires your audience and positions your brand as a trusted authority in your niche. Conduct keyword research and address relevant topics and keywords that align with your audience's interests and search intent.`,
        subimage:`/assets/images/service-images/Content_creation_1.jpeg`
      },
      {
        serial: "11",
        icon: "assets/images/service-images/Marketing_Strategy.jpg",
        title: "Marketing Strategy",
        description: `A marketing strategy serves as a roadmap for businesses to achieve their goals, attract customers, and drive growth in a competitive marketplace. Whether you're a startup, small business, or multinational corporation, a well-defined marketing strategy provides clarity, direction, and focus for your marketing efforts. In this guide, we'll explore the essential components of a marketing strategy, from defining objectives to implementing tactics and measuring success.
        The first step in developing a marketing strategy is to clearly define your objectives and goals. What do you want to achieve with your marketing efforts? Whether it's increasing brand awareness, generating leads, driving sales, or building customer loyalty, establish specific, measurable, achievable, relevant, and time-bound (SMART) objectives that align with your overall business objectives.`,
        imageIn: "/assets/images/service-images/marketing_stat_2.jpeg",
        subtitle:`Blueprint for Business Success`,
        subdescription:`Selecting the right marketing channels is essential for reaching and engaging your target audience effectively. Consider factors such as audience demographics, behavior, preferences, and media consumption habits when choosing channels such as digital marketing, social media, email marketing, content marketing, search engine optimization (SEO), paid advertising, and offline tactics. Develop an integrated marketing mix that leverages multiple channels to amplify your message and maximize reach.`,
        subimage:`/assets/images/service-images/markrting_statergy_1.jpeg`
      }
    ]
  }

  about = {
    title: "A small efficient interior design team.",
    description: "<p>Inteshape is a team of highly talented, experienced, and award-winning architects and designers. Our company has been the leading provider of architecture services to clients throughout the USA since 1999. We pay attention to every demand...</p> <ul class=\"list-angle-right anchor-line\"> <li><a>We provide a architectural 3D modeling services.</a></li> <li><a>Our specialists are ready to consult you on any topic.</a></li> <li><a>We develop and implement better interior design.</a></li> <li><a>We provide high-quality interior services for clients.</a></li> </ul>",
    media: "https://player.vimeo.com/video/34741214?color=ffffff&title=0&byline=0&portrait=0",
    experience: "25 Years"
  }

  counter = [
    {
      count: "5",
      title: "Our Experience"
    },
    {
      count: "30",
      title: "Project Taken"
    },
    {
      count: "136",
      title: "Awards Won"
    },
    {
      count: "10K",
      title: "Twitter Followers"
    }
  ]

  testimonials = {
    title: "Testimonial",
    testimonials: [
      {
        image: "assets/images/testimonials/pic1.jpg",
        role: "Architect",
        name: "Rosalina D. William",
        quotes: "Great theme, just what we were looking for. Easy to install, easy to navigate. Well documented. Really enjoyed the support."
      },
      {
        image: "assets/images/testimonials/pic2.jpg",
        role: "Architect",
        name: "Mitchal Jhon",
        quotes: "Amazing fast and reliable customer support! The team of willing to go mile for customer service! Thanks!"
      },
      {
        image: "assets/images/testimonials/pic3.jpg",
        role: "Interior designer",
        name: "Barney Smith",
        quotes: "Great theme, just what we were looking for. Easy to install, easy to navigate. Well documented. Really enjoyed the support."
      },
      {
        image: "assets/images/testimonials/pic4.jpg",
        role: "Architect",
        name: "Rosalina D. William",
        quotes: "Amazing fast and reliable customer support! The team of willing to go mile for customer service! Thanks!"
      }
    ]
  }
}
