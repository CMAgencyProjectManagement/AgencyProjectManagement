interface Notification {
  content: Sentence,
  isRead: boolean
}

interface Sentence {
  subject: SentenceComponent,
  verb,
  primaryObject: SentenceComponent,
  objectLinker,
  secondaryObject: SentenceComponent,
  location: SentenceComponent,
  time
}

interface SentenceComponent {
  type: string,
  id: number,
  content: string,
  url: string
}

export {
  Notification,
  Sentence,
  SentenceComponent
}
