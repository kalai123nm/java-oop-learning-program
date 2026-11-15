/* =========================================
   Java OOP Learning Platform
   Application Logic
   ========================================= */


/* =========================================
   Module Data
   ========================================= */

const modules = [
    {
        id: 1,
        number: "01",
        title: "Classes and Objects",
        description:
            "Understand classes, objects, fields, methods, and object creation.",
        duration: "35 min",
        type: "Module"
    },
    {
        id: 2,
        number: "02",
        title: "Encapsulation",
        description:
            "Learn how to protect object data using encapsulation and controlled access.",
        duration: "40 min",
        type: "Module"
    },
    {
        id: 3,
        number: "03",
        title: "Inheritance",
        description:
            "Understand how classes can inherit and extend behavior from other classes.",
        duration: "40 min",
        type: "Module"
    },
    {
        id: 4,
        number: "04",
        title: "Polymorphism",
        description:
            "Explore method overriding, parent references, and runtime behavior.",
        duration: "40 min",
        type: "Module"
    },
    {
        id: 5,
        number: "05",
        title: "Abstraction and Interfaces",
        description:
            "Learn how abstract classes and interfaces define reusable contracts and behavior.",
        duration: "45 min",
        type: "Module"
    },
    {
        id: 6,
        number: "06",
        title: "Composition and Relationships",
        description:
            "Model real-world has-a relationships between objects using composition.",
        duration: "40 min",
        type: "Module"
    },
    {
        id: 7,
        number: "07",
        title: "OOP Capstone Project",
        description:
            "Apply all major OOP concepts by building a complete Java learning management system.",
        duration: "60–90 min",
        type: "Capstone"
    }
];


/* =========================================
   Assessment Data
   ========================================= */

const assessments = [
    {
        moduleId: 1,
        title: "Classes and Objects Assessment",
        points: 19
    },
    {
        moduleId: 2,
        title: "Encapsulation Assessment",
        points: 26
    },
    {
        moduleId: 3,
        title: "Inheritance Assessment",
        points: 26
    },
    {
        moduleId: 4,
        title: "Polymorphism Assessment",
        points: 26
    },
    {
        moduleId: 5,
        title: "Abstraction and Interfaces Assessment",
        points: 30
    },
    {
        moduleId: 6,
        title: "Composition and Object Relationships Assessment",
        points: 30
    },
    {
        moduleId: 7,
        title: "OOP Capstone Project Assessment",
        points: 40
    }
];


/* =========================================
   Progress State
   ========================================= */

let progress = JSON.parse(
    localStorage.getItem("javaOopProgress")
) || {
    completedModules: [],
    completedAssessments: [],
    assessmentScores: {}
};


/* =========================================
   DOM Elements
   ========================================= */

const pages = document.querySelectorAll(".page");

const navItems = document.querySelectorAll(".nav-item");

const pageTitle = document.getElementById("page-title");

const modulesContainer =
    document.getElementById("modules-container");

const progressModules =
    document.getElementById("progress-modules");

const assessmentsContainer =
    document.getElementById("assessments-container");

const continueLearningButton =
    document.getElementById("continue-learning");


/* =========================================
   Navigation
   ========================================= */

