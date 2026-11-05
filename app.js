/* CMEHA public website — design proposal for client review (standalone static build: no server, database or CMS).
   Sections with no published CMS content fall back to clearly labelled SAMPLE PREVIEW content.
   (Original header follows.) CMEHA public website — DESIGN PROTOTYPE v2.
   All headlines, descriptions, dates and illustrations of programs/news are SAMPLE content for design review.
   Language strategy: UI, navigation, headings and category names exist in EN and Khmer (draft Khmer, needs native review).
   Sample body copy exists in English only; in Khmer mode it is shown in English (marked lang="en") and a single
   notice explains this. No machine translation is claimed. */
const ORG = "Cambodian Muslim Education and Humanitarian Association";
// Khmer name exactly as written on the CMEHA logo.
const ORG_KM = "សមាគមអប់រំ និងមនុស្សធម៌មុស្លិមកម្ពុជា";
const orgName = () => (lang === "km" ? ORG_KM : ORG);
const EMAILS = ["info@cmeha-cambodia.org"]; // the single official public contact address
const PAGE = document.body.dataset.page;
// site-mode.js sets window.SITE_MODE: "preview" (default: design-preview banner, footer wording and title suffix) or "live" (written by the production build).
const LIVE = window.SITE_MODE === "live";
/* Built-in sample content (sample news, events, gallery, proposed program areas) is only for the design preview. In live mode a section without
   published CMS content shows an empty state instead. */
const SAMPLES = !LIVE;
const DEMO = window.SITE_MODE === "demo"; // client-review build: standalone, no network requests, no development wording
const Q = new URLSearchParams(location.search);
const STATIC = Q.has("static");
if (!STATIC) document.documentElement.classList.add("js");

const I = {
  book: "M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2zM4 19a2 2 0 0 1 2-2h13", heart: "M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.5A4 4 0 0 1 19 10c0 5.600-7 10-7 10z",
  users: "M16 20v-1a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v1M9.500 11a3.500 3.500 0 1 0 0-7 3.500 3.500 0 0 0 0 7zM21 20v-1a4 4 0 0 0-3-3.800M16 4.200a3.500 3.500 0 0 1 0 6.600",
  mail: "M3 6h18v12H3zM3 7l9 6 9-6", pin: "M12 21s7-6.100 7-11a7 7 0 1 0-14 0c0 4.900 7 11 7 11zM12 12a2.500 2.500 0 1 0 0-5 2.500 2.500 0 0 0 0 5z",
  phone: "M5 4h4l2 5-2.500 1.500a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A15 15 0 0 1 3 6a2 2 0 0 1 2-2z",
  cal: "M4 6h16v14H4zM4 10h16M8 3v4M16 3v4", arrow: "M5 12h14M13 6l6 6-6 6", search: "M11 18a7 7 0 1 0 0-14 7 7 0 0 0 0 14zM21 21l-5-5",
  x: "M6 6l12 12M18 6L6 18", chev: "M6 9l6 6 6-6", left: "M15 6l-6 6 6 6", right: "M9 6l6 6-6 6", menu: "M4 7h16M4 12h16M4 17h16",
  eye: "M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12zM12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z", hand: "M7 12l4 4 6-6M3 12a9 9 0 1 0 18 0 9 9 0 0 0-18 0",
  cap: "M2 9l10-5 10 5-10 5zM6 11v5c3 2.500 9 2.500 12 0v-5", shield: "M12 3l8 3v6c0 5-3.500 8-8 9-4.500-1-8-4-8-9V6z", spark: "M12 3l2 6 6 2-6 2-2 6-2-6-6-2 6-2z", chat: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z"
};
const ic = (n, c = "") => `<svg class="ico ${c}" viewBox="0 0 24 24" aria-hidden="true"><path d="${I[n]}"/></svg>`;

/* ---------------- text ---------------- */
const T = {
  en: {
    note: "<b>Design preview</b> — the organization profile (about, vision, mission, targets, membership and logo meaning) is the official text supplied by CMEHA. News, events, photographs and program details are still samples for client review. Not the official CMEHA website.",
    noteKm: " Sample body text is shown in English until approved Khmer text is supplied.",
    skip: "Skip to content", previewNote: "Sample preview content — nothing has been published in the CMS for this section yet.", samplePhoto: "Sample photograph — not CMEHA", credits: "Photo credits", menu: "Menu", home: "Home", about: "About", programs: "Programs & Projects", news: "News & Events", gallery: "Gallery", contact: "Contact",
    allPrograms: "All programs",
    heroEy: "Education · Humanity · Community", heroH: "Education and knowledge for a <em>prosperous</em> and progressive society", heroP: "CMEHA is a Cambodian non-governmental organization working in education and humanitarian activities.",
    c1: "Explore programs", c2: "Contact us", seal: "Cambodian Muslim Education and Humanitarian Association",
    abEy: "About CMEHA", abH: "A Cambodian association for education and humanitarian work", abP1: "",
    abP2: "", mission: "Mission", vision: "Vision",
    mShort: "Raising funds for education and scholarships, developing human resources, and working with schools and communities on educational and humanitarian programs.", vShort: "To create a prosperous and progressive society through education and knowledge.", learn: "Learn more about CMEHA",
    prEy: "Programs & Projects", prH: "Where the work happens", prP: "Proposed program areas, drawn from CMEHA’s mission. They become active programs once CMEHA confirms them.",
    allProg: "View all programs", actEy: "Community life", actH: "Moments from the community", actP: "An editorial photo layout for approved activity photographs.",
    h1t: "Learning together", h1d: "Classes, workshops and study support.", h2t: "Helping neighbours", h2d: "Practical help organised with care.", h3t: "Growing together", h3d: "Youth and community gatherings.",
    nwEy: "News & Events", nwH: "Latest from CMEHA", nwP: "Announcements, activity reports and upcoming events.", allNews: "All news and events",
    ctaH: "Questions, partnership or volunteering?", ctaP: "Write to the association. We read every message.", emailUs: "Email us", contactPage: "Contact page",
    readMore: "Read more", featured: "Featured", close: "Close", prev: "Previous", next: "Next", all: "All",
    cat: { education: "Education", humanitarian: "Humanitarian Assistance", community: "Community", "community-education": "Community Education", scholarships: "Scholarships", "hr-development": "Human Resource Development", other: "More programs", project: "Projects" },
    catD: { education: "Education programs.", humanitarian: "Assistance for victims, people who are sick, and orphans.", community: "Community programs.", "community-education": "Education programs prepared with schools and communities.", scholarships: "Student scholarship programs in Cambodia and overseas.", "hr-development": "Training and strengthening the abilities of the younger generation.", other: "More programs of the association.", project: "Individual projects of the association." },
    ty: { news: "News", event: "Event" }, sample: "Sample",
    abPh: "About us", abPhH: "Education and humanity, together", abPhP: "A sample introduction to the association for the About page. Official background and history will be added after confirmation by CMEHA.",
    story: "Story", storyH: "How the association is presented", storyP: "This area is designed for the association’s official background: who started it, why, and how it serves the community. Sample paragraphs keep the page balanced while the real text is being prepared.",
    storyP2: "Photos, key dates and milestones can be added by the CMS once approved. Until then, nothing here should be read as a statement of fact about CMEHA.",
    focus: "Focus areas", values: "What guides the work", v1: "Learning", v1d: "Education as the foundation for a strong community.", v2: "Compassion", v2d: "Care for people in need, offered with dignity.", v3: "Integrity", v3d: "Open, accountable and trustworthy service.",
    lead: "Leadership & team", leadH: "Meet the people behind CMEHA", leadP: "Leadership names, roles and photographs will appear here once CMEHA provides and approves them.",
    prPh: "Programs & Projects", prPhH: "Programs and projects", prPhP: "These are the program areas CMEHA is preparing. They are proposals, not yet confirmed programs. Confirmed programs and projects will be listed here.",
    search: "Search programs", noRes: "No program areas match your search.", projects: "Projects in this program", projNote: "Project entries will be listed here once defined with CMEHA.", ofLabel: "Program",
    nwPh: "News & Events", nwPhH: "News, stories and events", nwPhP: "Announcements and upcoming activities, newest first.", upcoming: "Upcoming events", latest: "Latest stories",
    when: "When", where: "Where", whereV: "Location to be confirmed", sampleDate: "Sample date",
    gaPh: "Gallery", gaPhH: "Gallery", gaPhP: "Photo categories for approved activity images. Illustrations stand in until real photographs are supplied.", photo: "photo", of: "of",
    gcat: { activities: "Activities", programs: "Programs", events: "Events" },
    coPh: "Contact", coPhH: "Get in touch", coPhP: "Write to the association by email, or send a message with the form below. Messages are saved securely for the CMEHA team to read; this website does not send emails.",
    details: "Contact details", emailL: "Email", phoneL: "Phone", addrL: "Address", tbc: "To be confirmed",
    formH: "Send a message", name: "Your name", email: "Your email", msg: "Message", send: "Send message",
    req: "Please complete this field.", badEmail: "Please enter a valid email address.",
    formStatus: "This form is not connected yet — nothing has been sent or stored. You can send your message from your own email app:",
    openMail: "Open in my email app", formHint: "Your message is saved securely for the CMEHA team. Please do not include sensitive personal information.", sending: "Sending…", sentOk: "Thank you. Your message was saved for the CMEHA team to read.", errGeneric: "Sorry, your message could not be sent right now. Please try again, or email us directly:", errLimit: "You have sent several messages recently. Please try again later.", errNet: "The message could not be sent. Check your connection and try again, or email us directly:",
    fAbout: "Association", fLinks: "Pages", fContact: "Contact", credit: "Website design by", rights: "© 2026 CMEHA. Design preview.", prevNote: "Not a launched website.",
    awaitKm: "Khmer translation awaiting client approval — the English text is shown for now.",
    tgtEy: "Targets", tgtH: "What CMEHA aims to do", lmEy: "Our identity", lmH: "The meaning of our logo", lmP: "Each element of the CMEHA logo has a meaning.",
    memEy: "Membership", memH: "Membership categories", memP: "CMEHA has two categories of members.",
    areaNote: "Proposed program areas — these describe the work CMEHA intends to prepare. They are not yet confirmed, active programs, and no projects are listed until CMEHA confirms them.",
    areaDetail: "This is a proposed program area. Details, timing and any projects will be published when CMEHA confirms them.", proposedChip: "Proposed area",
    projectsNone: "Projects: none have been published yet. Confirmed projects will appear here when CMEHA provides them.",
    reqEy: "Proposal", reqProposal: "Request a Proposal", reqFor: "Regarding:", reqWa: "Contact via WhatsApp", reqWaD: "Opens WhatsApp with your message ready", reqMail: "Contact via Email", reqMailD: "Opens your email app with your message ready",
    reqNote: "These options open WhatsApp or your own email app with a message already written for you. Nothing is sent from this website and nothing is stored — you send the message yourself.", reqHint: "Opens a short message to CMEHA about this item."
  },
  km: {
    note: "",
    noteKm: " អត្ថបទគំរូបង្ហាញជាភាសាអង់គ្លេស រហូតដល់មានអត្ថបទខ្មែរដែលបានអនុម័ត។",
    skip: "រំលងទៅមាតិកា", previewNote: "មាតិកាគំរូ — មិនទាន់មានអ្វីត្រូវបានផ្សព្វផ្សាយក្នុង CMS សម្រាប់ផ្នែកនេះទេ។", samplePhoto: "រូបថតគំរូ — មិនមែនរបស់ CMEHA", credits: "ប្រភពរូបថត", menu: "ម៉ឺនុយ", home: "ទំព័រដើម", about: "អំពីយើង", programs: "កម្មវិធី និងគម្រោង", news: "ព័ត៌មាន និងព្រឹត្តិការណ៍", gallery: "វិចិត្រសាល", contact: "ទំនាក់ទំនង",
    allPrograms: "កម្មវិធីទាំងអស់",
    heroEy: "ការអប់រំ · មនុស្សធម៌ · សហគមន៍", heroH: "", heroP: "ការណែនាំគំរូអំពីការងារអប់រំ និងមនុស្សធម៌។ អត្ថបទចុងក្រោយនឹងមកពីសមាគម។",
    c1: "មើលកម្មវិធី", c2: "ទាក់ទងយើង", seal: "សមាគមអប់រំ និងមនុស្សធម៌មុស្លិមកម្ពុជា",
    abEy: "អំពី CMEHA", abH: "", abP1: "", abP2: "", mission: "បេសកកម្ម", vision: "ចក្ខុវិស័យ",
    mShort: "", vShort: "", learn: "ស្វែងយល់បន្ថែមអំពី CMEHA",
    prEy: "កម្មវិធី និងគម្រោង", prH: "កន្លែងដែលការងារកើតឡើង", prP: "", allProg: "មើលកម្មវិធីទាំងអស់", actEy: "ជីវភាពសហគមន៍", actH: "ពេលវេលាក្នុងសហគមន៍", actP: "",
    h1t: "", h1d: "", h2t: "", h2d: "", h3t: "", h3d: "",
    nwEy: "ព័ត៌មាន និងព្រឹត្តិការណ៍", nwH: "ព័ត៌មានថ្មីៗពី CMEHA", nwP: "", allNews: "ព័ត៌មាន និងព្រឹត្តិការណ៍ទាំងអស់",
    ctaH: "មានសំណួរ ចង់សហការ ឬចង់ស្ម័គ្រចិត្ត?", ctaP: "សូមសរសេរមកសមាគម។", emailUs: "សរសេរអ៊ីមែល", contactPage: "ទំព័រទំនាក់ទំនង",
    readMore: "អានបន្ត", featured: "ពិសេស", close: "បិទ", prev: "មុន", next: "បន្ទាប់", all: "ទាំងអស់",
    cat: { education: "ការអប់រំ", humanitarian: "មនុស្សធម៌", community: "សហគមន៍", other: "កម្មវិធីបន្ថែម", project: "គម្រោង" }, catD: {}, ty: { news: "ព័ត៌មាន", event: "ព្រឹត្តិការណ៍" }, sample: "គំរូ",
    abPh: "", abPhH: "", abPhP: "", story: "", storyH: "", storyP: "", storyP2: "", focus: "ផ្នែកផ្តោតសំខាន់", values: "គុណតម្លៃដឹកនាំការងារ",
    v1: "ការរៀនសូត្រ", v1d: "", v2: "ក្តីមេត្តា", v2d: "", v3: "ភាពស្មោះត្រង់", v3d: "", lead: "ថ្នាក់ដឹកនាំ និងក្រុមការងារ", leadH: "", leadP: "ឈ្មោះ តួនាទី និងរូបថតនឹងបង្ហាញនៅទីនេះ នៅពេល CMEHA ផ្តល់ និងអនុម័ត។",
    prPh: "កម្មវិធី និងគម្រោង", prPhH: "កម្មវិធី និងគម្រោង", prPhP: "", search: "ស្វែងរកកម្មវិធី", noRes: "", projects: "គម្រោងក្នុងកម្មវិធីនេះ", projNote: "", ofLabel: "កម្មវិធី",
    nwPh: "ព័ត៌មាន និងព្រឹត្តិការណ៍", nwPhH: "ព័ត៌មាន រឿងរ៉ាវ និងព្រឹត្តិការណ៍", nwPhP: "", upcoming: "ព្រឹត្តិការណ៍ខាងមុខ", latest: "ព័ត៌មានថ្មីៗ",
    when: "ពេលវេលា", where: "ទីកន្លែង", whereV: "កំពុងរង់ចាំការបញ្ជាក់", sampleDate: "កាលបរិច្ឆេទគំរូ",
    gaPh: "វិចិត្រសាល", gaPhH: "វិចិត្រសាល", gaPhP: "", photo: "រូបថត", of: "នៃ", gcat: { activities: "សកម្មភាព", programs: "កម្មវិធី", events: "ព្រឹត្តិការណ៍" },
    coPh: "ទំនាក់ទំនង", coPhH: "ទាក់ទងយើង", coPhP: "", details: "ព័ត៌មានទំនាក់ទំនង", emailL: "អ៊ីមែល", phoneL: "ទូរស័ព្ទ", addrL: "អាសយដ្ឋាន", tbc: "កំពុងរង់ចាំការបញ្ជាក់",
    formH: "ផ្ញើសារ", name: "ឈ្មោះរបស់អ្នក", email: "អ៊ីមែលរបស់អ្នក", msg: "សារ", send: "ផ្ញើសារ", sending: "កំពុងផ្ញើ…", sentOk: "សូមអរគុណ។ សាររបស់អ្នកត្រូវបានរក្សាទុកសម្រាប់ក្រុម CMEHA អាន។", errGeneric: "សូមអភ័យទោស មិនអាចផ្ញើសារបានទេ។ សូមព្យាយាមម្តងទៀត ឬផ្ញើអ៊ីមែលមកយើងផ្ទាល់៖", errLimit: "អ្នកបានផ្ញើសារច្រើនដងថ្មីៗនេះ។ សូមព្យាយាមម្តងទៀតពេលក្រោយ។", errNet: "មិនអាចផ្ញើសារបានទេ។ សូមពិនិត្យអ៊ីនធឺណិត ហើយព្យាយាមម្តងទៀត ឬផ្ញើអ៊ីមែលមកយើងផ្ទាល់៖", req: "សូមបំពេញចន្លោះនេះ។", badEmail: "សូមបញ្ចូលអ៊ីមែលឱ្យត្រឹមត្រូវ។",
    formStatus: "ទម្រង់នេះមិនទាន់តភ្ជាប់ទេ — មិនទាន់មានអ្វីត្រូវបានផ្ញើ ឬរក្សាទុកឡើយ។ អ្នកអាចផ្ញើសារពីកម្មវិធីអ៊ីមែលរបស់អ្នក៖", openMail: "បើកក្នុងកម្មវិធីអ៊ីមែល", formHint: "",
    fAbout: "សមាគម", fLinks: "ទំព័រ", fContact: "ទំនាក់ទំនង", credit: "រចនាគេហទំព័រដោយ", rights: "© 2026 CMEHA។ គំរូរចនា។", prevNote: "មិនទាន់បើកដំណើរការទេ។"
  }
};
/* ---------------- Khmer text ----------------
   Static public text translated into Khmer by BizWeb KH (draft for CMEHA's native-speaker review). Official profile text keeps the
   meaning supplied by CMEHA. CMS content is never translated here: when an entry has no Khmer version it is shown in English
   (marked lang="en") and a single Khmer notice says so. Khmer-mode WhatsApp/e-mail proposal messages stay in the English
   wording supplied by CMEHA. */
