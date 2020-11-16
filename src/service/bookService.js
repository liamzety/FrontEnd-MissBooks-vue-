import storageService from "./storageService";

export const bookService = {
  query,
  getById,
  searchBooks,
  saveBook,
  addReview,
};


async function query() {
  const books = [

    {
      "kind": "books#volume",
      "id": "-V3ZDwAAQBAJ",
      "etag": "N8xVWATYHbA",
      "selfLink": "https://www.googleapis.com/books/v1/volumes/-V3ZDwAAQBAJ",
      "volumeInfo": {
        "title": "The Saga of the Witcher",
        "subtitle": "Blood of Elves, Time of Contempt, Baptism of Fire, The Tower of the Swallow and The Lady of the Lake",
        "authors": [
          "Andrzej Sapkowski"
        ],
        "publisher": "Hachette UK",
        "publishedDate": "2020-06-11",
        "description": "Herein lies the main saga of Geralt the Witcher - revered and hated - who holds the line against the monsters plaguing humanity. These five novels make up the bestselling series that inspired the Witcher video games and a major Netflix show. Geralt of Rivia is a Witcher, a man whose magic powers and lifelong training have made him a brilliant fighter and a merciless assassin. Yet he is no ordinary killer: he hunts the vile fiends that ravage the land and attack the innocent. But not everything monstrous-looking is evil; not everything fair is good . . . and in every fairy tale there is a grain of truth. Read the epic Witcher saga now with this eBook boxset, which contains all five novels in the ground-breaking series. Blood of Elves translated by Danusia Stok. Time of Contempt, Baptism of Fire, The Tower of the Swallow, The Lady of the Lake translated by David French. Andrzej Sapkowski, winner of the World Fantasy Lifetime Achievement award, started an international phenomenon with his Witcher series. The Last Wish is the perfect introduction to this one-of-a-kind fantasy world.",
        "industryIdentifiers": [
          {
            "type": "ISBN_13",
            "identifier": "9781473232464"
          },
          {
            "type": "ISBN_10",
            "identifier": "1473232465"
          }
        ],
        "readingModes": {
          "text": true,
          "image": false
        },
        "pageCount": 2032,
        "printType": "BOOK",
        "categories": [
          "Fiction"
        ],
        "maturityRating": "NOT_MATURE",
        "allowAnonLogging": true,
        "contentVersion": "1.2.2.0.preview.2",
        "panelizationSummary": {
          "containsEpubBubbles": false,
          "containsImageBubbles": false
        },
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=-V3ZDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=-V3ZDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        },
        "language": "en",
        "previewLink": "http://books.google.com/books?id=-V3ZDwAAQBAJ&printsec=frontcover&dq=witcher&hl=&cd=1&source=gbs_api",
        "infoLink": "http://books.google.com/books?id=-V3ZDwAAQBAJ&dq=witcher&hl=&source=gbs_api",
        "canonicalVolumeLink": "https://books.google.com/books/about/The_Saga_of_the_Witcher.html?hl=&id=-V3ZDwAAQBAJ"
      },
      "saleInfo": {
        "country": "IL",
        "saleability": "NOT_FOR_SALE",
        "isEbook": false
      },
      "accessInfo": {
        "country": "IL",
        "viewability": "PARTIAL",
        "embeddable": true,
        "publicDomain": false,
        "textToSpeechPermission": "ALLOWED_FOR_ACCESSIBILITY",
        "epub": {
          "isAvailable": true,
          "acsTokenLink": "http://books.google.com/books/download/The_Saga_of_the_Witcher-sample-epub.acsm?id=-V3ZDwAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
        },
        "pdf": {
          "isAvailable": false
        },
        "webReaderLink": "http://play.google.com/books/reader?id=-V3ZDwAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
        "accessViewStatus": "SAMPLE",
        "quoteSharingAllowed": false
      },
      "searchInfo": {
        "textSnippet": "These five novels make up the bestselling series that inspired the Witcher video games and a major Netflix show."
      }
    },
    {
      "kind": "books#volume",
      "id": "Z6GBDwAAQBAJ",
      "etag": "GstjfI4rZ10",
      "selfLink": "https://www.googleapis.com/books/v1/volumes/Z6GBDwAAQBAJ",
      "volumeInfo": {
        "title": "The Witcher: Of Flesh and Flame #4",
        "authors": [
          "Aleksandra Motyka"
        ],
        "publisher": "Dark Horse Comics (Single Issues)",
        "publishedDate": "2019-04-03",
        "description": "Searching for a way to save Geralt from death at the hands of the Ofieri for a crime he did not commit, Dandelion attempts to resolve the conflict in his own mischievous way. Meanwhile, while Radeyah begins to assume that she is safe, there are unforeseen consequences for her actions waiting just around the corner to strike. Featuring one of the most popular video-game series from hit studio CD Projekt Red! A new series featuring fan-favorite characters, including Geralt and Dandelion!",
        "industryIdentifiers": [
          {
            "type": "OTHER",
            "identifier": "PKEY:3004198"
          }
        ],
        "readingModes": {
          "text": false,
          "image": true
        },
        "pageCount": 32,
        "printType": "BOOK",
        "categories": [
          "Comics & Graphic Novels"
        ],
        "maturityRating": "NOT_MATURE",
        "allowAnonLogging": true,
        "contentVersion": "1.1.1.0.preview.1",
        "panelizationSummary": {
          "containsEpubBubbles": false,
          "containsImageBubbles": false
        },
        "comicsContent": true,
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=Z6GBDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=Z6GBDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        },
        "language": "en",
        "previewLink": "http://books.google.com/books?id=Z6GBDwAAQBAJ&pg=PP1&dq=witcher&hl=&cd=2&source=gbs_api",
        "infoLink": "http://books.google.com/books?id=Z6GBDwAAQBAJ&dq=witcher&hl=&source=gbs_api",
        "canonicalVolumeLink": "https://books.google.com/books/about/The_Witcher_Of_Flesh_and_Flame_4.html?hl=&id=Z6GBDwAAQBAJ"
      },
      "saleInfo": {
        "country": "IL",
        "saleability": "NOT_FOR_SALE",
        "isEbook": false
      },
      "accessInfo": {
        "country": "IL",
        "viewability": "PARTIAL",
        "embeddable": true,
        "publicDomain": false,
        "textToSpeechPermission": "ALLOWED",
        "epub": {
          "isAvailable": false
        },
        "pdf": {
          "isAvailable": true,
          "acsTokenLink": "http://books.google.com/books/download/The_Witcher_Of_Flesh_and_Flame_4-sample-pdf.acsm?id=Z6GBDwAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
        },
        "webReaderLink": "http://play.google.com/books/reader?id=Z6GBDwAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
        "accessViewStatus": "SAMPLE",
        "quoteSharingAllowed": false
      },
      "searchInfo": {
        "textSnippet": "Searching for a way to save Geralt from death at the hands of the Ofieri for a crime he did not commit, Dandelion attempts to resolve the conflict in his own mischievous way."
      }
    },
    {
      "kind": "books#volume",
      "id": "HUl2DwAAQBAJ",
      "etag": "hIahYOXd1uk",
      "selfLink": "https://www.googleapis.com/books/v1/volumes/HUl2DwAAQBAJ",
      "volumeInfo": {
        "title": "Witcher: Of Flesh and Flame #2",
        "authors": [
          "Aleksandra Motyka"
        ],
        "publisher": "Dark Horse Comics (Single Issues)",
        "publishedDate": "2019-01-23",
        "description": "After arriving in an enigmatic location by mistake, and being forced to hide their identities, Geralt and Dandelion find themselves faced with an impossible task. Concurrently, Geralt's attention is drawn to a series of strange episodes surrounding the King's concubines. Will the duo be able to solve the palace's dilemma, as well as their own, and secure their safety and freedom?",
        "industryIdentifiers": [
          {
            "type": "OTHER",
            "identifier": "PKEY:3004196"
          }
        ],
        "readingModes": {
          "text": false,
          "image": true
        },
        "pageCount": 32,
        "printType": "BOOK",
        "categories": [
          "Comics & Graphic Novels"
        ],
        "maturityRating": "NOT_MATURE",
        "allowAnonLogging": true,
        "contentVersion": "1.1.1.0.preview.1",
        "panelizationSummary": {
          "containsEpubBubbles": false,
          "containsImageBubbles": false
        },
        "comicsContent": true,
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=HUl2DwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=HUl2DwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        },
        "language": "en",
        "previewLink": "http://books.google.com/books?id=HUl2DwAAQBAJ&pg=PP1&dq=witcher&hl=&cd=3&source=gbs_api",
        "infoLink": "http://books.google.com/books?id=HUl2DwAAQBAJ&dq=witcher&hl=&source=gbs_api",
        "canonicalVolumeLink": "https://books.google.com/books/about/Witcher_Of_Flesh_and_Flame_2.html?hl=&id=HUl2DwAAQBAJ",
        "seriesInfo": {
          "kind": "books#volume_series_info",
          "bookDisplayNumber": "2",
          "volumeSeries": [
            {
              "seriesId": "mdkgGwAAABC4wM",
              "seriesBookType": "ISSUE",
              "orderNumber": 2
            }
          ]
        }
      },
      "saleInfo": {
        "country": "IL",
        "saleability": "NOT_FOR_SALE",
        "isEbook": false
      },
      "accessInfo": {
        "country": "IL",
        "viewability": "PARTIAL",
        "embeddable": true,
        "publicDomain": false,
        "textToSpeechPermission": "ALLOWED",
        "epub": {
          "isAvailable": false
        },
        "pdf": {
          "isAvailable": true,
          "acsTokenLink": "http://books.google.com/books/download/Witcher_Of_Flesh_and_Flame_2-sample-pdf.acsm?id=HUl2DwAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
        },
        "webReaderLink": "http://play.google.com/books/reader?id=HUl2DwAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
        "accessViewStatus": "SAMPLE",
        "quoteSharingAllowed": false
      },
      "searchInfo": {
        "textSnippet": "After arriving in an enigmatic location by mistake, and being forced to hide their identities, Geralt and Dandelion find themselves faced with an impossible task."
      }
    },
    {
      "kind": "books#volume",
      "id": "eGraDwAAQBAJ",
      "etag": "PAGlduD9sww",
      "selfLink": "https://www.googleapis.com/books/v1/volumes/eGraDwAAQBAJ",
      "volumeInfo": {
        "title": "The Complete Witcher",
        "subtitle": "The Last Wish, Sword of Destiny, Blood of Elves, Time of Contempt, Baptism of Fire, The Tower of the Swallow, The Lady of the Lake and Seasons of Storms",
        "authors": [
          "Andrzej Sapkowski"
        ],
        "publisher": "Hachette UK",
        "publishedDate": "2020-10-15",
        "description": "Experience the story from start to finish. Get every single book following the exploits of Geralt the Witcher - revered and hated - who holds the line against the monsters plaguing humanity. These eight books are a comprehensive collection of the books that inspired a bestselling video game and the major Netflix series. Geralt of Rivia is a Witcher, a man whose magic powers and lifelong training have made him a brilliant fighter and a merciless assassin. Yet he is no ordinary killer: he hunts the vile fiends that ravage the land and attack the innocent. But not everything monstrous-looking is evil; not everything fair is good . . . and in every fairy tale there is a grain of truth. Read the epic Witcher saga from start to finish with this eBook boxset, which contains all eight books in the ground-breaking series. The Last Wish, Blood of Elves translated by Danusia Stok. Sword of Destiny, Time of Contempt, Baptism of Fire, The Tower of the Swallow, The Lady of the Lake, Season of Storms translated by David French. Andrzej Sapkowski, winner of the World Fantasy Lifetime Achievement award, started an international phenomenon with his Witcher series. The Last Wish is the perfect introduction to this one-of-a-kind fantasy world.",
        "industryIdentifiers": [
          {
            "type": "ISBN_13",
            "identifier": "9781473232488"
          },
          {
            "type": "ISBN_10",
            "identifier": "1473232481"
          }
        ],
        "readingModes": {
          "text": true,
          "image": false
        },
        "pageCount": 2928,
        "printType": "BOOK",
        "categories": [
          "Fiction"
        ],
        "maturityRating": "NOT_MATURE",
        "allowAnonLogging": true,
        "contentVersion": "1.1.1.0.preview.2",
        "panelizationSummary": {
          "containsEpubBubbles": false,
          "containsImageBubbles": false
        },
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=eGraDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=eGraDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        },
        "language": "en",
        "previewLink": "http://books.google.com/books?id=eGraDwAAQBAJ&pg=PT548&dq=witcher&hl=&cd=4&source=gbs_api",
        "infoLink": "http://books.google.com/books?id=eGraDwAAQBAJ&dq=witcher&hl=&source=gbs_api",
        "canonicalVolumeLink": "https://books.google.com/books/about/The_Complete_Witcher.html?hl=&id=eGraDwAAQBAJ"
      },
      "saleInfo": {
        "country": "IL",
        "saleability": "NOT_FOR_SALE",
        "isEbook": false
      },
      "accessInfo": {
        "country": "IL",
        "viewability": "PARTIAL",
        "embeddable": true,
        "publicDomain": false,
        "textToSpeechPermission": "ALLOWED_FOR_ACCESSIBILITY",
        "epub": {
          "isAvailable": true,
          "acsTokenLink": "http://books.google.com/books/download/The_Complete_Witcher-sample-epub.acsm?id=eGraDwAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
        },
        "pdf": {
          "isAvailable": false
        },
        "webReaderLink": "http://play.google.com/books/reader?id=eGraDwAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
        "accessViewStatus": "SAMPLE",
        "quoteSharingAllowed": false
      },
      "searchInfo": {
        "textSnippet": "You delight in the contempt you can show the \u003cb\u003eWitcher\u003c/b\u003e, who is prepared to risk his \u003cbr\u003e\nneck for your money. You should know the \u003cb\u003eWitcher\u003c/b\u003e mocks your contempt and \u003cbr\u003e\nslights, that they do not make the faintest impression on him. He doesn&#39;t even&nbsp;..."
      }
    },
    {
      "kind": "books#volume",
      "id": "Vx7YDwAAQBAJ",
      "etag": "x2dn+Fn+BMw",
      "selfLink": "https://www.googleapis.com/books/v1/volumes/Vx7YDwAAQBAJ",
      "volumeInfo": {
        "title": "Introducing The Witcher",
        "subtitle": "The Last Wish, Sword of Destiny and Blood of Elves",
        "authors": [
          "Andrzej Sapkowski"
        ],
        "publisher": "Hachette UK",
        "publishedDate": "2020-05-14",
        "description": "Introducing Geralt the Witcher - revered and hated - who holds the line against the monsters plaguing humanity in the bestselling series that inspired the Witcher video games and a major Netflix show. Geralt of Rivia is a Witcher, a man whose magic powers and lifelong training have made him a brilliant fighter and a merciless assassin. Yet he is no ordinary killer: he hunts the vile fiends that ravage the land and attack the innocent. But not everything monstrous-looking is evil; not everything fair is good . . . and in every fairy tale there is a grain of truth. Start the epic journey now with this eBook boxset, containing the very first stories set in the witcher world, plus the opening novel to Andrzej Sapkowski's groundbreaking series. Translated by Danusia Stok. Andrzej Sapkowski, winner of the World Fantasy Lifetime Achievement award, started an international phenomenon with his Witcher series. The Last Wish is the perfect introduction to this one-of-a-kind fantasy world.",
        "industryIdentifiers": [
          {
            "type": "ISBN_13",
            "identifier": "9781473232426"
          },
          {
            "type": "ISBN_10",
            "identifier": "1473232422"
          }
        ],
        "readingModes": {
          "text": true,
          "image": false
        },
        "pageCount": 1008,
        "printType": "BOOK",
        "categories": [
          "Fiction"
        ],
        "maturityRating": "NOT_MATURE",
        "allowAnonLogging": true,
        "contentVersion": "1.1.1.0.preview.2",
        "panelizationSummary": {
          "containsEpubBubbles": false,
          "containsImageBubbles": false
        },
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=Vx7YDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=Vx7YDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        },
        "language": "en",
        "previewLink": "http://books.google.com/books?id=Vx7YDwAAQBAJ&pg=PT483&dq=witcher&hl=&cd=5&source=gbs_api",
        "infoLink": "http://books.google.com/books?id=Vx7YDwAAQBAJ&dq=witcher&hl=&source=gbs_api",
        "canonicalVolumeLink": "https://books.google.com/books/about/Introducing_The_Witcher.html?hl=&id=Vx7YDwAAQBAJ"
      },
      "saleInfo": {
        "country": "IL",
        "saleability": "NOT_FOR_SALE",
        "isEbook": false
      },
      "accessInfo": {
        "country": "IL",
        "viewability": "PARTIAL",
        "embeddable": true,
        "publicDomain": false,
        "textToSpeechPermission": "ALLOWED_FOR_ACCESSIBILITY",
        "epub": {
          "isAvailable": true,
          "acsTokenLink": "http://books.google.com/books/download/Introducing_The_Witcher-sample-epub.acsm?id=Vx7YDwAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
        },
        "pdf": {
          "isAvailable": false
        },
        "webReaderLink": "http://play.google.com/books/reader?id=Vx7YDwAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
        "accessViewStatus": "SAMPLE",
        "quoteSharingAllowed": false
      },
      "searchInfo": {
        "textSnippet": "You delight in the contempt you can show the \u003cb\u003eWitcher\u003c/b\u003e, who is prepared to risk his \u003cbr\u003e\nneck for your money. You should know the \u003cb\u003eWitcher\u003c/b\u003e mocks your contempt and \u003cbr\u003e\nslights, that they do not make the faintest impression on him. He doesn&#39;t even&nbsp;..."
      }
    },
    {
      "kind": "books#volume",
      "id": "AcJyDwAAQBAJ",
      "etag": "Jb1hEhxbzuY",
      "selfLink": "https://www.googleapis.com/books/v1/volumes/AcJyDwAAQBAJ",
      "volumeInfo": {
        "title": "The Witcher Library Edition Volume 1",
        "authors": [
          "Paul Tobin"
        ],
        "publishedDate": "2018",
        "description": "\"The Witcher game is based on a novel of Andrzej Sapkowski.\"",
        "industryIdentifiers": [
          {
            "type": "ISBN_13",
            "identifier": "9781506706825"
          },
          {
            "type": "ISBN_10",
            "identifier": "1506706827"
          }
        ],
        "readingModes": {
          "text": false,
          "image": true
        },
        "pageCount": 440,
        "printType": "BOOK",
        "categories": [
          "COMICS & GRAPHIC NOVELS"
        ],
        "maturityRating": "NOT_MATURE",
        "allowAnonLogging": false,
        "contentVersion": "preview-1.0.0",
        "panelizationSummary": {
          "containsEpubBubbles": false,
          "containsImageBubbles": true,
          "imageBubbleVersion": "32e821684680ba91_A"
        },
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=AcJyDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=AcJyDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        },
        "language": "en",
        "previewLink": "http://books.google.com/books?id=AcJyDwAAQBAJ&pg=PA4&dq=witcher&hl=&cd=6&source=gbs_api",
        "infoLink": "http://books.google.com/books?id=AcJyDwAAQBAJ&dq=witcher&hl=&source=gbs_api",
        "canonicalVolumeLink": "https://books.google.com/books/about/The_Witcher_Library_Edition_Volume_1.html?hl=&id=AcJyDwAAQBAJ"
      },
      "saleInfo": {
        "country": "IL",
        "saleability": "NOT_FOR_SALE",
        "isEbook": false
      },
      "accessInfo": {
        "country": "IL",
        "viewability": "PARTIAL",
        "embeddable": true,
        "publicDomain": false,
        "textToSpeechPermission": "ALLOWED",
        "epub": {
          "isAvailable": false
        },
        "pdf": {
          "isAvailable": false
        },
        "webReaderLink": "http://play.google.com/books/reader?id=AcJyDwAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
        "accessViewStatus": "SAMPLE",
        "quoteSharingAllowed": false
      },
      "searchInfo": {
        "textSnippet": "The \u003cb\u003eWitcher\u003c/b\u003e game is based on a novel of Andrzej Sapkowski THE \u003cb\u003eWITCHER\u003c/b\u003e: \u003cbr\u003e\nLIBRARY EDITION WOLUME ONE THE \u003cb\u003eWITCHER\u003c/b\u003e&quot; is a trademark of CD Projekt \u003cbr\u003e\nS.A. The \u003cb\u003eWitcher\u003c/b\u003e game Ø2014, 2015, 2017, 2018 CD Projekt S.A. Alrights \u003cbr\u003e\nreserved."
      }
    },
    {
      "kind": "books#volume",
      "id": "_o7iCgAAQBAJ",
      "etag": "06mEg2cQuy0",
      "selfLink": "https://www.googleapis.com/books/v1/volumes/_o7iCgAAQBAJ",
      "volumeInfo": {
        "title": "The Witcher - Strategy Guide",
        "authors": [
          "GamerGuides.com"
        ],
        "publisher": "Gamer Guides",
        "publishedDate": "2015-11-07",
        "description": "You are Geralt of Rivia, a professional monster-hunter known as a Witcher. Or at least you were. Mysteriously back from the dead and haunted by the King of the Wild Hunt, you have no memories of your previous life. While wintering at the weathered fortress of Kaer Morhen with friends from your forgotten former life, you come under attack by a mysterious organization, after which you set out on a quest for revenge. Along the way you'll reunite with old, unremembered friends and get swept up in a power struggle between diametrically opposed factions. The guide offers the following: - \"The Witchers Three\" covers all the moral choices in The Witcher. - A full walkthrough that's more than just a listing of quests - it's an \"ideal chronological order\". - A detailed conclusion discussing the ending of the game. - Notes on how your choices in The Witcher will carry over to The Witcher 2. - All the side quests in the game, including free-form quests, notice board quests, trophy hunts. - Information on how to become the best fist-fighter and Dice Poker player in the land. - Character creation information, including the best places to grind, how to spend your talents and much more. - Information on how to obtain all the Sex Cards in the game, you frisky person, you! - All the potion, oil, and bomb fomulae in the game.",
        "industryIdentifiers": [
          {
            "type": "ISBN_13",
            "identifier": "9781631024023"
          },
          {
            "type": "ISBN_10",
            "identifier": "1631024027"
          }
        ],
        "readingModes": {
          "text": true,
          "image": true
        },
        "printType": "BOOK",
        "categories": [
          "Games"
        ],
        "maturityRating": "NOT_MATURE",
        "allowAnonLogging": true,
        "contentVersion": "2.3.4.0.preview.3",
        "panelizationSummary": {
          "containsEpubBubbles": false,
          "containsImageBubbles": false
        },
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=_o7iCgAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=_o7iCgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        },
        "language": "en",
        "previewLink": "http://books.google.com/books?id=_o7iCgAAQBAJ&pg=PT47&dq=witcher&hl=&cd=7&source=gbs_api",
        "infoLink": "http://books.google.com/books?id=_o7iCgAAQBAJ&dq=witcher&hl=&source=gbs_api",
        "canonicalVolumeLink": "https://books.google.com/books/about/The_Witcher_Strategy_Guide.html?hl=&id=_o7iCgAAQBAJ"
      },
      "saleInfo": {
        "country": "IL",
        "saleability": "NOT_FOR_SALE",
        "isEbook": false
      },
      "accessInfo": {
        "country": "IL",
        "viewability": "PARTIAL",
        "embeddable": true,
        "publicDomain": false,
        "textToSpeechPermission": "ALLOWED",
        "epub": {
          "isAvailable": true,
          "acsTokenLink": "http://books.google.com/books/download/The_Witcher_Strategy_Guide-sample-epub.acsm?id=_o7iCgAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
        },
        "pdf": {
          "isAvailable": true,
          "acsTokenLink": "http://books.google.com/books/download/The_Witcher_Strategy_Guide-sample-pdf.acsm?id=_o7iCgAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
        },
        "webReaderLink": "http://play.google.com/books/reader?id=_o7iCgAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
        "accessViewStatus": "SAMPLE",
        "quoteSharingAllowed": false
      },
      "searchInfo": {
        "textSnippet": "Level Bronze Talents Silver Talents Gold Talents Title 1-10 3 0 0 Novitate \u003cb\u003eWitcher\u003c/b\u003e \u003cbr\u003e\n11- 14 3 0 0 Rising \u003cb\u003eWitcher\u003c/b\u003e 15- 19 3 1 0 Rising \u003cb\u003eWitcher\u003c/b\u003e 20- 29 2 2 0 Skilled \u003cbr\u003e\n\u003cb\u003eWitcher\u003c/b\u003e 30- 39 1 2 1 Seasoned \u003cb\u003eWitcher\u003c/b\u003e 40- 44 1 3 1 Master \u003cb\u003eWitcher\u003c/b\u003e 45- 48 0 4 1\u003cbr\u003e\n&nbsp;..."
      }
    },
    {
      "kind": "books#volume",
      "id": "RVCCDwAAQBAJ",
      "etag": "V6hPhH+Tqls",
      "selfLink": "https://www.googleapis.com/books/v1/volumes/RVCCDwAAQBAJ",
      "volumeInfo": {
        "title": "The Witcher: Of Flesh and Flame #3",
        "authors": [
          "Aleksandra Motyka"
        ],
        "publisher": "Dark Horse Comics (Single Issues)",
        "publishedDate": "2019-02-20",
        "description": "Features fan-favorite characters Geralt and Dandelion! Another mysterious incident looms heavy over Ofier, threatening the king. To help combat it, Geralt works side by side with Radeyah to pro- cure and construct weapons strong enough to defeat the dark force. However, there are more nemeses than Geralt quite realizes, and a confrontation in which he believes himself to be helping only leads to more trouble for the witcher.",
        "industryIdentifiers": [
          {
            "type": "OTHER",
            "identifier": "PKEY:3004197"
          }
        ],
        "readingModes": {
          "text": false,
          "image": true
        },
        "pageCount": 32,
        "printType": "BOOK",
        "categories": [
          "Comics & Graphic Novels"
        ],
        "maturityRating": "NOT_MATURE",
        "allowAnonLogging": true,
        "contentVersion": "1.1.1.0.preview.1",
        "panelizationSummary": {
          "containsEpubBubbles": false,
          "containsImageBubbles": false
        },
        "comicsContent": true,
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=RVCCDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=RVCCDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        },
        "language": "en",
        "previewLink": "http://books.google.com/books?id=RVCCDwAAQBAJ&printsec=frontcover&dq=witcher&hl=&cd=8&source=gbs_api",
        "infoLink": "http://books.google.com/books?id=RVCCDwAAQBAJ&dq=witcher&hl=&source=gbs_api",
        "canonicalVolumeLink": "https://books.google.com/books/about/The_Witcher_Of_Flesh_and_Flame_3.html?hl=&id=RVCCDwAAQBAJ"
      },
      "saleInfo": {
        "country": "IL",
        "saleability": "NOT_FOR_SALE",
        "isEbook": false
      },
      "accessInfo": {
        "country": "IL",
        "viewability": "PARTIAL",
        "embeddable": true,
        "publicDomain": false,
        "textToSpeechPermission": "ALLOWED",
        "epub": {
          "isAvailable": false
        },
        "pdf": {
          "isAvailable": true,
          "acsTokenLink": "http://books.google.com/books/download/The_Witcher_Of_Flesh_and_Flame_3-sample-pdf.acsm?id=RVCCDwAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
        },
        "webReaderLink": "http://play.google.com/books/reader?id=RVCCDwAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
        "accessViewStatus": "SAMPLE",
        "quoteSharingAllowed": false
      },
      "searchInfo": {
        "textSnippet": "Features fan-favorite characters Geralt and Dandelion!"
      }
    },
    {
      "kind": "books#volume",
      "id": "VBQDEAAAQBAJ",
      "etag": "tANo9WM+oyI",
      "selfLink": "https://www.googleapis.com/books/v1/volumes/VBQDEAAAQBAJ",
      "volumeInfo": {
        "title": "The Witcher: Fading Memories #1",
        "authors": [
          "Bartosz Sztybor"
        ],
        "publisher": "Dark Horse Comics (Single Issues)",
        "publishedDate": "2020-11-25",
        "description": "Geralt has become impoverished and dejected since monster threats have seemingly vanished. Times have always been hard for Witchers--but without continual work, his situation has worsened. As Geralt explores new possibilities for his life path, he receives a request from the Mayor of Towitz, a small town where children are being kidnapped by Foglets . . . but something feels off about this new threat. Explore the world of The Witcher beyond the games! A brand-new series featuring the game's iconic protagonist, Geralt! Now a Netflix original series!",
        "industryIdentifiers": [
          {
            "type": "OTHER",
            "identifier": "PKEY:3006177"
          }
        ],
        "readingModes": {
          "text": false,
          "image": false
        },
        "pageCount": 32,
        "printType": "BOOK",
        "categories": [
          "Comics & Graphic Novels"
        ],
        "maturityRating": "NOT_MATURE",
        "allowAnonLogging": false,
        "contentVersion": "1.1.1.0.preview.0",
        "panelizationSummary": {
          "containsEpubBubbles": false,
          "containsImageBubbles": true,
          "imageBubbleVersion": "722af3116b6f0ef2_A"
        },
        "comicsContent": true,
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=VBQDEAAAQBAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=VBQDEAAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
        },
        "language": "en",
        "previewLink": "http://books.google.com/books?id=VBQDEAAAQBAJ&dq=witcher&hl=&cd=9&source=gbs_api",
        "infoLink": "http://books.google.com/books?id=VBQDEAAAQBAJ&dq=witcher&hl=&source=gbs_api",
        "canonicalVolumeLink": "https://books.google.com/books/about/The_Witcher_Fading_Memories_1.html?hl=&id=VBQDEAAAQBAJ",
        "seriesInfo": {
          "kind": "books#volume_series_info",
          "bookDisplayNumber": "1",
          "volumeSeries": [
            {
              "seriesId": "MvErGwAAABAY6M",
              "seriesBookType": "ISSUE",
              "orderNumber": 1
            }
          ]
        }
      },
      "saleInfo": {
        "country": "IL",
        "saleability": "NOT_FOR_SALE",
        "isEbook": false
      },
      "accessInfo": {
        "country": "IL",
        "viewability": "NO_PAGES",
        "embeddable": false,
        "publicDomain": false,
        "textToSpeechPermission": "ALLOWED",
        "epub": {
          "isAvailable": false
        },
        "pdf": {
          "isAvailable": true
        },
        "webReaderLink": "http://play.google.com/books/reader?id=VBQDEAAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
        "accessViewStatus": "NONE",
        "quoteSharingAllowed": false
      },
      "searchInfo": {
        "textSnippet": "Geralt has become impoverished and dejected since monster threats have seemingly vanished."
      }
    },
    {
      "kind": "books#volume",
      "id": "zNlzDwAAQBAJ",
      "etag": "ShmW/+TOM68",
      "selfLink": "https://www.googleapis.com/books/v1/volumes/zNlzDwAAQBAJ",
      "volumeInfo": {
        "title": "Witcher: Of Flesh and Flame #1",
        "authors": [
          "Aleksandra Motyka"
        ],
        "publisher": "Dark Horse Comics (Single Issues)",
        "publishedDate": "2018-12-19",
        "description": "Geralt is summoned by an old friend to help solve a mystery involving his daughter. Upon arriving to investigate however, Geralt is surprised by another friend from the past and he soon finds himself transported to regions beyond his original expectations. A new series featuring fan-favorite characters, including Geralt and Dandelion! The first issue of a new miniseries, the perfect jumping-on point!",
        "industryIdentifiers": [
          {
            "type": "OTHER",
            "identifier": "PKEY:3004195"
          }
        ],
        "readingModes": {
          "text": false,
          "image": true
        },
        "pageCount": 32,
        "printType": "BOOK",
        "categories": [
          "Comics & Graphic Novels"
        ],
        "maturityRating": "NOT_MATURE",
        "allowAnonLogging": true,
        "contentVersion": "1.1.1.0.preview.1",
        "panelizationSummary": {
          "containsEpubBubbles": false,
          "containsImageBubbles": false
        },
        "comicsContent": true,
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=zNlzDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=zNlzDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        },
        "language": "en",
        "previewLink": "http://books.google.com/books?id=zNlzDwAAQBAJ&printsec=frontcover&dq=witcher&hl=&cd=10&source=gbs_api",
        "infoLink": "http://books.google.com/books?id=zNlzDwAAQBAJ&dq=witcher&hl=&source=gbs_api",
        "canonicalVolumeLink": "https://books.google.com/books/about/Witcher_Of_Flesh_and_Flame_1.html?hl=&id=zNlzDwAAQBAJ",
        "seriesInfo": {
          "kind": "books#volume_series_info",
          "bookDisplayNumber": "1",
          "volumeSeries": [
            {
              "seriesId": "mdkgGwAAABC4wM",
              "seriesBookType": "ISSUE",
              "orderNumber": 1
            }
          ]
        }
      },
      "saleInfo": {
        "country": "IL",
        "saleability": "NOT_FOR_SALE",
        "isEbook": false
      },
      "accessInfo": {
        "country": "IL",
        "viewability": "PARTIAL",
        "embeddable": true,
        "publicDomain": false,
        "textToSpeechPermission": "ALLOWED",
        "epub": {
          "isAvailable": false
        },
        "pdf": {
          "isAvailable": true,
          "acsTokenLink": "http://books.google.com/books/download/Witcher_Of_Flesh_and_Flame_1-sample-pdf.acsm?id=zNlzDwAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
        },
        "webReaderLink": "http://play.google.com/books/reader?id=zNlzDwAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
        "accessViewStatus": "SAMPLE",
        "quoteSharingAllowed": false
      },
      "searchInfo": {
        "textSnippet": "Geralt is summoned by an old friend to help solve a mystery involving his daughter."
      }
    }
  ]
  if (storageService.loadFromStorage('books')) return storageService.loadFromStorage('books')
  else {
    storageService.saveToStorage('books', books)
    return books
  }
}

async function searchBooks(filterBy = 'witcher') {
  let books
  books = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${filterBy}&maxResults=6&key=AIzaSyAXsefBbuz_jTbmr1vlxg7VvDh5bYEg7nA`)
  books = await books.json()
  return books.items
}

function getById(bookId) {
  const books = storageService.loadFromStorage('books')
  const book = books.find(book => {
    if (book.id === bookId) return book
  });
  return book
}

function saveBook(book) {
  const books = storageService.loadFromStorage('books')
  books.unshift(book)
  storageService.saveToStorage('books', books)
  return books
}
async function addReview(bookId, review) {
  let books = storageService.loadFromStorage('books')
  review.id = _makeid()
  let bookReviewed;

  books = books.map(book => {
    if (book.id === bookId) {
      if (book.reviews) {
        book.reviews = [
          review,
          ...book.reviews
        ]
      } else {
        book.reviews = [
          review
        ]
      }
      bookReviewed = { ...book };
    }
    return book
  })
  storageService.saveToStorage('books', books)
  return { bookReviewed, books }
}
function _makeid(length = 10) {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }

  return text;
}
