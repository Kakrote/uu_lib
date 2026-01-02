import { title } from "process"

export const pages = [
    { label: "Borrowing Facility", href: "/services/borrowingFacility" },
    { label: "Other Facility's", href: "/services/otherFacilites" },
    { label: "Library Membership", href: "/services/libraryMemberhip" },
    { label: "Reserve a Book", href: "/services/reserveBook" },
    { label: "Plagiarism Checking Services", href: "/services/plagiarism" },
    { label: "Contact us", href: "#" },
]

export const borrowing_Facility = {
    title: "Borrowing Facility",
    introduction: "The students, research scholars, staff and faculty members of the University can avail the Libraries facilities.",
    registrationProcess: [
        "First step is to register with the Library as a member by filling the membership form available at the help desk (along with a passport size photograph).",
        "Registered members are privileged to access e-resources within campus and also outside the campus anytime anywhere.",
        "The details of the member categories and their entitlements are given below:"
    ],
    circulationSystem: {
        title: "Existing Pattern of Circulation Systems",
        categories: [
            {
                category: "U.G. Students",
                textBooks: { limit: 5, days: 15 },
                generalBooks: { limit: null, days: "10 days" },
                referenceBooks: "Not allowed (Reference collection may be referred inside the library premises only)",
                periodicals: "Not allowed (Reference collection may be referred inside the library premises only)",
                cdsDvds: "Overnight issue only",
                bookBank: "According to their subject (as per policy)"
            },
            {
                category: "P.G. Students",
                textBooks: { limit: 6, days: 15 },
                generalBooks: { limit: null, days: "10 days" },
                referenceBooks: "Not allowed (Reference collection may be referred inside the library premises only)",
                periodicals: "Not allowed (Reference collection may be referred inside the library premises only)",
                cdsDvds: "Overnight issue only",
                bookBank: "According to their subject (as per policy)"
            },
            {
                category: "Ph.D",
                textBooks: { limit: 6, days: 30 },
                generalBooks: { limit: null, days: "6 Months" },
                referenceBooks: "Not allowed (Reference collection may be referred inside the library premises only)",
                periodicals: "Not allowed (Reference collection may be referred inside the library premises only)",
                cdsDvds: "Overnight issue only",
                bookBank: "According to their subject (as per policy)"
            },
            {
                category: "Faculty",
                textBooks: { limit: 10, days: "6 Months" },
                generalBooks: { limit: null, days: "6 Months" },
                referenceBooks: "Not allowed (Reference collection may be referred inside the library premises only)",
                periodicals: "Not allowed (Reference collection may be referred inside the library premises only)",
                cdsDvds: "Overnight issue only",
                bookBank: "According to their subject (as per policy)"
            },
            {
                category: "Staff",
                textBooks: { limit: 3, days: "6 Months" },
                generalBooks: { limit: null, days: "6 Months" },
                referenceBooks: "Not allowed (Reference collection may be referred inside the library premises only)",
                periodicals: "Not allowed (Reference collection may be referred inside the library premises only)",
                cdsDvds: "Overnight issue only",
                bookBank: "According to their subject (as per policy)"
            }
        ],
        bookTypes: [
            {
                type: "Text Books",
                description: "Books issued with specific limits and days based on category"
            },
            {
                type: "General Books",
                description: "Issued for 10 days for undergraduate and postgraduate students, 6 months for Ph.D, Faculty, and Staff"
            },
            {
                type: "Reference Books: Competition & Rare Books",
                description: "Not allowed (Reference collection may be referred inside the library premises only)"
            },
            {
                type: "Periodicals (Back)",
                description: "Not allowed (Reference collection may be referred inside the library premises only)"
            },
            {
                type: "CDs/DVDs",
                description: "Overnight issue only"
            },
            {
                type: "Book Bank",
                description: "According to their subject (as per policy)"
            }
        ]
    }
}