Object.assign(T.en, {
  rightsLive: "© 2026 CMEHA.",
  dlgLabel: "Details", langLabel: "Language", mainNav: "Main", logoAlt: "CMEHA logo", titleSfx: "(design preview)",
  sampleBody: "Sample article body. In the live site this area holds the full story, images and event details entered through the CMS.",
  crEx: "Photographs on this design preview are sample images from Pexels (free to use under the Pexels License) and Wikimedia Commons (open licences, named under each photo; cropped for layout). They show education and community scenes only as examples. The people shown are not CMEHA members, and the photographs do not depict CMEHA, its programs or beneficiaries. They will be replaced with approved CMEHA photographs.",
  crBy: "Photo by {n} — {s}", crUsed: "Used for:", pillAreas: "Proposed program areas"
});
Object.assign(T.km, {
  rightsLive: "© 2026 CMEHA។",
  note: "<b>គំរូរចនា</b> — ព័ត៌មានអំពីអង្គការ (អំពីយើង ចក្ខុវិស័យ បេសកកម្ម គោលដៅ សមាជិកភាព និងអត្ថន័យនិមិត្តសញ្ញា) គឺជាអត្ថបទផ្លូវការដែល CMEHA ផ្តល់ជូន។ ព័ត៌មាន ព្រឹត្តិការណ៍ រូបថត និងព័ត៌មានលម្អិតនៃកម្មវិធី នៅតែជាគំរូសម្រាប់ឱ្យ CMEHA ពិនិត្យ។ នេះមិនមែនជាគេហទំព័រផ្លូវការរបស់ CMEHA ទេ។",
  noteKm: "",
  heroH: "ការអប់រំ និងចំណេះដឹង សម្រាប់សង្គមដែលមាន<em>វិបុលភាព</em> និងភាពរីកចម្រើន",
  heroP: "CMEHA ជាអង្គការមិនមែនរដ្ឋាភិបាលកម្ពុជា ដែលធ្វើការងារផ្នែកអប់រំ និងសកម្មភាពមនុស្សធម៌។",
  abH: "សមាគមកម្ពុជាសម្រាប់ការងារអប់រំ និងមនុស្សធម៌",
  mShort: "ស្វែងរកមូលនិធិសម្រាប់ការអប់រំ និងអាហារូបករណ៍ អភិវឌ្ឍធនធានមនុស្ស និងសហការជាមួយសាលារៀន និងសហគមន៍ លើកម្មវិធីអប់រំ និងមនុស្សធម៌។",
  vShort: "ដើម្បីកសាងសង្គមដែលមានវិបុលភាព និងភាពរីកចម្រើន តាមរយៈការអប់រំ និងចំណេះដឹង។",
  prP: "ផ្នែកកម្មវិធីដែលបានស្នើ ដកស្រង់ចេញពីបេសកកម្មរបស់ CMEHA។ ពួកវានឹងក្លាយជាកម្មវិធីសកម្ម នៅពេល CMEHA បញ្ជាក់។",
  actP: "ប្លង់រូបថតបែបវិចិត្រសាល សម្រាប់រូបថតសកម្មភាពដែលត្រូវបានអនុម័ត។",
  h1t: "រៀនជាមួយគ្នា", h1d: "ថ្នាក់រៀន សិក្ខាសាលា និងការគាំទ្រការសិក្សា។",
  h2t: "ជួយអ្នកជិតខាង", h2d: "ជំនួយជាក់ស្តែង ដែលរៀបចំដោយការយកចិត្តទុកដាក់។",
  h3t: "លូតលាស់ជាមួយគ្នា", h3d: "ការជួបជុំរបស់យុវជន និងសហគមន៍។",
  nwP: "សេចក្តីប្រកាស របាយការណ៍សកម្មភាព និងព្រឹត្តិការណ៍ខាងមុខ។",
  abPh: "អំពីយើង", abPhH: "ការអប់រំ និងមនុស្សធម៌ ជាមួយគ្នា",
  leadH: "ជួបមនុស្សនៅពីក្រោយ CMEHA",
  prPhP: "ទាំងនេះជាផ្នែកកម្មវិធីដែល CMEHA កំពុងរៀបចំ។ ពួកវាជាសំណើ មិនទាន់ជាកម្មវិធីដែលបានបញ្ជាក់ទេ។ កម្មវិធី និងគម្រោងដែលបានបញ្ជាក់នឹងត្រូវបានចុះបញ្ជីនៅទីនេះ។",
  noRes: "គ្មានផ្នែកកម្មវិធីណាត្រូវនឹងការស្វែងរករបស់អ្នកទេ។",
  projNote: "ធាតុគម្រោងនឹងត្រូវបានចុះបញ្ជីនៅទីនេះ នៅពេលកំណត់ជាមួយ CMEHA។",
  nwPhP: "សេចក្តីប្រកាស និងសកម្មភាពខាងមុខ ថ្មីបំផុតមុន។",
  gaPhP: "ប្រភេទរូបថតសម្រាប់រូបភាពសកម្មភាពដែលត្រូវបានអនុម័ត។ រូបគំនូរជំនួសបណ្តោះអាសន្ន រហូតដល់មានរូបថតពិត។",
  coPhP: "សរសេរមកសមាគមតាមអ៊ីមែល ឬផ្ញើសារតាមទម្រង់ខាងក្រោម។ សារត្រូវបានរក្សាទុកដោយសុវត្ថិភាព សម្រាប់ក្រុម CMEHA អាន។ គេហទំព័រនេះមិនផ្ញើអ៊ីមែលទេ។",
  formHint: "សាររបស់អ្នកត្រូវបានរក្សាទុកដោយសុវត្ថិភាព សម្រាប់ក្រុម CMEHA។ សូមកុំបញ្ចូលព័ត៌មានផ្ទាល់ខ្លួនដែលរសើប។",
  awaitKm: "ខ្លឹមសារមួយចំនួនដែលបានបញ្ចូលតាម CMS មិនទាន់មានជាភាសាខ្មែរទេ ដូច្នេះបង្ហាញជាភាសាអង់គ្លេសសិន រហូតដល់មានការបកប្រែពីសមាគម។",
  tgtEy: "គោលដៅ", tgtH: "អ្វីដែល CMEHA មានគោលបំណងសម្រេច",
  lmEy: "អត្តសញ្ញាណរបស់យើង", lmH: "អត្ថន័យនៃនិមិត្តសញ្ញារបស់យើង", lmP: "ធាតុនីមួយៗនៃនិមិត្តសញ្ញា CMEHA មានអត្ថន័យ។",
  memEy: "សមាជិកភាព", memH: "ប្រភេទសមាជិក", memP: "CMEHA មានសមាជិកពីរប្រភេទ។",
  areaNote: "ផ្នែកកម្មវិធីដែលបានស្នើ — ទាំងនេះពិពណ៌នាអំពីការងារដែល CMEHA មានបំណងរៀបចំ។ ពួកវាមិនទាន់ជាកម្មវិធីសកម្មដែលបានបញ្ជាក់ទេ ហើយមិនមានគម្រោងត្រូវបានចុះបញ្ជីទេ រហូតដល់ CMEHA បញ្ជាក់។",
  areaDetail: "នេះជាផ្នែកកម្មវិធីដែលបានស្នើ។ ព័ត៌មានលម្អិត ពេលវេលា និងគម្រោងណាមួយ នឹងត្រូវបានផ្សព្វផ្សាយ នៅពេល CMEHA បញ្ជាក់។",
  proposedChip: "ផ្នែកដែលបានស្នើ",
  projectsNone: "គម្រោង៖ មិនទាន់មានគម្រោងណាត្រូវបានផ្សព្វផ្សាយទេ។ គម្រោងដែលបានបញ្ជាក់នឹងបង្ហាញនៅទីនេះ នៅពេល CMEHA ផ្តល់ជូន។",
  reqEy: "សំណើគម្រោង", reqProposal: "ស្នើសុំសំណើគម្រោង", reqFor: "ទាក់ទងនឹង៖",
  reqWa: "ទាក់ទងតាម WhatsApp", reqWaD: "បើក WhatsApp ជាមួយសាររបស់អ្នកដែលរៀបចំរួចជាស្រេច",
  reqMail: "ទាក់ទងតាមអ៊ីមែល", reqMailD: "បើកកម្មវិធីអ៊ីមែលរបស់អ្នក ជាមួយសាររបស់អ្នកដែលរៀបចំរួចជាស្រេច",
  reqNote: "ជម្រើសទាំងនេះបើក WhatsApp ឬកម្មវិធីអ៊ីមែលផ្ទាល់ខ្លួនរបស់អ្នក ជាមួយសារដែលបានសរសេររួចសម្រាប់អ្នក។ គេហទំព័រនេះមិនផ្ញើអ្វីទេ ហើយក៏មិនរក្សាទុកអ្វីដែរ — អ្នកផ្ញើសារដោយខ្លួនឯង។ សារដែលរៀបចំរួចគឺជាភាសាអង់គ្លេស ហើយអ្នកអាចកែបានមុនពេលផ្ញើ។",
  reqHint: "បើកសារខ្លីមួយទៅ CMEHA អំពីធាតុនេះ។",
  dlgLabel: "ព័ត៌មានលម្អិត", langLabel: "ភាសា", mainNav: "ម៉ឺនុយមេ", logoAlt: "និមិត្តសញ្ញា CMEHA", titleSfx: "(គំរូរចនា)",
  sampleBody: "អត្ថបទគំរូ។ នៅលើគេហទំព័រពិត ផ្នែកនេះនឹងមានអត្ថបទពេញ រូបភាព និងព័ត៌មានលម្អិតព្រឹត្តិការណ៍ ដែលបញ្ចូលតាម CMS។",
  crEx: "រូបថតនៅលើគេហទំព័រគំរូនេះ គឺជារូបគំរូពី Pexels (ប្រើដោយឥតគិតថ្លៃ តាមអាជ្ញាប័ណ្ណ Pexels) និង Wikimedia Commons (អាជ្ញាប័ណ្ណបើកចំហ បានបញ្ជាក់ក្រោមរូបនីមួយៗ និងកាត់តម្រូវតាមប្លង់)។ ពួកវាបង្ហាញទិដ្ឋភាពអប់រំ និងសហគមន៍ ជាឧទាហរណ៍ប៉ុណ្ណោះ។ មនុស្សក្នុងរូបមិនមែនជាសមាជិក CMEHA ទេ ហើយរូបថតមិនបង្ហាញអំពី CMEHA កម្មវិធី ឬអ្នកទទួលផលរបស់ CMEHA ឡើយ។ ពួកវានឹងត្រូវជំនួសដោយរូបថតដែល CMEHA អនុម័ត។",
  crBy: "រូបថតដោយ {n} — {s}", crUsed: "ប្រើសម្រាប់៖", pillAreas: "ផ្នែកកម្មវិធីដែលបានស្នើ"
});
Object.assign(T.km.cat, { "community-education": "ការអប់រំសហគមន៍", scholarships: "អាហារូបករណ៍", "hr-development": "ការអភិវឌ្ឍធនធានមនុស្ស", humanitarian: "ជំនួយមនុស្សធម៌", education: "ការអប់រំ", community: "សហគមន៍", other: "កម្មវិធីបន្ថែម", project: "គម្រោង" });
T.km.catD = { "community-education": "កម្មវិធីអប់រំដែលរៀបចំជាមួយសាលារៀន និងសហគមន៍។", scholarships: "កម្មវិធីអាហារូបករណ៍សិស្ស-និស្សិត នៅកម្ពុជា និងបរទេស។", "hr-development": "ការបណ្តុះបណ្តាល និងពង្រឹងសមត្ថភាពយុវជនជំនាន់ក្រោយ។", humanitarian: "ជំនួយសម្រាប់ជនរងគ្រោះ អ្នកជំងឺ និងកុមារកំព្រា។", education: "កម្មវិធីអប់រំ។", community: "កម្មវិធីសហគមន៍។", other: "កម្មវិធីផ្សេងទៀតរបស់សមាគម។", project: "គម្រោងនីមួយៗរបស់សមាគម។" };

Object.assign(T.en, { emptyProg: "Programs and projects will be published here.", emptyNews: "News and events will be published here.", emptyGal: "Photographs will be published here.", onlineL: "Online", prPhPConf: "CMEHA’s programs and projects.", prPhPMixed: "CMEHA’s confirmed programs and projects, and the program areas it is preparing.", prPMixed: "Areas marked “Proposed” are not yet confirmed programs.", areaNoteConf: "Areas marked “Proposed” are not yet confirmed programs.",
  crExLive: "Some photographs on this website are licensed images from Pexels (Pexels License) and Wikimedia Commons (open licences). The photographer, source and licence of each one are listed below. They show education and community scenes in Cambodia and do not necessarily show CMEHA’s own activities." });
Object.assign(T.km, { emptyProg: "កម្មវិធី និងគម្រោងនឹងត្រូវបានផ្សព្វផ្សាយនៅទីនេះ។", emptyNews: "ព័ត៌មាន និងព្រឹត្តិការណ៍នឹងត្រូវបានផ្សព្វផ្សាយនៅទីនេះ។", emptyGal: "រូបថតនឹងត្រូវបានផ្សព្វផ្សាយនៅទីនេះ។", onlineL: "អនឡាញ", prPhPConf: "កម្មវិធី និងគម្រោងរបស់ CMEHA។", prPhPMixed: "កម្មវិធី និងគម្រោងដែលបានបញ្ជាក់របស់ CMEHA និងផ្នែកកម្មវិធីដែលកំពុងរៀបចំ។", prPMixed: "ផ្នែកដែលសម្គាល់ថា «ផ្នែកដែលបានស្នើ» មិនទាន់ជាកម្មវិធីដែលបានបញ្ជាក់ទេ។", areaNoteConf: "ផ្នែកដែលសម្គាល់ថា «ផ្នែកដែលបានស្នើ» មិនទាន់ជាកម្មវិធីដែលបានបញ្ជាក់ទេ។",
  crExLive: "រូបថតមួយចំនួននៅលើគេហទំព័រនេះជារូបភាពដែលមានអាជ្ញាប័ណ្ណពី Pexels (អាជ្ញាប័ណ្ណ Pexels) និង Wikimedia Commons (អាជ្ញាប័ណ្ណបើកចំហ)។ ឈ្មោះអ្នកថត ប្រភព និងអាជ្ញាប័ណ្ណនៃរូបនីមួយៗត្រូវបានរាយខាងក្រោម។ រូបទាំងនេះបង្ហាញពីឆាកអប់រំ និងសហគមន៍នៅកម្ពុជា ហើយមិនចាំបាច់បង្ហាញសកម្មភាពរបស់ CMEHA ផ្ទាល់ទេ។" });
Object.assign(T.en, {
  rightsDemo: "© 2026 CMEHA. Website design proposal for review. Photographs are illustrative.",
  gaPhPDemo: "A gallery of photographs from CMEHA’s activities will be shown here once approved photographs are supplied. The pictures below are illustrative stock images that show how the gallery will look.",
  gaDemoNote: "<b>Illustrative photographs.</b> These are credited stock images, not photographs of CMEHA’s activities. See Photo credits.",
  neLatestP: "News stories and activity reports from CMEHA will be published here.", neEventsP: "Dates and details of CMEHA events will be announced here.", neShare: "Have an announcement to share?",
  coPhPDemo: "Write to the association by email. The form below prepares an email in your own email app — nothing is sent from this website.",
  formHintDemo: "This opens your own email app with your message ready to send to info@cmeha-cambodia.org. Nothing is sent or stored by this website.",
  sendDemo: "Prepare email", openedMail: "Your email app should open with your message ready. If nothing opens, please write to",
  reqNoteDemo: "This option opens your own email app with a message already written for you. Nothing is sent from this website and nothing is stored — you send the message yourself.",
  awaitKm: "Khmer translation awaiting CMEHA approval — the English text is shown for now.",
  crExDemo: "Photographs on this website proposal are illustrative stock images from Pexels (Pexels License) and Wikimedia Commons (open licences). The photographer, source and licence of each one are listed below. They show education and community scenes in Cambodia as examples; they do not show CMEHA, its members, programs or beneficiaries, and they will be replaced with approved CMEHA photographs." });
Object.assign(T.km, {
  rightsDemo: "© 2026 CMEHA។ គំរូរចនាគេហទំព័រសម្រាប់ពិនិត្យ។ រូបថតគឺសម្រាប់បង្ហាញជាឧទាហរណ៍។",
  gaPhPDemo: "វិចិត្រសាលរូបថតសកម្មភាពរបស់ CMEHA នឹងបង្ហាញនៅទីនេះ នៅពេលមានរូបថតដែលត្រូវបានអនុម័ត។ រូបភាពខាងក្រោមជារូបថតសម្រាប់បង្ហាញជាឧទាហរណ៍ ដើម្បីបង្ហាញពីរបៀបដែលវិចិត្រសាលនឹងមើលទៅ។",
  gaDemoNote: "<b>រូបថតសម្រាប់បង្ហាញជាឧទាហរណ៍។</b> ទាំងនេះជារូបថតពីប្រភពខាងក្រៅដែលមានឈ្មោះអ្នកថត មិនមែនជារូបថតសកម្មភាពរបស់ CMEHA ទេ។ សូមមើលប្រភពរូបថត។",
  neLatestP: "ព័ត៌មាន និងរបាយការណ៍សកម្មភាពរបស់ CMEHA នឹងត្រូវបានផ្សព្វផ្សាយនៅទីនេះ។", neEventsP: "កាលបរិច្ឆេទ និងព័ត៌មានលម្អិតនៃព្រឹត្តិការណ៍របស់ CMEHA នឹងត្រូវបានប្រកាសនៅទីនេះ។", neShare: "មានសេចក្តីប្រកាសចង់ចែករំលែក?",
  coPhPDemo: "សូមសរសេរមកសមាគមតាមអ៊ីមែល។ ទម្រង់ខាងក្រោមរៀបចំអ៊ីមែលក្នុងកម្មវិធីអ៊ីមែលរបស់អ្នក — គេហទំព័រនេះមិនផ្ញើអ្វីទេ។",
  formHintDemo: "វាបើកកម្មវិធីអ៊ីមែលរបស់អ្នកជាមួយសារដែលរៀបចំរួចសម្រាប់ផ្ញើទៅ info@cmeha-cambodia.org។ គេហទំព័រនេះមិនផ្ញើ ឬរក្សាទុកអ្វីទេ។",
  sendDemo: "រៀបចំអ៊ីមែល", openedMail: "កម្មវិធីអ៊ីមែលរបស់អ្នកគួរបើកជាមួយសារដែលរៀបចំរួច។ ប្រសិនបើគ្មានអ្វីបើក សូមសរសេរមកកាន់",
  reqNoteDemo: "ជម្រើសនេះបើកកម្មវិធីអ៊ីមែលផ្ទាល់ខ្លួនរបស់អ្នក ជាមួយសារដែលបានសរសេររួចសម្រាប់អ្នក។ គេហទំព័រនេះមិនផ្ញើ ឬរក្សាទុកអ្វីទេ — អ្នកផ្ញើសារដោយខ្លួនឯង។",
  awaitKm: "ការបកប្រែជាភាសាខ្មែរកំពុងរង់ចាំការអនុម័តពី CMEHA — បង្ហាញអត្ថបទជាភាសាអង់គ្លេសសិន។",
  crExDemo: "រូបថតនៅលើគំរូគេហទំព័រនេះ ជារូបថតសម្រាប់បង្ហាញជាឧទាហរណ៍ ពី Pexels (អាជ្ញាប័ណ្ណ Pexels) និង Wikimedia Commons (អាជ្ញាប័ណ្ណបើកចំហ)។ ឈ្មោះអ្នកថត ប្រភព និងអាជ្ញាប័ណ្ណនៃរូបនីមួយៗមានចុះក្នុងបញ្ជីខាងក្រោម។ រូបទាំងនេះបង្ហាញទិដ្ឋភាពអប់រំ និងសហគមន៍នៅកម្ពុជាជាឧទាហរណ៍ មិនមែនបង្ហាញ CMEHA សមាជិក កម្មវិធី ឬអ្នកទទួលផលរបស់ CMEHA ទេ ហើយនឹងត្រូវជំនួសដោយរូបថតដែលត្រូវបានអនុម័តរបស់ CMEHA។" });
