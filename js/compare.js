// =====================================================
// UNIPATH UNIVERSITY COMPARISON
// =====================================================
 
 
// =====================================================
// UNIVERSITY DATABASE
// =====================================================
 
const universities = {
 
    // =================================================
    // MEDICAL
    // =================================================
 
    med1_yangon: {
        name: "University of Medicine (1), Yangon",
        nameMM: "ရန်ကုန်ဆေးတက္ကသိုလ် (၁)",
        category: "Medical",
        location: "Yangon",
        type: "Medical University",
        established: "1927",
        entryMarks: "6-subject total: 450+ marks; must pass STEAMS-1 (Chemistry, Physics, Biology); good English proficiency and good health.",
        minimumRequirement: "6-subject total: 450+ marks; must pass STEAMS-1 (Chemistry, Physics, Biology); good English proficiency and good health.",
        entryTrack: "STEAMS-1",
        subjects: ["Chemistry", "Physics", "Biology"],
        programs: ["Medicine (MBBS)"],
        degree: "MBBS",
        duration: "6 years",
        seats: "Available according to annual admission intake",
        gender: "See current official admission rules",
        interview: "See current official admission rules",
        service: "See current official admission rules",
        description: "One of Myanmar's major medical universities, offering undergraduate and postgraduate medical education.",
        website: "https://um1ygn.edu.mm"
    },
 
    med2_yangon: {
        name: "University of Medicine (2), Yangon",
        nameMM: "ရန်ကုန်ဆေးတက္ကသိုလ် (၂)",
        category: "Medical",
        location: "Yangon",
        type: "Medical University",
        established: "1963",
        entryMarks: "6-subject total: 450+ marks; must pass STEAMS-1 (Chemistry, Physics, Biology); good English proficiency and good health.",
        minimumRequirement: "6-subject total: 450+ marks; must pass STEAMS-1 (Chemistry, Physics, Biology); good English proficiency and good health.",
        entryTrack: "STEAMS-1",
        subjects: ["Chemistry", "Physics", "Biology"],
        programs: ["Medicine (MBBS)"],
        degree: "MBBS",
        duration: "6 years",
        seats: "Available according to annual admission intake",
        gender: "See current official admission rules",
        interview: "See current official admission rules",
        service: "See current official admission rules",
        description: "A public medical university in Yangon providing undergraduate medical education and clinical training.",
        website: "https://um2ygn.edu.mm"
    },
 
    med_mandalay: {
        name: "University of Medicine, Mandalay",
        nameMM: "မန္တလေးဆေးတက္ကသိုလ်",
        category: "Medical",
        location: "Mandalay",
        type: "Medical University",
        established: "1958",
        entryMarks: "6-subject total: 450+ marks; must pass STEAMS-1 (Chemistry, Physics, Biology); good English proficiency and good health.",
        minimumRequirement: "6-subject total: 450+ marks; must pass STEAMS-1 (Chemistry, Physics, Biology); good English proficiency and good health.",
        entryTrack: "STEAMS-1",
        subjects: ["Chemistry", "Physics", "Biology"],
        programs: ["Medicine (MBBS)"],
        degree: "MBBS",
        duration: "6 years",
        seats: "Available according to annual admission intake",
        gender: "See current official admission rules",
        interview: "See current official admission rules",
        service: "See current official admission rules",
        description: "A leading medical university in Upper Myanmar providing medical education, research and clinical training.",
        website: "https://ummdy.edu.mm"
    },
 
    med_magway: {
        name: "University of Medicine, Magway",
        nameMM: "မကွေးဆေးတက္ကသိုလ်",
        category: "Medical",
        location: "Magway",
        type: "Medical University",
        established: "2001",
        entryMarks: "6-subject total: 450+ marks; must pass STEAMS-1 (Chemistry, Physics, Biology); good English proficiency and good health.",
        minimumRequirement: "6-subject total: 450+ marks; must pass STEAMS-1 (Chemistry, Physics, Biology); good English proficiency and good health.",
        entryTrack: "STEAMS-1",
        subjects: ["Chemistry", "Physics", "Biology"],
        programs: ["Medicine (MBBS)"],
        degree: "MBBS",
        duration: "6 years",
        seats: "Available according to annual admission intake",
        gender: "See current official admission rules",
        interview: "See current official admission rules",
        service: "See current official admission rules",
        description: "Provides medical education and clinical training for students in Central Myanmar.",
        website: "https://www.ummg.edu.mm/"
    },
 
    med_taunggyi: {
        name: "University of Medicine, Taunggyi",
        nameMM: "တောင်ကြီးဆေးတက္ကသိုလ်",
        category: "Medical",
        location: "Taunggyi",
        type: "Medical University",
        established: "2015",
        entryMarks: "6-subject total: 450+ marks; must pass STEAMS-1 (Chemistry, Physics, Biology); good English proficiency and good health.",
        minimumRequirement: "6-subject total: 450+ marks; must pass STEAMS-1 (Chemistry, Physics, Biology); good English proficiency and good health.",
        entryTrack: "STEAMS-1",
        subjects: ["Chemistry", "Physics", "Biology"],
        programs: ["Medicine (MBBS)"],
        degree: "MBBS",
        duration: "6 years",
        seats: "Available according to annual admission intake",
        gender: "See current official admission rules",
        interview: "See current official admission rules",
        service: "See current official admission rules",
        description: "A medical university serving Shan State and surrounding areas.",
        website: "http://www.umtg.edu.mm"
    },
 
 
    // =================================================
    // DENTAL
    // =================================================
 
    dental_yangon: {
        name: "University of Dental Medicine, Yangon",
        nameMM: "ရန်ကုန်သွားဘက်ဆိုင်ရာဆေးတက္ကသိုလ်",
        category: "Dental",
        location: "Yangon",
        type: "Dental University",
        established: "1964",
        entryMarks: "6-subject total: 450+ marks; must pass STEAMS-1 (Chemistry, Physics, Biology); good English proficiency and good health.",
        minimumRequirement: "6-subject total: 450+ marks; must pass STEAMS-1 (Chemistry, Physics, Biology); good English proficiency and good health.",
        entryTrack: "STEAMS-1",
        subjects: ["Chemistry", "Physics", "Biology"],
        programs: ["Dental Medicine (BDS)"],
        degree: "BDS",
        duration: "5 years",
        seats: "Available according to annual admission intake",
        gender: "See current official admission rules",
        interview: "See current official admission rules",
        service: "See current official admission rules",
        description: "Myanmar's first dental university, specializing in dentistry education, research and oral healthcare.",
        website: null
    },
 
    dental_mandalay: {
        name: "University of Dental Medicine, Mandalay",
        nameMM: "မန္တလေးသွားဘက်ဆိုင်ရာဆေးတက္ကသိုလ်",
        category: "Dental",
        location: "Mandalay",
        type: "Dental University",
        established: "1998",
        entryMarks: "6-subject total: 450+ marks; must pass STEAMS-1 (Chemistry, Physics, Biology); good English proficiency and good health.",
        minimumRequirement: "6-subject total: 450+ marks; must pass STEAMS-1 (Chemistry, Physics, Biology); good English proficiency and good health.",
        entryTrack: "STEAMS-1",
        subjects: ["Chemistry", "Physics", "Biology"],
        programs: ["Dental Medicine (BDS)"],
        degree: "BDS",
        duration: "5 years",
        seats: "Available according to annual admission intake",
        gender: "See current official admission rules",
        interview: "See current official admission rules",
        service: "See current official admission rules",
        description: "Provides professional dental education and clinical training in Upper Myanmar.",
        website: null
    },
 
 
    // =================================================
    // PHARMACY
    // =================================================
 
    pharmacy_yangon: {
        name: "University of Pharmacy, Yangon",
        category: "Pharmacy",
        location: "Yangon",
        type: "Pharmacy University",
        established: "1992",
        entryMarks: "Must pass STEAMS-1 (Chemistry, Physics, Biology); good English proficiency and good health. No fixed total-mark minimum is stated in the guide.",
        minimumRequirement: "Must pass STEAMS-1 (Chemistry, Physics, Biology); good English proficiency and good health. No fixed total-mark minimum is stated in the guide.",
        entryTrack: "Health Science",
        subjects: ["Chemistry", "Physics", "Biology"],
        programs: ["Pharmacy (B.Pharm)"],
        degree: "B.Pharm",
        duration: "4 years",
        seats: "According to annual admission intake",
        gender: "See current official admission rules",
        interview: "See current official admission rules",
        service: "See current official admission rules",
        description: "Offers pharmacy education and pharmaceutical research and training.",
        website: null
    },
 
    pharmacy_mandalay: {
        name: "University of Pharmacy, Mandalay",
        category: "Pharmacy",
        location: "Mandalay",
        type: "Pharmacy University",
        established: "2006",
        entryMarks: "Must pass STEAMS-1 (Chemistry, Physics, Biology); good English proficiency and good health. No fixed total-mark minimum is stated in the guide.",
        minimumRequirement: "Must pass STEAMS-1 (Chemistry, Physics, Biology); good English proficiency and good health. No fixed total-mark minimum is stated in the guide.",
        entryTrack: "Health Science",
        subjects: ["Chemistry", "Physics", "Biology"],
        programs: ["Pharmacy (B.Pharm)"],
        degree: "B.Pharm",
        duration: "4 years",
        seats: "According to annual admission intake",
        gender: "See current official admission rules",
        interview: "See current official admission rules",
        service: "See current official admission rules",
        description: "Provides pharmaceutical education, research and professional training in Upper Myanmar.",
        website: null
    },
 
 
    // =================================================
    // MEDICAL TECHNOLOGY
    // =================================================
 
    medtech_yangon: {
        name: "University of Medical Technology, Yangon",
        category: "Medical Technology",
        location: "Yangon",
        type: "Medical Technology University",
        established: "1991",
        entryMarks: "Must pass STEAMS-1 (Chemistry, Physics, Biology); good English proficiency and good health. No fixed total-mark minimum is stated in the guide.",
        minimumRequirement: "Must pass STEAMS-1 (Chemistry, Physics, Biology); good English proficiency and good health. No fixed total-mark minimum is stated in the guide.",
        entryTrack: "Health Science",
        subjects: ["Chemistry", "Physics", "Biology"],
        programs: [
            "Medical Laboratory Technology",
            "Radiography",
            "Physiotherapy"
        ],
        degree: "B.Med.Tech",
        duration: "4 years",
        seats: "According to annual admission intake",
        gender: "See current official admission rules",
        interview: "See current official admission rules",
        service: "See current official admission rules",
        description: "Trains healthcare professionals in medical laboratory technology, radiography, physiotherapy and related medical sciences.",
        website: null
    },
 
    medtech_mandalay: {
        name: "University of Medical Technology, Mandalay",
        category: "Medical Technology",
        location: "Mandalay",
        type: "Medical Technology University",
        established: "2005",
        entryMarks: "Must pass STEAMS-1 (Chemistry, Physics, Biology); good English proficiency and good health. No fixed total-mark minimum is stated in the guide.",
        minimumRequirement: "Must pass STEAMS-1 (Chemistry, Physics, Biology); good English proficiency and good health. No fixed total-mark minimum is stated in the guide.",
        entryTrack: "Health Science",
        subjects: ["Chemistry", "Physics", "Biology"],
        programs: [
            "Medical Laboratory Technology",
            "Radiography",
            "Physiotherapy"
        ],
        degree: "B.Med.Tech",
        duration: "4 years",
        seats: "According to annual admission intake",
        gender: "See current official admission rules",
        interview: "See current official admission rules",
        service: "See current official admission rules",
        description: "Provides education in medical laboratory technology, physiotherapy, radiography and allied health sciences.",
        website: null
    },
 
 
    // =================================================
    // NURSING
    // =================================================
 
    nursing_yangon: {
        name: "University of Nursing, Yangon",
        category: "Nursing",
        location: "Yangon",
        type: "Nursing University",
        established: "1991",
        entryMarks: "Must pass STEAMS-1 (Chemistry, Physics, Biology); good English proficiency and good health. No fixed total-mark minimum is stated in the guide.",
        minimumRequirement: "Must pass STEAMS-1 (Chemistry, Physics, Biology); good English proficiency and good health. No fixed total-mark minimum is stated in the guide.",
        entryTrack: "Health Science",
        subjects: ["Chemistry", "Physics", "Biology"],
        programs: ["Nursing"],
        degree: "B.N.Sc",
        duration: "4 years",
        seats: "According to annual admission intake",
        gender: "See current official admission rules",
        interview: "See current official admission rules",
        service: "See current official admission rules",
        description: "Provides undergraduate and postgraduate nursing education and professional training.",
        website: null
    },
 
    nursing_mandalay: {
        name: "University of Nursing, Mandalay",
        category: "Nursing",
        location: "Mandalay",
        type: "Nursing University",
        established: "1998",
        entryMarks: "Must pass STEAMS-1 (Chemistry, Physics, Biology); good English proficiency and good health. No fixed total-mark minimum is stated in the guide.",
        minimumRequirement: "Must pass STEAMS-1 (Chemistry, Physics, Biology); good English proficiency and good health. No fixed total-mark minimum is stated in the guide.",
        entryTrack: "Health Science",
        subjects: ["Chemistry", "Physics", "Biology"],
        programs: ["Nursing"],
        degree: "B.N.Sc",
        duration: "4 years",
        seats: "According to annual admission intake",
        gender: "See current official admission rules",
        interview: "See current official admission rules",
        service: "See current official admission rules",
        description: "Provides professional nursing education and clinical training.",
        website: null
    },
 
 
    // =================================================
    // TRADITIONAL MEDICINE
    // =================================================
 
    traditionalmedicine_mandalay: {
        name: "University of Traditional Medicine, Mandalay",
        category: "Traditional Medicine",
        location: "Mandalay",
        type: "Traditional Medicine University",
        established: "2001",
        entryMarks: "Must pass STEAMS-1 (Chemistry, Physics, Biology) and meet the health requirements. No fixed total-mark minimum is stated in the guide.",
        minimumRequirement: "Must pass STEAMS-1 (Chemistry, Physics, Biology) and meet the health requirements. No fixed total-mark minimum is stated in the guide.",
        entryTrack: "Health Science",
        subjects: ["Chemistry", "Physics", "Biology"],
        programs: ["Traditional Medicine"],
        degree: "B.Med.Tech / Traditional Medicine",
        duration: "5 years",
        seats: "According to annual admission intake",
        gender: "See current official admission rules",
        interview: "See current official admission rules",
        service: "See current official admission rules",
        description: "Myanmar's university dedicated to traditional medicine, combining traditional medical knowledge with modern medical sciences.",
        website: null
    },
 
 
    // =================================================
    // TECHNOLOGY
    // =================================================
 
    ytu: {
        name: "Yangon Technological University",
        category: "Technology",
        location: "Yangon",
        type: "Technological University",
        established: "1924",
        entryMarks: "No fixed minimum mark is stated; applicants are ranked by the combined marks in Physics, Chemistry, Mathematics and English according to available seats.",
        minimumRequirement: "No fixed minimum mark is stated; applicants are ranked by the combined marks in Physics, Chemistry, Mathematics and English according to available seats.",
        entryTrack: "Engineering",
        subjects: ["Mathematics", "Physics", "Chemistry"],
        programs: [
            "Civil Engineering",
            "Mechanical Engineering",
            "Electrical Engineering",
            "Electronic Engineering"
        ],
        degree: "B.E.",
        duration: "5 years",
        seats: "According to annual admission intake",
        gender: "See current official admission rules",
        interview: "See current official admission rules",
        service: "See current official admission rules",
        description: "Myanmar's premier technological university, offering undergraduate and postgraduate engineering and technology programs.",
        website: "https://ytu.edu.mm"
    },
 
    mtu: {
        name: "Mandalay Technological University",
        category: "Technology",
        location: "Mandalay",
        type: "Technological University",
        established: "1991",
        entryMarks: "Engineering/Architecture: combined English + Mathematics + Physics + Chemistry score 300+; Biotechnology: combined Mathematics + Chemistry + Physics + Biology score 260+.",
        minimumRequirement: "Engineering/Architecture: combined English + Mathematics + Physics + Chemistry score 300+; Biotechnology: combined Mathematics + Chemistry + Physics + Biology score 260+.",
        entryTrack: "Engineering",
        subjects: ["Mathematics", "Physics", "Chemistry"],
        programs: ["Engineering and Applied Sciences"],
        degree: "B.E.",
        duration: "5 years",
        seats: "According to annual admission intake",
        gender: "See current official admission rules",
        interview: "See current official admission rules",
        service: "See current official admission rules",
        description: "One of Myanmar's leading technological universities specializing in engineering and applied sciences.",
        website: "https://mtu.edu.mm"
    },
 
    tu_mandalay: {
        name: "Technological University, Mandalay",
        category: "Technology",
        location: "Mandalay",
        type: "Technological University",
        established: "1955",
        entryMarks: "No fixed minimum mark is stated; applicants are ranked by the combined marks in Physics, Chemistry, Mathematics and English according to available seats.",
        minimumRequirement: "No fixed minimum mark is stated; applicants are ranked by the combined marks in Physics, Chemistry, Mathematics and English according to available seats.",
        entryTrack: "Engineering",
        subjects: ["Mathematics", "Physics", "Chemistry"],
        programs: ["Engineering"],
        degree: "B.E.",
        duration: "5 years",
        seats: "According to annual admission intake",
        gender: "See current official admission rules",
        interview: "See current official admission rules",
        service: "See current official admission rules",
        description: "Offers undergraduate engineering and technology programs with practical training.",
        website: "https://www.tum.edu.mm"
    },
 
    tu_monywa: {
        name: "Technological University, Monywa",
        category: "Technology",
        location: "Monywa",
        type: "Technological University",
        established: "1982",
        entryMarks: "Combined English + Mathematics + Physics + Chemistry score: 240 or above.",
        minimumRequirement: "Combined English + Mathematics + Physics + Chemistry score: 240 or above.",
        entryTrack: "Engineering",
        subjects: ["Mathematics", "Physics", "Chemistry"],
        programs: ["Engineering"],
        degree: "B.E.",
        duration: "5 years",
        seats: "According to annual admission intake",
        gender: "See current official admission rules",
        interview: "See current official admission rules",
        service: "See current official admission rules",
        description: "Provides engineering and technological education for students in Sagaing Region.",
        website: "https://www.tumonywa.edu.mm"
    },
 
    tu_taunggyi: {
        name: "Technological University, Taunggyi",
        category: "Technology",
        location: "Taunggyi",
        type: "Technological University",
        established: "1992",
        entryMarks: "Combined English + Mathematics + Physics + Chemistry score: 240 or above.",
        minimumRequirement: "Combined English + Mathematics + Physics + Chemistry score: 240 or above.",
        entryTrack: "Engineering",
        subjects: ["Mathematics", "Physics", "Chemistry"],
        programs: ["Engineering"],
        degree: "B.E.",
        duration: "5 years",
        seats: "According to annual admission intake",
        gender: "See current official admission rules",
        interview: "See current official admission rules",
        service: "See current official admission rules",
        description: "Provides engineering and technological education in Shan State.",
        website: "https://www.tutaunggyi.edu.mm/"
    },
 
    tu_ycc: {
        name: "Technological University (Yatanarpon Cyber City)",
        category: "Technology",
        location: "Pyin Oo Lwin",
        type: "Technological University",
        established: "2010",
        entryMarks: "English + Mathematics + Physics + Chemistry combined score: 280+ AND 6-subject total: 420+.",
        minimumRequirement: "English + Mathematics + Physics + Chemistry combined score: 280+ AND 6-subject total: 420+.",
        entryTrack: "Engineering",
        subjects: ["Mathematics", "Physics", "Chemistry"],
        programs: ["Engineering and Technology"],
        degree: "B.E.",
        duration: "5 years",
        seats: "According to annual admission intake",
        gender: "See current official admission rules",
        interview: "See current official admission rules",
        service: "See current official admission rules",
        description: "Provides engineering education with emphasis on modern technology and innovation.",
        website: "https://www.yctu.edu.mm"
    },
 
    maeu: {
        name: "Myanmar Aerospace Engineering University",
        category: "Aerospace",
        location: "Meiktila",
        type: "Aerospace Engineering University",
        established: "2002",
        entryMarks: "English + Mathematics + Physics + Chemistry combined score: 280 or above; must pass with a subject combination containing Mathematics, Chemistry and Physics; citizen/ID requirements and practical/health conditions also apply.",
        minimumRequirement: "English + Mathematics + Physics + Chemistry combined score: 280 or above; must pass with a subject combination containing Mathematics, Chemistry and Physics; citizen/ID requirements and practical/health conditions also apply.",
        entryTrack: "Engineering",
        subjects: ["Mathematics", "Physics", "Chemistry"],
        programs: [
            "Aerospace Engineering",
            "Aeronautical Engineering",
            "Avionics"
        ],
        degree: "B.E.",
        duration: "5 years",
        seats: "According to annual admission intake",
        gender: "See current official admission rules",
        interview: "See current official admission rules",
        service: "See current official admission rules",
        description: "Specializes in aerospace engineering, aeronautical engineering, avionics and aviation technology.",
        website: "https://maeu.edu.mm/"
    },
 
 
    // =================================================
    // COMPUTER
    // =================================================
 
    ucsy: {
        name: "University of Computer Studies, Yangon",
        category: "Computer",
        location: "Yangon",
        type: "Computer University",
        established: "1971",
        entryMarks: "6-subject total: 450+ marks OR English + Mathematics combined: 140+ marks; must have passed a subject combination containing Mathematics, Chemistry and Physics.",
        minimumRequirement: "6-subject total: 450+ marks OR English + Mathematics combined: 140+ marks; must have passed a subject combination containing Mathematics, Chemistry and Physics.",
        entryTrack: "Computer",
        subjects: ["Mathematics", "English", "Science"],
        programs: [
            "Computer Science",
            "Software Engineering",
            "AI",
            "Information Systems"
        ],
        degree: "B.C.Sc / B.C.Tech",
        duration: "4 years",
        seats: "According to annual admission intake",
        gender: "See current official admission rules",
        interview: "See current official admission rules",
        service: "See current official admission rules",
        description: "A leading computer university specializing in computer science, software engineering, artificial intelligence and information systems.",
        website: "https://www.ucsy.edu.mm/"
    },
 
    uit: {
        name: "University of Information Technology",
        category: "Computer",
        location: "Yangon",
        type: "IT University",
        established: "2015",
        entryMarks: "6-subject total: 450+ marks; must have passed a subject combination containing Mathematics, Chemistry and Physics.",
        minimumRequirement: "6-subject total: 450+ marks; must have passed a subject combination containing Mathematics, Chemistry and Physics.",
        entryTrack: "Computer",
        subjects: ["Mathematics", "English", "Science"],
        programs: [
            "Computer Science",
            "AI",
            "Cyber Security",
            "Data Science"
        ],
        degree: "B.C.Sc / B.C.Tech",
        duration: "4 years",
        seats: "According to annual admission intake",
        gender: "See current official admission rules",
        interview: "See current official admission rules",
        service: "See current official admission rules",
        description: "A university specializing in information technology, artificial intelligence, cybersecurity, data science and software development.",
        website: "https://uit.edu.mm/"
    },
 
    ucsm: {
        name: "University of Computer Studies, Mandalay",
        category: "Computer",
        location: "Mandalay",
        type: "Computer University",
        established: "1997",
        entryMarks: "6-subject total: 430+ marks OR English + Mathematics combined: 140+ marks; must have passed a subject combination containing Mathematics, Chemistry and Physics.",
        minimumRequirement: "6-subject total: 430+ marks OR English + Mathematics combined: 140+ marks; must have passed a subject combination containing Mathematics, Chemistry and Physics.",
        entryTrack: "Computer",
        subjects: ["Mathematics", "English", "Science"],
        programs: [
            "Computer Science",
            "Software Engineering",
            "Computer Technology"
        ],
        degree: "B.C.Sc / B.C.Tech",
        duration: "4 years",
        seats: "According to annual admission intake",
        gender: "See current official admission rules",
        interview: "See current official admission rules",
        service: "See current official admission rules",
        description: "A major computer university in Mandalay offering computing-related programs.",
        website: "https://www.ucsm.edu.mm/"
    },
 
    monywa_cu: {
        name: "Computer University, Monywa",
        category: "Computer",
        location: "Monywa",
        type: "Computer University",
        established: "2001",
        entryMarks: "6-subject total: 320+ marks; must have passed a subject combination containing Mathematics, Chemistry and Physics.",
        minimumRequirement: "6-subject total: 320+ marks; must have passed a subject combination containing Mathematics, Chemistry and Physics.",
        entryTrack: "Computer",
        subjects: ["Mathematics", "English", "Science"],
        programs: ["Computer Science", "Computer Technology"],
        degree: "B.C.Sc / B.C.Tech",
        duration: "4 years",
        seats: "According to annual admission intake",
        gender: "See current official admission rules",
        interview: "See current official admission rules",
        service: "See current official admission rules",
        description: "Offers undergraduate programs in computer science and computer technology.",
        website: "https://www.ucsmonywa.edu.mm/"
    },
 
    kalay_cu: {
        name: "Computer University, Kalay",
        category: "Computer",
        location: "Kalay",
        type: "Computer University",
        established: "2001",
        entryMarks: "6-subject total: 320+ marks; must have passed a subject combination containing Mathematics, Chemistry and Physics.",
        minimumRequirement: "6-subject total: 320+ marks; must have passed a subject combination containing Mathematics, Chemistry and Physics.",
        entryTrack: "Computer",
        subjects: ["Mathematics", "English", "Science"],
        programs: ["Computer Science", "Computer Technology"],
        degree: "B.C.Sc / B.C.Tech",
        duration: "4 years",
        seats: "According to annual admission intake",
        gender: "See current official admission rules",
        interview: "See current official admission rules",
        service: "See current official admission rules",
        description: "Provides undergraduate education in computer science and computer technology.",
        website: "http://lms.ucskalay.edu.mm/"
    },
 
    magway_cu: {
        name: "Computer University, Magway",
        category: "Computer",
        location: "Magway",
        type: "Computer University",
        established: "2001",
        entryMarks: "6-subject total: 320+ marks; must have passed a subject combination containing Mathematics, Chemistry and Physics.",
        minimumRequirement: "6-subject total: 320+ marks; must have passed a subject combination containing Mathematics, Chemistry and Physics.",
        entryTrack: "Computer",
        subjects: ["Mathematics", "English", "Science"],
        programs: ["Computer Science", "Information Technology"],
        degree: "B.C.Sc / B.C.Tech",
        duration: "4 years",
        seats: "According to annual admission intake",
        gender: "See current official admission rules",
        interview: "See current official admission rules",
        service: "See current official admission rules",
        description: "Offers education in computer science and information technology.",
        website: "https://www.ucsmgy.edu.mm/"
    },
 
    taunggyi_cu: {
        name: "Computer University, Taunggyi",
        category: "Computer",
        location: "Taunggyi",
        type: "Computer University",
        established: "2001",
        entryMarks: "6-subject total: 320+ marks; must have passed a subject combination containing Mathematics, Chemistry and Physics.",
        minimumRequirement: "6-subject total: 320+ marks; must have passed a subject combination containing Mathematics, Chemistry and Physics.",
        entryTrack: "Computer",
        subjects: ["Mathematics", "English", "Science"],
        programs: ["Computer Science", "Information Technology"],
        degree: "B.C.Sc / B.C.Tech",
        duration: "4 years",
        seats: "According to annual admission intake",
        gender: "See current official admission rules",
        interview: "See current official admission rules",
        service: "See current official admission rules",
        description: "Offers computing and information technology programs.",
        website: "https://www.ucstgi.edu.mm/"
    },
 
    meiktila_cu: {
        name: "Computer University, Meiktila",
        category: "Computer",
        location: "Meiktila",
        type: "Computer University",
        established: "2001",
        entryMarks: "6-subject total: 320+ marks; must have passed a subject combination containing Mathematics, Chemistry and Physics.",
        minimumRequirement: "6-subject total: 320+ marks; must have passed a subject combination containing Mathematics, Chemistry and Physics.",
        entryTrack: "Computer",
        subjects: ["Mathematics", "English", "Science"],
        programs: ["Computer Science", "Information Technology"],
        degree: "B.C.Sc / B.C.Tech",
        duration: "4 years",
        seats: "According to annual admission intake",
        gender: "See current official admission rules",
        interview: "See current official admission rules",
        service: "See current official admission rules",
        description: "Provides degree programs in computer science and information technology.",
        website: "https://ucsmtla.edu.mm/"
    },
 
    pakokku_cu: {
        name: "Computer University, Pakokku",
        category: "Computer",
        location: "Pakokku",
        type: "Computer University",
        established: "2001",
        entryMarks: "6-subject total: 320+ marks; must have passed a subject combination containing Mathematics, Chemistry and Physics.",
        minimumRequirement: "6-subject total: 320+ marks; must have passed a subject combination containing Mathematics, Chemistry and Physics.",
        entryTrack: "Computer",
        subjects: ["Mathematics", "English", "Science"],
        programs: ["Computer Science", "Software Development", "IT"],
        degree: "B.C.Sc / B.C.Tech",
        duration: "4 years",
        seats: "According to annual admission intake",
        gender: "See current official admission rules",
        interview: "See current official admission rules",
        service: "See current official admission rules",
        description: "Provides academic and practical training in computer science, software development and information technology.",
        website: "http://www.ucspkku.edu.mm/"
    },
 
    loikaw_cu: {
        name: "Computer University, Loikaw",
        category: "Computer",
        location: "Loikaw",
        type: "Computer University",
        established: "2001",
        entryMarks: "6-subject total: 320+ marks; must have passed a subject combination containing Mathematics, Chemistry and Physics.",
        minimumRequirement: "6-subject total: 320+ marks; must have passed a subject combination containing Mathematics, Chemistry and Physics.",
        entryTrack: "Computer",
        subjects: ["Mathematics", "English", "Science"],
        programs: ["Computer Science", "Information Technology"],
        degree: "B.C.Sc / B.C.Tech",
        duration: "4 years",
        seats: "According to annual admission intake",
        gender: "See current official admission rules",
        interview: "See current official admission rules",
        service: "See current official admission rules",
        description: "Provides undergraduate education in computer science and information technology.",
        website: "http://www.ucsloikaw.edu.mm/"
    },
 
    toungoo_cu: {
        name: "Computer University, Taungoo",
        category: "Computer",
        location: "Taungoo",
        type: "Computer University",
        established: "2001",
        entryMarks: "6-subject total: 320+ marks; must have passed a subject combination containing Mathematics, Chemistry and Physics.",
        minimumRequirement: "6-subject total: 320+ marks; must have passed a subject combination containing Mathematics, Chemistry and Physics.",
        entryTrack: "Computer",
        subjects: ["Mathematics", "English", "Science"],
        programs: ["Computer Science", "Information Technology"],
        degree: "B.C.Sc / B.C.Tech",
        duration: "4 years",
        seats: "According to annual admission intake",
        gender: "See current official admission rules",
        interview: "See current official admission rules",
        service: "See current official admission rules",
        description: "Offers computer science and information technology degree programs.",
        website: "https://ucstaungoo.edu.mm/"
    },
 
    sittwe_cu: {
        name: "Computer University, Sittwe",
        category: "Computer",
        location: "Sittwe",
        type: "Computer University",
        established: "2001",
        entryMarks: "6-subject total: 320+ marks; must have passed a subject combination containing Mathematics, Chemistry and Physics.",
        minimumRequirement: "6-subject total: 320+ marks; must have passed a subject combination containing Mathematics, Chemistry and Physics.",
        entryTrack: "Computer",
        subjects: ["Mathematics", "English", "Science"],
        programs: ["Computer Science", "ICT"],
        degree: "B.C.Sc / B.C.Tech",
        duration: "4 years",
        seats: "According to annual admission intake",
        gender: "See current official admission rules",
        interview: "See current official admission rules",
        service: "See current official admission rules",
        description: "Provides ICT education and computer science programs.",
        website: null
    },
 
    pyay_cu: {
        name: "Computer University, Pyay",
        category: "Computer",
        location: "Pyay",
        type: "Computer University",
        established: "2001",
        entryMarks: "6-subject total: 320+ marks; must have passed a subject combination containing Mathematics, Chemistry and Physics.",
        minimumRequirement: "6-subject total: 320+ marks; must have passed a subject combination containing Mathematics, Chemistry and Physics.",
        entryTrack: "Computer",
        subjects: ["Mathematics", "English", "Science"],
        programs: ["Computer Science", "IT", "Software Engineering"],
        degree: "B.C.Sc / B.C.Tech",
        duration: "4 years",
        seats: "According to annual admission intake",
        gender: "See current official admission rules",
        interview: "See current official admission rules",
        service: "See current official admission rules",
        description: "Offers undergraduate studies in computer science, information technology and software engineering.",
        website: "https://www.cupyay.edu.mm"
    },
 
    pathein_cu: {
        name: "Computer University, Pathein",
        category: "Computer",
        location: "Pathein",
        type: "Computer University",
        established: "2001",
        entryMarks: "6-subject total: 320+ marks; must have passed a subject combination containing Mathematics, Chemistry and Physics.",
        minimumRequirement: "6-subject total: 320+ marks; must have passed a subject combination containing Mathematics, Chemistry and Physics.",
        entryTrack: "Computer",
        subjects: ["Mathematics", "English", "Science"],
        programs: ["Computer Science", "Information Technology"],
        degree: "B.C.Sc / B.C.Tech",
        duration: "4 years",
        seats: "According to annual admission intake",
        gender: "See current official admission rules",
        interview: "See current official admission rules",
        service: "See current official admission rules",
        description: "Provides education in computer science and information technology.",
        website: "https://www.cupathein.edu.mm"
    },
 
    hinthada_cu: {
        name: "Computer University, Hinthada",
        category: "Computer",
        location: "Hinthada",
        type: "Computer University",
        established: "2001",
        entryMarks: "6-subject total: 320+ marks; must have passed a subject combination containing Mathematics, Chemistry and Physics.",
        minimumRequirement: "6-subject total: 320+ marks; must have passed a subject combination containing Mathematics, Chemistry and Physics.",
        entryTrack: "Computer",
        subjects: ["Mathematics", "English", "Science"],
        programs: ["Computer Science", "IT", "Software Engineering"],
        degree: "B.C.Sc / B.C.Tech",
        duration: "4 years",
        seats: "According to annual admission intake",
        gender: "See current official admission rules",
        interview: "See current official admission rules",
        service: "See current official admission rules",
        description: "Provides undergraduate education in computer science, information technology and software engineering.",
        website: "https://www.cuhinthada.edu.mm"
    },
 
    hpaan_cu: {
        name: "Computer University, Hpa-An",
        category: "Computer",
        location: "Hpa-An",
        type: "Computer University",
        established: "2003",
        entryMarks: "6-subject total: 320+ marks; must have passed a subject combination containing Mathematics, Chemistry and Physics.",
        minimumRequirement: "6-subject total: 320+ marks; must have passed a subject combination containing Mathematics, Chemistry and Physics.",
        entryTrack: "Computer",
        subjects: ["Mathematics", "English", "Science"],
        programs: ["Computer Science", "Information Technology"],
        degree: "B.C.Sc / B.C.Tech",
        duration: "4 years",
        seats: "According to annual admission intake",
        gender: "See current official admission rules",
        interview: "See current official admission rules",
        service: "See current official admission rules",
        description: "Offers degree programs in computer science and information technology.",
        website: null
    },
 
    thaton_cu: {
        name: "Computer University, Thaton",
        category: "Computer",
        location: "Thaton",
        type: "Computer University",
        established: "2001",
        entryMarks: "6-subject total: 320+ marks; must have passed a subject combination containing Mathematics, Chemistry and Physics.",
        minimumRequirement: "6-subject total: 320+ marks; must have passed a subject combination containing Mathematics, Chemistry and Physics.",
        entryTrack: "Computer",
        subjects: ["Mathematics", "English", "Science"],
        programs: ["Computer Science", "Information Technology"],
        degree: "B.C.Sc / B.C.Tech",
        duration: "4 years",
        seats: "According to annual admission intake",
        gender: "See current official admission rules",
        interview: "See current official admission rules",
        service: "See current official admission rules",
        description: "Provides education in computer science and information technology.",
        website: null
    },
 
 
    // =================================================
    // POLYTECHNIC
    // =================================================
 
    myitkyina_pu: {
        name: "Polytechnic University, Myitkyina",
        category: "Polytechnic",
        location: "Myitkyina",
        type: "Polytechnic University",
        established: "2024",
        entryMarks: "Engineering: combined English + Mathematics + Physics + Chemistry score 240+; Computer Science/Computer Technology: 6-subject total 320+.",
        minimumRequirement: "Engineering: combined English + Mathematics + Physics + Chemistry score 240+; Computer Science/Computer Technology: 6-subject total 320+.",
        entryTrack: "Engineering",
        subjects: ["Mathematics", "Physics", "Chemistry"],
        programs: ["Engineering and Applied Technology"],
        degree: "B.E.",
        duration: "5 years",
        seats: "According to annual admission intake",
        gender: "See current official admission rules",
        interview: "See current official admission rules",
        service: "See current official admission rules",
        description: "Offers engineering and applied technology programs.",
        website: null
    },
 
    bhamo_pu: {
        name: "Polytechnic University, Bhamo",
        category: "Polytechnic",
        location: "Bhamo",
        type: "Polytechnic University",
        established: "2024",
        entryMarks: "Engineering: combined English + Mathematics + Physics + Chemistry score 240+; Computer Science/Computer Technology: 6-subject total 320+.",
        minimumRequirement: "Engineering: combined English + Mathematics + Physics + Chemistry score 240+; Computer Science/Computer Technology: 6-subject total 320+.",
        entryTrack: "Engineering",
        subjects: ["Mathematics", "Physics", "Chemistry"],
        programs: ["Engineering and Applied Sciences"],
        degree: "B.E.",
        duration: "5 years",
        seats: "According to annual admission intake",
        gender: "See current official admission rules",
        interview: "See current official admission rules",
        service: "See current official admission rules",
        description: "Provides education in engineering and applied sciences.",
        website: null
    },
 
    lashio_pu: {
        name: "Polytechnic University, Lashio",
        category: "Polytechnic",
        location: "Lashio",
        type: "Polytechnic University",
        established: "2024",
        entryMarks: "Engineering: combined English + Mathematics + Physics + Chemistry score 240+; Computer Science/Computer Technology: 6-subject total 320+.",
        minimumRequirement: "Engineering: combined English + Mathematics + Physics + Chemistry score 240+; Computer Science/Computer Technology: 6-subject total 320+.",
        entryTrack: "Engineering",
        subjects: ["Mathematics", "Physics", "Chemistry"],
        programs: ["Engineering and Technology"],
        degree: "B.E.",
        duration: "5 years",
        seats: "According to annual admission intake",
        gender: "See current official admission rules",
        interview: "See current official admission rules",
        service: "See current official admission rules",
        description: "Offers engineering and technology programs with practical laboratory training.",
        website: null
    },
 
    panglong_pu: {
        name: "Polytechnic University, Panglong",
        category: "Polytechnic",
        location: "Panglong",
        type: "Polytechnic University",
        established: "2024",
        entryMarks: "Engineering: combined English + Mathematics + Physics + Chemistry score 240+; Computer Science/Computer Technology: 6-subject total 320+.",
        minimumRequirement: "Engineering: combined English + Mathematics + Physics + Chemistry score 240+; Computer Science/Computer Technology: 6-subject total 320+.",
        entryTrack: "Engineering",
        subjects: ["Mathematics", "Physics", "Chemistry"],
        programs: ["Engineering and Applied Technology"],
        degree: "B.E.",
        duration: "5 years",
        seats: "According to annual admission intake",
        gender: "See current official admission rules",
        interview: "See current official admission rules",
        service: "See current official admission rules",
        description: "Provides undergraduate education in engineering and applied technology.",
        website: null
    },
 
    kengtung_pu: {
        name: "Polytechnic University, Kengtung",
        category: "Polytechnic",
        location: "Kengtung",
        type: "Polytechnic University",
        established: "2024",
        entryMarks: "Engineering: combined English + Mathematics + Physics + Chemistry score 240+; Computer Science/Computer Technology: 6-subject total 320+.",
        minimumRequirement: "Engineering: combined English + Mathematics + Physics + Chemistry score 240+; Computer Science/Computer Technology: 6-subject total 320+.",
        entryTrack: "Engineering",
        subjects: ["Mathematics", "Physics", "Chemistry"],
        programs: ["Engineering and Technology"],
        degree: "B.E.",
        duration: "5 years",
        seats: "According to annual admission intake",
        gender: "See current official admission rules",
        interview: "See current official admission rules",
        service: "See current official admission rules",
        description: "Offers engineering and technology degree programs.",
        website: null
    },
 
    maubin_pu: {
        name: "Polytechnic University, Maubin",
        category: "Polytechnic",
        location: "Maubin",
        type: "Polytechnic University",
        established: "2024",
        entryMarks: "Engineering: combined English + Mathematics + Physics + Chemistry score 240+; Computer Science/Computer Technology: 6-subject total 320+.",
        minimumRequirement: "Engineering: combined English + Mathematics + Physics + Chemistry score 240+; Computer Science/Computer Technology: 6-subject total 320+.",
        entryTrack: "Engineering",
        subjects: ["Mathematics", "Physics", "Chemistry"],
        programs: ["Engineering and Applied Technology"],
        degree: "B.E.",
        duration: "5 years",
        seats: "According to annual admission intake",
        gender: "See current official admission rules",
        interview: "See current official admission rules",
        service: "See current official admission rules",
        description: "Provides education in engineering and applied technology.",
        website: null
    },
 
    dawei_pu: {
        name: "Polytechnic University, Dawei",
        category: "Polytechnic",
        location: "Dawei",
        type: "Polytechnic University",
        established: "2024",
        entryMarks: "Engineering: combined English + Mathematics + Physics + Chemistry score 240+; Computer Science/Computer Technology: 6-subject total 320+.",
        minimumRequirement: "Engineering: combined English + Mathematics + Physics + Chemistry score 240+; Computer Science/Computer Technology: 6-subject total 320+.",
        entryTrack: "Engineering",
        subjects: ["Mathematics", "Physics", "Chemistry"],
        programs: ["Engineering and Technology"],
        degree: "B.E.",
        duration: "5 years",
        seats: "According to annual admission intake",
        gender: "See current official admission rules",
        interview: "See current official admission rules",
        service: "See current official admission rules",
        description: "Offers engineering and technical education.",
        website: null
    },
 
    myeik_pu: {
        name: "Polytechnic University, Myeik",
        category: "Polytechnic",
        location: "Myeik",
        type: "Polytechnic University",
        established: "2024",
        entryMarks: "Engineering: combined English + Mathematics + Physics + Chemistry score 240+; Computer Science/Computer Technology: 6-subject total 320+.",
        minimumRequirement: "Engineering: combined English + Mathematics + Physics + Chemistry score 240+; Computer Science/Computer Technology: 6-subject total 320+.",
        entryTrack: "Engineering",
        subjects: ["Mathematics", "Physics", "Chemistry"],
        programs: ["Engineering and Applied Technology"],
        degree: "B.E.",
        duration: "5 years",
        seats: "According to annual admission intake",
        gender: "See current official admission rules",
        interview: "See current official admission rules",
        service: "See current official admission rules",
        description: "Provides engineering and applied technology programs.",
        website: null
    },
 
 
    // =================================================
    // GENERAL UNIVERSITIES
    // =================================================
 
    yu: {
        name: "University of Yangon",
        category: "General",
        location: "Yangon",
        type: "General University",
        established: "1878",
        entryMarks: "See the 2025 University Admission Guide",
        minimumRequirement: "See the 2025 University Admission Guide; programme-specific eligibility applies.",
        entryTrack: "General",
        subjects: ["Relevant subjects according to program"],
        programs: ["Arts", "Science", "Social Science"],
        degree: "Bachelor's Degree",
        duration: "4 years",
        seats: "According to annual admission intake",
        gender: "See current official admission rules",
        interview: "See current official admission rules",
        service: "See current official admission rules",
        description: "One of Myanmar's oldest and most well-known universities, offering a wide range of academic programs.",
        website: "https://www.uy.edu.mm/"
    },
 
    mu: {
        name: "Mandalay University",
        category: "General",
        location: "Mandalay",
        type: "General University",
        established: "1925",
        entryMarks: "See the 2025 University Admission Guide",
        minimumRequirement: "See the 2025 University Admission Guide; programme-specific eligibility applies.",
        entryTrack: "General",
        subjects: ["Relevant subjects according to program"],
        programs: ["Arts", "Science", "Social Science"],
        degree: "Bachelor's Degree",
        duration: "4 years",
        seats: "According to annual admission intake",
        gender: "See current official admission rules",
        interview: "See current official admission rules",
        service: "See current official admission rules",
        description: "One of Myanmar's leading universities, providing education and research in arts, science and humanities.",
        website: "https://www.mu.edu.mm"
    },
 
    nsa: {
        name: "Naypyitaw State Academy",
        category: "Multidisciplinary",
        location: "Naypyitaw",
        type: "Multidisciplinary University",
        established: "2022",
        entryMarks: "See the 2025 University Admission Guide",
        minimumRequirement: "See the 2025 University Admission Guide; programme-specific eligibility applies.",
        entryTrack: "General",
        subjects: ["Relevant subjects according to program"],
        programs: ["Multidisciplinary Programs"],
        degree: "Bachelor's Degree",
        duration: "4 years",
        seats: "According to annual admission intake",
        gender: "See current official admission rules",
        interview: "See current official admission rules",
        service: "See current official admission rules",
        description: "Offers multidisciplinary undergraduate and postgraduate programs.",
        website: "https://nsa.edu.mm/"
    },
 
 
    // =================================================
    // ECONOMICS
    // =================================================
 
    yueco_hlaing: {
        name: "Yangon University of Economics - Hlaing Campus",
        category: "Economics",
        location: "Yangon",
        type: "Economics University",
        established: "1964",
        entryMarks: "See the 2025 University Admission Guide",
        minimumRequirement: "See the 2025 University Admission Guide; programme-specific eligibility applies.",
        entryTrack: "Economics / Business",
        subjects: ["Relevant subjects according to program"],
        programs: ["Economics", "Business", "Accounting", "Finance", "Management"],
        degree: "B.Econ / Business-related Degree",
        duration: "4 years",
        seats: "According to annual admission intake",
        gender: "See current official admission rules",
        interview: "See current official admission rules",
        service: "See current official admission rules",
        description: "Specializes in economics, business administration, commerce, accounting, finance and management.",
        website: "https://www.yueco.edu.mm/"
    },
 
    yueco_ywathagyi: {
        name: "Yangon University of Economics - Ywathagyi Campus",
        category: "Economics",
        location: "Yangon",
        type: "Economics University",
        established: "1993",
        entryMarks: "See the 2025 University Admission Guide",
        minimumRequirement: "See the 2025 University Admission Guide; programme-specific eligibility applies.",
        entryTrack: "Economics / Business",
        subjects: ["Relevant subjects according to program"],
        programs: ["Economics", "Commerce", "Accounting", "Finance", "Management"],
        degree: "B.Econ / Business-related Degree",
        duration: "4 years",
        seats: "According to annual admission intake",
        gender: "See current official admission rules",
        interview: "See current official admission rules",
        service: "See current official admission rules",
        description: "Provides undergraduate education in economics, commerce, accounting, finance and business management.",
        website: "https://www.yueco.edu.mm/"
    },
 
    mueco: {
        name: "Monywa University of Economics",
        category: "Economics",
        location: "Monywa",
        type: "Economics University",
        established: "1993",
        entryMarks: "See the 2025 University Admission Guide",
        minimumRequirement: "See the 2025 University Admission Guide; programme-specific eligibility applies.",
        entryTrack: "Economics / Business",
        subjects: ["Relevant subjects according to program"],
        programs: ["Economics", "Commerce", "Accounting", "Finance", "Business"],
        degree: "B.Econ / Business-related Degree",
        duration: "4 years",
        seats: "According to annual admission intake",
        gender: "See current official admission rules",
        interview: "See current official admission rules",
        service: "See current official admission rules",
        description: "Offers programs in economics, commerce, accounting, finance and business administration.",
        website: "https://www.mueco.edu.mm"
    },
 
    meiktila_ueco: {
        name: "Meiktila University of Economics",
        category: "Economics",
        location: "Meiktila",
        type: "Economics University",
        established: "2001",
        entryMarks: "See the 2025 University Admission Guide",
        minimumRequirement: "See the 2025 University Admission Guide; programme-specific eligibility applies.",
        entryTrack: "Economics / Business",
        subjects: ["Relevant subjects according to program"],
        programs: ["Economics", "Accounting", "Commerce", "Finance", "Management"],
        degree: "B.Econ / Business-related Degree",
        duration: "4 years",
        seats: "According to annual admission intake",
        gender: "See current official admission rules",
        interview: "See current official admission rules",
        service: "See current official admission rules",
        description: "Provides education in economics, accounting, commerce, finance and management.",
        website: null
    },
 
 
    // =================================================
    // EDUCATION
    // =================================================
 
    yuoe: {
        name: "Yangon University of Education",
        category: "Education",
        location: "Yangon",
        type: "Education University",
        established: "1931",
        entryMarks: "See the 2025 University Admission Guide",
        minimumRequirement: "See the 2025 University Admission Guide; programme-specific eligibility applies.",
        entryTrack: "Education",
        subjects: ["Relevant subjects according to program"],
        programs: ["Education", "Teacher Training"],
        degree: "B.Ed.",
        duration: "4 years",
        seats: "According to annual admission intake",
        gender: "See current official admission rules",
        interview: "See current official admission rules",
        service: "See current official admission rules",
        description: "Specializes in teacher education, educational research, curriculum development and postgraduate education.",
        website: "https://www.yuoe.edu.mm/"
    },
 
    suoe: {
        name: "Sagaing University of Education",
        category: "Education",
        location: "Sagaing",
        type: "Education University",
        established: "2001",
        entryMarks: "See the 2025 University Admission Guide",
        minimumRequirement: "See the 2025 University Admission Guide; programme-specific eligibility applies.",
        entryTrack: "Education",
        subjects: ["Relevant subjects according to program"],
        programs: ["Education", "Teacher Training"],
        degree: "B.Ed.",
        duration: "4 years",
        seats: "According to annual admission intake",
        gender: "See current official admission rules",
        interview: "See current official admission rules",
        service: "See current official admission rules",
        description: "Provides teacher education, educational research and professional training.",
        website: null
    },
 
 
    // =================================================
    // FOREIGN LANGUAGES
    // =================================================
 
    yufl: {
        name: "Yangon University of Foreign Languages",
        category: "Foreign Languages",
        location: "Yangon",
        type: "Language University",
        established: "1964",
        entryMarks: "See the 2025 University Admission Guide",
        minimumRequirement: "See the 2025 University Admission Guide; programme-specific eligibility applies.",
        entryTrack: "Languages",
        subjects: ["Relevant language subjects"],
        programs: ["Foreign Languages", "Linguistics", "Translation"],
        degree: "B.A.",
        duration: "4 years",
        seats: "According to annual admission intake",
        gender: "See current official admission rules",
        interview: "See current official admission rules",
        service: "See current official admission rules",
        description: "Specializes in foreign language education, linguistics, translation, interpretation and international communication.",
        website: "https://www.yufl.edu.mm/"
    },
 
    mufl: {
        name: "Mandalay University of Foreign Languages",
        category: "Foreign Languages",
        location: "Mandalay",
        type: "Language University",
        established: "1997",
        entryMarks: "See the 2025 University Admission Guide",
        minimumRequirement: "See the 2025 University Admission Guide; programme-specific eligibility applies.",
        entryTrack: "Languages",
        subjects: ["Relevant language subjects"],
        programs: ["Foreign Languages", "Linguistics", "Translation"],
        degree: "B.A.",
        duration: "4 years",
        seats: "According to annual admission intake",
        gender: "See current official admission rules",
        interview: "See current official admission rules",
        service: "See current official admission rules",
        description: "Offers degree programs in foreign languages, linguistics, translation and international communication.",
        website: "https://www.mufl.edu.mm/"
    },
 
 
    // =================================================
    // AGRICULTURE
    // =================================================
 
    yau: {
        name: "Yezin Agricultural University",
        category: "Agriculture",
        location: "Naypyitaw",
        type: "Agricultural University",
        established: "1924",
        entryMarks: "See the 2025 University Admission Guide",
        minimumRequirement: "See the 2025 University Admission Guide; programme-specific eligibility applies.",
        entryTrack: "Agriculture",
        subjects: ["Biology", "Chemistry", "Physics"],
        programs: ["Agriculture", "Agricultural Sciences"],
        degree: "B.Ag.",
        duration: "4 years",
        seats: "According to annual admission intake",
        gender: "See current official admission rules",
        interview: "See current official admission rules",
        service: "See current official admission rules",
        description: "Myanmar's leading agricultural university, offering programs in agriculture and related sciences.",
        website: "https://www.yau.edu.mm/"
    },
 
 
    // =================================================
    // VETERINARY
    // =================================================
 
    uvs: {
        name: "University of Veterinary Science, Yezin",
        category: "Veterinary",
        location: "Naypyitaw",
        type: "Veterinary University",
        established: "1957",
        entryMarks: "See the 2025 University Admission Guide",
        minimumRequirement: "See the 2025 University Admission Guide; programme-specific eligibility applies.",
        entryTrack: "Veterinary Science",
        subjects: ["Biology", "Chemistry", "Physics"],
        programs: ["Veterinary Medicine", "Animal Health", "Livestock"],
        degree: "DVM",
        duration: "6 years",
        seats: "According to annual admission intake",
        gender: "See current official admission rules",
        interview: "See current official admission rules",
        service: "See current official admission rules",
        description: "Offers programs in veterinary medicine, animal health, livestock production and veterinary research.",
        website: "https://www.uvas.edu.mm"
    },
 
 
    // =================================================
    // MARITIME
    // =================================================
 
    mmu: {
        name: "Myanmar Maritime University",
        category: "Maritime",
        location: "Yangon",
        type: "Maritime University",
        established: "2002",
        entryMarks: "See the 2025 University Admission Guide",
        minimumRequirement: "See the 2025 University Admission Guide; programme-specific eligibility applies.",
        entryTrack: "Maritime",
        subjects: ["Mathematics", "Physics", "Chemistry"],
        programs: [
            "Marine Engineering",
            "Naval Architecture",
            "Nautical Science",
            "Port Management"
        ],
        degree: "B.E. / Maritime Degree",
        duration: "5 years",
        seats: "According to annual admission intake",
        gender: "See current official admission rules",
        interview: "See current official admission rules",
        service: "See current official admission rules",
        description: "Provides education in marine engineering, naval architecture, port management, nautical science and related fields.",
        website: "https://www.mmu.edu.mm/"
    },
 
 
    // =================================================
    // IT
    // =================================================
 
    miit: {
        name: "Myanmar Institute of Information Technology",
        category: "IT",
        location: "Mandalay",
        type: "IT University",
        established: "2015",
        entryMarks: "See the 2025 University Admission Guide",
        minimumRequirement: "See the 2025 University Admission Guide; programme-specific eligibility applies.",
        entryTrack: "Computer",
        subjects: ["Mathematics", "English", "Science"],
        programs: [
            "Computer Science",
            "Information Technology",
            "AI",
            "Software Engineering"
        ],
        degree: "B.C.Sc / B.C.Tech",
        duration: "4 years",
        seats: "According to annual admission intake",
        gender: "See current official admission rules",
        interview: "See current official admission rules",
        service: "See current official admission rules",
        description: "An institute specializing in information technology, computer science, artificial intelligence and software engineering.",
        website: "https://www.miit.edu.mm/"
    }
 
};
 
 
// =====================================================
// 2025–2026 LOWEST ADMITTED MARKS
// =====================================================
// Source: supplied 2025–2026 Day-admission lowest-mark PDF.
//
// IMPORTANT:
// These are historical lowest-admitted marks, NOT guaranteed
// future admission requirements. They are kept separate from
// the general admission-rule fields above.
// =====================================================
 
