import {
  Subjects,
  Publisher,
  ExpirationCompleteEvent,
} from "@raretickets/common";

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  readonly subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}
