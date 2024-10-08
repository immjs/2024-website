import { NextResponse } from "next/server";
import { pingHandler } from "./ping/index";
import { appCommandsHandler } from "./appCommands";
import { modalSubmitHandler } from "./modalSubmit/modal_submit";
import { messageComponentHandler } from "./messageComponent/modal_submit";

function defaultHandler() {
  return new NextResponse("Command type not implemented", { status: 501 });
}

export const handlers = [
  pingHandler,
  appCommandsHandler,
  messageComponentHandler,
  defaultHandler,
  modalSubmitHandler,
];