const lowestCutoffData = {
    // =====================================================
    // 2025–2026 LOWEST ADMITTED MARKS
    // =====================================================
    // Rechecked against the supplied 2025–2026 Day-admission PDF.
    // These are historical lowest-admitted marks, NOT guaranteed
    // future admission requirements.
 
    // Medical universities
    // The PDF lists separate male/female columns.
    med1_yangon: { lastYearCutoff: "251 (male) / 251 (female)" },
    med2_yangon: { lastYearCutoff: "251 (male) / 251 (female)" },
    med_mandalay: { lastYearCutoff: "246 (male) / 252 (female)" },
    med_taunggyi: { lastYearCutoff: "250 (male) / 250 (female)" },
    med_magway: { lastYearCutoff: "250 (male) / 250 (female)" },
 
    // Dental universities
    dental_yangon: { lastYearCutoff: "247 (male) / 247 (female)" },
    dental_mandalay: { lastYearCutoff: "247 (male) / 247 (female)" },
 
    // Pharmacy
    pharmacy_yangon: { lastYearCutoff: "453 (male) / 453 (female)" },
    pharmacy_mandalay: { lastYearCutoff: "453 (male) / 453 (female)" },
 
    // Nursing
    nursing_yangon: { lastYearCutoff: "417 (male) / 424 (female)" },
    nursing_mandalay: { lastYearCutoff: "418 (male) / 424 (female)" },
 
    // Medical Technology
    medtech_yangon: { lastYearCutoff: "465 (male) / 465 (female)" },
    medtech_mandalay: { lastYearCutoff: "465 (male) / 465 (female)" },
 
    // Traditional Medicine
    traditionalmedicine_mandalay: { lastYearCutoff: "382 (male) / 380 (female)" },
 
    // Computer Universities
    // Values below are copied from the corresponding Day-admission rows.
    ucsy: { lastYearCutoff: "396" },
    uit: { lastYearCutoff: "475" },
    ucsm: { lastYearCutoff: "382" },
    monywa_cu: { lastYearCutoff: "320" },
    kalay_cu: { lastYearCutoff: "320" },
    magway_cu: { lastYearCutoff: "375" },
    taunggyi_cu: { lastYearCutoff: "352" },
    meiktila_cu: { lastYearCutoff: "380" },
    pakokku_cu: { lastYearCutoff: "350" },
    loikaw_cu: { lastYearCutoff: "321" },
    toungoo_cu: { lastYearCutoff: "348" },
    sittwe_cu: { lastYearCutoff: "350" },
    pyay_cu: { lastYearCutoff: "341" },
    pathein_cu: { lastYearCutoff: "334" },
    hinthada_cu: { lastYearCutoff: "331" },
    hpaan_cu: { lastYearCutoff: "320" },
    thaton_cu: { lastYearCutoff: "337" },
 
    // Polytechnic Universities
    myitkyina_pu: { lastYearCutoff: "349" },
    bhamo_pu: { lastYearCutoff: "321" },
    lashio_pu: { lastYearCutoff: "320" },
    panglong_pu: { lastYearCutoff: "355" },
    kengtung_pu: { lastYearCutoff: "320" },
    maubin_pu: { lastYearCutoff: "359" },
    dawei_pu: { lastYearCutoff: "320" },
    myeik_pu: { lastYearCutoff: "320" },
 
    // Technological / specialist universities represented in the current database
    mtu: { lastYearCutoff: "366" },
    tu_ycc: { lastYearCutoff: "434" },
    tu_taunggyi: { lastYearCutoff: "336" },
    maeu: { lastYearCutoff: "429" },
 
    // These universities have major/programme-level marks in the PDF,
    // so a single university-wide cutoff would be misleading.
    yu: {
        lastYearCutoff: "Programme-specific; see 2025–2026 major-level marks"
    },
    mu: {
        lastYearCutoff: "Programme-specific; see 2025–2026 major-level marks"
    },
 
    // Yangon University of Foreign Languages: programme-level marks.
    yufl: {
        lastYearCutoff:
            "Chinese 437/419; English 466/432; French 409/406; Korean 434/415; Russian 402/394; Thai 420/393; English for Business Purposes 420/391"
    },
 
    // The Day PDF reports language-level/programme-level information rather
    // than one single university-wide cutoff for Mandalay University of
    // Foreign Languages.
    mufl: {
        lastYearCutoff:
            "Programme-specific; no single university-wide cutoff shown"
    },
 
    // Economics universities represented in the current database.
    // These are single cutoff figures in the Day-admission table.
    yueco_ywathagyi: { lastYearCutoff: "390" },
    yueco_hlaing: { lastYearCutoff: "386" },
    mueco: { lastYearCutoff: "330" }
};
 