let lang = "en";
try { lang = localStorage.getItem("cmeha-lang") || ((navigator.language || "").startsWith("km") ? "km" : "en"); } catch {}
if (Q.get("lang") === "km" || Q.get("lang") === "en") lang = Q.get("lang");
/* t(key): Khmer if available and non-empty, otherwise English fallback. Fallback body text is marked lang="en". */
const t = (k) => { const v = T[lang][k]; return v === undefined || v === "" ? T.en[k] : v; };
const tb = (k) => { const v = T[lang][k]; return v === undefined || v === "" ? `<span lang="en">${T.en[k]}</span>` : v; };
const cat = (c) => T[lang].cat[c] || T.en.cat[c] || c;
const catD = (c) => (T[lang].catD[c] ? T[lang].catD[c] : T.en.catD[c] ? `<span lang="en">${T.en.catD[c]}</span>` : "");

/* ---------------- sample data ---------------- */
/* ---------------- official CMEHA profile (provided by the client; wording edited for readability, meaning unchanged) ----------------
   Everything here is the DEFAULT text. A published CMS "Pages" entry with the matching URL key replaces it (see config.pageSlots):
   mission, vision, targets, logo-meaning, membership-ordinary, membership-associate, about-story, home-intro, leadership.
   Not published on purpose until the client approves them: registration number/date and any tax-identification details.
   English only: no Khmer translation has been supplied or approved, so Khmer mode shows this text in English and says so. */
const OFFICIAL = {
  intro: "CMEHA is a Cambodian non-governmental organization working in education and humanitarian activities.",
  vision: "To create a prosperous and progressive society through education and knowledge.",
  mission: [
    "Raise funds for community education.",
    "Raise funds for student scholarship programs in Cambodia and overseas.",
    "Deliver human resource development programs.",
    "Prepare education programs for communities.",
    "Collaborate with schools and communities on educational and humanitarian programs."
  ],
  missionShort: "Raising funds for education and scholarships, developing human resources, and working with schools and communities on educational and humanitarian programs.",
  targets: [
    "Elevate well-being, education and the environment.",
    "Train and strengthen the abilities of the younger generation.",
    "Promote humanitarian and charitable activities, assisting victims, people who are sick, and orphans."
  ],
  membership: [
    { slug: "membership-ordinary", t: "Ordinary Members", x: "Open to all Muslim graduates from universities recognized by CMEHA." },
    { slug: "membership-associate", t: "Associate Members", x: "Open to all members of the community in Cambodia, regardless of race or religion." }
  ],
  // The five elements of the logo, as described by the client. cx/cy: where the element sits in assets/logo.jpg (fractions of its width/height).
  logo: [
    { n: 1, t: "Circle", x: "A generation of educated individuals dedicated to community advancement and well-being.", cx: 0.955, cy: 0.5, mx: 95.5, my: 36, z: 4 },
    { n: 2, t: "Moon, Star and Earth", x: "Represent the world.", cx: 0.4, cy: 0.3, mx: 28, my: 24, z: 4 },
    { n: 3, t: "Shaking Hands", x: "Brotherhood and collaboration.", cx: 0.5, cy: 0.745, mx: 67, my: 70, z: 4 },
    { n: 4, t: "Book", x: "Knowledge.", cx: 0.5, cy: 0.44, mx: 30, my: 47, z: 3.6 },
    { n: 5, t: "Graduation Hat", x: "Graduates.", cx: 0.56, cy: 0.29, mx: 67, my: 26, z: 4 }
  ]
};
/* Khmer wording of the official profile (draft translation; meaning follows the English text supplied by CMEHA). */
const OFFICIAL_KM = {
  intro: "CMEHA ជាអង្គការមិនមែនរដ្ឋាភិបាលកម្ពុជា ដែលធ្វើការងារផ្នែកអប់រំ និងសកម្មភាពមនុស្សធម៌។",
  vision: "ដើម្បីកសាងសង្គមដែលមានវិបុលភាព និងភាពរីកចម្រើន តាមរយៈការអប់រំ និងចំណេះដឹង។",
  mission: [
    "ស្វែងរកមូលនិធិសម្រាប់ការអប់រំក្នុងសហគមន៍។",
    "ស្វែងរកមូលនិធិសម្រាប់កម្មវិធីអាហារូបករណ៍សិស្ស-និស្សិត នៅកម្ពុជា និងបរទេស។",
    "អនុវត្តកម្មវិធីអភិវឌ្ឍធនធានមនុស្ស។",
    "រៀបចំកម្មវិធីអប់រំសម្រាប់សហគមន៍។",
    "សហការជាមួយសាលារៀន និងសហគមន៍ លើកម្មវិធីអប់រំ និងមនុស្សធម៌។"
  ],
  missionShort: "ស្វែងរកមូលនិធិសម្រាប់ការអប់រំ និងអាហារូបករណ៍ អភិវឌ្ឍធនធានមនុស្ស និងសហការជាមួយសាលារៀន និងសហគមន៍ លើកម្មវិធីអប់រំ និងមនុស្សធម៌។",
  targets: [
    "លើកកម្ពស់សុខុមាលភាព ការអប់រំ និងបរិស្ថាន។",
    "បណ្តុះបណ្តាល និងពង្រឹងសមត្ថភាពយុវជនជំនាន់ក្រោយ។",
    "ជំរុញសកម្មភាពមនុស្សធម៌ និងសប្បុរសធម៌ ដើម្បីជួយជនរងគ្រោះ អ្នកជំងឺ និងកុមារកំព្រា។"
  ],
  membership: [
    { t: "សមាជិកសាមញ្ញ", x: "បើកចំហសម្រាប់និស្សិតមូស្លិមទាំងអស់ ដែលបានបញ្ចប់ការសិក្សាពីសាកលវិទ្យាល័យដែលត្រូវបាន CMEHA ទទួលស្គាល់។" },
    { t: "សមាជិកសហការី", x: "បើកចំហសម្រាប់សមាជិកទាំងអស់នៃសហគមន៍នៅកម្ពុជា ដោយមិនប្រកាន់ពូជសាសន៍ ឬសាសនា។" }
  ],
  logo: [
    { t: "រង្វង់មូល", x: "ជំនាន់នៃបុគ្គលដែលមានការអប់រំ ដែលប្តេជ្ញាចិត្តចំពោះការរីកចម្រើន និងសុខុមាលភាពរបស់សហគមន៍។" },
    { t: "ព្រះចន្ទ ផ្កាយ និងផែនដី", x: "តំណាងឱ្យពិភពលោក។" },
    { t: "ការចាប់ដៃ", x: "ភាតរភាព និងកិច្ចសហការ។" },
    { t: "សៀវភៅ", x: "ចំណេះដឹង។" },
    { t: "មួកបញ្ចប់ការសិក្សា", x: "អ្នកបញ្ចប់ការសិក្សា។" }
  ]
};
const ofl = () => (lang === "km" ? OFFICIAL_KM : OFFICIAL);
// Proposed program areas: describe the work in the mission and targets. They are NOT confirmed, active programs and have no projects.
const PROPOSED_AREAS = [
  { id: "a1", area: true, c: "community-education", ph: "p5", t: "Community Education", d: "Preparing education programs for communities, together with schools and local communities." },
  { id: "a2", area: true, c: "scholarships", ph: "p1", t: "Scholarships", d: "Raising funds for student scholarship programs in Cambodia and overseas." },
  { id: "a3", area: true, c: "hr-development", ph: "a1", t: "Human Resource Development", d: "Human resource development programs, to train and strengthen the abilities of the younger generation." },
  { id: "a4", area: true, c: "humanitarian", ph: "p2", t: "Humanitarian Assistance", d: "Humanitarian and charitable activities that assist victims, people who are sick, and orphans." }
];
const AREA_KM = { a1: ["ការអប់រំសហគមន៍", "ការរៀបចំកម្មវិធីអប់រំសម្រាប់សហគមន៍ ជាមួយសាលារៀន និងសហគមន៍ក្នុងតំបន់។"], a2: ["អាហារូបករណ៍", "ការស្វែងរកមូលនិធិសម្រាប់កម្មវិធីអាហារូបករណ៍សិស្ស-និស្សិត នៅកម្ពុជា និងបរទេស។"], a3: ["ការអភិវឌ្ឍធនធានមនុស្ស", "កម្មវិធីអភិវឌ្ឍធនធានមនុស្ស ដើម្បីបណ្តុះបណ្តាល និងពង្រឹងសមត្ថភាពយុវជនជំនាន់ក្រោយ។"], a4: ["ជំនួយមនុស្សធម៌", "សកម្មភាពមនុស្សធម៌ និងសប្បុរសធម៌ ដែលជួយជនរងគ្រោះ អ្នកជំងឺ និងកុមារកំព្រា។"] };
PROPOSED_AREAS.forEach((a) => { a.raw = a.t; [a.tk, a.dk] = AREA_KM[a.id]; });

const SAMPLE_NEWS = [
  { id: "n1", k: "news", ill: "classroom", tone: 1, d: [2026, 10, 12], t: "Sample story: a day of shared learning", x: "Sample summary showing how a featured story reads, with a headline, date, category and a short introduction." },
  { id: "n2", k: "event", ill: "event", tone: 0, d: [2026, 11, 8], t: "Sample event: community gathering", x: "Sample event listing with a date block and a short description." },
  { id: "n3", k: "news", ill: "community", tone: 1, d: [2026, 9, 28], t: "Sample story: volunteers at work", x: "Sample summary for a secondary news post." },
  { id: "n4", k: "news", ill: "library", tone: 1, d: [2026, 9, 14], t: "Sample story: new books for the reading corner", x: "Sample summary for another news post." },
  { id: "n5", k: "event", ill: "youth", tone: 0, d: [2026, 11, 22], t: "Sample event: youth workshop", x: "Sample event listing for an upcoming workshop." },
  { id: "n6", k: "news", ill: "relief", tone: 1, d: [2026, 8, 30], t: "Sample story: supporting neighbours", x: "Sample summary for an older news post." }
];
const SAMPLE_GALLERY = [
  { c: "activities", ill: "classroom", tone: 0, s: "big", cap: "Classroom learning (illustration)", capk: "ការរៀនក្នុងថ្នាក់ (រូបគំនូរ)" }, { c: "events", ill: "event", tone: 0, s: "", cap: "Community event (illustration)", capk: "ព្រឹត្តិការណ៍សហគមន៍ (រូបគំនូរ)" },
  { c: "programs", ill: "library", tone: 0, s: "t", cap: "Reading corner (illustration)", capk: "ជ្រុងអាន (រូបគំនូរ)" }, { c: "activities", ill: "community", tone: 0, s: "w", cap: "Community together (illustration)", capk: "សហគមន៍រួមគ្នា (រូបគំនូរ)" },
  { c: "programs", ill: "relief", tone: 0, s: "", cap: "Care and assistance (illustration)", capk: "ការយកចិត្តទុកដាក់ និងជំនួយ (រូបគំនូរ)" }, { c: "activities", ill: "youth", tone: 0, s: "t", cap: "Youth activity (illustration)", capk: "សកម្មភាពយុវជន (រូបគំនូរ)" },
  { c: "events", ill: "community", tone: 1, s: "", cap: "Gathering day (illustration)", capk: "ថ្ងៃជួបជុំ (រូបគំនូរ)" }, { c: "programs", ill: "classroom", tone: 1, s: "", cap: "Study support (illustration)", capk: "ការគាំទ្រការសិក្សា (រូបគំនូរ)" },
  { c: "events", ill: "event", tone: 1, s: "", cap: "Public programme (illustration)", capk: "កម្មវិធីសាធារណៈ (រូបគំនូរ)" }, { c: "activities", ill: "library", tone: 1, s: "", cap: "Books and learning (illustration)", capk: "សៀវភៅ និងការរៀនសូត្រ (រូបគំនូរ)" }
];
const NEWS_PH = { n1: "a1", n2: "a5", n3: "p4", n4: "p3", n5: "p5", n6: "p2" };
const NEWS_KM = { n1: ["រឿងគំរូ៖ ថ្ងៃនៃការរៀនសូត្រជាមួយគ្នា", "សេចក្តីសង្ខេបគំរូ បង្ហាញពីរបៀបដែលរឿងពិសេសមួយត្រូវបានបង្ហាញ ជាមួយចំណងជើង កាលបរិច្ឆេទ ប្រភេទ និងការណែនាំខ្លី។"], n2: ["ព្រឹត្តិការណ៍គំរូ៖ ការជួបជុំសហគមន៍", "បញ្ជីព្រឹត្តិការណ៍គំរូ ជាមួយប្លុកកាលបរិច្ឆេទ និងការពិពណ៌នាខ្លី។"], n3: ["រឿងគំរូ៖ អ្នកស្ម័គ្រចិត្តកំពុងធ្វើការ", "សេចក្តីសង្ខេបគំរូសម្រាប់ព័ត៌មានទីពីរ។"], n4: ["រឿងគំរូ៖ សៀវភៅថ្មីសម្រាប់ជ្រុងអាន", "សេចក្តីសង្ខេបគំរូសម្រាប់ព័ត៌មានមួយទៀត។"], n5: ["ព្រឹត្តិការណ៍គំរូ៖ សិក្ខាសាលាយុវជន", "បញ្ជីព្រឹត្តិការណ៍គំរូសម្រាប់សិក្ខាសាលាខាងមុខ។"], n6: ["រឿងគំរូ៖ ជួយអ្នកជិតខាង", "សេចក្តីសង្ខេបគំរូសម្រាប់ព័ត៌មានចាស់ជាងនេះ។"] };
SAMPLE_NEWS.forEach((n) => { n.ph = NEWS_PH[n.id]; n.sample = true; [n.tk, n.xk] = NEWS_KM[n.id]; }); // demonstration items: their dates are never shown as real
const MON = { en: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], km: ["មករា", "កុម្ភៈ", "មីនា", "មេសា", "ឧសភា", "មិថុនា", "កក្កដា", "សីហា", "កញ្ញា", "តុលា", "វិច្ឆិកា", "ធ្នូ"] };
const fmt = ([y, m, d]) => (lang === "km" ? `${d} ${MON.km[m - 1]} ${y}` : `${d} ${MON.en[m - 1]} ${y}`);

