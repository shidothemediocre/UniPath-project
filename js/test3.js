//nav
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", function () {

    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

});


const universities={

    // uit:{
    //     name:"University of Information Technology",
    //     location:"Yangon",
    //     type:"Public University",
    //     year:"Established : 2012",
    //     description:"Specializes in Information Technology and Computer Science.",
    //     image:"uit1.jpg"
    // },

    // ytu:{
    //     name:"Yangon Technological University",
    //     location:"Yangon",
    //     type:"Public University",
    //     year:"Established : 1924",
    //     description:"One of Myanmar's leading engineering universities.",
    //     image:"ytu-1.jpg"
    // },

    // yu:{
    //     name:"University of Yangon",
    //     location:"Yangon",
    //     type:"Public University",
    //     year:"Established : 1920",
    //     description:"One of the oldest universities in Myanmar.",
    //     image:"yu.jpg"
    // }


    med1_yangon: {
        name_en: "University of Medicine (1), Yangon",
        name_mm: "ဆေးတက္ကသိုလ်(၁)၊ ရန်ကုန်",
        location: "Lanmadaw Township, Yangon Region",
        type: "Public University",
        established: "1927",
        description: "One of Myanmar's oldest and most prestigious medical universities, offering undergraduate and postgraduate medical education.",
        website: "https://um1ygn.edu.mm",
        image: "med1_yangon.jpg"
    },

    med_mandalay: {
        name_en: "University of Medicine, Mandalay",
        name_mm: "ဆေးတက္ကသိုလ်၊ မန္တလေး",
        location: "Chanayethazan Township, Mandalay Region",
        type: "Public University",
        established: "1958",
        description: "A leading medical university in Upper Myanmar, providing education, research, and healthcare training.",
        website: "https://ummdy.edu.mm",
        image: "med_mandalay.jpg"
    },

    med2_yangon: {
        name_en: "University of Medicine (2), Yangon",
        name_mm: "ဆေးတက္ကသိုလ်(၂)၊ ရန်ကုန်",
        location: "Mayangone Township, Yangon Region",
        type: "Public University",
        established: "1963",
        description: "A public medical university that trains future physicians and conducts medical research.",
        website: "https://um2ygn.edu.mm",
        image: "med2_yangon.jpg"
    },

    med_magway: {
        name_en: "University of Medicine, Magway",
        name_mm: "ဆေးတက္ကသိုလ်၊ မကွေး",
        location: "Magway Township, Magway Region",
        type: "Public University",
        established: "2001",
        description: "Provides medical education and clinical training for students in Central Myanmar.",
        website: "https://www.ummg.edu.mm/",
        image: "med_magway.jpg"
    },

    med_taunggyi: {
        name_en: "University of Medicine, Taunggyi",
        name_mm: "ဆေးတက္ကသိုလ်၊ တောင်ကြီး",
        location: "Taunggyi Township, Shan State",
        type: "Public University",
        established: "2015",
        description: "A medical university serving Shan State, offering undergraduate medical education and clinical practice.",
        website: "http://www.umtg.edu.mm",
        image: "med_taunggyi.jpg"
    },

    dental_yangon: {
        name_en: "University of Dental Medicine, Yangon",
        name_mm: "သွားဘက်ဆိုင်ရာဆေးတက္ကသိုလ်၊ ရန်ကုန်",
        location: "Thingangyun Township, Yangon Region",
        type: "Public University",
        established: "1964",
        description: "Myanmar's first dental university, specializing in dentistry education, research, and oral healthcare.",
        website: "https://en.wikipedia.org/wiki/University_of_Dental_Medicine,_Yangon",
        image: "dental_yangon.jpg"
    },

    dental_mandalay: {
        name_en: "University of Dental Medicine, Mandalay",
        name_mm: "သွားဘက်ဆိုင်ရာဆေးတက္ကသိုလ်၊ မန္တလေး",
        location: "Chanmyathazi Township, Mandalay Region",
        type: "Public University",
        established: "1998",
        description: "Provides professional dental education and training for students in Upper Myanmar.",
        website: "https://en.wikipedia.org/wiki/University_of_Dental_Medicine,_Mandalay",
        image: "dental_mandalay.jpg"
    },

    pharmacy_yangon: {
        name_en: "University of Pharmacy, Yangon",
        name_mm: "ဆေးဝါးတက္ကသိုလ်၊ ရန်ကုန်",
        location: "North Okkalapa Township, Yangon Region",
        type: "Public University",
        established: "1992",
        description: "Offers pharmacy education and pharmaceutical research, producing licensed pharmacists for Myanmar.",
        website: "https://en.wikipedia.org/wiki/University_of_Pharmacy,_Yangon",
        image: "pharmacy_yangon.jpg"
    },

    pharmacy_mandalay: {
        name_en: "University of Pharmacy, Mandalay",
        name_mm: "ဆေးဝါးတက္ကသိုလ်၊ မန္တလေး",
        location: "Chanmyathazi Township, Mandalay Region",
        type: "Public University",
        established: "2006",
        description: "Provides pharmaceutical education, research, and professional training in Upper Myanmar.",
        website: "https://en.wikipedia.org/wiki/University_of_Pharmacy,_Mandalay",
        image: "pharmacy_mandalay.jpg"
    },

    medtech_yangon: {
        name_en: "University of Medical Technology, Yangon",
        name_mm: "ဆေးဘက်ဆိုင်ရာနည်းပညာတက္ကသိုလ်၊ ရန်ကုန်",
        township: "North Okkalapa",
        city: "Yangon",
        elocation: "North Okkalapa Township, Yangon Region",
        type: "Public University",
        established: "1991",
        description: "Trains healthcare professionals in medical laboratory technology, radiography, physiotherapy, and related medical sciences.",
        website: "https://en.wikipedia.org/wiki/University_of_Medical_Technology,_Yangon",
        image: "medtech_yangon.jpg"
    },

    medtech_mandalay: {
        name_en: "University of Medical Technology, Mandalay",
        name_mm: "ဆေးဘက်ဆိုင်ရာနည်းပညာတက္ကသိုလ်၊ မန္တလေး",
        location: "Chanmyathazi Township, Mandalay Region",
        type: "Public University",
        established: "2005",
        description: "Provides education in medical laboratory technology, physiotherapy, radiography, and related allied health sciences.",
        website: "https://en.wikipedia.org/wiki/University_of_Medical_Technology,_Mandalay",
        image: "medtech_mandalay.jpg"
    },

    nursing_yangon: {
        name_en: "University of Nursing, Yangon",
        name_mm: "သူနာပြုတက္ကသိုလ်၊ ရန်ကုန်",
        location: "Kamayut Township, Yangon Region",
        type: "Public University",
        established: "1991",
        description: "Myanmar's leading nursing university, offering undergraduate and postgraduate nursing education.",
        website: "https://en.wikipedia.org/wiki/University_of_Nursing,_Mandalay",
        image: "nursing_yangon.jpg"
    },

    nursing_mandalay: {
        name_en: "University of Nursing, Mandalay",
        name_mm: "သူနာပြုတက္ကသိုလ်၊ မန္တလေး",
        region: "Chanmyathazi Township, Mandalay Region",
        type: "Public University",
        established: "1998",
        description: "Provides professional nursing education and clinical training for healthcare services in Upper Myanmar.",
        website: "https://en.wikipedia.org/wiki/University_of_Nursing,_Mandalay",
        image: "nursing_mandalay.jpg"
    },

    communityhealth_magway: {
        name_en: "University of Community Health, Magway",
        name_mm: "အခြေခံကျန်းမာရေးတက္ကသိုလ်၊ မကွေး",
        location: "Magway Township, Magway Region",
        type: "Public University",
        established: "2001",
        description: "Specializes in community health, public health, disease prevention, and primary healthcare education.",
        website: "https://en.wikipedia.org/wiki/University_of_Community_Health,_Magway",
        image: "communityhealth_magway.jpg"
    },

    traditionalmedicine_mandalay: {
        name_en: "University of Traditional Medicine, Mandalay",
        name_mm: "တိုင်းရင်းဆေးတက္ကသိုလ်၊ မန္တလေး",
        location: "Chanmyathazi Township, Mandalay Region",
        type: "Public University",
        established: "2001",
        description: "Myanmar's only university dedicated to traditional medicine, combining Myanmar traditional medical knowledge with modern medical sciences.",
        website: "https://en.wikipedia.org/wiki/University_of_Traditional_Medicine,_Mandalay",
        image: "traditionalmedicine_mandalay.jpg"
    },

    nspu: {
        name_en: "Naypyitaw State Polytechnic University",
        name_mm: "Naypyitaw State Polytechnic University",
        location: "Zabuthiri Township, Naypyitaw Union Territory",
        type: "Public University",
        established: "2024",
        description: "Offers engineering and technical education with a focus on practical skills and applied technology.",
        website: "https://www.google.com/search?q=https://www.facebook.com/nspu.edu.mm",
        image: "nspu.jpg"
    },

    ytu: {
        name_en: "Yangon Technological University",
        name_mm: "ရန်ကုန်နည်းပညာတက္ကသိုလ်",
        location: "Insein Township, Yangon Region",
        type: "Public University",
        established: "1924",
        description: "Myanmar's premier engineering university, offering undergraduate and postgraduate programs in engineering, architecture, and technology.",
        website: "https://ytu.edu.mm",
        image: "ytu.jpg"
    },

    mtu: {
        name_en: "Mandalay Technological University",
        name_mm: "မန္တလေးနည်းပညာတက္ကသိုလ်",
        location: "Patheingyi Township, Mandalay Region",
        type: "Public University",
        established: "1991",
        description: "One of Myanmar's leading technological universities, specializing in engineering and applied sciences.",
        website: "https://mtu.edu.mm",
        image: "mtu.jpg"
    },

    tu_ycc: {
        name_en: "Technological University (Yatanarpon Cyber City)",
        name_mm: "နည်းပညာတက္ကသိုလ် (ရတနာပုံဆိုက်ဘာစီးတီး)",
        location: "Pyin Oo Lwin Township, Mandalay Region",
        type: "Public University",
        established: "2010",
        description: "Provides engineering education within the Yatanarpon Cyber City, emphasizing modern technology and innovation.",
        website: "https://www.yctu.edu.mm",
        image: "tu_ycc.jpg"
    },

    maeu: {
        name_en: "Myanmar Aerospace Engineering University",
        name_mm: "မြန်မာနိုင်ငံလေကြောင်းနှင့်အာကာသပညာတက္ကသိုလ်",
        location: "Meiktila Township, Mandalay Region",
        type: "Public University",
        established: "2002",
        description: "Myanmar's only university specializing in aerospace engineering, aeronautical engineering, avionics, and aviation technology.",
        website: "https://maeu.edu.mm/",
        image: "maeu.jpg"
    },

    tu_mandalay: {
        name_en: "Technological University (Mandalay)",
        name_mm: "နည်းပညာတက္ကသိုလ် (မန္တလေး)",
        location: "Aungmyaythazan Township, Mandalay Region",
        type: "Public University",
        established: "1955",
        description: "Offers undergraduate engineering and technology programs with an emphasis on practical engineering education.",
        website: "https://www.tum.edu.mm",
        image: "tu_mandalay.jpg"
    },

    tu_monywa: {
        name_en: "Technological University (Monywa)",
        name_mm: "နည်းပညာတက္ကသိုလ် (မုံရွာ)",
        location: "Monywa Township, Sagaing Region",
        type: "Public University",
        established: "1982",
        description: "Provides engineering and technological education for students in Sagaing Region.",
        website: "https://www.tumonywa.edu.mm",
        image: "tu_monywa.jpg"
    },

    tu_kalay: {
        name_en: "Technological University (Kalay)",
        name_mm: "နည်းပညာတက္ကသိုလ် (ကလေး)",
        location: "Kalay Township, Sagaing Region",
        type: "Public University",
        established: "1999",
        description: "Offers engineering and technology degree programs serving northwestern Myanmar.",
        website: "https://en.wikipedia.org/wiki/Technological_University,_Kalay",
        image: "tu_kalay.jpg"
    },

    tu_sagaing: {
        name_en: "Technological University (Sagaing)",
        name_mm: "နည်းပညာတက္ကသိုလ် (စစ်ကိုင်း)",
        location: "Sagaing Township, Sagaing Region",
        type: "Public University",
        established: "1998",
        description: "Provides engineering education and applied technology programs.",
        website: "https://en.wikipedia.org/wiki/Technological_University,_Sagaing",
        image: "tu_sagaing.jpg"
    },

    tu_kyaukse: {
        name_en: "Technological University (Kyaukse)",
        name_mm: "နည်းပညာတက္ကသိုလ် (ကျောက်ဆည်)",
        location: "Kyaykse Township, Mandalay Region",
        type: "Public University",
        established: "1997",
        description: "Offers undergraduate engineering and technology programs with practical training.",
        website: "https://www.kyauksetu.edu.mm/",
        image: "tu_kyaukse.jpg"
    },

    tu_meiktila: {
        name_en: "Technological University (Meiktila)",
        name_mm: "နည်းပညာတက္ကသိုလ် (မိတ္ထီလာ)",
        location: "Meiktila Township, Mandalay Region",
        type: "Public University",
        established: "1999",
        description: "Provides engineering education and technical research opportunities.",
        website: "https://tumeiktila.edu.mm/",
        image: "tu_meiktila.jpg"
    },

    tu_yamethin: {
        name_en: "Technological University (Yamethin)",
        name_mm: "နည်းပညာတက္ကသိုလ် (ရမည်းသင်း)",
        location: "Yamethin Township, Mandalay Region",
        type: "Public University",
        established: "2004",
        description: "Offers engineering and technology programs to support regional industrial development.",
        website: "http://www.tuymt.edu.mm/",
        image: "tu_yamethin.jpg"
    },

    tu_magway: {
        name_en: "Technological University (Magway)",
        name_mm: "နည်းပညာတက္ကသိုလ် (မကွေး)",
        location: "Magway Township, Magway Region",
        type: "Public University",
        established: "1999",
        description: "Provides undergraduate engineering education and applied technological training.",
        website: "http://www.tumagway.edu.mm/",
        image: "tu_magway.jpg"
    },

    tu_pakokku: {
        name_en: "Technological University (Pakokku)",
        name_mm: "နည်းပညာတက္ကသိုလ် (ပခုက္ကူ)",
        location: "Pakokku Township, Magway Region",
        type: "Public University",
        established: "1999",
        description: "Offers engineering degree programs with emphasis on practical engineering skills.",
        website: "https://tupku.edu.mm/",
        image: "tu_pakokku.jpg"
    },

    tu_taunggyi: {
        name_en: "Technological University (Taunggyi)",
        name_mm: "နည်းပညာတက္ကသိုလ် (တောင်ကြီး)",
        location: "Taunggyi Township, Shan State",
        type: "Public University",
        established: "1992",
        description: "Provides engineering and technological education for students in Shan State.",
        website: "https://www.tutaunggyi.edu.mm//",
        image: "tu_taunggyi.jpg"
    },

    tu_loikaw: {
        name_en: "Technological University (Loikaw)",
        name_mm: "နည်းပညာတက္ကသိုလ် (လွိုင်ကော်)",
        location: "Loikaw, Kayah State",
        type: "Public Technological University",
        established: "1999",
        description: "Offers undergraduate engineering and technology programs under the Ministry of Science and Technology to prepare students for professional engineering careers.",
        website: "https://www.tuloikaw.edu.mm",
        image: "default.jpg"
    },

    tu_toungoo: {
        name_en: "Technological University (Taungoo)",
        name_mm: "နည်းပညာတက္ကသိုလ် (တောင်ငူ)",
        location: "Taungoo, Bago Region",
        type: "Public Technological University",
        established: "1992",
        description: "Offers undergraduate engineering and technology programs under the Ministry of Science and Technology to prepare students for professional engineering careers.",
        website: "https://www.tutoungoo.edu.mm//",
        image: "default.jpg"
    },

    tu_sittwe: {
        name_en: "Technological University (Sittwe)",
        name_mm: "နည်းပညာတက္ကသိုလ် (စစ်တွေ)",
        location: "Sittwe, Rakhine State",
        type: "Public Technological University",
        established: "1999",
        description: "Offers undergraduate engineering and technology programs under the Ministry of Science and Technology to prepare students for professional engineering careers.",
        website: "https://en.wikipedia.org/wiki/Technological_University,_Sittwe",
        image: "default.jpg"
    },

    pyay_tu: {
        name_en: "Pyay Technological University",
        name_mm: "ပြည်နည်းပညာတက္ကသိုလ်",
        location: "Pyay, Bago Region",
        type: "Public Technological University",
        established: "1999",
        description: "Offers undergraduate engineering and technology programs under the Ministry of Science and Technology to prepare students for professional engineering careers.",
        website: "https://www.ptu.edu.mm/",
        image: "default.jpg"
    },

    wytu: {
        name_en: "West Yangon Technological University",
        name_mm: "ရန်ကုန်အနောက်ပိုင်းနည်းပညာတက္ကသိုလ်",
        location: "Hlaing Tharyar Township, Yangon Region",
        type: "Public Technological University",
        established: "1998",
        description: "Provides engineering and technology education with emphasis on practical skills, innovation, and industrial development.",
        website: "https://www.wytu.edu.mm/",
        image: "default.jpg"
    },

    hmawbi_tu: {
        name_en: "Technological University (Hmawbi)",
        name_mm: "နည်းပညာတက္ကသိုလ် (မှော်ဘီ)",
        location: "Hmawbi Township, Yangon Region",
        type: "Public Technological University",
        established: "1999",
        description: "Offers undergraduate engineering and technology programs under the Ministry of Science and Technology to prepare students for professional engineering careers.",
        website: "https://www.hbtu.edu.mm/",
        image: "default.jpg"
    },

    thanlyin_tu: {
        name_en: "Technological University (Thanlyin)",
        name_mm: "နည်းပညာတက္ကသိုလ် (သန်လျင်)",
        location: "Thanlyin Township, Yangon Region",
        type: "Public Technological University",
        established: "1993",
        description: "Offers engineering and technology education with practical laboratory training and research opportunities.",
        website: "https://tuthanlyin.edu.mm/",
        image: "default.jpg"
    },

    pathein_tu: {
        name_en: "Technological University (Pathein)",
        name_mm: "နည်းပညာတက္ကသိုလ် (ပုသိမ်)",
        location: "Pathein, Ayeyarwady Region",
        type: "Public Technological University",
        established: "1999",
        description: "Offers undergraduate engineering and technology programs under the Ministry of Science and Technology to prepare students for professional engineering careers.",
        website: "http://www.tupathein.edu.mm/",
        image: "default.jpg"
    },

    hinthada_tu: {
        name_en: "Technological University (Hinthada)",
        name_mm: "နည်းပညာတက္ကသိုလ် (ဟင်္သာတ)",
        location: "Hinthada, Ayeyarwady Region",
        type: "Public Technological University",
        established: "1999",
        description: "Offers undergraduate engineering and technology programs under the Ministry of Science and Technology to prepare students for professional engineering careers.",
        website: "http://www.tuhinthada.edu.mm/",
        image: "default.jpg"
    },

    hpaan_tu: {
        name_en: "Technological University (Hpa-An)",
        name_mm: "နည်းပညာတက္ကသိုလ် (ဘားအံ)",
        location: "Hpa-An, Kayin State",
        type: "Public Technological University",
        established: "2003",
        description: "Provides engineering and technology education with practical training and industry-oriented learning.",
        website: "https://www.tuhpn.edu.mm//",
        image: "default.jpg"
    },

    mawlamyine_tu: {
        name_en: "Technological University (Mawlamyine)",
        name_mm: "နည်းပညာတက္ကသိုလ် (မော်လမြိုင်)",
        location: "Mawlamyine, Mon State",
        type: "Public Technological University",
        established: "1982",
        description: "Offers undergraduate engineering and technology programs under the Ministry of Science and Technology to prepare students for professional engineering careers.",
        website: "http://tumawlamyine.edu.mm/",
        image: "default.jpg"
    },

    shwebo_gtc: {
        name_en: "Government Technological College (Shwebo)",
        name_mm: "အစိုးရနည်းပညာကောလိပ် (ရွှေဘို)",
        location: "Shwebo, Sagaing Region",
        type: "Public Government Technological College",
        established: "1999",
        description: "Provides diploma and bachelor's degree pathways in engineering and technology with a focus on technical and vocational education.",
        website: "https://www.facebook.com/p/Government-Technological-College-ShweBo-100050412103430/",
        image: "default.jpg"
    },

    mandalay_gtc: {
        name_en: "Government Technological College (Mandalay)",
        name_mm: "အစိုးရနည်းပညာကောလိပ် (မန္တလေး)",
        location: "Chanmyathazi Township, Mandalay",
        type: "Public Government Technological College",
        established: "1955",
        description: "Provides diploma and bachelor's degree pathways in engineering and technology with practical technical training.",
        website: "http://www.gtcmandalay.edu.mm/",
        image: "default.jpg"
    },

    kyaukphyu_gtc: {
        name_en: "Government Technological College (Kyaukphyu)",
        name_mm: "အစိုးရနည်းပညာကောလိပ် (ကျောက်ဖြူ)",
        location: "Kyaukphyu, Rakhine State",
        type: "Public Government Technological College",
        established: "1999",
        description: "Provides technical education and engineering-related diploma programs to develop skilled professionals.",
        website: "GTC-Kyaukphyu | Kyaukpyu - Facebook ",
        image: "default.jpg"
    },

    south_dagon_gtc: {
        name_en: "Government Technological College (South Dagon)",
        name_mm: "အစိုးရနည်းပညာကောလိပ် (တောင်ဒဂုံ)",
        location: "South Dagon Township, Yangon Region",
        type: "Public Government Technological College",
        established: "1999",
        description: "Provides engineering and technical education through diploma and undergraduate programs with hands-on learning.",
        website: " GTC-South Dagon Official Facebook Page ",
        image: "default.jpg"
    },

    ucsy: {
        name_en: "University of Computer Studies, Yangon",
        name_mm: "ရန်ကုန်ကွန်ပျူတာတက္ကသိုလ်",
        location: "Hlaing Township, Yangon Region",
        type: "Public Computer University",
        established: "1971",
        description: "Specializes in Computer Science, Computer Technology, Software Engineering, Artificial Intelligence, and Information Systems.",
        website: "https://www.ucsy.edu.mm/",
        image: "default.jpg"
    },

    uit: {
        name_en: "University of Information Technology",
        name_mm: "သတင်းအချက်အလက်နည်းပညာတက္ကသိုလ်",
        location: "Hlaing Campus, Yangon Region",
        type: "Public Information Technology University",
        established: "2015",
        description: "Specializes in Information Technology, Computer Science, Artificial Intelligence, Cyber Security, Data Science, and software development.",
        website: "https://uit.edu.mm/",
        image: "default.jpg"
    },

    ucsm: {
        name_en: "University of Computer Studies, Mandalay",
        name_mm: "မန္တလေးကွန်ပျူတာတက္ကသိုလ်",
        location: "Patheingyi Township, Mandalay Region",
        type: "Public Computer University",
        established: "1997",
        description: "Provides education and research in Computer Science, Computer Technology, Software Engineering, and Information Technology.",
        website: "https://www.ucsm.edu.mm/",
        image: "default.jpg"
    },

    monywa_cu: {
        name_en: "Computer University (Monywa)",
        name_mm: "ကွန်ပျူတာတက္ကသိုလ် (မုံရွာ)",
        location: "Monywa, Sagaing Region",
        type: "Public Computer University",
        established: "2001",
        description: "Offers undergraduate programs in Computer Science and Computer Technology with emphasis on software development and information systems.",
        website: "https://www.ucsmonywa.edu.mm/",
        image: "default.jpg"
    },

    kalay_cu: {
        name_en: "Computer University (Kalay)",
        name_mm: "ကွန်ပျူတာတက္ကသိုလ် (ကလေး)",
        location: "Kalay, Sagaing Region",
        type: "Public Computer University",
        established: "2001",
        description: "Offers undergraduate programs in Computer Science and Computer Technology with emphasis on software development and information systems.",
        website: "http://lms.ucskalay.edu.mm/",
        image: "default.jpg"
    },

    mandalay_cu: {
        name_en: "Computer University (Mandalay)",
        name_mm: "ကွန်ပျူတာတက္ကသိုလ် (မန္တလေး)",
        location: "Chanmyathazi Township, Mandalay Region",
        type: "Public Computer University",
        established: "2001",
        description: "Offers undergraduate programs in computer science, information technology, and software engineering while supporting ICT development in Upper Myanmar.",
        website: "https://www.ucsm.edu.mm/",
        image: "default.jpg"
    },

    meiktila_cu: {
        name_en: "Computer University (Meiktila)",
        name_mm: "ကွန်ပျူတာတက္ကသိုလ် (မိတ္ထီလာ)",
        location: "Meiktila, Mandalay Region",
        type: "Public Computer University",
        established: "2001",
        description: "Provides degree programs in computer science and information technology with emphasis on practical computing skills.",
        website: "https://ucsmtla.edu.mm/",
        image: "default.jpg"
    },

    magway_cu: {
        name_en: "Computer University (Magway)",
        name_mm: "ကွန်ပျူတာတက္ကသိုလ် (မကွေး)",
        location: "Magway, Magway Region",
        type: "Public Computer University",
        established: "2001",
        description: "Offers education in computer science and information technology to develop skilled ICT professionals for the region.",
        website: "https://www.ucsmgy.edu.mm/",
        image: "default.jpg"
    },

    pakokku_cu: {
        name_en: "Computer University (Pakokku)",
        name_mm: "ကွန်ပျူတာတက္ကသိုလ် (ပခုက္ကူ)",
        location: "Pakokku, Magway Region",
        type: "Public Computer University",
        established: "2001",
        description: "Provides academic and practical training in computer science, software development, and information technology.",
        website: "http://www.ucspkku.edu.mm/",
        image: "default.jpg"
    },

    taunggyi_cu: {
        name_en: "Computer University (Taunggyi)",
        name_mm: "ကွန်ပျူတာတက္ကသိုလ် (တောင်ကြီး)",
        location: "Taunggyi, Shan State",
        type: "Public Computer University",
        established: "2001",
        description: "Offers computing and information technology programs to prepare students for careers in software and digital technologies.",
        website: "https://www.ucstgi.edu.mm/",
        image: "default.jpg"
    },

    loikaw_cu: {
        name_en: "Computer University (Loikaw)",
        name_mm: "ကွန်ပျူတာတက္ကသိုလ် (လွိုင်ကော်)",
        location: "Loikaw, Kayah State",
        type: "Public Computer University",
        established: "2001",
        description: "Provides undergraduate education in computer science and information technology while promoting digital literacy in Kayah State.",
        website: "http://www.ucsloikaw.edu.mm/",
        image: "default.jpg"
    },

    toungoo_cu: {
        name_en: "Computer University (Taungoo)",
        name_mm: "ကွန်ပျူတာတက္ကသိုလ် (တောင်ငူ)",
        location: "Taungoo, Bago Region",
        type: "Public Computer University",
        established: "2001",
        description: "Offers computer science and information technology degree programs with practical laboratory experience.",
        website: "https://ucstaungoo.edu.mm/",
        image: "default.jpg"
    },

    sittwe_cu: {
        name_en: "Computer University (Sittwe)",
        name_mm: "ကွန်ပျူတာတက္ကသိုလ် (စစ်တွေ)",
        location: "Sittwe, Rakhine State",
        type: "Public Computer University",
        established: "2001",
        description: "Provides ICT education and computer science programs to support technology development in Rakhine State.",
        website: "https://en.wikipedia.org/wiki/Computer_University,_Sittwe",
        image: "default.jpg"
    },

    pyay_cu: {
        name_en: "Computer University (Pyay)",
        name_mm: "ကွန်ပျူတာတက္ကသိုလ် (ပြည်)",
        location: "Pyay, Bago Region",
        type: "Public Computer University",
        established: "2001",
        description: "Offers undergraduate studies in computer science, information technology, and software engineering with practical training.",
        website: "https://www.cupyay.edu.mm",
        image: "default.jpg"
    },

    pathein_cu: {
        name_en: "Computer University (Pathein)",
        name_mm: "ကွန်ပျူတာတက္ကသိုလ် (ပုသိမ်)",
        location: "Pathein, Ayeyarwady Region",
        type: "Public Computer University",
        established: "2001",
        description: "Provides quality education in computer science and information technology while producing skilled ICT graduates for the Ayeyarwady Region.",
        website: "https://www.cupathein.edu.mm",
        image: "default.jpg"
    },

    hinthada_cu: {
        name_en: "Computer University (Hinthada)",
        name_mm: "ကွန်ပျူတာတက္ကသိုလ် (ဟင်္သာတ)",
        location: "Hinthada, Ayeyarwady Region",
        type: "Public Computer University",
        established: "2001",
        description: "Provides undergraduate education in computer science, information technology, and software engineering to support regional ICT development.",
        website: "https://www.cuhinthada.edu.mm",
        image: "default.jpg"
    },

    hpaan_cu: {
        name_en: "Computer University (Hpa-An)",
        name_mm: "ကွန်ပျူတာတက္ကသိုလ် (ဘားအံ)",
        location: "Hpa-An, Kayin State",
        type: "Public Computer University",
        established: "2003",
        description: "Offers degree programs in computer science and information technology with practical training in modern computing technologies.",
        website: "https://en.wikipedia.org/wiki/Computer_University,_Hpa-An",
        image: "default.jpg"
    },

    thaton_cu: {
        name_en: "Computer University (Thaton)",
        name_mm: "ကွန်ပျူတာတက္ကသိုလ် (သထုံ)",
        location: "Thaton, Mon State",
        type: "Public Computer University",
        established: "2001",
        description: "Provides quality education in computer science and information technology while producing skilled ICT professionals.",
        website: "https://en.wikipedia.org/wiki/Computer_University,_Thaton",
        image: "default.jpg"
    },

    myitkyina_pu: {
        name_en: "Polytechnic University (Myitkyina)",
        name_mm: "Polytechnic University (မြစ်ကြီးနား)",
        location: "Myitkyina, Kachin State",
        type: "Public Polytechnic University",
        established: "2024",
        description: "Offers engineering and applied technology programs with emphasis on practical skills and technical innovation.",
        website: "https://www.facebook.com/pumyk",
        image: "default.jpg"
    },

    bhamo_pu: {
        name_en: "Polytechnic University (Bhamo)",
        name_mm: "Polytechnic University (ဗန်းမော်)",
        location: "Bhamo, Kachin State",
        type: "Public Polytechnic University",
        established: "2024",
        description: "Provides education in engineering and applied sciences to prepare students for technical and industrial careers.",
        website: "https://www.facebook.com/pubhamo",
        image: "default.jpg"
    },

    lashio_pu: {
        name_en: "Polytechnic University (Lashio)",
        name_mm: "Polytechnic University (လားရှိုး)",
        location: "Lashio, Shan State",
        type: "Public Polytechnic University",
        established: "2024",
        description: "Offers engineering and technology programs with practical laboratory training to develop skilled technical professionals.",
        website: "https://www.facebook.com/pulashio",
        image: "default.jpg"
    },

    panglong_pu: {
        name_en: "Polytechnic University (Panglong)",
        name_mm: "Polytechnic University (ပင်လုံ)",
        location: "Panglong, Shan State",
        type: "Public Polytechnic University",
        established: "2024",
        description: "Provides undergraduate education in engineering and applied technology while supporting regional technical development.",
        website: "https://www.facebook.com/pupanglong",
        image: "default.jpg"
    },

    kengtung_pu: {
        name_en: "Polytechnic University (Kengtung)",
        name_mm: "Polytechnic University (ကျိုင်းတုံ)",
        location: "Kengtung, Shan State",
        type: "Public Polytechnic University",
        established: "2024",
        description: "Offers engineering and technology degree programs designed to produce competent technical graduates for the region.",
        website: "https://www.facebook.com/pukengtung",
        image: "default.jpg"
    },

    maubin_pu: {
        name_en: "Polytechnic University (Maubin)",
        name_mm: "Polytechnic University (မအူပင်)",
        location: "Maubin, Ayeyarwady Region",
        type: "Public Polytechnic University",
        established: "2024",
        description: "Provides education in engineering and applied technology with practical learning experiences for future engineers.",
        website: "https://www.facebook.com/pumaubin",
        image: "default.jpg"
    },

    dawei_pu: {
        name_en: "Polytechnic University (Dawei)",
        name_mm: "Polytechnic University (ထားဝယ်)",
        location: "Dawei, Tanintharyi Region",
        type: "Public Polytechnic University",
        established: "2024",
        description: "Offers engineering and technical education to prepare graduates for careers in industry, infrastructure, and technology.",
        website: "https://www.facebook.com/pudawei",
        image: "default.jpg"
    },

    myeik_pu: {
        name_en: "Polytechnic University (Myeik)",
        name_mm: "Polytechnic University (မြိတ်)",
        location: "Myeik, Tanintharyi Region",
        type: "Public Polytechnic University",
        established: "2024",
        description: "Provides engineering and applied technology programs with practical training to prepare students for technical careers.",
        website: "https://www.facebook.com/pumyeik",
        image: "default.jpg"
    },

    nsa: {
        name_en: "Naypyitaw State Academy",
        name_mm: "Naypyitaw State Academy",
        location: "Zeyathiri Township, Naypyitaw Union Territory",
        type: "Public Multidisciplinary University",
        established: "2022",
        description: "Offers multidisciplinary undergraduate and postgraduate programs in science, engineering, social sciences, and public administration.",
        website: "https://nsa.edu.mm/",
        image: "default.jpg"
    },

    yu: {
        name_en: "University of Yangon",
        name_mm: "ရန်ကုန်တက္ကသိုလ်",
        location: "Kamayut Township, Yangon Region",
        type: "Public University",
        established: "1878",
        description: "Myanmar's oldest and most prestigious university, offering a wide range of undergraduate and postgraduate programs in arts, sciences, and research.",
        website: "https://www.uy.edu.mm/",
        image: "default.jpg"
    },

    mu: {
        name_en: "Mandalay University",
        name_mm: "မန္တလေးတက္ကသိုလ်",
        location: "Aungmyaythazan Township, Mandalay Region",
        type: "Public University",
        established: "1925",
        description: "One of Myanmar's leading universities, providing education and research in arts, science, and humanities.",
        website: "https://www.mu.edu.mm",
        image: "default.jpg"
    },

    yueco_hlaing: {
        name_en: "Yangon University of Economics (Hlaing Campus)",
        name_mm: "ရန်ကုန်စီးပွားရေးတက္ကသိုလ် (လှိုင်နယ်မြေ)",
        location: "Hlaing Township, Yangon Region",
        type: "Public University of Economics",
        established: "1964",
        description: "Offers degree programs in economics, business administration, commerce, accounting, finance, and management.",
        website: "https://www.yueco.edu.mm/",
        image: "default.jpg"
    },

    yueco_ywathagyi: {
        name_en: "Yangon University of Economics (Ywathagyi Campus)",
        name_mm: "ရန်ကုန်စီးပွားရေးတက္ကသိုလ် (ရွာသာကြီးနယ်မြေ)",
        location: "Ywathagyi, East Dagon Township, Yangon Region",
        type: "Public University of Economics",
        established: "1993",
        description: "Provides undergraduate education in economics, commerce, accounting, finance, and business management.",
        website: "https://www.yueco.edu.mm/",
        image: "default.jpg"
    },

    mueco: {
        name_en: "Monywa University of Economics",
        name_mm: "မုံရွာစီးပွားရေးတက္ကသိုလ်",
        location: "Monywa, Sagaing Region",
        type: "Public University of Economics",
        established: "1993",
        description: "Offers programs in economics, commerce, accounting, finance, and business administration to produce qualified business professionals.",
        website: "https://www.mueco.edu.mm",
        image: "default.jpg"
    },

    meiktila_ueco: {
        name_en: "Meiktila University of Economics",
        name_mm: "မိတ္ထီလာစီးပွားရေးတက္ကသိုလ်",
        location: "Meiktila, Mandalay Region",
        type: "Public University of Economics",
        established: "2001",
        description: "Provides education in economics, accounting, commerce, finance, and management with emphasis on professional development.",
        website: "https://en.wikipedia.org/wiki/Meiktila_University_of_Economics",
        image: "default.jpg"
    },

    yuoe: {
        name_en: "Yangon University of Education",
        name_mm: "ရန်ကုန်ပညာရေးတက္ကသိုလ်",
        location: "Kamayut Township, Yangon Region",
        type: "Public University of Education",
        established: "1931",
        description: "Specializes in teacher education, educational research, curriculum development, and postgraduate education programs.",
        website: "https://www.yuoe.edu.mm/",
        image: "default.jpg"
    },

    suoe: {
        name_en: "Sagaing University of Education",
        name_mm: "စစ်ကိုင်းပညာရေးတက္ကသိုလ်",
        location: "Sagaing, Sagaing Region",
        type: "Public University of Education",
        established: "2001",
        description: "Provides teacher education, educational research, and professional training for future educators across Myanmar.",
        website: "https://en.wikipedia.org/wiki/Meiktila_University_of_Economics",
        image: "default.jpg"
    },

    yufl: {
        name_en: "Yangon University of Foreign Languages",
        name_mm: "ရန်ကုန်နိုင်ငံခြားဘာသာတက္ကသိုလ်",
        location: "Kamayut Township, Yangon Region",
        type: "Public University of Foreign Languages",
        established: "1964",
        description: "Specializes in foreign language education, linguistics, translation, interpretation, and international communication through undergraduate and postgraduate programs.",
        website: "https://www.yufl.edu.mm/",
        image: "default.jpg"
    },

    mufl: {
        name_en: "Mandalay University of Foreign Languages",
        name_mm: "မန္တလေးနိုင်ငံခြားဘာသာတက္ကသိုလ်",
        location: "Chanmyathazi Township, Mandalay Region",
        type: "Public University of Foreign Languages",
        established: "1997",
        description: "Offers degree programs in foreign languages, linguistics, translation, and international communication while promoting cultural exchange.",
        website: "https://www.mufl.edu.mm/",
        image: "default.jpg"
    },

    myitkyina_edc: {
        name_en: "Myitkyina Education Degree College",
        name_mm: "မြစ်ကြီးနားပညာရေးဒီဂရီကောလိပ်",
        location: "Myitkyina, Kachin State",
        type: "Public Education Degree College",
        established: "1965",
        description: "Provides teacher education and professional training to prepare qualified educators for basic education schools throughout Myanmar.",
        website: "https://www.moe.gov.mm/",
        image: "default.jpg"
    },

    loikaw_edc: {
        name_en: "Loikaw Education Degree College",
        name_mm: "လွိုင်ကော်ပညာရေးဒီဂရီကောလိပ်",
        location: "Loikaw, Kayah State",
        type: "Public Education Degree College",
        established: "2003",
        description: "Provides teacher education and professional training to prepare qualified educators for basic education schools throughout Myanmar.",
        website: "https://www.moe.gov.mm/",
        image: "default.jpg"
    },

    hpaan_edc: {
        name_en: "Hpa-An Education Degree College",
        name_mm: "ဘားအံပညာရေးဒီဂရီကောလိပ်",
        location: "Hpa-An, Kayin State",
        type: "Public Education Degree College",
        established: "1977",
        description: "Provides teacher education and professional training to prepare qualified educators for basic education schools throughout Myanmar.",
        website: "https://www.moe.gov.mm/",
        image: "default.jpg"
    },

    hakha_edc: {
        name_en: "Hakha Education Degree College",
        name_mm: "ဟားခါးပညာရေးဒီဂရီကောလိပ်",
        location: "Hakha, Chin State",
        type: "Public Education Degree College",
        established: "2018",
        description: "Provides teacher education and professional training to prepare qualified educators for basic education schools throughout Myanmar.",
        website: "https://www.moe.gov.mm/",
        image: "default.jpg"
    },

    sagaing_edc: {
        name_en: "Sagaing Education Degree College",
        name_mm: "စစ်ကိုင်းပညာရေးဒီဂရီကောလိပ်",
        location: "Sagaing, Sagaing Region",
        type: "Public Education Degree College",
        established: "1953",
        description: "Provides teacher education and professional training to prepare qualified educators for basic education schools throughout Myanmar.",
        website: "https://www.moe.gov.mm/",
        image: "default.jpg"
    },

    monywa_edc: {
        name_en: "Monywa Education Degree College",
        name_mm: "မုံရွာပညာရေးဒီဂရီကောလိပ်",
        location: "Monywa, Sagaing Region",
        type: "Public Education Degree College",
        established: "1977",
        description: "Provides teacher education and professional training to prepare qualified educators for basic education schools throughout Myanmar.",
        website: "https://www.moe.gov.mm/",
        image: "default.jpg"
    },

    katha_edc: {
        name_en: "Katha Education Degree College",
        name_mm: "ကသာပညာရေးဒီဂရီကောလိပ်",
        location: "Katha, Sagaing Region",
        type: "Public Education Degree College",
        established: "2020",
        description: "Provides teacher education and professional training to prepare qualified educators for basic education schools throughout Myanmar.",
        website: "https://www.moe.gov.mm/",
        image: "default.jpg"
    },

    dawei_edc: {
        name_en: "Dawei Education Degree College",
        name_mm: "ထားဝယ်ပညာရေးဒီဂရီကောလိပ်",
        location: "Dawei, Tanintharyi Region",
        type: "Public Education Degree College",
        established: "1955",
        description: "Provides teacher education and professional training to prepare qualified educators for basic education schools throughout Myanmar.",
        website: "https://www.moe.gov.mm/",
        image: "default.jpg"
    },

    toungoo_edc: {
        name_en: "Taungoo Education Degree College",
        name_mm: "တောင်ငူပညာရေးဒီဂရီကောလိပ်",
        location: "Taungoo, Bago Region",
        type: "Public Education Degree College",
        established: "1965",
        description: "Provides pre-service teacher education and professional training for future basic education teachers.",
        website: "https://www.moe.gov.mm/",
        image: "default.jpg"
    },

    pyay_edc: {
        name_en: "Pyay Education Degree College",
        name_mm: "ပြည်မြို့ပညာရေးဒီဂရီကောလိပ်",
        location: "Pyay, Bago Region",
        type: "Public Education Degree College",
        established: "1977",
        description: "Offers teacher education programs and educational training for future school teachers.",
        website: "https://www.moe.gov.mm/",
        image: "default.jpg"
    },

    magway_edc: {
        name_en: "Magway Education Degree College",
        name_mm: "မကွေးပညာရေးဒီဂရီကောလိပ်",
        location: "Magway, Magway Region",
        type: "Public Education Degree College",
        established: "1953",
        description: "Provides academic and professional teacher education for Myanmar's basic education sector.",
        website: "https://www.moe.gov.mm/",
        image: "default.jpg"
    },

    pakokku_edc: {
        name_en: "Pakokku Education Degree College",
        name_mm: "ပခုက္ကူပညာရေးဒီဂရီကောလိပ်",
        location: "Pakokku, Magway Region",
        type: "Public Education Degree College",
        established: "1977",
        description: "Trains prospective teachers through education degree programs and teaching practice.",
        website: "https://www.moe.gov.mm/",
        image: "default.jpg"
    },

    mandalay_edc: {
        name_en: "Mandalay Education Degree College",
        name_mm: "မန္တလေးပညာရေးဒီဂရီကောလိပ်",
        location: "Chanmyathazi Township, Mandalay Region",
        type: "Public Education Degree College",
        established: "1955",
        description: "Offers teacher preparation programs and educational studies for future educators.",
        website: "https://www.moe.gov.mm/",
        image: "default.jpg"
    },

    meiktila_edc: {
        name_en: "Meiktila Education Degree College",
        name_mm: "မိတ္ထီလာပညာရေးဒီဂရီကောလိပ်",
        location: "Meiktila, Mandalay Region",
        type: "Public Education Degree College",
        established: "1953",
        description: "Provides education degree programs focusing on teaching methodology and classroom practice.",
        website: "https://www.moe.gov.mm/",
        image: "default.jpg"
    },

    mawlamyine_edc: {
        name_en: "Mawlamyine Education Degree College",
        name_mm: "မော်လမြိုင်ပညာရေးဒီဂရီကောလိပ်",
        location: "Mawlamyine, Mon State",
        type: "Public Education Degree College",
        established: "1953",
        description: "Prepares qualified teachers through education degree programs and professional training.",
        website: "https://www.moe.gov.mm/",
        image: "default.jpg"
    },

    kyaukphyu_edc: {
        name_en: "Kyaukphyu Education Degree College",
        name_mm: "ကျောက်ဖြူပညာရေးဒီဂရီကောလိပ်",
        location: "Kyaukphyu, Rakhine State",
        type: "Public Education Degree College",
        established: "1953",
        description: "Provides teacher education and educational leadership training for future educators.",
        website: "https://www.moe.gov.mm/",
        image: "default.jpg"
    },

    yankin_edc: {
        name_en: "Yankin Education Degree College",
        name_mm: "ရန်ကင်းပညာရေးဒီဂရီကောလိပ်",
        location: "Yankin Township, Yangon Region",
        type: "Public Education Degree College",
        established: "1947",
        description: "Offers education degree programs and practical teaching experience for aspiring teachers.",
        website: "https://www.moe.gov.mm/",
        image: "default.jpg"
    },

    hlegu_edc: {
        name_en: "Hlegu Education Degree College",
        name_mm: "လှည်းကူးပညာရေးဒီဂရီကောလိပ်",
        location: "Hlegu Township, Yangon Region",
        type: "Public Education Degree College",
        established: "1968",
        description: "Provides teacher education programs designed to develop skilled and qualified educators.",
        website: "https://www.moe.gov.mm/",
        image: "default.jpg"
    },

    thingangyun_edc: {
        name_en: "Thingangyun Education Degree College",
        name_mm: "သင်္ဃန်းကျွန်းပညာရေးဒီဂရီကောလိပ်",
        location: "Thingangyun Township, Yangon Region",
        type: "Public Education Degree College",
        established: "1985",
        description: "Provides teacher education programs and practical training for future educators in Myanmar's basic education system.",
        website: "https://www.moe.gov.mm/",
        image: "default.jpg"
    },

    taunggyi_edc: {
        name_en: "Taunggyi Education Degree College",
        name_mm: "တောင်ကြီးပညာရေးဒီဂရီကောလိပ်",
        location: "Taunggyi, Shan State",
        type: "Public Education Degree College",
        established: "1965",
        description: "Offers education degree programs that prepare qualified teachers through academic study and teaching practice.",
        website: "https://www.moe.gov.mm/",
        image: "default.jpg"
    },

    lashio_edc: {
        name_en: "Lashio Education Degree College",
        name_mm: "လားရှိုးပညာရေးဒီဂရီကောလိပ်",
        location: "Lashio, Shan State",
        type: "Public Education Degree College",
        established: "2004",
        description: "Provides professional teacher education and pedagogical training for future school teachers.",
        website: "https://www.moe.gov.mm/",
        image: "default.jpg"
    },

    kengtung_edc: {
        name_en: "Kengtung Education Degree College",
        name_mm: "ကျိုင်းတုံပညာရေးဒီဂရီကောလိပ်",
        location: "Kengtung, Shan State",
        type: "Public Education Degree College",
        established: "1993",
        description: "Offers education degree programs to develop competent teachers for Myanmar's education sector.",
        website: "https://www.moe.gov.mm/",
        image: "default.jpg"
    },

    pathein_edc: {
        name_en: "Pathein Education Degree College",
        name_mm: "ပုသိမ်ပညာရေးဒီဂရီကောလိပ်",
        location: "Pathein, Ayeyarwady Region",
        type: "Public Education Degree College",
        established: "1953",
        description: "Provides teacher education focusing on educational theory, teaching methodology, and classroom practice.",
        website: "https://www.moe.gov.mm/",
        image: "default.jpg"
    },

    myaungmya_edc: {
        name_en: "Myaungmya Education Degree College",
        name_mm: "မြောင်းမြပညာရေးဒီဂရီကောလိပ်",
        location: "Myaungmya, Ayeyarwady Region",
        type: "Public Education Degree College",
        established: "1953",
        description: "Trains future teachers through education degree programs and practical teaching experience.",
        website: "https://www.moe.gov.mm/",
        image: "default.jpg"
    },

    bogale_edc: {
        name_en: "Bogale Education Degree College",
        name_mm: "ဘိုကလေးပညာရေးဒီဂရီကောလိပ်",
        location: "Bogale, Ayeyarwady Region",
        type: "Public Education Degree College",
        established: "1965",
        description: "Provides professional teacher training and educational studies for prospective educators.",
        website: "https://www.moe.gov.mm/",
        image: "default.jpg"
    },

    nmdc: {
        name_en: "National Management Degree College",
        name_mm: "အမျိုးသားစီမံခန့်ခွဲမှုပညာဒီဂရီကောလိပ်",
        location: "Naypyidaw Union Territory",
        type: "Public Degree College",
        established: "2004",
        description: "Offers degree programs in management, administration, leadership, and public sector management to develop skilled professionals.",
        website: "https://www.nmdc.edu.mm/",
        image: "default.jpg"
    },

    mandalar_u: {
        name_en: "Mandalar University (BTHM Program)",
        name_mm: "မန္တလာတက္ကသိုလ် (BTHM ဘွဲ့သင်တန်း)",
        location: "Mandalay Region",
        type: "Private University",
        established: "2012",
        description: "Offers Bachelor of Tourism and Hospitality Management (BTHM) and related programs for careers in tourism and the hospitality industry.",
        website: "https://www.google.com/search?q=https://en.wikipedia.org/wiki/Mandalar_Degree_College",
        image: "default.jpg"
    },

    yau: {
        name_en: "Yezin Agricultural University",
        name_mm: "ရေဆင်းစိုက်ပျိုးရေးတက္ကသိုလ်",
        location: "Yezin, Zabuthiri Township, Naypyidaw Union Territory",
        type: "Public Agricultural University",
        established: "1924",
        description: "Myanmar's leading agricultural university, offering undergraduate and postgraduate programs in agriculture, agronomy, horticulture, agricultural engineering, and related sciences.",
        website: "https://www.yau.edu.mm/",
        image: "default.jpg"
    },

    uvs: {
        name_en: "University of Veterinary Science, Yezin",
        name_mm: "မွေးမြူရေးဆိုင်ရာဆေးတက္ကသိုလ်၊ ရေဆင်း",
        location: "Yezin, Zabuthiri Township, Naypyidaw Union Territory",
        type: "Public Veterinary University",
        established: "1957",
        description: "Offers undergraduate and postgraduate programs in veterinary medicine, animal health, livestock production, and veterinary research.",
        website: "https://www.uvas.edu.mm",
        image: "default.jpg"
    },

    uaa_maubin: {
        name_en: "University of Agriculture and Animal Husbandry, Maubin",
        name_mm: "စိုက်ပျိုးရေးနှင့်မွေးမြူရေးတက္ကသိုလ်၊ မအူပင်",
        location: "Maubin, Ayeyarwady Region",
        type: "Public Agricultural University",
        established: "2024",
        description: "Provides education in agriculture, animal husbandry, livestock production, and related agricultural sciences.",
        website: "https://www.moali.gov.mm",
        image: "default.jpg"
    },

    ufes: {
        name_en: "University of Forestry and Environmental Science, Yezin",
        name_mm: "သစ်တောနှင့်ပတ်ဝန်းကျင်ဆိုင်ရာတက္ကသိုလ်၊ ရေဆင်း",
        location: "Yezin, Zabuthiri Township, Naypyidaw Union Territory",
        type: "Public Forestry University",
        established: "1992",
        description: "Specializes in forestry, environmental conservation, natural resource management, and sustainable development.",
        website: "https://www.ufe.edu.mm",
        image: "default.jpg"
    },

    miit: {
        name_en: "Myanmar Institute of Information Technology",
        name_mm: "မြန်မာသတင်းအချက်အလက်နည်းပညာတက္ကသိုလ် (MIIT)",
        location: "Mandalay, Mandalay Region",
        type: "Public Information Technology University",
        established: "2015",
        description: "Offers internationally oriented degree programs in computer science, information technology, artificial intelligence, and software engineering.",
        website: "https://www.miit.edu.mm/",
        image: "default.jpg"
    },

    ucm: {
        name_en: "Universities of Co-operative and Management",
        name_mm: "သမဝါယမနှင့်စီမံခန့်ခွဲမှုပညာတက္ကသိုလ်များ",
        location: "Myanmar",
        type: "Public Specialized Universities",
        established: "1970/1994",
        description: "Provide higher education in cooperative studies, business administration, economics, accounting, finance, and management.",
        website: "https://ucmsthanlyin.edu.mm",
        image: "default.jpg"
    },

    cooperative_colleges: {
        name_en: "Co-operative Colleges",
        name_mm: "သမဝါယမကောလိပ်များ",
        location: "Myanmar",
        type: "Public Colleges",
        established: "1955",
        description: "Offer diploma and undergraduate programs in cooperative management, business administration, accounting, and related disciplines.",
        website: "https://www.moac.gov.mm",
        image: "default.jpg"
    },

    lacquerware_college: {
        name_en: "Lacquerware Technology College, Bagan",
        name_mm: "ယွန်းပညာကောလိပ်၊ ပုဂံမြို့",
        location: "Bagan, Nyaung-U Township, Mandalay Region",
        type: "Public Arts and Vocational College",
        established: "1977",
        description: "Specializes in traditional Myanmar lacquerware craftsmanship, design, preservation, and applied arts.",
        website: "https://www.google.com/search?q=https://en.wikipedia.org/wiki/Yoon_Lacquered_Ware_College",
        image: "default.jpg"
    },

    nuca: {
        name_en: "National Universities of Arts and Culture",
        name_mm: "အမျိုးသားယဉ်ကျေးမှုနှင့် အနုပညာတက္ကသိုလ်များ",
        location: "Yangon and Mandalay",
        type: "Public Arts Universities",
        established: "1993",
        description: "Offer degree programs in music, dance, drama, fine arts, traditional culture, and performing arts.",
        website: "https://en.wikipedia.org/wiki/National_University_of_Arts_and_Culture,_Yangon",
        image: "default.jpg"
    },

    mmu: {
        name_en: "Myanmar Maritime University",
        name_mm: "မြန်မာနိုင်ငံရေကြောင်းပညာတက္ကသိုလ်",
        location: "Thanlyin Township, Yangon Region",
        type: "Public Maritime University",
        established: "2002",
        description: "Provides education in marine engineering, naval architecture, river and ocean engineering, port management, and nautical science.",
        website: "https://www.mmu.edu.mm/",
        image: "default.jpg"
    },

    udnr: {
        name_en: "University for the Development of the National Races (Sagaing)",
        name_mm: "ပြည်ထောင်စုတိုင်းရင်းသားလူမျိုးများဖွံ့ဖြိုးရေးတက္ကသိုလ်(စစ်ကိုင်း)",
        location: "Sagaing Region",
        type: "Public Specialized University",
        established: "1964",
        description: "Provides higher education and leadership development opportunities for students from Myanmar's national races while promoting national unity and regional development.",
        website: "https://www.udbd.edu.mm",
        image: "default.jpg"
    },

    nrydc: {
        name_en: "Union National Races Youth Capacity Development Degree Colleges (Yangon & Sagaing)",
        name_mm: "ပြည်ထောင်စုတိုင်းရင်းသားလူငယ်များစွမ်းရည်ဖွံ့ဖြိုးရေးဒီဂရီကောလိပ် (ရန်ကုန်၊ စစ်ကိုင်း)",
        location: "Yangon Region and Sagaing Region",
        type: "Public Degree Colleges",
        established: "2000/2002",
        description: "Provide higher education, leadership development, vocational skills, and capacity-building programs for young people from Myanmar's national races while promoting national unity and socio-economic development.",
        website: "https://www.moba.gov.mm/",
        image: "default.jpg"
    },
};



