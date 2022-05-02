import { customReviveCallbacksInit } from "./callbacks/customRevive";
import { itemPickupCallbacksInit } from "./callbacks/itemPickup";
import { postBombInitLateCallbackInit } from "./callbacks/postBombInitLate";
import { postBoneSwingCallbackInit } from "./callbacks/postBoneSwing";
import { postCollectibleInitFirstCallbackInit } from "./callbacks/postCollectibleInitFirst";
import { postCursedTeleportCallbackInit } from "./callbacks/postCursedTeleport";
import { postCustomDoorEnterCallbackInit } from "./callbacks/postCustomDoorEnter";
import { postEffectInitLateCallbackInit } from "./callbacks/postEffectInitLate";
import { postEffectStateChangedCallbackInit } from "./callbacks/postEffectStateChanged";
import { postEsauJrCallbacksInit } from "./callbacks/postEsauJr";
import { postFamiliarInitLateCallbackInit } from "./callbacks/postFamiliarInitLate";
import { postFamiliarStateChangedCallbackInit } from "./callbacks/postFamiliarStateChanged";
import { postFlipCallbacksInit } from "./callbacks/postFlip";
import { postGreedModeWaveCallbackInit } from "./callbacks/postGreedModeWave";
import { postGridEntityCallbacksInit } from "./callbacks/postGridEntity";
import { postGridEntityCollisionInit } from "./callbacks/postGridEntityCollision";
import { postHolyMantleRemovedCallbackInit } from "./callbacks/postHolyMantleRemoved";
import { postItemDischargeCallbackInit } from "./callbacks/postItemDischarged";
import { postKnifeInitLateCallbackInit } from "./callbacks/postKnifeInitLate";
import { postLaserInitLateCallbackInit } from "./callbacks/postLaserInitLate";
import { postNPCInitLateCallbackInit } from "./callbacks/postNPCInitLate";
import { postNPCStateChangedCallbackInit } from "./callbacks/postNPCStateChanged";
import { postPickupCollectCallbackInit } from "./callbacks/postPickupCollect";
import { postPickupInitLateCallbackInit } from "./callbacks/postPickupInitLate";
import { postPickupStateChangedCallbackInit } from "./callbacks/postPickupStateChanged";
import { postPlayerChangeHealthCallbackInit } from "./callbacks/postPlayerChangeHealth";
import { postPlayerChangeTypeCallbackInit } from "./callbacks/postPlayerChangeType";
import { postPlayerFatalDamageCallbackInit } from "./callbacks/postPlayerFatalDamage";
import { postPlayerInitLateCallbackInit } from "./callbacks/postPlayerInitLate";
import { postPlayerReorderedCallbacksInit } from "./callbacks/postPlayerReordered";
import { postProjectileInitLateCallbackInit } from "./callbacks/postProjectileInitLate";
import { postPurchaseCallbackInit } from "./callbacks/postPurchase";
import { postRoomClearChangedCallbackInit } from "./callbacks/postRoomClearChanged";
import { postSacrificeCallbackInit } from "./callbacks/postSacrifice";
import { postSlotInitUpdateCallbacksInit } from "./callbacks/postSlotInitUpdate";
import { postSlotRenderCallbacksInit } from "./callbacks/postSlotRender";
import { postTearInitLateCallbackInit } from "./callbacks/postTearInitLate";
import { postTearInitVeryLateCallbackInit } from "./callbacks/postTearInitVeryLate";
import { postTransformationCallbackInit } from "./callbacks/postTransformation";
import { postTrinketBreakCallbackInit } from "./callbacks/postTrinketBreak";
import { preBerserkDeathCallbackInit } from "./callbacks/preBerserkDeath";
import { preNewLevelCallbackInit } from "./callbacks/preNewLevel";
import { reorderedCallbacksInit } from "./callbacks/reorderedCallbacks";
import { ModUpgraded } from "./classes/ModUpgraded";

export function initCustomCallbacks(mod: ModUpgraded): void {
  customReviveCallbacksInit(mod);
  itemPickupCallbacksInit(mod);
  postBombInitLateCallbackInit(mod);
  postBoneSwingCallbackInit(mod);
  postCollectibleInitFirstCallbackInit(mod);
  postCursedTeleportCallbackInit(mod);
  postCustomDoorEnterCallbackInit();
  postEffectInitLateCallbackInit(mod);
  postEffectStateChangedCallbackInit(mod);
  postEsauJrCallbacksInit(mod);
  postFamiliarInitLateCallbackInit(mod);
  postFamiliarStateChangedCallbackInit(mod);
  postFlipCallbacksInit(mod);
  postGreedModeWaveCallbackInit(mod);
  postGridEntityCallbacksInit(mod);
  postGridEntityCollisionInit(mod);
  postHolyMantleRemovedCallbackInit(mod);
  postItemDischargeCallbackInit(mod);
  postLaserInitLateCallbackInit(mod);
  postKnifeInitLateCallbackInit(mod);
  postNPCInitLateCallbackInit(mod);
  postNPCStateChangedCallbackInit(mod);
  postPickupCollectCallbackInit(mod);
  postPickupInitLateCallbackInit(mod);
  postPickupStateChangedCallbackInit(mod);
  postPlayerChangeHealthCallbackInit(mod);
  postPlayerChangeTypeCallbackInit(mod);
  postPlayerFatalDamageCallbackInit(mod);
  postPlayerInitLateCallbackInit(mod);
  postPlayerReorderedCallbacksInit(mod);
  postProjectileInitLateCallbackInit(mod);
  postPurchaseCallbackInit(mod);
  postRoomClearChangedCallbackInit(mod);
  postSacrificeCallbackInit(mod);
  postSlotInitUpdateCallbacksInit(mod);
  postSlotRenderCallbacksInit(mod);
  postTearInitLateCallbackInit(mod);
  postTearInitVeryLateCallbackInit(mod);
  postTransformationCallbackInit(mod);
  postTrinketBreakCallbackInit(mod);
  preBerserkDeathCallbackInit(mod);
  preNewLevelCallbackInit(mod);
  reorderedCallbacksInit(mod);
}
