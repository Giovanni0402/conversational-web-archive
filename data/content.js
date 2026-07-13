// content.js - contenuti dell'archivio. Generato dall'editor (editor.html).
window.ARCHIVE_DATA = {
  "categories": [
    {
      "id": "cat-mapping",
      "name": "Mapping between system and language conventions",
      "description": "The dialogue should respect common conventions in terms of form and linguistic choices."
    },
    {
      "id": "cat-recognition",
      "name": "Recognition rather than recall",
      "description": "Deliver information only when relevant, so as not to overload the user."
    },
    {
      "id": "cat-user-control",
      "name": "User control and freedom",
      "description": "Users should be provided with mechanisms to control the conversation."
    },
    {
      "id": "cat-consistency",
      "name": "Consistency",
      "description": "Dialogue should follow consistent patterns for similar functions. Vocabulary should also be consistent across the system."
    },
    {
      "id": "cat-error",
      "name": "Error prevention and recovery",
      "description": "The agent should be equipped with strategies to prevent mistakes and recover from them."
    },
    {
      "id": "cat-communication",
      "name": "Inclusive and efficient communication and personalization",
      "description": "System prompts should be brief and informative; users should be able to personalise the verbosity of the prompt and other characteristics."
    },
    {
      "id": "cat-help",
      "name": "Help and documentation",
      "description": "The system should be equipped with scaffolding intents and documentation to guide users through the interaction."
    },
    {
      "id": "cat-status",
      "name": "System status",
      "description": "Users should be informed when changes within the system or conversational context happen."
    },
    {
      "id": "cat-trust",
      "name": "Trustworthiness and privacy",
      "description": "The system should convey trustworthiness by ensuring privacy of user data and protecting users' privacy and security throughout the conversational interaction."
    }
  ],
  "components": [
    {
      "id": "comp-input-management",
      "name": "Input management",
      "description": "Patterns about capturing, editing and managing the user's input.",
      "guidelineIds": [
        "B10",
        "B14",
        "B17",
        "B20",
        "S4",
        "S6",
        "B21"
      ],
      "tentative": true
    },
    {
      "id": "comp-data-protection",
      "name": "Data protection",
      "description": "Patterns about user privacy and the management of personal data.",
      "guidelineIds": [
        "S11",
        "B7",
        "B18",
        "B19",
        "S2",
        "B8"
      ],
      "tentative": true
    },
    {
      "id": "comp-user-guidance",
      "name": "User guidance",
      "description": "Patterns that guide users through the next steps of the interaction.",
      "guidelineIds": [
        "B5"
      ],
      "tentative": true
    },
    {
      "id": "comp-information-display",
      "name": "Information display",
      "description": "Patterns about how information is presented to the user.",
      "guidelineIds": [
        "B1",
        "B2",
        "B3",
        "B4"
      ],
      "tentative": true
    },
    {
      "id": "comp-repair",
      "name": "Repair",
      "description": "Patterns to prevent, handle and recover from errors in the interaction.",
      "guidelineIds": [
        "B13",
        "B15",
        "S7",
        "S9",
        "S8",
        "S10"
      ],
      "tentative": true
    },
    {
      "id": "comp-site-navigation",
      "name": "Site navigation",
      "description": "Patterns about navigation and moving through the interaction.",
      "guidelineIds": [
        "B12",
        "B6",
        "S3",
        "S5"
      ],
      "tentative": true
    },
    {
      "id": "comp-dialogue",
      "name": "Dialogue and chatbot personality",
      "description": "Patterns about the dialogue style and the agent's personality.",
      "guidelineIds": [
        "B9",
        "B11",
        "B16",
        "S1"
      ],
      "tentative": true
    }
  ],
  "guidelines": [
    {
      "id": "B1",
      "categoryId": "cat-mapping",
      "type": "browsing",
      "title": "Functions should be named as the user expects them",
      "description": "Common functions such as search, sign-in or log-out should use already established wording to provide users with a familiar experience.",
      "whatToDo": [
        "Check the labels to assess whether each function uses clear language that follows established wordings."
      ],
      "examples": [
        {
          "type": "interaction",
          "title": "Standard wording",
          "content": "Sign-in: \"sign-in\", \"log-in\" — Sign-up: \"sign-up\", \"register\", \"subscribe\" — Log-out: \"log-out\", \"sign-out\", \"exit\" — Abort: \"cancel\" — Delete: \"delete\", \"remove\"."
        },
        {
          "type": "code",
          "language": "html",
          "title": "Text-level semantics using standard wording",
          "content": "<!-- Check text-level semantic elements that should use standard wording -->\n<a href=\"#\">Sign-up</a>\n<button>log-in</button>"
        }
      ],
      "related": [
        "B11"
      ],
      "status": "complete"
    },
    {
      "id": "B2",
      "categoryId": "cat-mapping",
      "type": "browsing",
      "title": "Visual components should be presented through auditory descriptions when relevant",
      "description": "When a visual component is present (image, graph, table, video) there should be an alternative way to programmatically present it. Distinguish task-relevant images, which need an alternative text, from purely decorative ones, which need not be announced.",
      "whatToDo": [
        "Images: check for alt text; hide redundant images. For composite images consider role=\"img\" on a container.",
        "Videos: check for audio descriptions and audio controls.",
        "Tables: use correct semantic tags and provide an accessible name via <caption>, aria-label or aria-labelledby."
      ],
      "examples": [
        {
          "type": "code",
          "language": "html",
          "title": "Alt text on images",
          "content": "<!-- Empty alt signals a decorative image that can be ignored -->\n<img alt=\"\" src=\"image.jpg\">\n\n<!-- Alt text is required when the image conveys information -->\n<img src=\"beautiful_bag.jpg\" alt=\"Messenger bag made of apple-skin leather, colour burgundy\">"
        },
        {
          "type": "code",
          "language": "html",
          "title": "Labelling an SVG",
          "content": "<svg role=\"img\" aria-label=\"Description of your SVG image\">\n  <!-- contents of the SVG image -->\n</svg>"
        }
      ],
      "related": [
        "B4"
      ],
      "status": "complete"
    },
    {
      "id": "B3",
      "categoryId": "cat-recognition",
      "type": "browsing",
      "title": "Present only information relevant to the user's task and current context",
      "description": "Users should not be overloaded with information. To avoid cognitive overload, information should be provided only when contextually relevant, organized and divided into logical units.",
      "whatToDo": [
        "Code: divide the page with semantic tags (section, article, aside, nav); use proper landmarks (max 5-6 per page); use the ConWeb cw-type attribute when no semantic alternative exists.",
        "Content: keep sections logically independent, keep descriptions short (a couple of sentences), and place the most important information at the top."
      ],
      "examples": [
        {
          "type": "code",
          "language": "html",
          "title": "Distinct navigation landmarks",
          "content": "<nav aria-label=\"primary\">...</nav>\n<nav aria-label=\"secondary\">...</nav>"
        },
        {
          "type": "code",
          "language": "html",
          "title": "ConWeb cw-type attribute",
          "content": "<a href=\"#\" cw-type=\"link\">go to the last page</a>\n<p cw-type=\"content-reading\">some text about apples</p>"
        }
      ],
      "related": [
        "B6",
        "B5"
      ],
      "status": "complete"
    },
    {
      "id": "B4",
      "categoryId": "cat-recognition",
      "type": "browsing",
      "title": "Provide summaries of long textual information before delivering it in full",
      "description": "Long textual information should first be summarised to avoid delivering unnecessary information. This way users can gauge whether the content is relevant. In ConWeb the cw-description attribute provides a short, programmatically determined summary that can be announced before the full text.",
      "whatToDo": [
        "Check for cw-description containing appropriate and meaningful summaries (summarising the most relevant points of the text)."
      ],
      "examples": [
        {
          "type": "code",
          "language": "html",
          "title": "cw-description summary",
          "content": "<h1>Oil painting workshops</h1>\n<p cw-description=\"course description listing all topics covered in class\">\n  I am a long description full of details about the lessons in this workshop...\n</p>"
        }
      ],
      "related": [
        "B3"
      ],
      "status": "complete"
    },
    {
      "id": "B5",
      "categoryId": "cat-recognition",
      "type": "browsing",
      "title": "Inform users of the next possible steps and available actions",
      "description": "Users should be aware of the possible actions on the page; links and correlated content should be available to enable easier exploration. If the user must act to move forward, the system should make clear what is needed.",
      "whatToDo": [
        "Use semantic tags to convey the role of each element so ConWeb and screen readers can communicate possible actions.",
        "Use the ConWeb cw-type attribute (content / link / navigation) to make the number of reachable links explicit."
      ],
      "examples": [
        {
          "type": "code",
          "language": "html",
          "title": "cw-type to expose links in a section",
          "content": "<section cw-type=\"navigation\">\n  <a href=\"/account\" cw-type=\"link\">Go to your account</a>\n  <a href=\"/orders\" cw-type=\"link\">View your orders</a>\n</section>"
        }
      ],
      "related": [
        "B3",
        "B7"
      ],
      "status": "complete"
    },
    {
      "id": "B6",
      "categoryId": "cat-recognition",
      "type": "browsing",
      "title": "Present information hierarchically in manageable, conceptually coherent units",
      "description": "Users should clearly understand the scope of the page and how content is organized. Use a concept-based organization that divides information into manageable chunks within a clear hierarchy.",
      "whatToDo": [
        "Code: see 'Present only relevant information' (semantic sectioning and landmarks).",
        "Content: structure a single page into sections with unique themes; do not mix topics; use titles to identify the content of each section."
      ],
      "examples": [
        {
          "type": "code",
          "language": "html",
          "title": "Sectioning with a heading",
          "content": "<section aria-labelledby=\"about\">\n  <h2 id=\"about\">About</h2>\n  <p>Information about the shop and the services provided.</p>\n</section>"
        }
      ],
      "related": [
        "B3"
      ],
      "status": "complete"
    },
    {
      "id": "B7",
      "categoryId": "cat-recognition",
      "type": "browsing",
      "title": "Ensure link predictability by previewing the content reachable through a link",
      "description": "Links should be worded so they suggest what content will be reached. Avoid generic wording such as \"learn more\", \"go to page\", \"more\". Icon links should have a worded description; aria-label or aria-labelledby can add context.",
      "whatToDo": [
        "Links must have a non-empty href to be considered true links.",
        "Name icon links with aria-label.",
        "Use aria-labelledby to concatenate link text with nearby context; use aria-describedby to announce an action's consequence."
      ],
      "examples": [
        {
          "type": "code",
          "language": "html",
          "title": "Naming an icon link",
          "content": "<a href=\"https://somelink.com\" aria-label=\"Open this link in a new page\">\n  <svg class=\"icon\" aria-hidden=\"true\"><path d=\"...\"></path></svg>\n</a>"
        },
        {
          "type": "code",
          "language": "html",
          "title": "aria-describedby on an action",
          "content": "<button aria-label=\"Close\" aria-describedby=\"descClose\">X</button>\n<div id=\"descClose\">Closing this window will discard any information entered.</div>"
        }
      ],
      "related": [
        "B5",
        "B1"
      ],
      "status": "complete"
    },
    {
      "id": "B8",
      "categoryId": "cat-recognition",
      "type": "browsing",
      "title": "Provide between three and six options at a time (customizable)",
      "description": "",
      "whatToDo": [],
      "examples": [],
      "related": [],
      "status": "pending"
    },
    {
      "id": "B9",
      "categoryId": "cat-user-control",
      "type": "browsing",
      "title": "Users should be able to use different expressions and synonyms to mean the same thing",
      "description": "When referring to a link or item on the page, users should not have to use the exact phrasing. For example, in a list users should be able to refer to items as \"first item\", \"second\", and so on. Relative statements like \"today\" or \"at the earliest time\" should be possible.",
      "whatToDo": [
        "Check for the presence of cw-keys that list alternative phrasing usable to refer to an item."
      ],
      "examples": [
        {
          "type": "code",
          "language": "html",
          "title": "cw-keys with alternative phrasing",
          "content": "<h1 cw-keys=\"painting workshops, workshops\">All our available workshops</h1>\n<ul>\n  <li cw-keys=\"first item, first option\">oil painting workshop</li>\n  <li cw-keys=\"second item, second option\">chalk workshop</li>\n</ul>"
        }
      ],
      "related": [],
      "status": "complete"
    },
    {
      "id": "B10",
      "categoryId": "cat-user-control",
      "type": "browsing",
      "title": "Users should be able to overrule, change or delete preferences and input at any point",
      "description": "",
      "whatToDo": [],
      "examples": [],
      "related": [],
      "status": "pending"
    },
    {
      "id": "B11",
      "categoryId": "cat-consistency",
      "type": "browsing",
      "title": "Elements with the same function are identified and worded consistently",
      "description": "Buttons, menus, titles and other elements that share a function across the website should be worded the same way, to avoid confusing users about their purpose.",
      "whatToDo": [
        "Check that wording is coherent across different parts of the website. E.g. multiple submit buttons should always be called \"submit\"."
      ],
      "examples": [
        {
          "type": "interaction",
          "title": "Consistent labels",
          "content": "If one form's confirmation button says \"Submit\", every other confirmation button across the site should also say \"Submit\" — not \"Send\", \"OK\" or \"Go\"."
        }
      ],
      "related": [
        "B1"
      ],
      "status": "complete"
    },
    {
      "id": "B12",
      "categoryId": "cat-consistency",
      "type": "browsing",
      "title": "Navigation commands should always be available to users",
      "description": "",
      "whatToDo": [],
      "examples": [],
      "related": [],
      "status": "pending"
    },
    {
      "id": "B13",
      "categoryId": "cat-error",
      "type": "browsing",
      "title": "Error messages are in plain language and suggest how to overcome the error",
      "description": "Error messages should use language non-technical users understand. If the user can fix the error themselves, the message should include a hint. Common cases are invalid inputs where a specific type is expected.",
      "whatToDo": [
        "Content: check the wording is appropriate for non-technical users and that a hint is present if the user can fix the error.",
        "Code: use aria-invalid together with aria-errormessage."
      ],
      "examples": [
        {
          "type": "code",
          "language": "html",
          "title": "Accessible error message",
          "content": "<label for=\"email\">Email address:</label>\n<input type=\"email\" id=\"email\" aria-invalid=\"true\" aria-errormessage=\"err1\">\n<span id=\"err1\" class=\"errormessage\">Error: Enter a valid email address</span>"
        }
      ],
      "related": [
        "B14"
      ],
      "status": "complete"
    },
    {
      "id": "B14",
      "categoryId": "cat-error",
      "type": "browsing",
      "title": "If a format of input is expected, provide an example of the expected answer",
      "description": "Providing examples of expected input helps avoid errors. Because voice is a sequential and slow channel, it is better to prevent mistakes upfront.",
      "whatToDo": [
        "Use appropriate, evocative examples of the data you expect. Use the right semantic tags to format the input; add a description for rare inputs."
      ],
      "examples": [
        {
          "type": "code",
          "language": "html",
          "title": "Input with example format",
          "content": "<label for=\"email\">Email:</label>\n<input type=\"email\" id=\"email\" placeholder=\"name@example.com\" aria-describedby=\"fmt\" required>\n<small id=\"fmt\">Format: name@example.com</small>"
        }
      ],
      "related": [
        "B13"
      ],
      "status": "complete"
    },
    {
      "id": "B15",
      "categoryId": "cat-error",
      "type": "browsing",
      "title": "Handle unknown requests or failures through fall-back intents",
      "description": "",
      "whatToDo": [],
      "examples": [],
      "related": [],
      "status": "pending"
    },
    {
      "id": "B16",
      "categoryId": "cat-communication",
      "type": "browsing",
      "title": "Allow users to define accelerators (shortcuts, bookmarks, abbreviations, landmarks, short sounds)",
      "description": "",
      "whatToDo": [],
      "examples": [],
      "related": [],
      "status": "pending"
    },
    {
      "id": "B17",
      "categoryId": "cat-communication",
      "type": "browsing",
      "title": "Previously entered information is auto-populated or available to select",
      "description": "",
      "whatToDo": [],
      "examples": [],
      "related": [],
      "status": "pending"
    },
    {
      "id": "B18",
      "categoryId": "cat-help",
      "type": "browsing",
      "title": "Maintain and display the navigational context so users know where they are",
      "description": "",
      "whatToDo": [],
      "examples": [],
      "related": [],
      "status": "pending"
    },
    {
      "id": "B19",
      "categoryId": "cat-help",
      "type": "browsing",
      "title": "Provide a help function that helps users discover the agent's capabilities",
      "description": "",
      "whatToDo": [],
      "examples": [],
      "related": [],
      "status": "pending"
    },
    {
      "id": "B20",
      "categoryId": "cat-status",
      "type": "browsing",
      "title": "Give feedback when there are page updates",
      "description": "On dynamic web pages where content can change over time it is important to provide updates to users. Examples include chats, progress bars, notifications and errors. Live regions are a good tool for communicating a simple string of content.",
      "whatToDo": [
        "Content: use clear, brief, informative language for notifications.",
        "Code: wrap dynamically updated content in a region tagged with aria-live, or use a role with built-in live behaviour (alert, status, marquee, timer)."
      ],
      "examples": [
        {
          "type": "code",
          "language": "html",
          "title": "Progress bar (native live region)",
          "content": "<label for=\"progress-bar\">Uploading documents</label>\n<progress id=\"progress-bar\" max=\"100\" value=\"0\"></progress>"
        },
        {
          "type": "code",
          "language": "html",
          "title": "aria-live status message",
          "content": "<span id=\"success\" aria-live=\"polite\">\n  You have submitted your application successfully.\n</span>"
        }
      ],
      "related": [],
      "status": "complete"
    },
    {
      "id": "B21",
      "categoryId": "cat-status",
      "type": "browsing",
      "title": "Focus on the new elements in the page first",
      "description": "",
      "whatToDo": [],
      "examples": [],
      "related": [],
      "status": "pending"
    },
    {
      "id": "S1",
      "categoryId": "cat-mapping",
      "type": "scaffolding",
      "title": "The agent should follow dialogue conventions such as turn taking",
      "description": "",
      "whatToDo": [],
      "examples": [],
      "related": [],
      "status": "pending"
    },
    {
      "id": "S2",
      "categoryId": "cat-mapping",
      "type": "scaffolding",
      "title": "Depending on situation and context, the agent should express emotions (apologizing, encouraging, etc.)",
      "description": "",
      "whatToDo": [],
      "examples": [],
      "related": [],
      "status": "pending"
    },
    {
      "id": "S3",
      "categoryId": "cat-user-control",
      "type": "scaffolding",
      "title": "The agent should support starting and stopping the conversation",
      "description": "",
      "whatToDo": [],
      "examples": [],
      "related": [],
      "status": "pending"
    },
    {
      "id": "S4",
      "categoryId": "cat-user-control",
      "type": "scaffolding",
      "title": "The agent should support undo and redo functions",
      "description": "",
      "whatToDo": [],
      "examples": [],
      "related": [],
      "status": "pending"
    },
    {
      "id": "S5",
      "categoryId": "cat-user-control",
      "type": "scaffolding",
      "title": "Users should be able to move flexibly through conversational steps (back, forward, skip)",
      "description": "",
      "whatToDo": [],
      "examples": [],
      "related": [],
      "status": "pending"
    },
    {
      "id": "S6",
      "categoryId": "cat-error",
      "type": "scaffolding",
      "title": "Confirm user inputs before irreversible actions; allow users to customize this behaviour",
      "description": "",
      "whatToDo": [],
      "examples": [],
      "related": [],
      "status": "pending"
    },
    {
      "id": "S7",
      "categoryId": "cat-error",
      "type": "scaffolding",
      "title": "The agent supports mechanisms to review and modify previously submitted information",
      "description": "",
      "whatToDo": [],
      "examples": [],
      "related": [],
      "status": "pending"
    },
    {
      "id": "S8",
      "categoryId": "cat-communication",
      "type": "scaffolding",
      "title": "Allow adjustment of speed, verbosity and language complexity; favour short, clear sentences",
      "description": "",
      "whatToDo": [],
      "examples": [],
      "related": [],
      "status": "pending"
    },
    {
      "id": "S9",
      "categoryId": "cat-help",
      "type": "scaffolding",
      "title": "The agent should support a repeat function",
      "description": "",
      "whatToDo": [],
      "examples": [],
      "related": [],
      "status": "pending"
    },
    {
      "id": "S10",
      "categoryId": "cat-trust",
      "type": "scaffolding",
      "title": "The agent should not falsely claim to be human",
      "description": "",
      "whatToDo": [],
      "examples": [],
      "related": [],
      "status": "pending"
    },
    {
      "id": "S11",
      "categoryId": "cat-trust",
      "type": "scaffolding",
      "title": "Provide opportunities for user data management; let users view and manage their personal data",
      "description": "",
      "whatToDo": [],
      "examples": [],
      "related": [],
      "status": "pending"
    }
  ]
};