Object.entries(lowestCutoffData).forEach(([id, data]) => {
    universities[id] = {
        ...(universities[id] || {}),
        ...data
    };
});
 
// =====================================================
// LOAD UNIVERSITIES INTO SELECT BOXES
// =====================================================
 
function loadUniversities() {
    const select1 = document.getElementById("uni1");
    const select2 = document.getElementById("uni2");
 
    if (!select1 || !select2) {
        console.error("University selectors were not found.");
        return;
    }
 
    const buildOptions = (select, placeholder) => {
        select.innerHTML = "";
 
        const first = document.createElement("option");
        first.value = "";
        first.textContent = placeholder;
        select.appendChild(first);
 
        Object.entries(universities).forEach(([id, university]) => {
            if (!university || !university.name) return;
 
            const option = document.createElement("option");
            option.value = id;
            option.textContent = university.name;
 
            const searchable = [
                id,
                university.name,
                university.nameMM,
                university.category,
                university.location,
                university.type,
                university.entryTrack,
                university.degree,
                Array.isArray(university.programs)
                    ? university.programs.join(" ")
                    : university.programs,
                Array.isArray(university.subjects)
                    ? university.subjects.join(" ")
                    : university.subjects
            ].filter(Boolean).join(" ");
 
            option.dataset.search = searchable;
            select.appendChild(option);
        });
    };
 
    buildOptions(select1, "-- Choose University 1 --");
    buildOptions(select2, "-- Choose University 2 --");
 
    updateSelectorStatus();
}
 
 
// =====================================================
// CREATE TAGS
// =====================================================
 