export const otherFacilites = {
    information_Technology: {
        title: "Information Technology (IT) Facilities",
        para: " Online Public Access catalogue (OPAC) Through the Online Public Access Catalogue (OPAC) users may access (Books, E-Books, Online Journals, Magazines) and other resources.",
    },
    inter_Library_Loan: {
        title: "Inter Library Loan Service",
        para: "If a required item isn’t available in library collection, you may contact to library Our team will coordinate with partner libraries to get you the resource."
    },
    photocopy_Facility: {
        title:"Photocopy Facility ",
        para:"The photocopy facility is available to all users on nominal payment at Central Library. Photocopying facility is available as per Copyright Rules (few pages/chapter of the book/theses and other publication, not more than 25% of total content)"
    },
    reference_Service: {
        title:"Reference Service ",
        para:"Like to learn more about the Central Library and how we can provide resources for the Library users? Assist to users to find out the documents."
    },
    resource_Sharing: {
        title:"Resource Sharing ",
        para:"Developing Library Network DELNET is promoting resource sharing among the libraries through the development of a network of a library. The Central Library is the member of Developing Library Network DELNET and share the resources print as well as e- resources (Books, e- Books, Online journals etc.) among DELNET Member Libraries. Users may request to the University Librarian to arrange the book or research papers from affiliate libraries."
    },
    wifi_Internet_Facility: {
        title:"Wi-Fi Internet Facility",
        para:"The Central Library linked with high speed internet connectivity. The users may use their laptop and smart phones for accessing the resources and services provided by Central Library."
    }
}

export const library_Membership = {
    members:[
        {name:"Sodhganga",logo:"/images/icons/shod.gif",link:"https://shodhganga.inflibnet.ac.in/"},
        {name:"E-Shodh Sindhu (INFLIBNET) ",logo:"/images/icons/eshod.png",link:"https://ess.inflibnet.ac.in/"},
        {name:"National Digital Library of India (NDLI)",logo:"/images/icons/ndle.jpg",link:"https://project.ndl.gov.in/"},
        {name:"National Digital Library of India (NDLI)",logo:"/images/icons/delnet.jpg",link:"https://delnet.in/index.html"},
    ]
}

export const Plagiarism_Checking_Services = {
    title: "Plagiarism Checking Services",
    introduction: "The Central Library offers Turnitin Plagiarism Checking Services to help the research community of UU. This service is free for UU Fraternity and confidential.",
    description: "In our continued commitment to uphold academic honesty and promote original research, the Central Library subscribe Turnitin Plagiarism Detection Software, I.D. is provided to all faculty members of the Uttaranchal University.",
    purpose: "This advanced tool is designed to help users identify unintentional similarities in their academic writing and ensure proper citation practices. Whether working on a thesis, dissertation, research paper, or project report, this software serves as a vital step in enhancing the credibility and originality of scholarly work.",
    keyFeatures: [
        {
            title: "Comprehensive Database",
            description: "Comprehensive plagiarism check across billions of online sources and databases"
        },
        {
            title: "Detailed Reports",
            description: "Detailed similarity reports with highlighted text matches"
        },
        {
            title: "User-Friendly",
            description: "User-friendly interface and quick results"
        },
        {
            title: "Multiple Formats",
            description: "Supports multiple file formats (DOC, PDF, etc.)"
        },
        {
            title: "Ethical Writing",
            description: "Promotes responsible writing and ethical publishing"
        }
    ],
    howToUse: [
        {
            step: "Request Access",
            description: "A request mail has to send at lrc@uumail.in from your official mail I.D"
        },
        {
            step: "Activate Account",
            description: "Then you will receive email from Turnitin for account activation, follow the process for account and password setup."
        }
    ],
    importantNotes: [
        "Never delete your paper ID or any data from the Turnitin.",
        "Keep your plagiarism check parameter always in the 'No repository' option.",
        "From User Info- Activate Quick Submit to check your papers.",
        "Don't oblige non-bonafide research scholars, students, faculty and staff of the university"
    ],
    submissionProcess: [
        {
            step: "Document Submission",
            description: "Upload your document to the platform"
        },
        {
            step: "Analysis",
            description: "Turnitin checks originality against its database"
        },
        {
            step: "Review the Report",
            description: "Receive and analyze the Originality Report"
        },
        {
            step: "Make Corrections",
            description: "Revise and ensure compliance with standards"
        },
        {
            step: "Resubmit",
            description: "Resubmit after revisions (if applicable)"
        }
    ],
    contactEmail: "lrc@uumail.in"
}

export const Reserve_a_Book = {
    title: "Reserve a Book",
    steps: [
        "Only checked out (Issued) books can be reserved.",
        "User can reserve and cancel any title.",
        "Books can be collected within two days from the Circulation Counter after confirmation.",
        "If you do not collect books within said period, reservation may be treated as cancelled."
    ]
}