/* ---------------- CMS data (Neon, via the public snapshot API) ---------------- */
const DATA = { entries: [], settings: {}, media: {}, ok: false };
async function loadData() { DATA.ok = false; } // static demo: nothing is loaded from anywhere
/* every CMS string is escaped before it reaches innerHTML */
const esc = (s) => String(s == null ? "" : s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const paras = (s) => String(s || "").split(/\n{2,}/).map((p) => p.trim()).filter(Boolean).map((p) => `<p>${esc(p).replace(/\n/g, "<br>")}</p>`).join("");
const sh = (e, k) => (e.fields || {})[k] || "";
function loc(e, k) { // value in the current language, else English fallback (flagged)
  const L = (e.translations || {})[lang]; const v = k === "title" ? L && L.title : L && L.fields && L.fields[k];
  if (v) return { v, fb: false };
  const base = k === "title" ? e.title : sh(e, k);
  return { v: base, fb: lang !== "en" && !!base };
}
const live = (m) => DATA.entries.filter((e) => e.module === m);
const imgOf = () => null; // static demo: no CMS media
const parseDate = (s, fb) => { const m = /^(\d{4})-(\d{2})-(\d{2})/.exec(s || "") || /^(\d{4})-(\d{2})-(\d{2})/.exec(fb || ""); return m ? [+m[1], +m[2], +m[3]] : null; };
const cmp = (a, b) => (b.d ? b.d[0] * 372 + b.d[1] * 31 + b.d[2] : 0) - (a.d ? a.d[0] * 372 + a.d[1] * 31 + a.d[2] : 0);
let PROGRAMS = PROPOSED_AREAS, NEWS = SAMPLE_NEWS, GALLERY = SAMPLE_GALLERY;
const PREVIEW = { programs: true, news: true, gallery: true };
// A program record is a "proposed area" (shown with the proposed notices) until its Status is set to Confirmed in the CMS.
const AREA_PH = { "community-education": "p5", scholarships: "p1", "hr-development": "a1", humanitarian: "p2" };
function mapProgram(e) {
  const t_ = loc(e, "title"), d_ = loc(e, "summary"), b_ = loc(e, "body");
  const proj = live("projects").filter((p) => sh(p, "programSlug") && sh(p, "programSlug") === e.slug).map((p) => { const x = loc(p, "title"); return { t: esc(x.v), fb: x.fb }; });
  return { live: true, area: sh(e, "stage") !== "confirmed", ph: imgOf(e) ? null : AREA_PH[sh(e, "category")] || null, raw: e.title || t_.v, rawL: t_.v, id: e.id, slug: e.slug, c: sh(e, "category") || "other", img: imgOf(e), t: esc(t_.v), fb_t: t_.fb, d: esc(d_.v), fb_d: d_.fb, body: paras(b_.v), fb_body: b_.fb, featured: sh(e, "featured") === "yes", proj };
}
function mapProject(e) {
  const t_ = loc(e, "title"), d_ = loc(e, "summary"), b_ = loc(e, "body");
  return { live: true, raw: e.title || t_.v, rawL: t_.v, id: e.id, slug: e.slug, c: "project", img: imgOf(e), t: esc(t_.v), fb_t: t_.fb, d: esc(d_.v), fb_d: d_.fb, body: paras(b_.v), fb_body: b_.fb, featured: false, proj: [] };
}
function mapNews(e, kind) {
  const t_ = loc(e, "title"), s_ = loc(e, "summary"), b_ = loc(e, "body"), l_ = loc(e, "location");
  const bodyText = b_.v || "";
  const x = kind === "event" ? bodyText.slice(0, 180) : s_.v;
  return { live: true, id: e.id, k: kind, img: imgOf(e), d: parseDate(kind === "event" ? sh(e, "date") : sh(e, "publishDate"), e.createdAt), t: esc(t_.v), fb_t: t_.fb, x: esc(x), fb_x: kind === "event" ? b_.fb : s_.fb, body: paras(bodyText), fb_body: b_.fb, loc: esc(l_.v), fb_loc: l_.fb, featured: sh(e, "featured") === "yes" };
}
function buildViews() {
  const progEntries = live("programs"), slugs = new Set(progEntries.map((p) => p.slug));
  const progs = progEntries.map(mapProgram);
  const projs = live("projects").filter((p) => !slugs.has(sh(p, "programSlug"))).map(mapProject);
  PREVIEW.programs = SAMPLES && !(progs.length || projs.length);
  PROGRAMS = PREVIEW.programs ? PROPOSED_AREAS : [...progs, ...projs];
  const nw = live("news").map((e) => mapNews(e, "news")).sort(cmp), ev = live("events").map((e) => mapNews(e, "event")).sort((a, b) => cmp(b, a));
  PREVIEW.news = SAMPLES && !(nw.length || ev.length);
  NEWS = DEMO ? DEMO_ARTICLES : PREVIEW.news ? SAMPLE_NEWS : [...nw, ...ev];
  const SIZES = ["big", "", "t", "w", "", "t", "", "", "", ""];
  const gal = live("gallery").filter((e) => imgOf(e)).map((e, i) => { const g = (sh(e, "category") || "").trim().toLowerCase(); const t_ = loc(e, "title"); return { live: true, c: ["activities", "programs", "events"].includes(g) ? g : "activities", img: imgOf(e), s: SIZES[i % SIZES.length], cap: esc(t_.v), capRaw: t_.v }; });
  PREVIEW.gallery = SAMPLES && !gal.length;
  GALLERY = DEMO ? demoGallery() : PREVIEW.gallery ? SAMPLE_GALLERY : gal;
}
function mapTeam(e) {
  const n = loc(e, "title"), p = loc(e, "position"), b = loc(e, "body");
  return { live: true, id: e.id, img: imgOf(e), name: esc(n.v), fb_name: n.fb, pos: esc(p.v), fb_pos: p.fb, bio: paras(b.v), fb_bio: b.fb };
}
/* Leadership & team: live team members when published; otherwise null so the labelled placeholder stays. */
function teamBlock() {
  const team = live("team").map(mapTeam);
  if (!team.length) return "";
  const w = (o, f, h) => (o["fb_" + f] && lang === "km" ? `<span lang="en">${h}</span>` : h);
  return `<div class="team rv">${team.map((m) => `<article class="tcard"><div class="tph">${m.img ? phUrl(m.img, "center 20%") : il("mark")}</div><h3>${w(m, "name", m.name)}</h3>${m.pos ? `<p class="tpos">${w(m, "pos", m.pos)}</p>` : ""}${m.bio ? `<div class="tbio">${m.fb_bio && lang === "km" ? `<div lang="en">${m.bio}</div>` : m.bio}</div>` : ""}</article>`).join("")}</div>`;
}
const AREAS_ONLY = () => PROGRAMS.length > 0 && PROGRAMS.every((p) => p.area);
const areaNoteHtml = () => (!DEMO && PROGRAMS.some((p) => p.area) ? `<p class="previewnote">${anyConfirmed() ? t("areaNoteConf") : tb("areaNote")}</p>` : "");
const emptyBlock = (k) => `<div class="empty">${t(k)}</div>`;
// Home banner from the CMS (Pages -> "Home page - main banner"). Without a published record the approved default stays.
const heroRec = () => pg("home-hero");
// The highlighted word comes from the banner's "Highlighted word" field; older records may still mark it with *asterisks*.
function emph(title, word) {
  const h = esc(title);
  if (word) { const w = esc(word), i = h.indexOf(w); if (i >= 0) return h.slice(0, i) + "<em>" + w + "</em>" + h.slice(i + w.length); }
  return h.replace(/\*([^*]+)\*/g, "<em>$1</em>");
}
function heroTitle() {
  const e = heroRec(); const x = e && loc(e, "title"); if (!x || !x.v || (x.fb && lang === "km")) return tb("heroH");
  const hl = loc(e, "highlight"); return emph(x.v, hl && hl.v && !(hl.fb && lang === "km") ? String(hl.v).trim() : "");
}
function heroLede() { const e = heroRec(); const x = e && loc(e, "body"); const first = x && x.v ? lines(String(x.v).split(/\n{2,}/)[0])[0] : ""; if (!first || (x.fb && lang === "km")) return tb("heroP"); return esc(first); }
function heroPic() { const e = heroRec(); const img = e && imgOf(e); return img ? phUrl(img, "72% center").replace('loading="lazy"', 'loading="eager"') : SAMPLES ? ph("hero", "72% center") + samplePill() : panel("hero-panel"); }
// The gallery introduction ends with a sentence about stand-in illustrations; that sentence belongs to the design preview only.
function galleryLede() {
  if (DEMO) return tb("gaPhPDemo");
  if (SAMPLES) return tb("gaPhP");
  const own = T[lang].gaPhP, v = own || T.en.gaPhP, first = String(v).split(/(?<=[.។])\s+/)[0];
  return lang === "km" && !own ? en(first) : first;
}
// A neutral panel in the website's own colours: shown instead of an unapproved stock photograph on the live site.
const panel = (cls = "") => `<div class="il panel ${cls}" aria-hidden="true"></div>`;
// A photograph slot edited in the CMS (Pages -> "... header photograph"): the approved CMEHA photograph, else the labelled stock photograph (preview) or the panel (live).
function slotPic(slug, stockKey, pos = "center") {
  const e = pg(slug), img = e && imgOf(e);
  return img ? phUrl(img, pos) : SAMPLES ? ph(stockKey, pos) + samplePill() : panel();
}
function galleryHeaderArt() { const e = pg("gallery-photo"), img = e && imgOf(e); return img ? phUrl(img) : SAMPLES ? il("community", 0) : panel(); }
const momentsOn = () => !DEMO && (SAMPLES || GALLERY.length > 0), newsOn = () => !DEMO && (SAMPLES || NEWS.length > 0);
// Program wording follows the data: proposed, mixed, confirmed or empty.
const anyConfirmed = () => PROGRAMS.some((p) => !p.area);
function programsLede() {
  if (!PROGRAMS.length) { const v = String(T[lang].prPhP || T.en.prPhP); const last = v.split(/(?<=[.។])\s+/).pop(); return lang === "km" && !T.km.prPhP ? en(last) : last; }
  if (anyConfirmed()) return PROGRAMS.some((p) => p.area) ? t("prPhPMixed") : t("prPhPConf");
  return tb("prPhP");
}
function homeProgramsLede() {
  if (!PROGRAMS.length || (anyConfirmed() && !PROGRAMS.some((p) => p.area))) return "";
  return `<p>${anyConfirmed() ? t("prPMixed") : tb("prP")}</p>`;
}
function leadershipSection() {
  const team = teamBlock();
  if (DEMO || (!SAMPLES && !team && !pg("leadership"))) return "";
  // Both kinds of content are shown when both exist: the published Leadership message first, the team members below it.
  const leader = `<div class="leader rv"><div class="art">${il("mark")}</div><div>${pgBody("leadership", `<p style="margin:0">${tb("leadP")}</p>`)}</div></div>`;
  const body = team && pg("leadership") ? `${leader}<div style="margin-top:36px">${team}</div>` : team || leader;
  return `<section class="s soft"><div class="wrap"><div class="sec-h"><div><span class="eyebrow">${t("lead")}</span><h2>${tb("leadH")}</h2></div></div>${body}</div></section>`;
}
const previewNote = (kind) => (DEMO ? (kind === "gallery" ? `<p class="demo-note" role="note">${tb("gaDemoNote")}</p>` : "") : PREVIEW[kind] ? `<p class="previewnote">${kind === "programs" ? tb("areaNote") : t("previewNote")}</p>` : "");
const pg = (slug) => live("pages").find((e) => e.slug === slug);
const pgTitle = (slug, fallback) => { const e = pg(slug); if (!e) return fallback; const x = loc(e, "title"); if (x.v && x.fb && lang === "km" && fallback) return fallback; return x.v ? (x.fb && lang === "km" ? en(esc(x.v)) : esc(x.v)) : fallback; };
const pgBody = (slug, fallback) => { const e = pg(slug); if (!e) return fallback; const x = loc(e, "body"); if (!x.v) return fallback; if (x.fb && lang === "km" && fallback) return fallback; const h = paras(x.v); return x.fb && lang === "km" ? `<div lang="en">${h}</div>` : h; };
/* ---------------- official-content helpers ---------------- */
function kmNoteSync() {
  const main = document.querySelector("#main"); main.querySelectorAll(".trnote").forEach((e) => e.remove());
  if (lang !== "km" || !main.querySelector("[lang=en]")) return;
  const host = main.querySelector(".ph .rv, .ph .wrap, .hero .copy"); if (host) host.insertAdjacentHTML("beforeend", `<p class="trnote">${T.km.awaitKm}</p>`);
}
const lines = (s) => String(s || "").split(/\n+/).map((x) => x.replace(/^\s*(?:[-*•]|\d+[.)])\s*/, "").trim()).filter(Boolean);
const listHtml = (items, tag) => `<${tag} class="olist">${items.map((x) => `<li>${esc(x)}</li>`).join("")}</${tag}>`;
// A list-shaped section: CMS page text (one item per line) replaces the default items.
function pgList(slug, defaults, tag = "ol") {
  const e = pg(slug); const x = e && loc(e, "body");
  if (!x || !x.v || (x.fb && lang === "km" && defaults.length)) return listHtml(defaults, tag);
  const items = lines(x.v); const h = items.length > 1 ? listHtml(items, tag) : paras(x.v);
  return x.fb && lang === "km" ? `<div lang="en">${h}</div>` : h;
}
// One logo element, shown as a real crop of the existing logo (no invented artwork).
const crop = (L, label = L.t) => { const p = (c) => Math.round(Math.min(1, Math.max(0, (c * L.z - 0.5) / (L.z - 1))) * 100); return `<span class="lm-thumb" role="img" aria-label="${esc(label)}" style="background-size:${L.z * 100}% auto;background-position:${p(L.cx)}% ${p(L.cy)}%"></span>`; };
const logoMeaning = () => `<div class="logo-meaning rv"><figure class="lm-art"><div class="lm-frame"><img src="assets/logo.jpg" alt="${t("logoAlt")}" width="520" height="511" loading="lazy">${OFFICIAL.logo.map((L) => `<span class="lm-pin" aria-hidden="true" style="left:${L.mx}%;top:${L.my}%">${L.n}</span>`).join("")}</div></figure>
  <ol class="lm-list">${OFFICIAL.logo.map((L, i) => { const K = ofl().logo[i]; return `<li>${crop(L, K.t)}<div><b>${L.n}. ${esc(K.t)}</b><span>${esc(K.x)}</span></div></li>`; }).join("")}</ol></div>`;
const membershipCards = () => `<div class="mem rv">${OFFICIAL.membership.map((m, i) => { const K = ofl().membership[i]; const e = pg(m.slug); const ttl = e ? pgTitle(m.slug, esc(K.t)) : esc(K.t); const body = pgBody(m.slug, `<p>${esc(K.x)}</p>`); return `<article class="mem-card ${i ? "assoc" : "ord"}"><span class="mem-ic">${ic(i ? "users" : "cap")}</span><h3>${ttl}</h3>${body}</article>`; }).join("")}</div>`;
const S = (k) => (DATA.settings[k] ? esc(DATA.settings[k]) : t("tbc"));
// Links entered in Website Settings: only https addresses are used (a value is ignored if it is not one).
const httpsUrl = (u) => { try { const x = new URL(String(u || "").trim()); return x.protocol === "https:" && x.hostname.includes(".") ? x.href : ""; } catch { return ""; } };
const tgUrl = (v) => { v = String(v || "").trim(); return /^@?[A-Za-z0-9_]{4,32}$/.test(v) ? "https://t.me/" + v.replace(/^@/, "") : httpsUrl(v); };
const onlineLinks = () => [["Facebook", httpsUrl(DATA.settings.facebook)], ["Instagram", httpsUrl(DATA.settings.instagram)], ["LinkedIn", httpsUrl(DATA.settings.linkedin)], ["TikTok", httpsUrl(DATA.settings.tiktok)], ["Telegram", tgUrl(DATA.settings.telegram)], ["Google Maps", httpsUrl(DATA.settings.googleMapsLink)]].filter((x) => x[1]);
const onlineHtml = () => onlineLinks().map(([n, u]) => `<a href="${esc(u)}" target="_blank" rel="noopener noreferrer">${n}</a>`).join("<br>");
const allEmails = () => { const e = (DATA.settings.email || "").trim(); return [e && /^[^@\s<>"']+@[^@\s<>"']+\.[^@\s<>"']+$/.test(e) ? e : EMAILS[0]]; };
const AREA_CATS = ["community-education", "scholarships", "hr-development", "humanitarian"];
const progCats = () => (PREVIEW.programs ? AREA_CATS : [...AREA_CATS, "education", "community", "other", "project"].filter((c) => PROGRAMS.some((p) => p.c === c)));
const phUrl = (url, pos = "center") => `<div class="il"><img src="${esc(url)}" alt="${esc(DATA.media[url] || "")}" loading="lazy" decoding="async" style="object-position:${pos}"></div>`;

/* ---------------- shared pieces ---------------- */
const ph = (k, pos = "center") => `<div class="il"><img src="assets/photos/${k}.jpg" alt="" loading="${k === "hero" ? "eager" : "lazy"}" decoding="async" style="object-position:${pos}"></div>`;
const samplePill = () => (DEMO ? "" : `<span class="samplepill">${t("samplePhoto")}</span>`);
const il = (name, tone = 0) => `<div class="il">${window.ILLU[name](tone)}</div>`;
const NAV = [["home", "index.html"], ["about", "about.html"], ["programs", "programs.html"], ["news", "news.html"], ["gallery", "gallery.html"], ["contact", "contact.html"]];
const en = (s) => `<span lang="en">${s}</span>`;
const ctext = (o, f) => (o.live ? (o["fb_" + f] && lang === "km" ? en(o[f]) : o[f]) : lang === "km" ? (o[f + "k"] || en(o[f])) : o[f]);
const propTitle = (p) => (lang === "km" ? (p.live ? p.rawL || p.raw : p.tk || p.raw) : p.raw || p.t);
const gcap = (g) => (lang === "km" && g.capk ? g.capk : g.cap);
const pic = (o, pos = "center") => (o.img ? phUrl(o.img, pos) : o.ph ? (SAMPLES ? ph(o.ph, pos) + samplePill() : panel()) : il("mark"));
const gpic = (g) => (g.photo ? `<div class="il"><img src="assets/photos/${g.photo}.jpg" alt="${esc(gcap(g))}" loading="lazy" decoding="async"></div>` : g.img ? phUrl(g.img) : il(g.ill, g.tone));
// Demo gallery: the credited stock photographs, captioned with what their source says about them (never presented as CMEHA activities)
const DEMO_GALLERY_KEYS = ["a1", "p3", "a2", "p5", "a3", "p1", "a4", "p4", "a5", "p2", "intro", "p6"];
const demoGallery = () => demoGalleryItems();

// SEO. Indexing (robots, canonical, sitemap) is NOT read from the CMS: it is set when the website is deployed.
const SEO_SLOT = { home: "home-hero", about: "about-story" };
const sameOrHttps = (u) => { if (!String(u || "").trim()) return ""; try { const x = new URL(String(u || "").trim(), location.origin); return x.protocol === "https:" || x.origin === location.origin ? x.href : ""; } catch { return ""; } };
const sameOrigin = (u) => { if (!String(u || "").trim()) return ""; try { const x = new URL(String(u || "").trim(), location.origin); return x.origin === location.origin ? x.href : ""; } catch { return ""; } };
function applySeo() {
  const label = t(PAGE === "home" ? "home" : PAGE), site = String(DATA.settings.siteTitle || "").trim().slice(0, 120);
  const rec = SEO_SLOT[PAGE] && pg(SEO_SLOT[PAGE]); const own = (k) => { const x = rec && loc(rec, k); return x && x.v && !(x.fb && lang === "km") ? String(x.v).trim() : ""; };
  const title = own("seoTitle") || (site ? (PAGE === "home" ? site : `${label} — ${site}`) : `CMEHA — ${label}`);
  document.title = title + (LIVE || DEMO ? "" : " " + t("titleSfx"));
  const meta = (sel, make, val) => { if (!val) return; let m = document.querySelector(sel); if (!m) { m = make(); document.head.appendChild(m); } m.setAttribute("content", val); };
  const mk = (attr, name) => () => { const m = document.createElement("meta"); m.setAttribute(attr, name); return m; };
  const desc = (own("seoDescription") || String(DATA.settings.metaDescription || "")).trim().slice(0, 300);
  meta('meta[name="description"]', mk("name", "description"), desc); meta('meta[property="og:description"]', mk("property", "og:description"), desc);
  meta('meta[property="og:title"]', mk("property", "og:title"), title);
  meta('meta[property="og:image"]', mk("property", "og:image"), sameOrHttps(DATA.settings.defaultSocialImage));
  const fav = sameOrigin(DATA.settings.favicon); if (fav) { let l = document.querySelector('link[rel="icon"]'); if (!l) { l = document.createElement("link"); l.rel = "icon"; document.head.appendChild(l); } l.removeAttribute("type"); l.href = fav; }
}
function chrome() {
  document.documentElement.lang = lang;
  applySeo();
  document.querySelector("#top").innerHTML = `
  <a class="skip" href="#main">${t("skip")}</a>
  ${LIVE || DEMO ? "" : `<div class="notice-bar" role="note">${t("note")}</div>`}
  <header class="site"><div class="wrap bar">
    <a class="brand" href="index.html" aria-label="CMEHA — ${t("home")}"><img src="assets/logo.jpg" alt="${t("logoAlt")}" width="48" height="48"><span><b>CMEHA</b><small>${orgName()}</small></span></a>
    <button class="menu-btn" aria-expanded="false" aria-controls="nav" aria-label="${t("menu")}">${ic("menu")}</button>
    <nav class="main" id="nav" aria-label="${t("mainNav")}"><ul>
      ${NAV.map(([k, h]) => `<li><a href="${h}" ${PAGE === k ? 'aria-current="page"' : ""}>${t(k)}</a></li>`).join("")}
    </ul></nav>
    <div class="lang" role="group" aria-label="${t("langLabel")}"><button data-l="en" aria-pressed="${lang === "en"}" lang="en">EN</button><button data-l="km" aria-pressed="${lang === "km"}" lang="km">ខ្មែរ</button></div>
  </div></header>`;
  document.querySelector("#bottom").innerHTML = `
  <footer class="site"><div class="wrap"><div class="fcols">
    <div><div class="fbrand"><img src="assets/logo.jpg" alt="" width="60" height="60"><strong>${orgName()}</strong></div><p>${DEMO ? t("rightsDemo") : LIVE ? t("rightsLive") : `${t("rights")} ${t("prevNote")}`}</p></div>
    <div><h4>${t("fLinks")}</h4><ul>${NAV.map(([k, h]) => `<li><a href="${h}">${t(k)}</a></li>`).join("")}</ul></div>
    <div><h4>${t("fContact")}</h4><ul>${allEmails().map((e) => `<li><a href="mailto:${e}">${e}</a></li>`).join("")}${onlineLinks().map(([n, u]) => `<li><a href="${esc(u)}" target="_blank" rel="noopener noreferrer">${n}</a></li>`).join("")}</ul></div>
  </div><div class="fbot"><span>${t("credit")} <a href="https://www.bizwebkh.com" rel="noopener">BizWeb KH</a></span><span><a href="credits.html">${t("credits")}</a>${DEMO ? "" : " · cmeha-cambodia.org"}</span></div></div></footer>`;
  const nav = document.querySelector("#nav"), btn = document.querySelector(".menu-btn");
  btn.onclick = () => { const o = nav.classList.toggle("open"); btn.setAttribute("aria-expanded", o); };
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") { nav.classList.remove("open"); btn.setAttribute("aria-expanded", false); } });
  document.querySelectorAll(".lang button").forEach((b) => (b.onclick = () => { lang = b.dataset.l; try { localStorage.setItem("cmeha-lang", lang); } catch {} render(); }));
}