function createTags(containerId, items) {
 
    const container =
        document.getElementById(containerId);
 
    if (!container) return;
 
    container.innerHTML = "";
 
    if (!items) {
        return;
    }
 
    let list = items;
 
    if (!Array.isArray(items)) {
        list = String(items)
            .split(",")
            .map(item => item.trim())
            .filter(Boolean);
    }
 
    list.forEach(item => {
 
        const tag =
            document.createElement("span");
 
        tag.className = "course-tag";
 
        tag.textContent = item;
 
        container.appendChild(tag);
    });
}
 
 
// =====================================================
// OPTIONAL CUTOFF VALUE HELPER
// =====================================================
 
function setOptionalCutoffValue(ids, value) {
 
    if (!value) return;
 
    for (const id of ids) {
 
        const element = document.getElementById(id);
 
        if (element) {
            element.textContent = value;
            return;
        }
    }
}
 
 
function getDisplayEntryTrack(university) {
    if (!university) return "STEAMS-1";
 
    const raw = String(university.entryTrack || university.minimumRequirement || university.entryMarks || "");
    const normalized = normalizeSearchText(raw);
 
    if (normalized.includes("steams 1") || normalized.includes("steam 1") || normalized.includes("steams-1") || normalized.includes("steam-1")) {
        if (normalized.includes("steams 2") || normalized.includes("steam 2") || normalized.includes("steams-2") || normalized.includes("steam-2")) {
            return "STEAMS-1 / STEAMS-2";
        }
        return "STEAMS-1";
    }
 
    if (normalized.includes("steams 2") || normalized.includes("steam 2") || normalized.includes("steams-2") || normalized.includes("steam-2")) {
        return "STEAMS-2";
    }
 
    const category = String(university.category || "").toLowerCase();
    const genericCategoryMap = {
        "medical": "STEAMS-1",
        "medicine": "STEAMS-1",
        "dental": "STEAMS-1",
        "pharmacy": "STEAMS-1",
        "nursing": "STEAMS-1",
        "medical technology": "STEAMS-1",
        "traditional medicine": "STEAMS-1",
        "health science": "STEAMS-1",
        "computer": "STEAMS-1 / STEAMS-2",
        "computer studies": "STEAMS-1 / STEAMS-2",
        "technology": "STEAMS-1 / STEAMS-2",
        "information technology": "STEAMS-1 / STEAMS-2",
        "engineering": "STEAMS-1 / STEAMS-2",
        "polytechnic": "STEAMS-1 / STEAMS-2",
        "aerospace": "STEAMS-1 / STEAMS-2",
        "maritime": "STEAMS-1 / STEAMS-2",
        "agriculture": "STEAMS-1 / STEAMS-2",
        "veterinary": "STEAMS-1 / STEAMS-2",
        "business": "STEAMS-1 / STEAMS-2",
        "economics": "STEAMS-1 / STEAMS-2",
        "arts": "STEAMS-1 / STEAMS-2",
        "education": "STEAMS-1 / STEAMS-2",
        "foreign languages": "STEAMS-1 / STEAMS-2",
        "general": "STEAMS-1 / STEAMS-2",
        "multidisciplinary": "STEAMS-1 / STEAMS-2"
    };
 
    for (const [key, value] of Object.entries(genericCategoryMap)) {
        if (category === key || category.includes(key)) {
            return value;
        }
    }
 
    if (raw && raw !== "Not available") {
        return raw;
    }
 
    return "STEAMS-1";
}
 
