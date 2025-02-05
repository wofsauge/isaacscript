import { ModCallback } from "isaac-typescript-definitions";
import { Feature } from "../../../private/Feature";
import { defaultEntityDisplayCallback, renderTextOnEntity } from "./utils";

export class DebugDisplayFamiliar extends Feature {
  public textCallback: (familiar: EntityFamiliar) => string =
    defaultEntityDisplayCallback;

  constructor() {
    super();

    this.callbacksUsed = [
      // 25
      [ModCallback.POST_FAMILIAR_RENDER, this.postFamiliarRender],
    ];
  }

  // ModCallback.POST_FAMILIAR_RENDER (25)
  private postFamiliarRender = (familiar: EntityFamiliar) => {
    const text = this.textCallback(familiar);
    renderTextOnEntity(familiar, text);
  };
}
