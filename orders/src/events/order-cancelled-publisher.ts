import { Publisher, OrderCancelledEvent, Subjects } from "@raretickets/common";

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  readonly subject = Subjects.OrderCancelled;
}