// =====================================================
// COMPARISON CARD ALIGNMENT
// =====================================================

function syncComparisonCardRows() {
    const card1 = document.getElementById("university-card-1");
    const card2 = document.getElementById("university-card-2");
    if (!card1 || !card2) return;

    const selectors = [
        ".university-header",
        ".cutoff-section",
        ".admission-detail",
        ".secondary-grid",
        ".profile-section",
        ".university-actions"
    ];

    selectors.forEach(selector => {
        card1.querySelectorAll(selector).forEach(el => el.style.minHeight = "");
        card2.querySelectorAll(selector).forEach(el => el.style.minHeight = "");
    });

    if (window.innerWidth <= 900) {
        card1.style.minHeight = "";
        card2.style.minHeight = "";
        return;
    }

    const rows = [
        ".university-header",
        ".cutoff-section",
        ".admission-detail:nth-of-type(2)",
        ".admission-detail:nth-of-type(3)",
        ".admission-detail:nth-of-type(4)",
        ".admission-detail:nth-of-type(5)",
        ".admission-detail:nth-of-type(6)",
        ".admission-detail:nth-of-type(7)",
        ".secondary-grid",
        ".profile-section",
        ".university-actions"
    ];

    rows.forEach(selector => {
        const a = card1.querySelector(selector);
        const b = card2.querySelector(selector);
        if (!a || !b) return;

        const height = Math.max(
            a.getBoundingClientRect().height,
            b.getBoundingClientRect().height
        );

        a.style.minHeight = `${Math.ceil(height)}px`;
        b.style.minHeight = `${Math.ceil(height)}px`;
    });

    const cardHeight = Math.max(
        card1.getBoundingClientRect().height,
        card2.getBoundingClientRect().height
    );

    card1.style.minHeight = `${Math.ceil(cardHeight)}px`;
    card2.style.minHeight = `${Math.ceil(cardHeight)}px`;
}