const tile = (p, cls = "") => `<button class="tile rv ${cls}" data-open="${p.id}" aria-haspopup="dialog">${pic(p)}<span class="tx"><span class="chip">${cat(p.c)}</span><h3>${ctext(p, "t")}</h3><p>${ctext(p, "d")}</p>${DEMO ? `<span class="more">${t("viewDetails")}${ic("arrow")}</span>` : ""}</span></button>`;
const homeTile = (p, cls = "") => `<a class="tile rv ${cls}" href="programs.html#p=${p.id}">${pic(p)}<span class="tx"><span class="chip">${cat(p.c)}</span><h3>${ctext(p, "t")}</h3><p>${ctext(p, "d")}</p>${DEMO ? `<span class="more">${t("viewDetails")}${ic("arrow")}</span>` : ""}</span></a>`;
const dateBlock = (d, sample) => sample ? `<span class="date sample" title="${esc(T.en.sampleDate)}"><b>—</b><i>${T[lang].sample}</i></span>` : !d ? "" : `<span class="date"><b>${d[2]}</b><i>${lang === "km" ? MON.km[d[1] - 1] : MON.en[d[1] - 1]}</i></span>`;
const metaLine = (n) => `<div class="meta"><span class="chip alt">${t("ty")[n.k] || T[lang].ty[n.k]}</span>${n.sample ? `<span>${ic("cal")}${t("sampleDate")}</span>` : n.d ? `<span>${ic("cal")}${fmt(n.d)}</span>` : ""}</div>`;
const newsRow = (n) => `<button class="row rv" data-news="${n.id}" aria-haspopup="dialog"><div class="im">${pic(n)}</div><div>${metaLine(n)}<h3>${ctext(n, "t")}</h3></div></button>`;
const cta = () => `<section class="cta s" style="padding:56px 0"><div class="wrap"><div><h2>${t("ctaH")}</h2><p>${t("ctaP")}</p></div><div class="btns"><a class="btn btn-gold" href="mailto:${allEmails()[0]}">${ic("mail")}${t("emailUs")}</a><a class="btn btn-ghost" href="contact.html">${t("contactPage")}</a></div></div></section>`;

/* ---------------- pages ---------------- */
const CREDITS = [["hero","Students at an outdoor school assembly, Cambodia","https://www.pexels.com/photo/outdoor-school-assembly-in-cambodia-32615456/","Sambok pen","Home hero","Pexels","Pexels License"],["about","A man and a local woman in a village (location not stated by the source)","https://www.pexels.com/photo/man-sharing-smartphone-with-local-woman-in-village-38385621/","Sinan KRIYA","About hero","Pexels","Pexels License"],["intro","Community clean-up, Krong Battambang, Cambodia","https://www.pexels.com/photo/teamwork-in-battambang-community-clean-up-37321375/","SARET SAYON","Home introduction","Pexels","Pexels License"],["p1","Graduates celebrating, Battambang, Cambodia","https://www.pexels.com/photo/celebratory-graduation-ceremony-in-cambodia-38594975/","HANUMAN PHOTO STUDIO","Program card 1","Pexels","Pexels License"],["p2","Volunteers sweeping outdoors, Krong Battambang, Cambodia","https://www.pexels.com/photo/community-clean-up-in-krong-battambang-cambodia-37321384/","SARET SAYON","Program card 2","Pexels","Pexels License"],["p3","Children reading together, Cham village, Kampong Cham, Cambodia","https://commons.wikimedia.org/wiki/File:Kids_Studying_-_Cham_Muslim_Village_-_Tonle_Bet_Commune_-_Kampong_Cham_-_Cambodia_(48345486182).jpg","Adam Jones","Program card 3","Wikimedia Commons","CC BY-SA 2.0"],["p4","A woman and children playing, Kampong Phluk, Siem Reap, Cambodia","https://www.pexels.com/photo/community-interaction-in-kampong-phluk-39974869/","Mahmut Yılmaz","Program card 4","Pexels","Pexels License"],["p5","Schoolchildren sitting outdoors, Cambodia","https://www.pexels.com/photo/cambodian-school-children-sitting-outdoors-32615451/","Sambok pen","Program card 5","Pexels","Pexels License"],["p6","Young woman with a bicycle, Krong Battambang, Cambodia","https://www.pexels.com/photo/young-woman-smiling-with-bicycle-in-cambodia-37321402/","SARET SAYON","Program card 6","Pexels","Pexels License"],["a1","Youth computer training, Ratanakiri, Cambodia","https://commons.wikimedia.org/wiki/File:Team_BEAUTIFUL.jpg","Linh Anh Moreau","Home activities","Wikimedia Commons","CC BY-SA 4.0"],["a2","Village street scene, Cham village, Kampong Cham, Cambodia","https://commons.wikimedia.org/wiki/File:Village_Scene_-_Cham_Muslim_Village_-_Tonle_Bet_Commune_-_Kampong_Cham_-_Cambodia_(48345484992).jpg","Adam Jones","Home activities","Wikimedia Commons","CC BY-SA 2.0"],["a3","Students returning from school by boat, Kampong Phluk, Cambodia","https://commons.wikimedia.org/wiki/File:20171129_Uczniowie_Kampong_Phlouk_6179_DxO.jpg","Jakub Hałun","Home activities","Wikimedia Commons","CC BY-SA 4.0"],["a4","Young Cambodians sitting an entrance exam, Sihanoukville","https://commons.wikimedia.org/wiki/File:Donboscocambodia0001.JPG","Albeiro Rodas","Home activities","Wikimedia Commons","Public domain (author's declaration)"],["a5","Students at a workshop, Pannasastra University of Cambodia","https://commons.wikimedia.org/wiki/File:Wikipedia_Workshop_at_Pannasastra_University_of_Cambodia.jpg","Sir Nicholas de Mimsy-Porpington","Home activities","Wikimedia Commons","CC BY-SA 4.0"]];
const CREDITS_KM = {hero: ["សិស្សជួបជុំគ្នានៅក្រៅអគារក្នុងពិធីរបស់សាលារៀន ប្រទេសកម្ពុជា", "ផ្ទាំងបង្ហាញទំព័រដើម"], about: ["បុរសម្នាក់ និងស្ត្រីក្នុងស្រុកម្នាក់នៅភូមិមួយ (ប្រភពមិនបញ្ជាក់ទីតាំង)", "ផ្ទាំងបង្ហាញទំព័រអំពីយើង"], intro: ["ការសម្អាតរួមគ្នាក្នុងសហគមន៍ ក្រុងបាត់ដំបង ប្រទេសកម្ពុជា", "ការណែនាំនៅទំព័រដើម"], p1: ["និស្សិតបញ្ចប់ការសិក្សាអបអរសាទរ បាត់ដំបង ប្រទេសកម្ពុជា", "កាតកម្មវិធី ១"], p2: ["អ្នកស្ម័គ្រចិត្តកំពុងបោសសម្អាតខាងក្រៅ ក្រុងបាត់ដំបង ប្រទេសកម្ពុជា", "កាតកម្មវិធី ២"], p3: ["កុមារអានសៀវភៅជាមួយគ្នា ភូមិចាម ខេត្តកំពង់ចាម ប្រទេសកម្ពុជា", "កាតកម្មវិធី ៣"], p4: ["ស្ត្រីម្នាក់ និងកុមារកំពុងលេង កំពង់ភ្លុក ខេត្តសៀមរាប ប្រទេសកម្ពុជា", "កាតកម្មវិធី ៤"], p5: ["សិស្សអង្គុយនៅខាងក្រៅ ប្រទេសកម្ពុជា", "កាតកម្មវិធី ៥"], p6: ["ស្ត្រីវ័យក្មេងម្នាក់ជាមួយកង់ ក្រុងបាត់ដំបង ប្រទេសកម្ពុជា", "កាតកម្មវិធី ៦"], a1: ["ការបណ្តុះបណ្តាលកុំព្យូទ័រសម្រាប់យុវជន រតនគិរី ប្រទេសកម្ពុជា", "សកម្មភាពនៅទំព័រដើម"], a2: ["ទិដ្ឋភាពផ្លូវក្នុងភូមិចាម ខេត្តកំពង់ចាម ប្រទេសកម្ពុជា", "សកម្មភាពនៅទំព័រដើម"], a3: ["សិស្សធ្វើដំណើរពីសាលាមកវិញដោយទូក កំពង់ភ្លុក ប្រទេសកម្ពុជា", "សកម្មភាពនៅទំព័រដើម"], a4: ["យុវជនកម្ពុជាកំពុងប្រឡងចូលរៀន ក្រុងព្រះសីហនុ", "សកម្មភាពនៅទំព័រដើម"], a5: ["និស្សិតក្នុងសិក្ខាសាលា សាកលវិទ្យាល័យបញ្ញាសាស្ត្រកម្ពុជា", "សកម្មភាពនៅទំព័រដើម"]};
const LIC_KM = { "Pexels License": "អាជ្ញាប័ណ្ណ Pexels", "Public domain (author's declaration)": "ដែនសាធារណៈ (ការប្រកាសរបស់អ្នកថត)" };
function homeProgramsBlock() {
  const list = AREAS_ONLY() && PROGRAMS.length >= 4 ? [PROGRAMS[0], PROGRAMS[1], PROGRAMS[3], PROGRAMS[2]] : [...PROGRAMS.filter((p) => p.featured), ...PROGRAMS.filter((p) => !p.featured)].slice(0, 4);
  if (!list.length) return emptyBlock("emptyProg");
  if (list.length >= 4) return areaNoteHtml() + `<div class="bento">${list.map((p, i) => homeTile(p, ["b1", "b2", "b3", "b4"][i])).join("")}</div>`;
  return areaNoteHtml() + `<div class="pgrid" data-n="${list.length}">${list.map((p) => homeTile(p)).join("")}</div>`;
}
function homeActivities() {
  if (!GALLERY.length) return emptyBlock("emptyGal");
  if (PREVIEW.gallery) return `${PREVIEW.gallery ? previewNote("gallery") : `<p class="previewnote">${t("previewNote")}</p>`}<div class="act rv"><figure class="a1">${ph("a1")}<figcaption>${T[lang].gcat.activities}</figcaption></figure><figure class="a2">${ph("a2")}</figure><figure class="a3">${ph("a3", "center 25%")}</figure><figure class="a4">${ph("a4")}</figure><figure class="a5">${ph("a5", "center 30%")}</figure></div>`;
  const g = GALLERY.slice(0, 5);
  return `<div class="act rv${g.length < 5 ? " few" : ""}">${g.map((x, i) => `<figure class="a${i + 1}">${gpic(x)}${i === 0 ? `<figcaption>${x.live ? x.cap : gcap(x)}</figcaption>` : ""}</figure>`).join("")}</div>`;
}
function featuredNews() {
  const nws = NEWS.filter((n) => n.k === "news");
  return PREVIEW.news ? nws[0] : nws.find((n) => n.featured) || nws[0] || NEWS[0];
}
function homeNews() {
  const f = featuredNews();
  const rest = PREVIEW.news ? [NEWS[1], NEWS[2], NEWS[4]] : NEWS.filter((n) => n !== f).slice(0, 3);
  if (!f) return emptyBlock("emptyNews");
  return `${previewNote("news")}<div class="news"><button class="feat rv" data-news="${f.id}" aria-haspopup="dialog"><div class="im">${pic(f)}</div><div class="bd">${metaLine(f)}<h3>${ctext(f, "t")}</h3><p>${ctext(f, "x")}</p><span class="link">${t("readMore")}${ic("arrow")}</span></div></button>
    <div class="stack">${rest.map(newsRow).join("")}<a class="link" href="news.html">${t("allNews")}${ic("arrow")}</a></div></div></div>`;
}

