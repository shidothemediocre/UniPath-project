// =====================================================
// UNIPATH GLOBAL UNIVERSITY SEARCH
// =====================================================

const universities = [

    // =================================================
    // COMPUTER
    // =================================================

    {
        name: "University of Information Technology",
        major: "Computer",
        location: "Yangon",
        aliases: ["UIT", "IT", "Information Technology", "Computer"],
        page: "html/UIT.html"
    },

    {
        name: "University of Computer Studies (Yangon)",
        major: "Computer",
        location: "Yangon",
        aliases: ["UCSY", "Computer Studies", "CS", "Computer"],
        page: "html/UCSY.html"
    },

    {
        name: "University of Computer Studies (Mandalay)",
        major: "Computer",
        location: "Mandalay",
        aliases: ["UCSM", "Computer Studies", "CS", "Computer"],
        page: "html/UCSM.html"
    },

    {
        name: "Computer University (Mandalay)",
        major: "Computer",
        location: "Mandalay",
        aliases: ["CU Mandalay", "Computer"],
        page: "html/Cumandalay.html"
    },

    {
        name: "Computer University (Meiktila)",
        major: "Computer",
        location: "Meiktila",
        aliases: ["CU Meiktila", "Computer"],
        page: "html/Cumeiktila.html"
    },

    {
        name: "Computer University (Taunggyi)",
        major: "Computer",
        location: "Taunggyi",
        aliases: ["CU Taunggyi", "Computer"],
        page: "html/Cutaunggyi.html"
    },

    {
        name: "Computer University (Monywa)",
        major: "Computer",
        location: "Monywa",
        aliases: ["CU Monywa", "Computer"],
        page: "html/Cumonywa.html"
    },

    {
        name: "Computer University (Magway)",
        major: "Computer",
        location: "Magway",
        aliases: ["CU Magway", "Computer"],
        page: "html/Cumagway.html"
    },

    {
        name: "Computer University (Pathein)",
        major: "Computer",
        location: "Pathein",
        aliases: ["CU Pathein", "Computer"],
        page: "html/Cupathein.html"
    },

    {
        name: "Computer University (Thaton)",
        major: "Computer",
        location: "Thaton",
        aliases: ["CU Thaton", "Computer"],
        page: "html/Cuthaton.html"
    },

    {
        name: "Computer University (Hpa-An)",
        major: "Computer",
        location: "Hpa-An",
        aliases: ["CU Hpa An", "Hpa An", "Computer"],
        page: "html/Cuhpa-an.html"
    },

    {
        name: "Computer University (Sittwe)",
        major: "Computer",
        location: "Sittwe",
        aliases: ["CU Sittwe", "Computer"],
        page: "html/Cusittwe.html"
    },

    {
        name: "Computer University (Loikaw)",
        major: "Computer",
        location: "Loikaw",
        aliases: ["CU Loikaw", "Computer"],
        page: "html/Culoikaw.html"
    },

    {
        name: "Computer University (Taungoo)",
        major: "Computer",
        location: "Taungoo",
        aliases: ["CU Taungoo", "Computer"],
        page: "html/Cutaungoo.html"
    },

    {
        name: "Computer University (Pyay)",
        major: "Computer",
        location: "Pyay",
        aliases: ["CU Pyay", "Computer"],
        page: "html/Cupyay.html"
    },

    {
        name: "Computer University (Pakokku)",
        major: "Computer",
        location: "Pakokku",
        aliases: ["CU Pakokku", "Computer"],
        page: "html/Cupakokku.html"
    },

    {
        name: "Computer University (Kalay)",
        major: "Computer",
        location: "Kalay",
        aliases: ["CU Kalay", "Computer"],
        page: "html/Cukalay.html"
    },

    {
        name: "Computer University (Hinthada)",
        major: "Computer",
        location: "Hinthada",
        aliases: ["CU Hinthada", "Computer"],
        page: "html/Cuhinthada.html"
    },


    // =================================================
    // MEDICINE
    // =================================================

    {
        name: "University of Medicine (1), Yangon",
        major: "Medicine",
        location: "Yangon",
        aliases: ["UM1", "UM 1", "Medicine", "Medical"],
        page: "html/UM1.html"
    },

    {
        name: "University of Medicine (2), Yangon",
        major: "Medicine",
        location: "Yangon",
        aliases: ["UM2", "UM 2", "Medicine", "Medical"],
        page: "html/UM2.html"
    },

    {
        name: "University of Medicine, Mandalay",
        major: "Medicine",
        location: "Mandalay",
        aliases: ["Medicine", "Medical"],
        page: "html/Medicine.html"
    },

    {
        name: "University of Dentistry, Yangon",
        major: "Medicine",
        location: "Yangon",
        aliases: ["Dentistry", "Dental", "Medicine", "Medical"],
        page: "html/Medicine.html"
    },

    {
        name: "University of Dentistry, Mandalay",
        major: "Medicine",
        location: "Mandalay",
        aliases: ["Dentistry", "Dental", "Medicine", "Medical"],
        page: "html/Medicine.html"
    },

    {
        name: "University of Pharmacy, Yangon",
        major: "Medicine",
        location: "Yangon",
        aliases: ["Pharmacy", "Medicine", "Medical"],
        page: "html/Medicine.html"
    },

    {
        name: "University of Pharmacy, Mandalay",
        major: "Medicine",
        location: "Mandalay",
        aliases: ["Pharmacy", "Medicine", "Medical"],
        page: "html/Medicine.html"
    },

    {
        name: "University of Nursing, Yangon",
        major: "Medicine",
        location: "Yangon",
        aliases: ["Nursing", "Medicine", "Medical"],
        page: "html/Medicine.html"
    },

    {
        name: "University of Nursing, Mandalay",
        major: "Medicine",
        location: "Mandalay",
        aliases: ["Nursing", "Medicine", "Medical"],
        page: "html/Medicine.html"
    },

    {
        name: "University of Medical Technology, Yangon",
        major: "Medicine",
        location: "Yangon",
        aliases: ["Medical Technology", "Medicine", "Medical"],
        page: "html/Medicine.html"
    },

    {
        name: "University of Medical Technology, Mandalay",
        major: "Medicine",
        location: "Mandalay",
        aliases: ["Medical Technology", "Medicine", "Medical"],
        page: "html/Medicine.html"
    },

    {
        name: "University of Traditional Medicine, Mandalay",
        major: "Medicine",
        location: "Mandalay",
        aliases: ["Traditional Medicine", "Medicine", "Medical"],
        page: "html/Medicine.html"
    },


    // =================================================
    // ENGINEERING
    // =================================================

    {
        name: "Yangon Technological University (YTU)",
        major: "Engineering",
        location: "Yangon",
        aliases: ["YTU", "Technology", "Technological", "Engineering"],
        page: "html/YTU.html"
    },

    {
        name: "Mandalay Technological University (MTU)",
        major: "Engineering",
        location: "Mandalay",
        aliases: ["MTU", "Technology", "Technological", "Engineering"],
        page: "html/MTU.html"
    },

    {
        name: "Technological University (Hmawbi)",
        major: "Engineering",
        location: "Hmawbi",
        aliases: ["TU Hmawbi", "Technology", "Engineering"],
        page: "html/TU-Hmawbi.html"
    },

    {
        name: "Technological University (Mawlamyine)",
        major: "Engineering",
        location: "Mawlamyine",
        aliases: ["TU Mawlamyine", "Technology", "Engineering"],
        page: "html/TU-Mawlamyine.html"
    },

    {
        name: "Technological University (Taunggyi)",
        major: "Engineering",
        location: "Taunggyi",
        aliases: ["TU Taunggyi", "Technology", "Engineering"],
        page: "html/TU-Taunggyi.html"
    },

    {
        name: "Technological University (Monywa)",
        major: "Engineering",
        location: "Monywa",
        aliases: ["TU Monywa", "Technology", "Engineering"],
        page: "html/TU-Monywa.html"
    },

    {
        name: "Technological University (Meiktila)",
        major: "Engineering",
        location: "Meiktila",
        aliases: ["TU Meiktila", "Technology", "Engineering"],
        page: "html/TU-Meiktila.html"
    },

    {
        name: "Technological University (Pakokku)",
        major: "Engineering",
        location: "Pakokku",
        aliases: ["TU Pakokku", "Technology", "Engineering"],
        page: "html/TU-Pakokku.html"
    },

    {
        name: "Technological University (Pyay)",
        major: "Engineering",
        location: "Pyay",
        aliases: ["TU Pyay", "Technology", "Engineering"],
        page: "html/TU-Pyay.html"
    },

    {
        name: "Technological University (Kyaukse)",
        major: "Engineering",
        location: "Kyaukse",
        aliases: ["TU Kyaukse", "Technology", "Engineering"],
        page: "html/TU-Kyaukse.html"
    },

    {
        name: "Technological University (Lashio)",
        major: "Engineering",
        location: "Lashio",
        aliases: ["TU Lashio", "Technology", "Engineering"],
        page: "html/TU-Lashio.html"
    },

    {
        name: "Technological University (Kalay)",
        major: "Engineering",
        location: "Kalay",
        aliases: ["TU Kalay", "Technology", "Engineering"],
        page: "html/TU-Kalay.html"
    },

    {
        name: "Technological University (Sittwe)",
        major: "Engineering",
        location: "Sittwe",
        aliases: ["TU Sittwe", "Technology", "Engineering"],
        page: "html/TU-Sittwe.html"
    },

    {
        name: "Technological University (Dawei)",
        major: "Engineering",
        location: "Dawei",
        aliases: ["TU Dawei", "Technology", "Engineering"],
        page: "html/TU-Dawei.html"
    },

    {
        name: "Technological University (Loikaw)",
        major: "Engineering",
        location: "Loikaw",
        aliases: ["TU Loikaw", "Technology", "Engineering"],
        page: "html/TU-Loikaw.html"
    },

    {
        name: "Technological University (Myeik)",
        major: "Engineering",
        location: "Myeik",
        aliases: ["TU Myeik", "Technology", "Engineering"],
        page: "html/TU-Myeik.html"
    },

    {
        name: "Technological University (Hpa-An)",
        major: "Engineering",
        location: "Hpa-An",
        aliases: ["TU Hpa An", "Technology", "Engineering"],
        page: "html/TU-HpaAn.html"
    },

    {
        name: "Technological University (Banmaw)",
        major: "Engineering",
        location: "Banmaw",
        aliases: ["TU Banmaw", "Technology", "Engineering"],
        page: "html/TU-Banmaw.html"
    },

    {
        name: "Technological University (Pathein)",
        major: "Engineering",
        location: "Pathein",
        aliases: ["TU Pathein", "Technology", "Engineering"],
        page: "html/TU-Pathein.html"
    },

    {
        name: "Technological University (Magway)",
        major: "Engineering",
        location: "Magway",
        aliases: ["TU Magway", "Technology", "Engineering"],
        page: "html/TU-Magway.html"
    },

    {
        name: "Technological University (Mandalay)",
        major: "Engineering",
        location: "Mandalay",
        aliases: ["TU Mandalay", "Technology", "Engineering"],
        page: "html/TU-Mandalay.html"
    },

    {
        name: "Technological University (Thanlyin)",
        major: "Engineering",
        location: "Thanlyin",
        aliases: ["TU Thanlyin", "Technology", "Engineering"],
        page: "html/TU-Thanlyin.html"
    },

    {
        name: "Technological University (Yenangyaung)",
        major: "Engineering",
        location: "Yenangyaung",
        aliases: ["TU Yenangyaung", "Technology", "Engineering"],
        page: "html/TU-Yenangyaung.html"
    },

    {
        name: "Technological University (Taungoo)",
        major: "Engineering",
        location: "Taungoo",
        aliases: ["TU Taungoo", "Technology", "Engineering"],
        page: "html/TU-Taungoo.html"
    },

    {
        name: "Technological University (Kyaing Tong)",
        major: "Engineering",
        location: "Kyaing Tong",
        aliases: ["TU Kyaing Tong", "Technology", "Engineering"],
        page: "html/TU-KyaingTong.html"
    },

    {
        name: "Technological University (Hakha)",
        major: "Engineering",
        location: "Hakha",
        aliases: ["TU Hakha", "Technology", "Engineering"],
        page: "html/TU-Hakha.html"
    },

    {
        name: "Technological University (Shwebo)",
        major: "Engineering",
        location: "Shwebo",
        aliases: ["TU Shwebo", "Technology", "Engineering"],
        page: "html/TU-Shwebo.html"
    },

    {
        name: "Technological University (Myitkyina)",
        major: "Engineering",
        location: "Myitkyina",
        aliases: ["TU Myitkyina", "Technology", "Engineering"],
        page: "html/TU-Myitkyina.html"
    },

    {
        name: "Technological University (Bago)",
        major: "Engineering",
        location: "Bago",
        aliases: ["TU Bago", "Technology", "Engineering"],
        page: "html/TU-Bago.html"
    },

    {
        name: "Technological University (Sagaing)",
        major: "Engineering",
        location: "Sagaing",
        aliases: ["TU Sagaing", "Technology", "Engineering"],
        page: "html/TU-Sagaing.html"
    },


    // =================================================
    // BUSINESS
    // =================================================

    {
        name: "Yangon University of Economics",
        major: "Business",
        location: "Yangon",
        aliases: ["YUE", "Economics", "Business", "Economy"],
        page: "html/YUE.html"
    },

    {
        name: "Mandalay University of Economics",
        major: "Business",
        location: "Mandalay",
        aliases: ["MUE", "Economics", "Business", "Economy"],
        page: "html/MUE.html"
    },

    {
        name: "Myeik University of Economics",
        major: "Business",
        location: "Myeik",
        aliases: ["Myeik Economics", "Economics", "Business"],
        page: "html/MyeikUE.html"
    },

    {
        name: "Meiktila University of Economics",
        major: "Business",
        location: "Meiktila",
        aliases: ["Meiktila Economics", "Economics", "Business"],
        page: "html/MeiktilaUE.html"
    },

    {
        name: "Taunggyi University of Economics",
        major: "Business",
        location: "Taunggyi",
        aliases: ["Taunggyi Economics", "Economics", "Business"],
        page: "html/TaunggyiUE.html"
    },

    {
        name: "Pakokku University of Economics",
        major: "Business",
        location: "Pakokku",
        aliases: ["Pakokku Economics", "Economics", "Business"],
        page: "html/PakokkuUE.html"
    },

    {
        name: "Magway University of Economics",
        major: "Business",
        location: "Magway",
        aliases: ["Magway Economics", "Economics", "Business"],
        page: "html/MagwayUE.html"
    },

    {
        name: "Hinthada University of Economics",
        major: "Business",
        location: "Hinthada",
        aliases: ["Hinthada Economics", "Economics", "Business"],
        page: "html/HinthadaUE.html"
    },

    {
        name: "Monywa University of Economics",
        major: "Business",
        location: "Monywa",
        aliases: ["Monywa Economics", "Economics", "Business"],
        page: "html/MonywaUE.html"
    },

    {
        name: "Pathein University of Economics",
        major: "Business",
        location: "Pathein",
        aliases: ["Pathein Economics", "Economics", "Business"],
        page: "html/PatheinUE.html"
    },


    // =================================================
    // ARTS
    // =================================================

    {
        name: "National University of Arts and Culture (Yangon)",
        major: "Arts",
        location: "Yangon",
        aliases: ["NSSU", "Arts", "Culture", "Art"],
        page: "html/NSSU.html"
    },

    {
        name: "National University of Arts and Culture (Mandalay)",
        major: "Arts",
        location: "Mandalay",
        aliases: ["NSAC", "Arts", "Culture", "Art"],
        page: "html/NSAC.html"
    },


    // =================================================
    // EDUCATION
    // =================================================

    {
        name: "Yangon University of Education",
        major: "Education",
        location: "Yangon",
        aliases: ["YUOE", "Education", "Teaching"],
        page: "html/YUOE.html"
    },

    {
        name: "Sagaing University of Education",
        major: "Education",
        location: "Sagaing",
        aliases: ["SUOE", "Education", "Teaching"],
        page: "html/SUOE.html"
    },

    {
        name: "University for the Development of the National Races",
        major: "Education",
        location: "Yangon",
        aliases: ["UDNR", "Education", "Teaching"],
        page: "html/UDNR.html"
    },

    {
        name: "Mandalay Education Degree College",
        major: "Education",
        location: "Mandalay",
        aliases: ["Mandalay EDC", "Education", "Teaching"],
        page: "html/MandalayEDC.html"
    },

    {
        name: "Pakokku Education Degree College",
        major: "Education",
        location: "Pakokku",
        aliases: ["Pakokku EDC", "Education", "Teaching"],
        page: "html/PakokkuEDC.html"
    },

    {
        name: "Sagaing Education Degree College",
        major: "Education",
        location: "Sagaing",
        aliases: ["Sagaing EDC", "Education", "Teaching"],
        page: "html/SagaingEDC.html"
    },

    {
        name: "Monywa Education Degree College",
        major: "Education",
        location: "Monywa",
        aliases: ["Monywa EDC", "Education", "Teaching"],
        page: "html/MonywaEDC.html"
    },

    {
        name: "Magway Education Degree College",
        major: "Education",
        location: "Magway",
        aliases: ["Magway EDC", "Education", "Teaching"],
        page: "html/MagwayEDC.html"
    },

    {
        name: "Meiktila Education Degree College",
        major: "Education",
        location: "Meiktila",
        aliases: ["Meiktila EDC", "Education", "Teaching"],
        page: "html/MeiktilaEDC.html"
    },

    {
        name: "Myitkyina Education Degree College",
        major: "Education",
        location: "Myitkyina",
        aliases: ["Myitkyina EDC", "Education", "Teaching"],
        page: "html/MyitkyinaEDC.html"
    },

    {
        name: "Taunggyi Education Degree College",
        major: "Education",
        location: "Taunggyi",
        aliases: ["Taunggyi EDC", "Education", "Teaching"],
        page: "html/TaunggyiEDC.html"
    },

    {
        name: "Lashio Education Degree College",
        major: "Education",
        location: "Lashio",
        aliases: ["Lashio EDC", "Education", "Teaching"],
        page: "html/LashioEDC.html"
    },

    {
        name: "Loikaw Education Degree College",
        major: "Education",
        location: "Loikaw",
        aliases: ["Loikaw EDC", "Education", "Teaching"],
        page: "html/LoikawEDC.html"
    },

    {
        name: "Katha Education Degree College",
        major: "Education",
        location: "Katha",
        aliases: ["Katha EDC", "Education", "Teaching"],
        page: "html/KathaEDC.html"
    },

    {
        name: "Hakha Education Degree College",
        major: "Education",
        location: "Hakha",
        aliases: ["Hakha EDC", "Education", "Teaching"],
        page: "html/HakhaEDC.html"
    },

    {
        name: "Kengtung Education Degree College",
        major: "Education",
        location: "Kengtung",
        aliases: ["Kengtung EDC", "Education", "Teaching"],
        page: "html/KengtungEDC.html"
    },

    {
        name: "Taungoo Education Degree College",
        major: "Education",
        location: "Taungoo",
        aliases: ["Taungoo EDC", "Education", "Teaching"],
        page: "html/TaungooEDC.html"
    },

    {
        name: "Yankin Education Degree College",
        major: "Education",
        location: "Yankin",
        aliases: ["Yankin EDC", "Education", "Teaching"],
        page: "html/YankinEDC.html"
    },

    {
        name: "Thingangyun Education Degree College",
        major: "Education",
        location: "Thingangyun",
        aliases: ["Thingangyun EDC", "Education", "Teaching"],
        page: "html/ThingangyunEDC.html"
    },

    {
        name: "Mawlamyine Education Degree College",
        major: "Education",
        location: "Mawlamyine",
        aliases: ["Mawlamyine EDC", "Education", "Teaching"],
        page: "html/MawlamyineEDC.html"
    },

    {
        name: "Hlegu Education Degree College",
        major: "Education",
        location: "Hlegu",
        aliases: ["Hlegu EDC", "Education", "Teaching"],
        page: "html/HleguEDC.html"
    },

    {
        name: "Dawei Education Degree College",
        major: "Education",
        location: "Dawei",
        aliases: ["Dawei EDC", "Education", "Teaching"],
        page: "html/DaweiEDC.html"
    },

    {
        name: "Pyay Education Degree College",
        major: "Education",
        location: "Pyay",
        aliases: ["Pyay EDC", "Education", "Teaching"],
        page: "html/PyayEDC.html"
    },

    {
        name: "Kyaukphyu Education Degree College",
        major: "Education",
        location: "Kyaukphyu",
        aliases: ["Kyaukphyu EDC", "Education", "Teaching"],
        page: "html/KyaukphyuEDC.html"
    },

    {
        name: "Pathein Education Degree College",
        major: "Education",
        location: "Pathein",
        aliases: ["Pathein EDC", "Education", "Teaching"],
        page: "html/PatheinEDC.html"
    },

    {
        name: "Bogalay Education Degree College",
        major: "Education",
        location: "Bogalay",
        aliases: ["Bogalay EDC", "Education", "Teaching"],
        page: "html/BogalayEDC.html"
    },

    {
        name: "Myaungmya Education Degree College",
        major: "Education",
        location: "Myaungmya",
        aliases: ["Myaungmya EDC", "Education", "Teaching"],
        page: "html/MyaungmyaEDC.html"
    },

    {
        name: "Hpa-An Education Degree College",
        major: "Education",
        location: "Hpa-An",
        aliases: ["Hpa An EDC", "Education", "Teaching"],
        page: "html/HpaAnEDC.html"
    },

    {
        name: "Sittwe Education Degree College",
        major: "Education",
        location: "Sittwe",
        aliases: ["Sittwe EDC", "Education", "Teaching"],
        page: "html/SittweEDC.html"
    },

    {
        name: "Bhamo Education Degree College",
        major: "Education",
        location: "Bhamo",
        aliases: ["Bhamo EDC", "Education", "Teaching"],
        page: "html/BhamoEDC.html"
    },


    // =================================================
    // POLYTECHNIC
    // =================================================

    {
        name: "Naypyitaw State Polytechnic University",
        major: "Polytechnic",
        location: "Naypyitaw",
        aliases: ["NSPU", "Poly", "Polytechnic", "Technology"],
        page: "html/NSPU.html"
    },

    {
        name: "Polytechnic University (Bhamo)",
        major: "Polytechnic",
        location: "Bhamo",
        aliases: ["Bhamo PU", "Poly", "Polytechnic"],
        page: "html/BhamoPU.html"
    },

    {
        name: "Polytechnic University (Lashio)",
        major: "Polytechnic",
        location: "Lashio",
        aliases: ["Lashio PU", "Poly", "Polytechnic"],
        page: "html/LashioPU.html"
    },

    {
        name: "Polytechnic University (Panglong)",
        major: "Polytechnic",
        location: "Panglong",
        aliases: ["Panglong PU", "Poly", "Polytechnic"],
        page: "html/PanglongPU.html"
    },

    {
        name: "Polytechnic University (Kengtung)",
        major: "Polytechnic",
        location: "Kengtung",
        aliases: ["Kengtung PU", "Poly", "Polytechnic"],
        page: "html/KengtungPU.html"
    },

    {
        name: "Polytechnic University (Dawei)",
        major: "Polytechnic",
        location: "Dawei",
        aliases: ["Dawei PU", "Poly", "Polytechnic"],
        page: "html/DaweiPU.html"
    },

    {
        name: "Polytechnic University (Myeik)",
        major: "Polytechnic",
        location: "Myeik",
        aliases: ["Myeik PU", "Poly", "Polytechnic"],
        page: "html/MyeikPU.html"
    },

    {
        name: "Polytechnic University (Maubin)",
        major: "Polytechnic",
        location: "Maubin",
        aliases: ["Maubin PU", "Poly", "Polytechnic"],
        page: "html/MaubinPU.html"
    },

    {
        name: "Polytechnic University (Myitkyina)",
        major: "Polytechnic",
        location: "Myitkyina",
        aliases: ["Myitkyina PU", "Poly", "Polytechnic"],
        page: "html/MyitkyinaPU.html"
    }

];