function scheduleComparisonCardSync() {
    requestAnimationFrame(() => {
        syncComparisonCardRows();
        requestAnimationFrame(syncComparisonCardRows);
    });
}

// =====================================================
// UPDATE UNIVERSITY CARD
// =====================================================
 
function updateUniversityCard(university, number) {
 
    if (!university) return;
 
 
    // =================================================
    // HEADER
    // =================================================
 
    const category =
        document.getElementById(`category${number}`);
 
    const nameEN =
        document.getElementById(`name_en${number}`);
 
    const nameMM =
        document.getElementById(`name_mm${number}`);
 
 
    if (category) {
        category.textContent =
            university.category || "University";
    }
 
    if (nameEN) {
        nameEN.textContent =
            university.name;
    }
 
    if (nameMM) {
        nameMM.textContent =
            university.nameMM || "—";
    }
 
 
    // =================================================
    // SHOW DETAILS
    // =================================================
 
    const empty =
        document.getElementById(`empty${number}`);
 
    const details =
        document.getElementById(`details${number}`);
 
    if (empty) {
        empty.style.display = "none";
        empty.hidden = true;
    }
 
    if (details) {
        details.style.display = "block";
        details.hidden = false;
    }
 
    // =================================================
    // ADMISSION / 2025 LOWEST CUTOFF
    // =================================================
    const entryMark =
        document.getElementById(`entry_mark${number}`);
 
    if (entryMark) {
        const standard =
            university.entryMarks ||
            university.minimumRequirement ||
            "Not available";
 
        const lowest =
            university.lastYearCutoff ||
            "Not available";
 
        entryMark.innerHTML = `
            <div class="admission-highlight admission-highlight-standard">
                <div class="admission-highlight-label">STANDARD ADMISSION REQUIREMENT</div>
                <div class="admission-highlight-value admission-standard-value">${standard}</div>
            </div>
            <div class="admission-highlight admission-highlight-lowest">
                <div class="admission-highlight-label">2025 LOWEST CUTOFF MARK</div>
                <div class="admission-highlight-value admission-lowest-value">${lowest}</div>
            </div>
        `;
    }
 
 
    // =================================================
    // DURATION
    // =================================================
 
    const duration =
        document.getElementById(`duration_mark${number}`);
 
    if (duration) {
        duration.textContent =
            university.duration || "Not available";
    }
 
 
    // =================================================
    // LOCATION
    // =================================================
 
    const location =
        document.getElementById(`location${number}`);
 
    if (location) {
        location.textContent =
            university.location || "Not available";
    }
 
 
    // =================================================
    // TYPE
    // =================================================
 
    const type =
        document.getElementById(`type${number}`);
 
    if (type) {
        type.textContent =
            university.type || "Not available";
    }
 
 
    // =================================================
    // ESTABLISHED
    // =================================================
 
    const established =
        document.getElementById(`established${number}`);
 
    if (established) {
        established.textContent =
            university.established || "Not available";
    }
 
 
    // =================================================
    // ENTRY TRACK
    // =================================================
 
    const track =
        document.getElementById(`track${number}`);
 
    if (track) {
        track.textContent = getDisplayEntryTrack(university);
    }
 
 
    // =================================================
    // SUBJECTS
    // =================================================
 
    createTags(
        `subjects${number}`,
        university.subjects
    );
 
 
    // =================================================
    // PROGRAMS
    // =================================================
 
    createTags(
        `courses${number}`,
        university.programs
    );
 
 
    // =================================================
    // DEGREE
    // =================================================
 
    const degree =
        document.getElementById(`degree${number}`);
 
    if (degree) {
        degree.textContent =
            university.degree || "Not available";
    }
 
 
    // =================================================
    // SEATS
    // =================================================
 
    const seats =
        document.getElementById(`seats${number}`);
 
    if (seats) {
        seats.textContent =
            university.seats || "Not available";
    }
 
 
    // =================================================
    // GENDER
    // =================================================
 
    const gender =
        document.getElementById(`gender${number}`);
 
    if (gender) {
        gender.textContent =
            university.gender || "Not available";
    }
 
 
    // =================================================
    // INTERVIEW
    // =================================================
 
    const interview =
        document.getElementById(`interview${number}`);
 
    if (interview) {
        interview.textContent =
            university.interview || "Not available";
    }
 
 
    // =================================================
    // SERVICE
    // =================================================
 
    const service =
        document.getElementById(`service${number}`);
 
    if (service) {
        service.textContent =
            university.service || "Not available";
    }
 
 
    // =================================================
    // DESCRIPTION
    // =================================================
 
    const description =
        document.getElementById(`description${number}`);
 
    if (description) {
        description.textContent =
            university.description || "Not available";
    }
 
 
    // =================================================
    // WEBSITE
    // =================================================
 
    const website =
        document.getElementById(`website${number}`);
 
    if (website) {
        const detailHref = resolveUniversityDetailPage(university);

        if (detailHref) {
<<<<<<< Updated upstream
            website.href = `${detailHref}?from=compare`;
=======
            website.href = buildDetailHrefWithReturnState(detailHref);
>>>>>>> Stashed changes
            website.textContent = "More Details ";
            website.classList.remove("disabled");
            website.removeAttribute("aria-disabled");
            website.removeAttribute("target");
            website.rel = "noopener noreferrer";
            let returnStateSaved = false;
            const saveReturnState = function () {
                if (returnStateSaved) return;
                const select1 = document.getElementById("uni1");
                const select2 = document.getElementById("uni2");
                sessionStorage.setItem("compareReturnState", JSON.stringify({
                    uni1: select1 ? select1.value : "",
                    uni2: select2 ? select2.value : "",
                    scrollY: window.scrollY
                }));
                returnStateSaved = true;
            };
            website.onpointerdown = saveReturnState;
            website.onclick = function (event) {
                event.preventDefault();
                saveReturnState();
                website.blur();
                window.location.assign(website.href);
            };
        } else {
            website.href = "#";
            website.textContent = "More Details";
            website.classList.add("disabled");
            website.setAttribute("aria-disabled", "true");
            website.removeAttribute("target");
            website.onpointerdown = null;
            website.onclick = null;
        }
    }
}
 