const PAGES = {
  credits: () => `<section class="ph"><div class="wrap"><span class="eyebrow">${t("credits")}</span><h1 style="max-width:none">${t("credits")}</h1><p class="lede">${DEMO ? t("crExDemo") : SAMPLES ? t("crEx") : t("crExLive")}</p></div></section>
    <section class="s" style="padding-top:12px"><div class="wrap"><div class="credit-list">${CREDITS.map((c) => `<a class="credit" href="${esc(c[2])}" rel="noopener"><img src="assets/photos/${c[0]}.jpg" alt="" loading="lazy" width="120" height="80"><span><b${lang === "km" ? "" : ' lang="en"'}>${lang === "km" ? CREDITS_KM[c[0]][0] : c[1]}</b><span>${t("crBy").replace("{n}", c[3]).replace("{s}", c[5])}</span><small>${lang === "km" ? LIC_KM[c[6]] || c[6] : c[6]}${SAMPLES && !DEMO ? ` · ${t("crUsed")} ${lang === "km" ? CREDITS_KM[c[0]][1] : c[4]}` : ""}</small></span></a>`).join("")}</div></div></section>`,
  home: () => `
  <section class="hero">${heroPic()}<div class="wrap"><div class="copy rv"><span class="eyebrow">${t("heroEy")}</span><h1>${heroTitle()}</h1><p class="lede">${heroLede()}</p><div class="btns"><a class="btn btn-gold" href="programs.html">${t("c1")}${ic("arrow")}</a><a class="btn btn-ghost" href="contact.html">${t("c2")}</a></div></div></div>
    </section>
  <section class="s"><div class="wrap split"><div class="frame rv">${slotPic("home-intro", "intro", "center 28%")}</div><div class="rv"><span class="eyebrow">${t("abEy")}</span><h2 style="font-size:clamp(28px,3.4vw,40px);margin-top:10px">${pgTitle("home-intro", tb("abH"))}</h2>${pgBody("home-intro", "")}
    <div class="mv"><div><h3>${ic("eye")}${t("mission")}</h3>${pgBody("mission", `<p>${esc(ofl().missionShort)}</p>`)}</div><div><h3>${ic("spark")}${t("vision")}</h3>${pgBody("vision", `<p>${esc(ofl().vision)}</p>`)}</div></div>
    <a class="link" href="about.html">${t("learn")}${ic("arrow")}</a></div></div></section>
  <section class="s soft"><div class="wrap"><div class="sec-h"><div><span class="eyebrow">${t("prEy")}</span><h2>${t("prH")}</h2></div>${homeProgramsLede()}</div>
    ${homeProgramsBlock()}
    ${PROGRAMS.length ? `<p style="margin:28px 0 0"><a class="link" href="programs.html">${t("allProg")}${ic("arrow")}</a></p>` : ""}</div></section>
  ${momentsOn() ? `<section class="s"><div class="wrap"><div class="sec-h"><div><span class="eyebrow">${t("actEy")}</span><h2>${t("actH")}</h2></div>${SAMPLES ? `<p>${tb("actP")}</p>` : ""}</div>
    ${SAMPLES ? `<ul class="hl rv"><li><span class="ib">${ic("book")}</span><div><b>${t("h1t")}</b><span>${tb("h1d")}</span></div></li><li><span class="ib">${ic("heart")}</span><div><b>${t("h2t")}</b><span>${tb("h2d")}</span></div></li><li><span class="ib">${ic("users")}</span><div><b>${t("h3t")}</b><span>${tb("h3d")}</span></div></li></ul>` : ""}
    ${homeActivities()}</div></section>` : ""}
  ${newsOn() ? `<section class="s soft"><div class="wrap"><div class="sec-h"><div><span class="eyebrow">${t("nwEy")}</span><h2>${t("nwH")}</h2></div><p>${tb("nwP")}</p></div>
    ${homeNews()}</div></section>` : ""}
  ${cta()}`,

  about: () => `
  <section class="ph"><div class="wrap split"><div class="rv"><span class="eyebrow">${t("abPh")}</span><h1>${t("abEy")}</h1><p class="lede">${esc(ofl().intro)}</p></div><div class="art rv">${slotPic("about-photo", "about", "center 40%")}<img class="badge" src="assets/logo.jpg" alt="${t("logoAlt")}"></div></div></section>
  ${pg("about-story") ? `<section class="s"><div class="wrap"><div class="rv story"><h2 style="font-size:clamp(26px,3vw,36px);margin-top:0">${pgTitle("about-story", "")}</h2>${pgBody("about-story", "")}</div></div></section>` : ""}
  <section class="s soft"><div class="wrap"><div class="panels rv"><div class="p1"><h2><span class="ib">${ic("eye")}</span>${t("vision")}</h2><div class="vision-text">${pgBody("vision", `<p>${esc(ofl().vision)}</p>`)}</div></div><div class="p2"><h2><span class="ib">${ic("spark")}</span>${t("mission")}</h2>${pgList("mission", ofl().mission, "ol")}</div></div></div></section>
  <section class="s"><div class="wrap"><div class="sec-h"><div><span class="eyebrow">${tb("tgtEy")}</span><h2>${tb("tgtH")}</h2></div></div>${pgList("targets", ofl().targets, "ol").replace('class="olist"', 'class="olist tgts rv"')}</div></section>
  <section class="s soft"><div class="wrap"><div class="sec-h"><div><span class="eyebrow">${tb("lmEy")}</span><h2>${pg("logo-meaning") ? pgTitle("logo-meaning", tb("lmH")) : tb("lmH")}</h2></div><p>${pg("logo-meaning") ? pgBody("logo-meaning", "") : tb("lmP")}</p></div>${logoMeaning()}</div></section>
  <section class="s"><div class="wrap"><div class="sec-h"><div><span class="eyebrow">${tb("memEy")}</span><h2>${tb("memH")}</h2></div><p>${tb("memP")}</p></div>${membershipCards()}</div></section>
  ${leadershipSection()}
  ${cta()}`,

  programs: () => {
    const cats = progCats();
    return `<section class="ph"><div class="wrap split"><div class="rv"><span class="eyebrow">${t("prPh")}</span><h1>${t("prPhH")}</h1><p class="lede">${programsLede()}</p></div><div class="art rv">${slotPic("programs-photo", "a1", "center 40%")}</div></div></section>
    <div class="fbar"${PROGRAMS.length ? "" : " hidden"}><div class="wrap in"><div class="pills" role="group" aria-label="${t("prPh")}"><button class="pill" data-cat="all" aria-pressed="true">${t("all")} <small>${PROGRAMS.length}</small></button>${cats.map((c) => `<button class="pill" data-cat="${c}" aria-pressed="false">${cat(c)} <small>${PROGRAMS.filter((p) => p.c === c).length}</small></button>`).join("")}</div>
    <label class="search"><span class="sr">${t("search")}</span>${ic("search")}<input type="search" id="q" placeholder="${t("search")}"></label></div></div>
    <section class="s" style="padding-top:8px"><div class="wrap" id="plist" aria-live="polite"></div></section>${cta()}`;
  },
  news: () => {
    const f = featuredNews(); const rest = NEWS.filter((n) => n.k === "news" && n !== f); const ev = NEWS.filter((n) => n.k === "event");
    const latestCol = rest.length ? `<div><h2 style="font-size:28px">${t("latest")}</h2><div class="stack" style="gap:18px">${rest.map((n) => `<button class="art-c rv" data-news="${n.id}" aria-haspopup="dialog"><div class="im">${pic(n)}</div><div class="bd">${metaLine(n)}<h3>${ctext(n, "t")}</h3><p>${ctext(n, "x")}</p></div></button>`).join("")}</div></div>` : "", eventsCol = ev.length ? `<div><h2 style="font-size:28px">${t("upcoming")}</h2><div class="stack">${ev.map((n) => `<button class="evt rv" data-news="${n.id}" aria-haspopup="dialog">${dateBlock(n.d, n.sample)}<div><h3>${ctext(n, "t")}</h3><div class="meta"><span>${ic("pin")}${n.loc ? ctext(n, "loc") : t("whereV")}</span></div></div></button>`).join("")}</div></div>` : "";
    return `<section class="ph"><div class="wrap split"><div class="rv"><span class="eyebrow">${t("nwPh")}</span><h1>${t("nwPhH")}</h1><p class="lede">${tb("nwPhP")}</p></div><div class="art rv">${slotPic("news-photo", "a3", "center 30%")}</div></div></section>
    <section class="s" style="padding-top:20px"><div class="wrap">${previewNote("news")}${NEWS.length ? "" : emptyBlock("emptyNews")}${f ? `<button class="feat rv" data-news="${f.id}" style="display:grid;grid-template-columns:1.2fr 1fr;align-items:stretch" aria-haspopup="dialog"><div class="im" style="aspect-ratio:auto;min-height:320px">${pic(f)}</div><div class="bd" style="display:flex;flex-direction:column;justify-content:center"><span class="chip" style="align-self:flex-start;margin-bottom:10px">${t("featured")}</span>${metaLine(f)}<h3>${ctext(f, "t")}</h3><p>${ctext(f, "x")}</p><span class="link">${t("readMore")}${ic("arrow")}</span></div></button>` : ""}
    <div class="split" style="align-items:start;margin-top:56px;gap:48px${latestCol || eventsCol ? "" : ";display:none"}${latestCol && eventsCol ? "" : ";grid-template-columns:1fr"}">${latestCol}${eventsCol}</div></div></section><style>@media(max-width:760px){.feat[data-news]{grid-template-columns:1fr!important}}</style>${cta()}`;
  },
  gallery: () => `<section class="ph"><div class="wrap split"><div class="rv"><span class="eyebrow">${t("gaPh")}</span><h1>${t("gaPhH")}</h1><p class="lede">${galleryLede()}</p></div><div class="art rv">${galleryHeaderArt()}</div></div></section>
    <div class="fbar"${GALLERY.length && !DEMO ? "" : " hidden"}><div class="wrap in"><div class="pills" role="group" aria-label="${t("gaPh")}"><button class="pill" data-g="all" aria-pressed="true">${t("all")}</button>${["activities", "programs", "events"].map((c) => `<button class="pill" data-g="${c}" aria-pressed="false">${T[lang].gcat[c]}</button>`).join("")}</div></div></div>
    <section class="s" style="padding-top:28px"><div class="wrap">${previewNote("gallery")}<div class="mas" id="mas"></div></div></section>
    <dialog class="lb" id="lb" aria-label="${t("gaPh")}"><div class="stage" id="lbs"></div><button class="xbtn close" aria-label="${t("close")}" id="lbx">${ic("x")}</button><button class="xbtn prev" aria-label="${t("prev")}" id="lbp">${ic("left")}</button><button class="xbtn next" aria-label="${t("next")}" id="lbn">${ic("right")}</button><div class="cap"><div><b id="lbc"></b><span id="lbm"></span></div></div></dialog>${cta()}`,
  contact: () => `<section class="ph"><div class="wrap"><span class="eyebrow">${t("coPh")}</span><h1 style="max-width:none">${t("coPhH")}</h1><p class="lede">${tb(DEMO ? "coPhPDemo" : "coPhP")}</p></div></section>
    <section class="s" style="padding-top:20px"><div class="wrap"><div class="cgrid rv"><div class="cinfo"><h2>${t("details")}</h2><ul>
      <li><span class="ib">${ic("mail")}</span><div><small>${t("emailL")}</small>${allEmails().map((e) => `<a href="mailto:${e}">${e}</a>`).join("<br>")}</div></li>
      ${DATA.settings.phone || (SAMPLES && !DEMO) ? `<li><span class="ib">${ic("phone")}</span><div><small>${t("phoneL")}</small>${S("phone")}</div></li>` : ""}
      ${DATA.settings.address || (SAMPLES && !DEMO) ? `<li><span class="ib">${ic("pin")}</span><div><small>${t("addrL")}</small>${S("address")}</div></li>` : ""}${onlineLinks().length ? `<li><span class="ib">${ic("arrow")}</span><div><small>${t("onlineL")}</small>${onlineHtml()}</div></li>` : ""}</ul></div>
    <form class="cform" id="f" novalidate><h2>${t("formH")}</h2>
      <div class="two"><div class="fld"><label for="fn">${t("name")}</label><input id="fn" name="n" autocomplete="name" required maxlength="100" aria-describedby="en-n"><div class="err" id="en-n"></div></div><div class="fld"><label for="fe">${t("email")}</label><input id="fe" name="e" type="email" autocomplete="email" required maxlength="254" aria-describedby="en-e"><div class="err" id="en-e"></div></div></div>
      <div class="fld"><label for="fm">${t("msg")}</label><textarea id="fm" name="m" rows="6" required maxlength="5000" aria-describedby="en-m"></textarea><div class="err" id="en-m"></div></div>
      <div class="hp" aria-hidden="true"><label>Website<input name="website" tabindex="-1" autocomplete="off"></label></div>
      <button class="btn btn-blue" type="submit">${t(DEMO ? "sendDemo" : "send")}${ic("arrow")}</button><p class="hint">${tb(DEMO ? "formHintDemo" : "formHint")}</p><div id="fs" role="status" aria-live="polite"></div></form></div></div></section>`
};

// Demo: News & Events has no invented stories or dates: a designed empty state until CMEHA supplies real content
if (DEMO) PAGES.news = () => `<section class="ph"><div class="wrap split"><div class="rv"><span class="eyebrow">${t("nwPh")}</span><h1>${t("nwPhH")}</h1><p class="lede">${tb("nwPhP")}</p></div><div class="art rv">${slotPic("news-photo", "a3", "center 30%")}</div></div></section>
    <section class="s" style="padding-top:20px"><div class="wrap"><div class="ne-grid"><article class="ne-card rv"><span class="ib">${ic("book")}</span><h2>${t("latest")}</h2><p>${t("neLatestP")}</p></article><article class="ne-card rv"><span class="ib">${ic("cal")}</span><h2>${t("upcoming")}</h2><p>${t("neEventsP")}</p></article></div><p class="ne-share">${t("neShare")} <a href="mailto:${allEmails()[0]}">${t("emailUs")}</a></p></div></section>${cta()}`;
/* ---------------- interactions ---------------- */
function dialog(html) {
  let d = document.querySelector("#dlg");
  if (!d) { d = document.createElement("dialog"); d.id = "dlg"; document.body.appendChild(d); d.addEventListener("click", (e) => { if (e.target === d) d.close(); }); }
  d.setAttribute("aria-label", t("dlgLabel"));
  d.innerHTML = `<button class="xbtn close" aria-label="${t("close")}">${ic("x")}</button>${html}`;
  d.querySelector(".xbtn.close").addEventListener("click", () => d.close());
  const last = document.activeElement; d.showModal(); d.addEventListener("close", () => last && last.focus && last.focus(), { once: true });
}
const enb = (h) => `<div lang="en">${h}</div>`;
function progDialog(p) {
  const actions = `<div class="dlg-actions"><button class="btn btn-gold" type="button" data-proposal>${ic("chat")}${tb("reqProposal")}</button><span class="hint">${tb("reqHint")}</span></div>`;
  const body = p.live
    ? `${p.d ? `<p>${ctext(p, "d")}</p>` : ""}${p.body ? (p.fb_body && lang === "km" ? enb(p.body) : p.body) : ""}${p.proj.length ? `<h3 style="font-size:17px">${t("projects")}</h3><ul>${p.proj.map((x) => `<li>${x.fb && lang === "km" ? en(x.t) : x.t}</li>`).join("")}</ul>` : ""}`
    : `<p>${ctext(p, "d")}</p>${p.body ? `<p>${ctext(p, "body")}</p>` : ""}<p class="hint">${tb("areaDetail")}</p>`;
  dialog(`<div class="dlg-art">${pic(p)}</div><div class="dlg-body"><span class="chip">${cat(p.c)}</span>${p.area ? `<span class="chip alt">${tb("proposedChip")}</span>` : ""}<h2>${ctext(p, "t")}</h2>${body}${p.area && p.live ? `<p class="hint">${tb("areaDetail")}</p>` : ""}${actions}</div>`);
  const b = document.querySelector("#dlg [data-proposal]");
  if (b) b.onclick = () => openProposal(propTitle(p));
}
const newsDialog = (n) => dialog(`<div class="dlg-art">${pic(n)}</div><div class="dlg-body">${metaLine(n)}<h2>${ctext(n, "t")}</h2>${n.live
  ? `${n.k === "event" && n.loc ? `<p class="meta"><span>${ic("pin")}${ctext(n, "loc")}</span></p>` : ""}${n.x && n.k !== "event" ? `<p>${ctext(n, "x")}</p>` : ""}${n.body ? (n.fb_body && lang === "km" ? enb(n.body) : n.body) : ""}`
  : `<p><b>${ctext(n, "x")}</b></p>${n.body ? ctext(n, "body") : `<p>${t("sampleBody")}</p>`}`}</div>`);

/* ---------------- Request a Proposal ----------------
   No server is involved: the buttons are plain links that open WhatsApp (wa.me) or the visitor's own email app with a message that
   already names the item. Nothing is sent, stored or tracked by this website. The WhatsApp number can be set in the CMS (Contact
   Information → WhatsApp number); the built-in one is the number supplied by CMEHA. */
const INQUIRY = { whatsapp: "", email: "info@cmeha-cambodia.org" }; // no WhatsApp number in the demo
const waNumber = () => { const d = String(DATA.settings.whatsapp || "").replace(/\D/g, ""); return /^[1-9]\d{7,14}$/.test(d) ? d : INQUIRY.whatsapp; };
function proposalLinks(name) {
  const title = String(name == null ? "" : name).replace(/\s+/g, " ").trim().slice(0, 200);
  const wa = `https://wa.me/${waNumber()}?text=${encodeURIComponent(`Hello CMEHA, I would like to request a proposal regarding ${title}. Could you please share more information? Thank you.`)}`;
  const body = ["Hello CMEHA,", `I would like to request a proposal regarding ${title}.`, "My name:", "Organization:", "Contact number:", "Additional information:", "Thank you."].join("\r\n");
  const mail = `mailto:${allEmails()[0]}?subject=${encodeURIComponent(`Proposal Request - ${title}`)}&body=${encodeURIComponent(body)}`;
  return { wa, mail, title };
}
function openProposal(name) {
  const { wa, mail, title } = proposalLinks(name);
  let d = document.querySelector("#prop");
  if (!d) { d = document.createElement("dialog"); d.id = "prop"; document.body.appendChild(d); d.addEventListener("click", (e) => { if (e.target === d) d.close(); }); }
  d.setAttribute("aria-labelledby", "prop-h");
  d.innerHTML = `<button class="xbtn close" type="button" aria-label="${t("close")}">${ic("x")}</button><div class="prop-body"><span class="eyebrow">${tb("reqEy")}</span><h2 id="prop-h">${tb("reqProposal")}</h2><p class="prop-for">${tb("reqFor")} <b class="prop-title"></b></p>
    <div class="prop-choices"><a class="prop-opt wa" href="${esc(wa)}" target="_blank" rel="noopener noreferrer" data-prop="whatsapp">${ic("chat")}<span><b>${tb("reqWa")}</b><small>${tb("reqWaD")}</small></span></a><a class="prop-opt mail" href="${esc(mail)}" data-prop="email">${ic("mail")}<span><b>${tb("reqMail")}</b><small>${tb("reqMailD")}</small></span></a></div>
    <p class="hint prop-note">${tb("reqNote")}</p></div>`;
  if (DEMO) { d.querySelector(".prop-opt.wa")?.remove(); d.querySelector(".prop-note").innerHTML = tb("reqNoteDemo"); }
  d.querySelector(".prop-title").textContent = title; // the real CMS title, set as text (never as HTML)
  d.querySelector(".xbtn.close").addEventListener("click", () => d.close());
  const last = document.activeElement; if (d.open) d.close(); d.showModal(); d.addEventListener("close", () => last && last.isConnected && last.focus && last.focus(), { once: true });
}

function bind(root) {
  root.querySelectorAll("[data-open]").forEach((b) => (b.onclick = () => { history.replaceState(null, "", "#p=" + b.dataset.open); progDialog(PROGRAMS.find((p) => p.id === b.dataset.open)); }));
  root.querySelectorAll("[data-news]").forEach((b) => (b.onclick = () => newsDialog(NEWS.find((n) => n.id === b.dataset.news))));
}
function reveal() {
  if (STATIC || !("IntersectionObserver" in window)) return document.querySelectorAll(".rv").forEach((e) => e.classList.add("in"));
  const io = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }), { threshold: 0.12 });
  document.querySelectorAll(".rv").forEach((e) => io.observe(e));
}

function programsPage() {
  const list = document.querySelector("#plist"); let cur = "all"; const h = location.hash;
  const cm = /cat=([\w-]+)/.exec(h); if (cm) cur = cm[1];
  const draw = () => {
    const q = (document.querySelector("#q").value || "").toLowerCase();
    document.querySelectorAll("[data-cat]").forEach((b) => b.setAttribute("aria-pressed", b.dataset.cat === cur));
    const cats = cur === "all" ? progCats() : [cur];
    let html = "", n = 0;
    cats.forEach((c) => {
      const items = PROGRAMS.filter((p) => p.c === c && (!q || (p.t + p.d + (lang === "km" ? (p.tk || "") + (p.dk || "") : "") + cat(c)).toLowerCase().includes(q)));
      if (!items.length) return; n += items.length;
      html += `<div class="cat-h"><span class="ib">${ic(({ "community-education": "book", scholarships: "cap", "hr-development": "users", humanitarian: "heart", education: "book", community: "users", project: "spark" }[c] || "spark"))}</span><div><h2>${cat(c)}</h2><p>${catD(c)}</p></div></div><div class="pgrid" data-n="${items.length}">${items.map((p) => tile(p)).join("")}</div>`;
    });
    // the proposed areas (nothing published yet) read better as one 2 x 2 grid than as four stacked full-width cards
    if (AREAS_ONLY() && cur === "all" && !q && n) html = `<div class="pgrid areas" data-n="${n}">${PROGRAMS.map((p) => tile(p)).join("")}</div>`;
    list.innerHTML = areaNoteHtml() + (n ? html : `<div class="empty">${PROGRAMS.length ? tb("noRes") : t("emptyProg")}</div>`) + (AREAS_ONLY() && !DEMO ? `<p class="previewnote" style="margin-top:28px">${tb("projectsNone")}</p>` : ""); bind(list); reveal(); kmNoteSync();
  };
  document.querySelectorAll("[data-cat]").forEach((b) => (b.onclick = () => { cur = b.dataset.cat; history.replaceState(null, "", cur === "all" ? "programs.html" : "#cat=" + cur); draw(); }));
  document.querySelector("#q").oninput = draw; draw();
  const m = /p=([\w-]+)/.exec(h); if (m) { const p = PROGRAMS.find((x) => x.id === m[1]); if (p) progDialog(p); }
}
function galleryPage() {
  const mas = document.querySelector("#mas"), lb = document.querySelector("#lb"); let cur = "all", idx = 0, shown = [];
  const draw = () => {
    document.querySelectorAll("[data-g]").forEach((b) => b.setAttribute("aria-pressed", b.dataset.g === cur));
    shown = GALLERY.filter((g) => cur === "all" || g.c === cur);
    mas.className = "mas" + (shown.length < 5 ? " few" : "");
    if (!GALLERY.length) { mas.innerHTML = emptyBlock("emptyGal"); return; }
    mas.innerHTML = shown.map((g, i) => `<button class="${shown.length < 5 ? "" : cur === "all" ? g.s : i === 0 ? "w" : ""}" data-i="${i}" data-cap="${g.live ? g.cap : gcap(g)}" aria-label="${g.live ? g.cap : gcap(g)} — ${T[lang].gcat[g.c]}">${gpic(g)}</button>`).join("");
    mas.querySelectorAll("[data-i]").forEach((b) => (b.onclick = () => { idx = +b.dataset.i; show(); lb.showModal(); })); kmNoteSync();
  };
  const show = () => { const g = shown[idx]; document.querySelector("#lbs").innerHTML = gpic(g); document.querySelector("#lbc").textContent = g.capRaw || gcap(g); document.querySelector("#lbm").textContent = `${T[lang].gcat[g.c]} · ${idx + 1} ${t("of")} ${shown.length}` + (g.credit ? " · " + g.credit : ""); };
  const step = (d) => { idx = (idx + d + shown.length) % shown.length; show(); };
  document.querySelectorAll("[data-g]").forEach((b) => (b.onclick = () => { cur = b.dataset.g; draw(); }));
  document.querySelector("#lbx").onclick = () => lb.close(); document.querySelector("#lbp").onclick = () => step(-1); document.querySelector("#lbn").onclick = () => step(1);
  lb.addEventListener("keydown", (e) => { if (e.key === "ArrowLeft") step(-1); if (e.key === "ArrowRight") step(1); });
  lb.addEventListener("click", (e) => { if (e.target === lb) lb.close(); }); draw();
}
function contactPage() {
  const f = document.querySelector("#f");
  f.onsubmit = (ev) => {
    ev.preventDefault(); let ok = true;
    [["fn", "en-n", (v) => !!v.trim(), "req"], ["fe", "en-e", (v) => /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(v), "badEmail"], ["fm", "en-m", (v) => !!v.trim(), "req"]].forEach(([id, eid, test, msg]) => {
      const el = document.getElementById(id), good = test(el.value); el.setAttribute("aria-invalid", !good); document.getElementById(eid).textContent = good ? "" : t(msg); if (!good) ok = false;
    });
    const s = document.querySelector("#fs");
    if (!ok) { s.innerHTML = ""; f.querySelector("[aria-invalid=true]").focus(); return; }
    // Prepares an email in the visitor's own email app. Nothing is posted anywhere and no success is simulated.
    const to = allEmails()[0], body = ["Hello CMEHA,", "", f.m.value.trim(), "", "Name: " + f.n.value.trim(), "Email: " + f.e.value.trim()].join("\r\n");
    const a = document.createElement("a"); a.href = "mailto:" + to + "?subject=" + encodeURIComponent("Message from the CMEHA website") + "&body=" + encodeURIComponent(body); a.hidden = true; document.body.appendChild(a); a.click(); a.remove();
    s.innerHTML = `<div class="status" role="status">${t("openedMail")} <a href="mailto:${to}">${to}</a></div>`;
  };
}

