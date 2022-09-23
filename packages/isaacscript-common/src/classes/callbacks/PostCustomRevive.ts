import { IsaacScriptCommonFeature2 } from "../../enums/IsaacScriptCommonFeature2";
import { ModCallbackCustom2 } from "../../enums/ModCallbackCustom2";
import { CustomCallbackRevive } from "./validation/CustomCallbackRevive";

export class PostCustomRevive extends CustomCallbackRevive<ModCallbackCustom2.POST_CUSTOM_REVIVE> {
  constructor() {
    super();

    this.featuresUsed = [IsaacScriptCommonFeature2.CUSTOM_REVIVE];
  }
}