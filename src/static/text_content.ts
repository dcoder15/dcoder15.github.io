export interface MilestoneDetails {
    id: number;
    duration: string;
    details: { [key: string]: string }
}

export type LocalizedTextContent = { [key: string]: string | MilestoneDetails[] };

export interface TextLocaleAndContent {
    locale: string;
    content: { [key: string]: string | MilestoneDetails[] };
}

export interface TextOptionsAndContent {
    languages: string[];
    content: TextLocaleAndContent[];
}

const text_content: TextOptionsAndContent = {
    languages: [
        "DE",
        "EN"
    ],
    content: [
        {
            locale: "DE",
            content: {
                introLink: "Intro",
                educationLink: "Ausbildung",
                workExperienceLink: "Berufserfahrung",
                competencesLink: "Kompetenzen",
                contactLink: "Kontakt",
                name: "David Tomic",
                business: "IT-Beratung und Softwareentwicklung",
                introduction: "Herzlich willkommen zu meinem Online Portfolio. Nachfolgend eine Gliederung zu meiner Ausbildung und Kompetenzen.",
                educationHeading: "Ausbildung",
                workExperienceHeading: "Berufserfahrung",
                competencesHeading: "Kompetenzen (Auszug)",
                programmingLanguagesHeading: "Programmiersprachen",
                frameworksAndLibrariesHeading: "Frameworks und Programmbibliotheken",
                databasesHeading: "Datenbanken",
                operatingSystemsHeading: "Betriebssysteme",
                shellsHeading: "Shells",
                contactHeading: "Kontakt",
                contactDirection: "Falls Sie Interesse an einer Projektkooperation haben, können Sie mich gerne durch folgendes Formular kontaktieren.",
                subjectLabel: "Betreff",
                sendButtonLabel: "Senden",
                educations: [
                    {
                        id: Math.random(),
                        duration: "2011 - 2013",
                        details: {
                            name: "United World College (UWC) Mostar",
                            program: "IB Diploma Programme (IBDP)",
                            degree: "International Baccalaureate"
                        }
                    },
                    {
                        id: Math.random(),
                        duration: "2013 - 2016",
                        details: {
                            name: "Universität Wien",
                            program: "Wirtschaftsinformatik",
                            degree: "Bachelor of Science"
                        }
                    },
                    {
                        id: Math.random(),
                        duration: "2016 - 2017",
                        details: {
                            name: "Technische Universität (TU) Berlin",
                            program: "Innovation in Information and Communication Technology - Internet Technology and Architecture",
                            degree: "Master of Science"
                        }
                    },
                    {
                        id: Math.random(),
                        duration: "2017 - 2018",
                        details: {
                            name: "Königliche Technische Hochschule (KTH) Stockholm",
                            program: "Innovation in Information and Communication Technology - Internet Technology and Architecture",
                            degree: "Master of Science"
                        }
                    },
                    {
                        id: Math.random(),
                        duration: "2016 - 2018",
                        details: {
                            name: "Europäisches Institut für Innovation und Technologie (EIT) Digital",
                            program: "Innovation in Information and Communication Technology - Internet Technology and Architecture",
                            degree: "Master of Science"
                        }
                    }
                ],
                workExperiences: [
                    {
                        id: Math.random(),
                        duration: "2014 - 2015",
                        details: {
                            companyType: "Vermittlerfirma für Nachhilfe-Dienstleistungen",
                            activity: "Nachhilfe in Informatik und Mathematik",
                            type: "Geringfügig"
                        }
                    },
                    {
                        id: Math.random(),
                        duration: "2015 - 2016",
                        details: {
                            companyType: "Start-up-Unternemhen",
                            activity: "Beratung zum Thema Software Architektur und UML Modellierung",
                            type: "Geringfügig"
                        }
                    },
                    {
                        id: Math.random(),
                        duration: "2016 - 2018",
                        details: {
                            companyType: "Privates Projekt",
                            activity: "Entwicklung einer Web App im Bereich Social Networking",
                            type: "Hobby"
                        }
                    },
                    {
                        id: Math.random(),
                        duration: "2018 - 2019",
                        details: {
                            companyType: "Flugzeughersteller",
                            activity: "Entwicklung einer Netzwerklösung für Flugzeugkonnektivität",
                            type: "Vollzeit"
                        }
                    },
                    {
                        id: Math.random(),
                        duration: "2019 -",
                        details: {
                            companyType: "Beratungsunternehmen und Sportwagenhersteller",
                            activity: "Entwicklung von Web Apps im Bereich Fahrzeugentwicklung",
                            type: "Vollzeit"
                        }
                    }
                ]
            }
        },
        {
            locale: "EN",
            content: {
                introLink: "Intro",
                educationLink: "Education",
                workExperienceLink: "Work experience",
                competencesLink: "Competences",
                contactLink: "Contact",
                name: "David Tomic",
                business: "IT consulting and software development",
                introduction: "Welcome to my online portfolio. In the following you will find information on my education and competences.",
                educationHeading: "Education",
                workExperienceHeading: "Work experience",
                competencesHeading: "Competences (excerpt)",
                programmingLanguagesHeading: "Programming languages",
                frameworksAndLibrariesHeading: "Frameworks and libraries",
                databasesHeading: "Databases",
                operatingSystemsHeading: "Operating systems",
                shellsHeading: "Shells",
                contactHeading: "Contact",
                contactDirection: "If you are interested in cooperating on a project, please contact me using the form below.",
                subjectLabel: "Subject",
                sendButtonLabel: "Send",
                educations: [
                    {
                        id: Math.random(),
                        duration: "2011 - 2013",
                        details: {
                            name: "United World College (UWC) Mostar",
                            program: "IB Diploma Programme (IBDP)",
                            degree: "International Baccalaureate"
                        }
                    },
                    {
                        id: Math.random(),
                        duration: "2013 - 2016",
                        details: {
                            name: "University of Vienna",
                            program: "Business Informatics",
                            degree: "Bachelor of Science"
                        }
                    },
                    {
                        id: Math.random(),
                        duration: "2016 - 2017",
                        details: {
                            name: "Technical University (TU) Berlin",
                            program: "Innovation in Information and Communication Technology - Internet Technology and Architecture",
                            degree: "Master of Science"
                        }
                    },
                    {
                        id: Math.random(),
                        duration: "2017 - 2018",
                        details: {
                            name: "Royal Institute of Technology (KTH) Stockholm",
                            program: "Innovation in Information and Communication Technology - Internet Technology and Architecture",
                            degree: "Master of Science"
                        }
                    },
                    {
                        id: Math.random(),
                        duration: "2016 - 2018",
                        details: {
                            name: "European Institute of Innovation and Technology (EIT) Digital",
                            program: "Innovation in Information and Communication Technology - Internet Technology and Architecture",
                            degree: "Master of Science"
                        }
                    }
                ],
                workExperiences: [
                    {
                        id: Math.random(),
                        duration: "2014 - 2015",
                        details: {
                            companyType: "Tutoring services broker",
                            activity: "Tutoring in IT and mathematics",
                            type: "Minor"
                        }
                    },
                    {
                        id: Math.random(),
                        duration: "2015 - 2016",
                        details: {
                            companyType: "Startup",
                            activity: "Consulting on software architecture and UML modeling",
                            type: "Minor"
                        }
                    },
                    {
                        id: Math.random(),
                        duration: "2016 - 2018",
                        details: {
                            companyType: "Private project",
                            activity: "Social networking web app development",
                            type: "Hobby"
                        }
                    },
                    {
                        id: Math.random(),
                        duration: "2018 - 2019",
                        details: {
                            companyType: "Aircraft manufacturer",
                            activity: "Development of a networking solution for aircraft connectivity",
                            type: "Full-time"
                        }
                    },
                    {
                        id: Math.random(),
                        duration: "2019 -",
                        details: {
                            companyType: "Consulting company and sports car manufacturer",
                            activity: "Development of web apps used in vehicle development",
                            type: "Full-time"
                        }
                    }
                ]
            }
        }
    ]
}

export default text_content;