function compareUniversities() {

    let first = document.getElementById("uni1").value;
    let second = document.getElementById("uni2").value;

    let university1 = universities[first];
    let university2 = universities[second];

    // University 1
    if (university1) {

        document.getElementById("img1").src = university1.image;

        document.getElementById("name1").innerHTML =
        `
        ${university1.name_en}
        <br>
        <span class="mm-name">${university1.name_mm}</span>
        `;

        document.getElementById("location1").textContent =
            "📍 " + university1.location;

        document.getElementById("type1").textContent =
            "🏛 " + university1.type;

        document.getElementById("established1").textContent =
            "📅 " + university1.established;

        document.getElementById("description1").textContent =
            university1.description;

        document.getElementById("website1").href = university1.website;
        document.getElementById("website1").textContent = university1.website;
    }

    // University 2
    if (university2) {

        document.getElementById("img2").src = university2.image;

        document.getElementById("name2").innerHTML =
        `
        ${university2.name_en}
        <br>
        <span class="mm-name">${university2.name_mm}</span>
        `;

        document.getElementById("location2").textContent =
            "📍 " + university2.location;

        document.getElementById("type2").textContent =
            "🏛 " + university2.type;

        document.getElementById("established2").textContent =
            "📅 " + university2.established;

        document.getElementById("description2").textContent =
            university2.description;

        document.getElementById("website2").href = university2.website;
        document.getElementById("website2").textContent = university2.website;
    }
}