function resolveUniversityDetailPage(university) {
    if (!university) return "";
 
    const name = String(university.name || "").toLowerCase();
    const id = String(university.id || "").toLowerCase();
 
    const pageMap = {
        med1_yangon: "../html/UM1.html",
        med2_yangon: "../html/UM2.html",
        med_mandalay: "UMM.html",
        med_magway: "UMMG.html",
        med_taunggyi: "UMTG.html",
        dental_yangon: "UDMY.html",
        dental_mandalay: "UDMM.html",
        pharmacy_yangon: "UOPM.html",
        pharmacy_mandalay: "UOPY.html",
        ucsy: "UCSY.html",
        ucsm: "UCSM.html",
        uit: "UIT.html",
        mtu: "MTU.html",
        ytu: "YTU.html",
        maeu: "Engineering.html",
        yuoe: "Education.html",
        suoe: "Education.html",
        yueco_hlaing: "Business.html",
        yueco_ywathagyi: "Business.html",
        mueco: "Business.html",
        meiktila_ueco: "Business.html",
        yufl: "../html/Uni.html",
        mufl: "../html/Uni.html",
        yau: "../html/Uni.html",
        uvs: "../html/Uni.html",
        myitkyina_pu: "Poly.html",
        bhamo_pu: "Poly.html",
        lashio_pu: "Poly.html",
        panglong_pu: "Poly.html",
        kengtung_pu: "Poly.html",
        maubin_pu: "Poly.html",
        dawei_pu: "Poly.html",
        myeik_pu: "Poly.html",
        monywa_cu: "Cumonywa.html",
        kalay_cu: "Cukalay.html",
        magway_cu: "Cumagway.html",
        taunggyi_cu: "Cutaunggyi.html",
        meiktila_cu: "Cumeiktila.html",
        pakokku_cu: "Cupakokku.html",
        loikaw_cu: "Culoikaw.html",
        toungoo_cu: "Cutaungoo.html",
        sittwe_cu: "Cusittwe.html",
        pyay_cu: "Cupyay.html",
        pathein_cu: "Cupathein.html",
        hpaan_cu: "Cuhpa-an.html",
        hinthada_cu: "Cuhinthada.html",
        thaton_cu: "Cuthaton.html"
    };
 
    if (pageMap[id]) return pageMap[id];
 
    if (name.includes("university of medicine (1)") || name.includes("medicine (1)")) return "UM1.html";
    if (name.includes("university of medicine (2)") || name.includes("medicine (2)")) return "UM2.html";
    if (name.includes("university of medicine, mandalay") || name.includes("medicine, mandalay")) return "UMM.html";
    if (name.includes("university of medicine, magway") || name.includes("medicine, magway")) return "UMMG.html";
    if (name.includes("university of medicine, taunggyi") || name.includes("medicine, taunggyi")) return "UMTG.html";
    if (name.includes("dental medicine")) return name.includes("mandalay") ? "UDMM.html" : "UDMY.html";
    if (name.includes("computer studies")) return name.includes("mandalay") ? "UCSM.html" : "UCSY.html";
    if (name.includes("information technology")) return "UIT.html";
    if (name.includes("medical technology")) return "../Uni.html";
    if (name.includes("pharmacy")) return "UOPM.html";
    if (name.includes("nursing")) return "../Uni.html";
    if (name.includes("economics")) return "Business.html";
    if (name.includes("education")) return "Education.html";
    if (name.includes("technological university")) return name.includes("mandalay") ? "MTU.html" : "YTU.html";
    if (name.includes("polytechnic university")) return "Poly.html";
    if (name.includes("engineering") || name.includes("aerospace")) return "Engineering.html";
    if (name.includes("computer university")) {
        if (name.includes("mandalay")) return "Cumandalay.html";
        if (name.includes("kalay")) return "Cukalay.html";
        if (name.includes("meiktila")) return "Cumeiktila.html";
        if (name.includes("myitkyina")) return "../html/Uni.html";
    }
 
    return "../html/Uni.html";
}
 
 
// =====================================================
// RESET CARD
// =====================================================
 
function resetUniversityCard(number) {
 
    const empty =
        document.getElementById(`empty${number}`);
 
    const details =
        document.getElementById(`details${number}`);
 
    const category =
        document.getElementById(`category${number}`);
 
    const nameEN =
        document.getElementById(`name_en${number}`);
 
    const nameMM =
        document.getElementById(`name_mm${number}`);
 
    const website =
        document.getElementById(`website${number}`);
 
 
    if (empty) {
        empty.style.display = "flex";
        empty.hidden = false;
    }
 
    if (details) {
        details.style.display = "none";
        details.hidden = true;
    }
 
    if (category) {
        category.textContent =
            `University ${number}`;
    }
 
    if (nameEN) {
        nameEN.textContent =
            "Select University";
    }
 
    if (nameMM) {
        nameMM.textContent = "—";
    }
 
    const cutoff =
        document.getElementById(`entry_mark${number}`);
 
    if (cutoff) {
        cutoff.innerHTML = "";
    }
 
    const duration =
        document.getElementById(`duration_mark${number}`);
 
    if (duration) {
        duration.textContent = "—";
    }
 
    if (website) {
        website.href = "#";
        website.textContent = "More Details";
        website.classList.add("disabled");
    }
}
 
 
// =====================================================
// COMPARE RETURN STATE
// =====================================================

function saveComparisonReturnState() {
    const select1 = document.getElementById("uni1");
    const select2 = document.getElementById("uni2");

    if (!select1 || !select2 || !select1.value || !select2.value) return;

    const params = new URLSearchParams();
    params.set("uni1", select1.value);
    params.set("uni2", select2.value);

    const compareUrl =
        `${window.location.pathname}?${params.toString()}${window.location.hash || ""}`;

    window.history.replaceState(
        { uni1: select1.value, uni2: select2.value },
        "",
        compareUrl
    );

    sessionStorage.setItem("unipathCompareReturnUrl", compareUrl);
    sessionStorage.setItem(
        "unipathCompareScrollY",
        String(window.scrollY || 0)
    );
}

function buildDetailHrefWithReturnState(detailHref) {
    if (!detailHref) return detailHref;

    saveComparisonReturnState();

    const separator = detailHref.includes("?") ? "&" : "?";
    return `${detailHref}${separator}from=compare`;
}

function restoreComparisonScrollPosition() {
    const saved = sessionStorage.getItem("unipathCompareScrollY");
    if (saved === null) return;

    const y = Number(saved);
    if (!Number.isFinite(y)) return;

    requestAnimationFrame(() => {
        window.scrollTo(0, y);
    });
}

// =====================================================
// COMPARE UNIVERSITIES
// =====================================================
 