function showPage(pageName) {

    pages.forEach((page) => {
        page.classList.remove("active");
    });

    const selectedPage =
        document.getElementById(`${pageName}-page`);

    if (selectedPage) {
        selectedPage.classList.add("active");
    }

    navItems.forEach((item) => {
        item.classList.remove("active");

        if (item.dataset.page === pageName) {
            item.classList.add("active");
        }
    });

    const titles = {
        dashboard: "Dashboard",
        modules: "All Modules",
        progress: "My Progress",
        assessments: "Assessments"
    };

    pageTitle.textContent =
        titles[pageName] || "Dashboard";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* =========================================
   Navigation Event Listeners
   ========================================= */

navItems.forEach((item) => {

    item.addEventListener("click", (event) => {

        event.preventDefault();

        const pageName = item.dataset.page;

        showPage(pageName);
    });

});


/* =========================================
   Dashboard Navigation Buttons
   ========================================= */

document.querySelectorAll("[data-page-target]")
    .forEach((button) => {

        button.addEventListener("click", () => {

            const target =
                button.dataset.pageTarget;

            showPage(target);

        });

    });


/* =========================================
   Continue Learning
   ========================================= */

if (continueLearningButton) {

    continueLearningButton.addEventListener(
        "click",
        () => {

            const nextModule =
                getNextIncompleteModule();

            if (nextModule) {

                showPage("modules");

                setTimeout(() => {

                    const target =
                        document.getElementById(
                            `module-${nextModule.id}`
                        );

                    if (target) {

                        target.scrollIntoView({
                            behavior: "smooth",
                            block: "center"
                        });

                    }

                }, 100);

            }

        }
    );

}


/* =========================================
   Find Next Incomplete Module
   ========================================= */

function getNextIncompleteModule() {

    return modules.find(
        (module) =>
            !progress.completedModules.includes(
                module.id
            )
    );

}


/* =========================================
   Calculate Overall Progress
   ========================================= */

function calculateOverallProgress() {

    const totalItems = modules.length * 2;

    const completedItems =
        progress.completedModules.length +
        progress.completedAssessments.length;

    if (totalItems === 0) {
        return 0;
    }

    return Math.round(
        (completedItems / totalItems) * 100
    );

}


/* =========================================
   Save Progress
   ========================================= */

function saveProgress() {

    localStorage.setItem(
        "javaOopProgress",
        JSON.stringify(progress)
    );

}


/* =========================================
   Mark Module Complete
   ========================================= */

function completeModule(moduleId) {

    if (
        !progress.completedModules.includes(moduleId)
    ) {

        progress.completedModules.push(moduleId);

        saveProgress();

        updateDashboard();

        renderModules();

        renderProgress();

    }

}


/* =========================================
   Mark Assessment Complete
   ========================================= */

function completeAssessment(
    moduleId,
    score
) {

    if (
        !progress.completedAssessments.includes(
            moduleId
        )
    ) {

        progress.completedAssessments.push(
            moduleId
        );

    }

    progress.assessmentScores[moduleId] = score;

    saveProgress();

    updateDashboard();

    renderAssessments();

    renderProgress();

}


/* =========================================
   Render Module Cards
   ========================================= */

function renderModules() {

    if (!modulesContainer) {
        return;
    }

    modulesContainer.innerHTML = "";

    modules.forEach((module) => {

        const completed =
            progress.completedModules.includes(
                module.id
            );

        const card =
            document.createElement("article");

        card.className =
            `module-card ${module.type === "Capstone"
                ? "capstone"
                : ""
            }`;

        card.id = `module-${module.id}`;

        card.innerHTML = `

            <div class="module-card-top">

                <span class="module-badge">
                    ${module.number}
                </span>

                <span class="module-status">
                    ${completed
                ? "Completed"
                : module.type === "Capstone"
                    ? "Capstone"
                    : "Available"
            }
                </span>

            </div>

            <h3>
                ${module.title}
            </h3>

            <p>
                ${module.description}
            </p>

            <div class="module-meta">

                <span>
                    ◷ ${module.duration}
                </span>

                <span>
                    ${module.type === "Capstone"
                ? "Final Project"
                : "Learn + Practice"
            }
                </span>

            </div>

            <button
                class="module-button"
                data-module-id="${module.id}"
            >
                ${completed
                ? "Review Module →"
                : "Start Learning →"
            }
            </button>

        `;

        modulesContainer.appendChild(card);

    });


    document
        .querySelectorAll("[data-module-id]")
        .forEach((button) => {

            button.addEventListener(
                "click",
                () => {

                    const moduleId =
                        Number(
                            button.dataset.moduleId
                        );

                    openModule(moduleId);

                }
            );

        });

}


/* =========================================
   Open Module
   ========================================= */

function openModule(moduleId) {

    const module =
        modules.find(
            (item) => item.id === moduleId
        );

    if (!module) {
        return;
    }

    const modulePage =
        document.getElementById(
            "module-learning-page"
        );

    if (!modulePage) {
        return;
    }

    document
        .querySelectorAll(".page")
        .forEach((page) => {
            page.classList.remove("active");
        });

    modulePage.classList.add("active");

    navItems.forEach((item) => {
        item.classList.remove("active");
    });

    pageTitle.textContent =
        `Module ${module.number}`;

    document.getElementById(
        "learning-module-number"
    ).textContent = module.number;

    document.getElementById(
        "learning-module-title"
    ).textContent = module.title;

    document.getElementById(
        "learning-module-description"
    ).textContent = module.description;

    document.getElementById(
        "learning-module-duration"
    ).textContent =
        `◷ ${module.duration}`;

    document.getElementById(
        "learning-content-body"
    ).innerHTML = `

        <h2>
            ${module.title}
        </h2>

        <p>
            Welcome to Module ${module.number}.
            This module is part of the Java OOP
            Learning Program.
        </p>

        <h3>Learning Objective</h3>

        <p>
            ${module.description}
        </p>

        <h3>What You Will Learn</h3>

        <ul>
            <li>Understand the key concepts in this module.</li>
            <li>Study practical Java examples.</li>
            <li>Apply the concepts through guided practice.</li>
            <li>Prepare for the module assessment.</li>
        </ul>

        <h3>Learning Content</h3>

        <p>
            The actual Markdown learning content
            from your repository will be loaded here
            in the next development step.
        </p>

    `;

    updateModuleLearningProgress(moduleId);

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}

function updateModuleLearningProgress(moduleId) {

    const completed =
        progress.completedModules.includes(
            moduleId
        );

    const percentage =
        completed ? 100 : 0;

    const progressText =
        document.getElementById(
            "module-progress-percentage"
        );

    const progressBar =
        document.getElementById(
            "module-progress-bar"
        );

    if (progressText) {

        progressText.textContent =
            `${percentage}%`;

    }

    if (progressBar) {

        progressBar.style.width =
            `${percentage}%`;

    }

}

/* =========================================
   Render Progress
   ========================================= */

function renderProgress() {

    if (!progressModules) {
        return;
    }

    progressModules.innerHTML = "";

    modules.forEach((module) => {

        const completed =
            progress.completedModules.includes(
                module.id
            );

        const assessmentCompleted =
            progress.completedAssessments.includes(
                module.id
            );

        let moduleProgress = 0;

        if (completed) {
            moduleProgress += 50;
        }

        if (assessmentCompleted) {
            moduleProgress += 50;
        }

        const item =
            document.createElement("div");

        item.className =
            "progress-module-item";

        item.innerHTML = `

            <div class="module-badge">
                ${module.number}
            </div>

            <div class="progress-module-info">

                <h3>
                    ${module.title}
                </h3>

                <p>
                    Learning:
                    ${completed
                ? "Completed"
                : "Not completed"
            }

                    ·

                    Assessment:
                    ${assessmentCompleted
                ? "Completed"
                : "Not completed"
            }
                </p>

            </div>

            <div class="progress-module-percentage">
                ${moduleProgress}%
            </div>

        `;

        progressModules.appendChild(item);

    });


    updateProgressDisplay();

}


/* =========================================
   Update Progress Display
   ========================================= */

function updateProgressDisplay() {

    const overallProgress =
        calculateOverallProgress();

    const progressText =
        document.getElementById(
            "overall-progress"
        );

    const progressBar =
        document.getElementById(
            "overall-progress-bar"
        );

    if (progressText) {

        progressText.textContent =
            `${overallProgress}%`;

    }

    if (progressBar) {

        progressBar.style.width =
            `${overallProgress}%`;

    }

}


/* =========================================
   Render Assessments
   ========================================= */

function renderAssessments() {

    if (!assessmentsContainer) {
        return;
    }

    assessmentsContainer.innerHTML = "";

    assessments.forEach((assessment) => {

        const completed =
            progress.completedAssessments.includes(
                assessment.moduleId
            );

        const score =
            progress.assessmentScores[
            assessment.moduleId
            ];

        const item =
            document.createElement("div");

        item.className =
            "assessment-item";

        item.innerHTML = `

            <div class="assessment-icon">
                ✓
            </div>

            <div class="assessment-info">

                <h3>
                    ${assessment.title}
                </h3>

                <p>
                    Module ${assessment.moduleId}
                    ·
                    ${assessment.points} points
                </p>

            </div>

            <div class="assessment-score">

                ${completed
                ? `Score: ${score ?? "Completed"}`
                : "Not started"
            }

            </div>

            <button
                class="secondary-button assessment-button"
                data-assessment-id="${assessment.moduleId}"
            >

                ${completed
                ? "Review"
                : "Start"
            }

                →

            </button>

        `;

        assessmentsContainer.appendChild(item);

    });


    document
        .querySelectorAll(".assessment-button")
        .forEach((button) => {

            button.addEventListener(
                "click",
                () => {

                    const moduleId =
                        Number(
                            button.dataset.assessmentId
                        );

                    openAssessment(moduleId);

                }
            );

        });

}


/* =========================================
   Open Assessment
   ========================================= */

function openAssessment(moduleId) {

    const assessment =
        assessments.find(
            (item) =>
                item.moduleId === moduleId
        );

    if (!assessment) {
        return;
    }

    alert(
        `${assessment.title}\n\n` +
        `The interactive assessment interface will be connected next.\n\n` +
        `Maximum score: ${assessment.points} points.`
    );

}


/* =========================================
   Update Dashboard
   ========================================= */

function updateDashboard() {

    const completedModules =
        progress.completedModules.length;

    const completedAssessments =
        progress.completedAssessments.length;

    const overallProgress =
        calculateOverallProgress();


    /*
     * Update overview cards.
     */

    const overviewCards =
        document.querySelectorAll(
            ".overview-card"
        );


    if (overviewCards.length >= 3) {

        const moduleValue =
            overviewCards[0]
                .querySelector("strong");

        const assessmentValue =
            overviewCards[1]
                .querySelector("strong");

        const progressValue =
            overviewCards[2]
                .querySelector("strong");


        if (moduleValue) {

            moduleValue.textContent =
                `${completedModules} / ${modules.length}`;

        }

        if (assessmentValue) {

            assessmentValue.textContent =
                `${completedAssessments} / ${assessments.length}`;

        }

        if (progressValue) {

            progressValue.textContent =
                `${overallProgress}%`;

        }

    }


    /*
     * Update continue-learning card.
     */

    const nextModule =
        getNextIncompleteModule();


    const continueCard =
        document.querySelector(
            ".continue-card"
        );


    if (
        nextModule &&
        continueCard
    ) {

        const number =
            continueCard.querySelector(
                ".module-number"
            );

        const status =
            continueCard.querySelector(
                ".status-label"
            );

        const title =
            continueCard.querySelector(
                "h3"
            );

        const description =
            continueCard.querySelector(
                "p"
            );


        if (number) {

            number.textContent =
                nextModule.number;

        }

        if (status) {

            status.textContent =
                "NEXT MODULE";

        }

        if (title) {

            title.textContent =
                nextModule.title;

        }

        if (description) {

            description.textContent =
                nextModule.description;

        }

    }


    /*
     * If every module is completed,
     * update the card message.
     */

    if (
        !nextModule &&
        continueCard
    ) {

        const status =
            continueCard.querySelector(
                ".status-label"
            );

        const title =
            continueCard.querySelector(
                "h3"
            );

        const description =
            continueCard.querySelector(
                "p"
            );


        if (status) {

            status.textContent =
                "PROGRAM COMPLETE";

        }

        if (title) {

            title.textContent =
                "Congratulations!";

        }

        if (description) {

            description.textContent =
                "You have completed all seven modules.";

        }

    }

}


/* =========================================
   Initialize Application
   ========================================= */

function initializeApp() {

    renderModules();

    renderProgress();

    renderAssessments();

    updateDashboard();

}

const backToModules =
    document.getElementById(
        "back-to-modules"
    );

if (backToModules) {

    backToModules.addEventListener(
        "click",
        () => {

            showPage("modules");

        }
    );

}

/* =========================================
   Start Application
   ========================================= */

initializeApp();