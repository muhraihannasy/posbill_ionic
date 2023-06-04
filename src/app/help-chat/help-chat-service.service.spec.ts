import { TestBed } from "@angular/core/testing";

import { HelpChatService } from "./help-chat.service";

describe("HelpChatServiceService", () => {
  let service: HelpChatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HelpChatService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
