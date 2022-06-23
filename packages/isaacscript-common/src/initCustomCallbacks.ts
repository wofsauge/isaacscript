import { customReviveCallbacksInit } from "./callbacks/customRevive";
import { itemPickupCallbacksInit } from "./callbacks/itemPickup";
import { postBombInitLateCallbackInit } from "./callbacks/postBombInitLate";
import { postBoneSwingCallbackInit } from "./callbacks/postBoneSwing";
import { postCollectibleInitFirstCallbackInit } from "./callbacks/postCollectibleInitFirst";
import { postCursedTeleportCallbackInit } from "./callbacks/postCursedTeleport";
import { postCustomDoorEnterCallbackInit } from "./callbacks/postCustomDoorEnter";
import { postDoorRenderInit } from "./callbacks/postDoorRender";
import { postDoorUpdateInit } from "./callbacks/postDoorUpdate";
import { postEffectInitLateCallbackInit } from "./callbacks/postEffectInitLate";
import { postEffectStateChangedCallbackInit } from "./callbacks/postEffectStateChanged";
import { postEsauJrCallbacksInit } from "./callbacks/postEsauJr";
import { postFamiliarInitLateCallbackInit } from "./callbacks/postFamiliarInitLate";
import { postFamiliarStateChangedCallbackInit } from "./callbacks/postFamiliarStateChanged";
import { postFlipCallbacksInit } from "./callbacks/postFlip";
import { postGreedModeWaveCallbackInit } from "./callbacks/postGreedModeWave";
import { postGridEntityCallbacksInit } from "./callbacks/postGridEntity";
import { postGridEntityCollisionInit } from "./callbacks/postGridEntityCollision";
import { postGridEntityRenderInit } from "./callbacks/postGridEntityRender";
import { postHolyMantleRemovedCallbackInit } from "./callbacks/postHolyMantleRemoved";
import { postItemDischargeCallbackInit } from "./callbacks/postItemDischarged";
import { postKnifeInitLateCallbackInit } from "./callbacks/postKnifeInitLate";
import { postLaserInitLateCallbackInit } from "./callbacks/postLaserInitLate";
import { postNPCInitLateCallbackInit } from "./callbacks/postNPCInitLate";
import { postNPCStateChangedCallbackInit } from "./callbacks/postNPCStateChanged";
import { postPickupCollectCallbackInit } from "./callbacks/postPickupCollect";
import { postPickupInitFirstCallbackInit } from "./callbacks/postPickupInitFirst";
import { postPickupInitLateCallbackInit } from "./callbacks/postPickupInitLate";
import { postPickupStateChangedCallbackInit } from "./callbacks/postPickupStateChanged";
import { postPitRenderInit } from "./callbacks/postPitRender";
import { postPitUpdateInit } from "./callbacks/postPitUpdate";
import { postPlayerChangeHealthCallbackInit } from "./callbacks/postPlayerChangeHealth";
import { postPlayerChangeTypeCallbackInit } from "./callbacks/postPlayerChangeType";
import { postPlayerCollectibleCallbackInit } from "./callbacks/postPlayerCollectible";
import { postPlayerFatalDamageCallbackInit } from "./callbacks/postPlayerFatalDamage";
import { postPlayerInitLateCallbackInit } from "./callbacks/postPlayerInitLate";
import { postPlayerReorderedCallbacksInit } from "./callbacks/postPlayerReordered";
import { postPoopRenderInit } from "./callbacks/postPoopRender";
import { postPoopUpdateInit } from "./callbacks/postPoopUpdate";
import { postPressurePlateRenderInit } from "./callbacks/postPressurePlateRender";
import { postPressurePlateUpdateInit } from "./callbacks/postPressurePlateUpdate";
import { postProjectileInitLateCallbackInit } from "./callbacks/postProjectileInitLate";
import { postPurchaseCallbackInit } from "./callbacks/postPurchase";
import { postRockRenderInit } from "./callbacks/postRockRender";
import { postRockUpdateInit } from "./callbacks/postRockUpdate";
import { postRoomClearChangedCallbackInit } from "./callbacks/postRoomClearChanged";
import { postSacrificeCallbackInit } from "./callbacks/postSacrifice";
import { postSlotDestroyedCallbacksInit } from "./callbacks/postSlotDestroyed";
import { postSlotInitUpdateCallbacksInit } from "./callbacks/postSlotInitUpdate";
import { postSlotRenderCallbacksInit } from "./callbacks/postSlotRender";
import { postSpikesRenderInit } from "./callbacks/postSpikesRender";
import { postSpikesUpdateInit } from "./callbacks/postSpikesUpdate";
import { postTearInitLateCallbackInit } from "./callbacks/postTearInitLate";
import { postTearInitVeryLateCallbackInit } from "./callbacks/postTearInitVeryLate";
import { postTNTRenderInit } from "./callbacks/postTNTRender";
import { postTNTUpdateInit } from "./callbacks/postTNTUpdate";
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
  postDoorRenderInit(mod);
  postDoorUpdateInit(mod);
  postEffectInitLateCallbackInit(mod);
  postEffectStateChangedCallbackInit(mod);
  postEsauJrCallbacksInit(mod);
  postFamiliarInitLateCallbackInit(mod);
  postFamiliarStateChangedCallbackInit(mod);
  postFlipCallbacksInit(mod);
  postGreedModeWaveCallbackInit(mod);
  postGridEntityCallbacksInit(mod);
  postGridEntityCollisionInit(mod);
  postGridEntityRenderInit(mod);
  postHolyMantleRemovedCallbackInit(mod);
  postItemDischargeCallbackInit(mod);
  postLaserInitLateCallbackInit(mod);
  postKnifeInitLateCallbackInit(mod);
  postNPCInitLateCallbackInit(mod);
  postNPCStateChangedCallbackInit(mod);
  postPickupCollectCallbackInit(mod);
  postPickupInitFirstCallbackInit(mod);
  postPickupInitLateCallbackInit(mod);
  postPickupStateChangedCallbackInit(mod);
  postPitRenderInit(mod);
  postPitUpdateInit(mod);
  postPlayerChangeHealthCallbackInit(mod);
  postPlayerChangeTypeCallbackInit(mod);
  postPlayerCollectibleCallbackInit(mod);
  postPlayerFatalDamageCallbackInit(mod);
  postPlayerInitLateCallbackInit(mod);
  postPlayerReorderedCallbacksInit(mod);
  postPoopRenderInit(mod);
  postPoopUpdateInit(mod);
  postPressurePlateRenderInit(mod);
  postPressurePlateUpdateInit(mod);
  postProjectileInitLateCallbackInit(mod);
  postPurchaseCallbackInit(mod);
  postRockRenderInit(mod);
  postRockUpdateInit(mod);
  postRoomClearChangedCallbackInit(mod);
  postSacrificeCallbackInit(mod);
  postSlotDestroyedCallbacksInit(mod);
  postSlotInitUpdateCallbacksInit(mod);
  postSlotRenderCallbacksInit(mod);
  postSpikesRenderInit(mod);
  postSpikesUpdateInit(mod);
  postTearInitLateCallbackInit(mod);
  postTearInitVeryLateCallbackInit(mod);
  postTNTRenderInit(mod);
  postTNTUpdateInit(mod);
  postTransformationCallbackInit(mod);
  postTrinketBreakCallbackInit(mod);
  preBerserkDeathCallbackInit(mod);
  preNewLevelCallbackInit(mod);
  reorderedCallbacksInit(mod);
}
