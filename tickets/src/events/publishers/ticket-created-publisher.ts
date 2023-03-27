import { Publisher, Subjects, TicketCreatedEvent  } from "@raretickets/common";

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated;
}