function compareUniversities(options) {
 
    const select1 =
        document.getElementById("uni1");
 
    const select2 =
        document.getElementById("uni2");
 
 
    if (!select1 || !select2) {
        updateSelectorStatus("University selectors could not be found.");
        return;
    }
 
 
    const uni1ID =
        select1.value;
 
    const uni2ID =
        select2.value;
 
    if (!uni1ID) {
        updateSelectorStatus("Please select University 1.");
        select1.focus();
        return;
    }
 
    if (!uni2ID) {
        updateSelectorStatus("Please select University 2.");
        select2.focus();
        return;
    }
 
    if (uni1ID === uni2ID) {
        updateSelectorStatus("Please select two different universities.");
        return;
    }
 
    const university1 =
        universities[uni1ID];
 
    const university2 =
        universities[uni2ID];
 
    if (!university1 || !university2) {
        updateSelectorStatus("University information could not be found.");
        return;
    }
 
    updateUniversityCard(university1, 1);
    updateUniversityCard(university2, 2);
 
    if (!options || options.scroll !== false) {
        const comparisonGrid =
            document.querySelector(".comparison-grid");

        if (comparisonGrid) {
            comparisonGrid.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    }
 
    updateSelectorStatus(`Comparing ${university1.name} and ${university2.name}.`);

    saveComparisonReturnState();
    scheduleComparisonCardSync();
}
 
 
 
// =====================================================
// SEARCHABLE UNIVERSITY SELECTORS
// Search supports:
// - University name
// - Short code / ID (UIT, UCSY, etc.)
// - Region / city
// - University category
// - Major / programme
// - Degree
// =====================================================
 
function normalizeSearchText(value) {
    return String(value || "")
        .toLowerCase()
        .trim()
        .replace(/[()]/g, " ")
        .replace(/[-–—_]/g, " ")
        .replace(/[.,/]/g, " ")
        .replace(/\s+/g, " ");
}
 
function hasTextMatch(value, word) {
    if (!value || !word) return false;
    const cleaned = normalizeSearchText(value);
    if (!cleaned || !word) return false;
    const terms = cleaned.split(/\s+/).filter(Boolean);
    if (terms.some(term => term === word || term.startsWith(word))) return true;
    if (word.length > 2) {
        return cleaned.includes(word);
    }
    return false;
}
 
function buildSearchAliases(university, id = "") {
    const aliases = new Set();
    const name = university && university.name ? university.name : "";
    const category = university && university.category ? university.category : "";
    const location = university && university.location ? university.location : "";
 
    [id, name, category, location, university && university.type, university && university.entryTrack, university && university.degree]
        .filter(Boolean)
        .forEach(value => {
            aliases.add(String(value));
            aliases.add(String(value).replace(/[()]/g, " "));
            aliases.add(String(value).replace(/[-_]/g, " "));
        });
 
    if (name) {
        const normalizedName = normalizeSearchText(name).replace(/\s+/g, " ");
        aliases.add(normalizedName);
 
        if (normalizedName.includes("computer studies")) {
            aliases.add("cs");
            aliases.add("computer studies");
        }
        if (normalizedName.includes("information technology")) {
            aliases.add("it");
            aliases.add("information technology");
        }
        if (normalizedName.includes("university of medicine") || (/^university of medicine/.test(normalizedName) && !normalizedName.includes("dental medicine"))) {
            aliases.add("um");
            aliases.add("med");
            aliases.add("medical");
            aliases.add("medicine");
        } else if (normalizedName.includes("medicine") && !normalizedName.includes("dental medicine")) {
            aliases.add("um");
            aliases.add("med");
            aliases.add("medical");
            aliases.add("medicine");
        }
        if (normalizedName.includes("computer university")) {
            aliases.add("cu");
            aliases.add("computer university");
        }
        if (normalizedName.includes("polytechnic university")) {
            aliases.add("pu");
            aliases.add("poly");
            aliases.add("polytechnic");
        }
        if (normalizedName.includes("engineering")) {
            aliases.add("eng");
            aliases.add("engineering");
        }
        if (normalizedName.includes("economics")) {
            aliases.add("eco");
            aliases.add("economics");
        }
        if (normalizedName.includes("education")) {
            aliases.add("edu");
            aliases.add("education");
        }
    }
 
    if (category) {
        aliases.add(category);
        aliases.add(category.toLowerCase());
        if (category.toLowerCase().includes("computer")) aliases.add("computer");
        if (category.toLowerCase().includes("medicine")) aliases.add("medicine");
        if (category.toLowerCase().includes("engineering")) aliases.add("engineering");
        if (category.toLowerCase().includes("polytechnic")) aliases.add("polytechnic");
    }
 
    if (location) {
        aliases.add(location);
        aliases.add(location.toLowerCase());
    }
 
    return [...aliases].filter(Boolean);
}
 
function getUniversitySearchText(university, id = "") {
    const extra = buildSearchAliases(university, id);
    return normalizeSearchText([
        university.name,
        university.nameMM,
        university.category,
        university.location,
        university.type,
        university.entryTrack,
        university.degree,
        university.minimumRequirement,
        university.entryMarks,
        Array.isArray(university.programs)
            ? university.programs.join(" ")
            : university.programs,
        Array.isArray(university.subjects)
            ? university.subjects.join(" ")
            : university.subjects,
        extra.join(" ")
    ].filter(Boolean).join(" "));
}
 
function scoreUniversitySearch(university, query, id = "") {
    const normalizedQuery = normalizeSearchText(query);
    if (!normalizedQuery) return 0;
 
    const words = normalizedQuery.split(" ").filter(Boolean);
    const name = normalizeSearchText(university.name);
    const category = normalizeSearchText(university.category);
    const location = normalizeSearchText(university.location);
    const aliases = buildSearchAliases(university, id).map(normalizeSearchText).filter(Boolean);
 
    let score = 0;
    let matchedWords = 0;
 
    words.forEach(word => {
        let matched = false;
 
        if (hasTextMatch(name, word)) {
            score += 70;
            matched = true;
        }
 
        if (hasTextMatch(category, word)) {
            score += 55;
            matched = true;
        }
 
        if (hasTextMatch(location, word)) {
            score += 55;
            matched = true;
        }
 
        aliases.forEach(alias => {
            const normalizedAlias = normalizeSearchText(alias);
            if (normalizedAlias === word) {
                score += 100;
                matched = true;
            } else if (normalizedAlias.startsWith(word) || (word.length > 2 && normalizedAlias.includes(word))) {
                score += 45;
                matched = true;
            }
        });
 
        if (matched) {
            matchedWords += 1;
        }
    });
 
    if (matchedWords < words.length) {
        return 0;
    }
 
    if (name === normalizedQuery) {
        score += 250;
    }
 
    if (category === normalizedQuery) {
        score += 180;
    }
 
    if (location === normalizedQuery) {
        score += 180;
    }
 
    if (aliases.includes(normalizedQuery)) {
        score += 300;
    }
 
    return score;
}
 
const majorIcons = {
    Computer: "💻",
    Medicine: "🩺",
    Engineering: "⚙️",
    Business: "📊",
    Arts: "🎨",
    Education: "📚",
    Polytechnic: "🏗️",
    Technology: "🛠️",
    Agriculture: "🌾",
    Veterinary: "🐾",
    Maritime: "⚓",
    Aerospace: "✈️",
    Economics: "💰",
    "Foreign Languages": "🌍",
    General: "🎓",
    Multidisciplinary: "🏛️"
};
 
function getMajorIcon(major) {
    return majorIcons[major] || "🎓";
}
 
function renderSearchResults(number, query) {
    const input = document.getElementById(`uniSearch${number}`);
    const select = document.getElementById(`uni${number}`);
    const results = document.getElementById(`searchResults${number}`);
 
    if (!input || !select || !results) return;
 
    const q = normalizeSearchText(query);
    const otherSelect = number === 1 ? document.getElementById("uni2") : document.getElementById("uni1");
 
    if (!q) {
        results.innerHTML = "";
        results.classList.remove("open");
        return;
    }
 
    const matches = Object.entries(universities)
        .map(([id, university]) => {
            if (otherSelect && otherSelect.value && id === otherSelect.value) {
                return null;
            }
 
            const score = scoreUniversitySearch(university, q, id);
            return score > 0 ? { id, university, score } : null;
        })
        .filter(Boolean)
        .sort((a, b) => b.score - a.score || a.university.name.localeCompare(b.university.name));
 
    results.innerHTML = "";
 
    if (matches.length === 0) {
        const empty = document.createElement("div");
        empty.className = "search-no-result";
        empty.textContent = "No matching university found.";
        results.appendChild(empty);
        results.classList.add("open");
        return;
    }
 
    matches.forEach(({ id, university }) => {
        const button = document.createElement("button");
        button.type = "button";
        button.className = "search-result-item";
        button.setAttribute("role", "option");
 
        const icon = document.createElement("span");
        icon.className = "result-icon";
        icon.textContent = getMajorIcon(university.category);
 
        const info = document.createElement("div");
        info.className = "result-info";
 
        const name = document.createElement("strong");
        name.textContent = university.name;
 
        const meta = document.createElement("span");
        meta.textContent = [university.category, university.location].filter(Boolean).join(" • ");
 
        info.appendChild(name);
        info.appendChild(meta);
        button.appendChild(icon);
        button.appendChild(info);
 
        button.addEventListener("click", function () {
            select.value = id;
            input.value = university.name;
            results.classList.remove("open");
            select.dispatchEvent(new Event("change", { bubbles: true }));
            updateSelectorStatus();
        });
 
        results.appendChild(button);
    });
 
    const resultCount = document.createElement("div");
    resultCount.className = "more-results";
    resultCount.textContent = `${matches.length} university result${matches.length === 1 ? "" : "s"}`;
    results.appendChild(resultCount);
    results.classList.add("open");
}
 
function setupSearchableSelector(number) {
    const input = document.getElementById(`uniSearch${number}`);
    const select = document.getElementById(`uni${number}`);
    const results = document.getElementById(`searchResults${number}`);
 
    if (!input || !select || !results) return;
 
    input.addEventListener("input", function () {
        renderSearchResults(number, input.value);
    });
 
    input.addEventListener("focus", function () {
        renderSearchResults(number, input.value);
    });
 
    select.addEventListener("change", function () {
        const university = universities[select.value];
        input.value = university ? university.name : "";
        results.classList.remove("open");
        updateSelectorStatus();
    });
}
 
function updateSelectorStatus(message) {
    const status = document.getElementById("selectorStatus");
    const select1 = document.getElementById("uni1");
    const select2 = document.getElementById("uni2");
 
    if (!status || !select1 || !select2) return;
 
    if (message && typeof message !== "object") {
        status.textContent = message;
        return;
    }
 
    if (select1.value && select2.value && select1.value === select2.value) {
        status.textContent = "Please select two different universities.";
        return;
    }
 
    const total = Object.keys(universities).length;
    const first = select1.value ? `University 1: ${universities[select1.value].name}` : "University 1 not selected";
    const second = select2.value ? `University 2: ${universities[select2.value].name}` : "University 2 not selected";
 
    status.textContent = `${total} universities available • ${first} • ${second}`;
}
 
function closeSearchResultsWhenClickedOutside() {
    document.addEventListener("click", function (event) {
        [1, 2].forEach(number => {
            const input = document.getElementById(`uniSearch${number}`);
            const results = document.getElementById(`searchResults${number}`);
 
            if (!input || !results) return;
 
            if (!input.parentElement.parentElement.contains(event.target)) {
                results.classList.remove("open");
            }
        });
    });
}
 
 
// =====================================================
// PREVENT SAME UNIVERSITY
// =====================================================
 
function preventSameUniversity() {
 
    const select1 =
        document.getElementById("uni1");
 
    const select2 =
        document.getElementById("uni2");
 
 
    if (!select1 || !select2) {
        return;
    }
 
 
    function updateDisabledOptions() {
 
        const value1 =
            select1.value;
 
        const value2 =
            select2.value;
 
 
        // Disable selected University 1
        // inside University 2
 
        for (const option of select2.options) {
 
            option.disabled =
                option.value !== "" &&
                option.value === value1;
        }
 
 
        // Disable selected University 2
        // inside University 1
 
        for (const option of select1.options) {
 
            option.disabled =
                option.value !== "" &&
                option.value === value2;
        }
    }
 
 
    select1.addEventListener(
        "change",
        updateDisabledOptions
    );
 
    select2.addEventListener(
        "change",
        updateDisabledOptions
    );
}
 
 
// =====================================================
// OPTIONAL: AUTO-COMPARE FROM URL
// Example:
// compare.html?uni1=uit&uni2=ucsy
// =====================================================
 
function loadComparisonFromURL() {
    const params = new URLSearchParams(window.location.search);

    let uni1 = params.get("uni1");
    let uni2 = params.get("uni2");
    let restoreScroll = false;

    if (!uni1 || !uni2) {
        const savedUrl = sessionStorage.getItem("unipathCompareReturnUrl");

        if (savedUrl) {
            const savedQuery = savedUrl.split("?")[1] || "";
            const savedParams = new URLSearchParams(savedQuery);

            uni1 = savedParams.get("uni1");
            uni2 = savedParams.get("uni2");
            restoreScroll = true;
        }
    }

    if (!uni1 || !uni2) return;

    const select1 = document.getElementById("uni1");
    const select2 = document.getElementById("uni2");
    if (!select1 || !select2) return;

    if (universities[uni1] && universities[uni2] && uni1 !== uni2) {
        select1.value = uni1;
        select2.value = uni2;
<<<<<<< Updated upstream
 
        compareUniversities({ scroll: false });
=======

        updateUniversityCard(universities[uni1], 1);
        updateUniversityCard(universities[uni2], 2);

        updateSelectorStatus(
            `Comparing ${universities[uni1].name} and ${universities[uni2].name}.`
        );

        saveComparisonReturnState();
        scheduleComparisonCardSync();

        if (restoreScroll) restoreComparisonScrollPosition();
>>>>>>> Stashed changes
    }
}


// =====================================================
// INITIALIZE
// =====================================================
 
if ("scrollRestoration" in window.history) {
    window.history.scrollRestoration = "manual";
}

document.addEventListener("DOMContentLoaded", function () {
    loadUniversities();
    setupSearchableSelector(1);
    setupSearchableSelector(2);
    preventSameUniversity();
    closeSearchResultsWhenClickedOutside();
    updateSelectorStatus();
    if (!restoreCompareReturnState()) {
        loadComparisonFromURL();
    }
 
    const compareButton = document.getElementById("compareButton");
 
    if (compareButton) {
        compareButton.addEventListener("click", compareUniversities);
    }
 
    const select1 = document.getElementById("uni1");
    const select2 = document.getElementById("uni2");
 
    if (select1) {
        select1.addEventListener("change", updateSelectorStatus);
    }
 
    if (select2) {
        select2.addEventListener("change", updateSelectorStatus);
    }

    window.addEventListener("resize", scheduleComparisonCardSync);
});

<<<<<<< Updated upstream
function restoreCompareReturnState() {
    const rawState = sessionStorage.getItem("compareReturnState");

    if (!rawState) {
        return false;
    }

    let state;
    try {
        state = JSON.parse(rawState);
    } catch (error) {
        sessionStorage.removeItem("compareReturnState");
        return false;
    }

    const select1 = document.getElementById("uni1");
    const select2 = document.getElementById("uni2");
    const scrollY = Number(state.scrollY);

    if (
        !select1 ||
        !select2 ||
        !universities[state.uni1] ||
        !universities[state.uni2] ||
        state.uni1 === state.uni2
    ) {
        sessionStorage.removeItem("compareReturnState");
        return false;
    }

    select1.value = state.uni1;
    select2.value = state.uni2;
    const search1 = document.getElementById("uniSearch1");
    const search2 = document.getElementById("uniSearch2");
    if (search1) search1.value = universities[state.uni1].name;
    if (search2) search2.value = universities[state.uni2].name;
    compareUniversities({ scroll: false });

    sessionStorage.removeItem("compareReturnState");

    if (Number.isFinite(scrollY) && scrollY >= 0) {
        window.setTimeout(function () {
            if (document.activeElement && typeof document.activeElement.blur === "function") {
                document.activeElement.blur();
            }
            const previousScrollBehavior = document.documentElement.style.scrollBehavior;
            document.documentElement.style.scrollBehavior = "auto";
            requestAnimationFrame(function () {
                window.scrollTo(0, scrollY);
                document.documentElement.style.scrollBehavior = previousScrollBehavior;
            });
        }, 100);
    }

    return true;
}

window.addEventListener("pageshow", function (event) {
    if (!event.persisted && !sessionStorage.getItem("compareReturnState")) {
        return;
    }
    restoreCompareReturnState();
});
=======
>>>>>>> Stashed changes
