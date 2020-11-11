import storageService from "./storageService";

export const bookService = {
  query,
  getById,
  searchBooks,
  saveBook,
  addReview,
  // getBooks
  // addUser,
  // removeUser
};


async function query() {
  const books = [

    {
      "kind": "books#volume",
      "id": "Ir_nYbAy7PEC",
      "etag": "nEeWJY/E8ec",
      "selfLink": "https://www.googleapis.com/books/v1/volumes/Ir_nYbAy7PEC",
      "volumeInfo": {
        "title": "Liam Knows What To Do When Kids Act Snitty",
        "subtitle": "Coping When Friends are Tactless",
        "authors": [
          "Jane Whelen-Banks"
        ],
        "publisher": "Jessica Kingsley Publishers",
        "publishedDate": "2008-11-15",
        "description": "Liam is a very talented boy. He can do lots of neat things, like tricks, tumbles and freaky faces. One day, Liam decided to impress his friend Sarah with a super-duper somersault on the couch. Sara said: 'So?' In Liam Knows What to do When Kids Act Snitty, lovable Liam finds out why his amazing feats of greatness are sometimes met with snide or snitty responses. He learns that when kids are snitty, it does not mean they don't like you, or that your tricks are boring, but that they haven't yet learnt how to be gracious and polite. Vibrant, colourful and lively, this book's positive messages and advice are ideal for young children wanting to understand social situations or how friendships work.",
        "industryIdentifiers": [
          {
            "type": "ISBN_10",
            "identifier": "1846428726"
          },
          {
            "type": "ISBN_13",
            "identifier": "9781846428722"
          }
        ],
        "readingModes": {
          "text": true,
          "image": true
        },
        "pageCount": 32,
        "printType": "BOOK",
        "categories": [
          "Psychology"
        ],
        "maturityRating": "NOT_MATURE",
        "allowAnonLogging": false,
        "contentVersion": "3.7.6.0.preview.3",
        "panelizationSummary": {
          "containsEpubBubbles": false,
          "containsImageBubbles": false
        },
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=Ir_nYbAy7PEC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=Ir_nYbAy7PEC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        },
        "language": "en",
        "previewLink": "http://books.google.com/books?id=Ir_nYbAy7PEC&pg=PA5&dq=liam&hl=&cd=1&source=gbs_api",
        "infoLink": "http://books.google.com/books?id=Ir_nYbAy7PEC&dq=liam&hl=&source=gbs_api",
        "canonicalVolumeLink": "https://books.google.com/books/about/Liam_Knows_What_To_Do_When_Kids_Act_Snit.html?hl=&id=Ir_nYbAy7PEC"
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
          "acsTokenLink": "http://books.google.com/books/download/Liam_Knows_What_To_Do_When_Kids_Act_Snit-sample-epub.acsm?id=Ir_nYbAy7PEC&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
        },
        "pdf": {
          "isAvailable": true,
          "acsTokenLink": "http://books.google.com/books/download/Liam_Knows_What_To_Do_When_Kids_Act_Snit-sample-pdf.acsm?id=Ir_nYbAy7PEC&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
        },
        "webReaderLink": "http://play.google.com/books/reader?id=Ir_nYbAy7PEC&hl=&printsec=frontcover&source=gbs_api",
        "accessViewStatus": "SAMPLE",
        "quoteSharingAllowed": false
      },
      "searchInfo": {
        "textSnippet": "In \u003cb\u003eLiam\u003c/b\u003e Knows What To Do When Kids Act Snitty, \u003cb\u003eLiam\u003c/b\u003e eagerly anticipates an \u003cbr\u003e\napplause for his amazing feats, but instead is met with snide and standoffish \u003cbr\u003e\nresponses, often typical of young children. \u003cb\u003eLiam\u003c/b\u003e is perplexed and offended by the\u003cbr\u003e\n&nbsp;..."
      }
    },
    {
      "kind": "books#volume",
      "id": "vpu31pgFkqMC",
      "etag": "Yskec8LJHrw",
      "selfLink": "https://www.googleapis.com/books/v1/volumes/vpu31pgFkqMC",
      "volumeInfo": {
        "title": "Liam Goes Poo in the Toilet",
        "subtitle": "A Story about Trouble with Toilet Training",
        "authors": [
          "Jane Whelen-Banks"
        ],
        "publisher": "Jessica Kingsley Publishers",
        "publishedDate": "2008-11-15",
        "description": "'This is Liam. Every day Liam eats lots of good food. Each time Liam eats, his tummy gets fuller and fuller... and fuller... until Liam's tummy starts to stretch' Successful toilet training is a time of celebration for both parents and child. It marks the end of dirty diapers and a forward step in the development of a child. Fraught with both stress and triumph, the period of toilet training can take from days to months. For a typical child, learning to gain control over the body's internal stimuli can be at best challenging. For many children, however, these internal cues can be overwhelming and confusing, leading to both a frustrating and traumatic toileting experience. Liam Goes Poo in the Toilet illustrates the relationship between eating and excreting. It provides visual instructions on how to 'relax and push'. After much fanfare, Liam finally masters going `poo' in the toilet, and both he and Mum bask in the glory of a job well done.",
        "industryIdentifiers": [
          {
            "type": "ISBN_10",
            "identifier": "1846428742"
          },
          {
            "type": "ISBN_13",
            "identifier": "9781846428746"
          }
        ],
        "readingModes": {
          "text": true,
          "image": true
        },
        "pageCount": 32,
        "printType": "BOOK",
        "categories": [
          "Psychology"
        ],
        "averageRating": 3.5,
        "ratingsCount": 3,
        "maturityRating": "NOT_MATURE",
        "allowAnonLogging": true,
        "contentVersion": "2.7.7.0.preview.3",
        "panelizationSummary": {
          "containsEpubBubbles": false,
          "containsImageBubbles": false
        },
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=vpu31pgFkqMC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=vpu31pgFkqMC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        },
        "language": "en",
        "previewLink": "http://books.google.com/books?id=vpu31pgFkqMC&pg=PA1&dq=liam&hl=&cd=2&source=gbs_api",
        "infoLink": "http://books.google.com/books?id=vpu31pgFkqMC&dq=liam&hl=&source=gbs_api",
        "canonicalVolumeLink": "https://books.google.com/books/about/Liam_Goes_Poo_in_the_Toilet.html?hl=&id=vpu31pgFkqMC"
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
          "acsTokenLink": "http://books.google.com/books/download/Liam_Goes_Poo_in_the_Toilet-sample-epub.acsm?id=vpu31pgFkqMC&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
        },
        "pdf": {
          "isAvailable": true,
          "acsTokenLink": "http://books.google.com/books/download/Liam_Goes_Poo_in_the_Toilet-sample-pdf.acsm?id=vpu31pgFkqMC&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
        },
        "webReaderLink": "http://play.google.com/books/reader?id=vpu31pgFkqMC&hl=&printsec=frontcover&source=gbs_api",
        "accessViewStatus": "SAMPLE",
        "quoteSharingAllowed": false
      },
      "searchInfo": {
        "textSnippet": "\u003cb\u003eLiam\u003c/b\u003e Goes Poo in the Toilet A Story about Trouble with Toilet Training Jane \u003cbr\u003e\nWhelen Banks Jessica Kingsley Publishers London and Philadelphia First \u003cbr\u003e\npublished in 2009 byJessica Kingsley Publishers 116 Pentonville Road. \u003cb\u003eLiam\u003c/b\u003e \u003cbr\u003e\nGoes Poo in&nbsp;..."
      }
    },
    {
      "kind": "books#volume",
      "id": "ummLDwAAQBAJ",
      "etag": "aCXQwA36HlU",
      "selfLink": "https://www.googleapis.com/books/v1/volumes/ummLDwAAQBAJ",
      "volumeInfo": {
        "title": "Saving Liam",
        "authors": [
          "Sasha L. Miller"
        ],
        "publisher": "Less Than Three Press, LLC",
        "description": "Leyton lives a quiet, simple life as a prosperous, thriving merchant alongside his twin brother Liam. But that life is shattered when Liam goes missing, and Leyton is told that the only way to save his brother's life is to seduce a king. The task proves to be even more difficult than he feared, not least of all because he finds himself falling for the sad, lonely king he's been sent to manipulate. But it's not long before he's caught, snarled in a deadly tangle of political intrigue and betrayal. And once the traitors are caught and his brother rescued, Leyton must return to face his own execution...",
        "industryIdentifiers": [
          {
            "type": "ISBN_13",
            "identifier": "9781620044186"
          },
          {
            "type": "ISBN_10",
            "identifier": "1620044188"
          }
        ],
        "readingModes": {
          "text": true,
          "image": true
        },
        "pageCount": 415,
        "printType": "BOOK",
        "categories": [
          "Fiction"
        ],
        "averageRating": 5,
        "ratingsCount": 1,
        "maturityRating": "MATURE",
        "allowAnonLogging": true,
        "contentVersion": "1.1.1.0.preview.3",
        "panelizationSummary": {
          "containsEpubBubbles": false,
          "containsImageBubbles": false
        },
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=ummLDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=ummLDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        },
        "language": "en",
        "previewLink": "http://books.google.com/books?id=ummLDwAAQBAJ&pg=PA67&dq=liam&hl=&cd=3&source=gbs_api",
        "infoLink": "http://books.google.com/books?id=ummLDwAAQBAJ&dq=liam&hl=&source=gbs_api",
        "canonicalVolumeLink": "https://books.google.com/books/about/Saving_Liam.html?hl=&id=ummLDwAAQBAJ"
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
          "isAvailable": true
        },
        "pdf": {
          "isAvailable": true
        },
        "webReaderLink": "http://play.google.com/books/reader?id=ummLDwAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
        "accessViewStatus": "SAMPLE",
        "quoteSharingAllowed": false
      },
      "searchInfo": {
        "textSnippet": "&quot;Hi,&quot; \u003cb\u003eLiam\u003c/b\u003e said, sidling up to the bar. He looked much worse for the wear up close\u003cbr\u003e\n. He set a hand on Shakil&#39;s arm, smiling flirtatiously at him as tendrils of \u003cbr\u003e\nenchantment tried to hook into him. Shakil&#39;s eyebrows rose—he hadn&#39;t had to \u003cbr\u003e\nplay along&nbsp;..."
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
// function addUser(user) {
//   gUsers = [
//     {
//       name: user.name,
//       id: "u4"
//     },
//     ...gUsers
//   ];
//   return gUsers;
// }

// function removeUser(userId) {
//   gUsers = gUsers.filter(user => userId !== user.id);
//   return gUsers;
// }