function render() {
  buildViews();
  chrome();
  const main = document.querySelector("#main"); main.innerHTML = PAGES[PAGE]();
  bind(main);
  if (PAGE === "news") { const m = /n=([\w-]+)/.exec(location.hash); const a = m && NEWS.find((x) => x.id === m[1]); if (a) newsDialog(a); } if (PAGE === "programs") programsPage(); if (PAGE === "gallery") galleryPage(); if (PAGE === "contact") contactPage();
  reveal();
  kmNoteSync();
}
/* ---------------- final client-review content (static website proposal only) ----------------
   Everything below is presentation copy written from CMEHA's official profile. It makes no claim about completed projects, dates, figures,
   people or partnerships. New wording (English and Khmer) is listed for client approval in C030-CLIENT-CONTENT-APPROVAL-CHECKLIST.md. */
Object.assign(T.en, {
  rightsDemo: "© 2026 Cambodian Muslim Education and Humanitarian Association. All rights reserved.",
  // Home
  focusH: "Our focus areas", focusP: "Four areas of work that follow CMEHA’s mission to advance education and humanitarian care in Cambodia.",
  purposeEy: "Our purpose", purposeH: "What we aim to achieve", purposeP: "Three objectives guide CMEHA’s educational and humanitarian work.",
  pu1t: "Well-being, education and the environment", pu2t: "A stronger young generation", pu3t: "Care for people in need",
  commEy: "Community & opportunity", commH: "Community, education and opportunity",
  commP1: "CMEHA is built on brotherhood and collaboration. Membership is open to Muslim graduates from universities recognized by CMEHA and to all members of the community in Cambodia, regardless of race or religion, so that education and humanitarian work can be shared across the community.",
  commP2: "Its planned work brings schools and communities together around learning — from scholarships and community education to skills development and humanitarian assistance.",
  commBtn: "Learn about membership", homeNewsH: "Articles about CMEHA", homeNewsAll: "View all news & events",
  // About
  storyEy: "Who we are", storyH: "Who CMEHA is",
  storyP1: "Cambodian Muslim Education and Humanitarian Association (CMEHA) is a Cambodian non-governmental organization working in education and humanitarian activities.",
  storyP2: "Education is at the heart of its mission: to raise funds for community education and for student scholarships in Cambodia and overseas, to develop human resources, and to prepare education programs together with schools and communities.",
  storyP3: "CMEHA also promotes humanitarian and charitable activities and is committed to assisting victims, people who are sick, and orphans.",
  storyP4: "These values are reflected in the association’s logo: a generation of educated individuals, knowledge, graduates, and brotherhood and collaboration.",
  glanceH: "At a glance", g1: "Non-governmental organization", g2: "Education and humanitarian work", g3: "Membership open to the community",
  memHow: "Interested in membership? Write to us at",
  // Programs
  prLede: "CMEHA’s work is organised around four focus areas that follow its mission to support education and humanitarian care in Cambodia. Select a card to read more.",
  viewDetails: "View details", proposedChip: "Focus area",
  areaDetail: "This is one of CMEHA’s focus areas. Specific programs, schedules and projects will be announced by CMEHA.",
  // News & Events
  nwPhP: "Articles about CMEHA’s mission and areas of work.", evH: "Events", evP: "Information about future events will be announced through CMEHA. To be informed, write to",
  // Gallery
  gaPhPDemo: "Photographs on the themes of education, learning, community and care. Select a picture to view it in full.",
  galCredit: "Photographs are licensed images; the photographer and licence of each one are listed on the", photoBy: "Photo:",
  // Contact
  coPhPDemo: "We would be glad to hear from you. Write to CMEHA for general enquiries, education, humanitarian cooperation or membership.",
  chHead: "How we can help", chBtn: "Email CMEHA", formH: "Write your message", sendDemo: "Open email draft",
  ch1: "General enquiries", ch1d: "Questions about CMEHA", ch2: "Education", ch2d: "Ask about CMEHA’s education focus", ch3: "Humanitarian cooperation", ch3d: "Ask about working together", ch4: "Membership", ch4d: "Ask about joining CMEHA",
  formHintDemo: "This form does not send your message from the website. It opens your email app with your message ready — please press Send there.",
  openedMail: "Your email app should open with your message ready. If nothing opens, please write to"
});
Object.assign(T.km, {
  rightsDemo: "© 2026 សមាគមអប់រំ និងមនុស្សធម៌មុស្លិមកម្ពុជា។ រក្សាសិទ្ធិគ្រប់យ៉ាង។",
  focusH: "ផ្នែកផ្តោតសំខាន់របស់យើង", focusP: "វិស័យការងារបួន ដែលអនុវត្តតាមបេសកកម្មរបស់ CMEHA ក្នុងការជំរុញការអប់រំ និងការយកចិត្តទុកដាក់ផ្នែកមនុស្សធម៌នៅកម្ពុជា។",
  purposeEy: "គោលបំណងរបស់យើង", purposeH: "អ្វីដែលយើងមានបំណងសម្រេច", purposeP: "គោលដៅបីដែលដឹកនាំការងារអប់រំ និងមនុស្សធម៌របស់ CMEHA។",
  pu1t: "សុខុមាលភាព ការអប់រំ និងបរិស្ថាន", pu2t: "យុវជនជំនាន់ក្រោយដែលរឹងមាំ", pu3t: "ការយកចិត្តទុកដាក់ចំពោះអ្នកត្រូវការជំនួយ",
  commEy: "សហគមន៍ និងឱកាស", commH: "សហគមន៍ ការអប់រំ និងឱកាស",
  commP1: "CMEHA ស្អាងឡើងលើភាតរភាព និងកិច្ចសហការ។ សមាជិកភាពបើកចំហសម្រាប់និស្សិតមូស្លិមទាំងអស់ ដែលបានបញ្ចប់ការសិក្សាពីសាកលវិទ្យាល័យដែលត្រូវបាន CMEHA ទទួលស្គាល់ និងសម្រាប់សមាជិកទាំងអស់នៃសហគមន៍នៅកម្ពុជា ដោយមិនប្រកាន់ពូជសាសន៍ ឬសាសនា ដើម្បីឱ្យការងារអប់រំ និងមនុស្សធម៌ត្រូវបានចែករំលែកក្នុងសហគមន៍។",
  commP2: "ការងារដែលបានគ្រោងរបស់សមាគមនាំសាលារៀន និងសហគមន៍មកជួបជុំគ្នាជុំវិញការរៀនសូត្រ — ចាប់ពីអាហារូបករណ៍ និងការអប់រំសហគមន៍ ដល់ការអភិវឌ្ឍជំនាញ និងជំនួយមនុស្សធម៌។",
  commBtn: "ស្វែងយល់អំពីសមាជិកភាព", homeNewsH: "អត្ថបទអំពី CMEHA", homeNewsAll: "មើលព័ត៌មាន និងព្រឹត្តិការណ៍ទាំងអស់",
  storyEy: "យើងជានរណា", storyH: "CMEHA ជានរណា",
  storyP1: "សមាគមអប់រំ និងមនុស្សធម៌មុស្លិមកម្ពុជា (CMEHA) ជាអង្គការមិនមែនរដ្ឋាភិបាលកម្ពុជា ដែលធ្វើការងារផ្នែកអប់រំ និងសកម្មភាពមនុស្សធម៌។",
  storyP2: "ការអប់រំគឺជាបេះដូងនៃបេសកកម្មរបស់សមាគម៖ ស្វែងរកមូលនិធិសម្រាប់ការអប់រំក្នុងសហគមន៍ និងអាហារូបករណ៍សិស្ស-និស្សិតនៅកម្ពុជា និងបរទេស អភិវឌ្ឍធនធានមនុស្ស និងរៀបចំកម្មវិធីអប់រំរួមជាមួយសាលារៀន និងសហគមន៍។",
  storyP3: "CMEHA ក៏ជំរុញសកម្មភាពមនុស្សធម៌ និងសប្បុរសធម៌ ហើយប្តេជ្ញាជួយជនរងគ្រោះ អ្នកជំងឺ និងកុមារកំព្រា។",
  storyP4: "តម្លៃទាំងនេះឆ្លុះបញ្ចាំងនៅក្នុងនិមិត្តសញ្ញារបស់សមាគម៖ ជំនាន់នៃបុគ្គលដែលមានការអប់រំ ចំណេះដឹង អ្នកបញ្ចប់ការសិក្សា ភាតរភាព និងកិច្ចសហការ។",
  glanceH: "ទិដ្ឋភាពទូទៅ", g1: "អង្គការមិនមែនរដ្ឋាភិបាល", g2: "ការអប់រំ និងការងារមនុស្សធម៌", g3: "សមាជិកភាពបើកចំហសម្រាប់សហគមន៍",
  memHow: "ចាប់អារម្មណ៍ចូលជាសមាជិក? សូមសរសេរមកយើងតាម",
  prLede: "ការងាររបស់ CMEHA ត្រូវបានរៀបចំជុំវិញផ្នែកផ្តោតសំខាន់បួន ដែលអនុវត្តតាមបេសកកម្មរបស់ខ្លួនក្នុងការគាំទ្រការអប់រំ និងការយកចិត្តទុកដាក់ផ្នែកមនុស្សធម៌នៅកម្ពុជា។ សូមជ្រើសរើសកាតមួយ ដើម្បីអានបន្ថែម។",
  viewDetails: "មើលព័ត៌មានលម្អិត", proposedChip: "ផ្នែកផ្តោតសំខាន់",
  areaDetail: "នេះជាផ្នែកផ្តោតសំខាន់មួយរបស់ CMEHA។ កម្មវិធី កាលវិភាគ និងគម្រោងជាក់លាក់នឹងត្រូវបានប្រកាសដោយ CMEHA។",
  nwPhP: "អត្ថបទអំពីបេសកកម្ម និងវិស័យការងាររបស់ CMEHA។", evH: "ព្រឹត្តិការណ៍", evP: "ព័ត៌មានអំពីព្រឹត្តិការណ៍នាពេលអនាគតនឹងត្រូវបានប្រកាសតាមរយៈ CMEHA។ ដើម្បីទទួលបានព័ត៌មាន សូមសរសេរមកកាន់",
  gaPhPDemo: "រូបថតអំពីប្រធានបទការអប់រំ ការរៀនសូត្រ សហគមន៍ និងការយកចិត្តទុកដាក់។ សូមជ្រើសរើសរូបភាពមួយដើម្បីមើលពេញ។",
  galCredit: "រូបថតទាំងនេះជារូបភាពដែលមានអាជ្ញាប័ណ្ណ។ ឈ្មោះអ្នកថត និងអាជ្ញាប័ណ្ណនៃរូបនីមួយៗមានចុះក្នុងទំព័រ", photoBy: "រូបថតដោយ៖",
  coPhPDemo: "យើងរីករាយនឹងទទួលដំណឹងពីអ្នក។ សូមសរសេរមក CMEHA សម្រាប់សំណួរទូទៅ ការអប់រំ កិច្ចសហការមនុស្សធម៌ ឬសមាជិកភាព។",
  chHead: "របៀបដែលយើងអាចជួយបាន", chBtn: "សរសេរអ៊ីមែលមក CMEHA", formH: "សរសេរសាររបស់អ្នក", sendDemo: "បើកសេចក្តីព្រាងអ៊ីមែល",
  ch1: "សំណួរទូទៅ", ch1d: "សំណួរអំពី CMEHA", ch2: "ការអប់រំ", ch2d: "សួរអំពីការផ្តោតលើការអប់រំរបស់ CMEHA", ch3: "កិច្ចសហការមនុស្សធម៌", ch3d: "សួរអំពីការធ្វើការរួមគ្នា", ch4: "សមាជិកភាព", ch4d: "សួរអំពីការចូលជាសមាជិក CMEHA",
  formHintDemo: "ទម្រង់នេះមិនផ្ញើសាររបស់អ្នកពីគេហទំព័រទេ។ វាបើកកម្មវិធីអ៊ីមែលរបស់អ្នកជាមួយសារដែលរៀបចំរួច — សូមចុចផ្ញើនៅទីនោះ។",
  openedMail: "កម្មវិធីអ៊ីមែលរបស់អ្នកគួរបើកជាមួយសារដែលរៀបចំរួច។ ប្រសិនបើគ្មានអ្វីបើក សូមសរសេរមកកាន់"
});
T.en.crExDemo = "Photographs on this website are licensed images from Pexels (Pexels License) and Wikimedia Commons (open licences). The photographer, source and licence of each one are listed below. They illustrate education and community themes in Cambodia and do not show CMEHA, its members or its programs.";
T.km.crExDemo = "រូបថតនៅលើគេហទំព័រនេះជារូបភាពដែលមានអាជ្ញាប័ណ្ណពី Pexels (អាជ្ញាប័ណ្ណ Pexels) និង Wikimedia Commons (អាជ្ញាប័ណ្ណបើកចំហ)។ ឈ្មោះអ្នកថត ប្រភព និងអាជ្ញាប័ណ្ណនៃរូបនីមួយៗមានចុះក្នុងបញ្ជីខាងក្រោម។ រូបទាំងនេះបង្ហាញប្រធានបទអប់រំ និងសហគមន៍នៅកម្ពុជា មិនមែនបង្ហាញ CMEHA សមាជិក ឬកម្មវិធីរបស់ CMEHA ទេ។";
T.en.ty.article = "Article"; T.km.ty = T.km.ty || {}; T.km.ty.article = "អត្ថបទ";
T.en.gcat.photo = "Photograph"; T.km.gcat.photo = "រូបថត";

// fuller descriptions of the four focus areas (from the mission and targets; no project, date, place or figure is claimed)
const AREA_BODY = {
  a1: ["Education is at the centre of CMEHA’s mission. This focus area covers CMEHA’s intention to prepare education programs for communities, together with schools and local communities, and to raise funds that support community education.", "ការអប់រំគឺជាចំណុចស្នូលនៃបេសកកម្មរបស់ CMEHA។ ផ្នែកនេះគ្របដណ្តប់លើបំណងរបស់ CMEHA ក្នុងការរៀបចំកម្មវិធីអប់រំសម្រាប់សហគមន៍ ជាមួយសាលារៀន និងសហគមន៍ក្នុងតំបន់ និងស្វែងរកមូលនិធិដើម្បីគាំទ្រការអប់រំក្នុងសហគមន៍។"],
  a2: ["CMEHA’s mission includes raising funds for student scholarship programs, both within Cambodia and overseas. This focus area brings that commitment together: helping students to continue their education.", "បេសកកម្មរបស់ CMEHA រួមមានការស្វែងរកមូលនិធិសម្រាប់កម្មវិធីអាហារូបករណ៍សិស្ស-និស្សិត ទាំងនៅកម្ពុជា និងបរទេស។ ផ្នែកនេះប្រមូលផ្តុំការប្តេជ្ញាចិត្តនោះ ដើម្បីជួយសិស្ស-និស្សិតបន្តការសិក្សា។"],
  a3: ["CMEHA aims to develop human resources and to train and strengthen the abilities of the younger generation. This focus area covers the human resource development programs that support those objectives.", "CMEHA មានគោលបំណងអភិវឌ្ឍធនធានមនុស្ស និងបណ្តុះបណ្តាល ព្រមទាំងពង្រឹងសមត្ថភាពយុវជនជំនាន់ក្រោយ។ ផ្នែកនេះគ្របដណ្តប់លើកម្មវិធីអភិវឌ្ឍធនធានមនុស្សដែលគាំទ្រគោលដៅទាំងនោះ។"],
  a4: ["CMEHA promotes humanitarian and charitable activities and is committed to assisting victims, people who are sick, and orphans. This focus area brings those activities together.", "CMEHA ជំរុញសកម្មភាពមនុស្សធម៌ និងសប្បុរសធម៌ ហើយប្តេជ្ញាជួយជនរងគ្រោះ អ្នកជំងឺ និងកុមារកំព្រា។ ផ្នែកនេះប្រមូលផ្តុំសកម្មភាពទាំងនោះ។"]
};
PROPOSED_AREAS.forEach((a) => { const b = AREA_BODY[a.id]; if (b) { a.body = b[0]; a.bodyk = b[1]; } });