// =====================================================
// UNIPATH GLOBAL UNIVERSITY SEARCH
// =====================================================

(function () {

    function initUniPathSearch() {

        // =================================================
        // GET SEARCH ELEMENTS
        // =================================================

        const searchInput = document.getElementById("globalSearch");
        const searchBtn = document.getElementById("searchBtn");
        const searchResults = document.getElementById("searchResults");

        if (!searchInput || !searchBtn || !searchResults) {
            console.error(
                "UniPath Search Error: #globalSearch, #searchBtn, or #searchResults was not found."
            );
            return;
        }

        // =================================================
        // MAJOR ICONS
        // Each major has its own icon.
        // =================================================

        const majorIcons = {
            Computer: "💻",
            Medicine: "🩺",
            Engineering: "⚙️",
            Business: "📊",
            Arts: "🎨",
            Education: "📚",
            Polytechnic: "🏗️"
        };

        function getMajorIcon(major) {
            return majorIcons[major] || "🎓";
        }

        // =================================================
        // NORMALIZE TEXT
        // Makes search case-insensitive and tolerant of
        // punctuation, brackets, hyphens and extra spaces.
        // =================================================

        function normalize(text) {
            return String(text || "")
                .toLowerCase()
                .trim()
                .replace(/[()]/g, " ")
                .replace(/[-–—]/g, " ")
                .replace(/[.,/]/g, " ")
                .replace(/\s+/g, " ");
        }

        // =================================================
        // SEARCH UNIVERSITIES
        // Supports:
        // 1. University name
        // 2. Major
        // 3. Location / region
        // 4. Alias / abbreviation
        // 5. Short search terms
        // =================================================

        function searchUniversities(query) {

            const normalizedQuery = normalize(query);

            if (!normalizedQuery) {
                return [];
            }

            const words = normalizedQuery
                .split(" ")
                .filter(Boolean);

            return universities
                .map((university, index) => {

                    const name = normalize(university.name);
                    const major = normalize(university.major);
                    const location = normalize(university.location);

                    const aliasList = Array.isArray(university.aliases)
                        ? university.aliases.map(normalize)
                        : [];

                    const aliases = aliasList.join(" ");

                    let score = 0;
                    let matchedWords = 0;

                    // -----------------------------------------
                    // SCORE EVERY SEARCH WORD
                    // -----------------------------------------

                    words.forEach(word => {

                        let wordMatched = false;

                        // Exact/partial university name match
                        if (name.includes(word)) {
                            score += 70;
                            wordMatched = true;
                        }

                        // Major match
                        if (major.includes(word)) {
                            score += 55;
                            wordMatched = true;
                        }

                        // Location / region match
                        if (location.includes(word)) {
                            score += 55;
                            wordMatched = true;
                        }

                        // Alias / abbreviation match
                        aliasList.forEach(alias => {

                            if (alias === word) {
                                score += 100;
                                wordMatched = true;
                            } else if (alias.includes(word)) {
                                score += 45;
                                wordMatched = true;
                            }

                        });

                        if (wordMatched) {
                            matchedWords++;
                        }

                    });

                    // -----------------------------------------
                    // REQUIRE EVERY SEARCH WORD TO MATCH
                    // This prevents unrelated universities from
                    // appearing for multi-word searches.
                    // -----------------------------------------

                    if (matchedWords < words.length) {
                        score = 0;
                    }

                    // -----------------------------------------
                    // STRONG EXACT MATCH BONUSES
                    // -----------------------------------------

                    if (name === normalizedQuery) {
                        score += 250;
                    }

                    if (major === normalizedQuery) {
                        score += 180;
                    }

                    if (location === normalizedQuery) {
                        score += 180;
                    }

                    if (aliasList.includes(normalizedQuery)) {
                        score += 300;
                    }

                    return {
                        university,
                        score,
                        index
                    };

                })
                .filter(item => item.score > 0)
                .sort((a, b) => {

                    if (b.score !== a.score) {
                        return b.score - a.score;
                    }

                    return a.index - b.index;

                })
                .map(item => item.university);
        }

        // =================================================
        // GET ICON CLASS
        // Used by CSS for major-specific styling.
        // =================================================

        function getMajorClass(major) {
            return "major-" +
                normalize(major)
                    .replace(/\s+/g, "-")
                    .replace(/[^a-z0-9-]/g, "");
        }

        // =================================================
        // DISPLAY SEARCH RESULTS
        // =================================================

        function displayResults(query) {

            searchResults.innerHTML = "";

            const cleanQuery = String(query || "").trim();

            // Empty search = hide suggestions
            if (!cleanQuery) {
                searchResults.style.display = "none";
                return [];
            }

            const results = searchUniversities(cleanQuery);

            searchResults.style.display = "block";

            // -----------------------------------------
            // NO RESULTS
            // -----------------------------------------

            if (results.length === 0) {

                const noResults = document.createElement("div");

                noResults.className = "no-results";

                noResults.innerHTML = `
                    <div class="no-results-icon">⌕</div>
                    <strong>No universities found</strong>
                    <p>
                        Try a university name, abbreviation,
                        major, or location.
                    </p>
                `;

                searchResults.appendChild(noResults);

                return results;
            }

            // -----------------------------------------
            // ALL MATCHING RESULTS
            // CSS handles scrolling when there are many.
            // -----------------------------------------

            results.forEach(university => {

                const resultItem = document.createElement("a");

                resultItem.className =
                    "search-result-item " +
                    getMajorClass(university.major);

                resultItem.href = university.page || "#";
                resultItem.setAttribute("role", "option");
                resultItem.setAttribute(
                    "aria-label",
                    `${university.name}, ${university.major}, ${university.location}`
                );

                // -----------------------------------------
                // UNIQUE MAJOR ICON
                // -----------------------------------------

                const icon = document.createElement("div");

                icon.className =
                    "result-icon " +
                    getMajorClass(university.major);

                icon.textContent = getMajorIcon(university.major);

                // -----------------------------------------
                // UNIVERSITY INFORMATION
                // -----------------------------------------

                const info = document.createElement("div");

                info.className = "result-info";

                const name = document.createElement("strong");
                name.textContent = university.name;

                const details = document.createElement("span");

                const major = university.major || "University";
                const location = university.location || "Myanmar";

                details.textContent =
                    `${major} • ${location}`;

                info.appendChild(name);
                info.appendChild(details);

                resultItem.appendChild(icon);
                resultItem.appendChild(info);

                searchResults.appendChild(resultItem);

            });

            // -----------------------------------------
            // RESULT COUNT
            // -----------------------------------------

            const resultCount = document.createElement("div");

            resultCount.className = "more-results";

            resultCount.textContent =
                `${results.length} university result${results.length === 1 ? "" : "s"}`;

            searchResults.appendChild(resultCount);

            return results;
        }

        // =================================================
        // PERFORM SEARCH
        // Search button and Enter use the SAME function.
        // =================================================

        function performSearch() {

            const query = searchInput.value.trim();

            if (!query) {
                searchResults.style.display = "none";
                searchInput.focus();
                return;
            }

            const results = searchUniversities(query);

            // One clear match -> open it immediately.
            if (results.length === 1 && results[0].page) {
                window.location.href = results[0].page;
                return;
            }

            // Multiple matches -> show the suggestion list.
            displayResults(query);
        }

        // =================================================
        // LIVE SEARCH
        // Suggestions appear ONLY when something is typed.
        // =================================================

        searchInput.addEventListener("input", function () {
            displayResults(this.value);
        });

        // =================================================
        // SEARCH BUTTON
        // =================================================

        searchBtn.addEventListener("click", function (event) {
            event.preventDefault();
            performSearch();
        });

        // =================================================
        // ENTER KEY
        // Works on desktop keyboard and inside the input.
        // =================================================

        searchInput.addEventListener("keydown", function (event) {

            if (event.key === "Enter") {
                event.preventDefault();
                performSearch();
            }

            if (event.key === "Escape") {
                event.preventDefault();
                searchResults.style.display = "none";
                searchInput.blur();
            }

        });

        // =================================================
        // CLICK OUTSIDE SEARCH
        // =================================================

        document.addEventListener("click", function (event) {

            if (!event.target.closest(".search-container")) {
                searchResults.style.display = "none";
            }

        });

        // =================================================
        // CLICK A SUGGESTION
        // The anchor's href performs the navigation.
        // =================================================

        searchResults.addEventListener("click", function (event) {

            const result = event.target.closest(".search-result-item");

            if (result) {
                searchResults.style.display = "none";
            }

        });

        // =================================================
        // INITIAL STATE
        // =================================================

        searchResults.style.display = "none";

        console.log("UniPath university search initialized successfully.");

    }

    // =====================================================
    // DOM READY
    // Works whether this script is loaded in <head> or
    // just before </body>.
    // =====================================================

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", initUniPathSearch);
    } else {
        initUniPathSearch();
    }

})();
