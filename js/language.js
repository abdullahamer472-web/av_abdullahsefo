// ==========================================
// SEFO Language System
// ==========================================

let currentLanguage = "en";

document.addEventListener("DOMContentLoaded", () => {

    const languageBtn = document.getElementById("languageBtn");
    const languageList = document.querySelector(".language-list");

    // اللغة المحفوظة أو لغة المتصفح
    currentLanguage = localStorage.getItem("language");

    if (!currentLanguage) {

        const browser = navigator.language.toLowerCase();

        if (browser.startsWith("ar")) {

            currentLanguage = "ar";

        } else if (browser.startsWith("tr")) {

            currentLanguage = "tr";

        } else {

            currentLanguage = "en";

        }

    }

    setLanguage(currentLanguage);

    // فتح وإغلاق القائمة
    if (languageBtn && languageList) {

        languageBtn.addEventListener("click", (e) => {

            e.stopPropagation();
            languageList.classList.toggle("active");

        });

        document.addEventListener("click", () => {

            languageList.classList.remove("active");

        });

    }

    // اختيار اللغة
    document.querySelectorAll("[data-language]").forEach(button => {

        button.addEventListener("click", () => {

            setLanguage(button.dataset.language);

        });

    });

});

// روابط السيرة الذاتية بحسب اللغة
const CV_LINKS = {
    en: "assets/cv/Abdullah-Amer-SEFO-EN.pdf",
    ar: "assets/cv/Abdullah-Amer-SEFO-AR.pdf",
    tr: "assets/cv/Abdullah-Amer-SEFO-TR.pdf"
};

function setLanguage(lang){

    currentLanguage = lang;

    localStorage.setItem("language", lang);

    document.documentElement.lang = lang;

    if(lang === "ar"){

        document.documentElement.dir = "rtl";
        document.body.classList.add("ar");

    }else{

        document.documentElement.dir = "ltr";
        document.body.classList.remove("ar");

    }

    // تغيير النصوص

    document.querySelectorAll("[data-lang]").forEach(element => {

        const key = element.dataset.lang;

        if (
            translations[lang] &&
            translations[lang][key]
        ) {

            element.innerHTML = translations[lang][key];

        }

    });

    // تحديث رابط تحميل السيرة الذاتية حسب اللغة المختارة

    const downloadCv = document.getElementById("downloadCv");

    if (downloadCv && CV_LINKS[lang]) {

        downloadCv.setAttribute("href", CV_LINKS[lang]);

    }

}