// three explanatory articles from the official profile (not news reports: no dates, no events)
const P = (arr) => arr.map((x) => `<p>${x}</p>`).join("");
const DEMO_ARTICLES = [
  { id: "n1", k: "article", ph: "a4",
    t: "Understanding CMEHA’s Mission", tk: "ការយល់ដឹងអំពីបេសកកម្មរបស់ CMEHA",
    x: "How CMEHA’s five-point mission connects education, scholarships, skills and humanitarian cooperation.", xk: "របៀបដែលបេសកកម្មប្រាំចំណុចរបស់ CMEHA ភ្ជាប់ការអប់រំ អាហារូបករណ៍ ជំនាញ និងកិច្ចសហការមនុស្សធម៌។",
    body: P(["CMEHA’s mission brings together two purposes: advancing education and caring for people in need. Its five-point mission states how the association intends to work.", "The association’s mission is to raise funds for community education; to raise funds for student scholarship programs in Cambodia and overseas; to deliver human resource development programs; to prepare education programs for communities; and to collaborate with schools and communities on educational and humanitarian programs.", "Together, these commitments serve CMEHA’s vision of a prosperous and progressive society built through education and knowledge."]),
    bodyk: P(["បេសកកម្មរបស់ CMEHA ផ្សំគ្នានូវគោលបំណងពីរ៖ ជំរុញការអប់រំ និងយកចិត្តទុកដាក់ចំពោះអ្នកត្រូវការជំនួយ។ បេសកកម្មប្រាំចំណុចរបស់សមាគមបញ្ជាក់អំពីរបៀបដែលសមាគមមានបំណងធ្វើការ។", "បេសកកម្មរបស់សមាគមគឺ៖ ស្វែងរកមូលនិធិសម្រាប់ការអប់រំក្នុងសហគមន៍ ស្វែងរកមូលនិធិសម្រាប់កម្មវិធីអាហារូបករណ៍សិស្ស-និស្សិតនៅកម្ពុជា និងបរទេស អនុវត្តកម្មវិធីអភិវឌ្ឍធនធានមនុស្ស រៀបចំកម្មវិធីអប់រំសម្រាប់សហគមន៍ និងសហការជាមួយសាលារៀន និងសហគមន៍លើកម្មវិធីអប់រំ និងមនុស្សធម៌។", "ការប្តេជ្ញាចិត្តទាំងនេះរួមគ្នាបម្រើចក្ខុវិស័យរបស់ CMEHA ក្នុងការកសាងសង្គមដែលមានវិបុលភាព និងភាពរីកចម្រើន តាមរយៈការអប់រំ និងចំណេះដឹង។"]) },
  { id: "n2", k: "article", ph: "a3",
    t: "Education and Knowledge: CMEHA’s Areas of Focus", tk: "ការអប់រំ និងចំណេះដឹង៖ ផ្នែកផ្តោតសំខាន់របស់ CMEHA",
    x: "An overview of the four focus areas that guide CMEHA’s educational and humanitarian work.", xk: "ទិដ្ឋភាពទូទៅនៃផ្នែកផ្តោតសំខាន់ទាំងបួន ដែលដឹកនាំការងារអប់រំ និងមនុស្សធម៌របស់ CMEHA។",
    body: P(["CMEHA organises its work around four focus areas: Community Education, Scholarships, Human Resource Development and Humanitarian Assistance. They follow directly from the association’s mission and objectives.", "Community Education is about preparing education programs with schools and communities; Scholarships, about supporting students in Cambodia and overseas; Human Resource Development, about strengthening the abilities of the younger generation; and Humanitarian Assistance, about helping victims, people who are sick, and orphans.", "Specific programs, schedules and projects will be announced by CMEHA as they are confirmed."]),
    bodyk: P(["CMEHA រៀបចំការងាររបស់ខ្លួនជុំវិញផ្នែកផ្តោតសំខាន់បួន៖ ការអប់រំសហគមន៍ អាហារូបករណ៍ ការអភិវឌ្ឍធនធានមនុស្ស និងជំនួយមនុស្សធម៌។ ផ្នែកទាំងនេះកើតចេញដោយផ្ទាល់ពីបេសកកម្ម និងគោលដៅរបស់សមាគម។", "ការអប់រំសហគមន៍ គឺអំពីការរៀបចំកម្មវិធីអប់រំជាមួយសាលារៀន និងសហគមន៍ អាហារូបករណ៍ គឺអំពីការគាំទ្រសិស្ស-និស្សិតនៅកម្ពុជា និងបរទេស ការអភិវឌ្ឍធនធានមនុស្ស គឺអំពីការពង្រឹងសមត្ថភាពយុវជនជំនាន់ក្រោយ ហើយជំនួយមនុស្សធម៌ គឺអំពីការជួយជនរងគ្រោះ អ្នកជំងឺ និងកុមារកំព្រា។", "កម្មវិធី កាលវិភាគ និងគម្រោងជាក់លាក់ នឹងត្រូវបានប្រកាសដោយ CMEHA នៅពេលដែលត្រូវបានបញ្ជាក់។"]) },
  { id: "n3", k: "article", ph: "a2",
    t: "CMEHA Membership and Community Participation", tk: "សមាជិកភាព និងការចូលរួមរបស់សហគមន៍",
    x: "Who can become a member of CMEHA, and how to ask about joining.", xk: "អ្នកណាអាចក្លាយជាសមាជិករបស់ CMEHA និងរបៀបសួរអំពីការចូលរួម។",
    body: P(["CMEHA has two categories of members. Ordinary membership is open to all Muslim graduates from universities recognized by CMEHA.", "Associate membership is open to all members of the community in Cambodia, regardless of race or religion.", "To ask about membership or to cooperate with CMEHA, write to info@cmeha-cambodia.org."]),
    bodyk: P(["CMEHA មានប្រភេទសមាជិកពីរ។ សមាជិកសាមញ្ញបើកចំហសម្រាប់និស្សិតមូស្លិមទាំងអស់ ដែលបានបញ្ចប់ការសិក្សាពីសាកលវិទ្យាល័យដែលត្រូវបាន CMEHA ទទួលស្គាល់។", "សមាជិកសហការីបើកចំហសម្រាប់សមាជិកទាំងអស់នៃសហគមន៍នៅកម្ពុជា ដោយមិនប្រកាន់ពូជសាសន៍ ឬសាសនា។", "ដើម្បីសួរអំពីសមាជិកភាព ឬសហការជាមួយ CMEHA សូមសរសេរមកកាន់ info@cmeha-cambodia.org។"]) }
];
const ncard = (n, href) => `<${href ? `a href="${href}"` : `button data-news="${n.id}" aria-haspopup="dialog"`} class="ncard rv"><div class="im">${pic(n)}</div><div class="nbd"><span class="chip alt">${(T[lang].ty || T.en.ty).article}</span><h3>${ctext(n, "t")}</h3><p>${ctext(n, "x")}</p><span class="link">${t("readMore")}${ic("arrow")}</span></div></${href ? "a" : "button"}>`;

// the credited stock photographs, captioned neutrally (no places, no claim that they show CMEHA)
const DEMO_PHOTOS = [["a1", "Learning with computers", "ការរៀនជាមួយកុំព្យូទ័រ"], ["p3", "Children reading together", "កុមារអានសៀវភៅជាមួយគ្នា"], ["a2", "A village street", "ផ្លូវក្នុងភូមិ"], ["p5", "Schoolchildren outdoors", "សិស្សសាលានៅខាងក្រៅ"], ["a3", "Students travelling to school by boat", "សិស្សធ្វើដំណើរទៅសាលាតាមទូក"], ["p1", "Graduation day", "ថ្ងៃបញ្ចប់ការសិក្សា"], ["a4", "Sitting an entrance examination", "ការប្រឡងចូលរៀន"], ["p4", "Time together by the water", "ពេលវេលារួមគ្នាក្បែរទឹក"], ["a5", "Students at a university workshop", "និស្សិតនៅសិក្ខាសាលាសកលវិទ្យាល័យ"], ["p2", "Volunteers tidying a public space", "អ្នកស្ម័គ្រចិត្តសម្អាតទីសាធារណៈ"], ["intro", "Working together outdoors", "ធ្វើការងាររួមគ្នានៅខាងក្រៅ"], ["p6", "A young woman with her bicycle", "ស្ត្រីវ័យក្មេងជាមួយកង់របស់នាង"]];
const demoGalleryItems = () => DEMO_PHOTOS.map(([k, en, km], i) => { const c = CREDITS.find((x) => x[0] === k); return { photo: k, c: "photo", s: ["big", "", "t", "", "w", "", "", "t", "", "w", "w", ""][i], cap: en, capk: km, credit: `${t("photoBy")} ${c[3]} (${c[6]})` }; });

if (DEMO) {
  const em = () => allEmails()[0];
  const heroSection = `<section class="hero">${heroPic()}<div class="wrap"><div class="copy rv"><span class="eyebrow">${t("heroEy")}</span><h1>${heroTitle()}</h1><p class="lede">${heroLede()}</p><div class="btns"><a class="btn btn-gold" href="programs.html">${t("c1")}${ic("arrow")}</a><a class="btn btn-ghost" href="contact.html">${t("c2")}</a></div></div></div></section>`;
  const aboutBlock = `<section class="s"><div class="wrap split"><div class="frame rv">${ph("intro", "center 28%")}</div><div class="rv"><span class="eyebrow">${t("abEy")}</span><h2 style="font-size:clamp(28px,3.4vw,40px);margin-top:10px">${tb("abH")}</h2><div class="mv"><div><h3>${ic("eye")}${t("mission")}</h3><p>${esc(ofl().missionShort)}</p></div><div><h3>${ic("spark")}${t("vision")}</h3><p>${esc(ofl().vision)}</p></div></div><a class="link" href="about.html">${t("learn")}${ic("arrow")}</a></div></div></section>`;
  const pageHead = (eyebrow, h1, lede, art, cls = "split") => `<section class="ph"><div class="wrap ${cls}"><div class="rv"><span class="eyebrow">${eyebrow}</span><h1>${h1}</h1><p class="lede">${lede}</p></div>${art ? `<div class="art rv">${art}</div>` : ""}</div></section>`;

  PAGES.home = () => `${heroSection}${aboutBlock}
  <section class="s soft" id="focus"><div class="wrap"><div class="sec-h"><div><span class="eyebrow">${t("prEy")}</span><h2>${t("focusH")}</h2></div><p>${t("focusP")}</p></div>${homeProgramsBlock()}<p style="margin:28px 0 0"><a class="link" href="programs.html">${t("allProg")}${ic("arrow")}</a></p></div></section>
  <section class="s"><div class="wrap"><div class="sec-h"><div><span class="eyebrow">${t("purposeEy")}</span><h2>${t("purposeH")}</h2></div><p>${t("purposeP")}</p></div><div class="purpose-grid">${ofl().targets.map((x, i) => `<article class="pcard rv"><span class="pnum">${i + 1}</span><h3>${t("pu" + (i + 1) + "t")}</h3><p>${esc(x)}</p></article>`).join("")}</div></div></section>
  <section class="s soft"><div class="wrap split comm"><div class="rv"><span class="eyebrow">${t("commEy")}</span><h2 style="font-size:clamp(28px,3.4vw,40px);margin:10px 0 16px">${t("commH")}</h2><p>${t("commP1")}</p><p>${t("commP2")}</p><div class="btns" style="margin-top:22px"><a class="btn btn-blue" href="about.html#membership">${t("commBtn")}${ic("arrow")}</a></div></div><div class="collage rv"><div class="c1">${ph("a5", "center 30%")}</div><div class="c2">${ph("p3", "center 35%")}</div></div></div></section>
  <section class="s"><div class="wrap"><div class="sec-h"><div><span class="eyebrow">${t("nwEy")}</span><h2>${t("homeNewsH")}</h2></div><a class="link" href="news.html">${t("homeNewsAll")}${ic("arrow")}</a></div><div class="ngrid">${DEMO_ARTICLES.map((n) => ncard(n, "news.html#n=" + n.id)).join("")}</div></div></section>
  ${cta()}`;

  PAGES.about = () => `${pageHead(t("abPh"), t("abEy"), esc(ofl().intro), slotPic("about-photo", "about", "center 40%") + `<img class="badge" src="assets/logo.jpg" alt="${t("logoAlt")}">`)}
  <section class="s" id="story"><div class="wrap split story2"><div class="rv"><span class="eyebrow">${t("storyEy")}</span><h2 style="font-size:clamp(28px,3.4vw,40px);margin:10px 0 18px">${t("storyH")}</h2><p>${t("storyP1")}</p><p>${t("storyP2")}</p><p>${t("storyP3")}</p><p>${t("storyP4")}</p></div><aside class="glance rv" aria-label="${t("glanceH")}"><h3>${t("glanceH")}</h3><ul><li><span class="ib">${ic("shield")}</span>${t("g1")}</li><li><span class="ib">${ic("book")}</span>${t("g2")}</li><li><span class="ib">${ic("users")}</span>${t("g3")}</li></ul></aside></div></section>
  <section class="s soft"><div class="wrap"><div class="panels rv"><div class="p1"><h2><span class="ib">${ic("eye")}</span>${t("vision")}</h2><div class="vision-text"><p>${esc(ofl().vision)}</p></div></div><div class="p2"><h2><span class="ib">${ic("spark")}</span>${t("mission")}</h2>${listHtml(ofl().mission, "ol")}</div></div></div></section>
  <section class="s"><div class="wrap"><div class="sec-h"><div><span class="eyebrow">${tb("tgtEy")}</span><h2>${tb("tgtH")}</h2></div></div>${listHtml(ofl().targets, "ol").replace('class="olist"', 'class="olist tgts rv"')}</div></section>
  <section class="s soft"><div class="wrap"><div class="sec-h"><div><span class="eyebrow">${tb("lmEy")}</span><h2>${tb("lmH")}</h2></div><p>${tb("lmP")}</p></div>${logoMeaning()}</div></section>
  <section class="s" id="membership"><div class="wrap"><div class="sec-h"><div><span class="eyebrow">${tb("memEy")}</span><h2>${tb("memH")}</h2></div><p>${tb("memP")}</p></div>${membershipCards()}<p class="mem-how rv">${t("memHow")} <a href="mailto:${em()}?subject=${encodeURIComponent("Membership enquiry")}">${em()}</a></p></div></section>
  ${leadershipSection()}${cta()}`;

  PAGES.programs = () => `${pageHead(t("prPh"), t("prPhH"), t("prLede"), slotPic("programs-photo", "a1", "center 40%"))}
  <div class="fbar" hidden><div class="wrap in"><div class="pills"></div><label class="search"><span class="sr">${t("search")}</span><input type="search" id="q"></label></div></div>
  <section class="s" style="padding-top:8px"><div class="wrap" id="plist" aria-live="polite"></div></section>${cta()}`;

  PAGES.news = () => `${pageHead(t("nwPh"), t("nwPhH"), tb("nwPhP"), slotPic("news-photo", "p4", "center 40%"))}
  <section class="s" style="padding-top:20px"><div class="wrap"><div class="ngrid">${DEMO_ARTICLES.map((n) => ncard(n)).join("")}</div>
  <div class="ev-band rv"><span class="ib">${ic("cal")}</span><div><h2>${t("evH")}</h2><p>${t("evP")} <a href="mailto:${em()}?subject=${encodeURIComponent("Event information")}">${em()}</a></p></div><a class="btn btn-blue" href="mailto:${em()}?subject=${encodeURIComponent("Event information")}">${ic("mail")}${t("emailUs")}</a></div></div></section>${cta()}`;

  PAGES.gallery = () => `${pageHead(t("gaPh"), t("gaPhH"), t("gaPhPDemo"), ph("hero", "26% center"))}
  <section class="s" style="padding-top:28px"><div class="wrap"><div class="mas" id="mas"></div><p class="credit-line">${t("galCredit")} <a href="credits.html">${t("credits")}</a>.</p></div></section>
  <dialog class="lb" id="lb" aria-label="${t("gaPh")}"><div class="stage" id="lbs"></div><button class="xbtn close" aria-label="${t("close")}" id="lbx">${ic("x")}</button><button class="xbtn prev" aria-label="${t("prev")}" id="lbp">${ic("left")}</button><button class="xbtn next" aria-label="${t("next")}" id="lbn">${ic("right")}</button><div class="cap"><div><b id="lbc"></b><span id="lbm"></span></div></div></dialog>${cta()}`;

  const help = [["mail", "ch1", "General enquiry"], ["book", "ch2", "Education programs enquiry"], ["hand", "ch3", "Humanitarian cooperation enquiry"], ["users", "ch4", "Membership enquiry"]];
  PAGES.contact = () => `${pageHead(t("coPh"), t("coPhH"), t("coPhPDemo"), "", "")}
  <section class="s" style="padding-top:20px"><div class="wrap"><div class="cgrid rv"><div class="cinfo"><h2>${t("details")}</h2>
    <div class="mailrow"><span class="ib">${ic("mail")}</span><div><small>${t("emailL")}</small><a class="bigmail" href="mailto:${em()}">${em()}</a></div></div>
    <a class="btn btn-gold cbtn" href="mailto:${em()}">${ic("mail")}${t("chBtn")}</a>
    <h3 class="chh">${t("chHead")}</h3><ul class="chl">${help.map(([i, k, s]) => `<li><a href="mailto:${em()}?subject=${encodeURIComponent(s)}"><span class="ib">${ic(i)}</span><span><b>${t(k)}</b><small>${t(k + "d")}</small></span></a></li>`).join("")}</ul></div>
    <form class="cform" id="f" novalidate><h2>${t("formH")}</h2>
      <div class="two"><div class="fld"><label for="fn">${t("name")}</label><input id="fn" name="n" autocomplete="name" required maxlength="100" aria-describedby="en-n"><div class="err" id="en-n"></div></div><div class="fld"><label for="fe">${t("email")}</label><input id="fe" name="e" type="email" autocomplete="email" required maxlength="254" aria-describedby="en-e"><div class="err" id="en-e"></div></div></div>
      <div class="fld"><label for="fm">${t("msg")}</label><textarea id="fm" name="m" rows="6" required maxlength="5000" aria-describedby="en-m"></textarea><div class="err" id="en-m"></div></div>
      <button class="btn btn-blue" type="submit">${t("sendDemo")}${ic("arrow")}</button><p class="hint">${t("formHintDemo")}</p><div id="fs" role="status" aria-live="polite"></div></form></div></div></section>`;
}

void Promise.resolve().then(render);
